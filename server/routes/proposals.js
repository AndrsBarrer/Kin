import { Router } from 'express';
import { requireAuth } from '../middleware/auth.js';
import { acceptProposal, rejectProposal, getPendingProposals } from '../services/proposals.js';
import { logAction } from '../services/audit.js';

const router = Router();

/**
 * GET /api/proposals?profileId=...
 * Get pending proposals for a profile (owner only).
 */
router.get('/', requireAuth, async (req, res, next) => {
  try {
    const { profileId } = req.query;
    if (!profileId) return res.status(400).json({ error: 'profileId query param required' });
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
    const result = await acceptProposal(req.params.actionToken);
    if (!result) return res.status(404).json({ error: 'Proposal not found or already resolved' });
    logAction(null, 'proposal.accept', 'proposal', result.id, null, { actionToken: req.params.actionToken });
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
    const result = await rejectProposal(req.params.actionToken);
    if (!result) return res.status(404).json({ error: 'Proposal not found or already resolved' });
    logAction(null, 'proposal.reject', 'proposal', result.id, null, { actionToken: req.params.actionToken });
    res.json({ message: 'Proposal rejected', proposal: result });
  } catch (err) {
    next(err);
  }
});

export default router;
