export const RELATIONSHIP_ERROR_KEYS = {
  unsupported_relationship_type: 'relationshipErrors.unsupportedRelationshipType',
  self_relationship: 'relationshipErrors.selfRelationship',
  existing_parent_child: 'relationshipErrors.existingParentChild',
  ancestor_already_exists: 'relationshipErrors.ancestorAlreadyExists',
  ancestry_cycle: 'relationshipErrors.ancestryCycle',
  siblings_cannot_be_parent_child: 'relationshipErrors.siblingsCannotBeParentChild',
  too_many_parents: 'relationshipErrors.tooManyParents',
  existing_marriage: 'relationshipErrors.existingMarriage',
  siblings_cannot_marry: 'relationshipErrors.siblingsCannotMarry',
  ancestor_descendant_cannot_marry: 'relationshipErrors.ancestorDescendantCannotMarry',
};

export function hasParentChildPath(rels, ancestorId, descendantId) {
  const visited = new Set();
  const queue = rels
    .filter((rel) => rel.type === 'parent' && rel.a === ancestorId)
    .map((rel) => rel.b);

  while (queue.length > 0) {
    const currentId = queue.shift();
    if (currentId === descendantId) return true;
    if (visited.has(currentId)) continue;
    visited.add(currentId);
    rels.forEach((rel) => {
      if (rel.type === 'parent' && rel.a === currentId && !visited.has(rel.b)) {
        queue.push(rel.b);
      }
    });
  }

  return false;
}

export function sharesParent(rels, profileA, profileB) {
  const parentsA = new Set(
    rels
      .filter((rel) => rel.type === 'parent' && rel.b === profileA)
      .map((rel) => rel.a)
  );

  return rels.some((rel) => rel.type === 'parent' && rel.b === profileB && parentsA.has(rel.a));
}

export function getParentIds(rels, childId) {
  return rels
    .filter((rel) => rel.type === 'parent' && rel.b === childId)
    .map((rel) => rel.a);
}

export function findSpouseId(rels, personId) {
  const marriage = rels.find((rel) => rel.type === 'marriage' && (rel.a === personId || rel.b === personId));
  if (!marriage) return null;
  return marriage.a === personId ? marriage.b : marriage.a;
}

export function validateParentChildRelationship(rels, parentId, childId) {
  if (!parentId || !childId) return 'unsupported_relationship_type';
  if (parentId === childId) return 'self_relationship';
  if (rels.some((rel) => rel.type === 'parent' && rel.a === parentId && rel.b === childId)) return 'existing_parent_child';
  if (hasParentChildPath(rels, parentId, childId)) return 'ancestor_already_exists';
  if (hasParentChildPath(rels, childId, parentId)) return 'ancestry_cycle';
  if (sharesParent(rels, parentId, childId)) return 'siblings_cannot_be_parent_child';
  if (getParentIds(rels, childId).length >= 2) return 'too_many_parents';
  return null;
}

export function validateMarriageRelationship(rels, profileA, profileB) {
  if (!profileA || !profileB) return 'unsupported_relationship_type';
  if (profileA === profileB) return 'self_relationship';
  if (findSpouseId(rels, profileA) || findSpouseId(rels, profileB)) return 'existing_marriage';
  if (sharesParent(rels, profileA, profileB)) return 'siblings_cannot_marry';
  if (hasParentChildPath(rels, profileA, profileB) || hasParentChildPath(rels, profileB, profileA)) {
    return 'ancestor_descendant_cannot_marry';
  }
  return null;
}

export function getRelationshipErrorMessage(t, errorCode, fallbackKey) {
  const translationKey = RELATIONSHIP_ERROR_KEYS[errorCode];
  if (translationKey) return t(translationKey);
  if (fallbackKey) return t(fallbackKey);
  return null;
}