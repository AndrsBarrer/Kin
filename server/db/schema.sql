-- ══════════════════════════════════════════════════════
--  KIN — PostgreSQL Schema
--  "Facts as Rows" (EAV) Architecture
-- ══════════════════════════════════════════════════════

-- Enable extensions
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
CREATE EXTENSION IF NOT EXISTS "pg_trgm";

-- ── Privacy enum ─────────────────────────────────────
CREATE TYPE privacy_tier AS ENUM ('public', 'family', 'private');
CREATE TYPE member_role  AS ENUM ('admin', 'steward', 'contributor');
CREATE TYPE rel_type     AS ENUM ('parent_child', 'marriage', 'sibling');
CREATE TYPE proposal_status AS ENUM ('pending', 'accepted', 'rejected', 'expired');

-- ══════════════════════════════════════════════════════
--  USERS & AUTH
-- ══════════════════════════════════════════════════════

CREATE TABLE users (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  email            TEXT UNIQUE NOT NULL,
  display_name     TEXT,
  avatar_url       TEXT,
  email_verified_at TIMESTAMPTZ,
  notification_prefs JSONB DEFAULT '{"digest": "weekly"}'::jsonb,
  created_at       TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE magic_link_tokens (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  user_id     UUID REFERENCES users(id) ON DELETE CASCADE,
  token       TEXT UNIQUE NOT NULL,
  expires_at  TIMESTAMPTZ NOT NULL,
  used_at     TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_mlt_token ON magic_link_tokens(token);
CREATE INDEX idx_mlt_expires ON magic_link_tokens(expires_at) WHERE used_at IS NULL;

-- ══════════════════════════════════════════════════════
--  TREES & MEMBERSHIP
-- ══════════════════════════════════════════════════════

CREATE TABLE trees (
  id              UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  name            TEXT NOT NULL,
  description     TEXT,
  created_by      UUID REFERENCES users(id),
  privacy_default privacy_tier DEFAULT 'family',
  settings        JSONB DEFAULT '{}'::jsonb,
  deleted_at      TIMESTAMPTZ,
  created_at      TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE tree_members (
  id        UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tree_id   UUID NOT NULL REFERENCES trees(id) ON DELETE CASCADE,
  user_id   UUID NOT NULL REFERENCES users(id) ON DELETE CASCADE,
  role      member_role DEFAULT 'contributor',
  joined_at TIMESTAMPTZ DEFAULT now(),
  UNIQUE(tree_id, user_id)
);

-- ══════════════════════════════════════════════════════
--  PROFILES (the "person" node in the graph)
-- ══════════════════════════════════════════════════════

CREATE TABLE profiles (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tree_id      UUID NOT NULL REFERENCES trees(id) ON DELETE CASCADE,
  first_name   TEXT NOT NULL,
  last_name    TEXT NOT NULL,
  maiden_name  TEXT,
  is_living    BOOLEAN DEFAULT true,
  claimed_by   UUID REFERENCES users(id),
  invite_token TEXT UNIQUE,
  public_slug  TEXT UNIQUE,
  metadata     JSONB DEFAULT '{}'::jsonb,
  deleted_at   TIMESTAMPTZ,
  created_at   TIMESTAMPTZ DEFAULT now()
);

-- Trigram indexes for fuzzy search / duplicate detection
CREATE INDEX idx_profiles_fname_trgm ON profiles USING gin (first_name gin_trgm_ops);
CREATE INDEX idx_profiles_lname_trgm ON profiles USING gin (last_name  gin_trgm_ops);
CREATE INDEX idx_profiles_tree       ON profiles(tree_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_profiles_claimed    ON profiles(claimed_by) WHERE claimed_by IS NOT NULL;

-- ══════════════════════════════════════════════════════
--  FACTS (EAV — the core data model)
-- ══════════════════════════════════════════════════════

CREATE TABLE facts (
  id                UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id        UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  fact_type         TEXT NOT NULL,       -- 'birth_date', 'occupation', 'story', …
  value             TEXT,                -- simple text value
  value_structured  JSONB,              -- structured / rich data
  privacy           privacy_tier DEFAULT 'family',
  verified_by_owner BOOLEAN DEFAULT false,
  is_locked         BOOLEAN DEFAULT false,
  added_by          UUID REFERENCES users(id),
  deleted_at        TIMESTAMPTZ,
  created_at        TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_facts_profile ON facts(profile_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_facts_type    ON facts(fact_type);

-- ══════════════════════════════════════════════════════
--  RELATIONSHIPS (edges in the graph)
-- ══════════════════════════════════════════════════════

CREATE TABLE relationships (
  id         UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tree_id    UUID NOT NULL REFERENCES trees(id) ON DELETE CASCADE,
  type       rel_type NOT NULL,
  profile_a  UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  profile_b  UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  role_a     TEXT,   -- e.g. 'father', 'mother'
  role_b     TEXT,   -- e.g. 'son', 'daughter'
  start_year INT,
  end_year   INT,
  deleted_at TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_rel_tree ON relationships(tree_id) WHERE deleted_at IS NULL;
CREATE INDEX idx_rel_a    ON relationships(profile_a);
CREATE INDEX idx_rel_b    ON relationships(profile_b);

-- ══════════════════════════════════════════════════════
--  STORIES & MEDIA
-- ══════════════════════════════════════════════════════

CREATE TABLE stories (
  id          UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id  UUID REFERENCES profiles(id) ON DELETE CASCADE,
  title       TEXT NOT NULL,
  body        TEXT,
  written_by  UUID REFERENCES users(id),
  is_featured BOOLEAN DEFAULT false,
  deleted_at  TIMESTAMPTZ,
  created_at  TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE media (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  tree_id          UUID REFERENCES trees(id),
  profile_id       UUID REFERENCES profiles(id),
  story_id         UUID REFERENCES stories(id),
  type             TEXT CHECK (type IN ('photo', 'document')),
  url              TEXT NOT NULL,
  is_profile_photo BOOLEAN DEFAULT false,
  created_at       TIMESTAMPTZ DEFAULT now()
);

-- ══════════════════════════════════════════════════════
--  PROPOSALS (edit suggestions for claimed profiles)
-- ══════════════════════════════════════════════════════

CREATE TABLE proposals (
  id               UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  profile_id       UUID NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  proposed_by      UUID REFERENCES users(id),
  existing_fact_id UUID REFERENCES facts(id),
  proposed_type    TEXT,          -- fact_type for new facts
  proposed_value   TEXT,
  proposed_structured JSONB,
  status           proposal_status DEFAULT 'pending',
  action_token     TEXT UNIQUE NOT NULL,
  reviewed_at      TIMESTAMPTZ,
  created_at       TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_proposals_profile ON proposals(profile_id) WHERE status = 'pending';
CREATE INDEX idx_proposals_token   ON proposals(action_token);

-- ══════════════════════════════════════════════════════
--  AUDIT LOG (immutable)
-- ══════════════════════════════════════════════════════

CREATE TABLE audit_log (
  id           UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  actor_id     UUID REFERENCES users(id),
  action       TEXT NOT NULL,
  target_type  TEXT,           -- 'profile', 'fact', 'relationship', …
  target_id    UUID,
  before_state JSONB,
  after_state  JSONB,
  created_at   TIMESTAMPTZ DEFAULT now()
);

CREATE INDEX idx_audit_target ON audit_log(target_id);
CREATE INDEX idx_audit_actor  ON audit_log(actor_id);

-- ══════════════════════════════════════════════════════
--  RECURSIVE CTE VIEW — graph within N degrees
-- ══════════════════════════════════════════════════════
--  Usage: SELECT * FROM graph_neighborhood('profile-uuid', 3);

CREATE OR REPLACE FUNCTION graph_neighborhood(root_id UUID, max_depth INT DEFAULT 3)
RETURNS TABLE(profile_id UUID, depth INT) AS $$
  WITH RECURSIVE walk AS (
    SELECT root_id AS pid, 0 AS d
    UNION
    SELECT
      CASE WHEN r.profile_a = w.pid THEN r.profile_b ELSE r.profile_a END,
      w.d + 1
    FROM walk w
    JOIN relationships r ON (r.profile_a = w.pid OR r.profile_b = w.pid)
                         AND r.deleted_at IS NULL
    WHERE w.d < max_depth
  )
  SELECT DISTINCT pid, min(d) FROM walk GROUP BY pid;
$$ LANGUAGE sql STABLE;
