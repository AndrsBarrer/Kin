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
        setTimeout(() => {
          if (!cancelled) navigate(treeId ? `/tree/${treeId}` : '/', { replace: true });
        }, 900);
      } catch (err) {
        if (cancelled) return;
        setStatus('error');
        setMessage(err.message || t('authVerify.failed'));
      }
    }

    run();
    return () => { cancelled = true; };
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
    background: '#F5F1EB',
    padding: 20,
  },
  card: {
    width: 'min(420px, 100%)',
    background: '#FDFBF8',
    borderRadius: 16,
    padding: 28,
    border: '1px solid #DCD5C8',
    boxShadow: '0 16px 40px rgba(0,0,0,0.08)',
    textAlign: 'center',
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 32,
    color: '#3D7C47',
    marginBottom: 14,
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: '#5E5850',
    lineHeight: 1.6,
  },
  error: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    color: '#B44536',
    lineHeight: 1.6,
  },
};