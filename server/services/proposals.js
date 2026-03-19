import cryptoRandomString from 'crypto-random-string';
import pool from '../db/pool.js';

/**
 * Create a proposal for editing/adding a fact on a claimed profile.
 */
export async function createProposal(profileId, proposedBy, { existingFactId, factType, value, structured }) {
  const actionToken = cryptoRandomString({ length: 48, type: 'url-safe' });

  const { rows: [proposal] } = await pool.query(
    `INSERT INTO proposals (profile_id, proposed_by, existing_fact_id, proposed_type, proposed_value, proposed_structured, action_token)
     VALUES ($1, $2, $3, $4, $5, $6, $7)
     RETURNING *`,
    [profileId, proposedBy, existingFactId || null, factType, value, structured || null, actionToken]
  );

  return proposal;
}

/**
 * Accept a proposal via action token — applies the change.
 */
export async function acceptProposal(actionToken) {
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    const { rows } = await client.query(
      `UPDATE proposals SET status = 'accepted', reviewed_at = now()
       WHERE action_token = $1 AND status = 'pending'
       RETURNING *`,
      [actionToken]
    );

    if (rows.length === 0) {
      await client.query('ROLLBACK');
      return null;
    }

    const proposal = rows[0];

    if (proposal.existing_fact_id) {
      // Update existing fact
      await client.query(
        `UPDATE facts SET value = $2, value_structured = $3
         WHERE id = $1 AND deleted_at IS NULL`,
        [proposal.existing_fact_id, proposal.proposed_value, proposal.proposed_structured]
      );
    } else {
      // Create new fact
      await client.query(
        `INSERT INTO facts (profile_id, fact_type, value, value_structured, added_by)
         VALUES ($1, $2, $3, $4, $5)`,
        [proposal.profile_id, proposal.proposed_type, proposal.proposed_value, proposal.proposed_structured, proposal.proposed_by]
      );
    }

    await client.query('COMMIT');
    return proposal;
  } catch (err) {
    await client.query('ROLLBACK');
    throw err;
  } finally {
    client.release();
  }
}

/**
 * Reject a proposal via action token.
 */
export async function rejectProposal(actionToken) {
  const { rows } = await pool.query(
    `UPDATE proposals SET status = 'rejected', reviewed_at = now()
     WHERE action_token = $1 AND status = 'pending'
     RETURNING *`,
    [actionToken]
  );
  return rows[0] || null;
}

/**
 * Get pending proposals for a profile (for a digest email).
 */
export async function getPendingProposals(profileId) {
  const { rows } = await pool.query(
    `SELECT p.*, u.display_name AS proposer_name, u.email AS proposer_email
     FROM proposals p
     LEFT JOIN users u ON u.id = p.proposed_by
     WHERE p.profile_id = $1 AND p.status = 'pending'
     ORDER BY p.created_at`,
    [profileId]
  );
  return rows;
}
