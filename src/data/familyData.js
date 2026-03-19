export const BRANCH = {
  paternal: { hex: '#2F6B3E', css: 'var(--green)', bg: 'rgba(47,107,62,0.10)', three: 0x2F6B3E, label: 'Paternal' },
  maternal: { hex: '#1A5C8A', css: 'var(--accent)', bg: 'rgba(26,92,138,0.10)', three: 0x1A5C8A, label: 'Maternal' },
  sibling:  { hex: '#7A3A8A', css: '#7A3A8A', bg: 'rgba(122,58,138,0.10)', three: 0x7A3A8A, label: 'Sibling branch' },
  married:  { hex: '#8A5A1A', css: '#8A5A1A', bg: 'rgba(138,90,26,0.10)', three: 0x8A5A1A, label: 'Married in' },
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
