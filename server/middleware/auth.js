import pool from '../db/pool.js';
import { getUserIdFromSession } from '../services/auth.js';

/**
 * Authenticate middleware — reads Bearer token from Authorization header,
 * resolves user, and attaches to req.user. Non-blocking: if no token, req.user = null.
 */
export async function authenticate(req, _res, next) {
  req.user = null;

  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) return next();

  const token = authHeader.slice(7);
  const userId = getUserIdFromSession(token);
  if (!userId) return next();

  try {
    const { rows } = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
    if (rows.length > 0) {
      req.user = rows[0];
    }
  } catch (err) {
    console.error('Auth middleware error:', err);
  }

  next();
}

/**
 * Require authentication — returns 401 if not logged in.
 */
export function requireAuth(req, res, next) {
  if (!req.user) {
    return res.status(401).json({ error: 'Authentication required' });
  }
  next();
}

/**
 * Require tree membership — checks that req.user is a member of the tree.
 * Expects req.params.treeId or req.body.treeId.
 */
export async function requireTreeMember(req, res, next) {
  if (!req.user) return res.status(401).json({ error: 'Authentication required' });

  const treeId = req.params.treeId || req.body.treeId;
  if (!treeId) return res.status(400).json({ error: 'Tree ID required' });

  const { rows } = await pool.query(
    'SELECT role FROM tree_members WHERE tree_id = $1 AND user_id = $2',
    [treeId, req.user.id]
  );

  if (rows.length === 0) {
    return res.status(403).json({ error: 'Not a member of this tree' });
  }

  req.treeRole = rows[0].role;
  next();
}

export async function getTreeRole(treeId, userId) {
  if (!treeId || !userId) return null;

  const { rows } = await pool.query(
    'SELECT role FROM tree_members WHERE tree_id = $1 AND user_id = $2',
    [treeId, userId]
  );

  return rows[0]?.role || null;
}

export async function getProfilePermissionContext(profileId, userId) {
  const { rows } = await pool.query(
    `SELECT p.id, p.tree_id, p.claimed_by, p.first_name, p.last_name, p.metadata,
            tm.role AS tree_role
     FROM profiles p
     LEFT JOIN tree_members tm ON tm.tree_id = p.tree_id AND tm.user_id = $2
     WHERE p.id = $1 AND p.deleted_at IS NULL`,
    [profileId, userId || null]
  );

  return rows[0] || null;
}

export function canManageClaimedProfile(claimedBy, userId, treeRole) {
  return !claimedBy || claimedBy === userId || treeRole === 'admin' || treeRole === 'steward';
}

/**
 * Require one of the specified roles within the current tree.
 * Must be used AFTER requireTreeMember (which sets req.treeRole).
 * Usage: requireRole('admin', 'steward')
 */
export function requireRole(...roles) {
  return (req, res, next) => {
    if (!req.treeRole) {
      return res.status(403).json({ error: 'Tree membership required' });
    }
    if (!roles.includes(req.treeRole)) {
      return res.status(403).json({ error: `Requires one of: ${roles.join(', ')}` });
    }
    next();
  };
}
