import { Router } from 'express';
import pool from '../db/pool.js';
import { createMagicLink, verifyMagicToken, createSessionToken, destroySession, verifyPassword } from '../services/auth.js';
import { sendMagicLinkEmail } from '../services/email.js';

const router = Router();

/**
 * POST /api/auth/magic-link
 * Body: { email }
 * Sends a magic link by email.
 */
router.post('/magic-link', async (req, res, next) => {
  try {
    const { email, displayName, claimToken, treeId } = req.body;
    if (!email) return res.status(400).json({ error: 'Email is required' });

    const { magicLink } = await createMagicLink(email, { displayName, claimToken, treeId });

    await sendMagicLinkEmail(email, magicLink, { displayName, claimToken, treeId });

    res.json({ message: 'Magic link sent. Check your email.' });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/auth/verify
 * Body: { token }
 * Verifies the magic link token and returns a session token.
 */
router.post('/verify', async (req, res, next) => {
  try {
    const { token } = req.body;
    if (!token) return res.status(400).json({ error: 'Token is required' });

    const user = await verifyMagicToken(token);
    if (!user) return res.status(401).json({ error: 'Invalid or expired token' });

    const sessionToken = createSessionToken(user.id);

    res.json({
      user: {
        id: user.id,
        email: user.email,
        displayName: user.display_name,
        avatarUrl: user.avatar_url,
      },
      token: sessionToken,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/auth/logout
 */
router.post('/logout', (req, res) => {
  const authHeader = req.headers.authorization;
  if (authHeader && authHeader.startsWith('Bearer ')) {
    destroySession(authHeader.slice(7));
  }
  res.json({ message: 'Logged out' });
});

/**
 * POST /api/auth/login
 * Body: { email, password }
 * Authenticates with email + password and returns a session token.
 */
router.post('/login', async (req, res, next) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) return res.status(400).json({ error: 'Email and password are required' });

    const { rows } = await pool.query(
      'SELECT * FROM users WHERE email = $1',
      [email.toLowerCase().trim()]
    );

    if (rows.length === 0 || !rows[0].password_hash) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const user = rows[0];
    const valid = await verifyPassword(password, user.password_hash);
    if (!valid) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    const sessionToken = createSessionToken(user.id);

    res.json({
      user: {
        id: user.id,
        email: user.email,
        displayName: user.display_name,
        avatarUrl: user.avatar_url,
      },
      token: sessionToken,
    });
  } catch (err) {
    next(err);
  }
});

/**
 * GET /api/auth/me
 * Returns the current user or 401.
 */
router.get('/me', (req, res) => {
  if (!req.user) return res.status(401).json({ error: 'Not authenticated' });
  res.json({
    id: req.user.id,
    email: req.user.email,
    displayName: req.user.display_name,
    avatarUrl: req.user.avatar_url,
  });
});

export default router;
