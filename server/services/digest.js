import pool from '../db/pool.js';
import { sendDigestEmail } from './email.js';

/**
 * Gather recent activity and send weekly digest emails to users
 * who have digest notifications enabled.
 */
export async function sendWeeklyDigests() {
  console.log('[Kin Digest] Starting weekly digest run…');

  try {
    // Find users with weekly digest enabled
    const { rows: users } = pool.query(
      `SELECT DISTINCT u.id, u.email, u.display_name, u.notification_prefs
       FROM users u
       JOIN tree_members tm ON tm.user_id = u.id
       WHERE u.email IS NOT NULL
         AND u.email NOT LIKE '%@kin.local'
         AND (u.last_digest_sent_at IS NULL OR u.last_digest_sent_at < datetime('now', '-7 days'))`
    );

    for (const user of users) {
      const prefs = typeof user.notification_prefs === 'string'
        ? JSON.parse(user.notification_prefs)
        : user.notification_prefs || {};

      if (prefs.digest === 'none') continue;

      const items = await gatherDigestItems(user.id);
      if (items.length === 0) continue;

      await sendDigestEmail(user.email, items);
      await pool.query(
        `UPDATE users SET last_digest_sent_at = now() WHERE id = $1`,
        [user.id]
      );
      console.log(`[Kin Digest] Sent digest to ${user.email} (${items.length} items)`);
    }

    console.log('[Kin Digest] Digest run complete.');
  } catch (err) {
    console.error('[Kin Digest] Failed:', err.message);
  }
}

/**
 * Gather digest items for a user — recent audit log entries for their trees.
 */
async function gatherDigestItems(userId) {
  const { rows } = pool.query(
    `SELECT al.action, al.target_type, al.target_id, al.created_at, al.after_state,
            u.display_name AS actor_name
     FROM audit_log al
     LEFT JOIN users u ON u.id = al.actor_id
     LEFT JOIN trees t ON al.target_type = 'tree' AND t.id = al.target_id
     LEFT JOIN profiles p ON al.target_type = 'profile' AND p.id = al.target_id
     LEFT JOIN facts f ON al.target_type = 'fact' AND f.id = al.target_id
     LEFT JOIN profiles fp ON fp.id = f.profile_id
     LEFT JOIN relationships rel ON al.target_type = 'relationship' AND rel.id = al.target_id
     LEFT JOIN stories s ON al.target_type = 'story' AND s.id = al.target_id
     LEFT JOIN profiles sp ON sp.id = s.profile_id
     LEFT JOIN media m ON al.target_type = 'media' AND m.id = al.target_id
     LEFT JOIN profiles mp ON mp.id = m.profile_id
     LEFT JOIN proposals pr ON al.target_type = 'proposal' AND pr.id = al.target_id
     LEFT JOIN profiles pp ON pp.id = pr.profile_id
     JOIN tree_members tm ON tm.user_id = $1
      AND tm.tree_id = COALESCE(t.id, p.tree_id, fp.tree_id, rel.tree_id, sp.tree_id, mp.tree_id, pp.tree_id)
     WHERE al.created_at >= datetime('now', '-7 days')
     ORDER BY al.created_at DESC
     LIMIT 50`,
    [userId]
  );

  return rows.map(r => {
    const actor = r.actor_name || 'Someone';
    const afterState = typeof r.after_state === 'string' ? JSON.parse(r.after_state) : r.after_state;
    const detail = afterState ? ` (${JSON.stringify(afterState).slice(0, 80)})` : '';
    return `${actor} ${r.action.replace('.', ' ')} a ${r.target_type}${detail}`;
  });
}

/**
 * Start the digest interval. Checks every hour, sends on Mondays at ~9 AM.
 */
export function startDigestScheduler() {
  const CHECK_INTERVAL = 60 * 60 * 1000; // 1 hour

  setInterval(() => {
    const now = new Date();
    // Send on Monday (day 1) after 9:00
    if (now.getDay() === 1 && now.getHours() >= 9) {
      sendWeeklyDigests();
    }
  }, CHECK_INTERVAL);

  console.log('[Kin Digest] Weekly digest scheduler started.');
}
