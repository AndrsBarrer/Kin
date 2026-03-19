import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { getProfilePermissionContext } from '../middleware/auth.js';
import { acceptProposal, rejectProposal, getPendingProposals } from '../services/proposals.js';
import { logAction } from '../services/audit.js';

const router = Router();

function getFrontendUrl() {
  return (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');
}

async function resolveProposalAction(resolver, actionToken, logName) {
  const result = await resolver(actionToken);
  if (!result) return null;
  logAction(null, logName, 'proposal', result.id, null, { actionToken });
  return result;
}

/**
 * GET /api/proposals?profileId=...
 * Get pending proposals for a profile (owner only).
 */
router.get('/', requireAuth, async (req, res, next) => {
  try {
    const { profileId } = req.query;
    if (!profileId) return res.status(400).json({ error: 'profileId query param required' });

    const profile = await getProfilePermissionContext(profileId, req.user.id);
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    if (!profile.tree_role || (profile.claimed_by !== req.user.id && !['admin', 'steward'].includes(profile.tree_role))) {
      return res.status(403).json({ error: 'Only the profile owner, admin, or steward can review proposals' });
    }

    const proposals = await getPendingProposals(profileId);
    res.json(proposals);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/proposals/:actionToken/accept
 * Accept a proposal via its one-time action token.
 */
router.post('/:actionToken/accept', async (req, res, next) => {
  try {
    const result = await resolveProposalAction(acceptProposal, req.params.actionToken, 'proposal.accept');
    if (!result) return res.status(404).json({ error: 'Proposal not found or already resolved' });
    res.json({ message: 'Proposal accepted', proposal: result });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/proposals/:actionToken/reject
 * Reject a proposal via its one-time action token.
 */
router.post('/:actionToken/reject', async (req, res, next) => {
  try {
    const result = await resolveProposalAction(rejectProposal, req.params.actionToken, 'proposal.reject');
    if (!result) return res.status(404).json({ error: 'Proposal not found or already resolved' });
    res.json({ message: 'Proposal rejected', proposal: result });
  } catch (err) {
    next(err);
  }
});

router.get('/:actionToken/accept', async (req, res, next) => {
  try {
    const result = await resolveProposalAction(acceptProposal, req.params.actionToken, 'proposal.accept');
    if (!result) {
      return res.redirect(`${getFrontendUrl()}/?proposal=not-found`);
    }
    res.redirect(`${getFrontendUrl()}/?proposal=accepted`);
  } catch (err) {
    next(err);
  }
});

router.get('/:actionToken/reject', async (req, res, next) => {
  try {
    const result = await resolveProposalAction(rejectProposal, req.params.actionToken, 'proposal.reject');
    if (!result) {
      return res.redirect(`${getFrontendUrl()}/?proposal=not-found`);
    }
    res.redirect(`${getFrontendUrl()}/?proposal=rejected`);
  } catch (err) {
    next(err);
  }
});

export default router;
