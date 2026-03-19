/**
 * Privacy middleware — strips private/family facts from profile responses
 * when the requester is unauthenticated or not a tree member,
 * AND the profile belongs to a living person.
 */
export function applyPrivacy(req, profileData, factsMap) {
  const isAuthed = !!req.user;
  const treeRole = req.treeRole; // set by requireTreeMember

  // If the profile is not living, all tiers are visible
  if (!profileData.is_living) {
    return factsMap;
  }

  // Determine allowed tiers
  let allowedTiers;
  if (!isAuthed) {
    allowedTiers = new Set(['public']);
  } else if (!treeRole) {
    // Authenticated but not a tree member
    allowedTiers = new Set(['public']);
  } else {
    // Tree member — can see family tier
    allowedTiers = new Set(['public', 'family']);

    // Profile owner or admin can see private tier
    if (
      treeRole === 'admin' ||
      (profileData.claimed_by && profileData.claimed_by === req.user.id)
    ) {
      allowedTiers.add('private');
    }
  }

  // Filter facts
  const filtered = {};
  for (const [factType, facts] of Object.entries(factsMap)) {
    const visible = facts.filter((f) => allowedTiers.has(f.privacy));
    if (visible.length > 0) {
      filtered[factType] = visible;
    }
  }

  return filtered;
}
