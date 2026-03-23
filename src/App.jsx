import { useState, useCallback, useRef, useEffect } from 'react';
import * as THREE from 'three';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { people as peopleApi, profiles as profilesApi, media as mediaApi, auth, join, setToken } from './api/client';
import './App.css';
import { toast } from './components/Toast';
import { useTree } from './context/TreeContext';
import Scene from './components/Scene';
import TopBar from './components/TopBar';
import DetailPanel from './components/DetailPanel';
import AddPersonModal from './components/AddPersonModal';
import LanguageToggle from './components/LanguageToggle';
import Toast from './components/Toast';

const MAGIC_LINK_RESEND_DELAY_SECONDS = 30;
const USER_PREFERENCES_STORAGE_KEY = 'kin_user_preferences_v1';
const USER_ACTIVITY_STORAGE_KEY = 'kin_user_activity_v1';
const IDLE_LOGOUT_MS = 30 * 60 * 1000;

function normalizeLanguage(language) {
  return language?.slice(0, 2) === 'es' ? 'es' : 'en';
}

function readUserPreferencesMap() {
  if (typeof window === 'undefined') return {};

  try {
    const stored = window.localStorage.getItem(USER_PREFERENCES_STORAGE_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function getUserPreferences(userId) {
  if (!userId) {
    return {
      language: null,
      darkMode: false,
      tutorialStatus: null,
    };
  }

  const stored = readUserPreferencesMap()[userId];
  return {
    language: stored?.language || null,
    darkMode: Boolean(stored?.darkMode),
    tutorialStatus: stored?.tutorialStatus || null,
  };
}

function updateUserPreferences(userId, updates) {
  if (typeof window === 'undefined' || !userId) return;

  const current = readUserPreferencesMap();
  current[userId] = {
    ...getUserPreferences(userId),
    ...current[userId],
    ...updates,
  };
  window.localStorage.setItem(USER_PREFERENCES_STORAGE_KEY, JSON.stringify(current));
}

function readUserActivityMap() {
  if (typeof window === 'undefined') return {};

  try {
    const stored = window.localStorage.getItem(USER_ACTIVITY_STORAGE_KEY);
    if (!stored) return {};
    const parsed = JSON.parse(stored);
    return parsed && typeof parsed === 'object' ? parsed : {};
  } catch {
    return {};
  }
}

function getLastActivity(userId) {
  if (!userId) return null;
  const value = readUserActivityMap()[userId];
  return typeof value === 'number' ? value : null;
}

function setLastActivity(userId, timestamp) {
  if (typeof window === 'undefined' || !userId) return;

  const current = readUserActivityMap();
  current[userId] = timestamp;
  window.localStorage.setItem(USER_ACTIVITY_STORAGE_KEY, JSON.stringify(current));
}

function clearLastActivity(userId) {
  if (typeof window === 'undefined' || !userId) return;

  const current = readUserActivityMap();
  delete current[userId];
  window.localStorage.setItem(USER_ACTIVITY_STORAGE_KEY, JSON.stringify(current));
}

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
  const { t, i18n } = useTranslation();
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
  const [authRevealActive, setAuthRevealActive] = useState(false);
  const [signInForm, setSignInForm] = useState({ email: '' });
  const [createAccountForm, setCreateAccountForm] = useState({ email: '', displayName: '' });
  const [signInCodeForm, setSignInCodeForm] = useState({ email: '', displayName: '', code: '' });
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [tutorialMode, setTutorialMode] = useState('hidden');
  const [tutorialStepIndex, setTutorialStepIndex] = useState(0);
  const sceneRef = useRef(null);
  const tooltipRef = useRef(null);
  const authOverlayWasVisibleRef = useRef(false);
  const tutorialPromptedUserRef = useRef(null);
  const idleTimeoutRef = useRef(null);

  const proposalStatus = searchParams.get('proposal');
  const requestedProfileId = searchParams.get('profile');
  const requestedPanelTab = searchParams.get('tab');
  const requestedFocusId = searchParams.get('focus') || requestedProfileId;
  const resolvedActiveTreeId = activeTreeId || treeList[0]?.id || null;
  const canAddPeople = !treeLoading && Boolean(resolvedActiveTreeId);
  const shouldShowSignInEntry = !treeLoading && (!isAuthenticated || showSignInEntry);
  const hasTutorialOverlay = tutorialMode !== 'hidden';
  const currentLanguage = normalizeLanguage(i18n.language);
  const isCodeSignInMode = signInEntryMode === 'code';
  const isCreateAccountMode = signInEntryMode === 'create';
  const appShellClassName = ['app-shell', shouldShowSignInEntry || hasTutorialOverlay ? 'app-shell--auth-open' : '', authRevealActive ? 'app-shell--reveal' : '']
    .filter(Boolean)
    .join(' ');
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
  const tutorialSteps = [
    {
      title: t('app.tutorial.steps.addPerson.title'),
      body: t('app.tutorial.steps.addPerson.body'),
    },
    {
      title: t('app.tutorial.steps.openDetails.title'),
      body: t('app.tutorial.steps.openDetails.body'),
    },
    {
      title: t('app.tutorial.steps.connectFamily.title'),
      body: t('app.tutorial.steps.connectFamily.body'),
    },
    {
      title: t('app.tutorial.steps.saveMemories.title'),
      body: t('app.tutorial.steps.saveMemories.body'),
    },
    {
      title: t('app.tutorial.steps.findPeople.title'),
      body: t('app.tutorial.steps.findPeople.body'),
    },
    {
      title: t('app.tutorial.steps.shareTree.title'),
      body: t('app.tutorial.steps.shareTree.body'),
    },
  ];
  const activeTutorialStep = tutorialSteps[tutorialStepIndex] || tutorialSteps[0];
  const isTutorialPrompt = tutorialMode === 'prompt';
  const isLastTutorialStep = tutorialStepIndex === tutorialSteps.length - 1;

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
    if (shouldShowSignInEntry) {
      authOverlayWasVisibleRef.current = true;
      setAuthRevealActive(false);
      return undefined;
    }

    if (!authOverlayWasVisibleRef.current) return undefined;

    setAuthRevealActive(true);
    authOverlayWasVisibleRef.current = false;

    const timer = window.setTimeout(() => {
      setAuthRevealActive(false);
    }, 1500);

    return () => window.clearTimeout(timer);
  }, [shouldShowSignInEntry]);

  useEffect(() => {
    if (typeof document === 'undefined') return;

    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.removeAttribute('data-theme');
    }
  }, [darkMode]);

  useEffect(() => {
    if (!currentUserId) {
      setDarkMode(false);
      return;
    }

    const preferences = getUserPreferences(currentUserId);
    setDarkMode(preferences.darkMode);

    if (preferences.language && preferences.language !== currentLanguage) {
      i18n.changeLanguage(preferences.language);
    }
  }, [currentLanguage, currentUserId, i18n]);

  const handleLogout = useCallback(async () => {
    clearLastActivity(currentUserId);
    setSettingsOpen(false);
    setShowSignInEntry(false);
    await logout();
  }, [currentUserId, logout]);

  useEffect(() => {
    if (!isAuthenticated || !currentUserId) {
      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
        idleTimeoutRef.current = null;
      }
      return undefined;
    }

    const handleIdleLogout = async () => {
      await handleLogout();
      toast(t('app.sessionExpired'), 'info');
    };

    const lastActivity = getLastActivity(currentUserId);
    if (lastActivity && Date.now() - lastActivity >= IDLE_LOGOUT_MS) {
      handleIdleLogout();
      return undefined;
    }

    const resetIdleTimer = () => {
      setLastActivity(currentUserId, Date.now());
      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
      }
      idleTimeoutRef.current = window.setTimeout(() => {
        handleIdleLogout();
      }, IDLE_LOGOUT_MS);
    };

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        resetIdleTimer();
      }
    };

    const events = ['pointerdown', 'pointermove', 'keydown', 'scroll', 'touchstart'];
    events.forEach((eventName) => window.addEventListener(eventName, resetIdleTimer, true));
    document.addEventListener('visibilitychange', handleVisibilityChange);
    resetIdleTimer();

    return () => {
      events.forEach((eventName) => window.removeEventListener(eventName, resetIdleTimer, true));
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (idleTimeoutRef.current) {
        window.clearTimeout(idleTimeoutRef.current);
        idleTimeoutRef.current = null;
      }
    };
  }, [currentUserId, handleLogout, isAuthenticated, t]);

  useEffect(() => {
    if (currentUserId) return;

    tutorialPromptedUserRef.current = null;
    setTutorialMode('hidden');
    setTutorialStepIndex(0);
  }, [currentUserId]);

  useEffect(() => {
    if (!isAuthenticated || !currentUserId || treeLoading || loading || shouldShowSignInEntry || !resolvedActiveTreeId) {
      return;
    }

    if (hasTutorialOverlay) return;

    const preferences = getUserPreferences(currentUserId);
    if (preferences.tutorialStatus) {
      tutorialPromptedUserRef.current = currentUserId;
      return;
    }

    if (tutorialPromptedUserRef.current === currentUserId) return;

    tutorialPromptedUserRef.current = currentUserId;
    setTutorialStepIndex(0);
    setTutorialMode('prompt');
  }, [currentUserId, hasTutorialOverlay, isAuthenticated, loading, resolvedActiveTreeId, shouldShowSignInEntry, treeLoading]);

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
    if (!isAuthenticated) {
      setPeople([]);
      setRels([]);
      setSelectedId(null);
      setFocusedId(null);
      setLoading(false);
      return;
    }
    if (!resolvedActiveTreeId) {
      console.log('[Kin] No active tree set. Waiting for TreeProvider to resolve…');
      setPeople([]);
      setRels([]);
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
  }, [isAuthenticated, resolvedActiveTreeId, treeLoading, t]);

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
        locale: currentLanguage,
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
  }, [currentLanguage, signInForm.email, t]);

  const sendCreateAccountLinkRequest = useCallback(async () => {
    setSignInSending(true);
    try {
      await auth.sendMagicLink({
        email: createAccountForm.email.trim(),
        displayName: createAccountForm.displayName.trim(),
        createAccount: true,
        locale: currentLanguage,
      });
      setMagicLinkSent(true);
      setMagicLinkSentAt(Date.now());
      setResendTimerNow(Date.now());
      toast(t('app.createAccountLinkSent'), 'success');
    } catch (err) {
      toast(err.message || t('app.createAccountLinkFailed'), 'error');
    } finally {
      setSignInSending(false);
    }
  }, [createAccountForm.displayName, createAccountForm.email, currentLanguage, t]);

  const handleSendSignInLink = useCallback(async (event) => {
    event.preventDefault();
    await sendSignInLinkRequest();
  }, [sendSignInLinkRequest]);

  const handleSendCreateAccountLink = useCallback(async (event) => {
    event.preventDefault();
    await sendCreateAccountLinkRequest();
  }, [sendCreateAccountLinkRequest]);

  const handleResendSignInLink = useCallback(async () => {
    if (!canResendMagicLink) return;
    if (isCreateAccountMode) {
      await sendCreateAccountLinkRequest();
      return;
    }
    await sendSignInLinkRequest();
  }, [canResendMagicLink, isCreateAccountMode, sendCreateAccountLinkRequest, sendSignInLinkRequest]);

  const handleTryAnotherEmail = useCallback(() => {
    setMagicLinkSent(false);
    setMagicLinkSentAt(null);
    setResendTimerNow(Date.now());
    setSignInEntryMode('link');
    setSignInForm({ email: '' });
    setCreateAccountForm({ email: '', displayName: '' });
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

  const handleLanguageChange = useCallback(async (language) => {
    const normalizedLanguage = normalizeLanguage(language);
    if (normalizedLanguage === currentLanguage) return;

    await i18n.changeLanguage(normalizedLanguage);
    if (currentUserId) {
      updateUserPreferences(currentUserId, { language: normalizedLanguage });
    }
  }, [currentLanguage, currentUserId, i18n]);

  const handleDarkModeChange = useCallback((event) => {
    const nextDarkMode = event.target.checked;
    setDarkMode(nextDarkMode);
    if (currentUserId) {
      updateUserPreferences(currentUserId, { darkMode: nextDarkMode });
    }
  }, [currentUserId]);

  const handleOpenSettings = useCallback(() => {
    setMobileMenuOpen(false);
    setSettingsOpen(true);
  }, []);

  const handleCloseSettings = useCallback(() => {
    setSettingsOpen(false);
  }, []);

  const handleOpenTutorial = useCallback(() => {
    setMobileMenuOpen(false);
    setSettingsOpen(false);
    setTutorialStepIndex(0);
    setTutorialMode('tour');
  }, []);

  const handleStartTutorial = useCallback(() => {
    setTutorialStepIndex(0);
    setTutorialMode('tour');
  }, []);

  const handleTutorialNotNow = useCallback(() => {
    setTutorialMode('hidden');
    setTutorialStepIndex(0);
  }, []);

  const handleTutorialNeverShowAgain = useCallback(() => {
    updateUserPreferences(currentUserId, { tutorialStatus: 'never' });
    tutorialPromptedUserRef.current = currentUserId;
    setTutorialMode('hidden');
    setTutorialStepIndex(0);
  }, [currentUserId]);

  const handleTutorialBack = useCallback(() => {
    setTutorialStepIndex((current) => Math.max(0, current - 1));
  }, []);

  const handleTutorialNext = useCallback(() => {
    setTutorialStepIndex((current) => Math.min(tutorialSteps.length - 1, current + 1));
  }, [tutorialSteps.length]);

  const handleTutorialFinish = useCallback(() => {
    updateUserPreferences(currentUserId, { tutorialStatus: 'completed' });
    tutorialPromptedUserRef.current = currentUserId;
    setTutorialMode('hidden');
    setTutorialStepIndex(0);
    if (canAddPeople) {
      setIsModalOpen(true);
    }
  }, [canAddPeople, currentUserId]);

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
      <div className={appShellClassName}>
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
          onLogout={handleLogout}
          onOpenSignIn={() => {
            setMagicLinkSent(false);
            setMagicLinkSentAt(null);
            setSignInEntryMode('link');
            setShowSignInEntry(true);
          }}
          onOpenSettings={handleOpenSettings}
          onOpenTutorial={handleOpenTutorial}
          ownedProfile={ownedProfile}
          onOpenPublicProfile={() => ownedProfile && navigate(`/p/${ownedProfile.public_slug}`)}
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
      </div>
      {settingsOpen && isAuthenticated && (
        <div className="settings-modal" role="dialog" aria-modal="true" aria-labelledby="kin-settings-title">
          <button className="settings-modal__backdrop" type="button" onClick={handleCloseSettings} aria-label={t('common.dismiss')} />
          <div className="settings-modal__card">
            <div className="settings-modal__header">
              <div>
                <div className="settings-modal__eyebrow">{t('app.settings.eyebrow')}</div>
                <h2 id="kin-settings-title" className="settings-modal__title">{t('app.settings.title')}</h2>
              </div>
              <button type="button" className="settings-modal__close" onClick={handleCloseSettings} aria-label={t('common.dismiss')}>×</button>
            </div>
            <div className="settings-modal__section">
              <div className="settings-modal__labelWrap">
                <div className="settings-modal__label">{t('app.settings.languageTitle')}</div>
                <div className="settings-modal__help">{t('app.settings.languageHelp')}</div>
              </div>
              <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
            </div>
            <div className="settings-modal__section">
              <div className="settings-modal__labelWrap">
                <div className="settings-modal__label">{t('app.settings.darkModeTitle')}</div>
                <div className="settings-modal__help">{t('app.settings.darkModeHelp')}</div>
              </div>
              <label className="settings-modal__switch">
                <input type="checkbox" checked={darkMode} onChange={handleDarkModeChange} />
                <span className="settings-modal__switchTrack">
                  <span className="settings-modal__switchThumb" />
                </span>
                <span className="settings-modal__switchText">{darkMode ? t('app.settings.darkModeOn') : t('app.settings.darkModeOff')}</span>
              </label>
            </div>
            <div className="settings-modal__section settings-modal__section--actions">
              <button type="button" className="settings-modal__action" onClick={handleOpenTutorial}>
                {t('app.settings.tutorialButton')}
              </button>
            </div>
          </div>
        </div>
      )}
      {shouldShowSignInEntry && (
        <div className="auth-entry-screen">
          <div className="auth-entry-screen__ambient" aria-hidden="true">
            <div className="auth-entry-screen__mist auth-entry-screen__mist--one" />
            <div className="auth-entry-screen__mist auth-entry-screen__mist--two" />
            <div className="auth-entry-screen__glow auth-entry-screen__glow--left" />
            <div className="auth-entry-screen__glow auth-entry-screen__glow--right" />
            <div className="auth-entry-screen__threads" />
            <div className="auth-entry-screen__ripple auth-entry-screen__ripple--one" />
            <div className="auth-entry-screen__ripple auth-entry-screen__ripple--two" />
            <div className="auth-entry-screen__ripple auth-entry-screen__ripple--three" />
          </div>
          <div className="auth-entry-screen__card">
            {showSignInEntry && isAuthenticated && resolvedActiveTreeId && (
              <button
                type="button"
                onClick={() => {
                  setMagicLinkSent(false);
                  setMagicLinkSentAt(null);
                  setSignInEntryMode('link');
                  setShowSignInEntry(false);
                }}
                className="auth-entry-screen__dismiss"
                style={{ position: 'absolute', top: 12, right: 12 }}
                aria-label={t('common.dismiss')}
              >
                ×
              </button>
            )}
            <div className="auth-entry-screen__language">
              <LanguageToggle currentLanguage={currentLanguage} onLanguageChange={handleLanguageChange} />
            </div>
            <div className="auth-entry-screen__header">
              <div className="auth-entry-screen__eyebrow">
                {isCreateAccountMode ? t('app.newToKin') : t('app.returningMembers')}
              </div>
              <h2 className="auth-entry-screen__title">
                {isCodeSignInMode ? t('app.signInCodeTitle') : isCreateAccountMode ? t('app.createAccountTitle') : t('app.signInEntryTitle')}
              </h2>
            </div>
            <p className="auth-entry-screen__body">
              {isCodeSignInMode ? t('app.signInCodeBody') : isCreateAccountMode ? t('app.createAccountBody') : t('app.signInEntryBody')}
            </p>
            {magicLinkSent ? (
              <>
                <p className="auth-entry-screen__success">
                  {t('app.signInEntrySuccess')}
                </p>
                <button
                  type="button"
                  onClick={handleResendSignInLink}
                  className="auth-entry-screen__primaryButton"
                  style={canResendMagicLink ? undefined : { background: 'var(--ui-shell-border-strong)', boxShadow: 'none' }}
                  disabled={!canResendMagicLink}
                >
                  {canResendMagicLink
                    ? t('app.resendSignInLink')
                    : t('app.resendSignInLinkIn', { seconds: resendRemainingSeconds })}
                </button>
                <button
                  type="button"
                  onClick={handleTryAnotherEmail}
                  className="auth-entry-screen__secondaryButton"
                >
                  {t('app.tryAnotherEmail')}
                </button>
              </>
            ) : !isCodeSignInMode && !isCreateAccountMode ? (
              <>
                <form onSubmit={handleSendSignInLink} className="auth-entry-screen__form">
                  <label className="auth-entry-screen__label">
                    {t('joinPage.email')}
                  </label>
                  <input
                    className="auth-entry-screen__input"
                    type="email"
                    value={signInForm.email}
                    onChange={(event) => setSignInForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder={t('joinPage.yourEmail')}
                    required
                  />
                  <button
                    type="submit"
                    className="auth-entry-screen__primaryButton"
                    disabled={signInSending}
                  >
                    {signInSending ? t('app.sendingSignInLink') : t('app.sendSignInLink')}
                  </button>
                </form>
                <div className="auth-entry-screen__linkRow">
                  <button
                    type="button"
                    onClick={() => setSignInEntryMode('create')}
                    className="auth-entry-screen__textButton"
                  >
                    {t('app.createAccountOption')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setSignInEntryMode('code')}
                    className="auth-entry-screen__textButton auth-entry-screen__textButton--accent"
                  >
                    {t('app.useCodeOption')}
                  </button>
                </div>
              </>
            ) : isCreateAccountMode ? (
              <>
                <form onSubmit={handleSendCreateAccountLink} className="auth-entry-screen__form">
                  <label className="auth-entry-screen__label">
                    {t('joinPage.displayName')}
                  </label>
                  <input
                    className="auth-entry-screen__input"
                    type="text"
                    value={createAccountForm.displayName}
                    onChange={(event) => setCreateAccountForm((current) => ({ ...current, displayName: event.target.value }))}
                    placeholder={t('treeAccess.namePlaceholder')}
                    required
                  />
                  <label className="auth-entry-screen__label">
                    {t('joinPage.email')}
                  </label>
                  <input
                    className="auth-entry-screen__input"
                    type="email"
                    value={createAccountForm.email}
                    onChange={(event) => setCreateAccountForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder={t('joinPage.yourEmail')}
                    required
                  />
                  <button
                    type="submit"
                    className="auth-entry-screen__primaryButton"
                    disabled={signInSending}
                  >
                    {signInSending ? t('app.creatingAccountLink') : t('app.createAccountAction')}
                  </button>
                </form>
                <button
                  type="button"
                  onClick={() => setSignInEntryMode('link')}
                  className="auth-entry-screen__secondaryButton"
                >
                  {t('app.backToEmailSignIn')}
                </button>
              </>
            ) : (
              <>
                <form onSubmit={handleJoinWithAccessCode} className="auth-entry-screen__form">
                  <label className="auth-entry-screen__label">
                    {t('treeAccess.accessCode')}
                  </label>
                  <input
                    className="auth-entry-screen__input"
                    type="text"
                    value={signInCodeForm.code}
                    onChange={(event) => setSignInCodeForm((current) => ({ ...current, code: event.target.value.toUpperCase() }))}
                    placeholder={t('treeAccess.codePlaceholder')}
                    required
                  />
                  <label className="auth-entry-screen__label">
                    {t('joinPage.displayName')}
                  </label>
                  <input
                    className="auth-entry-screen__input"
                    type="text"
                    value={signInCodeForm.displayName}
                    onChange={(event) => setSignInCodeForm((current) => ({ ...current, displayName: event.target.value }))}
                    placeholder={t('joinPage.yourName')}
                    required
                  />
                  <label className="auth-entry-screen__label">
                    {t('joinPage.email')}
                  </label>
                  <input
                    className="auth-entry-screen__input"
                    type="email"
                    value={signInCodeForm.email}
                    onChange={(event) => setSignInCodeForm((current) => ({ ...current, email: event.target.value }))}
                    placeholder={t('joinPage.yourEmail')}
                    required
                  />
                  <button
                    type="submit"
                    className="auth-entry-screen__primaryButton"
                    disabled={codeJoinSubmitting}
                  >
                    {codeJoinSubmitting ? t('app.joiningWithCode') : t('app.signInWithCode')}
                  </button>
                </form>
                <button
                  type="button"
                  onClick={() => setSignInEntryMode('link')}
                  className="auth-entry-screen__secondaryButton"
                >
                  {t('app.backToEmailSignIn')}
                </button>
              </>
            )}
          </div>
        </div>
      )}
      {hasTutorialOverlay && !shouldShowSignInEntry && (
        <div className="tutorial-overlay">
          <div className="tutorial-overlay__ambient" aria-hidden="true">
            <div className="tutorial-overlay__aura tutorial-overlay__aura--one" />
            <div className="tutorial-overlay__aura tutorial-overlay__aura--two" />
            <div className="tutorial-overlay__grid" />
          </div>
          <div className="tutorial-overlay__card">
            <div className="tutorial-overlay__eyebrow">
              {isTutorialPrompt
                ? t('app.tutorial.welcomeEyebrow')
                : t('app.tutorial.stepCounter', { current: tutorialStepIndex + 1, total: tutorialSteps.length })}
            </div>
            <h2 className="tutorial-overlay__title">
              {isTutorialPrompt ? t('app.tutorial.welcomeTitle') : activeTutorialStep.title}
            </h2>
            <p className="tutorial-overlay__body">
              {isTutorialPrompt ? t('app.tutorial.welcomeBody') : activeTutorialStep.body}
            </p>

            {!isTutorialPrompt && (
              <div className="tutorial-overlay__progress" aria-hidden="true">
                {tutorialSteps.map((step, index) => (
                  <span
                    key={step.title}
                    className={`tutorial-overlay__dot ${index === tutorialStepIndex ? 'tutorial-overlay__dot--active' : ''}`}
                  />
                ))}
              </div>
            )}

            {isTutorialPrompt ? (
              <div className="tutorial-overlay__actions tutorial-overlay__actions--stacked">
                <button type="button" className="tutorial-overlay__button tutorial-overlay__button--primary" onClick={handleStartTutorial}>
                  {t('app.tutorial.startTour')}
                </button>
                <button type="button" className="tutorial-overlay__button tutorial-overlay__button--secondary" onClick={handleTutorialNotNow}>
                  {t('app.tutorial.notNow')}
                </button>
                <button type="button" className="tutorial-overlay__button tutorial-overlay__button--ghost" onClick={handleTutorialNeverShowAgain}>
                  {t('app.tutorial.neverShowAgain')}
                </button>
              </div>
            ) : (
              <div className="tutorial-overlay__actions">
                <button type="button" className="tutorial-overlay__button tutorial-overlay__button--secondary" onClick={tutorialStepIndex === 0 ? handleTutorialNotNow : handleTutorialBack}>
                  {tutorialStepIndex === 0 ? t('app.tutorial.skipForNow') : t('common.back')}
                </button>
                <button
                  type="button"
                  className="tutorial-overlay__button tutorial-overlay__button--primary"
                  onClick={isLastTutorialStep ? handleTutorialFinish : handleTutorialNext}
                >
                  {isLastTutorialStep
                    ? canAddPeople
                      ? t('app.tutorial.finishAndAddPerson')
                      : t('app.tutorial.finish')
                    : t('app.tutorial.nextStep')}
                </button>
              </div>
            )}
          </div>
        </div>
      )}
      <Toast />
    </>
  );
}

export default App;
