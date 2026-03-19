import { scrypt, randomBytes, timingSafeEqual } from 'node:crypto';
import { promisify } from 'node:util';
import cryptoRandomString from 'crypto-random-string';
import pool from '../db/pool.js';

const scryptAsync = promisify(scrypt);

/**
 * Hash a plaintext password using scrypt with a random salt.
 * Returns "salt:hash" both hex-encoded.
 */
export async function hashPassword(password) {
  const salt = randomBytes(16).toString('hex');
  const derived = await scryptAsync(password, salt, 64);
  return salt + ':' + derived.toString('hex');
}

/**
 * Verify a plaintext password against a stored "salt:hash" string.
 */
export async function verifyPassword(password, stored) {
  const [salt, hash] = stored.split(':');
  const derived = await scryptAsync(password, salt, 64);
  return timingSafeEqual(Buffer.from(hash, 'hex'), derived);
}

const MAGIC_LINK_TTL = parseInt(process.env.MAGIC_LINK_TTL_MINUTES || '15', 10);

/**
 * Create or find user by email, generate a magic-link token.
 * Returns { user, token, magicLink }.
 */
export async function createMagicLink(email, options = {}) {
  const normalizedEmail = email.toLowerCase().trim();
  const normalizedDisplayName = options.displayName?.trim() || null;

  // Upsert user
  const { rows: [user] } = await pool.query(
    `INSERT INTO users (email, display_name) VALUES ($1, $2)
     ON CONFLICT (email) DO UPDATE SET
       email = EXCLUDED.email,
       display_name = COALESCE(NULLIF($2, ''), users.display_name)
     RETURNING *`,
    [normalizedEmail, normalizedDisplayName]
  );

  // Generate token
  const token = cryptoRandomString({ length: 64, type: 'url-safe' });
  const expiresAt = new Date(Date.now() + MAGIC_LINK_TTL * 60 * 1000);

  await pool.query(
    `INSERT INTO magic_link_tokens (user_id, token, expires_at)
     VALUES ($1, $2, $3)`,
    [user.id, token, expiresAt]
  );

  const frontendUrl = process.env.FRONTEND_URL || 'http://localhost:5173';
  const params = new URLSearchParams({ token });
  if (options.claimToken) params.set('inviteToken', options.claimToken);
  const magicLink = `${frontendUrl}/auth/verify?${params.toString()}`;

  return { user, token, magicLink };
}

/**
 * Verify a magic-link token. Returns the user or null.
 */
export async function verifyMagicToken(token) {
  const { rows } = await pool.query(
    `UPDATE magic_link_tokens
     SET used_at = now()
     WHERE token = $1
       AND used_at IS NULL
       AND expires_at > now()
     RETURNING user_id`,
    [token]
  );

  if (rows.length === 0) return null;

  // Mark email verified
  const { rows: [user] } = await pool.query(
    `UPDATE users SET email_verified_at = COALESCE(email_verified_at, now())
     WHERE id = $1 RETURNING *`,
    [rows[0].user_id]
  );

  return user;
}

/**
 * Create a session token (simple random string stored as a fact-of-life;
 * in production you'd use JWTs or a session store).
 * We keep it stateless here using a signed cookie approach,
 * but for now we use a simple token → user_id lookup.
 */

const sessionTokens = new Map(); // In-memory for dev; swap for Redis/DB in prod

export function createSessionToken(userId) {
  const token = cryptoRandomString({ length: 64, type: 'url-safe' });
  sessionTokens.set(token, { userId, createdAt: Date.now() });
  return token;
}

export function getUserIdFromSession(token) {
  const session = sessionTokens.get(token);
  if (!session) return null;
  // 7 day expiry
  if (Date.now() - session.createdAt > 7 * 24 * 60 * 60 * 1000) {
    sessionTokens.delete(token);
    return null;
  }
  return session.userId;
}

export function destroySession(token) {
  sessionTokens.delete(token);
}
