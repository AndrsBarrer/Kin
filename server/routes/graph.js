import { Router } from 'express';
import pool from '../db/pool.js';

const router = Router();

/**
 * GET /api/graph/neighborhood?profileId=...&depth=3
 * Recursive CTE to get profiles within N degrees of a root profile.
 */
router.get('/neighborhood', async (req, res, next) => {
  try {
    const { profileId, depth } = req.query;
    if (!profileId) return res.status(400).json({ error: 'profileId query param required' });

    const maxDepth = Math.min(parseInt(depth || '3', 10), 6);

    // Inline recursive CTE (replaces PostgreSQL function)
    const { rows: neighborhood } = pool.query(
      `WITH RECURSIVE walk AS (
         SELECT $1 AS pid, 0 AS d
         UNION
         SELECT
           CASE WHEN r.profile_a = w.pid THEN r.profile_b ELSE r.profile_a END,
           w.d + 1
         FROM walk w
         JOIN relationships r ON (r.profile_a = w.pid OR r.profile_b = w.pid)
                              AND r.deleted_at IS NULL
         WHERE w.d < $2
       )
       SELECT DISTINCT pid AS profile_id, min(d) AS depth FROM walk GROUP BY pid`,
      [profileId, maxDepth]
    );

    const profileIds = neighborhood.map((n) => n.profile_id);
    if (profileIds.length === 0) return res.json({ profiles: [], relationships: [] });

    // Fetch profiles
    const pPlaceholders = profileIds.map((_, index) => `$${index + 1}`).join(', ');
    const { rows: profiles } = pool.query(
      `SELECT id, first_name, last_name, maiden_name, is_living, metadata
       FROM profiles
       WHERE id IN (${pPlaceholders}) AND deleted_at IS NULL`,
      profileIds
    );

    // Fetch relationships between these profiles
    const relationshipProfileAPlaceholders = profileIds.map((_, index) => `$${index + 1}`).join(', ');
    const relationshipProfileBPlaceholders = profileIds.map((_, index) => `$${index + 1 + profileIds.length}`).join(', ');
    const { rows: relationships } = pool.query(
      `SELECT * FROM relationships
       WHERE (profile_a IN (${relationshipProfileAPlaceholders}) OR profile_b IN (${relationshipProfileBPlaceholders}))
         AND deleted_at IS NULL`,
      [...profileIds, ...profileIds]
    );

    // Attach depth info
    const depthMap = Object.fromEntries(neighborhood.map((n) => [n.profile_id, n.depth]));
    const profilesWithDepth = profiles.map((p) => ({ ...p, depth: depthMap[p.id] ?? null }));

    res.json({ profiles: profilesWithDepth, relationships });
  } catch (err) {
    next(err);
  }
});

export default router;
