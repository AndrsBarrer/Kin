import { Router } from 'express';
import pool from '../db/pool.js';
import { createSessionToken, hashPassword } from '../services/auth.js';
import { requireAuth } from '../middleware/auth.js';
import { logAction } from '../services/audit.js';
import {
  buildProfileSlug,
  consumeTreeAccessCode,
  consumeTreeAccessCodeByCode,
  getTreePreview,
  splitDisplayName,
} from '../services/treeAccess.js';

const router = Router();

async function completeTreeAccessJoin(client, { treeId, code, email, displayName }) {
  const normalizedEmail = email.toLowerCase().trim();
  const normalizedDisplayName = displayName.trim();
  const { firstName, lastName } = splitDisplayName(normalizedDisplayName);
  const access = treeId
    ? await consumeTreeAccessCode(client, treeId, code)
    : await consumeTreeAccessCodeByCode(client, code);
  const resolvedTreeId = access.treeId;

  const { rows: [user] } = await client.query(
    `INSERT INTO users (email, display_name, email_verified_at)
     VALUES ($1, $2, now())
     ON CONFLICT (email) DO UPDATE SET
       display_name = COALESCE(NULLIF($2, ''), users.display_name),
       email_verified_at = COALESCE(users.email_verified_at, now())
     RETURNING *`,
    [normalizedEmail, normalizedDisplayName]
  );

  await client.query(
    `INSERT INTO tree_members (tree_id, user_id, role)
     VALUES ($1, $2, 'contributor')
     ON CONFLICT (tree_id, user_id) DO NOTHING`,
    [resolvedTreeId, user.id]
  );

  const { rows: existingProfiles } = await client.query(
    `SELECT id
     FROM profiles
     WHERE tree_id = $1 AND claimed_by = $2 AND deleted_at IS NULL
     LIMIT 1`,
    [resolvedTreeId, user.id]
  );

  let profileId = existingProfiles[0]?.id || null;
  let createdProfile = false;

  if (!profileId) {
    const publicSlug = buildProfileSlug(firstName, lastName);
    const { rows: [profile] } = await client.query(
      `INSERT INTO profiles (tree_id, first_name, last_name, is_living, claimed_by, metadata, public_slug)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id`,
      [resolvedTreeId, firstName, lastName, true, user.id, JSON.stringify({ branch: 'sibling' }), publicSlug]
    );
    profileId = profile.id;
    createdProfile = true;
  }

  return {
    sessionToken: createSessionToken(user.id),
    treeId: resolvedTreeId,
    user,
    profileId,
    createdProfile,
  };
}

router.get('/tree/:treeId', async (req, res, next) => {
  try {
    const tree = await getTreePreview(req.params.treeId);
    if (!tree) return res.status(404).json({ error: 'Tree not found' });
    res.json(tree);
  } catch (err) {
    next(err);
  }
});

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

/**
 * POST /api/join/claim-authenticated
 * Body: { token }
 * Claims a profile for the currently authenticated user.
 */
router.post('/claim-authenticated', requireAuth, async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: 'token is required' });

    const { rows: profileRows } = await pool.query(
      `SELECT id, tree_id, claimed_by FROM profiles
       WHERE invite_token = $1 AND deleted_at IS NULL`,
      [token]
    );

    if (profileRows.length === 0) {
      return res.status(404).json({ error: 'Invalid invite token' });
    }

    const profile = profileRows[0];
    if (profile.claimed_by && profile.claimed_by !== req.user.id) {
      return res.status(409).json({ error: 'Profile already claimed' });
    }

    const client = await pool.connect();
    try {
      await client.query('BEGIN');

      if (!profile.claimed_by) {
        await client.query(
          `UPDATE profiles SET claimed_by = $1, invite_token = NULL
           WHERE id = $2`,
          [req.user.id, profile.id]
        );
      }

      await client.query(
        `INSERT INTO tree_members (tree_id, user_id, role)
         VALUES ($1, $2, 'contributor')
         ON CONFLICT (tree_id, user_id) DO NOTHING`,
        [profile.tree_id, req.user.id]
      );

      await client.query('COMMIT');

      logAction(req.user.id, 'profile.claim', 'profile', profile.id, null, { email: req.user.email });

      res.json({ profileId: profile.id, claimed: true });
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

router.post('/tree-access', async (req, res, next) => {
  try {
    const { treeId, code, email, displayName } = req.body;
    if (!treeId || !code || !email || !displayName) {
      return res.status(400).json({ error: 'treeId, code, email, and displayName are required' });
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const result = await completeTreeAccessJoin(client, { treeId, code, email, displayName });

      await client.query('COMMIT');

      logAction(result.user.id, 'tree.join_via_code', 'tree', result.treeId, null, {
        email: email.toLowerCase().trim(),
        profileId: result.profileId,
      });

      res.json({
        user: {
          id: result.user.id,
          email: result.user.email,
          displayName: result.user.display_name,
        },
        token: result.sessionToken,
        treeId: result.treeId,
        profileId: result.profileId,
        createdProfile: result.createdProfile,
      });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (err) {
    next(err);
  }
});

router.post('/tree-access-code', async (req, res, next) => {
  try {
    const { code, email, displayName } = req.body;
    if (!code || !email || !displayName) {
      return res.status(400).json({ error: 'code, email, and displayName are required' });
    }

    const client = await pool.connect();

    try {
      await client.query('BEGIN');

      const result = await completeTreeAccessJoin(client, { code, email, displayName });

      await client.query('COMMIT');

      logAction(result.user.id, 'tree.join_via_code', 'tree', result.treeId, null, {
        email: email.toLowerCase().trim(),
        profileId: result.profileId,
      });

      res.json({
        user: {
          id: result.user.id,
          email: result.user.email,
          displayName: result.user.display_name,
        },
        token: result.sessionToken,
        treeId: result.treeId,
        profileId: result.profileId,
        createdProfile: result.createdProfile,
      });
    } catch (error) {
      await client.query('ROLLBACK');
      throw error;
    } finally {
      client.release();
    }
  } catch (err) {
    next(err);
  }
});

export default router;
