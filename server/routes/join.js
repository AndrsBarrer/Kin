import { Router } from 'express';
import pool from '../db/pool.js';
import { createMagicLink, verifyMagicToken, createSessionToken, hashPassword } from '../services/auth.js';
import { logAction } from '../services/audit.js';

const router = Router();

/**
 * GET /api/join/verify?token=...
 * Public endpoint. Verifies an invite_token and returns basic profile info.
 */
router.get('/verify', async (req, res, next) => {
  try {
    const { token } = req.query;
    if (!token) return res.status(400).json({ error: 'Token is required' });

    const { rows } = await pool.query(
      `SELECT id, first_name, last_name, maiden_name, tree_id, claimed_by
       FROM profiles
       WHERE invite_token = $1 AND deleted_at IS NULL`,
      [token]
    );

    if (rows.length === 0) {
      return res.status(404).json({ error: 'Invalid or expired invite token' });
    }

    const profile = rows[0];
    if (profile.claimed_by) {
      return res.status(409).json({ error: 'This profile has already been claimed' });
    }

    res.json({
      id: profile.id,
      first_name: profile.first_name,
      last_name: profile.last_name,
      maiden_name: profile.maiden_name,
      tree_id: profile.tree_id,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/join/claim
 * Body: { token, email, displayName }
 * Creates a user account (or finds existing), claims the profile,
 * adds the user as a tree member, and returns a session token.
 */
router.post('/claim', async (req, res, next) => {
  try {
    const { token, email, displayName, password } = req.body;
    if (!token || !email || !password) {
      return res.status(400).json({ error: 'token, email, and password are required' });
    }
    if (password.length < 8) {
      return res.status(400).json({ error: 'Password must be at least 8 characters' });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Verify the invite token
    const { rows: profileRows } = await pool.query(
      `SELECT id, tree_id, claimed_by FROM profiles
       WHERE invite_token = $1 AND deleted_at IS NULL`,
      [token]
    );

    if (profileRows.length === 0) {
      return res.status(404).json({ error: 'Invalid invite token' });
    }

    const profile = profileRows[0];
    if (profile.claimed_by) {
      return res.status(409).json({ error: 'Profile already claimed' });
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      // Hash password
      const passwordHash = await hashPassword(password);

      // Upsert user
      const { rows: [user] } = await client.query(
        `INSERT INTO users (email, display_name, password_hash, email_verified_at)
         VALUES ($1, $2, $3, now())
         ON CONFLICT (email) DO UPDATE SET
           display_name = COALESCE(NULLIF($2, ''), users.display_name),
           password_hash = COALESCE($3, users.password_hash)
         RETURNING *`,
        [normalizedEmail, displayName || null, passwordHash]
      );

      // Claim the profile
      await client.query(
        `UPDATE profiles SET claimed_by = $1, invite_token = NULL
         WHERE id = $2`,
        [user.id, profile.id]
      );

      // Add user as tree member (contributor)
      await client.query(
        `INSERT INTO tree_members (tree_id, user_id, role)
         VALUES ($1, $2, 'contributor')
         ON CONFLICT (tree_id, user_id) DO NOTHING`,
        [profile.tree_id, user.id]
      );

      await client.query('COMMIT');

      // Create session
      const sessionToken = createSessionToken(user.id);

      logAction(user.id, 'profile.claim', 'profile', profile.id, null, { email: normalizedEmail });
      console.log(`[Kin] Profile ${profile.id} claimed by ${normalizedEmail}`);

      res.json({
        user: {
          id: user.id,
          email: user.email,
          displayName: user.display_name,
        },
        token: sessionToken,
        profileId: profile.id,
      });
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
