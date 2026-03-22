import { useState, useCallback, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { people as peopleApi, profiles as profilesApi, media as mediaApi, auth, join, setToken } from './api/client';
import { toast } from './components/Toast';
import { useTree } from './context/TreeContext';
import Scene from './components/Scene';
import TopBar from './components/TopBar';
import DetailPanel from './components/DetailPanel';
import AddPersonModal from './components/AddPersonModal';
import Toast from './components/Toast';

const MAGIC_LINK_RESEND_DELAY_SECONDS = 30;

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
    branch: meta.branch || 'family',
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
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  const {
    activeTreeId,
    treeList,
    loading: treeLoading,
    currentUser,
    currentUserId,
    isAuthenticated,
    logout,
    refreshSession,
    setActiveTreeId,
  } = useTree();
  const [people, setPeople] = useState([]);
  const [rels, setRels] = useState([]);
  const [selectedId, setSelectedId] = useState(null);
  const [focusedId, setFocusedId] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingPerson, setEditingPerson] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [pathMode, setPathMode] = useState(false);
  const [graphMode, setGraphMode] = useState('2d');
  const [is3DAvailable] = useState(true);
  const [loading, setLoading] = useState(true);
  const [showSignInEntry, setShowSignInEntry] = useState(false);
  const [signInEntryMode, setSignInEntryMode] = useState('link');
  const [signInSending, setSignInSending] = useState(false);
  const [codeJoinSubmitting, setCodeJoinSubmitting] = useState(false);
  const [magicLinkSent, setMagicLinkSent] = useState(false);
  const [magicLinkSentAt, setMagicLinkSentAt] = useState(null);
  const [resendTimerNow, setResendTimerNow] = useState(() => Date.now());
  const [signInForm, setSignInForm] = useState({ email: '', displayName: '' });
  const [signInCodeForm, setSignInCodeForm] = useState({ email: '', displayName: '', code: '' });
  const sceneRef = useRef(null);
  const tooltipRef = useRef(null);

  const proposalStatus = searchParams.get('proposal');
  const requestedProfileId = searchParams.get('profile');
  const requestedPanelTab = searchParams.get('tab');
  const requestedFocusId = searchParams.get('focus') || requestedProfileId;
  const resolvedActiveTreeId = activeTreeId || treeList[0]?.id || null;
  const canAddPeople = !treeLoading && Boolean(resolvedActiveTreeId);
  const shouldShowSignInEntry = showSignInEntry || (!treeLoading && !resolvedActiveTreeId && !isAuthenticated);
  const isCodeSignInMode = signInEntryMode === 'code';
  const resendRemainingSeconds = magicLinkSentAt
    ? Math.max(0, MAGIC_LINK_RESEND_DELAY_SECONDS - Math.ceil((resendTimerNow - magicLinkSentAt) / 1000))
    : 0;
  const canResendMagicLink = magicLinkSent && resendRemainingSeconds === 0 && !signInSending;
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

  useEffect(() => {
    if (!magicLinkSentAt || resendRemainingSeconds === 0) return undefined;

    const timer = window.setInterval(() => {
      setResendTimerNow(Date.now());
    }, 1000);

    return () => window.clearInterval(timer);
  }, [magicLinkSentAt, resendRemainingSeconds]);

  useEffect(() => {
    if (!requestedProfileId || people.length === 0) return;

    const target = people.find((person) => person.id === requestedProfileId);
    if (!target) return;

    setSelectedId(target.id);
    if (requestedFocusId) {
      setFocusedId(requestedFocusId);
      sceneRef.current?.__sceneApi?.shiftToOrigin(requestedFocusId);
    }
  }, [people, requestedFocusId, requestedProfileId]);

  // ── Load data from API on mount ──────────────────
  useEffect(() => {
    if (treeLoading) return; // wait for TreeContext bootstrap
    if (!resolvedActiveTreeId) {
      console.log('[Kin] No active tree set. Waiting for TreeProvider to resolve…');
      setLoading(false);
      return;
    }
    setLoading(true);
    console.log('[Kin] Fetching data for tree:', resolvedActiveTreeId);
    peopleApi.fetchAll(resolvedActiveTreeId)
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
  }, [resolvedActiveTreeId, treeLoading, t]);

  const selectedPerson = selectedId ? people.find(p => p.id === selectedId) : null;
  const ownedProfile = currentUserId
    ? people.find((person) => person.claimed_by === currentUserId && person.public_slug)
    : null;
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
    if (requestedProfileId || requestedFocusId || requestedPanelTab) {
      const nextParams = new URLSearchParams(searchParams);
      nextParams.delete('profile');
      nextParams.delete('focus');
      nextParams.delete('tab');
      setSearchParams(nextParams, { replace: true });
    }
  }, [requestedFocusId, requestedPanelTab, requestedProfileId, searchParams, setSearchParams]);

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
    if (!resolvedActiveTreeId) {
      toast(t('app.noActiveTree'), 'error');
      return false;
    }

    try {
      const { profile, relationships: createdRels } = await peopleApi.createPerson(resolvedActiveTreeId, data);

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
      return true;
    } catch (err) {
      console.error('[Kin] Failed to create person:', err);
      toast(err.message || t('app.failedAddPerson'), 'error');
      return false;
    }
  }, [focusedId, people, resolvedActiveTreeId, t]);

  const handleUpdatePerson = useCallback(async (data) => {
    if (!editingPerson) return false;

    try {
      const updatedProfile = await profilesApi.update(editingPerson.id, {
        firstName: data.firstName,
        lastName: data.lastName,
        maidenName: data.maiden || null,
        isLiving: !data.death,
        metadata: {
          branch: editingPerson.branch,
          gender: data.gender,
          birth: data.birth,
          death: data.death,
          bio: data.bio,
        },
      });

      setPeople((current) => current.map((person) => {
        if (person.id !== editingPerson.id) return person;
        const nextPerson = dbToFrontend(updatedProfile);
        nextPerson._p = person._p;
        nextPerson._v = person._v;
        return nextPerson;
      }));
      setEditingPerson(null);
      toast(t('app.personUpdated', { name: `${updatedProfile.first_name} ${updatedProfile.last_name}` }));
      return true;
    } catch (err) {
      console.error('[Kin] Failed to update person:', err);
      toast(err.message || t('app.failedUpdatePerson'), 'error');
      return false;
    }
  }, [editingPerson, t]);

  const handleRelationshipAdded = useCallback((rel) => {
    setRels(prev => [...prev, dbRelToFrontend(rel)]);
    sceneRef.current?.__sceneApi?.startSim(3000);
  }, []);

  const handleRelationshipRemoved = useCallback((relId) => {
    setRels(prev => prev.filter(r => r.id !== relId));
    sceneRef.current?.__sceneApi?.startSim(3000);
  }, []);

  const handleProfileClaimed = useCallback((profileId, claimedBy) => {
    setPeople((current) => current.map((person) => (
      person.id === profileId
        ? { ...person, claimed_by: claimedBy }
        : person
    )));
  }, []);

  const dismissProposalNotice = useCallback(() => {
    const nextParams = new URLSearchParams(searchParams);
    nextParams.delete('proposal');
    setSearchParams(nextParams, { replace: true });
  }, [searchParams, setSearchParams]);

  const sendSignInLinkRequest = useCallback(async () => {
    setSignInSending(true);
    try {
      await auth.sendMagicLink({
        email: signInForm.email.trim(),
        displayName: signInForm.displayName.trim() || undefined,
      });
      setMagicLinkSent(true);
      setMagicLinkSentAt(Date.now());
      setResendTimerNow(Date.now());
      toast(t('app.signInLinkSent'), 'success');
    } catch (err) {
      toast(err.message || t('app.signInLinkFailed'), 'error');
    } finally {
      setSignInSending(false);
    }
  }, [signInForm.displayName, signInForm.email, t]);

  const handleSendSignInLink = useCallback(async (event) => {
    event.preventDefault();
    await sendSignInLinkRequest();
  }, [sendSignInLinkRequest]);

  const handleResendSignInLink = useCallback(async () => {
    if (!canResendMagicLink) return;
    await sendSignInLinkRequest();
  }, [canResendMagicLink, sendSignInLinkRequest]);

  const handleTryAnotherEmail = useCallback(() => {
    setMagicLinkSent(false);
    setMagicLinkSentAt(null);
    setResendTimerNow(Date.now());
    setSignInEntryMode('link');
    setSignInForm((current) => ({ ...current, email: '' }));
  }, []);

  const handleJoinWithAccessCode = useCallback(async (event) => {
    event.preventDefault();
    setCodeJoinSubmitting(true);
    try {
      const result = await join.joinWithAnyCode({
        code: signInCodeForm.code.trim(),
        email: signInCodeForm.email.trim(),
        displayName: signInCodeForm.displayName.trim(),
      });
      setToken(result.token);
      await refreshSession({ syncTrees: true });
      setActiveTreeId(result.treeId);
      setShowSignInEntry(false);
      toast(t('app.signInCodeSuccess'), 'success');

      const params = new URLSearchParams();
      if (result.profileId) {
        params.set('profile', result.profileId);
        params.set('focus', result.profileId);
      }
      navigate(`/${params.toString() ? `?${params.toString()}` : ''}`, { replace: true });
    } catch (err) {
      toast(err.message || t('app.signInCodeFailed'), 'error');
    } finally {
      setCodeJoinSubmitting(false);
    }
  }, [navigate, refreshSession, setActiveTreeId, signInCodeForm.code, signInCodeForm.displayName, signInCodeForm.email, t]);

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
        canOpenModal={canAddPeople}
        mobileMenuOpen={mobileMenuOpen}
        onMobileMenuOpenChange={setMobileMenuOpen}
        onSetFocus={handleSetFocus}
        onOpenPanel={handleOpenPanel}
        onTogglePathMode={handleTogglePathMode}
        onToggleGraphMode={handleToggleGraphMode}
        onResetView={handleResetView}
        onOpenModal={() => canAddPeople && setIsModalOpen(true)}
        currentUser={currentUser}
        isAuthenticated={isAuthenticated}
        onLogout={logout}
        onOpenSignIn={() => {
          setMagicLinkSent(false);
          setMagicLinkSentAt(null);
          setSignInEntryMode('link');
          setShowSignInEntry(true);
        }}
        ownedProfile={ownedProfile}
        onOpenPublicProfile={() => ownedProfile && navigate(`/p/${ownedProfile.public_slug}`)}
        sceneRef={sceneRef}
      />
      {shouldShowSignInEntry && (
        <div style={{
          position: 'fixed',
          inset: 0,
          zIndex: 300,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'rgba(45,42,38,0.14)',
          backdropFilter: 'blur(6px)',
          padding: 20,
        }}>
          <div style={{
            width: 'min(460px, 100%)',
            background: '#FDFBF8',
            borderRadius: 18,
            border: '1px solid #DCD5C8',
            boxShadow: '0 20px 50px rgba(45,42,38,0.16)',
            padding: 30,
            position: 'relative',
          }}>
            {showSignInEntry && resolvedActiveTreeId && (
              <button
                type="button"
                onClick={() => {
                  setMagicLinkSent(false);
                  setMagicLinkSentAt(null);
                  setSignInEntryMode('link');
                  setShowSignInEntry(false);
                }}
                style={{
                  position: 'absolute',
                  top: 12,
                  right: 12,
                  width: 32,
                  height: 32,
                  borderRadius: 999,
                  border: '1px solid #DCD5C8',
                  background: '#FDFBF8',
                  color: '#9A948E',
                  cursor: 'pointer',
                  fontSize: 16,
                }}
                aria-label={t('common.dismiss')}
              >
                ×
              </button>
            )}
            <div style={{ textAlign: 'center', marginBottom: 16 }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.14em', textTransform: 'uppercase', color: '#8A7350', marginBottom: 8 }}>
                {t('app.returningMembers')}
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 30, color: '#2D2A26', margin: 0 }}>
                {isCodeSignInMode ? t('app.signInCodeTitle') : t('app.signInEntryTitle')}
              </h2>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 14, lineHeight: 1.7, color: '#5E5850', textAlign: 'center', marginBottom: 18 }}>
              {isCodeSignInMode ? t('app.signInCodeBody') : t('app.signInEntryBody')}
            </p>
            {magicLinkSent ? (
              <>
                <p style={{ fontFamily: "'Inter', sans-serif", fontSize: 13, lineHeight: 1.8, color: '#3D7C47', textAlign: 'center', margin: '4px 0 18px' }}>
                  {t('app.signInEntrySuccess')}
                </p>
                <button
                  type="button"
                  onClick={handleResendSignInLink}
                  style={{
                    width: '100%',
                    padding: '12px 14px',
                    border: 'none',
                    borderRadius: 10,
                    background: canResendMagicLink ? '#3D7C47' : '#B9C8BC',
                    color: '#fff',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: canResendMagicLink ? 'pointer' : 'not-allowed',
                  }}
                  disabled={!canResendMagicLink}
                >
                  {canResendMagicLink
                    ? t('app.resendSignInLink')
                    : t('app.resendSignInLinkIn', { seconds: resendRemainingSeconds })}
                </button>
                <button
                  type="button"
                  onClick={handleTryAnotherEmail}
                  style={{
                    width: '100%',
                    marginTop: 12,
                    padding: '11px 14px',
                    border: '1px solid #DCD5C8',
                    borderRadius: 10,
                    background: '#FDFBF8',
                    color: '#7C7266',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {t('app.tryAnotherEmail')}
                </button>
              </>
            ) : !isCodeSignInMode ? (
              <>
                <form onSubmit={handleSendSignInLink} style={{ display: 'grid', gap: 8 }}>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9A948E' }}>
                    {t('joinPage.displayName')}
                  </label>
                  <input
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #DCD5C8', background: '#F0EBE2', color: '#2D2A26', fontFamily: "'Inter', sans-serif", fontSize: 14 }}
                    type="text"
                    value={signInForm.displayName}
                    onChange={(event) => setSignInForm((current) => ({ ...current, displayName: event.target.value }))}
                    placeholder={t('joinPage.yourName')}
                    required
                  />
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9A948E', marginTop: 6 }}>
                    {t('joinPage.email')}
                  </label>
                  <input
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #DCD5C8', background: '#F0EBE2', color: '#2D2A26', fontFamily: "'Inter', sans-serif", fontSize: 14 }}
                    type="email"
                    value={signInForm.email}
                    onChange={(event) => setSignInForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder={t('joinPage.yourEmail')}
                    required
                  />
                  <button
                    type="submit"
                    style={{ marginTop: 12, padding: '12px 14px', border: 'none', borderRadius: 10, background: '#3D7C47', color: '#fff', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
                    disabled={signInSending}
                  >
                    {signInSending ? t('app.sendingSignInLink') : t('app.sendSignInLink')}
                  </button>
                </form>
                <button
                  type="button"
                  onClick={() => setSignInEntryMode('code')}
                  style={{
                    width: '100%',
                    marginTop: 16,
                    padding: '11px 14px',
                    border: '1px solid #CBBDA7',
                    borderRadius: 10,
                    background: '#EFE6D8',
                    color: '#5F513B',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {t('app.useCodeOption')}
                </button>
              </>
            ) : (
              <>
                <form onSubmit={handleJoinWithAccessCode} style={{ display: 'grid', gap: 8 }}>
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9A948E' }}>
                    {t('treeAccess.accessCode')}
                  </label>
                  <input
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #DCD5C8', background: '#F0EBE2', color: '#2D2A26', fontFamily: "'Inter', sans-serif", fontSize: 14 }}
                    type="text"
                    value={signInCodeForm.code}
                    onChange={(event) => setSignInCodeForm((current) => ({ ...current, code: event.target.value.toUpperCase() }))}
                    placeholder={t('treeAccess.codePlaceholder')}
                    required
                  />
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9A948E', marginTop: 6 }}>
                    {t('joinPage.displayName')}
                  </label>
                  <input
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #DCD5C8', background: '#F0EBE2', color: '#2D2A26', fontFamily: "'Inter', sans-serif", fontSize: 14 }}
                    type="text"
                    value={signInCodeForm.displayName}
                    onChange={(event) => setSignInCodeForm((current) => ({ ...current, displayName: event.target.value }))}
                    placeholder={t('joinPage.yourName')}
                    required
                  />
                  <label style={{ fontFamily: "'Inter', sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: '#9A948E', marginTop: 6 }}>
                    {t('joinPage.email')}
                  </label>
                  <input
                    style={{ width: '100%', padding: '10px 12px', borderRadius: 8, border: '1px solid #DCD5C8', background: '#F0EBE2', color: '#2D2A26', fontFamily: "'Inter', sans-serif", fontSize: 14 }}
                    type="email"
                    value={signInCodeForm.email}
                    onChange={(event) => setSignInCodeForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder={t('joinPage.yourEmail')}
                    required
                  />
                  <button
                    type="submit"
                    style={{ marginTop: 12, padding: '12px 14px', border: '1px solid #CBBDA7', borderRadius: 10, background: '#EFE6D8', color: '#5F513B', fontFamily: "'Inter', sans-serif", fontSize: 14, fontWeight: 700, cursor: 'pointer' }}
                    disabled={codeJoinSubmitting}
                  >
                    {codeJoinSubmitting ? t('app.joiningWithCode') : t('app.signInWithCode')}
                  </button>
                </form>
                <button
                  type="button"
                  onClick={() => setSignInEntryMode('link')}
                  style={{
                    width: '100%',
                    marginTop: 12,
                    padding: '11px 14px',
                    border: '1px solid #DCD5C8',
                    borderRadius: 10,
                    background: '#FDFBF8',
                    color: '#7C7266',
                    fontFamily: "'Inter', sans-serif",
                    fontSize: 14,
                    fontWeight: 700,
                    cursor: 'pointer',
                  }}
                >
                  {t('app.backToEmailSignIn')}
                </button>
              </>
            )}
          </div>
        </div>
      )}
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
        initialTab={requestedPanelTab}
        onEditPerson={setEditingPerson}
        onClose={handleClosePanel}
        onViewPerson={handleViewPerson}
        onFocusPerson={handleFocusPerson}
        onPhotoChange={handlePhotoChange}
        onRelationshipAdded={handleRelationshipAdded}
        onRelationshipRemoved={handleRelationshipRemoved}
        onProfileClaimed={handleProfileClaimed}
      />
      {(isModalOpen || editingPerson) && (
        <AddPersonModal
          activeTreeId={resolvedActiveTreeId}
          treeLoading={treeLoading}
          people={people}
          mode={editingPerson ? 'edit' : 'create'}
          initialValues={editingPerson ? {
            firstName: editingPerson.firstName,
            lastName: editingPerson.lastName,
            maiden: editingPerson.maiden,
            gender: editingPerson.gender,
            birth: editingPerson.birth,
            death: editingPerson.death,
            bio: editingPerson.bio,
          } : null}
          onSave={editingPerson ? handleUpdatePerson : handleSavePerson}
          onClose={() => {
            setIsModalOpen(false);
            setEditingPerson(null);
          }}
        />
      )}
      <Toast />
    </>
  );
}

export default App;
