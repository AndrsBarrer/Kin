import { useState, useRef, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { BRANCH, bfs } from '../data/familyData';
import LanguageToggle from './LanguageToggle';
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
  sceneRef,
}) {
  const { t } = useTranslation();
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [pathA, setPathA] = useState(null);
  const [pathB, setPathB] = useState(null);
  const [pathBanner, setPathBanner] = useState(null);
  const wrapRef = useRef(null);
  const normalizedQuery = normalizeText(query);

  const matches = normalizedQuery
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
    : [];

  const focusedPerson = focusedId ? people.find(p => p.id === focusedId) : null;

  const handleSearchClick = (p) => {
    setShowResults(false);
    setQuery('');
    onMobileMenuOpenChange(false);
    onSetFocus(p.id);
    onOpenPanel(p.id);
  };

  const handleSearchSubmit = useCallback(() => {
    if (matches.length === 0) return;
    handleSearchClick(matches[0]);
  }, [matches]);

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
        <div style={{ flexShrink: 0 }}>
          <LanguageToggle />
        </div>
        <button
          type="button"
          className={s.mobileMenuBtn}
          onClick={() => onMobileMenuOpenChange(!mobileMenuOpen)}
          aria-expanded={mobileMenuOpen}
          aria-label={mobileMenuOpen ? t('topBar.closeMenu') : t('topBar.openMenu')}
        >
          ☰
        </button>
      </div>

      {mobileMenuOpen && (
        <>
          <button className={s.mobileMenuBackdrop} onClick={() => onMobileMenuOpenChange(false)} aria-label={t('topBar.closeMenu')} />
          <div className={s.mobileMenu}>
            <button className={`${s.mobileAction} ${pathMode ? s.mobileActionActive : ''}`} onClick={handlePathToggle}>{t('topBar.findConnection')}</button>
            <button className={`${s.mobileAction} ${s.mobileActionPrimary}`} onClick={handleOpenAddPerson} disabled={!canOpenModal}>{t('topBar.addPerson')}</button>
            <button className={s.mobileAction} onClick={handleReset}>{t('topBar.resetView')}</button>
            {is3DAvailable && (
              <button className={s.mobileAction} onClick={handleToggleGraph}>
                {graphMode === '2d' ? t('topBar.switchTo3d') : t('topBar.switchTo2d')}
              </button>
            )}
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
