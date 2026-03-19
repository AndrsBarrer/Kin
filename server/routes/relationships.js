import { Router } from 'express';
import pool from '../db/pool.js';
import { requireAuth, requireTreeMember } from '../middleware/auth.js';
import { logAction } from '../services/audit.js';

const router = Router();

/**
 * GET /api/relationships?treeId=...
 * List all relationships in a tree.
 */
router.get('/', async (req, res, next) => {
  try {
    const { treeId } = req.query;
    if (!treeId) return res.status(400).json({ error: 'treeId query param required' });

    const { rows } = await pool.query(
      `SELECT r.*, 
              pa.first_name AS a_first, pa.last_name AS a_last,
              pb.first_name AS b_first, pb.last_name AS b_last
       FROM relationships r
       JOIN profiles pa ON pa.id = r.profile_a
       JOIN profiles pb ON pb.id = r.profile_b
       WHERE r.tree_id = $1 AND r.deleted_at IS NULL
       ORDER BY r.created_at`,
      [treeId]
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/relationships
 * Create a new relationship.
 */
router.post('/', requireAuth, requireTreeMember, async (req, res, next) => {
  try {
    const { treeId, type, profileA, profileB, roleA, roleB, startYear, endYear } = req.body;
    if (!type || !profileA || !profileB) {
      return res.status(400).json({ error: 'type, profileA, and profileB are required' });
    }
    if (profileA === profileB) {
      return res.status(400).json({ error: 'A relationship requires two different people' });
    }

    if (type === 'marriage') {
      const { rows: existingMarriages } = await pool.query(
        `SELECT id, profile_a, profile_b
         FROM relationships
         WHERE tree_id = $1
           AND type = 'marriage'
           AND deleted_at IS NULL
           AND ($2 IN (profile_a, profile_b) OR $3 IN (profile_a, profile_b))`,
        [treeId, profileA, profileB]
      );

      if (existingMarriages.length > 0) {
        return res.status(409).json({ error: 'One of these people is already linked to a spouse or partner' });
      }
    }

    const { rows: [rel] } = await pool.query(
      `INSERT INTO relationships (tree_id, type, profile_a, profile_b, role_a, role_b, start_year, end_year)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [treeId, type, profileA, profileB, roleA || null, roleB || null, startYear || null, endYear || null]
    );

    logAction(req.user.id, 'relationship.create', 'relationship', rel.id, null, { type, profileA, profileB });
    res.status(201).json(rel);
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/relationships/:id
 * Soft-delete a relationship.
 */
router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `UPDATE relationships SET deleted_at = now()
       WHERE id = $1 AND deleted_at IS NULL
       RETURNING id`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Relationship not found' });
    logAction(req.user.id, 'relationship.delete', 'relationship', req.params.id, null, null);
    res.json({ message: 'Relationship deleted' });
  } catch (err) {
    next(err);
  }
});

export default router;
