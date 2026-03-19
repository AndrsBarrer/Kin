import { Router } from 'express';
import cryptoRandomString from 'crypto-random-string';
import pool from '../db/pool.js';
import { requireAuth, requireTreeMember, requireRole } from '../middleware/auth.js';
import { aggregateFacts, addFact } from '../services/facts.js';
import { applyPrivacy } from '../middleware/privacy.js';
import { findDuplicates } from '../services/duplicates.js';
import { logAction } from '../services/audit.js';

const router = Router();

/**
 * GET /api/profiles/duplicates?treeId=...&firstName=...&lastName=...
 * Live duplicate check endpoint for the add person form.
 */
router.get('/duplicates', requireAuth, async (req, res, next) => {
  try {
    const { treeId, firstName, lastName } = req.query;
    if (!treeId || !firstName || !lastName) {
      return res.json([]);
    }
    const dupes = await findDuplicates(treeId, firstName, lastName);
    res.json(dupes);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/profiles/public/:slug
 * Public profile view — returns only public-tier facts for non-living profiles,
 * or basic name info for living profiles.
 */
router.get('/public/:slug', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM profiles WHERE public_slug = $1 AND deleted_at IS NULL',
      [req.params.slug]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Profile not found' });

    const profile = rows[0];
    const allFacts = await aggregateFacts(profile.id, ['public']);

    res.json({
      firstName: profile.first_name,
      lastName: profile.last_name,
      maidenName: profile.maiden_name,
      isLiving: profile.is_living,
      facts: allFacts,
      publicSlug: profile.public_slug,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/profiles?treeId=...
 * List all profiles in a tree with aggregated public facts.
 */
router.get('/', async (req, res, next) => {
  try {
    const { treeId } = req.query;
    if (!treeId) return res.status(400).json({ error: 'treeId query param required' });

    // Check membership for privacy context
    let treeRole = null;
    if (req.user) {
      const { rows } = await pool.query(
        'SELECT role FROM tree_members WHERE tree_id = $1 AND user_id = $2',
        [treeId, req.user.id]
      );
      if (rows.length > 0) treeRole = rows[0].role;
    }
    req.treeRole = treeRole;

    const { rows: profiles } = await pool.query(
      `SELECT id, tree_id, first_name, last_name, maiden_name, is_living, claimed_by, invite_token, public_slug, metadata
       FROM profiles
       WHERE tree_id = $1 AND deleted_at IS NULL
       ORDER BY last_name, first_name`,
      [treeId]
    );

    // Aggregate facts with privacy filtering
    const result = await Promise.all(
      profiles.map(async (p) => {
        const allFacts = await aggregateFacts(p.id);
        const visibleFacts = applyPrivacy(req, p, allFacts);
        return { ...p, facts: visibleFacts };
      })
    );

    res.json(result);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/profiles/:id
 * Single profile with facts.
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT * FROM profiles WHERE id = $1 AND deleted_at IS NULL`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Profile not found' });

    const profile = rows[0];

    // Resolve tree membership for privacy
    if (req.user) {
      const { rows: membership } = await pool.query(
        'SELECT role FROM tree_members WHERE tree_id = $1 AND user_id = $2',
        [profile.tree_id, req.user.id]
      );
      req.treeRole = membership[0]?.role || null;
    }

    const allFacts = await aggregateFacts(profile.id);
    const visibleFacts = applyPrivacy(req, profile, allFacts);

    res.json({ ...profile, facts: visibleFacts });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/profiles
 * Create a new profile in a tree.
 */
router.post('/', requireAuth, requireTreeMember, async (req, res, next) => {
  try {
    const { treeId, firstName, lastName, maidenName, isLiving, metadata } = req.body;
    if (!firstName || !lastName) {
      return res.status(400).json({ error: 'firstName and lastName are required' });
    }

    // Check for duplicates
    const dupes = await findDuplicates(treeId, firstName, lastName);
    if (dupes.length > 0 && !req.body.skipDuplicateCheck) {
      return res.status(409).json({
        warning: 'Potential duplicates found',
        duplicates: dupes,
        message: 'Set skipDuplicateCheck: true to proceed',
      });
    }

    // Generate a unique invite token for this profile
    const inviteToken = cryptoRandomString({ length: 48, type: 'url-safe' });

    // Generate a public slug from the name
    const baseSlug = `${firstName}-${lastName}`.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
    const slugSuffix = cryptoRandomString({ length: 6, type: 'alphanumeric' }).toLowerCase();
    const publicSlug = `${baseSlug}-${slugSuffix}`;

    // Only store non-bio metadata (e.g. branch); biography fields go into facts table
    const safeMetadata = metadata ? { branch: metadata.branch } : {};

    const { rows: [profile] } = await pool.query(
      `INSERT INTO profiles (tree_id, first_name, last_name, maiden_name, is_living, metadata, invite_token, public_slug)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [treeId, firstName, lastName, maidenName || null, isLiving ?? true, safeMetadata, inviteToken, publicSlug]
    );

    // Write bio fields from metadata as EAV fact rows
    if (metadata) {
      const bioFacts = [
        ['gender', metadata.gender],
        ['birth_year', metadata.birth != null ? String(metadata.birth) : null],
        ['death_year', metadata.death != null ? String(metadata.death) : null],
        ['biography', metadata.bio],
      ];
      for (const [factType, value] of bioFacts) {
        if (value) {
          await addFact(profile.id, { factType, value, privacy: 'family' }, req.user.id);
        }
      }
    }

    logAction(req.user.id, 'profile.create', 'profile', profile.id, null, { firstName, lastName });
    console.log(`[Kin] Profile created: ${firstName} ${lastName} (${profile.id}) — invite token generated`);

    res.status(201).json(profile);
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/profiles/:id
 * Update a profile's basic info.
 */
router.put('/:id', requireAuth, async (req, res, next) => {
  try {
    const { firstName, lastName, maidenName, isLiving, metadata } = req.body;

    const { rows } = await pool.query(
      `UPDATE profiles
       SET first_name = COALESCE($2, first_name),
           last_name  = COALESCE($3, last_name),
           maiden_name = COALESCE($4, maiden_name),
           is_living = COALESCE($5, is_living),
           metadata = COALESCE($6, metadata)
       WHERE id = $1 AND deleted_at IS NULL
       RETURNING *`,
      [req.params.id, firstName, lastName, maidenName, isLiving, metadata]
    );

    if (rows.length === 0) return res.status(404).json({ error: 'Profile not found' });
    logAction(req.user.id, 'profile.update', 'profile', req.params.id, null, { firstName, lastName, maidenName });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/profiles/:id/claim
 * Claim a profile (associate it with the authenticated user).
 */
router.post('/:id/claim', requireAuth, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `UPDATE profiles SET claimed_by = $2
       WHERE id = $1 AND claimed_by IS NULL AND deleted_at IS NULL
       RETURNING *`,
      [req.params.id, req.user.id]
    );

    if (rows.length === 0) {
      return res.status(409).json({ error: 'Profile already claimed or not found' });
    }
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/profiles/:id
 * Soft-delete a profile. Requires admin or steward role.
 */
router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    // Look up the profile to find tree_id for role check
    const { rows: [profile] } = await pool.query(
      'SELECT id, tree_id, first_name, last_name FROM profiles WHERE id = $1 AND deleted_at IS NULL',
      [req.params.id]
    );
    if (!profile) return res.status(404).json({ error: 'Profile not found' });

    const { rows: membership } = await pool.query(
      'SELECT role FROM tree_members WHERE tree_id = $1 AND user_id = $2',
      [profile.tree_id, req.user.id]
    );
    if (membership.length === 0 || !['admin', 'steward'].includes(membership[0].role)) {
      return res.status(403).json({ error: 'Requires admin or steward role' });
    }

    await pool.query(
      'UPDATE profiles SET deleted_at = now() WHERE id = $1',
      [req.params.id]
    );
    logAction(req.user.id, 'profile.delete', 'profile', req.params.id, { firstName: profile.first_name, lastName: profile.last_name }, null);
    res.json({ message: 'Profile deleted' });
  } catch (err) {
    next(err);
  }
});

export default router;
