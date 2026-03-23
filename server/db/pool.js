import Database from 'better-sqlite3';
import { v4 as uuidv4 } from 'uuid';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DB_PATH = process.env.DATABASE_PATH || path.join(__dirname, '..', '..', 'kin.db');

const db = new Database(DB_PATH);
db.pragma('journal_mode = WAL');
db.pragma('foreign_keys = ON');

// Register PostgreSQL-compatible functions so DEFAULT expressions work
db.function('uuid_generate_v4', () => uuidv4());
db.function('now', () => new Date().toISOString());

// ── Schema initialisation (idempotent) ──────────────
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id               TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    email            TEXT UNIQUE NOT NULL,
    display_name     TEXT,
    avatar_url       TEXT,
    password_hash    TEXT,
    email_verified_at TEXT,
    notification_prefs TEXT DEFAULT '{"digest":"weekly"}',
    last_digest_sent_at TEXT,
    created_at       TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS magic_link_tokens (
    id          TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    user_id     TEXT REFERENCES users(id) ON DELETE CASCADE,
    token       TEXT UNIQUE NOT NULL,
    expires_at  TEXT NOT NULL,
    used_at     TEXT,
    created_at  TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS session_tokens (
    token       TEXT PRIMARY KEY,
    user_id     TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    expires_at  TEXT NOT NULL,
    created_at  TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS trees (
    id              TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    name            TEXT NOT NULL,
    description     TEXT,
    created_by      TEXT REFERENCES users(id),
    privacy_default TEXT DEFAULT 'family' CHECK(privacy_default IN ('public','family','private')),
    settings        TEXT DEFAULT '{}',
    deleted_at      TEXT,
    created_at      TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS tree_members (
    id        TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    tree_id   TEXT NOT NULL REFERENCES trees(id) ON DELETE CASCADE,
    user_id   TEXT NOT NULL REFERENCES users(id) ON DELETE CASCADE,
    role      TEXT DEFAULT 'contributor' CHECK(role IN ('admin','steward','contributor')),
    joined_at TEXT DEFAULT (now()),
    UNIQUE(tree_id, user_id)
  );

  CREATE TABLE IF NOT EXISTS profiles (
    id           TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    tree_id      TEXT NOT NULL REFERENCES trees(id) ON DELETE CASCADE,
    first_name   TEXT NOT NULL,
    last_name    TEXT NOT NULL,
    maiden_name  TEXT,
    is_living    INTEGER DEFAULT 1,
    claimed_by   TEXT REFERENCES users(id),
    invite_token TEXT UNIQUE,
    public_slug  TEXT UNIQUE,
    metadata     TEXT DEFAULT '{}',
    deleted_at   TEXT,
    created_at   TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS facts (
    id                TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    profile_id        TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    fact_type         TEXT NOT NULL,
    value             TEXT,
    value_structured  TEXT,
    privacy           TEXT DEFAULT 'family' CHECK(privacy IN ('public','family','private')),
    verified_by_owner INTEGER DEFAULT 0,
    is_locked         INTEGER DEFAULT 0,
    added_by          TEXT REFERENCES users(id),
    deleted_at        TEXT,
    created_at        TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS relationships (
    id         TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    tree_id    TEXT NOT NULL REFERENCES trees(id) ON DELETE CASCADE,
    type       TEXT NOT NULL CHECK(type IN ('parent_child','marriage','sibling')),
    profile_a  TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    profile_b  TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    role_a     TEXT,
    role_b     TEXT,
    start_year INTEGER,
    end_year   INTEGER,
    deleted_at TEXT,
    created_at TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS stories (
    id          TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    profile_id  TEXT REFERENCES profiles(id) ON DELETE CASCADE,
    title       TEXT NOT NULL,
    body        TEXT,
    written_by  TEXT REFERENCES users(id),
    is_featured INTEGER DEFAULT 0,
    deleted_at  TEXT,
    created_at  TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS media (
    id               TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    tree_id          TEXT REFERENCES trees(id),
    profile_id       TEXT REFERENCES profiles(id),
    story_id         TEXT REFERENCES stories(id),
    type             TEXT CHECK(type IN ('photo','document')),
    url              TEXT NOT NULL,
    is_profile_photo INTEGER DEFAULT 0,
    added_by         TEXT REFERENCES users(id),
    deleted_at       TEXT,
    created_at       TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS proposals (
    id               TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    profile_id       TEXT NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
    proposed_by      TEXT REFERENCES users(id),
    existing_fact_id TEXT REFERENCES facts(id),
    proposed_type    TEXT,
    proposed_value   TEXT,
    proposed_structured TEXT,
    status           TEXT DEFAULT 'pending' CHECK(status IN ('pending','accepted','rejected','expired')),
    action_token     TEXT UNIQUE NOT NULL,
    reviewed_at      TEXT,
    created_at       TEXT DEFAULT (now())
  );

  CREATE TABLE IF NOT EXISTS audit_log (
    id           TEXT PRIMARY KEY DEFAULT (uuid_generate_v4()),
    actor_id     TEXT REFERENCES users(id),
    action       TEXT NOT NULL,
    target_type  TEXT,
    target_id    TEXT,
    before_state TEXT,
    after_state  TEXT,
    created_at   TEXT DEFAULT (now())
  );

  CREATE INDEX IF NOT EXISTS idx_mlt_token    ON magic_link_tokens(token);
  CREATE INDEX IF NOT EXISTS idx_session_user ON session_tokens(user_id);
  CREATE INDEX IF NOT EXISTS idx_session_exp  ON session_tokens(expires_at);
  CREATE INDEX IF NOT EXISTS idx_profiles_tree ON profiles(tree_id);
  CREATE INDEX IF NOT EXISTS idx_facts_profile ON facts(profile_id);
  CREATE INDEX IF NOT EXISTS idx_facts_type    ON facts(fact_type);
  CREATE INDEX IF NOT EXISTS idx_rel_tree      ON relationships(tree_id);
  CREATE INDEX IF NOT EXISTS idx_rel_a         ON relationships(profile_a);
  CREATE INDEX IF NOT EXISTS idx_rel_b         ON relationships(profile_b);
  CREATE INDEX IF NOT EXISTS idx_proposals_token ON proposals(action_token);
  CREATE INDEX IF NOT EXISTS idx_audit_target  ON audit_log(target_id);
`);

// Migrate: add password_hash column if it doesn't exist yet
try {
  db.exec(`ALTER TABLE users ADD COLUMN password_hash TEXT`);
} catch {
  // Column already exists — ignore
}

try {
  db.exec(`ALTER TABLE users ADD COLUMN last_digest_sent_at TEXT`);
} catch {
  // Column already exists — ignore
}

try {
  db.exec(`ALTER TABLE media ADD COLUMN added_by TEXT`);
} catch {
  // Column already exists — ignore
}

try {
  db.exec(`ALTER TABLE media ADD COLUMN deleted_at TEXT`);
} catch {
  // Column already exists — ignore
}

console.log('[Kin DB] SQLite database ready at', DB_PATH);

// ── Query helpers ───────────────────────────────────

/** Convert PostgreSQL $1,$2,… placeholders to SQLite ?
 *  Handles repeated references like $2 appearing multiple times
 *  by expanding the params array to match */
function convertParams(sql, params) {
  const usedIndices = [];
  const converted = sql.replace(/\$(\d+)/g, (_, num) => {
    usedIndices.push(parseInt(num, 10) - 1); // $1 → index 0
    return '?';
  });
  // Build new params array in the order placeholders appeared
  const expandedParams = usedIndices.map(i => params[i]);
  return { sql: converted, params: expandedParams };
}

/** Auto-stringify plain objects and convert booleans for SQLite compat */
function prepareParams(params) {
  return params.map(p => {
    if (typeof p === 'boolean') return p ? 1 : 0;
    if (p instanceof Date) return p.toISOString();
    if (p !== null && p !== undefined && typeof p === 'object' && !Array.isArray(p) && !(p instanceof Date)) {
      return JSON.stringify(p);
    }
    return p;
  });
}

/** Try to JSON.parse string fields that look like JSON objects/arrays */
function hydrateRow(row) {
  if (!row) return row;
  for (const key of Object.keys(row)) {
    const val = row[key];
    if (typeof val === 'string' && (val.startsWith('{') || val.startsWith('['))) {
      try { row[key] = JSON.parse(val); } catch { /* leave as string */ }
    }
  }
  return row;
}

function execQuery(sql, params = []) {
  const { sql: converted, params: expandedParams } = convertParams(sql, params);
  const safeParams = prepareParams(expandedParams);
  const upper = converted.trimStart().toUpperCase();

  if (upper.startsWith('SELECT') || upper.startsWith('WITH') || upper.includes('RETURNING')) {
    const rows = db.prepare(converted).all(...safeParams).map(hydrateRow);
    return { rows };
  }

  const info = db.prepare(converted).run(...safeParams);
  return { rows: [], changes: info.changes };
}

// ── pg-compatible pool interface ────────────────────

const pool = {
  query(sql, params = []) {
    return execQuery(sql, params);
  },

  /** Mimic pg client for transaction support */
  connect() {
    return {
      query(sql, params = []) {
        const t = sql.trim().toUpperCase();
        if (t === 'BEGIN')    { db.exec('BEGIN');    return { rows: [] }; }
        if (t === 'COMMIT')   { db.exec('COMMIT');   return { rows: [] }; }
        if (t === 'ROLLBACK') { db.exec('ROLLBACK'); return { rows: [] }; }
        return execQuery(sql, params);
      },
      release() {},
    };
  },
};

export default pool;
export { db };
