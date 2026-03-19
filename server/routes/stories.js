import { Router } from 'express';
import pool from '../db/pool.js';
import { requireAuth } from '../middleware/auth.js';
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

    const { rows: [story] } = await pool.query(
      `INSERT INTO stories (profile_id, title, body, written_by)
       VALUES ($1, $2, $3, $4)
       RETURNING *`,
      [profileId, title, body, req.user.id]
    );

    logAction(req.user.id, 'story.create', 'story', story.id, null, { profileId, title });
    res.status(201).json(story);
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
    const { rows } = await pool.query(
      `UPDATE stories
       SET title = COALESCE($2, title), body = COALESCE($3, body)
       WHERE id = $1 AND deleted_at IS NULL
       RETURNING *`,
      [req.params.id, title, body]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Story not found' });
    logAction(req.user.id, 'story.update', 'story', req.params.id, null, { title });
    res.json(rows[0]);
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
