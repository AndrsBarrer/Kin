import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { trees as treesApi, bootstrap, setToken, auth } from '../api/client';

const TreeContext = createContext(null);

function normalizeTreeId(id) {
  return id == null ? null : String(id);
}

export function useTree() {
  const ctx = useContext(TreeContext);
  if (!ctx) throw new Error('useTree must be used within TreeProvider');
  return ctx;
}

export function TreeProvider({ children }) {
  const location = useLocation();
  const [treeList, setTreeList] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  const [activeTreeId, setActiveTreeIdState] = useState(
    () => normalizeTreeId(localStorage.getItem('kin_active_tree'))
  );
  const [loading, setLoading] = useState(true);

  const currentUserId = currentUser?.id || null;

  function syncActiveTree(list) {
    setTreeList(list);
    if (list.length === 0) {
      setActiveTreeId(null);
      return;
    }

    const matchingTree = list.find((tree) => normalizeTreeId(tree.id) === activeTreeId);
    const nextActiveTreeId = matchingTree
      ? normalizeTreeId(matchingTree.id)
      : normalizeTreeId(list[0].id);

    if (nextActiveTreeId !== activeTreeId) {
      setActiveTreeId(nextActiveTreeId);
      console.log('[Kin] Auto-selected first available tree:', nextActiveTreeId);
    }
  }

  const setActiveTreeId = useCallback((id) => {
    const nextId = normalizeTreeId(id);
    setActiveTreeIdState(nextId);
    if (nextId) localStorage.setItem('kin_active_tree', nextId);
    else localStorage.removeItem('kin_active_tree');
  }, []);

  const loadTrees = useCallback(async () => {
    const list = await treesApi.list();
    syncActiveTree(list);
    return list;
  }, [activeTreeId, setActiveTreeId]);

  const refreshSession = useCallback(async (options = {}) => {
    const { syncTrees = true } = options;

    try {
      const me = await auth.me();
      setCurrentUser(me || null);
      if (syncTrees) {
        await loadTrees();
      }
      return me || null;
    } catch (err) {
      if (err.status === 401) {
        setCurrentUser(null);
        if (syncTrees) {
          setTreeList([]);
          setActiveTreeId(null);
        }
        return null;
      }
      throw err;
    }
  }, [loadTrees, setActiveTreeId]);

  const logout = useCallback(async () => {
    try {
      await auth.logout();
    } catch (_) {}

    setToken(null);
    setCurrentUser(null);
    setTreeList([]);
    setActiveTreeId(null);
  }, [setActiveTreeId]);

  useEffect(() => {
    async function init() {
      const allowBootstrap = location.pathname === '/';
      const isDeferredAuthRoute = location.pathname === '/auth/verify' || location.pathname === '/join';
      const hasStoredSession = typeof window !== 'undefined' && Boolean(window.localStorage.getItem('kin_token'));

      async function doBootstrap() {
        const result = await bootstrap.init();
        if (result.sessionToken) {
          setToken(result.sessionToken);
        }
        await refreshSession({ syncTrees: true });
      }

      if (isDeferredAuthRoute && !hasStoredSession) {
        console.log('[Kin] Deferred auth route detected. Waiting for route-specific sign-in completion.');
        setLoading(false);
        return;
      }

      try {
        const me = await refreshSession({ syncTrees: false });
        if (me) {
          const list = await loadTrees();
          if (list.length === 0 && allowBootstrap) {
            console.log('[Kin] Authenticated user has no trees — creating first tree…');
            await doBootstrap();
          }
          return;
        }

        if (!allowBootstrap) {
          console.log('[Kin] Auth flow route detected without a session. Waiting for sign-in completion.');
          return;
        }

        if (!me) {
          console.log('[Kin] No authenticated session — attempting first-run bootstrap…');
          await doBootstrap();
        }
      } catch (err) {
        if (err.status === 409) {
          console.log('[Kin] Existing tree detected without an active session. Waiting for sign-in.');
        } else {
          console.warn('[Kin] Tree init failed, attempting bootstrap…', err.message);
          try {
            await doBootstrap();
          } catch (bootstrapErr) {
            if (bootstrapErr.status === 409) {
              console.log('[Kin] Existing tree detected without an active session. Waiting for sign-in.');
            } else {
              console.error('[Kin] Bootstrap failed:', bootstrapErr.message);
            }
          }
        }
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [loadTrees, location.pathname, refreshSession]);

  return (
    <TreeContext.Provider value={{
      activeTreeId,
      setActiveTreeId,
      treeList,
      loading,
      currentUser,
      currentUserId,
      isAuthenticated: Boolean(currentUserId),
      refreshSession,
      logout,
    }}>
      {children}
    </TreeContext.Provider>
  );
}
