import { Router } from 'express';
import pool from '../db/pool.js';
import { requireAuth } from '../middleware/auth.js';
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
      `SELECT id, tree_id, profile_id, story_id, type, url, is_profile_photo, created_at
       FROM media
       WHERE ${where.join(' AND ')}
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

    const { rows: profiles } = await pool.query(
      `SELECT id, tree_id FROM profiles WHERE id = $1 AND deleted_at IS NULL`,
      [profileId]
    );
    if (profiles.length === 0) {
      return res.status(404).json({ error: 'Profile not found' });
    }

    const profile = profiles[0];

    if (isProfilePhoto) {
      await pool.query(
        `UPDATE media
         SET is_profile_photo = 0
         WHERE profile_id = $1 AND type = 'photo'`,
        [profileId]
      );
    }

    const { rows: [media] } = await pool.query(
      `INSERT INTO media (tree_id, profile_id, story_id, type, url, is_profile_photo)
       VALUES ($1, $2, $3, $4, $5, $6)
       RETURNING id, tree_id, profile_id, story_id, type, url, is_profile_photo, created_at`,
      [profile.tree_id, profileId, storyId, type, url, isProfilePhoto ? 1 : 0]
    );

    logAction(req.user.id, 'media.create', 'media', media.id, null, { profileId, type, isProfilePhoto });
    res.status(201).json(media);
  } catch (err) {
    next(err);
  }
});

export default router;