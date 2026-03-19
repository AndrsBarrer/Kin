import { Router } from 'express';
import pool from '../db/pool.js';
import { requireAuth, getProfilePermissionContext, getTreeRole } from '../middleware/auth.js';
import { logAction } from '../services/audit.js';

const router = Router();

/**
 * GET /api/stories?profileId=...
 * List all stories for a profile.
 */
router.get('/', async (req, res, next) => {
  try {
    const { profileId } = req.query;
    if (!profileId) return res.status(400).json({ error: 'profileId query param required' });

    const { rows } = await pool.query(
      `SELECT s.*, u.display_name AS author_name
       FROM stories s
       LEFT JOIN users u ON u.id = s.written_by
       WHERE s.profile_id = $1 AND s.deleted_at IS NULL
       ORDER BY s.created_at DESC`,
      [profileId]
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/stories/:id
 * Get a single story.
 */
router.get('/:id', async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT s.*, u.display_name AS author_name
       FROM stories s
       LEFT JOIN users u ON u.id = s.written_by
       WHERE s.id = $1 AND s.deleted_at IS NULL`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Story not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/stories
 * Create a new story for a profile.
 */
router.post('/', requireAuth, async (req, res, next) => {
  try {
    const { profileId, title, body } = req.body;
    if (!profileId || !title || !body) {
      return res.status(400).json({ error: 'profileId, title, and body are required' });
    }

    const profile = await getProfilePermissionContext(profileId, req.user.id);
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    if (!profile.tree_role) {
      return res.status(403).json({ error: 'You must be a tree member to add stories' });
    }

    const { rows: [story] } = await pool.query(
      `INSERT INTO stories (profile_id, title, body, written_by)
       VALUES ($1, $2, $3, $4)
       RETURNING id, profile_id, title, body, written_by, is_featured, created_at`,
      [profileId, title, body, req.user.id]
    );

    logAction(req.user.id, 'story.create', 'story', story.id, null, { profileId, title });
    res.status(201).json({ ...story, author_name: req.user.display_name || null });
  } catch (err) {
    next(err);
  }
});

/**
 * PUT /api/stories/:id
 * Update a story.
 */
router.put('/:id', requireAuth, async (req, res, next) => {
  try {
    const { title, body } = req.body;
    const { rows: existingRows } = await pool.query(
      `SELECT s.id, s.written_by, p.id AS profile_id, p.claimed_by, p.tree_id
       FROM stories s
       JOIN profiles p ON p.id = s.profile_id
       WHERE s.id = $1 AND s.deleted_at IS NULL AND p.deleted_at IS NULL`,
      [req.params.id]
    );
    if (existingRows.length === 0) return res.status(404).json({ error: 'Story not found' });

    const story = existingRows[0];
    const treeRole = await getTreeRole(story.tree_id, req.user.id);
    if (!treeRole) {
      return res.status(403).json({ error: 'You must be a tree member to update stories' });
    }
    const canManage = story.written_by === req.user.id
      || story.claimed_by === req.user.id
      || ['admin', 'steward'].includes(treeRole);
    if (!canManage) {
      return res.status(403).json({ error: 'Only the story author, profile owner, admin, or steward can update this story' });
    }

    const { rows: updatedRows } = await pool.query(
      `UPDATE stories
       SET title = COALESCE($2, title), body = COALESCE($3, body)
       WHERE id = $1 AND deleted_at IS NULL
       RETURNING *`,
      [req.params.id, title, body]
    );
    if (updatedRows.length === 0) return res.status(404).json({ error: 'Story not found' });
    logAction(req.user.id, 'story.update', 'story', req.params.id, null, { title });
    res.json(updatedRows[0]);
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/stories/:id
 * Soft-delete a story.
 */
router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    const { rows: storyRows } = await pool.query(
      `SELECT s.id, s.written_by, p.claimed_by, p.tree_id
       FROM stories s
       JOIN profiles p ON p.id = s.profile_id
       WHERE s.id = $1 AND s.deleted_at IS NULL AND p.deleted_at IS NULL`,
      [req.params.id]
    );
    if (storyRows.length === 0) return res.status(404).json({ error: 'Story not found' });

    const story = storyRows[0];
    const treeRole = await getTreeRole(story.tree_id, req.user.id);
    if (!treeRole) {
      return res.status(403).json({ error: 'You must be a tree member to delete stories' });
    }
    const canManage = story.written_by === req.user.id
      || story.claimed_by === req.user.id
      || ['admin', 'steward'].includes(treeRole);
    if (!canManage) {
      return res.status(403).json({ error: 'Only the story author, profile owner, admin, or steward can delete this story' });
    }

    const { rows } = await pool.query(
      `UPDATE stories SET deleted_at = now()
       WHERE id = $1 AND deleted_at IS NULL
       RETURNING id`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Story not found' });
    logAction(req.user.id, 'story.delete', 'story', req.params.id, null, null);
    res.json({ message: 'Story deleted' });
  } catch (err) {
    next(err);
  }
});

export default router;
