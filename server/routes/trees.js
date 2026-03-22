import { Router } from 'express';
import pool from '../db/pool.js';
import { requireAuth, requireTreeMember, requireRole } from '../middleware/auth.js';
import { issueTreeAccessCode } from '../services/treeAccess.js';

const router = Router();

/**
 * POST /api/trees
 * Create a new family tree. Authenticated user becomes admin.
 */
router.post('/', requireAuth, async (req, res, next) => {
  try {
    const { name, description } = req.body;
    if (!name) return res.status(400).json({ error: 'Tree name is required' });

    const client = await pool.connect();
    try {
      await client.query('BEGIN');
      const { rows: [tree] } = await client.query(
        `INSERT INTO trees (name, description, created_by)
         VALUES ($1, $2, $3) RETURNING *`,
        [name, description || null, req.user.id]
      );
      await client.query(
        `INSERT INTO tree_members (tree_id, user_id, role)
         VALUES ($1, $2, 'admin')`,
        [tree.id, req.user.id]
      );
      await client.query('COMMIT');
      res.status(201).json(tree);
    } catch (err) {
      await client.query('ROLLBACK');
      throw err;
    } finally {
      client.release();
    }
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/trees
 * List trees the authenticated user belongs to.
 */
router.get('/', requireAuth, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT t.*, tm.role
       FROM trees t
       JOIN tree_members tm ON tm.tree_id = t.id
       WHERE tm.user_id = $1 AND t.deleted_at IS NULL
       ORDER BY t.created_at DESC`,
      [req.user.id]
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/trees/:treeId
 * Get a single tree (must be a member).
 */
router.get('/:treeId', requireAuth, requireTreeMember, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      'SELECT * FROM trees WHERE id = $1 AND deleted_at IS NULL',
      [req.params.treeId]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Tree not found' });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
});

router.post('/:treeId/access-code', requireAuth, requireTreeMember, async (req, res, next) => {
  try {
    const accessCode = await issueTreeAccessCode(req.params.treeId, req.user.id);
    res.status(201).json({
      ...accessCode,
      treeLink: `${process.env.FRONTEND_URL || 'http://localhost:5173'}/tree/${req.params.treeId}`,
    });
  } catch (err) {
    next(err);
  }
});

router.delete('/:treeId', requireAuth, requireTreeMember, requireRole('admin'), async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `UPDATE trees
       SET deleted_at = now()
       WHERE id = $1 AND deleted_at IS NULL
       RETURNING id`,
      [req.params.treeId]
    );

    if (rows.length === 0) return res.status(404).json({ error: 'Tree not found' });

    res.json({ success: true, id: rows[0].id });
  } catch (err) {
    next(err);
  }
});

export default router;
