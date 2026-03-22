import { Router } from 'express';
import pool from '../db/pool.js';
import { createSessionToken } from '../services/auth.js';

const router = Router();

/**
 * POST /api/bootstrap
 * First-launch helper: creates a default local user and family tree
 * so the app is immediately usable without Magic Link auth.
 * Idempotent — if a session already exists and the user has trees, returns those.
 */
router.post('/', async (req, res, next) => {
  try {
    let bootstrapUser = req.user || null;

    // If the user is already authenticated and has trees, just return them
    if (req.user) {
      const { rows: trees } = await pool.query(
        `SELECT t.*, tm.role FROM trees t
         JOIN tree_members tm ON tm.tree_id = t.id
         WHERE tm.user_id = $1 AND t.deleted_at IS NULL
         ORDER BY t.created_at LIMIT 1`,
        [req.user.id]
      );
      if (trees.length > 0) {
        return res.json({ tree: trees[0], alreadySetUp: true, userId: req.user.id });
      }
    }

    if (!req.user) {
      const { rows: existingTrees } = await pool.query(
        `SELECT id FROM trees WHERE deleted_at IS NULL ORDER BY created_at LIMIT 1`
      );
      if (existingTrees.length > 0) {
        return res.status(409).json({
          error: 'Bootstrap is only available before the first tree is created',
        });
      }
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      if (!bootstrapUser) {
        // Create a local user (no email required)
        const { rows: [user] } = await client.query(
          `INSERT INTO users (email, display_name)
           VALUES ($1, $2) RETURNING *`,
          [`local-${Date.now()}@kin.local`, 'Family Historian']
        );
        bootstrapUser = user;
      }

      // Create the default tree
      const { rows: [tree] } = await client.query(
        `INSERT INTO trees (name, description, created_by)
         VALUES ($1, $2, $3) RETURNING *`,
        ['My Family Tree', 'Created automatically on first launch', bootstrapUser.id]
      );

      // Make the user an admin of the tree
      await client.query(
        `INSERT INTO tree_members (tree_id, user_id, role)
         VALUES ($1, $2, 'admin')`,
        [tree.id, bootstrapUser.id]
      );

      await client.query('COMMIT');

      const sessionToken = req.user ? null : createSessionToken(bootstrapUser.id);

      res.status(201).json({ tree, sessionToken, userId: bootstrapUser.id });
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

export default router;
