import { createContext, useContext, useState, useEffect } from 'react';
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
  const [treeList, setTreeList] = useState([]);
  const [currentUserId, setCurrentUserId] = useState(null);
  const [activeTreeId, setActiveTreeIdState] = useState(
    () => normalizeTreeId(localStorage.getItem('kin_active_tree'))
  );
  const [loading, setLoading] = useState(true);

  function setActiveTreeId(id) {
    const nextId = normalizeTreeId(id);
    setActiveTreeIdState(nextId);
    if (nextId) localStorage.setItem('kin_active_tree', nextId);
    else localStorage.removeItem('kin_active_tree');
  }

  useEffect(() => {
    async function init() {
      /** After obtaining a tree list, pick the right active tree */
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

      async function doBootstrap() {
        const result = await bootstrap.init();
        if (result.sessionToken) {
          setToken(result.sessionToken);
        }
        if (result.userId) {
          setCurrentUserId(result.userId);
        }
        const list = await treesApi.list();
        syncActiveTree(list);
      }

      try {
        let list = await treesApi.list();

        // If no trees found (first launch or no session), bootstrap
        if (list.length === 0) {
          console.log('[Kin] No trees found — bootstrapping…');
          await doBootstrap();
        } else {
          syncActiveTree(list);
          // Try to get current user id
          try {
            const me = await auth.me();
            if (me?.id) setCurrentUserId(me.id);
          } catch (_) {}
        }
      } catch (err) {
        // If listing trees fails (401), try bootstrap
        console.warn('[Kin] Tree list failed, attempting bootstrap…', err.message);
        try {
          await doBootstrap();
        } catch (bootstrapErr) {
          console.error('[Kin] Bootstrap failed:', bootstrapErr.message);
        }
      } finally {
        setLoading(false);
      }
    }
    init();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <TreeContext.Provider value={{ activeTreeId, setActiveTreeId, treeList, loading, currentUserId }}>
      {children}
    </TreeContext.Provider>
  );
}
