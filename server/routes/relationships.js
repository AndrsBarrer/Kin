import { Router } from 'express';
import pool from '../db/pool.js';
import { requireAuth, requireTreeMember, getTreeRole } from '../middleware/auth.js';
import { logAction } from '../services/audit.js';

const router = Router();
const SUPPORTED_RELATIONSHIP_TYPES = new Set(['parent_child', 'marriage']);

async function hasParentChildPath(treeId, ancestorId, descendantId) {
  const { rows } = await pool.query(
    `WITH RECURSIVE descendants(id) AS (
       SELECT profile_b
       FROM relationships
       WHERE tree_id = $1
         AND type = 'parent_child'
         AND profile_a = $2
         AND deleted_at IS NULL
       UNION
       SELECT r.profile_b
       FROM relationships r
       JOIN descendants d ON r.profile_a = d.id
       WHERE r.tree_id = $1
         AND r.type = 'parent_child'
         AND r.deleted_at IS NULL
     )
     SELECT 1 AS found
     FROM descendants
     WHERE id = $3
     LIMIT 1`,
    [treeId, ancestorId, descendantId]
  );

  return rows.length > 0;
}

async function sharesParent(treeId, profileA, profileB) {
  const { rows } = await pool.query(
    `SELECT 1 AS found
     FROM relationships r1
     JOIN relationships r2 ON r1.profile_a = r2.profile_a
     WHERE r1.tree_id = $1
       AND r2.tree_id = $1
       AND r1.type = 'parent_child'
       AND r2.type = 'parent_child'
       AND r1.deleted_at IS NULL
       AND r2.deleted_at IS NULL
       AND r1.profile_b = $2
       AND r2.profile_b = $3
     LIMIT 1`,
    [treeId, profileA, profileB]
  );

  return rows.length > 0;
}

function relationshipError(res, status, code, error) {
  return res.status(status).json({ code, error });
}

/**
 * GET /api/relationships?treeId=...
 * List all relationships in a tree.
 */
router.get('/', async (req, res, next) => {
  try {
    const { treeId } = req.query;
    if (!treeId) return res.status(400).json({ error: 'treeId query param required' });

    const { rows } = await pool.query(
      `SELECT r.*, 
              pa.first_name AS a_first, pa.last_name AS a_last,
              pb.first_name AS b_first, pb.last_name AS b_last
       FROM relationships r
       JOIN profiles pa ON pa.id = r.profile_a
       JOIN profiles pb ON pb.id = r.profile_b
       WHERE r.tree_id = $1 AND r.deleted_at IS NULL
         AND r.type IN ('parent_child', 'marriage')
       ORDER BY r.created_at`,
      [treeId]
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
});

/**
 * POST /api/relationships
 * Create a new relationship.
 */
router.post('/', requireAuth, requireTreeMember, async (req, res, next) => {
  try {
    const { treeId, type, profileA, profileB, roleA, roleB, startYear, endYear } = req.body;
    if (!type || !profileA || !profileB) {
      return relationshipError(res, 400, 'unsupported_relationship_type', 'type, profileA, and profileB are required');
    }
    if (!SUPPORTED_RELATIONSHIP_TYPES.has(type)) {
      return relationshipError(res, 400, 'unsupported_relationship_type', 'Only parent/child and spouse/partner relationships are supported');
    }
    if (profileA === profileB) {
      return relationshipError(res, 400, 'self_relationship', 'A relationship requires two different people');
    }

    if (type === 'parent_child') {
      const { rows: directExisting } = await pool.query(
        `SELECT id
         FROM relationships
         WHERE tree_id = $1
           AND type = 'parent_child'
           AND profile_a = $2
           AND profile_b = $3
           AND deleted_at IS NULL
         LIMIT 1`,
        [treeId, profileA, profileB]
      );

      if (directExisting.length > 0) {
        return relationshipError(res, 409, 'existing_parent_child', 'This parent/child relationship already exists');
      }

      if (await hasParentChildPath(treeId, profileA, profileB)) {
        return relationshipError(res, 409, 'ancestor_already_exists', 'This person is already an ancestor of that child');
      }

      if (await hasParentChildPath(treeId, profileB, profileA)) {
        return relationshipError(res, 409, 'ancestry_cycle', 'This relationship would create an ancestry cycle');
      }

      if (await sharesParent(treeId, profileA, profileB)) {
        return relationshipError(res, 409, 'siblings_cannot_be_parent_child', 'Siblings cannot be assigned as parent and child');
      }

      const { rows: currentParents } = await pool.query(
        `SELECT id
         FROM relationships
         WHERE tree_id = $1
           AND type = 'parent_child'
           AND profile_b = $2
           AND deleted_at IS NULL`,
        [treeId, profileB]
      );

      if (currentParents.length >= 2) {
        return relationshipError(res, 409, 'too_many_parents', 'A person can only have two parents in Kin');
      }
    }

    if (type === 'marriage') {
      if (await sharesParent(treeId, profileA, profileB)) {
        return relationshipError(res, 409, 'siblings_cannot_marry', 'Siblings cannot be linked as spouses or partners');
      }

      if (await hasParentChildPath(treeId, profileA, profileB) || await hasParentChildPath(treeId, profileB, profileA)) {
        return relationshipError(res, 409, 'ancestor_descendant_cannot_marry', 'Ancestors and descendants cannot be linked as spouses or partners');
      }

      const { rows: existingMarriages } = await pool.query(
        `SELECT id, profile_a, profile_b
         FROM relationships
         WHERE tree_id = $1
           AND type = 'marriage'
           AND deleted_at IS NULL
           AND ($2 IN (profile_a, profile_b) OR $3 IN (profile_a, profile_b))`,
        [treeId, profileA, profileB]
      );

      if (existingMarriages.length > 0) {
        return relationshipError(res, 409, 'existing_marriage', 'One of these people is already linked to a spouse or partner');
      }
    }

    const { rows: [rel] } = await pool.query(
      `INSERT INTO relationships (tree_id, type, profile_a, profile_b, role_a, role_b, start_year, end_year)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8)
       RETURNING *`,
      [treeId, type, profileA, profileB, roleA || null, roleB || null, startYear || null, endYear || null]
    );

    logAction(req.user.id, 'relationship.create', 'relationship', rel.id, null, { type, profileA, profileB });
    res.status(201).json(rel);
  } catch (err) {
    next(err);
  }
});

/**
 * DELETE /api/relationships/:id
 * Soft-delete a relationship.
 */
router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    const { rows: existingRows } = await pool.query(
      `SELECT id, tree_id
       FROM relationships
       WHERE id = $1 AND deleted_at IS NULL`,
      [req.params.id]
    );
    if (existingRows.length === 0) return res.status(404).json({ error: 'Relationship not found' });

    const relationship = existingRows[0];
    const treeRole = await getTreeRole(relationship.tree_id, req.user.id);
    if (!treeRole) {
      return res.status(403).json({ error: 'You must be a tree member to delete relationships' });
    }

    await pool.query(
      `UPDATE relationships SET deleted_at = now()
       WHERE id = $1 AND deleted_at IS NULL`,
      [req.params.id]
    );

    logAction(req.user.id, 'relationship.delete', 'relationship', req.params.id, null, null);
    res.json({ message: 'Relationship deleted' });
  } catch (err) {
    next(err);
  }
});

export default router;
