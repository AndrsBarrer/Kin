import { useRef, useState, useEffect } from 'react';
import { BRANCH, getRels } from '../data/familyData';
import { relationships as relApi, facts as factsApi, stories as storiesApi } from '../api/client';
import { useTree } from '../context/TreeContext';
import { toast } from './Toast';
import s from './DetailPanel.module.css';

export default function DetailPanel({
  person, people, rels, onClose, onViewPerson, onFocusPerson, onPhotoChange,
  onRelationshipAdded, onRelationshipRemoved,
}) {
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
  const { activeTreeId } = useTree();

  // Load stories when person changes
  useEffect(() => {
    if (!person) return;
    setStoryList([]);
    setAddingStory(false);
    setNewStory({ title: '', body: '' });
    storiesApi.list(person.id).then(setStoryList).catch(() => setStoryList([]));
  }, [person?.id]);

  if (!person) return null;

  const relations = getRels(person.id, rels);
  const br = BRANCH[person.branch];
  const col = br?.hex || '#888';
  const dates = person.birth
    ? (person.death ? `${person.birth} – ${person.death} · Deceased` : `b. ${person.birth}`)
    : '';

  const handleUpload = () => fileRef.current?.click();
  const handleFile = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const fr = new FileReader();
    fr.onload = ev => onPhotoChange(person.id, ev.target.result);
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
      } else if (relType === 'sibling') {
        type = 'sibling';
        profileA = person.id;
        profileB = relTarget;
      }
      const rel = await relApi.create({ treeId: activeTreeId, type, profileA, profileB });
      onRelationshipAdded?.(rel);
      setAddRelOpen(false);
      setRelTarget('');
      toast('Connection added', 'info');
    } catch (err) {
      console.error('[Kin] Failed to add relationship:', err);
      toast(err.message || 'Failed to add connection', 'error');
    } finally {
      setRelSaving(false);
    }
  };

  const handleRemoveRelationship = async (relId) => {
    try {
      await relApi.remove(relId);
      onRelationshipRemoved?.(relId);
      toast('Connection removed', 'info');
    } catch (err) {
      console.error('[Kin] Failed to remove relationship:', err);
      toast(err.message || 'Failed to remove connection', 'error');
    }
  };

  // People available for new connections (exclude self and already-connected)
  const connectedIds = new Set(relations.map(r => r.id));
  const availablePeople = people.filter(p => p.id !== person.id && !connectedIds.has(p.id));

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
        <div className={s.branchBadge} style={{ background: br?.bg || '#eee', color: col }}>
          {br?.label || person.branch}
        </div>

        <div className={s.psect}>Biography</div>
        <div className={s.pbio}>{person.bio || 'No biography on record.'}</div>

        {/* ── EAV Facts ── */}
        {person.facts && Object.keys(person.facts).length > 0 && (() => {
          // Show facts that aren't already displayed via top-level fields
          const skip = new Set(['gender', 'birth_year', 'death_year', 'biography']);
          const extraFacts = Object.entries(person.facts).filter(([k]) => !skip.has(k));
          if (extraFacts.length === 0) return null;
          return (
            <>
              <div className={s.psect}>Details</div>
              <div className={s.factsGrid}>
                {extraFacts.map(([key, entries]) => (
                  <div key={key} className={s.factRow}>
                    <span className={s.factLabel}>{key.replace(/_/g, ' ')}</span>
                    <span className={s.factValue}>{entries.map(e => e.value).join(', ')}</span>
                    {person.isOwner && entries.map(e => (
                      <span key={e.id} className={s.factActions}>
                        <button
                          className={s.factIconBtn}
                          title={e.verified ? 'Unverify' : 'Verify'}
                          onClick={async () => {
                            try { await factsApi.verify(e.id); toast(e.verified ? 'Unverified' : 'Verified', 'info'); } catch (err) { toast(err.message, 'error'); }
                          }}
                        >{e.verified ? '✅' : '☑️'}</button>
                        <button
                          className={s.factIconBtn}
                          title={e.locked ? 'Unlock' : 'Lock'}
                          onClick={async () => {
                            try { await factsApi.lock(e.id); toast(e.locked ? 'Unlocked' : 'Locked', 'info'); } catch (err) { toast(err.message, 'error'); }
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

        <div className={s.psect}>Connections</div>
        <div className={s.rels}>
          {relations.map(r => {
            const rp = people.find(x => x.id === r.id);
            if (!rp) return null;
            const brc = BRANCH[rp.branch];
            // Find the actual relationship object for removal
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
                  <span className={s.rchipLbl} style={getLblStyle(r.type)}>{r.label}</span>
                </div>
                <div className={s.rchipActions}>
                  <button className={s.rchipBtn} onClick={() => onViewPerson(rp.id)}>View</button>
                  <button className={s.rchipBtn} onClick={() => onFocusPerson(rp.id)}>Focus</button>
                  {relObj && (
                    <button
                      className={s.rchipBtn}
                      style={{ color: '#c44', background: 'rgba(204,68,68,0.1)' }}
                      onClick={() => handleRemoveRelationship(relObj.id)}
                      title="Remove connection"
                    >✕</button>
                  )}
                </div>
              </div>
            );
          })}
          {relations.length === 0 && (
            <div style={{ fontSize: 13, color: 'var(--text-muted)', padding: '4px 0' }}>
              No connections yet.
            </div>
          )}
        </div>

        {/* Add Connection */}
        {!addRelOpen ? (
          <button
            className={s.uploadBtn}
            style={{ marginTop: 6 }}
            onClick={() => setAddRelOpen(true)}
          >
            + Add Connection
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
                  color: 'var(--text)', fontFamily: "'Crimson Pro', sans-serif",
                }}
              >
                <option value="parent">Parent of {person.firstName}</option>
                <option value="child">Child of {person.firstName}</option>
                <option value="spouse">Spouse / Partner</option>
                <option value="sibling">Sibling</option>
              </select>
            </div>
            <select
              value={relTarget}
              onChange={e => setRelTarget(e.target.value)}
              style={{
                width: '100%', padding: '6px 8px', fontSize: 12, borderRadius: 6,
                border: '1px solid var(--border)', background: 'var(--surface)',
                color: 'var(--text)', fontFamily: "'Crimson Pro', sans-serif",
                marginBottom: 6,
              }}
            >
              <option value="">— select person —</option>
              {availablePeople.map(p => (
                <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>
              ))}
            </select>
            <div style={{ display: 'flex', gap: 6 }}>
              <button
                className={s.rchipBtn}
                onClick={handleAddRelationship}
                disabled={!relTarget || relSaving}
                style={{ flex: 1, padding: '6px 0', textAlign: 'center' }}
              >
                {relSaving ? 'Saving…' : 'Add'}
              </button>
              <button
                className={s.rchipBtn}
                onClick={() => { setAddRelOpen(false); setRelTarget(''); }}
                style={{ padding: '6px 10px' }}
              >
                Cancel
              </button>
            </div>
          </div>
        )}

        <div className={s.psect}>Documents</div>
        <div className={s.docs}>
          {(person.docs || []).map((d, i) => (
            <div key={i} className={s.ditem}>
              <span className={s.dico}>📄</span>
              <span>{d}</span>
            </div>
          ))}
        </div>

        {/* ── Stories ── */}
        <div className={s.psect}>Stories & Memories</div>
        {storyList.map(st => (
          <div key={st.id} className={s.storyCard}>
            <div className={s.storyTitle}>{st.title}</div>
            <div className={s.storyBody}>{st.body}</div>
            <div className={s.storyMeta}>
              {st.author_name || 'Unknown'} · {new Date(st.created_at).toLocaleDateString()}
            </div>
          </div>
        ))}
        {storyList.length === 0 && !addingStory && (
          <div style={{ fontSize: 13, color: 'var(--text-muted)', padding: '4px 0' }}>
            No stories yet. Be the first to share a memory.
          </div>
        )}
        {!addingStory ? (
          <button className={s.uploadBtn} style={{ marginTop: 6 }} onClick={() => setAddingStory(true)}>
            + Add Story
          </button>
        ) : (
          <div style={{ marginTop: 6 }}>
            <input
              className={s.storyInput}
              placeholder="Story title"
              value={newStory.title}
              onChange={e => setNewStory(prev => ({ ...prev, title: e.target.value }))}
            />
            <textarea
              className={s.storyTextarea}
              placeholder="Share a memory or story…"
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
                    toast('Story added', 'info');
                  } catch (err) {
                    toast(err.message || 'Failed to save story', 'error');
                  }
                }}
              >Save</button>
              <button
                className={s.rchipBtn}
                style={{ padding: '6px 10px' }}
                onClick={() => { setAddingStory(false); setNewStory({ title: '', body: '' }); }}
              >Cancel</button>
            </div>
          </div>
        )}

        <button className={s.uploadBtn} onClick={handleUpload}>Upload Photo</button>
        <input ref={fileRef} type="file" accept="image/*" style={{ display: 'none' }} onChange={handleFile} />

        {/* ── Magic Link Invite ── */}
        {person.invite_token && !person.claimed_by && (
          <>
            <div className={s.psect}>Invite Link</div>
            <p style={{ fontSize: 12, color: 'var(--text-muted)', marginBottom: 6 }}>
              Share this link so {person.firstName} can claim their profile:
            </p>
            <div style={{
              display: 'flex', gap: 6, alignItems: 'center',
            }}>
              <input
                readOnly
                value={`${window.location.origin}/join?token=${person.invite_token}`}
                style={{
                  flex: 1, padding: '7px 10px', fontSize: 12, borderRadius: 6,
                  border: '1px solid var(--border)', background: 'var(--surface2)',
                  fontFamily: 'monospace', color: 'var(--text-dim)',
                }}
                onClick={e => e.target.select()}
              />
              <button
                className={s.rchipBtn}
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/join?token=${person.invite_token}`);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 2000);
                }}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
          </>
        )}
        {person.claimed_by && (
          <>
            <div className={s.psect}>Profile Status</div>
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 5,
              padding: '3px 9px', borderRadius: 20, fontSize: 11, fontWeight: 600,
              background: 'var(--tag-marry-bg)', color: 'var(--tag-marry)',
            }}>
              ✓ Profile Claimed
            </div>
          </>
        )}
        {person.public_slug && (
          <>
            <div className={s.psect}>Public Profile</div>
            <div style={{ display: 'flex', gap: 6, alignItems: 'center' }}>
              <input
                readOnly
                value={`${window.location.origin}/p/${person.public_slug}`}
                style={{
                  flex: 1, padding: '7px 10px', fontSize: 12, borderRadius: 6,
                  border: '1px solid var(--border)', background: 'var(--surface2)',
                  fontFamily: 'monospace', color: 'var(--text-dim)',
                }}
                onClick={e => e.target.select()}
              />
              <button
                className={s.rchipBtn}
                onClick={() => {
                  navigator.clipboard.writeText(`${window.location.origin}/p/${person.public_slug}`);
                  toast('Public URL copied', 'info');
                }}
              >Copy</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
