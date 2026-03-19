import { useState, useRef, useCallback } from 'react';
import { BRANCH, bfs } from '../data/familyData';
import s from './TopBar.module.css';

export default function TopBar({
  people, rels, focusedId, pathMode,
  onSetFocus, onOpenPanel, onTogglePathMode, onResetView, onOpenModal,
  sceneRef,
}) {
  const [query, setQuery] = useState('');
  const [showResults, setShowResults] = useState(false);
  const [pathA, setPathA] = useState(null);
  const [pathB, setPathB] = useState(null);
  const [pathBanner, setPathBanner] = useState(null);
  const wrapRef = useRef(null);

  const matches = query.trim()
    ? people.filter(p => (p.firstName + ' ' + p.lastName).toLowerCase().includes(query.toLowerCase())).slice(0, 8)
    : [];

  const focusedPerson = focusedId ? people.find(p => p.id === focusedId) : null;

  const handleSearchClick = (p) => {
    setShowResults(false);
    setQuery('');
    onSetFocus(p.id);
    onOpenPanel(p.id);
  };

  const handlePathToggle = () => {
    if (pathMode) {
      setPathA(null); setPathB(null); setPathBanner(null);
      sceneRef.current?.__sceneApi?.highlightPath([]);
    }
    onTogglePathMode();
  };

  const handlePathCancel = () => {
    setPathA(null); setPathB(null); setPathBanner(null);
    sceneRef.current?.__sceneApi?.highlightPath([]);
    if (pathMode) onTogglePathMode();
  };

  // Called from App when a node is clicked in path mode
  const handlePathSelect = useCallback((id) => {
    if (!pathA) {
      setPathA(id);
    } else if (!pathB && id !== pathA) {
      setPathB(id);
      // Run BFS
      const path = bfs(pathA, id, rels);
      const pa = people.find(x => x.id === pathA);
      const pb = people.find(x => x.id === id);
      if (!path) {
        setPathBanner(`No connection found between <strong>${pa.firstName}</strong> and <strong>${pb.firstName}</strong>.`);
      } else {
        const deg = path.length - 1;
        setPathBanner(`<strong>${pa.firstName} ${pa.lastName}</strong> and <strong>${pb.firstName} ${pb.lastName}</strong> are separated by <strong>${deg} step${deg !== 1 ? 's' : ''}</strong>.`);
        sceneRef.current?.__sceneApi?.highlightPath(path);
      }
    }
  }, [pathA, pathB, people, rels, sceneRef]);

  // Expose handlePathSelect to parent
  if (typeof window !== 'undefined') {
    window.__topBarPathSelect = handlePathSelect;
  }

  const clearFocus = () => {
    sceneRef.current?.__sceneApi?.startSim(4000);
    onSetFocus(null);
  };

  const pAName = pathA ? people.find(p => p.id === pathA) : null;
  const pBName = pathB ? people.find(p => p.id === pathB) : null;

  return (
    <>
      {/* Topbar */}
      <div className={s.topbar}>
        <div className={s.logo}>
          <svg className={s.logoLeaf} viewBox="0 0 26 26" fill="none">
            <path d="M13 3C7.5 3 4 8 4 13c0 4.5 3 8 9 9.5C19 21 22 17 22 13 22 7.5 18 3 13 3z" fill="#c9973a" opacity=".15"/>
            <path d="M13 22.5V10M13 10C13 10 9 13 7 17M13 10C13 10 17 13 19 17" stroke="#c9973a" strokeWidth="1.5" strokeLinecap="round"/>
          </svg>
          <span className={s.logoText}>Kin</span>
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
            placeholder="Search family members…"
            autoComplete="off"
            value={query}
            onChange={e => { setQuery(e.target.value); setShowResults(true); }}
            onFocus={() => query.trim() && setShowResults(true)}
            onBlur={() => setTimeout(() => setShowResults(false), 200)}
          />
          {showResults && matches.length > 0 && (
            <div className={`${s.searchResults} show`}>
              {matches.map(p => {
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
              })}
            </div>
          )}
        </div>
        <button
          className={`${s.tbtn} ${pathMode ? s.pathBtnActive : ''}`}
          onClick={handlePathToggle}
        >Find Connection</button>
        <button className={`${s.tbtn} ${s.addBtn}`} onClick={onOpenModal}>+ Add Person</button>
        <button className={s.tbtn} onClick={onResetView}>Reset View</button>
      </div>

      {/* Focus label */}
      {focusedPerson && (
        <div className={`${s.focusLabel} show`}>
          <div
            className={s.focusLabelAvatar}
            style={{
              background: BRANCH[focusedPerson.branch]?.bg || '#eee',
              color: BRANCH[focusedPerson.branch]?.hex || '#888',
            }}
          >
            {focusedPerson.firstName[0] + focusedPerson.lastName[0]}
          </div>
          <span>Viewing connections for <strong>{focusedPerson.firstName} {focusedPerson.lastName}</strong></span>
          <button className={s.focusLabelClose} onClick={clearFocus} title="Clear focus">×</button>
        </div>
      )}

      {/* Path bar */}
      {pathMode && (
        <div className={`${s.pathbar} show`}>
          <span style={{ color: 'var(--text-muted)', fontSize: '12px', whiteSpace: 'nowrap' }}>Find path:</span>
          {pAName
            ? <span className={s.psel}>{pAName.firstName} {pAName.lastName}</span>
            : <span className={s.pselEmpty}>Person A</span>}
          <span className={s.pathsep}>→</span>
          {pBName
            ? <span className={s.psel}>{pBName.firstName} {pBName.lastName}</span>
            : <span className={s.pselEmpty}>Person B</span>}
          <button className={s.pathclear} onClick={handlePathCancel}>✕ Cancel</button>
        </div>
      )}

      {/* Path result banner */}
      {pathBanner && (
        <div className={`${s.pathbanner} show`}>
          <p className={s.pbtext} dangerouslySetInnerHTML={{ __html: pathBanner }} />
          <button onClick={() => { setPathBanner(null); sceneRef.current?.__sceneApi?.highlightPath([]); }}>Dismiss</button>
        </div>
      )}
    </>
  );
}
