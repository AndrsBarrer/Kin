import assert from 'node:assert/strict';
import { once } from 'node:events';
import { mkdtemp, rm } from 'node:fs/promises';
import os from 'node:os';
import path from 'node:path';
import test from 'node:test';

process.env.NODE_ENV = 'test';
process.env.KIN_DISABLE_SERVER_LISTEN = '1';
process.env.FRONTEND_URL = 'http://localhost:4173';
process.env.API_BASE_URL = 'http://localhost:3001/api';

const tempDir = await mkdtemp(path.join(os.tmpdir(), 'kin-api-tests-'));
process.env.DATABASE_PATH = path.join(tempDir, 'kin-test.sqlite');

const { default: app } = await import('./index.js');
const { db } = await import('./db/pool.js');

let server;
let baseUrl;

function closeServer() {
  if (!server) return Promise.resolve();
  return new Promise((resolve, reject) => {
    server.close((error) => {
      if (error) {
        reject(error);
        return;
      }
      resolve();
    });
  });
}

function resetDb() {
  db.exec(`
    DELETE FROM audit_log;
    DELETE FROM proposals;
    DELETE FROM media;
    DELETE FROM stories;
    DELETE FROM relationships;
    DELETE FROM facts;
    DELETE FROM magic_link_tokens;
    DELETE FROM session_tokens;
    DELETE FROM tree_members;
    DELETE FROM profiles;
    DELETE FROM trees;
    DELETE FROM users;
  `);
}

function getRow(sql, params = []) {
  return db.prepare(sql).get(...params);
}

function run(sql, params = []) {
  return db.prepare(sql).run(...params);
}

async function apiRequest(urlPath, options = {}) {
  const headers = { accept: 'application/json', ...(options.headers || {}) };
  if (options.token) {
    headers.authorization = `Bearer ${options.token}`;
  }
  if (options.body !== undefined) {
    headers['content-type'] = 'application/json';
  }

  const response = await fetch(`${baseUrl}${urlPath}`, {
    method: options.method || 'GET',
    headers,
    body: options.body !== undefined ? JSON.stringify(options.body) : undefined,
    redirect: options.redirect,
  });

  const contentType = response.headers.get('content-type') || '';
  const body = contentType.includes('application/json')
    ? await response.json()
    : await response.text();

  return { status: response.status, headers: response.headers, body };
}

async function bootstrap() {
  const response = await apiRequest('/api/bootstrap', { method: 'POST' });
  assert.equal(response.status, 201);
  return {
    token: response.body.sessionToken,
    treeId: response.body.tree.id,
    userId: response.body.userId,
  };
}

async function createProfile(token, treeId, overrides = {}) {
  const response = await apiRequest('/api/profiles', {
    method: 'POST',
    token,
    body: {
      treeId,
      firstName: 'Test',
      lastName: 'Person',
      maidenName: '',
      isLiving: true,
      skipDuplicateCheck: true,
      metadata: { branch: 'paternal' },
      ...overrides,
    },
  });

  assert.equal(response.status, 201);
  return response.body;
}

async function createMagicSession(email, displayName = 'Guest User', options = {}) {
  const magicResponse = await apiRequest('/api/auth/magic-link', {
    method: 'POST',
    body: {
      email,
      displayName,
      createAccount: options.createAccount ?? true,
    },
  });
  assert.equal(magicResponse.status, 200);

  const tokenRow = getRow(
    `SELECT m.token
     FROM magic_link_tokens m
     JOIN users u ON u.id = m.user_id
     WHERE u.email = ?
     ORDER BY m.created_at DESC
     LIMIT 1`,
    [email.toLowerCase()]
  );

  assert.ok(tokenRow?.token);

  const verifyResponse = await apiRequest('/api/auth/verify', {
    method: 'POST',
    body: { token: tokenRow.token },
  });
  assert.equal(verifyResponse.status, 200);

  return {
    user: verifyResponse.body.user,
    token: verifyResponse.body.token,
    magicToken: tokenRow.token,
  };
}

test.before(async () => {
  server = app.listen(0, '127.0.0.1');
  await once(server, 'listening');
  const address = server.address();
  baseUrl = `http://127.0.0.1:${address.port}`;
});

test.beforeEach(() => {
  resetDb();
});

test.after(async () => {
  await closeServer();
  db.close();
  await rm(tempDir, { recursive: true, force: true });
});

