import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { auth, join, setToken, trees } from '../api/client';
import LanguageToggle from './LanguageToggle';
import { useTree } from '../context/TreeContext';

export default function TreeAccessPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { treeId } = useParams();
  const { currentUser, isAuthenticated, refreshSession, setActiveTreeId } = useTree();
  const [tree, setTree] = useState(null);
  const [status, setStatus] = useState('loading');
  const [error, setError] = useState('');
  const [magicForm, setMagicForm] = useState({ email: '' });
  const [codeForm, setCodeForm] = useState({ email: '', displayName: '', code: '' });
  const [magicSent, setMagicSent] = useState(false);
  const [submittingMagic, setSubmittingMagic] = useState(false);
  const [submittingCode, setSubmittingCode] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      try {
        const preview = await join.previewTree(treeId);
        if (cancelled) return;
        setTree(preview);

        const me = await refreshSession({ syncTrees: false });
        if (cancelled) return;

        if (!me) {
          setStatus('sign-in');
          return;
        }

        try {
          await trees.get(treeId);
          if (cancelled) return;
          setActiveTreeId(treeId);
          navigate('/', { replace: true });
        } catch (membershipError) {
          if (cancelled) return;
          if (membershipError.status === 403) {
            setStatus('requires-code');
            return;
          }
          throw membershipError;
        }
      } catch (loadError) {
        if (cancelled) return;
        setStatus('error');
        setError(loadError.message || t('treeAccess.failed'));
      }
    }

    load();
    return () => { cancelled = true; };
  }, [navigate, refreshSession, setActiveTreeId, t, treeId]);

  async function handleMagicLink(event) {
    event.preventDefault();
    setSubmittingMagic(true);
    setError('');

    try {
      await auth.sendMagicLink({
        email: magicForm.email.trim(),
        treeId,
      });
      setMagicSent(true);
    } catch (sendError) {
      setError(sendError.message || t('treeAccess.sendMagicFailed'));
    } finally {
      setSubmittingMagic(false);
    }
  }

  async function handleCodeJoin(event) {
    event.preventDefault();
    setSubmittingCode(true);
    setError('');

    try {
      const result = await join.joinWithCode({
        treeId,
        code: codeForm.code.trim(),
        email: codeForm.email.trim(),
        displayName: codeForm.displayName.trim(),
      });
      setToken(result.token);
      await refreshSession({ syncTrees: true });
      setActiveTreeId(treeId);
      const params = new URLSearchParams();
      if (result.profileId) {
        params.set('profile', result.profileId);
        params.set('focus', result.profileId);
      }
      navigate(`/${params.toString() ? `?${params.toString()}` : ''}`, { replace: true });
    } catch (joinError) {
      setError(joinError.message || t('treeAccess.codeFailed'));
    } finally {
      setSubmittingCode(false);
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <div style={styles.languageToggleWrap}>
          <LanguageToggle />
        </div>
        <h1 style={styles.logo}>Kin</h1>
        <p style={styles.eyebrow}>{t('treeAccess.eyebrow')}</p>
        <h2 style={styles.title}>{tree?.name || t('treeAccess.defaultTitle')}</h2>
        {tree?.description && <p style={styles.description}>{tree.description}</p>}

        {status === 'loading' && <p style={styles.subtle}>{t('treeAccess.loading')}</p>}
        {status === 'error' && <p style={styles.error}>{error}</p>}

        {(status === 'sign-in' || status === 'requires-code') && (
          <>
            <p style={styles.body}>
              {status === 'requires-code' && isAuthenticated && currentUser
                ? t('treeAccess.notAMember', { name: currentUser.displayName || currentUser.email })
                : t('treeAccess.signInRequired')}
            </p>

            <form onSubmit={handleMagicLink} style={styles.form}>
              <label style={styles.label}>{t('treeAccess.email')}</label>
              <input
                style={styles.input}
                type="email"
                value={magicForm.email}
                onChange={(event) => setMagicForm((current) => ({ ...current, email: event.target.value }))}
                placeholder={t('treeAccess.emailPlaceholder')}
                required
              />
              <button type="submit" style={styles.button} disabled={submittingMagic}>
                {submittingMagic ? t('treeAccess.sending') : t('treeAccess.sendMagicLink')}
              </button>
            </form>

            {magicSent && <p style={styles.success}>{t('treeAccess.magicSent')}</p>}

            <div style={styles.divider} />

            <p style={styles.subtle}>{t('treeAccess.profileInviteExplainer')}</p>

            <form onSubmit={handleCodeJoin} style={styles.form}>
              <label style={styles.label}>{t('treeAccess.accessCode')}</label>
              <input
                style={styles.input}
                type="text"
                value={codeForm.code}
                onChange={(event) => setCodeForm((current) => ({ ...current, code: event.target.value.toUpperCase() }))}
                placeholder={t('treeAccess.codePlaceholder')}
                required
              />
              <label style={styles.label}>{t('treeAccess.name')}</label>
              <input
                style={styles.input}
                type="text"
                value={codeForm.displayName}
                onChange={(event) => setCodeForm((current) => ({ ...current, displayName: event.target.value }))}
                placeholder={t('treeAccess.namePlaceholder')}
                required
              />
              <label style={styles.label}>{t('treeAccess.email')}</label>
              <input
                style={styles.input}
                type="email"
                value={codeForm.email}
                onChange={(event) => setCodeForm((current) => ({ ...current, email: event.target.value }))}
                placeholder={t('treeAccess.emailPlaceholder')}
                required
              />
              <button type="submit" style={styles.secondaryButton} disabled={submittingCode}>
                {submittingCode ? t('treeAccess.joining') : t('treeAccess.joinWithCode')}
              </button>
            </form>
          </>
        )}

        {error && status !== 'error' && <p style={styles.error}>{error}</p>}
        <Link to="/" style={styles.link}>← {t('common.back')}</Link>
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
    width: 'min(520px, 100%)',
    background: '#FDFBF8',
    borderRadius: 18,
    padding: 32,
    border: '1px solid #DCD5C8',
    boxShadow: '0 18px 42px rgba(45,42,38,0.10)',
    position: 'relative',
  },
  languageToggleWrap: {
    position: 'absolute',
    top: 18,
    right: 18,
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 34,
    color: '#3D7C47',
    marginBottom: 8,
    textAlign: 'center',
  },
  eyebrow: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.14em',
    textTransform: 'uppercase',
    color: '#8A7350',
    textAlign: 'center',
    marginBottom: 10,
  },
  title: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 28,
    color: '#2D2A26',
    textAlign: 'center',
    marginBottom: 8,
  },
  description: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    lineHeight: 1.7,
    color: '#5E5850',
    textAlign: 'center',
    marginBottom: 16,
  },
  body: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 15,
    lineHeight: 1.7,
    color: '#5E5850',
    marginBottom: 18,
    textAlign: 'center',
  },
  subtle: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    lineHeight: 1.7,
    color: '#9A948E',
    marginBottom: 14,
    textAlign: 'center',
  },
  form: {
    display: 'grid',
    gap: 8,
    marginBottom: 12,
  },
  label: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: '#9A948E',
    marginTop: 6,
  },
  input: {
    width: '100%',
    padding: '10px 12px',
    borderRadius: 8,
    border: '1px solid #DCD5C8',
    background: '#F0EBE2',
    color: '#2D2A26',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
  },
  button: {
    marginTop: 10,
    padding: '12px 14px',
    border: 'none',
    borderRadius: 10,
    background: '#3D7C47',
    color: '#fff',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
  },
  secondaryButton: {
    marginTop: 10,
    padding: '12px 14px',
    border: '1px solid #3A72A0',
    borderRadius: 10,
    background: 'rgba(58,114,160,0.08)',
    color: '#3A72A0',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
  },
  divider: {
    height: 1,
    background: '#DCD5C8',
    margin: '20px 0 14px',
  },
  success: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    color: '#3D7C47',
    textAlign: 'center',
    marginBottom: 12,
  },
  error: {
    fontFamily: "'Inter', sans-serif",
    fontSize: 13,
    color: '#B44536',
    textAlign: 'center',
    marginTop: 12,
  },
  link: {
    display: 'block',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#3D7C47',
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    marginTop: 18,
  },
};