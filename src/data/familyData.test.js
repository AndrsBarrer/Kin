import assert from 'node:assert/strict';
import test from 'node:test';

import { getRels } from './familyData.js';

test('getRels infers siblings from shared parents and does not require sibling edges', () => {
  const rels = [
    { id: 'pc-1', type: 'parent', a: 'parent-1', b: 'child-1' },
    { id: 'pc-2', type: 'parent', a: 'parent-1', b: 'child-2' },
    { id: 'pc-3', type: 'parent', a: 'parent-2', b: 'child-1' },
    { id: 'm-1', type: 'marriage', a: 'child-1', b: 'spouse-1' },
  ];

  assert.deepEqual(getRels('child-1', rels), [
    { id: 'parent-1', label: 'Parent', type: 'parent' },
    { id: 'parent-2', label: 'Parent', type: 'parent' },
    { id: 'spouse-1', label: 'Spouse', type: 'marriage' },
    { id: 'child-2', label: 'Sibling', type: 'sibling' },
  ]);

  assert.deepEqual(getRels('child-2', rels), [
    { id: 'parent-1', label: 'Parent', type: 'parent' },
    { id: 'child-1', label: 'Sibling', type: 'sibling' },
  ]);
});