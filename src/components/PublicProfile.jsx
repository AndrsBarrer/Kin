import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export default function PublicProfile() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_BASE}/profiles/public/${encodeURIComponent(slug)}`)
      .then(res => {
        if (!res.ok) throw new Error(t('publicProfile.profileNotFound'));
        return res.json();
      })
      .then((data) => {
        setProfile(data);
        setStories(data.stories || []);
        if (data.id && (!data.stories || data.stories.length === 0)) {
          return fetch(`${API_BASE}/stories?profileId=${encodeURIComponent(data.id)}`)
            .then((res) => res.ok ? res.json() : [])
            .then((storyRows) => setStories(storyRows));
        }
        return null;
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug, t]);

  if (loading) return <div style={styles.container}><p style={styles.loading}>{t('common.loading')}</p></div>;
  if (error) return (
    <div style={styles.container}>
      <p style={styles.error}>{error}</p>
      <Link to="/" style={styles.link}>← {t('publicProfile.backToTree')}</Link>
    </div>
  );

  const facts = profile.facts || {};
  const media = profile.media || [];
  const photos = media.filter(item => item.type === 'photo');
  const documents = media.filter(item => item.type === 'document');
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
        {profile.profilePhotoUrl ? (
          <img src={profile.profilePhotoUrl} alt={`${profile.firstName} ${profile.lastName}`} style={styles.profilePhoto} />
        ) : (
          <div style={styles.avatar}>
            {profile.firstName[0]}{profile.lastName[0]}
          </div>
        )}
        <h1 style={styles.name}>{profile.firstName} {profile.lastName}</h1>
        {profile.maidenName && <p style={styles.maiden}>née {profile.maidenName}</p>}
        {dates && <p style={styles.dates}>{dates}</p>}
        {profile.isLiving && (
          <span style={styles.livingBadge}>{t('publicProfile.living')}</span>
        )}
        {bio && (
          <>
            <h2 style={styles.section}>{t('publicProfile.biography')}</h2>
            <p style={styles.bio}>{bio}</p>
          </>
        )}
        {extraFacts.length > 0 && (
          <>
            <h2 style={styles.section}>{t('publicProfile.details')}</h2>
            {extraFacts.map(([key, entries]) => (
              <div key={key} style={styles.factRow}>
                <span style={styles.factLabel}>{key.replace(/_/g, ' ')}</span>
                <span>{entries.map(e => e.value).join(', ')}</span>
              </div>
            ))}
          </>
        )}
        <div style={styles.summaryGrid}>
          <div style={styles.summaryCard}>
            <strong style={styles.summaryCount}>{stories.length}</strong>
            <span style={styles.summaryLabel}>{t('publicProfile.stories')}</span>
          </div>
          <div style={styles.summaryCard}>
            <strong style={styles.summaryCount}>{photos.length}</strong>
            <span style={styles.summaryLabel}>{t('publicProfile.photos')}</span>
          </div>
          <div style={styles.summaryCard}>
            <strong style={styles.summaryCount}>{documents.length}</strong>
            <span style={styles.summaryLabel}>{t('publicProfile.documents')}</span>
          </div>
        </div>
        <h2 style={styles.section}>{t('publicProfile.storiesMemories')}</h2>
        {stories.length > 0 ? stories.map((story) => (
          <article key={story.id} style={styles.storyCard}>
            <h3 style={styles.storyTitle}>{story.title}</h3>
            <p style={styles.storyBody}>{story.body}</p>
            <p style={styles.storyMeta}>
              {story.author_name || t('publicProfile.unknownAuthor')} · {new Date(story.created_at).toLocaleDateString(i18n.language)}
            </p>
          </article>
        )) : (
          <p style={styles.emptyState}>{t('publicProfile.noPublicStories')}</p>
        )}
        <h2 style={styles.section}>{t('publicProfile.photosDocuments')}</h2>
        {photos.map((item) => (
          <figure key={item.id} style={styles.mediaCard}>
            <img src={item.url} alt={t('publicProfile.photoArchiveItem')} style={styles.mediaImage} />
            <figcaption style={styles.mediaCaption}>{t('publicProfile.photoArchiveItem')}</figcaption>
          </figure>
        ))}
        {documents.map((item) => (
          <div key={item.id} style={styles.documentRow}>
            <span style={styles.documentIcon}>📄</span>
            <a href={item.url} target="_blank" rel="noreferrer" style={styles.documentLink}>{t('publicProfile.openDocument')}</a>
          </div>
        ))}
        {photos.length === 0 && documents.length === 0 && (
          <p style={styles.emptyState}>{t('publicProfile.noPublicMedia')}</p>
        )}
        <Link to="/" style={styles.link}>← {t('publicProfile.backToTree')}</Link>
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: '100vh',
    background: '#F5F1EB',
    color: '#2D2A26',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Inter', 'Crimson Pro', sans-serif",
    padding: 20,
  },
  card: {
    background: '#FDFBF8',
    border: '1px solid #DCD5C8',
    borderRadius: 12,
    padding: '32px 28px',
    maxWidth: 480,
    width: '100%',
    textAlign: 'center',
    boxShadow: '0 4px 16px rgba(0,0,0,0.06)',
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    background: '#F0EBE2',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 28,
    fontFamily: "'Playfair Display', serif",
    margin: '0 auto 16px',
    color: '#3D7C47',
  },
  profilePhoto: {
    display: 'block',
    width: 104,
    height: 104,
    borderRadius: '50%',
    objectFit: 'cover',
    margin: '0 auto 16px',
    border: '4px solid #F0EBE2',
    boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
  },
  name: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 24,
    fontWeight: 600,
    margin: '0 0 4px',
    color: '#2D2A26',
  },
  maiden: {
    fontSize: 14,
    color: '#5E5850',
    fontStyle: 'italic',
    margin: '0 0 8px',
  },
  dates: {
    fontSize: 14,
    color: '#9A948E',
    margin: '0 0 12px',
  },
  livingBadge: {
    display: 'inline-block',
    padding: '3px 12px',
    borderRadius: 20,
    fontSize: 11,
    fontWeight: 600,
    background: 'rgba(61, 124, 71, 0.08)',
    color: '#3D7C47',
    marginBottom: 16,
  },
  section: {
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: '#9A948E',
    margin: '20px 0 10px',
    paddingBottom: 5,
    borderBottom: '1px solid #DCD5C8',
    textAlign: 'left',
  },
  bio: {
    fontSize: 14,
    lineHeight: 1.65,
    color: '#5E5850',
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
    color: '#9A948E',
    fontWeight: 500,
  },
  summaryGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: 10,
    marginTop: 20,
  },
  summaryCard: {
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
    alignItems: 'center',
    padding: '14px 10px',
    borderRadius: 10,
    background: '#F0EBE2',
    border: '1px solid #DCD5C8',
  },
  summaryCount: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 26,
    color: '#2D2A26',
  },
  summaryLabel: {
    fontSize: 11,
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: '#9A948E',
    fontWeight: 600,
  },
  storyCard: {
    textAlign: 'left',
    padding: '14px 16px',
    borderRadius: 10,
    border: '1px solid #DCD5C8',
    background: '#FDFBF8',
    marginBottom: 10,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: '#2D2A26',
    marginBottom: 6,
  },
  storyBody: {
    fontSize: 14,
    lineHeight: 1.7,
    color: '#5E5850',
    whiteSpace: 'pre-wrap',
  },
  storyMeta: {
    fontSize: 12,
    color: '#9A948E',
    marginTop: 8,
  },
  mediaCard: {
    margin: '0 0 12px',
    borderRadius: 10,
    overflow: 'hidden',
    border: '1px solid #DCD5C8',
    background: '#FDFBF8',
  },
  mediaImage: {
    display: 'block',
    width: '100%',
    maxHeight: 260,
    objectFit: 'cover',
  },
  mediaCaption: {
    padding: '10px 14px',
    fontSize: 13,
    color: '#5E5850',
    textAlign: 'left',
  },
  documentRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 10,
    padding: '12px 14px',
    borderRadius: 10,
    border: '1px solid #DCD5C8',
    background: '#FDFBF8',
    marginBottom: 8,
  },
  documentIcon: {
    fontSize: 18,
  },
  documentLink: {
    color: '#3D7C47',
    textDecoration: 'none',
    fontWeight: 600,
  },
  emptyState: {
    fontSize: 14,
    lineHeight: 1.6,
    color: '#9A948E',
    textAlign: 'left',
    marginBottom: 12,
  },
  link: {
    display: 'inline-block',
    marginTop: 24,
    fontSize: 14,
    color: '#3D7C47',
    textDecoration: 'none',
  },
  loading: {
    color: '#9A948E',
    fontSize: 16,
  },
  error: {
    color: '#c44',
    fontSize: 16,
    marginBottom: 12,
  },
};
