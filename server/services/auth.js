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
const SESSION_TTL_MS = 7 * 24 * 60 * 60 * 1000;

export function normalizeEmail(email) {
  return email.toLowerCase().trim();
}

export async function findUserByEmail(email, dbClient = pool) {
  const normalizedEmail = normalizeEmail(email);
  const { rows } = await dbClient.query(
    `SELECT *
     FROM users
     WHERE lower(trim(email)) = $1
     ORDER BY created_at ASC
     LIMIT 1`,
    [normalizedEmail]
  );
  return rows[0] || null;
}

export async function upsertUserByEmail(email, options = {}, dbClient = pool) {
  const normalizedEmail = normalizeEmail(email);
  const normalizedDisplayName = options.displayName?.trim() || null;
  const existingUser = await findUserByEmail(normalizedEmail, dbClient);

  if (existingUser) {
    const { rows } = await dbClient.query(
      `UPDATE users
       SET email = $2,
           display_name = COALESCE(NULLIF($3, ''), users.display_name),
           password_hash = COALESCE($4, users.password_hash),
           email_verified_at = CASE
             WHEN $5 THEN COALESCE(users.email_verified_at, now())
             ELSE users.email_verified_at
           END
       WHERE id = $1
       RETURNING *`,
      [existingUser.id, normalizedEmail, normalizedDisplayName, options.passwordHash || null, Boolean(options.verifyEmail)]
    );
    return rows[0];
  }

  const { rows } = await dbClient.query(
    `INSERT INTO users (email, display_name, password_hash, email_verified_at)
     VALUES ($1, $2, $3, CASE WHEN $4 THEN now() ELSE NULL END)
     RETURNING *`,
    [normalizedEmail, normalizedDisplayName, options.passwordHash || null, Boolean(options.verifyEmail)]
  );
  return rows[0];
}

/**
 * Create or find user by email, generate a magic-link token.
 * Returns { user, token, magicLink }.
 */
export async function createMagicLink(email, options = {}) {
  const normalizedEmail = normalizeEmail(email);
  const normalizedDisplayName = options.displayName?.trim() || null;
  const canCreateAccount = Boolean(options.createAccount || options.claimToken);

  const existingUser = await findUserByEmail(normalizedEmail);

  if (!existingUser && !canCreateAccount) {
    throw Object.assign(new Error('No account exists for this email yet. Create an account first or use a tree access code.'), { status: 404 });
  }

  if (!existingUser && !normalizedDisplayName) {
    throw Object.assign(new Error('Enter your full name to create an account'), { status: 400 });
  }

  const user = await upsertUserByEmail(normalizedEmail, { displayName: normalizedDisplayName });

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
  if (options.treeId) params.set('treeId', options.treeId);
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

export function createSessionToken(userId) {
  const token = cryptoRandomString({ length: 64, type: 'url-safe' });
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS).toISOString();

  pool.query(
    `INSERT INTO session_tokens (token, user_id, expires_at)
     VALUES ($1, $2, $3)`,
    [token, userId, expiresAt]
  );

  return token;
}

export function getUserIdFromSession(token) {
  const { rows } = pool.query(
    `SELECT user_id, expires_at
     FROM session_tokens
     WHERE token = $1`,
    [token]
  );

  const session = rows[0];
  if (!session) return null;

  if (Date.parse(session.expires_at) <= Date.now()) {
    pool.query('DELETE FROM session_tokens WHERE token = $1', [token]);
    return null;
  }

  return session.user_id;
}

export function destroySession(token) {
  pool.query('DELETE FROM session_tokens WHERE token = $1', [token]);
}
