import pool from '../db/pool.js';

/**
 * Simple Levenshtein distance for fuzzy name matching.
 */
export function levenshtein(a, b) {
  const an = a.length, bn = b.length;
  const d = Array.from({ length: an + 1 }, (_, i) => {
    const row = new Array(bn + 1);
    row[0] = i;
    return row;
  });
  for (let j = 1; j <= bn; j++) d[0][j] = j;
  for (let i = 1; i <= an; i++) {
    for (let j = 1; j <= bn; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
    }
  }
  return d[an][bn];
}

/**
 * Compute a 0-100 similarity score between two names.
 */
export function nameScore(input, candidate) {
  const a = (input || '').toLowerCase().trim();
  const b = (candidate || '').toLowerCase().trim();
  if (!a || !b) return 0;
  if (a === b) return 100;
  const maxLen = Math.max(a.length, b.length);
  if (maxLen === 0) return 100;
  const dist = levenshtein(a, b);
  return Math.round((1 - dist / maxLen) * 100);
}

/**
 * Search for potential duplicate profiles with fuzzy scoring.
 * Returns profiles from the same tree whose names are similar, sorted by score.
 */
export async function findDuplicates(treeId, firstName, lastName) {
  const { rows } = pool.query(
    `SELECT id, first_name, last_name, maiden_name
     FROM profiles
     WHERE tree_id = $1
       AND deleted_at IS NULL
     LIMIT 200`,
    [treeId]
  );

  const scored = rows
    .map(p => {
      const firstScore = nameScore(firstName, p.first_name);
      const lastScore = nameScore(lastName, p.last_name);
      const score = Math.round(firstScore * 0.4 + lastScore * 0.6);
      return { ...p, score };
    })
    .filter(p => p.score >= 60)
    .sort((a, b) => b.score - a.score)
    .slice(0, 10);

  return scored;
}
