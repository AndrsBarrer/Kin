import { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { trees as treesApi, setToken, auth } from '../api/client';

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

  const setActiveTreeId = useCallback((id) => {
    const nextId = normalizeTreeId(id);
    setActiveTreeIdState(nextId);
    if (nextId) localStorage.setItem('kin_active_tree', nextId);
    else localStorage.removeItem('kin_active_tree');
  }, []);

  const syncActiveTree = useCallback((list) => {
    setTreeList(list);
    if (list.length === 0) {
      setActiveTreeId(null);
      return;
    }

    setActiveTreeIdState((currentActiveTreeId) => {
      const matchingTree = list.find((tree) => normalizeTreeId(tree.id) === currentActiveTreeId);
      const nextActiveTreeId = matchingTree
        ? normalizeTreeId(matchingTree.id)
        : normalizeTreeId(list[0].id);

      if (nextActiveTreeId !== currentActiveTreeId) {
        if (nextActiveTreeId) localStorage.setItem('kin_active_tree', nextActiveTreeId);
        else localStorage.removeItem('kin_active_tree');
        console.log('[Kin] Auto-selected first available tree:', nextActiveTreeId);
      }

      return nextActiveTreeId;
    });
  }, [setActiveTreeId]);

  const loadTrees = useCallback(async () => {
    const list = await treesApi.list();
    syncActiveTree(list);
    return list;
  }, [syncActiveTree]);

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
    await auth.logout().catch(() => null);

    setToken(null);
    setCurrentUser(null);
    setTreeList([]);
    setActiveTreeId(null);
  }, [setActiveTreeId]);

  useEffect(() => {
    async function init() {
      try {
        const me = await refreshSession({ syncTrees: true });
        if (me) {
          return;
        }

        console.log('[Kin] No authenticated session. Waiting for sign-in.');
        setTreeList([]);
        setActiveTreeId(null);
      } catch (err) {
        console.error('[Kin] Failed to initialize session:', err.message);
        setTreeList([]);
        setActiveTreeId(null);
      } finally {
        setLoading(false);
      }
    }
    init();
  }, [location.pathname, refreshSession, setActiveTreeId]);

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
