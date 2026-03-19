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
         AND u.email NOT LIKE '%@kin.local'`
    );

    for (const user of users) {
      const prefs = typeof user.notification_prefs === 'string'
        ? JSON.parse(user.notification_prefs)
        : user.notification_prefs || {};

      if (prefs.digest === 'none') continue;

      const items = await gatherDigestItems(user.id);
      if (items.length === 0) continue;

      await sendDigestEmail(user.email, items);
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
     JOIN tree_members tm ON tm.user_id = $1
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
  let lastSentWeek = -1;

  setInterval(() => {
    const now = new Date();
    const weekNum = getISOWeek(now);
    // Send on Monday (day 1) after 9:00
    if (now.getDay() === 1 && now.getHours() >= 9 && weekNum !== lastSentWeek) {
      lastSentWeek = weekNum;
      sendWeeklyDigests();
    }
  }, CHECK_INTERVAL);

  console.log('[Kin Digest] Weekly digest scheduler started.');
}

function getISOWeek(date) {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + 3 - ((d.getDay() + 6) % 7));
  const yearStart = new Date(d.getFullYear(), 0, 4);
  return Math.ceil(((d - yearStart) / 86400000 + yearStart.getDay() + 1) / 7);
}
