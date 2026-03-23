import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { auth, join, setToken } from '../api/client';
import { useTree } from '../context/TreeContext';

export default function AuthVerifyPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { refreshSession } = useTree();
  const [status, setStatus] = useState('verifying');
  const [message, setMessage] = useState('');
  const attemptedTokenRef = useRef(null);

  const token = searchParams.get('token');
  const inviteToken = searchParams.get('inviteToken');
  const treeId = searchParams.get('treeId');

  useEffect(() => {
    let redirectTimeoutId = null;

    if (!token) {
      setStatus('error');
      setMessage(t('authVerify.missingToken'));
      return;
    }

    if (attemptedTokenRef.current === token) {
      return;
    }

    attemptedTokenRef.current = token;

    let cancelled = false;

    async function run() {
      try {
        const result = await auth.verify(token);
        if (cancelled) return;
        setToken(result.token);
        await refreshSession({ syncTrees: true });

        if (inviteToken) {
          setStatus('claiming');
          await join.claimAuthenticated(inviteToken);
          if (cancelled) return;
          await refreshSession({ syncTrees: true });
        }

        setStatus('done');
        redirectTimeoutId = window.setTimeout(() => {
          if (!cancelled) navigate(treeId ? `/tree/${treeId}` : '/', { replace: true });
        }, 900);
      } catch (err) {
        if (cancelled) return;
        setStatus('error');
        setMessage(err.message || t('authVerify.failed'));
      }
    }

    run();
    return () => {
      cancelled = true;
      if (redirectTimeoutId !== null) {
        window.clearTimeout(redirectTimeoutId);
      }
    };
  }, [inviteToken, navigate, refreshSession, t, token, treeId]);

  const body = status === 'verifying'
    ? t('authVerify.verifying')
    : status === 'claiming'
      ? t('authVerify.claiming')
      : status === 'done'
        ? t('authVerify.success')
        : message;

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.logo}>Kin</h1>
        <p style={status === 'error' ? styles.error : styles.body}>{body}</p>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'radial-gradient(circle at 18% 20%, color-mix(in srgb, var(--green) 18%, transparent), transparent 26%), radial-gradient(circle at 82% 16%, color-mix(in srgb, var(--accent) 14%, transparent), transparent 22%), linear-gradient(180deg, color-mix(in srgb, var(--surface) 65%, var(--bg)) 0%, var(--bg) 100%)',
    padding: 20,
  },
  card: {
    width: 'min(420px, 100%)',
    background: 'linear-gradient(180deg, color-mix(in srgb, var(--surface) 94%, white 6%) 0%, color-mix(in srgb, var(--bg) 86%, var(--surface) 14%) 100%)',
    borderRadius: 22,
    padding: 32,
    border: '1px solid color-mix(in srgb, var(--border) 88%, transparent)',
    boxShadow: '0 24px 60px rgba(18,16,14,0.16), 0 0 0 1px rgba(255,255,255,0.05) inset',
    backdropFilter: 'blur(14px)',
    textAlign: 'center',
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 36,
    color: 'var(--green)',
    marginBottom: 16,
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: 'var(--text-dim)',
    lineHeight: 1.75,
  },
  error: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: '#B44536',
    lineHeight: 1.75,
  },
};