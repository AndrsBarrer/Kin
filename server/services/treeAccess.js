import process from 'node:process';
import cryptoRandomString from 'crypto-random-string';
import pool from '../db/pool.js';

const TREE_ACCESS_CODE_TTL_MINUTES = parseInt(process.env.TREE_ACCESS_CODE_TTL_MINUTES || '30', 10);

function parseSettings(rawSettings) {
  if (!rawSettings) return {};
  if (typeof rawSettings === 'object') return rawSettings;

  try {
    return JSON.parse(rawSettings);
  } catch {
    return {};
  }
}

function normalizeCode(code) {
  return String(code || '')
    .toUpperCase()
    .replace(/[^A-Z0-9]/g, '');
}

function getActiveCodes(settings) {
  const now = Date.now();
  const codes = Array.isArray(settings.treeAccessCodes) ? settings.treeAccessCodes : [];

  return codes.filter((entry) => {
    if (!entry?.code || !entry?.expiresAt) return false;
    const expiresAt = Date.parse(entry.expiresAt);
    return Number.isFinite(expiresAt) && expiresAt > now;
  });
}

async function loadTreeRow(client, treeId) {
  const { rows } = await client.query(
    `SELECT id, name, description, settings
     FROM trees
     WHERE id = $1 AND deleted_at IS NULL`,
    [treeId]
  );

  return rows[0] || null;
}

async function loadAllTreeRows(client) {
  const { rows } = await client.query(
    `SELECT id, name, settings
     FROM trees
     WHERE deleted_at IS NULL`
  );

  return rows;
}

async function hasActiveCodeConflict(client, inputCode) {
  const normalizedInput = normalizeCode(inputCode);
  const trees = await loadAllTreeRows(client);

  return trees.some((tree) => {
    const settings = parseSettings(tree.settings);
    const codes = getActiveCodes(settings);
    return codes.some((entry) => entry.code === normalizedInput);
  });
}

async function persistCodes(client, treeId, settings, codes) {
  const nextSettings = {
    ...settings,
    treeAccessCodes: codes,
  };

  await client.query(
    `UPDATE trees
     SET settings = $2
     WHERE id = $1`,
    [treeId, JSON.stringify(nextSettings)]
  );
}

export async function issueTreeAccessCode(treeId, createdBy) {
  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    const tree = await loadTreeRow(client, treeId);
    if (!tree) {
      throw Object.assign(new Error('Tree not found'), { status: 404 });
    }

    const settings = parseSettings(tree.settings);
    const codes = getActiveCodes(settings);
    let code = null;
    for (let attempt = 0; attempt < 6; attempt += 1) {
      const candidate = normalizeCode(cryptoRandomString({ length: 8, type: 'alphanumeric' }));
      if (!(await hasActiveCodeConflict(client, candidate))) {
        code = candidate;
        break;
      }
    }

    if (!code) {
      throw Object.assign(new Error('Failed to issue a unique tree access code'), { status: 500 });
    }

    const expiresAt = new Date(Date.now() + TREE_ACCESS_CODE_TTL_MINUTES * 60 * 1000).toISOString();

    codes.push({ code, expiresAt, createdBy });
    await persistCodes(client, treeId, settings, codes);

    await client.query('COMMIT');

    return {
      treeId,
      code,
      expiresAt,
      ttlMinutes: TREE_ACCESS_CODE_TTL_MINUTES,
    };
  } catch (error) {
    await client.query('ROLLBACK');
    throw error;
  } finally {
    client.release();
  }
}

export async function consumeTreeAccessCode(client, treeId, inputCode) {
  const tree = await loadTreeRow(client, treeId);
  if (!tree) {
    throw Object.assign(new Error('Tree not found'), { status: 404 });
  }

  const settings = parseSettings(tree.settings);
  const codes = getActiveCodes(settings);
  const normalizedInput = normalizeCode(inputCode);
  const match = codes.find((entry) => entry.code === normalizedInput);

  if (!match) {
    throw Object.assign(new Error('Invalid or expired tree access code'), { status: 401 });
  }

  const remainingCodes = codes.filter((entry) => entry.code !== normalizedInput);
  await persistCodes(client, treeId, settings, remainingCodes);

  return {
    treeId: tree.id,
    treeName: tree.name,
    code: match.code,
    expiresAt: match.expiresAt,
  };
}

export async function consumeTreeAccessCodeByCode(client, inputCode) {
  const normalizedInput = normalizeCode(inputCode);
  const trees = await loadAllTreeRows(client);

  let matchedTree = null;
  let matchedCode = null;
  let matchedSettings = null;
  let matchedCodes = null;

  for (const tree of trees) {
    const settings = parseSettings(tree.settings);
    const codes = getActiveCodes(settings);
    const match = codes.find((entry) => entry.code === normalizedInput);

    if (!match) continue;

    if (matchedTree) {
      throw Object.assign(new Error('Tree access code is ambiguous'), { status: 409 });
    }

    matchedTree = tree;
    matchedCode = match;
    matchedSettings = settings;
    matchedCodes = codes;
  }

  if (!matchedTree || !matchedCode || !matchedSettings || !matchedCodes) {
    throw Object.assign(new Error('Invalid or expired tree access code'), { status: 401 });
  }

  const remainingCodes = matchedCodes.filter((entry) => entry.code !== normalizedInput);
  await persistCodes(client, matchedTree.id, matchedSettings, remainingCodes);

  return {
    treeId: matchedTree.id,
    treeName: matchedTree.name,
    code: matchedCode.code,
    expiresAt: matchedCode.expiresAt,
  };
}

export async function getTreePreview(treeId) {
  const { rows } = await pool.query(
    `SELECT id, name, description
     FROM trees
     WHERE id = $1 AND deleted_at IS NULL`,
    [treeId]
  );

  return rows[0] || null;
}

export function splitDisplayName(displayName) {
  const normalized = String(displayName || '').trim().replace(/\s+/g, ' ');
  if (!normalized) {
    return { firstName: 'New', lastName: 'Member' };
  }

  const parts = normalized.split(' ');
  const firstName = parts.shift();
  const lastName = parts.join(' ') || 'Member';
  return { firstName, lastName };
}

export function buildProfileSlug(firstName, lastName) {
  const baseSlug = `${firstName}-${lastName}`
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
  const suffix = cryptoRandomString({ length: 6, type: 'alphanumeric' }).toLowerCase();
  return `${baseSlug || 'member'}-${suffix}`;
}