test('health, auth, bootstrap, and trees endpoints stay functional', async () => {
  const health = await apiRequest('/api/health');
  assert.equal(health.status, 200);
  assert.deepEqual(health.body, { status: 'ok' });

  const admin = await bootstrap();

  const me = await apiRequest('/api/auth/me', { token: admin.token });
  assert.equal(me.status, 200);
  assert.equal(me.body.id, admin.userId);

  const trees = await apiRequest('/api/trees', { token: admin.token });
  assert.equal(trees.status, 200);
  assert.equal(trees.body.length, 1);
  assert.equal(trees.body[0].id, admin.treeId);

  const singleTree = await apiRequest(`/api/trees/${admin.treeId}`, { token: admin.token });
  assert.equal(singleTree.status, 200);
  assert.equal(singleTree.body.id, admin.treeId);

  const createdTree = await apiRequest('/api/trees', {
    method: 'POST',
    token: admin.token,
    body: { name: 'Research Tree', description: 'Secondary branch' },
  });
  assert.equal(createdTree.status, 201);

  const deletedTree = await apiRequest(`/api/trees/${createdTree.body.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deletedTree.status, 200);
  assert.equal(deletedTree.body.success, true);

  const guest = await createMagicSession('guest@example.com', 'Guest Member');

  const logout = await apiRequest('/api/auth/logout', {
    method: 'POST',
    token: guest.token,
  });
  assert.equal(logout.status, 200);

  const meAfterLogout = await apiRequest('/api/auth/me', { token: guest.token });
  assert.equal(meAfterLogout.status, 401);
});

test('existing accounts can request a magic-link sign-in by email only, while new accounts must be created explicitly', async () => {
  await createMagicSession('safety@example.com', 'Safiya Carter');

  const existingEmailOnly = await apiRequest('/api/auth/magic-link', {
    method: 'POST',
    body: {
      email: 'safety@example.com',
    },
  });
  assert.equal(existingEmailOnly.status, 200);

  const unknownWithoutCreate = await apiRequest('/api/auth/magic-link', {
    method: 'POST',
    body: {
      email: 'newperson@example.com',
    },
  });
  assert.equal(unknownWithoutCreate.status, 404);
  assert.equal(unknownWithoutCreate.body.error, 'No account exists for this email yet. Create an account first or use a tree access code.');

  const createAccountMissingName = await apiRequest('/api/auth/magic-link', {
    method: 'POST',
    body: {
      email: 'newperson@example.com',
      createAccount: true,
    },
  });
  assert.equal(createAccountMissingName.status, 400);
  assert.equal(createAccountMissingName.body.error, 'Enter your full name to create an account');

  const createAccount = await apiRequest('/api/auth/magic-link', {
    method: 'POST',
    body: {
      email: 'newperson@example.com',
      displayName: 'New Person',
      createAccount: true,
    },
  });
  assert.equal(createAccount.status, 200);

  run(
    `INSERT INTO users (email, display_name)
     VALUES (?, ?)`,
    ['  LegacyUser@Example.com  ', 'Legacy User']
  );

  const legacyEmailOnly = await apiRequest('/api/auth/magic-link', {
    method: 'POST',
    body: {
      email: 'legacyuser@example.com',
    },
  });
  assert.equal(legacyEmailOnly.status, 200);

  const normalizedLegacy = getRow(
    'SELECT email FROM users WHERE lower(trim(email)) = ?',
    ['legacyuser@example.com']
  );
  assert.equal(normalizedLegacy.email, 'legacyuser@example.com');
});

test('existing users can sign in again with email only', async () => {
  const firstSession = await createMagicSession('returning@example.com', 'Returning Member');

  const logout = await apiRequest('/api/auth/logout', {
    method: 'POST',
    token: firstSession.token,
  });
  assert.equal(logout.status, 200);

  const magicLinkRequest = await apiRequest('/api/auth/magic-link', {
    method: 'POST',
    body: {
      email: 'returning@example.com',
    },
  });
  assert.equal(magicLinkRequest.status, 200);

  const tokenRow = getRow(
    `SELECT m.token
     FROM magic_link_tokens m
     JOIN users u ON u.id = m.user_id
     WHERE lower(trim(u.email)) = ?
     ORDER BY m.created_at DESC
     LIMIT 1`,
    ['returning@example.com']
  );
  assert.ok(tokenRow?.token);

  const verifyResponse = await apiRequest('/api/auth/verify', {
    method: 'POST',
    body: { token: tokenRow.token },
  });
  assert.equal(verifyResponse.status, 200);
  assert.equal(verifyResponse.body.user.email, 'returning@example.com');

  const me = await apiRequest('/api/auth/me', { token: verifyResponse.body.token });
  assert.equal(me.status, 200);
  assert.equal(me.body.email, 'returning@example.com');
});

test('profile updates persist owner-editable profile fields and allow clearing optional values', async () => {
  const admin = await bootstrap();

  const profile = await createProfile(admin.token, admin.treeId, {
    firstName: 'Elena',
    lastName: 'Rivera',
    maidenName: 'Marquez',
    metadata: {
      branch: 'maternal',
      gender: 'F',
      birth: 1982,
      bio: 'Original biography',
    },
  });

  const updated = await apiRequest(`/api/profiles/${profile.id}`, {
    method: 'PUT',
    token: admin.token,
    body: {
      firstName: 'Helena',
      lastName: 'Santos',
      maidenName: null,
      isLiving: false,
      metadata: {
        branch: 'family',
        gender: 'O',
        birth: 1984,
        death: 2024,
        bio: 'Updated biography',
      },
    },
  });

  assert.equal(updated.status, 200);
  assert.equal(updated.body.first_name, 'Helena');
  assert.equal(updated.body.last_name, 'Santos');
  assert.equal(updated.body.maiden_name, null);
  assert.equal(updated.body.is_living, 0);
  assert.equal(updated.body.metadata.branch, 'family');
  assert.equal(updated.body.facts.gender[0].value, 'O');
  assert.equal(updated.body.facts.birth_year[0].value, '1984');
  assert.equal(updated.body.facts.death_year[0].value, '2024');
  assert.equal(updated.body.facts.biography[0].value, 'Updated biography');

  const cleared = await apiRequest(`/api/profiles/${profile.id}`, {
    method: 'PUT',
    token: admin.token,
    body: {
      firstName: 'Helena',
      lastName: 'Santos',
      maidenName: null,
      isLiving: true,
      metadata: {
        branch: 'family',
        gender: 'O',
        birth: 1984,
        death: null,
        bio: '',
      },
    },
  });

  assert.equal(cleared.status, 200);
  assert.equal(cleared.body.first_name, 'Helena');
  assert.equal(cleared.body.last_name, 'Santos');
  assert.equal(cleared.body.is_living, 1);
  assert.equal(cleared.body.metadata.branch, 'family');
  assert.equal(cleared.body.facts.gender[0].value, 'O');
  assert.equal(cleared.body.facts.birth_year[0].value, '1984');
  assert.equal(cleared.body.facts.death_year, undefined);
  assert.equal(cleared.body.facts.biography, undefined);

  const storedProfile = getRow(
    `SELECT first_name, last_name, maiden_name, is_living, metadata
     FROM profiles
     WHERE id = ?`,
    [profile.id]
  );
  assert.equal(storedProfile.first_name, 'Helena');
  assert.equal(storedProfile.last_name, 'Santos');
  assert.equal(storedProfile.maiden_name, null);
  assert.equal(storedProfile.is_living, 1);
  assert.equal(JSON.parse(storedProfile.metadata).branch, 'family');
});

test('profile creation rejects rapid duplicate submissions for the same payload', async () => {
  const admin = await bootstrap();
  const payload = {
    treeId: admin.treeId,
    firstName: 'Jesus',
    lastName: 'Rodriguez',
    maidenName: '',
    isLiving: true,
    skipDuplicateCheck: true,
    metadata: {
      branch: 'paternal',
      gender: 'M',
      birth: 1980,
      death: null,
      bio: 'Added once',
    },
  };

  const firstCreate = await apiRequest('/api/profiles', {
    method: 'POST',
    token: admin.token,
    body: payload,
  });
  assert.equal(firstCreate.status, 201);

  const secondCreate = await apiRequest('/api/profiles', {
    method: 'POST',
    token: admin.token,
    body: payload,
  });
  assert.equal(secondCreate.status, 409);
  assert.equal(secondCreate.body.code, 'duplicate_profile_submission');
  assert.equal(secondCreate.body.profileId, firstCreate.body.id);

  const duplicateCount = getRow(
    `SELECT COUNT(*) AS count
     FROM profiles
     WHERE tree_id = ?
       AND first_name = ?
       AND last_name = ?
       AND deleted_at IS NULL`,
    [admin.treeId, 'Jesus', 'Rodriguez']
  );
  assert.equal(duplicateCount.count, 1);
});

test('profiles and join endpoints cover creation, invite verification, claim, and deletion flows', async () => {
  const admin = await bootstrap();

  const firstProfile = await createProfile(admin.token, admin.treeId, {
    firstName: 'Alice',
    lastName: 'Walker',
    metadata: { branch: 'maternal', birth: 1980 },
  });

  const duplicates = await apiRequest(
    `/api/profiles/duplicates?treeId=${admin.treeId}&firstName=Alice&lastName=Walker`,
    { token: admin.token }
  );
  assert.equal(duplicates.status, 200);
  assert.ok(duplicates.body.some((profile) => profile.id === firstProfile.id));

  const profileList = await apiRequest(`/api/profiles?treeId=${admin.treeId}`);
  assert.equal(profileList.status, 200);
  assert.ok(profileList.body.some((profile) => profile.id === firstProfile.id));

  const singleProfile = await apiRequest(`/api/profiles/${firstProfile.id}`, { token: admin.token });
  assert.equal(singleProfile.status, 200);

  const profileInvite = getRow(
    'SELECT invite_token, public_slug FROM profiles WHERE id = ?',
    [firstProfile.id]
  );

  const publicProfile = await apiRequest(`/api/profiles/public/${profileInvite.public_slug}`);
  assert.equal(publicProfile.status, 200);
  assert.equal(publicProfile.body.id, firstProfile.id);

  const joinVerify = await apiRequest(`/api/join/verify?token=${profileInvite.invite_token}`);
  assert.equal(joinVerify.status, 200);
  assert.equal(joinVerify.body.id, firstProfile.id);

  const joinClaim = await apiRequest('/api/join/claim', {
    method: 'POST',
    body: {
      token: profileInvite.invite_token,
      email: 'alice@example.com',
      displayName: 'Alice Walker',
      password: 'password123',
    },
  });
  assert.equal(joinClaim.status, 200);
  assert.equal(joinClaim.body.profileId, firstProfile.id);

  const login = await apiRequest('/api/auth/login', {
    method: 'POST',
    body: { email: 'alice@example.com', password: 'password123' },
  });
  assert.equal(login.status, 200);
  assert.equal(login.body.user.email, 'alice@example.com');

  const magicLinkForClaimedUser = await apiRequest('/api/auth/magic-link', {
    method: 'POST',
    body: {
      email: 'alice@example.com',
    },
  });
  assert.equal(magicLinkForClaimedUser.status, 200);

  const secondProfile = await createProfile(admin.token, admin.treeId, {
    firstName: 'Bob',
    lastName: 'Walker',
  });
  const secondInvite = getRow('SELECT invite_token FROM profiles WHERE id = ?', [secondProfile.id]);

  const authenticatedGuest = await createMagicSession('member@example.com', 'Authenticated Member');
  const claimAuthenticated = await apiRequest('/api/join/claim-authenticated', {
    method: 'POST',
    token: authenticatedGuest.token,
    body: { token: secondInvite.invite_token },
  });
  assert.equal(claimAuthenticated.status, 200);
  assert.equal(claimAuthenticated.body.profileId, secondProfile.id);

  const updatedProfile = await apiRequest(`/api/profiles/${secondProfile.id}`, {
    method: 'PUT',
    token: admin.token,
    body: { maidenName: 'Stone', metadata: { branch: 'family' } },
  });
  assert.equal(updatedProfile.status, 200);
  assert.equal(updatedProfile.body.maiden_name, 'Stone');

  const deletedProfile = await apiRequest(`/api/profiles/${secondProfile.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deletedProfile.status, 200);
  assert.equal(deletedProfile.body.message, 'Profile deleted');
});

test('tree access codes let a new member join a tree and create a claimed profile', async () => {
  const admin = await bootstrap();

  const accessCode = await apiRequest(`/api/trees/${admin.treeId}/access-code`, {
    method: 'POST',
    token: admin.token,
  });
  assert.equal(accessCode.status, 201);
  assert.ok(accessCode.body.code);

  const joinTree = await apiRequest('/api/join/tree-access', {
    method: 'POST',
    body: {
      treeId: admin.treeId,
      code: accessCode.body.code,
      email: 'newmember@example.com',
      displayName: 'New Member',
    },
  });
  assert.equal(joinTree.status, 200);
  assert.equal(joinTree.body.treeId, admin.treeId);
  assert.ok(joinTree.body.token);
  assert.ok(joinTree.body.profileId);
  assert.equal(joinTree.body.createdProfile, true);

  const membership = getRow(
    `SELECT role
     FROM tree_members
     WHERE tree_id = ? AND user_id = ?`,
    [admin.treeId, joinTree.body.user.id]
  );
  assert.equal(membership?.role, 'contributor');

  const claimedProfile = getRow(
    `SELECT claimed_by, first_name, last_name
     FROM profiles
     WHERE id = ?`,
    [joinTree.body.profileId]
  );
  assert.equal(claimedProfile?.claimed_by, joinTree.body.user.id);
  assert.equal(claimedProfile?.first_name, 'New');
  assert.equal(claimedProfile?.last_name, 'Member');

  const treeAccess = await apiRequest(`/api/trees/${admin.treeId}`, {
    token: joinTree.body.token,
  });
  assert.equal(treeAccess.status, 200);
  assert.equal(treeAccess.body.id, admin.treeId);
});

test('tree access codes can be redeemed from the main sign-in flow without a tree link', async () => {
  const admin = await bootstrap();

  const accessCode = await apiRequest(`/api/trees/${admin.treeId}/access-code`, {
    method: 'POST',
    token: admin.token,
  });
  assert.equal(accessCode.status, 201);
  assert.ok(accessCode.body.code);

  const joinTree = await apiRequest('/api/join/tree-access-code', {
    method: 'POST',
    body: {
      code: accessCode.body.code,
      email: 'codeentry@example.com',
      displayName: 'Code Entry',
    },
  });
  assert.equal(joinTree.status, 200);
  assert.equal(joinTree.body.treeId, admin.treeId);
  assert.ok(joinTree.body.token);
  assert.ok(joinTree.body.profileId);

  const membership = getRow(
    `SELECT role
     FROM tree_members
     WHERE tree_id = ? AND user_id = ?`,
    [admin.treeId, joinTree.body.user.id]
  );
  assert.equal(membership?.role, 'contributor');
});

test('multiple family trees stay isolated across separate owners and invite flows', async () => {
  const alex = await bootstrap();
  const sarah = await createMagicSession('sarah@example.com', 'Sarah Family');

  const sarahTree = await apiRequest('/api/trees', {
    method: 'POST',
    token: sarah.token,
    body: {
      name: 'Sarah Family Tree',
      description: 'A separate family tree',
    },
  });
  assert.equal(sarahTree.status, 201);
  assert.notEqual(sarahTree.body.id, alex.treeId);

  const alexInviteProfile = await createProfile(alex.token, alex.treeId, {
    firstName: 'Alex',
    lastName: 'Cousin',
  });
  const sarahInviteProfile = await createProfile(sarah.token, sarahTree.body.id, {
    firstName: 'Sarah',
    lastName: 'Cousin',
  });

  const alexInvite = getRow('SELECT invite_token FROM profiles WHERE id = ?', [alexInviteProfile.id]);
  const sarahInvite = getRow('SELECT invite_token FROM profiles WHERE id = ?', [sarahInviteProfile.id]);

  const alexInvitee = await apiRequest('/api/join/claim', {
    method: 'POST',
    body: {
      token: alexInvite.invite_token,
      email: 'alex-family@example.com',
      displayName: 'Alex Family Member',
      password: 'password123',
    },
  });
  assert.equal(alexInvitee.status, 200);
  assert.equal(alexInvitee.body.profileId, alexInviteProfile.id);

  const sarahInvitee = await apiRequest('/api/join/claim', {
    method: 'POST',
    body: {
      token: sarahInvite.invite_token,
      email: 'sarah-family@example.com',
      displayName: 'Sarah Family Member',
      password: 'password123',
    },
  });
  assert.equal(sarahInvitee.status, 200);
  assert.equal(sarahInvitee.body.profileId, sarahInviteProfile.id);

  const alexInviteMemberships = db.prepare(
    `SELECT tree_id
     FROM tree_members
     WHERE user_id = ?
     ORDER BY tree_id`
  ).all(alexInvitee.body.user.id);
  assert.deepEqual(alexInviteMemberships.map((row) => row.tree_id), [alex.treeId]);

  const sarahInviteMemberships = db.prepare(
    `SELECT tree_id
     FROM tree_members
     WHERE user_id = ?
     ORDER BY tree_id`
  ).all(sarahInvitee.body.user.id);
  assert.deepEqual(sarahInviteMemberships.map((row) => row.tree_id), [sarahTree.body.id]);

  const alexTrees = await apiRequest('/api/trees', { token: alex.token });
  assert.equal(alexTrees.status, 200);
  assert.ok(alexTrees.body.some((tree) => tree.id === alex.treeId));
  assert.ok(!alexTrees.body.some((tree) => tree.id === sarahTree.body.id));

  const sarahTrees = await apiRequest('/api/trees', { token: sarah.token });
  assert.equal(sarahTrees.status, 200);
  assert.ok(sarahTrees.body.some((tree) => tree.id === sarahTree.body.id));
  assert.ok(!sarahTrees.body.some((tree) => tree.id === alex.treeId));

  const alexInviteVerify = await apiRequest(`/api/join/verify?token=${alexInvite.invite_token}`);
  assert.equal(alexInviteVerify.status, 404);
  assert.equal(alexInviteVerify.body.error, 'Invalid or expired invite token');
});

test('signed-in tree members can claim an unclaimed profile after confirming their email', async () => {
  const admin = await bootstrap();
  const profile = await createProfile(admin.token, admin.treeId, {
    firstName: 'Carmen',
    lastName: 'Rivera',
  });
  const member = await createMagicSession('carmen@example.com', 'Carmen Rivera');

  run(
    `INSERT INTO tree_members (tree_id, user_id, role)
     VALUES (?, ?, 'contributor')`,
    [admin.treeId, member.user.id]
  );

  const mismatch = await apiRequest(`/api/profiles/${profile.id}/claim`, {
    method: 'POST',
    token: member.token,
    body: { email: 'wrong@example.com' },
  });
  assert.equal(mismatch.status, 400);

  const wrongNameMember = await createMagicSession('someoneelse@example.com', 'Wrong Person');
  run(
    `INSERT INTO tree_members (tree_id, user_id, role)
     VALUES (?, ?, 'contributor')`,
    [admin.treeId, wrongNameMember.user.id]
  );

  const nameMismatch = await apiRequest(`/api/profiles/${profile.id}/claim`, {
    method: 'POST',
    token: wrongNameMember.token,
    body: { email: 'someoneelse@example.com' },
  });
  assert.equal(nameMismatch.status, 400);
  assert.equal(nameMismatch.body.error, 'Signed-in name does not match this profile closely enough to claim it');

  const claimed = await apiRequest(`/api/profiles/${profile.id}/claim`, {
    method: 'POST',
    token: member.token,
    body: { email: 'carmen@example.com' },
  });
  assert.equal(claimed.status, 200);
  assert.equal(claimed.body.claimed_by, member.user.id);

  const claimedProfile = getRow(
    `SELECT claimed_by
     FROM profiles
     WHERE id = ?`,
    [profile.id]
  );
  assert.equal(claimedProfile?.claimed_by, member.user.id);
});

test('relationships and graph endpoints only support parent-child and marriage relationships', async () => {
  const admin = await bootstrap();
  const parent = await createProfile(admin.token, admin.treeId, {
    firstName: 'Parent',
    lastName: 'Tester',
  });
  const child = await createProfile(admin.token, admin.treeId, {
    firstName: 'Child',
    lastName: 'Tester',
  });
  const siblingChild = await createProfile(admin.token, admin.treeId, {
    firstName: 'Sibling Child',
    lastName: 'Tester',
  });
  const spouse = await createProfile(admin.token, admin.treeId, {
    firstName: 'Spouse',
    lastName: 'Tester',
  });
  const extraParent = await createProfile(admin.token, admin.treeId, {
    firstName: 'Extra Parent',
    lastName: 'Tester',
  });
  const grandchild = await createProfile(admin.token, admin.treeId, {
    firstName: 'Grandchild',
    lastName: 'Tester',
  });

  const parentRelationship = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'parent_child',
      profileA: parent.id,
      profileB: child.id,
      roleA: 'parent',
      roleB: 'child',
      startYear: 2008,
    },
  });
  assert.equal(parentRelationship.status, 201);

  const siblingParentRelationship = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'parent_child',
      profileA: parent.id,
      profileB: siblingChild.id,
    },
  });
  assert.equal(siblingParentRelationship.status, 201);

  const grandchildRelationship = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'parent_child',
      profileA: child.id,
      profileB: grandchild.id,
    },
  });
  assert.equal(grandchildRelationship.status, 201);

  const secondParentRelationship = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'parent_child',
      profileA: spouse.id,
      profileB: child.id,
    },
  });
  assert.equal(secondParentRelationship.status, 201);

  const marriageRelationship = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'marriage',
      profileA: parent.id,
      profileB: spouse.id,
      startYear: 2010,
    },
  });
  assert.equal(marriageRelationship.status, 201);

  const unsupportedSibling = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'sibling',
      profileA: child.id,
      profileB: spouse.id,
    },
  });
  assert.equal(unsupportedSibling.status, 400);
  assert.equal(unsupportedSibling.body.code, 'unsupported_relationship_type');
  assert.equal(unsupportedSibling.body.error, 'Only parent/child and spouse/partner relationships are supported');

  const duplicateParentRelationship = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'parent_child',
      profileA: parent.id,
      profileB: child.id,
    },
  });
  assert.equal(duplicateParentRelationship.status, 409);
  assert.equal(duplicateParentRelationship.body.code, 'existing_parent_child');

  const siblingAsParent = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'parent_child',
      profileA: siblingChild.id,
      profileB: child.id,
    },
  });
  assert.equal(siblingAsParent.status, 409);
  assert.equal(siblingAsParent.body.code, 'siblings_cannot_be_parent_child');
  assert.equal(siblingAsParent.body.error, 'Siblings cannot be assigned as parent and child');

  const thirdParent = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'parent_child',
      profileA: extraParent.id,
      profileB: child.id,
    },
  });
  assert.equal(thirdParent.status, 409);
  assert.equal(thirdParent.body.code, 'too_many_parents');

  const ancestorAsDirectParent = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'parent_child',
      profileA: parent.id,
      profileB: grandchild.id,
    },
  });
  assert.equal(ancestorAsDirectParent.status, 409);
  assert.equal(ancestorAsDirectParent.body.code, 'ancestor_already_exists');
  assert.equal(ancestorAsDirectParent.body.error, 'This person is already an ancestor of that child');

  const ancestryCycle = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'parent_child',
      profileA: grandchild.id,
      profileB: parent.id,
    },
  });
  assert.equal(ancestryCycle.status, 409);
  assert.equal(ancestryCycle.body.code, 'ancestry_cycle');
  assert.equal(ancestryCycle.body.error, 'This relationship would create an ancestry cycle');

  const siblingMarriage = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'marriage',
      profileA: child.id,
      profileB: siblingChild.id,
    },
  });
  assert.equal(siblingMarriage.status, 409);
  assert.equal(siblingMarriage.body.code, 'siblings_cannot_marry');

  const ancestorMarriage = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'marriage',
      profileA: parent.id,
      profileB: grandchild.id,
    },
  });
  assert.equal(ancestorMarriage.status, 409);
  assert.equal(ancestorMarriage.body.code, 'ancestor_descendant_cannot_marry');

  const secondMarriage = await apiRequest('/api/relationships', {
    method: 'POST',
    token: admin.token,
    body: {
      treeId: admin.treeId,
      type: 'marriage',
      profileA: parent.id,
      profileB: extraParent.id,
    },
  });
  assert.equal(secondMarriage.status, 409);
  assert.equal(secondMarriage.body.code, 'existing_marriage');

  const relationships = await apiRequest(`/api/relationships?treeId=${admin.treeId}`);
  assert.equal(relationships.status, 200);
  assert.equal(relationships.body.length, 5);
  assert.deepEqual(
    new Set(relationships.body.map((relationship) => relationship.type)),
    new Set(['parent_child', 'marriage'])
  );

  const neighborhood = await apiRequest(`/api/graph/neighborhood?profileId=${parent.id}&depth=2`);
  assert.equal(neighborhood.status, 200);
  assert.ok(neighborhood.body.profiles.some((profile) => profile.id === child.id));
  assert.ok(neighborhood.body.profiles.some((profile) => profile.id === siblingChild.id));
  assert.ok(neighborhood.body.profiles.some((profile) => profile.id === spouse.id));
  assert.ok(neighborhood.body.profiles.some((profile) => profile.id === grandchild.id));
  assert.ok(neighborhood.body.relationships.some((relationship) => relationship.id === parentRelationship.body.id));
  assert.ok(neighborhood.body.relationships.some((relationship) => relationship.id === siblingParentRelationship.body.id));
  assert.ok(neighborhood.body.relationships.some((relationship) => relationship.id === marriageRelationship.body.id));
  assert.ok(neighborhood.body.relationships.some((relationship) => relationship.id === grandchildRelationship.body.id));
  assert.ok(neighborhood.body.relationships.some((relationship) => relationship.id === secondParentRelationship.body.id));
  assert.ok(!neighborhood.body.relationships.some((relationship) => relationship.type === 'sibling'));

  const deleteMarriage = await apiRequest(`/api/relationships/${marriageRelationship.body.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deleteMarriage.status, 200);
  assert.equal(deleteMarriage.body.message, 'Relationship deleted');

  const deleteParentChild = await apiRequest(`/api/relationships/${parentRelationship.body.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deleteParentChild.status, 200);
  assert.equal(deleteParentChild.body.message, 'Relationship deleted');

  const deleteSiblingParent = await apiRequest(`/api/relationships/${siblingParentRelationship.body.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deleteSiblingParent.status, 200);
  assert.equal(deleteSiblingParent.body.message, 'Relationship deleted');

  const deleteGrandchild = await apiRequest(`/api/relationships/${grandchildRelationship.body.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deleteGrandchild.status, 200);
  assert.equal(deleteGrandchild.body.message, 'Relationship deleted');

  const deleteSecondParent = await apiRequest(`/api/relationships/${secondParentRelationship.body.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deleteSecondParent.status, 200);
  assert.equal(deleteSecondParent.body.message, 'Relationship deleted');
});

test('facts and proposals endpoints cover direct edits, owner actions, and proposal resolution', async () => {
  const admin = await bootstrap();
  const profile = await createProfile(admin.token, admin.treeId, {
    firstName: 'Owner',
    lastName: 'Profile',
  });

  const initialFact = await apiRequest('/api/facts', {
    method: 'POST',
    token: admin.token,
    body: {
      profileId: profile.id,
      factType: 'occupation',
      value: 'Engineer',
      privacy: 'family',
    },
  });
  assert.equal(initialFact.status, 201);

  const claimProfile = await apiRequest(`/api/profiles/${profile.id}/claim`, {
    method: 'POST',
    token: admin.token,
  });
  assert.equal(claimProfile.status, 200);

  const verifyFact = await apiRequest(`/api/facts/${initialFact.body.id}/verify`, {
    method: 'PUT',
    token: admin.token,
  });
  assert.equal(verifyFact.status, 200);
  assert.equal(verifyFact.body.verified_by_owner, 1);

  const lockFact = await apiRequest(`/api/facts/${initialFact.body.id}/lock`, {
    method: 'PUT',
    token: admin.token,
  });
  assert.equal(lockFact.status, 200);
  assert.equal(lockFact.body.is_locked, 1);

  const unlockFact = await apiRequest(`/api/facts/${initialFact.body.id}/lock`, {
    method: 'PUT',
    token: admin.token,
  });
  assert.equal(unlockFact.status, 200);
  assert.equal(unlockFact.body.is_locked, 0);

  const ownerUpdate = await apiRequest(`/api/facts/${initialFact.body.id}`, {
    method: 'PUT',
    token: admin.token,
    body: { value: 'Architect', privacy: 'private' },
  });
  assert.equal(ownerUpdate.status, 200);
  assert.equal(ownerUpdate.body.value, 'Architect');

  const contributor = await createMagicSession('contributor@example.com', 'Contributor');
  run(
    `INSERT INTO tree_members (tree_id, user_id, role)
     VALUES (?, ?, 'contributor')`,
    [admin.treeId, contributor.user.id]
  );

  const proposalResponse = await apiRequest('/api/facts', {
    method: 'POST',
    token: contributor.token,
    body: {
      profileId: profile.id,
      factType: 'hobby',
      value: 'Cycling',
      privacy: 'family',
    },
  });
  assert.equal(proposalResponse.status, 202);
  const proposalToken = proposalResponse.body.proposal.action_token;

  const pendingProposals = await apiRequest(`/api/proposals?profileId=${profile.id}`, {
    token: admin.token,
  });
  assert.equal(pendingProposals.status, 200);
  assert.equal(pendingProposals.body.length, 1);

  const acceptProposal = await apiRequest(`/api/proposals/${proposalToken}/accept`, {
    method: 'POST',
  });
  assert.equal(acceptProposal.status, 200);
  assert.equal(acceptProposal.body.message, 'Proposal accepted');

  const acceptedFact = getRow(
    'SELECT value FROM facts WHERE profile_id = ? AND fact_type = ?',
    [profile.id, 'hobby']
  );
  assert.equal(acceptedFact.value, 'Cycling');

  const rejectProposalSource = await apiRequest('/api/facts', {
    method: 'POST',
    token: contributor.token,
    body: {
      profileId: profile.id,
      factType: 'residence',
      value: 'Madrid',
      privacy: 'family',
    },
  });
  assert.equal(rejectProposalSource.status, 202);

  const rejectRedirect = await apiRequest(
    `/api/proposals/${rejectProposalSource.body.proposal.action_token}/reject`,
    { redirect: 'manual' }
  );
  assert.equal(rejectRedirect.status, 302);
  assert.equal(
    rejectRedirect.headers.get('location'),
    'http://localhost:4173/?proposal=rejected'
  );

  const removableFact = await apiRequest('/api/facts', {
    method: 'POST',
    token: admin.token,
    body: {
      profileId: profile.id,
      factType: 'nickname',
      value: 'O.P.',
      privacy: 'family',
    },
  });
  assert.equal(removableFact.status, 201);

  const deleteFact = await apiRequest(`/api/facts/${removableFact.body.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deleteFact.status, 200);
  assert.equal(deleteFact.body.message, 'Fact deleted');
});

test('stories and media endpoints cover create, read, update, list, and delete flows', async () => {
  const admin = await bootstrap();
  const profile = await createProfile(admin.token, admin.treeId, {
    firstName: 'Story',
    lastName: 'Subject',
  });

  const createStory = await apiRequest('/api/stories', {
    method: 'POST',
    token: admin.token,
    body: {
      profileId: profile.id,
      title: 'A family memory',
      body: 'This is an integration-test story.',
    },
  });
  assert.equal(createStory.status, 201);

  const storyList = await apiRequest(`/api/stories?profileId=${profile.id}`);
  assert.equal(storyList.status, 200);
  assert.equal(storyList.body.length, 1);

  const singleStory = await apiRequest(`/api/stories/${createStory.body.id}`);
  assert.equal(singleStory.status, 200);
  assert.equal(singleStory.body.title, 'A family memory');

  const updateStory = await apiRequest(`/api/stories/${createStory.body.id}`, {
    method: 'PUT',
    token: admin.token,
    body: { title: 'An updated family memory' },
  });
  assert.equal(updateStory.status, 200);
  assert.equal(updateStory.body.title, 'An updated family memory');

  const createMedia = await apiRequest('/api/media', {
    method: 'POST',
    token: admin.token,
    body: {
      profileId: profile.id,
      storyId: createStory.body.id,
      type: 'photo',
      url: 'https://example.com/photo.jpg',
      isProfilePhoto: true,
    },
  });
  assert.equal(createMedia.status, 201);
  assert.equal(createMedia.body.is_profile_photo, 1);

  const mediaList = await apiRequest(`/api/media?profileId=${profile.id}`);
  assert.equal(mediaList.status, 200);
  assert.equal(mediaList.body.length, 1);

  const deleteMedia = await apiRequest(`/api/media/${createMedia.body.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deleteMedia.status, 200);
  assert.equal(deleteMedia.body.message, 'Media deleted');

  const deleteStory = await apiRequest(`/api/stories/${createStory.body.id}`, {
    method: 'DELETE',
    token: admin.token,
  });
  assert.equal(deleteStory.status, 200);
  assert.equal(deleteStory.body.message, 'Story deleted');
});