import { Router } from 'express';
import pool from '../db/pool.js';
import { requireAuth, getProfilePermissionContext, getTreeRole } from '../middleware/auth.js';
import { logAction } from '../services/audit.js';

const router = Router();

router.get('/', async (req, res, next) => {
  try {
    const { profileId, treeId } = req.query;
    if (!profileId && !treeId) {
      return res.status(400).json({ error: 'profileId or treeId query param required' });
    }

    const params = [];
    const where = [];
    if (profileId) {
      params.push(profileId);
      where.push(`profile_id = $${params.length}`);
    }
    if (treeId) {
      params.push(treeId);
      where.push(`tree_id = $${params.length}`);
    }

    const { rows } = await pool.query(
      `SELECT id, tree_id, profile_id, story_id, type, url, is_profile_photo, created_at, added_by
       FROM media
       WHERE ${where.join(' AND ')}
         AND deleted_at IS NULL
       ORDER BY is_profile_photo DESC, created_at DESC`,
      params
    );

    res.json(rows);
  } catch (err) {
    next(err);
  }
});

router.post('/', requireAuth, async (req, res, next) => {
  try {
    const { profileId, type, url, storyId = null, isProfilePhoto = false } = req.body;
    if (!profileId || !type || !url) {
      return res.status(400).json({ error: 'profileId, type, and url are required' });
    }
    if (!['photo', 'document'].includes(type)) {
      return res.status(400).json({ error: 'type must be photo or document' });
    }

    const profile = await getProfilePermissionContext(profileId, req.user.id);
    if (!profile) return res.status(404).json({ error: 'Profile not found' });
    if (!profile.tree_role) {
      return res.status(403).json({ error: 'You must be a tree member to add media' });
    }

    if (isProfilePhoto) {
      await pool.query(
        `UPDATE media
         SET is_profile_photo = 0
         WHERE profile_id = $1 AND type = 'photo' AND deleted_at IS NULL`,
        [profileId]
      );
    }

    const { rows: [media] } = await pool.query(
      `INSERT INTO media (tree_id, profile_id, story_id, type, url, is_profile_photo, added_by)
       VALUES ($1, $2, $3, $4, $5, $6, $7)
       RETURNING id, tree_id, profile_id, story_id, type, url, is_profile_photo, created_at, added_by`,
      [profile.tree_id, profileId, storyId, type, url, isProfilePhoto ? 1 : 0, req.user.id]
    );

    logAction(req.user.id, 'media.create', 'media', media.id, null, { profileId, type, isProfilePhoto });
    res.status(201).json(media);
  } catch (err) {
    next(err);
  }
});

router.delete('/:id', requireAuth, async (req, res, next) => {
  try {
    const { rows } = await pool.query(
      `SELECT m.id, m.added_by, m.profile_id, m.is_profile_photo,
              p.claimed_by, p.tree_id
       FROM media m
       JOIN profiles p ON p.id = m.profile_id
       WHERE m.id = $1 AND m.deleted_at IS NULL AND p.deleted_at IS NULL`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: 'Media not found' });

    const media = rows[0];
    const treeRole = await getTreeRole(media.tree_id, req.user.id);
    if (!treeRole) {
      return res.status(403).json({ error: 'You must be a tree member to delete media' });
    }
    const canManage = media.added_by === req.user.id
      || media.claimed_by === req.user.id
      || ['admin', 'steward'].includes(treeRole);
    if (!canManage) {
      return res.status(403).json({ error: 'Only the uploader, profile owner, admin, or steward can delete this media' });
    }

    await pool.query(
      `UPDATE media
       SET deleted_at = now(), is_profile_photo = 0
       WHERE id = $1 AND deleted_at IS NULL`,
      [req.params.id]
    );

    logAction(req.user.id, 'media.delete', 'media', req.params.id, null, null);
    res.json({ message: 'Media deleted' });
  } catch (err) {
    next(err);
  }
});

export default router;