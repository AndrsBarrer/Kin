import { useState, useRef, useCallback, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { BRANCH, bfs } from '../data/familyData';
import s from './TopBar.module.css';

function normalizeText(value) {
  return (value || '')
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .toLowerCase()
    .trim();
}

export default function TopBar({
  people, rels, focusedId, pathMode, graphMode, is3DAvailable, canOpenModal,
  mobileMenuOpen, onMobileMenuOpenChange,
  onSetFocus, onOpenPanel, onTogglePathMode, onToggleGraphMode, onResetView, onOpenModal,
  currentUser, isAuthenticated, onLogout, onOpenSignIn,
  onOpenSettings, onOpenTutorial,
  ownedProfile, onOpenPublicProfile,
  sceneRef,
}) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [pathA, setPathA] = useState(null);
  const [pathB, setPathB] = useState(null);
  const [pathBanner, setPathBanner] = useState(null);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const wrapRef = useRef(null);
  const profileMenuRef = useRef(null);
  const normalizedQuery = normalizeText(query);

  const matches = useMemo(() => (normalizedQuery
    ? people.filter((person) => {
        const haystack = normalizeText([
          person.firstName,
          person.lastName,
          person.maiden,
          `${person.firstName} ${person.lastName}`,
          person.birth,
        ].filter(Boolean).join(' '));
        return haystack.includes(normalizedQuery);
      }).slice(0, 8)
    : []), [normalizedQuery, people]);

  const focusedPerson = focusedId ? people.find(p => p.id === focusedId) : null;

  const handleSearchClick = useCallback((p) => {
    setShowResults(false);
    setQuery('');
    onMobileMenuOpenChange(false);
    onSetFocus(p.id);
    onOpenPanel(p.id);
  }, [onMobileMenuOpenChange, onOpenPanel, onSetFocus]);

  const handleSearchSubmit = useCallback(() => {
    if (matches.length === 0) return;
    handleSearchClick(matches[0]);
  }, [handleSearchClick, matches]);

  const handlePathToggle = () => {
    onMobileMenuOpenChange(false);
    if (pathMode) {
      setPathA(null); setPathB(null); setPathBanner(null);
      sceneRef.current?.__sceneApi?.highlightPath([]);
    } else {
      setPathA(null); setPathB(null); setPathBanner(null);
    }
    onTogglePathMode();
  };

  const handlePathCancel = () => {
    setPathA(null); setPathB(null); setPathBanner(null);
    sceneRef.current?.__sceneApi?.highlightPath([]);
    if (pathMode) onTogglePathMode();
  };

  const handleOpenAddPerson = () => {
    if (!canOpenModal) return;
    onMobileMenuOpenChange(false);
    onOpenModal();
  };

  const handleReset = () => {
    onMobileMenuOpenChange(false);
    onResetView();
  };

  const handleToggleGraph = () => {
    onMobileMenuOpenChange(false);
    onToggleGraphMode?.();
  };

  const handleOpenSettings = () => {
    onMobileMenuOpenChange(false);
    onOpenSettings?.();
  };

  const handleOpenTutorial = () => {
    onMobileMenuOpenChange(false);
    onOpenTutorial?.();
  };

  const handleOpenSignIn = () => {
    handleCloseMobileMenu();
    onOpenSignIn?.();
  };

  const handleLogout = () => {
    handleCloseMobileMenu();
    onLogout?.();
  };

  const handleMobileMenuToggle = () => {
    if (mobileMenuOpen) {
      setMobileToolsOpen(false);
    }
    onMobileMenuOpenChange(!mobileMenuOpen);
  };

  const handleCloseMobileMenu = () => {
    setMobileToolsOpen(false);
    onMobileMenuOpenChange(false);
  };

  // Called from App when a node is clicked in path mode
  const handlePathSelect = useCallback((id) => {
    if (!pathA) {
      setPathA(id);
      const first = people.find(x => x.id === id);
      if (first) {
        setPathBanner(t('topBar.selectedFirst', { name: `${first.firstName} ${first.lastName}` }));
      }
    } else if (!pathB && id !== pathA) {
      setPathB(id);
      // Run BFS
      const path = bfs(pathA, id, rels);
      const pa = people.find(x => x.id === pathA);
      const pb = people.find(x => x.id === id);
      if (!path) {
        setPathBanner(t('topBar.noConnection', {
          first: pa.firstName,
          second: pb.firstName,
        }));
      } else {
        const relationships = path.length - 1;
        const peopleOnPath = path.length;
        setPathBanner(t('topBar.connectionFound', {
          first: `${pa.firstName} ${pa.lastName}`,
          second: `${pb.firstName} ${pb.lastName}`,
          relationships,
          relationshipSuffix: relationships !== 1 ? 's' : '',
          people: peopleOnPath,
          peopleSuffix: peopleOnPath !== 1 ? 's' : '',
        }));
        sceneRef.current?.__sceneApi?.highlightPath(path);
      }
    }
  }, [pathA, pathB, people, rels, sceneRef, t]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    window.__topBarPathSelect = handlePathSelect;
    return () => {
      if (window.__topBarPathSelect === handlePathSelect) {
        delete window.__topBarPathSelect;
      }
    };
  }, [handlePathSelect]);

  useEffect(() => {
    if (!profileMenuOpen) return undefined;

    function handlePointerDown(event) {
      if (!profileMenuRef.current?.contains(event.target)) {
        setProfileMenuOpen(false);
      }
    }

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('touchstart', handlePointerDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('touchstart', handlePointerDown);
    };
  }, [profileMenuOpen]);

  const clearFocus = () => {
    sceneRef.current?.__sceneApi?.startSim(4000);
    onSetFocus(null);
  };

  const pAName = pathA ? people.find(p => p.id === pathA) : null;
  const pBName = pathB ? people.find(p => p.id === pathB) : null;
  const pathInstruction = !pathA
    ? t('topBar.pathStepOne')
    : !pathB
      ? t('topBar.pathStepTwo', { name: pAName?.firstName || t('topBar.firstPerson') })
      : t('topBar.pathFound');

  return (
    <>
      {/* Topbar */}
      <div className={s.topbar}>
        <div className={s.logo}>
          <img className={s.logoImage} src="/Kin.png" alt="Kin" />
        </div>
        <div className={s.sep} />
        <div className={s.searchWrap} ref={wrapRef}>
          <svg className={s.searchIco} viewBox="0 0 16 16" fill="none">
            <circle cx="7" cy="7" r="4.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M10.5 10.5L13.5 13.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
          <input
            className={s.searchInput}
            type="text"
            placeholder={t('topBar.searchPlaceholder')}
            autoComplete="off"
            value={query}
            onChange={e => { setQuery(e.target.value); setShowResults(true); }}
            onFocus={() => query.trim() && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleSearchSubmit();
              }
            }}
          />
          {showResults && normalizedQuery && (
            <div className={s.searchResults}>
              {matches.length > 0 ? matches.map(p => {
                const brc = BRANCH[p.branch];
                return (
                  <div key={p.id} className={s.srItem} onMouseDown={() => handleSearchClick(p)}>
                    <div className={s.srAvatar} style={{ background: brc?.bg || '#eee', color: brc?.hex || '#333' }}>
                      {p.firstName[0] + p.lastName[0]}
                    </div>
                    <div>
                      <div className={s.srName}>{p.firstName} {p.lastName}</div>
                      <div className={s.srDates}>{p.birth || ''} {p.maiden ? `· née ${p.maiden}` : ''}</div>
                    </div>
                  </div>
                );
              }) : (
                <div className={s.searchEmpty}>{t('topBar.noMatches')}</div>
              )}
            </div>
          )}
        </div>
        <div className={s.desktopActions}>
          <button
            className={`${s.tbtn} ${pathMode ? s.pathBtnActive : ''}`}
            onClick={handlePathToggle}
          >{t('topBar.findConnection')}</button>
          {is3DAvailable && (
            <div className={s.viewToggle} aria-label="Graph view mode">
              <button
                className={`${s.viewBtn} ${graphMode === '2d' ? s.viewBtnActive : ''}`}
                onClick={graphMode === '3d' ? onToggleGraphMode : undefined}
                type="button"
              >
                {t('topBar.view2d')}
              </button>
              <button
                className={`${s.viewBtn} ${graphMode === '3d' ? s.viewBtnActive : ''}`}
                onClick={graphMode === '2d' ? onToggleGraphMode : undefined}
                type="button"
              >
                {t('topBar.view3d')}
              </button>
            </div>
          )}
          <button className={`${s.tbtn} ${s.addBtn}`} onClick={handleOpenAddPerson} disabled={!canOpenModal}>+ {t('topBar.addPerson')}</button>
          <button className={s.tbtn} onClick={handleReset}>{t('topBar.resetView')}</button>
        </div>
        {!isAuthenticated && onOpenSignIn && (
          <div className={s.desktopActions}>
            <button className={s.tbtn} onClick={onOpenSignIn}>{t('topBar.signIn')}</button>
          </div>
        )}
        {isAuthenticated && currentUser && (
          <div className={s.profileMenuWrap} ref={profileMenuRef}>
            <button
              className={s.profileMenuButton}
              type="button"
              onClick={() => setProfileMenuOpen((open) => !open)}
              aria-expanded={profileMenuOpen}
              aria-haspopup="menu"
            >
              <span className={s.profileMenuAvatar}>{(currentUser.displayName || currentUser.email || '?').slice(0, 1).toUpperCase()}</span>
              <span className={s.profileMenuLabel}>{currentUser.displayName || currentUser.email}</span>
              <span className={s.profileMenuCaret}>▾</span>
            </button>
            {profileMenuOpen && (
              <div className={s.profileMenuDropdown} role="menu">
                <div className={s.profileMenuHeading}>{t('topBar.signedInAs', { name: currentUser.displayName || currentUser.email })}</div>
                {ownedProfile && onOpenPublicProfile && (
                  <button className={s.profileMenuItem} type="button" onClick={() => { setProfileMenuOpen(false); onOpenPublicProfile(); }}>
                    {t('topBar.viewPublicProfile')}
                  </button>
                )}
                <button className={s.profileMenuItem} type="button" onClick={() => { setProfileMenuOpen(false); onLogout(); }}>
                  {t('topBar.signOut')}
                </button>
              </div>
            )}
          </div>
        )}
        {isAuthenticated && onOpenSettings && (
          <button type="button" className={s.settingsBtn} onClick={handleOpenSettings} aria-label={t('topBar.settings')}>
            <svg viewBox="0 0 24 24" aria-hidden="true" fill="none">
              <path d="M12 3.75a1 1 0 0 1 .98.78l.42 1.9a5.75 5.75 0 0 1 1.05.44l1.74-.94a1 1 0 0 1 1.22.18l1.41 1.41a1 1 0 0 1 .18 1.22l-.94 1.74c.17.34.31.69.44 1.05l1.9.42a1 1 0 0 1 .78.98v2a1 1 0 0 1-.78.98l-1.9.42a5.77 5.77 0 0 1-.44 1.05l.94 1.74a1 1 0 0 1-.18 1.22l-1.41 1.41a1 1 0 0 1-1.22.18l-1.74-.94c-.34.17-.69.31-1.05.44l-.42 1.9a1 1 0 0 1-.98.78h-2a1 1 0 0 1-.98-.78l-.42-1.9a5.77 5.77 0 0 1-1.05-.44l-1.74.94a1 1 0 0 1-1.22-.18l-1.41-1.41a1 1 0 0 1-.18-1.22l.94-1.74a5.77 5.77 0 0 1-.44-1.05l-1.9-.42a1 1 0 0 1-.78-.98v-2a1 1 0 0 1 .78-.98l1.9-.42c.13-.36.27-.71.44-1.05l-.94-1.74a1 1 0 0 1 .18-1.22l1.41-1.41a1 1 0 0 1 1.22-.18l1.74.94c.34-.17.69-.31 1.05-.44l.42-1.9a1 1 0 0 1 .98-.78z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.6"/>
            </svg>
          </button>
        )}
        <button
          type="button"
          className={s.mobileMenuBtn}
          onClick={handleMobileMenuToggle}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? t('topBar.closeMenu') : t('topBar.openMenu')}
        >
          ☰
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <button className={s.mobileMenuBackdrop} onClick={handleCloseMobileMenu} aria-label={t('topBar.closeMenu')} />
          <div className={s.mobileMenu}>
            <button className={`${s.mobileAction} ${pathMode ? s.mobileActionActive : ''}`} onClick={handlePathToggle}>{t('topBar.findConnection')}</button>
            <button className={`${s.mobileAction} ${s.mobileActionPrimary}`} onClick={handleOpenAddPerson} disabled={!canOpenModal}>{t('topBar.addPerson')}</button>
              <button className={`${s.mobileAction} ${s.mobileActionWide}`} onClick={handleReset}>{t('topBar.resetView')}</button>
            {isAuthenticated && (ownedProfile || is3DAvailable || onOpenTutorial) && (
              <div className={s.mobileSubmenuWrap}>
                <button
                  className={s.mobileSubmenuToggle}
                  type="button"
                  onClick={() => setMobileToolsOpen((open) => !open)}
                  aria-expanded={mobileToolsOpen}
                >
                  <span>{t('topBar.moreTools')}</span>
                  <span className={s.mobileSubmenuCaret}>{mobileToolsOpen ? '−' : '+'}</span>
                </button>
                {mobileToolsOpen && (
                  <div className={s.mobileSubmenu}>
                    {ownedProfile && onOpenPublicProfile && <button className={s.mobileSubmenuAction} onClick={() => { handleCloseMobileMenu(); onOpenPublicProfile(); }}>{t('topBar.viewPublicProfile')}</button>}
                    {is3DAvailable && (
                      <button className={s.mobileSubmenuAction} onClick={handleToggleGraph}>
                        {graphMode === '2d' ? t('topBar.switchTo3d') : t('topBar.switchTo2d')}
                      </button>
                    )}
                    {onOpenTutorial && <button className={s.mobileSubmenuAction} onClick={handleOpenTutorial}>{t('topBar.tutorial')}</button>}
                  </div>
                )}
              </div>
            )}
            {isAuthenticated && onOpenSettings && <button className={s.mobileAction} onClick={handleOpenSettings}>{t('topBar.settings')}</button>}
            {!isAuthenticated && onOpenSignIn && <button className={`${s.mobileAction} ${s.mobileActionWide}`} onClick={handleOpenSignIn}>{t('topBar.signIn')}</button>}
            {isAuthenticated && <button className={s.mobileAction} onClick={handleLogout}>{t('topBar.signOut')}</button>}
          </div>
        </>
      )}

      {/* Focus label */}
      {focusedPerson && (
        <div className={s.focusLabel}>
          <div
            className={s.focusLabelAvatar}
            style={{
              background: BRANCH[focusedPerson.branch]?.bg || '#eee',
              color: BRANCH[focusedPerson.branch]?.hex || '#888',
            }}
          >
            {focusedPerson.firstName[0] + focusedPerson.lastName[0]}
          </div>
          <span>{t('topBar.viewingConnectionsFor')} <strong>{focusedPerson.firstName} {focusedPerson.lastName}</strong></span>
          <button className={s.focusLabelClose} onClick={clearFocus} title={t('topBar.clearFocus')}>×</button>
        </div>
      )}

      {/* Path bar */}
      {pathMode && (
        <div className={s.pathbar}>
          <div className={s.pathcopy}>
            <span className={s.pathlabel}>{t('topBar.pathLabel')}</span>
            <span className={s.pathhelp}>{pathInstruction}</span>
          </div>
          <div className={s.pathslots}>
            <div className={pAName ? s.psel : s.pselEmpty}>
              <span className={s.pathslotLabel}>{t('topBar.firstPerson')}</span>
              <span>{pAName ? `${pAName.firstName} ${pAName.lastName}` : t('topBar.notSelectedYet')}</span>
            </div>
            <span className={s.pathsep}>→</span>
            <div className={pBName ? s.psel : s.pselEmpty}>
              <span className={s.pathslotLabel}>{t('topBar.secondPerson')}</span>
              <span>{pBName ? `${pBName.firstName} ${pBName.lastName}` : t('topBar.notSelectedYet')}</span>
            </div>
          </div>
          <button className={s.pathclear} onClick={handlePathCancel}>✕ {t('topBar.cancelPath')}</button>
        </div>
      )}

      {/* Path result banner */}
      {pathBanner && (
        <div className={s.pathbanner}>
          <p className={s.pbtext} dangerouslySetInnerHTML={{ __html: pathBanner }} />
          <button onClick={() => { setPathBanner(null); sceneRef.current?.__sceneApi?.highlightPath([]); }}>{t('common.dismiss')}</button>
        </div>
      )}
    </>
  );
}
