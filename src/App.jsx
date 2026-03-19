import { useState, useCallback, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { people as peopleApi, media as mediaApi } from './api/client';
import { toast } from './components/Toast';
import { useTree } from './context/TreeContext';
import Scene from './components/Scene';
import TopBar from './components/TopBar';
import DetailPanel from './components/DetailPanel';
import AddPersonModal from './components/AddPersonModal';
import Legend from './components/Legend';
import Toast from './components/Toast';

/** Helper: get the first value from an aggregated facts map for a given key */
function factVal(factsMap, key) {
  const arr = factsMap?.[key];
  return arr?.[0]?.value || null;
}

/** Normalize a DB profile row (with EAV facts) into the frontend person shape */
function dbToFrontend(p) {
  const facts = p.facts || {};
  const meta = p.metadata || {};
  return {
    id: p.id,
    firstName: p.first_name,
    lastName: p.last_name,
    maiden: p.maiden_name || '',
    gender: factVal(facts, 'gender') || '',
    birth: factVal(facts, 'birth_year') ? parseInt(factVal(facts, 'birth_year')) : null,
    death: factVal(facts, 'death_year') ? parseInt(factVal(facts, 'death_year')) : null,
    branch: meta.branch || 'paternal',
    bio: factVal(facts, 'biography') || '',
    facts, // keep the full EAV map for DetailPanel
    photo: p.profile_photo_url || p.profilePhotoUrl || p.media?.find(item => item.type === 'photo' && item.is_profile_photo)?.url || p.media?.find(item => item.type === 'photo')?.url || null,
    docs: (p.media || []).filter(item => item.type === 'document').map(item => item.url),
    invite_token: p.invite_token || null,
    claimed_by: p.claimed_by || null,
    public_slug: p.public_slug || null,
    _p: new THREE.Vector3((Math.random() - .5) * 300, (Math.random() - .5) * 300, (Math.random() - .5) * 50),
    _v: new THREE.Vector3(),
  };
}

/** Normalize a DB relationship row into the frontend rel shape */
function dbRelToFrontend(r) {
  return {
    id: r.id,
    type: r.type === 'parent_child' ? 'parent' : r.type,
    a: r.profile_a,
    b: r.profile_b,
  };
}

function App() {
  const { t } = useTranslation();
  const [searchParams, setSearchParams] = useSearchParams();
  const { activeTreeId, loading: treeLoading, currentUserId } = useTree();
  const [people, setPeople] = useState([]);
  const [rels, setRels] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [focusedId, setFocusedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pathMode, setPathMode] = useState(false);
  const [graphMode, setGraphMode] = useState('2d');
  const [is3DAvailable] = useState(true);
  const [loading, setLoading] = useState(true);
  const sceneRef = useRef(null);
  const tooltipRef = useRef(null);

  const proposalStatus = searchParams.get('proposal');
  const proposalMessages = {
    accepted: {
      tone: 'success',
      title: t('app.proposalApproved'),
      body: t('app.proposalApprovedBody'),
    },
    rejected: {
      tone: 'info',
      title: t('app.proposalRejected'),
      body: t('app.proposalRejectedBody'),
    },
    'not-found': {
      tone: 'error',
      title: t('app.proposalUnavailable'),
      body: t('app.proposalUnavailableBody'),
    },
  };
  const proposalNotice = proposalStatus ? proposalMessages[proposalStatus] : null;

  useEffect(() => {
    if (!proposalNotice) return;
    toast(proposalNotice.title, proposalNotice.tone === 'error' ? 'error' : proposalNotice.tone === 'info' ? 'info' : 'success');
  }, [proposalNotice]);

  // ── Load data from API on mount ──────────────────
  useEffect(() => {
    if (treeLoading) return; // wait for TreeContext bootstrap
    if (!activeTreeId) {
      console.log('[Kin] No active tree set. Waiting for TreeProvider to resolve…');
      setLoading(false);
      return;
    }
    setLoading(true);
    console.log('[Kin] Fetching data for tree:', activeTreeId);
    peopleApi.fetchAll(activeTreeId)
      .then(({ profiles, relationships }) => {
        setPeople(profiles.map(dbToFrontend));
        setRels(relationships.map(dbRelToFrontend));
        console.log(`[Kin] Loaded ${profiles.length} profiles, ${relationships.length} relationships from DB.`);
      })
      .catch(err => {
        console.error('[Kin] Failed to fetch data:', err);
        toast(t('app.failedLoadData'), 'error');
      })
      .finally(() => setLoading(false));
  }, [activeTreeId, treeLoading, t]);

  const selectedPerson = selectedId ? people.find(p => p.id === selectedId) : null;
  const selectedPersonWithOwnership = selectedPerson
    ? { ...selectedPerson, isOwner: !!(currentUserId && selectedPerson.claimed_by === currentUserId) }
    : null;

  const handleNodeClick = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const handlePathSelect = useCallback((id) => {
    window.__topBarPathSelect?.(id);
  }, []);

  const handleSetFocus = useCallback((id) => {
    setFocusedId(id);
    if (id) {
      sceneRef.current?.__sceneApi?.shiftToOrigin(id);
    }
  }, []);

  const handleOpenPanel = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const handleClosePanel = useCallback(() => {
    setSelectedId(null);
  }, []);

  const handleViewPerson = useCallback((id) => {
    setSelectedId(id);
  }, []);

  const handleFocusPerson = useCallback((id) => {
    handleSetFocus(id);
    setSelectedId(id);
  }, [handleSetFocus]);

  const handleResetView = useCallback(() => {
    sceneRef.current?.__sceneApi?.resetView();
  }, []);

  const handleTogglePathMode = useCallback(() => {
    setPathMode(prev => !prev);
  }, []);

  const handlePhotoChange = useCallback(async (id, dataUrl) => {
    const existingPerson = people.find(person => person.id === id);
    setPeople(prev => prev.map(p => p.id === id ? { ...p, photo: dataUrl } : p));

    try {
      await mediaApi.create({
        profileId: id,
        type: 'photo',
        url: dataUrl,
        isProfilePhoto: true,
      });
      toast(t('app.photoSaved'), 'info');
    } catch (err) {
      console.error('[Kin] Failed to save photo:', err);
      setPeople(prev => prev.map(p => p.id === id ? { ...p, photo: existingPerson?.photo || null } : p));
      throw err;
    }
  }, [people, t]);

  const handleToggleGraphMode = useCallback(() => {
    if (!is3DAvailable) return;
    setGraphMode(prev => prev === '2d' ? '3d' : '2d');
  }, [is3DAvailable]);

  const handleSavePerson = useCallback(async (data) => {
    if (!activeTreeId) {
      toast(t('app.noActiveTree'), 'error');
      return;
    }

    try {
      const { profile, relationships: createdRels } = await peopleApi.createPerson(activeTreeId, data);

      console.log('[Kin] Person created in DB:', profile.id, profile.first_name, profile.last_name);
  toast(t('app.personAdded', { name: `${profile.first_name} ${profile.last_name}` }));

      // Add to local state with Three.js vectors
      const focP = focusedId ? people.find(x => x.id === focusedId) : null;
      const spread = focP
        ? focP._p.clone().add(new THREE.Vector3((Math.random() - .5) * 180, (Math.random() - .5) * 180, 0))
        : new THREE.Vector3((Math.random() - .5) * 240, (Math.random() - .5) * 240, (Math.random() - .5) * 50);

      const newPerson = dbToFrontend(profile);
      newPerson._p = spread;

      setPeople(prev => [...prev, newPerson]);

      const newRels = createdRels.map(dbRelToFrontend);
      if (newRels.length) setRels(prev => [...prev, ...newRels]);

      sceneRef.current?.__sceneApi?.startSim(5000);
      setTimeout(() => setSelectedId(profile.id), 80);
    } catch (err) {
      console.error('[Kin] Failed to create person:', err);
      toast(err.message || t('app.failedAddPerson'), 'error');
    }
  }, [activeTreeId, focusedId, people, t]);

  const handleRelationshipAdded = useCallback((rel) => {
    setRels(prev => [...prev, dbRelToFrontend(rel)]);
    sceneRef.current?.__sceneApi?.startSim(3000);
  }, []);

  const handleRelationshipRemoved = useCallback((relId) => {
    setRels(prev => prev.filter(r => r.id !== relId));
    sceneRef.current?.__sceneApi?.startSim(3000);
  }, []);

  const dismissProposalNotice = useCallback(() => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('proposal');
    setSearchParams(nextParams, { replace: true });
  }, [searchParams, setSearchParams]);

  return (
    <>
      {loading && (
        <div style={{
          position: 'fixed', inset: 0, zIndex: 9999,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: 'var(--bg)', fontFamily: "'Playfair Display', serif",
          fontSize: 22, color: 'var(--green)',
        }}>
          {t('common.loadingFamilyTree')}
        </div>
      )}
      <Scene
        people={people}
        rels={rels}
        selectedId={selectedId}
        focusedId={focusedId}
        pathMode={pathMode}
        graphMode={graphMode}
        onNodeClick={handleNodeClick}
        onPathSelect={handlePathSelect}
        tooltipRef={tooltipRef}
        ref={sceneRef}
      />
      <TopBar
        people={people}
        rels={rels}
        focusedId={focusedId}
        pathMode={pathMode}
        graphMode={graphMode}
        is3DAvailable={is3DAvailable}
        onSetFocus={handleSetFocus}
        onOpenPanel={handleOpenPanel}
        onTogglePathMode={handleTogglePathMode}
        onToggleGraphMode={handleToggleGraphMode}
        onResetView={handleResetView}
        onOpenModal={() => setIsModalOpen(true)}
        sceneRef={sceneRef}
      />
      {proposalNotice && (
        <div style={{
          position: 'fixed',
          top: 72,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 220,
          width: 'min(560px, calc(100vw - 24px))',
          padding: '14px 16px',
          borderRadius: 12,
          border: `1px solid ${proposalNotice.tone === 'error' ? 'rgba(192,57,43,0.28)' : proposalNotice.tone === 'info' ? 'rgba(58,114,160,0.24)' : 'rgba(61,124,71,0.24)'}`,
          background: 'rgba(253, 251, 248, 0.98)',
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
          backdropFilter: 'blur(8px)',
        }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
            <div style={{ flex: 1 }}>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: '.08em',
                textTransform: 'uppercase',
                color: proposalNotice.tone === 'error' ? '#c0392b' : proposalNotice.tone === 'info' ? '#3A72A0' : '#3D7C47',
                marginBottom: 4,
              }}>
                {t('app.proposalUpdate')}
              </div>
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: 22,
                color: '#2D2A26',
                marginBottom: 4,
              }}>
                {proposalNotice.title}
              </div>
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 14,
                lineHeight: 1.6,
                color: '#5E5850',
              }}>
                {proposalNotice.body}
              </div>
            </div>
            <button
              type="button"
              onClick={dismissProposalNotice}
              style={{
                border: '1px solid var(--border)',
                background: 'var(--surface)',
                color: 'var(--text-muted)',
                borderRadius: 999,
                width: 32,
                height: 32,
                cursor: 'pointer',
                fontSize: 16,
                lineHeight: 1,
                flexShrink: 0,
              }}
              aria-label="Dismiss proposal notice"
            >
              ×
            </button>
          </div>
        </div>
      )}
      <DetailPanel
        person={selectedPersonWithOwnership}
        people={people}
        rels={rels}
        onClose={handleClosePanel}
        onViewPerson={handleViewPerson}
        onFocusPerson={handleFocusPerson}
        onPhotoChange={handlePhotoChange}
        onRelationshipAdded={handleRelationshipAdded}
        onRelationshipRemoved={handleRelationshipRemoved}
      />
      <Legend people={people} rels={rels} tooltipRef={tooltipRef} />
      {isModalOpen && (
        <AddPersonModal
          people={people}
          onSave={handleSavePerson}
          onClose={() => setIsModalOpen(false)}
        />
      )}
      <Toast />
    </>
  );
}

export default App;
