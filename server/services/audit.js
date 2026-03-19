import pool from '../db/pool.js';

/**
 * Write an entry to the audit log.
 * @param {string|null} actorId - User ID who performed the action
 * @param {string} action - e.g. 'profile.create', 'fact.update', 'proposal.accept'
 * @param {string} targetType - e.g. 'profile', 'fact', 'relationship', 'proposal'
 * @param {string} targetId - ID of the affected record
 * @param {object|null} beforeState - Previous state (for updates/deletes)
 * @param {object|null} afterState - New state (for creates/updates)
 */
export function logAction(actorId, action, targetType, targetId, beforeState = null, afterState = null) {
  try {
    pool.query(
      `INSERT INTO audit_log (actor_id, action, target_type, target_id, before_state, after_state)
       VALUES ($1, $2, $3, $4, $5, $6)`,
      [actorId, action, targetType, targetId, beforeState, afterState]
    );
  } catch (err) {
    // Audit logging should never break the main operation
    console.error('[Kin Audit] Failed to write audit log:', err.message);
  }
}
