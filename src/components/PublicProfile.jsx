import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export default function PublicProfile() {
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/profiles/public/${encodeURIComponent(slug)}`)
      .then(res => {
        if (!res.ok) throw new Error('Profile not found');
        return res.json();
      })
      .then(setProfile)
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug]);

  if (loading) return <div style={styles.container}><p style={styles.loading}>Loading...</p></div>;
  if (error) return (
    <div style={styles.container}>
      <p style={styles.error}>{error}</p>
      <Link to="/" style={styles.link}>← Back to Tree</Link>
    </div>
  );

  const facts = profile.facts || {};
  const skip = new Set(['gender', 'birth_year', 'death_year', 'biography']);
  const extraFacts = Object.entries(facts).filter(([k]) => !skip.has(k));

  const birthYear = facts.birth_year?.[0]?.value;
  const deathYear = facts.death_year?.[0]?.value;
  const bio = facts.biography?.[0]?.value;
  const dates = birthYear
    ? (deathYear ? `${birthYear} – ${deathYear}` : `b. ${birthYear}`)
    : '';

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.avatar}>
          {profile.firstName[0]}{profile.lastName[0]}
        </div>
        <h1 style={styles.name}>{profile.firstName} {profile.lastName}</h1>
        {profile.maidenName && <p style={styles.maiden}>née {profile.maidenName}</p>}
        {dates && <p style={styles.dates}>{dates}</p>}
        {profile.isLiving && (
          <span style={styles.livingBadge}>Living</span>
        )}
        {bio && (
          <>
            <h2 style={styles.section}>Biography</h2>
            <p style={styles.bio}>{bio}</p>
          </>
        )}
        {extraFacts.length > 0 && (
          <>
            <h2 style={styles.section}>Details</h2>
            {extraFacts.map(([key, entries]) => (
              <div key={key} style={styles.factRow}>
                <span style={styles.factLabel}>{key.replace(/_/g, ' ')}</span>
                <span>{entries.map(e => e.value).join(', ')}</span>
              </div>
            ))}
          </>
        )}
        <Link to="/" style={styles.link}>← View Full Tree</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: 'var(--bg, #070810)',
    color: 'var(--text, #e4e2dd)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Crimson Pro', serif",
    padding: 20,
  },
  card: {
    background: 'var(--surface, #0f1219)',
    border: '1px solid var(--border, #1e2231)',
    borderRadius: 12,
    padding: '32px 28px',
    maxWidth: 480,
    width: '100%',
    textAlign: 'center',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    background: 'var(--surface2, #161b26)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    fontFamily: "'Playfair Display', serif",
    margin: '0 auto 16px',
    color: 'var(--gold, #c9973a)',
  },
  name: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 24,
    fontWeight: 600,
    margin: '0 0 4px',
  },
  maiden: {
    fontSize: 14,
    color: 'var(--text-dim, #9e9c96)',
    fontStyle: 'italic',
    margin: '0 0 8px',
  },
  dates: {
    fontSize: 14,
    color: 'var(--text-muted, #6b6963)',
    margin: '0 0 12px',
  },
  livingBadge: {
    display: 'inline-block',
    padding: '3px 12px',
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    background: 'rgba(80, 200, 120, 0.1)',
    color: '#50c878',
    marginBottom: 16,
  },
  section: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'var(--text-muted, #6b6963)',
    margin: '20px 0 10px',
    paddingBottom: 5,
    borderBottom: '1px solid var(--border, #1e2231)',
    textAlign: 'left',
  },
  bio: {
    fontSize: 14,
    lineHeight: 1.65,
    color: 'var(--text-dim, #9e9c96)',
    textAlign: 'left',
  },
  factRow: {
    display: 'flex',
    gap: 8,
    fontSize: 14,
    lineHeight: 1.5,
    padding: '4px 0',
    textAlign: 'left',
  },
  factLabel: {
    width: 100,
    flexShrink: 0,
    textTransform: 'capitalize',
    color: 'var(--text-muted, #6b6963)',
    fontWeight: 500,
  },
  link: {
    display: 'inline-block',
    marginTop: 24,
    fontSize: 14,
    color: 'var(--gold, #c9973a)',
    textDecoration: 'none',
  },
  loading: {
    color: 'var(--text-muted, #6b6963)',
    fontSize: 16,
  },
  error: {
    color: '#c44',
    fontSize: 16,
    marginBottom: 12,
  },
};
