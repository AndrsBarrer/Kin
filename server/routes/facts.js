import { Router } from 'express';
import pool from '../db/pool.js';
import { requireAuth } from '../middleware/auth.js';
import { addFact, updateFact, deleteFact } from '../services/facts.js';
import { createProposal } from '../services/proposals.js';
import { logAction } from '../services/audit.js';
import { sendProposalNotification } from '../services/email.js';

const router = Router();

/**
 * POST /api/facts
 * Add a fact to a profile. If profile is claimed by someone else, creates a proposal.
 */
router.post('/', requireAuth, async (req, res, next) => {
  try {
    const { profileId, factType, value, valueStructured, privacy } = req.body;
    if (!profileId || !factType) {
      return res.status(400).json({ error: 'profileId and factType are required' });
    }

    // Check if profile is claimed by someone else
    const { rows: [profile] } = await pool.query(
      'SELECT p.claimed_by, p.first_name, p.last_name, u.email AS owner_email FROM profiles p LEFT JOIN users u ON u.id = p.claimed_by WHERE p.id = $1 AND p.deleted_at IS NULL',
      [profileId]
    );

    if (!profile) return res.status(404).json({ error: 'Profile not found' });

    if (profile.claimed_by && profile.claimed_by !== req.user.id) {
      // Create a proposal instead
      const proposal = await createProposal(profileId, req.user.id, {
        factType,
        value,
        structured: valueStructured,
      });
      if (profile.owner_email) {
        sendProposalNotification(profile.owner_email, req.user.displayName || 'Someone', `${profile.first_name} ${profile.last_name}`, `${factType}: ${value}`);
      }
      return res.status(202).json({
        message: 'Profile is claimed. Your edit has been submitted as a proposal.',
        proposal,
      });
    }

    const fact = await addFact(profileId, { factType, value, valueStructured, privacy }, req.user.id);
    logAction(req.user.id, 'fact.create', 'fact', fact.id, null, { profileId, factType, value });
    res.status(201).json(fact);
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/facts/:id
 * Update a fact. If fact belongs to a claimed profile, may create a proposal.
 */
router.put('/:id', requireAuth, async (req, res, next) => {
  try {
    const { value, valueStructured, privacy } = req.body;

    // Check ownership
    const { rows } = await pool.query(
      `SELECT f.id, f.profile_id, f.is_locked, p.claimed_by, p.first_name, p.last_name, u.email AS owner_email
       FROM facts f
       JOIN profiles p ON p.id = f.profile_id
       LEFT JOIN users u ON u.id = p.claimed_by
       WHERE f.id = $1 AND f.deleted_at IS NULL`,
      [req.params.id]
    );

    if (rows.length === 0) return res.status(404).json({ error: 'Fact not found' });

    const { claimed_by, profile_id, first_name, last_name, owner_email } = rows[0];

    // Check if fact is locked
    if (rows[0].is_locked) {
      return res.status(403).json({ error: 'This fact is locked and cannot be edited' });
    }

    if (claimed_by && claimed_by !== req.user.id) {
      const proposal = await createProposal(profile_id, req.user.id, {
        existingFactId: req.params.id,
        value,
        structured: valueStructured,
      });
      if (owner_email) {
        sendProposalNotification(owner_email, req.user.displayName || 'Someone', `${first_name} ${last_name}`, `Updated value: ${value}`);
      }
      return res.status(202).json({
        message: 'Edit submitted as a proposal to the profile owner.',
        proposal,
      });
    }

    const fact = await updateFact(req.params.id, { value, valueStructured, privacy });
    if (!fact) return res.status(404).json({ error: 'Fact not found' });
    logAction(req.user.id, 'fact.update', 'fact', req.params.id, null, { value });
    res.json(fact);
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/facts/:id
 * Soft-delete a fact. Cannot delete locked facts.
 */
router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    const { rows: lockCheck } = await pool.query(
      'SELECT is_locked FROM facts WHERE id = $1 AND deleted_at IS NULL',
      [req.params.id]
    );
    if (lockCheck.length === 0) return res.status(404).json({ error: 'Fact not found' });
    if (lockCheck[0].is_locked) {
      return res.status(403).json({ error: 'This fact is locked and cannot be deleted' });
    }

    await deleteFact(req.params.id);
    logAction(req.user.id, 'fact.delete', 'fact', req.params.id, null, null);
    res.json({ message: 'Fact deleted' });
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/facts/:id/verify
 * Toggle verified_by_owner on a fact. Only the profile owner can verify.
 */
router.put('/:id/verify', requireAuth, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT f.id, f.verified_by_owner, p.claimed_by
       FROM facts f JOIN profiles p ON p.id = f.profile_id
       WHERE f.id = $1 AND f.deleted_at IS NULL`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Fact not found' });
    if (rows[0].claimed_by !== req.user.id) {
      return res.status(403).json({ error: 'Only the profile owner can verify facts' });
    }

    const newValue = rows[0].verified_by_owner ? 0 : 1;
    const { rows: [updated] } = await pool.query(
      'UPDATE facts SET verified_by_owner = $2 WHERE id = $1 RETURNING *',
      [req.params.id, newValue]
    );
    logAction(req.user.id, 'fact.verify', 'fact', req.params.id, null, { verified: newValue });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/facts/:id/lock
 * Toggle is_locked on a fact. Only the profile owner can lock.
 */
router.put('/:id/lock', requireAuth, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT f.id, f.is_locked, p.claimed_by
       FROM facts f JOIN profiles p ON p.id = f.profile_id
       WHERE f.id = $1 AND f.deleted_at IS NULL`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Fact not found' });
    if (rows[0].claimed_by !== req.user.id) {
      return res.status(403).json({ error: 'Only the profile owner can lock facts' });
    }

    const newValue = rows[0].is_locked ? 0 : 1;
    const { rows: [updated] } = await pool.query(
      'UPDATE facts SET is_locked = $2 WHERE id = $1 RETURNING *',
      [req.params.id, newValue]
    );
    logAction(req.user.id, 'fact.lock', 'fact', req.params.id, null, { locked: newValue });
    res.json(updated);
  } catch (err) {
    next(err);
  }
});

export default router;
