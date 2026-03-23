const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

function getToken() {
  return localStorage.getItem('kin_token');
}

export function setToken(token) {
  if (token) localStorage.setItem('kin_token', token);
  else localStorage.removeItem('kin_token');
}

async function request(path, options = {}) {
  const token = getToken();
  const headers = { 'Content-Type': 'application/json', ...options.headers };
  if (token) headers['Authorization'] = `Bearer ${token}`;

  const res = await fetch(`${API_BASE}${path}`, { ...options, headers });
  if (!res.ok) {
    const body = await res.json().catch(() => ({}));
    const err = new Error(body.error || `HTTP ${res.status}`);
    err.status = res.status;
    err.body = body;
    throw err;
  }
  return res.json();
}

// ── Auth ────────────────────────────────────────────
export const auth = {
  sendMagicLink: ({ email, displayName, claimToken, treeId, createAccount, locale } = {}) => request('/auth/magic-link', { method: 'POST', body: JSON.stringify({ email, displayName, claimToken, treeId, createAccount, locale }) }),
  verify: (token) => request('/auth/verify', { method: 'POST', body: JSON.stringify({ token }) }),
  login: (email, password) => request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
  logout: () => request('/auth/logout', { method: 'POST' }),
  me: () => request('/auth/me'),
};

// ── Bootstrap ───────────────────────────────────────
export const bootstrap = {
  /** Auto-create a local user + default tree on first launch */
  init: () => request('/bootstrap', { method: 'POST' }),
};

// ── Trees ───────────────────────────────────────────
export const trees = {
  list: () => request('/trees'),
  get: (id) => request(`/trees/${id}`),
  create: (data) => request('/trees', { method: 'POST', body: JSON.stringify(data) }),
  createAccessCode: (id) => request(`/trees/${id}/access-code`, { method: 'POST' }),
  remove: (id) => request(`/trees/${id}`, { method: 'DELETE' }),
};

// ── Profiles ────────────────────────────────────────
export const profiles = {
  list: (treeId) => request(`/profiles?treeId=${encodeURIComponent(treeId)}`),
  get: (id) => request(`/profiles/${id}`),
  getPublic: (slug) => request(`/profiles/public/${encodeURIComponent(slug)}`),
  create: (data) => request('/profiles', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => request(`/profiles/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  claim: (id, email) => request(`/profiles/${id}/claim`, { method: 'POST', body: JSON.stringify({ email }) }),
  duplicates: (treeId, firstName, lastName) =>
    request(`/profiles/duplicates?treeId=${encodeURIComponent(treeId)}&firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}`),
};

export const media = {
  list: ({ profileId, treeId } = {}) => {
    const params = new URLSearchParams();
    if (profileId) params.set('profileId', profileId);
    if (treeId) params.set('treeId', treeId);
    return request(`/media?${params.toString()}`);
  },
  create: (data) => request('/media', { method: 'POST', body: JSON.stringify(data) }),
  remove: (id) => request(`/media/${id}`, { method: 'DELETE' }),
};

// ── People (local-first CRUD — wraps profiles + relationships) ──
export const people = {
  /** Fetch all people + rels for a tree and normalize to frontend shape */
  async fetchAll(treeId) {
    const [profileList, relList] = await Promise.all([
      profiles.list(treeId),
      relationships.list(treeId),
    ]);
    return { profiles: profileList, relationships: relList };
  },
  /** Create a person and any relationships, return { person, rels } */
  async createPerson(treeId, data) {
    const profile = await profiles.create({
      treeId,
      firstName: data.firstName,
      lastName: data.lastName,
      maidenName: data.maiden || null,
      isLiving: data.death ? false : true,
      metadata: {
        branch: data.branch,
        gender: data.gender,
        birth: data.birth,
        death: data.death,
        bio: data.bio,
      },
      skipDuplicateCheck: true,
    });

    const createdRels = [];
    const relPayloads = [];
    if (data.parent1) relPayloads.push({ treeId, type: 'parent_child', profileA: data.parent1, profileB: profile.id });
    if (data.parent2) relPayloads.push({ treeId, type: 'parent_child', profileA: data.parent2, profileB: profile.id });
    if (data.spouse)  relPayloads.push({ treeId, type: 'marriage', profileA: data.spouse, profileB: profile.id });

    for (const rp of relPayloads) {
      const rel = await relationships.create(rp);
      createdRels.push(rel);
    }

    return { profile, relationships: createdRels };
  },
};

// ── Join / Invite Token ─────────────────────────────
export const join = {
  /** Verify an invite token and get the person info (public, no auth needed) */
  verify: (token) => request(`/join/verify?token=${encodeURIComponent(token)}`),
  previewTree: (treeId) => request(`/join/tree/${encodeURIComponent(treeId)}`),
  /** Claim a profile via invite token + create account with email & password */
  claim: (token, email, displayName, password) =>
    request('/join/claim', { method: 'POST', body: JSON.stringify({ token, email, displayName, password }) }),
  claimAuthenticated: (token) =>
    request('/join/claim-authenticated', { method: 'POST', body: JSON.stringify({ token }) }),
  joinWithCode: ({ treeId, code, email, displayName }) =>
    request('/join/tree-access', { method: 'POST', body: JSON.stringify({ treeId, code, email, displayName }) }),
  joinWithAnyCode: ({ code, email, displayName }) =>
    request('/join/tree-access-code', { method: 'POST', body: JSON.stringify({ code, email, displayName }) }),
};

// ── Facts ───────────────────────────────────────────
export const facts = {
  add: (data) => request('/facts', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => request(`/facts/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  remove: (id) => request(`/facts/${id}`, { method: 'DELETE' }),
  verify: (id) => request(`/facts/${id}/verify`, { method: 'PUT' }),
  lock: (id) => request(`/facts/${id}/lock`, { method: 'PUT' }),
};

// ── Relationships ───────────────────────────────────
export const relationships = {
  list: (treeId) => request(`/relationships?treeId=${encodeURIComponent(treeId)}`),
  create: (data) => request('/relationships', { method: 'POST', body: JSON.stringify(data) }),
  remove: (id) => request(`/relationships/${id}`, { method: 'DELETE' }),
};

// ── Proposals ───────────────────────────────────────
export const proposals = {
  list: (profileId) => request(`/proposals?profileId=${encodeURIComponent(profileId)}`),
  accept: (actionToken) => request(`/proposals/${actionToken}/accept`, { method: 'POST' }),
  reject: (actionToken) => request(`/proposals/${actionToken}/reject`, { method: 'POST' }),
};

// ── Stories ─────────────────────────────────────────
export const stories = {
  list: (profileId) => request(`/stories?profileId=${encodeURIComponent(profileId)}`),
  get: (id) => request(`/stories/${id}`),
  create: (data) => request('/stories', { method: 'POST', body: JSON.stringify(data) }),
  update: (id, data) => request(`/stories/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  remove: (id) => request(`/stories/${id}`, { method: 'DELETE' }),
};

// ── Graph ───────────────────────────────────────────
export const graph = {
  neighborhood: (profileId, depth = 3) =>
    request(`/graph/neighborhood?profileId=${encodeURIComponent(profileId)}&depth=${depth}`),
};
