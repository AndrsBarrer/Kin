import { useRef, useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BRANCH, getRels } from '../data/familyData';
import { relationships as relApi, facts as factsApi, profiles as profilesApi, stories as storiesApi, trees as treesApi } from '../api/client';
import { useTree } from '../context/TreeContext';
import { toast } from './Toast';
import { getRelationshipErrorMessage, validateMarriageRelationship, validateParentChildRelationship } from '../utils/relationshipValidation';
import s from './DetailPanel.module.css';

export default function DetailPanel({
  person, people, rels, onClose, onViewPerson, onFocusPerson, onPhotoChange,
  onRelationshipAdded, onRelationshipRemoved,
  initialTab,
  onEditPerson,
  onProfileClaimed,
}) {
  const { t, i18n } = useTranslation();
  const fileRef = useRef(null);
  const [copied, setCopied] = useState(false);
  const [addRelOpen, setAddRelOpen] = useState(false);
  const [relType, setRelType] = useState('parent');
  const [relTarget, setRelTarget] = useState('');
  const [relSaving, setRelSaving] = useState(false);
  const [storyList, setStoryList] = useState([]);
  const [storiesLoaded, setStoriesLoaded] = useState(false);
  const [newStory, setNewStory] = useState({ title: '', body: '' });
  const [addingStory, setAddingStory] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [treeInvite, setTreeInvite] = useState(null);
  const [creatingTreeInvite, setCreatingTreeInvite] = useState(false);
  const [claimDialogOpen, setClaimDialogOpen] = useState(false);
  const [claimEmail, setClaimEmail] = useState('');
  const [claimingProfile, setClaimingProfile] = useState(false);
  const { activeTreeId, currentUser, currentUserId, isAuthenticated } = useTree();

  // Load stories when person changes
  useEffect(() => {
    if (!person) return;
    setStoryList([]);
    setAddingStory(false);
    setNewStory({ title: '', body: '' });
    setActiveTab(initialTab === 'explore' ? 'explore' : 'profile');
    setStoriesLoaded(false);
    setTreeInvite(null);
    setClaimDialogOpen(false);
    setClaimEmail('');
    storiesApi.list(person.id)
      .then((stories) => {
        setStoryList(stories);
        setStoriesLoaded(true);
      })
      .catch(() => {
        setStoryList([]);
        setStoriesLoaded(true);
      });
  }, [currentUser?.email, initialTab, person]);

  if (!person) return null;

  const relations = getRels(person.id, rels);
  const br = BRANCH[person.branch];
  const col = br?.hex || '#888';
  const publicUrl = person.public_slug ? `${window.location.origin}/p/${person.public_slug}` : null;
  const inviteUrl = person.invite_token ? `${window.location.origin}/join?token=${person.invite_token}` : null;
  const publicProfileUrl = person.public_slug ? `${window.location.origin}/p/${person.public_slug}` : null;
  const treeAccessUrl = activeTreeId ? `${window.location.origin}/tree/${activeTreeId}` : null;
  const publicPhotoCount = person.photo ? 1 : 0;
  const publicDocCount = person.docs?.length || 0;
  const hasClaimedProfile = Boolean(currentUserId && people.some((candidate) => candidate.claimed_by === currentUserId));
  const canSelfClaimProfile = Boolean(isAuthenticated && currentUser && !person.claimed_by && !hasClaimedProfile);
  const dates = person.birth
    ? (person.death ? `${person.birth} – ${person.death} · ${t('detailPanel.deceased')}` : t('detailPanel.born', { year: person.birth }))
    : '';
  const getRelationshipLabel = (relation) => {
    if (relation.type === 'parent') return t('detailPanel.parentOf', { name: person.firstName });
    if (relation.type === 'child') return t('detailPanel.childOf', { name: person.firstName });
    if (relation.type === 'marriage') return t('detailPanel.spousePartner');
    if (relation.type === 'sibling') return t('detailPanel.sibling');
    return relation.label;
  };

  const copyText = async (value, successMessage, onSuccess) => {
    try {
      if (navigator.clipboard?.writeText && window.isSecureContext) {
        await navigator.clipboard.writeText(value);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = value;
        textArea.setAttribute('readonly', '');
        textArea.style.position = 'fixed';
        textArea.style.top = '0';
        textArea.style.left = '0';
        textArea.style.width = '1px';
        textArea.style.height = '1px';
        textArea.style.padding = '0';
        textArea.style.border = '0';
        textArea.style.outline = '0';
        textArea.style.boxShadow = 'none';
        textArea.style.background = 'transparent';
        textArea.style.opacity = '0';

        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        textArea.setSelectionRange(0, textArea.value.length);

        const copiedSuccessfully = document.execCommand('copy');
        document.body.removeChild(textArea);

        if (!copiedSuccessfully) {
          throw new Error('execCommand copy failed');
        }
      }

      onSuccess?.();
      toast(successMessage, 'info');
      return true;
    } catch (err) {
      console.error('[Kin] Failed to copy to clipboard:', err);
      toast(t('detailPanel.copyFailed'), 'error');
      return false;
    }
  };

  const shareContent = async ({ title, text, url, fallbackValue, fallbackMessage }) => {
    if (navigator.share) {
      try {
        await navigator.share({ title, text, url });
        return true;
      } catch (err) {
        if (err?.name === 'AbortError') {
          return false;
        }
        console.warn('[Kin] Native share failed, falling back to copy:', err);
      }
    }

    return copyText(fallbackValue || url || text, fallbackMessage || t('detailPanel.shareFallbackCopied'));
  };

  const handleUpload = () => fileRef.current?.click();
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = async (ev) => {
      try {
        await onPhotoChange(person.id, ev.target.result);
      } catch (err) {
        toast(err.message || t('detailPanel.failedPhoto'), 'error');
      } finally {
        e.target.value = '';
      }
    };
    fr.readAsDataURL(file);
  };

  const getLblStyle = (type) => {
    if (type === 'parent') return { background: 'var(--tag-parent-bg)', color: 'var(--tag-parent)' };
    if (type === 'marriage') return { background: 'var(--tag-marry-bg)', color: 'var(--tag-marry)' };
    return { background: 'var(--tag-child-bg)', color: 'var(--tag-child)' };
  };

  const handleAddRelationship = async () => {
    if (!relTarget || !activeTreeId) return;
    setRelSaving(true);
    try {
      // For parent_child: relType tells us the role
      // "parent" means the target is a parent of this person
      // "child" means this person is a parent of the target
      let profileA, profileB, type;
      if (relType === 'parent') {
        type = 'parent_child';
        profileA = relTarget;    // parent
        profileB = person.id;    // child
      } else if (relType === 'child') {
        type = 'parent_child';
        profileA = person.id;    // parent
        profileB = relTarget;    // child
      } else if (relType === 'spouse') {
        type = 'marriage';
        profileA = person.id;
        profileB = relTarget;
      } else {
        throw new Error('Unsupported relationship type');
      }

      const validationError = type === 'marriage'
        ? validateMarriageRelationship(rels, profileA, profileB)
        : validateParentChildRelationship(rels, profileA, profileB);

      if (validationError) {
        const message = getRelationshipErrorMessage(t, validationError, 'detailPanel.failedConnectionAdd');
        toast(message || t('detailPanel.failedConnectionAdd'), 'error');
        return;
      }

      const rel = await relApi.create({ treeId: activeTreeId, type, profileA, profileB });
      onRelationshipAdded?.(rel);
      setAddRelOpen(false);
      setRelTarget('');
      toast(t('detailPanel.connectionAdded'), 'info');
    } catch (err) {
      console.error('[Kin] Failed to add relationship:', err);
      const message = getRelationshipErrorMessage(t, err.code, 'detailPanel.failedConnectionAdd');
      toast(message || err.message || t('detailPanel.failedConnectionAdd'), 'error');
    } finally {
      setRelSaving(false);
    }
  };

  const handleRemoveRelationship = async (relId) => {
    try {
      await relApi.remove(relId);
      onRelationshipRemoved?.(relId);
      toast(t('detailPanel.connectionRemoved'), 'info');
    } catch (err) {
      console.error('[Kin] Failed to remove relationship:', err);
      toast(err.message || t('detailPanel.failedConnectionRemove'), 'error');
    }
  };

  const handleCreateTreeInvite = async () => {
    if (!activeTreeId) return;

    setCreatingTreeInvite(true);
    try {
      const result = await treesApi.createAccessCode(activeTreeId);
      setTreeInvite(result);
      toast(t('detailPanel.treeAccessCodeReady'), 'info');
    } catch (err) {
      console.error('[Kin] Failed to create tree access code:', err);
      toast(err.message || t('detailPanel.treeAccessFailed'), 'error');
    } finally {
      setCreatingTreeInvite(false);
    }
  };

  const handleClaimProfile = async () => {
    const normalizedEmail = claimEmail.trim().toLowerCase();
    const expectedEmail = String(currentUser?.email || '').trim().toLowerCase();

    if (!normalizedEmail || normalizedEmail !== expectedEmail) {
      toast(t('detailPanel.claimProfileEmailMismatch'), 'error');
      return;
    }

    setClaimingProfile(true);
    try {
      await profilesApi.claim(person.id, normalizedEmail);
      onProfileClaimed?.(person.id, currentUserId);
      setClaimDialogOpen(false);
      setClaimEmail('');
      toast(t('detailPanel.claimProfileSuccess', { name: person.firstName }), 'success');
    } catch (err) {
      console.error('[Kin] Failed to claim profile directly:', err);
      toast(err.message || t('detailPanel.claimProfileFailed'), 'error');
    } finally {
      setClaimingProfile(false);
    }
  };

  // People available for new connections (exclude self and already-connected)
  const connectedIds = new Set(relations.map(r => r.id));
  const spouseIds = new Set(
    rels
      .filter(rel => rel.type === 'marriage')
      .flatMap(rel => [rel.a, rel.b])
  );
  const personHasSpouse = spouseIds.has(person.id);
  const availablePeople = people.filter((candidate) => {
    if (candidate.id === person.id || connectedIds.has(candidate.id)) return false;
    if (relType === 'spouse') return !personHasSpouse && !spouseIds.has(candidate.id);
    return true;
  });

  return (
    <div className={`${s.panel} ${s.open}`}>
      <button className={s.pclose} onClick={onClose}>✕</button>
      <div className={s.photoWrap}>
        {person.photo
          ? <img className={s.photo} src={person.photo} alt="" />
          : <div className={s.avatar} style={{ color: col, background: br?.bg || '#eee' }}>
              {person.firstName[0] + person.lastName[0]}
            </div>
        }
      </div>
      <div className={s.body}>
        <div className={s.pname}>{person.firstName} {person.lastName}</div>
        {person.maiden && <div className={s.pmaiden}>née {person.maiden}</div>}
        <div className={s.pdates}>{dates}</div>
        {canSelfClaimProfile && (
          <div className={s.claimCard}>
            <div className={s.claimTitle}>{t('detailPanel.claimProfilePrompt')}</div>
            <div className={s.claimBody}>{t('detailPanel.claimProfileBody')}</div>
            <button
              type="button"
              className={s.primaryAction}
              onClick={() => {
                setClaimEmail('');
                setClaimDialogOpen(true);
              }}
            >
              {t('detailPanel.claimProfileAction')}
            </button>
          </div>
        )}
        <div className={s.tabRow} role="tablist" aria-label={t('detailPanel.personDetailsViews')}>
          <button
            className={`${s.tabBtn} ${activeTab === 'profile' ? s.tabBtnActive : ''}`}
            onClick={() => setActiveTab('profile')}
            role="tab"
            aria-selected={activeTab === 'profile'}
          >
            {t('detailPanel.profileDetails')}
          </button>
          <button
            className={`${s.tabBtn} ${activeTab === 'explore' ? s.tabBtnActive : ''}`}
            onClick={() => setActiveTab('explore')}
            role="tab"
            aria-selected={activeTab === 'explore'}
          >
            {t('detailPanel.shareExplore')}
          </button>
        </div>

        {activeTab === 'profile' && (
          <>
            {person.isOwner && (
              <div className={s.claimCard}>
                <div className={s.claimTitle}>{t('detailPanel.editProfileTitle')}</div>
                <div className={s.claimBody}>{t('detailPanel.editProfileBody')}</div>
                <button
                  type="button"
                  className={s.primaryAction}
                  onClick={() => onEditPerson?.(person)}
                >
                  {t('detailPanel.editProfileAction')}
                </button>
              </div>
            )}
            <div className={s.psect}>{t('detailPanel.biography')}</div>
            <div className={s.pbio}>{person.bio || t('detailPanel.noBiography')}</div>

            {/* ── EAV Facts ── */}
            {person.facts && Object.keys(person.facts).length > 0 && (() => {
              const skip = new Set(['gender', 'birth_year', 'death_year', 'biography']);
              const extraFacts = Object.entries(person.facts).filter(([key]) => !skip.has(key));
              if (extraFacts.length === 0) return null;
              return (
                <>
                  <div className={s.psect}>{t('detailPanel.details')}</div>
                  <div className={s.factsGrid}>
                    {extraFacts.map(([key, entries]) => (
                      <div key={key} className={s.factRow}>
                        <span className={s.factLabel}>{key.replace(/_/g, ' ')}</span>
                        <span className={s.factValue}>{entries.map(e => e.value).join(', ')}</span>
                        {person.isOwner && entries.map(e => (
                          <span key={e.id} className={s.factActions}>
                            <button
                              className={s.factIconBtn}
                              title={e.verified ? t('detailPanel.unverify') : t('detailPanel.verify')}
                              onClick={async () => {
                                try { await factsApi.verify(e.id); toast(e.verified ? t('detailPanel.unverified') : t('detailPanel.verified'), 'info'); } catch (err) { toast(err.message, 'error'); }
                              }}
                            >{e.verified ? '✅' : '☑️'}</button>
                            <button
                              className={s.factIconBtn}
                              title={e.locked ? t('detailPanel.unlock') : t('detailPanel.lock')}
                              onClick={async () => {
                                try { await factsApi.lock(e.id); toast(e.locked ? t('detailPanel.unlocked') : t('detailPanel.locked'), 'info'); } catch (err) { toast(err.message, 'error'); }
                              }}
                            >{e.locked ? '🔒' : '🔓'}</button>
                          </span>
                        ))}
                      </div>
                    ))}
                  </div>
                </>
              );
            })()}

            <div className={s.psect}>{t('detailPanel.connections')}</div>
            <div className={s.rels}>
              {relations.map(r => {
                const rp = people.find(x => x.id === r.id);
                if (!rp) return null;
                const brc = BRANCH[rp.branch];
                const relObj = rels.find(x =>
                  (x.a === person.id && x.b === r.id) || (x.b === person.id && x.a === r.id)
                );
                return (
                  <div key={r.id + r.type} className={s.rchip}>
                    <div className={s.rchipAvatar} style={{ background: brc?.bg || '#eee', color: brc?.hex || '#333' }}>
                      {rp.firstName[0] + rp.lastName[0]}
                    </div>
                    <div className={s.rchipInfo}>
                      <div className={s.rchipName}>{rp.firstName} {rp.lastName}</div>
                      <span className={s.rchipLbl} style={getLblStyle(r.type)}>{getRelationshipLabel(r)}</span>
                    </div>
                    <div className={s.rchipActions}>
                      <button className={s.rchipBtn} onClick={() => onViewPerson(rp.id)}>{t('common.view')}</button>
                      <button className={s.rchipBtn} onClick={() => onFocusPerson(rp.id)}>{t('common.focus')}</button>
                      {relObj && (
                        <button
                          className={s.rchipBtn}
                          style={{ color: '#c44', background: 'rgba(204,68,68,0.1)' }}
                          onClick={() => handleRemoveRelationship(relObj.id)}
                          title={t('detailPanel.removeConnection')}
                        >✕</button>
                      )}
                    </div>
                  </div>
                );
              })}
              {relations.length === 0 && (
                <div style={{ fontSize: 13, color: 'var(--text-muted)', padding: '4px 0' }}>
                  {t('detailPanel.noConnections')}
                </div>
              )}
            </div>

            {!addRelOpen ? (
              <button
                className={s.uploadBtn}
                style={{ marginTop: 6 }}
                onClick={() => setAddRelOpen(true)}
              >
                + {t('detailPanel.addConnection')}
              </button>
            ) : (
              <div style={{
                marginTop: 8, padding: 10, borderRadius: 8,
                background: 'var(--surface2)', border: '1px solid var(--border)',
              }}>
                <div style={{ display: 'flex', gap: 6, marginBottom: 6 }}>
                  <select
                    value={relType}
                    onChange={e => setRelType(e.target.value)}
                    style={{
                      flex: 1, padding: '6px 8px', fontSize: 12, borderRadius: 6,
                      border: '1px solid var(--border)', background: 'var(--surface)',
                      color: 'var(--text)', fontFamily: "'Inter', sans-serif",
                    }}
                  >
                    <option value="parent">{t('detailPanel.parentOf', { name: person.firstName })}</option>
                    <option value="child">{t('detailPanel.childOf', { name: person.firstName })}</option>
                    <option value="spouse" disabled={personHasSpouse}>{personHasSpouse ? t('detailPanel.spouseAlreadyLinked') : t('detailPanel.spousePartner')}</option>
                  </select>
                </div>
                <select
                  value={relTarget}
                  onChange={e => setRelTarget(e.target.value)}
                  style={{
                    width: '100%', padding: '6px 8px', fontSize: 12, borderRadius: 6,
                    border: '1px solid var(--border)', background: 'var(--surface)',
                    color: 'var(--text)', fontFamily: "'Inter', sans-serif",
                    marginBottom: 6,
                  }}
                >
                  <option value="">— {t('detailPanel.selectPerson')} —</option>
                  {availablePeople.map(p => (
                    <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>
                  ))}
                </select>
                {relType === 'spouse' && availablePeople.length === 0 && (
                  <div style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
                    {t('detailPanel.spouseRule')}
                  </div>
                )}
                <div style={{ display: 'flex', gap: 6 }}>
                  <button
                    className={s.rchipBtn}
                    onClick={handleAddRelationship}
                    disabled={!relTarget || relSaving}
                    style={{ flex: 1, padding: '6px 0', textAlign: 'center' }}
                  >
                    {relSaving ? t('detailPanel.saving') : t('common.add')}
                  </button>
                  <button
                    className={s.rchipBtn}
                    onClick={() => { setAddRelOpen(false); setRelTarget(''); }}
                    style={{ padding: '6px 10px' }}
                  >
                    {t('common.cancel')}
                  </button>
                </div>
              </div>
            )}

            <div className={s.psect}>{t('detailPanel.documents')}</div>
            <div className={s.docs}>
              {(person.docs || []).map((d, i) => (
                <div key={i} className={s.ditem}>
                  <span className={s.dico}>📄</span>
                  <span>{d}</span>
                </div>
              ))}
              {(person.docs || []).length === 0 && (
                <div className={s.emptyState}>{t('detailPanel.noDocuments')}</div>
              )}
            </div>

            <div className={s.psect}>{t('detailPanel.storiesMemories')}</div>
            {storyList.map(st => (
              <div key={st.id} className={s.storyCard}>
                <div className={s.storyTitle}>{st.title}</div>
                <div className={s.storyBody}>{st.body}</div>
                <div className={s.storyMeta}>
                  {st.author_name || t('detailPanel.unknownAuthor')} · {new Date(st.created_at).toLocaleDateString(i18n.language)}
                </div>
              </div>
            ))}
            {storyList.length === 0 && !addingStory && storiesLoaded && (
              <div className={s.emptyState}>
                {t('detailPanel.noStories')}
              </div>
            )}
            {!addingStory ? (
              <button className={s.uploadBtn} style={{ marginTop: 6 }} onClick={() => setAddingStory(true)}>
                + {t('detailPanel.addStory')}
              </button>
            ) : (
              <div style={{ marginTop: 6 }}>
                <input
                  className={s.storyInput}
                  placeholder={t('detailPanel.storyTitlePlaceholder')}
                  value={newStory.title}
                  onChange={e => setNewStory(prev => ({ ...prev, title: e.target.value }))}
                />
                <textarea
                  className={s.storyTextarea}
                  placeholder={t('detailPanel.storyBodyPlaceholder')}
                  value={newStory.body}
                  onChange={e => setNewStory(prev => ({ ...prev, body: e.target.value }))}
                />
                <div style={{ display: 'flex', gap: 6 }}>
                  <button
                    className={s.rchipBtn}
                    style={{ flex: 1, padding: '6px 0', textAlign: 'center' }}
                    disabled={!newStory.title.trim() || !newStory.body.trim()}
                    onClick={async () => {
                      try {
                        const created = await storiesApi.create({
                          profileId: person.id,
                          title: newStory.title.trim(),
                          body: newStory.body.trim(),
                        });
                        setStoryList(prev => [created, ...prev]);
                        setNewStory({ title: '', body: '' });
                        setAddingStory(false);
                        toast(t('detailPanel.storyAdded'), 'info');
                      } catch (err) {
                        toast(err.message || t('detailPanel.failedStory'), 'error');
                      }
                    }}
                  >{t('common.save')}</button>
                  <button
                    className={s.rchipBtn}
                    style={{ padding: '6px 10px' }}
                    onClick={() => { setAddingStory(false); setNewStory({ title: '', body: '' }); }}
                  >{t('common.cancel')}</button>
                </div>
              </div>
            )}

            <button className={s.uploadBtn} onClick={handleUpload}>{t('detailPanel.uploadPhoto')}</button>
            <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />
          </>
        )}

        {activeTab === 'explore' && (
          <>
            <div className={s.psect}>{t('detailPanel.publicPage')}</div>
            <div className={s.exploreCard}>
              <div className={s.exploreTitle}>{t('detailPanel.browseTitle')}</div>
              <div className={s.exploreBody}>
                {t('detailPanel.browseBody')}
              </div>
              {publicUrl ? (
                <>
                  <div className={s.linkBox}>{publicUrl}</div>
                  <div className={s.actionRow}>
                    <button className={s.primaryAction} onClick={() => window.open(publicUrl, '_blank', 'noopener,noreferrer')}>
                      {t('detailPanel.openPublicPage')}
                    </button>
                    <button
                      className={s.secondaryAction}
                      onClick={() => copyText(publicUrl, t('detailPanel.publicLinkCopied'))}
                    >
                      {t('detailPanel.copyLink')}
                    </button>
                    <button
                      className={s.secondaryAction}
                      onClick={() => shareContent({
                        title: t('detailPanel.sharePublicTitle', { name: `${person.firstName} ${person.lastName}`.trim() }),
                        text: t('detailPanel.sharePublicText', { name: `${person.firstName} ${person.lastName}`.trim() }),
                        url: publicUrl,
                        fallbackValue: publicUrl,
                        fallbackMessage: t('detailPanel.publicLinkCopied'),
                      })}
                    >
                      {t('common.share')}
                    </button>
                  </div>
                </>
              ) : (
                <div className={s.emptyState}>{t('detailPanel.noPublicPage')}</div>
              )}
            </div>

            <div className={s.psect}>{t('detailPanel.exploreSummary')}</div>
            <div className={s.summaryGrid}>
              <div className={s.summaryCard}>
                <div className={s.summaryCount}>{storyList.length}</div>
                <div className={s.summaryLabel}>{t('detailPanel.stories')}</div>
              </div>
              <div className={s.summaryCard}>
                <div className={s.summaryCount}>{publicPhotoCount}</div>
                <div className={s.summaryLabel}>{t('detailPanel.photos')}</div>
              </div>
              <div className={s.summaryCard}>
                <div className={s.summaryCount}>{publicDocCount}</div>
                <div className={s.summaryLabel}>{t('detailPanel.documentsLabel')}</div>
              </div>
            </div>

            <div className={s.psect}>{t('detailPanel.storiesPeopleCanRead')}</div>
            {storyList.length > 0 ? storyList.map(st => (
              <div key={st.id} className={s.storyCard}>
                <div className={s.storyTitle}>{st.title}</div>
                <div className={s.storyBody}>{st.body}</div>
                <div className={s.storyMeta}>
                  {st.author_name || t('detailPanel.unknownAuthor')} · {new Date(st.created_at).toLocaleDateString(i18n.language)}
                </div>
              </div>
            )) : (
              <div className={s.emptyState}>{t('detailPanel.noPublicStories')}</div>
            )}

            <div className={s.psect}>{t('detailPanel.photosDocuments')}</div>
            {person.photo && (
              <div className={s.mediaCard}>
                <img className={s.mediaPreview} src={person.photo} alt={`${person.firstName} ${person.lastName}`} />
                <div className={s.mediaMeta}>{t('detailPanel.profilePhoto')}</div>
              </div>
            )}
            {(person.docs || []).map((doc, index) => (
              <div key={`${doc}-${index}`} className={s.ditem}>
                <span className={s.dico}>📄</span>
                <span>{doc}</span>
              </div>
            ))}
            {!person.photo && publicDocCount === 0 && (
              <div className={s.emptyState}>{t('detailPanel.noPublicMedia')}</div>
            )}
          </>
        )}

        {/* ── Magic Link Invite ── */}
        {person.invite_token && !person.claimed_by && (
          <>
            <div className={s.psect}>{t('detailPanel.inviteLink')}</div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
              {t('detailPanel.inviteDescription', { name: person.firstName })}
            </p>
            <div style={{
              display: 'flex', gap: 6, alignItems: 'center',
            }}>
              <input
                readOnly
                value={inviteUrl}
                style={{
                  flex: 1, padding: '7px 10px', fontSize: 12, borderRadius: 6,
                  border: '1px solid var(--border)', background: 'var(--surface2)',
                  fontFamily: 'monospace', color: 'var(--text-dim)',
                }}
                onClick={e => e.target.select()}
              />
              <button
                className={s.rchipBtn}
                onClick={() => copyText(inviteUrl, t('common.copied'), () => {
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                })}
              >
                {copied ? `✓ ${t('common.copied')}` : t('common.copy')}
              </button>
              <button
                className={s.rchipBtn}
                type="button"
                onClick={() => shareContent({
                  title: t('detailPanel.shareInviteTitle'),
                  text: t('detailPanel.shareInviteText', { name: person.firstName }),
                  url: inviteUrl,
                  fallbackValue: inviteUrl,
                  fallbackMessage: t('common.copied'),
                })}
              >
                {t('common.share')}
              </button>
            </div>
          </>
        )}
        {person.claimed_by && (
          <>
            <div className={s.psect}>{t('detailPanel.profileStatus')}</div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 9px', borderRadius: 20, fontSize: 11, fontWeight: 600,
              background: 'var(--tag-marry-bg)', color: 'var(--tag-marry)',
            }}>
              ✓ {t('detailPanel.profileClaimed')}
            </div>
          </>
        )}
        {person.public_slug && (
          <>
            <div className={s.psect}>{t('detailPanel.publicProfile')}</div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <input
                readOnly
                value={publicProfileUrl}
                style={{
                  flex: 1, padding: '7px 10px', fontSize: 12, borderRadius: 6,
                  border: '1px solid var(--border)', background: 'var(--surface2)',
                  fontFamily: 'monospace', color: 'var(--text-dim)',
                }}
                onClick={e => e.target.select()}
              />
              <button
                className={s.rchipBtn}
                onClick={() => copyText(publicProfileUrl, t('detailPanel.publicUrlCopied'))}
              >{t('common.copy')}</button>
              <button
                className={s.rchipBtn}
                type="button"
                onClick={() => shareContent({
                  title: t('detailPanel.sharePublicTitle', { name: `${person.firstName} ${person.lastName}`.trim() }),
                  text: t('detailPanel.sharePublicText', { name: `${person.firstName} ${person.lastName}`.trim() }),
                  url: publicProfileUrl,
                  fallbackValue: publicProfileUrl,
                  fallbackMessage: t('detailPanel.publicUrlCopied'),
                })}
              >{t('common.share')}</button>
            </div>
          </>
        )}
        {treeAccessUrl && (
          <>
            <div className={s.psect}>{t('detailPanel.treeAccess')}</div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6, lineHeight: 1.6 }}>
              {t('detailPanel.treeAccessDescription')}
            </p>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center', marginBottom: 8 }}>
              <input
                readOnly
                value={treeAccessUrl}
                style={{
                  flex: 1, padding: '7px 10px', fontSize: 12, borderRadius: 6,
                  border: '1px solid var(--border)', background: 'var(--surface2)',
                  fontFamily: 'monospace', color: 'var(--text-dim)',
                }}
                onClick={e => e.target.select()}
              />
              <button className={s.rchipBtn} onClick={() => copyText(treeAccessUrl, t('detailPanel.treeLinkCopied'))}>{t('common.copy')}</button>
              <button
                className={s.rchipBtn}
                type="button"
                onClick={() => shareContent({
                  title: t('detailPanel.shareTreeTitle'),
                  text: t('detailPanel.shareTreeText'),
                  url: treeAccessUrl,
                  fallbackValue: treeAccessUrl,
                  fallbackMessage: t('detailPanel.treeLinkCopied'),
                })}
              >{t('common.share')}</button>
            </div>
            <button className={s.uploadBtn} style={{ marginTop: 0 }} onClick={handleCreateTreeInvite} disabled={creatingTreeInvite}>
              {creatingTreeInvite ? t('detailPanel.creatingTreeAccessCode') : t('detailPanel.createTreeAccessCode')}
            </button>
            {treeInvite && (
              <div style={{ marginTop: 10, padding: 12, borderRadius: 10, background: 'var(--surface2)', border: '1px solid var(--border)' }}>
                <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 4 }}>
                  {t('detailPanel.treeAccessCode')}
                </div>
                <div style={{ fontFamily: 'monospace', fontSize: 18, color: 'var(--accent)', marginBottom: 6 }}>
                  {treeInvite.code}
                </div>
                <div style={{ fontSize: 12, color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: 8 }}>
                  {t('detailPanel.treeAccessCodeExpires', { date: new Date(treeInvite.expiresAt).toLocaleString(i18n.language) })}
                </div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                  <button className={s.rchipBtn} onClick={() => copyText(treeInvite.code, t('detailPanel.treeCodeCopied'))}>{t('common.copy')}</button>
                  <button
                    className={s.rchipBtn}
                    type="button"
                    onClick={() => shareContent({
                      title: t('detailPanel.shareTreeCodeTitle'),
                      text: t('detailPanel.shareTreeCodeText', { code: treeInvite.code, url: treeAccessUrl }),
                      url: treeAccessUrl,
                      fallbackValue: `${t('detailPanel.shareTreeCodeText', { code: treeInvite.code, url: treeAccessUrl })} ${treeAccessUrl}`,
                      fallbackMessage: t('detailPanel.treeCodeCopied'),
                    })}
                  >{t('common.share')}</button>
                </div>
              </div>
            )}
          </>
        )}
      </div>
      {claimDialogOpen && (
        <div className={s.dialogBackdrop} role="presentation">
          <div className={s.dialogCard} role="dialog" aria-modal="true" aria-labelledby="claim-profile-title">
            <div id="claim-profile-title" className={s.dialogTitle}>{t('detailPanel.claimProfileDialogTitle')}</div>
            <div className={s.dialogBody}>{t('detailPanel.claimProfileDialogBody', { name: `${person.firstName} ${person.lastName}`.trim() })}</div>
            <label className={s.dialogLabel} htmlFor="claim-profile-email">{t('detailPanel.claimProfileEmailLabel')}</label>
            <input
              id="claim-profile-email"
              className={s.dialogInput}
              type="email"
              value={claimEmail}
              onChange={(event) => setClaimEmail(event.target.value)}
              autoFocus
            />
            <div className={s.dialogActions}>
              <button
                type="button"
                className={s.dialogSecondary}
                onClick={() => {
                  setClaimDialogOpen(false);
                  setClaimEmail('');
                }}
                disabled={claimingProfile}
              >
                {t('common.cancel')}
              </button>
              <button
                type="button"
                className={s.dialogPrimary}
                onClick={handleClaimProfile}
                disabled={claimingProfile}
              >
                {claimingProfile ? t('detailPanel.saving') : t('detailPanel.claimProfileConfirm')}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
