import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams, Link } from 'react-router-dom';
import { media as mediaApi, profiles, stories as storiesApi } from '../api/client';
import { toast } from './Toast';

export default function PublicProfile() {
  const { t, i18n } = useTranslation();
  const { slug } = useParams();
  const [profile, setProfile] = useState(null);
  const [stories, setStories] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [deletingStoryId, setDeletingStoryId] = useState(null);
  const [deletingMediaId, setDeletingMediaId] = useState(null);
  const [openStoryMenuId, setOpenStoryMenuId] = useState(null);
  const [pendingDelete, setPendingDelete] = useState(null);

  useEffect(() => {
    setLoading(true);
    profiles.getPublic(slug)
      .then((data) => {
        setProfile(data);
        setStories(data.stories || []);
        if (data.id && (!data.stories || data.stories.length === 0)) {
          return storiesApi.list(data.id).then((storyRows) => setStories(storyRows));
        }
        return null;
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, [slug, t]);

  async function handleDeleteStory(storyId) {
    setDeletingStoryId(storyId);
    try {
      await storiesApi.remove(storyId);
      setStories((current) => current.filter((story) => story.id !== storyId));
      setOpenStoryMenuId((current) => (current === storyId ? null : current));
      toast(t('publicProfile.storyDeleted'), 'success');
    } catch (err) {
      toast(err.message || t('publicProfile.storyDeleteFailed'), 'error');
    } finally {
      setDeletingStoryId(null);
    }
  }

  async function handleDeleteMedia(mediaId) {
    setDeletingMediaId(mediaId);
    try {
      await mediaApi.remove(mediaId);
      setProfile((current) => {
        if (!current) return current;
        const nextMedia = (current.media || []).filter((item) => item.id !== mediaId);
        return {
          ...current,
          media: nextMedia,
          profilePhotoUrl: nextMedia.find((item) => item.type === 'photo' && item.is_profile_photo)?.url
            || nextMedia.find((item) => item.type === 'photo')?.url
            || null,
        };
      });
      toast(t('publicProfile.mediaDeleted'), 'success');
    } catch (err) {
      toast(err.message || t('publicProfile.mediaDeleteFailed'), 'error');
    } finally {
      setDeletingMediaId(null);
    }
  }

  async function handleConfirmDelete() {
    if (!pendingDelete) return;

    if (pendingDelete.kind === 'story') {
      await handleDeleteStory(pendingDelete.id);
    } else {
      await handleDeleteMedia(pendingDelete.id);
    }

    setPendingDelete(null);
  }

  if (loading) return <div style={styles.container}><p style={styles.loading}>{t('common.loading')}</p></div>;
  if (error) return (
    <div style={styles.container}>
      <p style={styles.error}>{error}</p>
      <Link to="/" style={styles.link}>← {t('publicProfile.backToTree')}</Link>
    </div>
  );

  const facts = profile.facts || {};
  const mediaItems = profile.media || [];
  const photos = mediaItems.filter(item => item.type === 'photo');
  const documents = mediaItems.filter(item => item.type === 'document');
  const canManageProfile = Boolean(profile.isOwner);
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
        {(profile.isLiving || canManageProfile) && (
          <div style={styles.statusActions}>
            {profile.isLiving && (
              <span style={styles.livingBadge}>{t('publicProfile.living')}</span>
            )}
            {canManageProfile && (
              <Link to={`/?profile=${encodeURIComponent(profile.id)}&tab=explore`} style={styles.editProfileButton}>
                {t('publicProfile.editProfile')}
              </Link>
            )}
          </div>
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
            <div style={styles.storyHeader}>
              <h3 style={styles.storyTitle}>{story.title}</h3>
              {canManageProfile && (
                <button
                  type="button"
                  style={styles.storyMenuButton}
                  onClick={() => setOpenStoryMenuId((current) => (current === story.id ? null : story.id))}
                  aria-expanded={openStoryMenuId === story.id}
                  aria-label={t('publicProfile.storyActions')}
                >
                  {openStoryMenuId === story.id ? '−' : '+'}
                </button>
              )}
            </div>
            <p style={styles.storyBody}>{story.body}</p>
            <p style={styles.storyMeta}>
              {story.author_name || t('publicProfile.unknownAuthor')} · {new Date(story.created_at).toLocaleDateString(i18n.language)}
            </p>
            {canManageProfile && openStoryMenuId === story.id && (
              <div style={styles.storyMenuPanel}>
                <button
                  type="button"
                  style={styles.discardButton}
                  onClick={() => setPendingDelete({
                    kind: 'story',
                    id: story.id,
                    title: story.title,
                    label: t('publicProfile.deleteStory'),
                  })}
                  disabled={deletingStoryId === story.id}
                >
                  {deletingStoryId === story.id ? t('publicProfile.deleting') : t('publicProfile.discardStory')}
                </button>
              </div>
            )}
          </article>
        )) : (
          <p style={styles.emptyState}>{t('publicProfile.noPublicStories')}</p>
        )}
        <h2 style={styles.section}>{t('publicProfile.photosDocuments')}</h2>
        {photos.map((item) => (
          <figure key={item.id} style={styles.mediaCard}>
            <img src={item.url} alt={t('publicProfile.photoArchiveItem')} style={styles.mediaImage} />
            <figcaption style={styles.mediaCaption}>{t('publicProfile.photoArchiveItem')}</figcaption>
            {canManageProfile && (
              <button
                style={styles.manageButton}
                onClick={() => setPendingDelete({ kind: 'media', id: item.id, label: t('publicProfile.deletePhoto') })}
                disabled={deletingMediaId === item.id}
              >
                {deletingMediaId === item.id ? t('publicProfile.deleting') : t('publicProfile.deletePhoto')}
              </button>
            )}
          </figure>
        ))}
        {documents.map((item) => (
          <div key={item.id} style={styles.documentRow}>
            <span style={styles.documentIcon}>📄</span>
            <a href={item.url} target="_blank" rel="noreferrer" style={styles.documentLink}>{t('publicProfile.openDocument')}</a>
            {canManageProfile && (
              <button
                style={styles.documentDeleteButton}
                onClick={() => setPendingDelete({ kind: 'media', id: item.id, label: t('publicProfile.deleteDocument') })}
                disabled={deletingMediaId === item.id}
              >
                {deletingMediaId === item.id ? t('publicProfile.deleting') : t('publicProfile.deleteDocument')}
              </button>
            )}
          </div>
        ))}
        {photos.length === 0 && documents.length === 0 && (
          <p style={styles.emptyState}>{t('publicProfile.noPublicMedia')}</p>
        )}
        <Link to="/" style={styles.link}>← {t('publicProfile.backToTree')}</Link>
      </div>
      {pendingDelete && canManageProfile && (
        <div style={styles.dialogBackdrop} role="presentation">
          <div style={styles.dialogCard} role="dialog" aria-modal="true" aria-labelledby="public-profile-delete-title">
            <div id="public-profile-delete-title" style={styles.dialogTitle}>{t('publicProfile.confirmDeleteTitle')}</div>
            <div style={styles.dialogBody}>
              {pendingDelete.kind === 'story'
                ? t('publicProfile.confirmDeleteStoryBody', { title: pendingDelete.title || '' })
                : t('publicProfile.confirmDeleteMediaBody')}
            </div>
            <div style={styles.dialogActions}>
              <button type="button" style={styles.dialogSecondary} onClick={() => setPendingDelete(null)}>
                {t('common.cancel')}
              </button>
              <button type="button" style={styles.dialogPrimary} onClick={handleConfirmDelete}>
                {pendingDelete.label || t('publicProfile.confirmDelete')}
              </button>
            </div>
          </div>
        </div>
      )}
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
    marginBottom: 0,
  },
  statusActions: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    marginBottom: 16,
  },
  editProfileButton: {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 42,
    padding: '0 16px',
    borderRadius: 999,
    border: '1px solid #3D7C47',
    background: '#3D7C47',
    color: '#fff',
    textDecoration: 'none',
    fontSize: 13,
    fontWeight: 700,
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
  storyHeader: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    gap: 12,
  },
  storyTitle: {
    fontSize: 16,
    fontWeight: 600,
    color: '#2D2A26',
    marginBottom: 6,
    flex: 1,
  },
  storyMenuButton: {
    width: 32,
    height: 32,
    borderRadius: 999,
    border: '1px solid #DCD5C8',
    background: '#F5F1EB',
    color: '#7C7266',
    fontSize: 18,
    fontWeight: 700,
    lineHeight: 1,
    cursor: 'pointer',
    flexShrink: 0,
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
  storyMenuPanel: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 10,
  },
  discardButton: {
    border: '1px solid rgba(180, 69, 54, 0.22)',
    borderRadius: 8,
    background: 'rgba(180, 69, 54, 0.08)',
    color: '#B44536',
    fontFamily: "'Inter', sans-serif",
    fontSize: 12,
    fontWeight: 700,
    padding: '8px 10px',
    cursor: 'pointer',
  },
  manageButton: {
    marginTop: 10,
    border: '1px solid rgba(180, 69, 54, 0.22)',
    borderRadius: 8,
    background: 'rgba(180, 69, 54, 0.08)',
    color: '#B44536',
    fontFamily: "'Inter', sans-serif",
    fontSize: 12,
    fontWeight: 700,
    padding: '8px 10px',
    cursor: 'pointer',
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
    flex: 1,
  },
  documentDeleteButton: {
    border: '1px solid rgba(180, 69, 54, 0.22)',
    borderRadius: 8,
    background: 'rgba(180, 69, 54, 0.08)',
    color: '#B44536',
    fontFamily: "'Inter', sans-serif",
    fontSize: 12,
    fontWeight: 700,
    padding: '7px 10px',
    cursor: 'pointer',
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
  dialogBackdrop: {
    position: 'fixed',
    inset: 0,
    zIndex: 120,
    background: 'rgba(45, 42, 38, 0.22)',
    backdropFilter: 'blur(4px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,
  },
  dialogCard: {
    width: 'min(420px, 100%)',
    padding: 20,
    borderRadius: 16,
    border: '1px solid #DCD5C8',
    background: '#FDFBF8',
    boxShadow: '0 16px 42px rgba(45, 42, 38, 0.18)',
    textAlign: 'left',
  },
  dialogTitle: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 24,
    color: '#2D2A26',
    marginBottom: 8,
  },
  dialogBody: {
    fontSize: 14,
    lineHeight: 1.7,
    color: '#5E5850',
    marginBottom: 14,
  },
  dialogActions: {
    display: 'flex',
    gap: 8,
    justifyContent: 'flex-end',
    marginTop: 16,
  },
  dialogPrimary: {
    minHeight: 42,
    padding: '0 14px',
    borderRadius: 10,
    border: '1px solid #B44536',
    background: '#B44536',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
  },
  dialogSecondary: {
    minHeight: 42,
    padding: '0 14px',
    borderRadius: 10,
    border: '1px solid #DCD5C8',
    background: '#FDFBF8',
    color: '#5E5850',
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    fontWeight: 700,
    cursor: 'pointer',
  },
  error: {
    color: '#c44',
    fontSize: 16,
    marginBottom: 12,
  },
};
