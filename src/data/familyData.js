const FAMILY_BRANCH_STYLE = {
  hex: '#6E6255',
  css: '#6E6255',
  bg: 'rgba(110,98,85,0.12)',
  three: 0x6E6255,
  label: 'Family member',
};

export const BRANCH = {
  family: FAMILY_BRANCH_STYLE,
  paternal: FAMILY_BRANCH_STYLE,
  maternal: FAMILY_BRANCH_STYLE,
  sibling: FAMILY_BRANCH_STYLE,
  married: FAMILY_BRANCH_STYLE,
};

// Data is now fetched from the API. These arrays are empty by default.
export const initialPeople = [];
export const initialRels = [];

export function getRels(id, rels) {
  const relations = [];
  const siblingIds = new Set();
  const parentIds = rels
    .filter((rel) => rel.type === 'parent' && rel.b === id)
    .map((rel) => rel.a);

  rels.forEach((rel) => {
    if (rel.type === 'marriage') {
      if (rel.a === id) relations.push({ id: rel.b, label: 'Spouse', type: 'marriage' });
      if (rel.b === id) relations.push({ id: rel.a, label: 'Spouse', type: 'marriage' });
      return;
    }

    if (rel.a === id) relations.push({ id: rel.b, label: 'Child', type: 'child' });
    if (rel.b === id) relations.push({ id: rel.a, label: 'Parent', type: 'parent' });
  });

  parentIds.forEach((parentId) => {
    rels.forEach((rel) => {
      if (rel.type !== 'parent' || rel.a !== parentId || rel.b === id || siblingIds.has(rel.b)) return;
      siblingIds.add(rel.b);
      relations.push({ id: rel.b, label: 'Sibling', type: 'sibling' });
    });
  });

  return relations;
}

export function bfs(s, e, rels) {
  const q = [[s]], vis = new Set([s]);
  while (q.length) {
    const path = q.shift(), cur = path[path.length - 1];
    if (cur === e) return path;
    for (const n of nbrs(cur, rels)) {
      if (!vis.has(n)) { vis.add(n); q.push([...path, n]); }
    }
  }
  return null;
}

function nbrs(id, rels) {
  const r = [];
  rels.forEach(x => { if (x.a === id) r.push(x.b); if (x.b === id) r.push(x.a); });
  return r;
}
