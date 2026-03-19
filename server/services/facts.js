import pool from '../db/pool.js';

/**
 * Aggregate all facts for a profile into a structured object.
 * Returns { birth_date: "...", occupation: "...", ... }
 */
export async function aggregateFacts(profileId, privacyTiers = ['public', 'family', 'private']) {
  const placeholders = privacyTiers.map((_, i) => `$${i + 2}`).join(', ');
  const { rows } = pool.query(
    `SELECT id, fact_type, value, value_structured, privacy, verified_by_owner, is_locked
     FROM facts
     WHERE profile_id = $1
       AND deleted_at IS NULL
       AND privacy IN (${placeholders})
     ORDER BY created_at`,
    [profileId, ...privacyTiers]
  );

  const aggregated = {};
  for (const fact of rows) {
    if (!aggregated[fact.fact_type]) {
      aggregated[fact.fact_type] = [];
    }
    aggregated[fact.fact_type].push({
      id: fact.id,
      value: fact.value,
      structured: fact.value_structured,
      privacy: fact.privacy,
      verified: fact.verified_by_owner,
      locked: fact.is_locked,
    });
  }

  return aggregated;
}

/**
 * Add a fact to a profile. If the profile is claimed by another user,
 * creates a proposal instead if the adder isn't the owner.
 */
export async function addFact(profileId, { factType, value, valueStructured, privacy }, addedBy) {
  const { rows: [fact] } = pool.query(
    `INSERT INTO facts (profile_id, fact_type, value, value_structured, privacy, added_by)
     VALUES ($1, $2, $3, $4, $5, $6)
     RETURNING *`,
    [profileId, factType, value, valueStructured || null, privacy || 'family', addedBy]
  );

  return fact;
}

/**
 * Update an existing fact (soft-update: preserves audit trail).
 */
export async function updateFact(factId, { value, valueStructured, privacy }) {
  const { rows: [fact] } = pool.query(
    `UPDATE facts
     SET value = COALESCE($2, value),
         value_structured = COALESCE($3, value_structured),
         privacy = COALESCE($4, privacy)
     WHERE id = $1 AND deleted_at IS NULL
     RETURNING *`,
    [factId, value, valueStructured, privacy]
  );

  return fact;
}

/**
 * Soft-delete a fact.
 */
export async function deleteFact(factId) {
  pool.query(
    `UPDATE facts SET deleted_at = now() WHERE id = $1`,
    [factId]
  );
}
