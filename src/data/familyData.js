export const BRANCH = {
  paternal: { hex: '#4a7fff', css: 'var(--accent)', bg: 'rgba(74,127,255,0.12)', three: 0x4a7fff, label: 'Paternal' },
  maternal: { hex: '#c9973a', css: 'var(--gold)', bg: 'rgba(201,151,58,0.12)', three: 0xc9973a, label: 'Maternal' },
  sibling:  { hex: '#b080e0', css: '#b080e0', bg: 'rgba(160,100,220,0.12)', three: 0xb080e0, label: 'Sibling branch' },
  married:  { hex: '#5ab88a', css: '#5ab88a', bg: 'rgba(90,184,138,0.12)', three: 0x5ab88a, label: 'Married in' },
};

// Data is now fetched from the API. These arrays are empty by default.
export const initialPeople = [];
export const initialRels = [];

export function getRels(id, rels) {
  const r = [];
  rels.forEach(x => {
    if (x.type === 'marriage') {
      if (x.a === id) r.push({ id: x.b, label: 'Spouse', type: 'marriage' });
      if (x.b === id) r.push({ id: x.a, label: 'Spouse', type: 'marriage' });
    } else {
      if (x.a === id) r.push({ id: x.b, label: 'Child', type: 'child' });
      if (x.b === id) r.push({ id: x.a, label: 'Parent', type: 'parent' });
    }
  });
  return r;
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
