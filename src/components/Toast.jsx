import { useState, useCallback, useRef } from 'react';

let _addToast = null;

export function toast(message, type = 'success') {
  _addToast?.(message, type);
}

export default function Toast() {
  const [toasts, setToasts] = useState([]);
  const idRef = useRef(0);

  _addToast = useCallback((message, type) => {
    const id = ++idRef.current;
    setToasts(prev => [...prev, { id, message, type }]);
    setTimeout(() => setToasts(prev => prev.filter(t => t.id !== id)), 4000);
  }, []);

  if (toasts.length === 0) return null;

  return (
    <div style={{
      position: 'fixed', bottom: 20, right: 20, zIndex: 9999,
      display: 'flex', flexDirection: 'column', gap: 8
    }}>
      {toasts.map(t => (
        <div key={t.id} style={{
          padding: '10px 18px',
          borderRadius: 8,
          fontFamily: "'Inter', sans-serif",
          fontSize: 13,
          fontWeight: 500,
          color: '#fff',
          background: t.type === 'error' ? '#c0392b' : t.type === 'info' ? '#3A72A0' : '#3D7C47',
          boxShadow: '0 4px 16px rgba(0,0,0,0.12)',
          animation: 'toast-in .3s ease',
          maxWidth: 360,
        }}>
          {t.message}
        </div>
      ))}
    </div>
  );
}
