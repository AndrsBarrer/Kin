 import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSearchParams } from 'react-router-dom';
import { auth, join } from '../api/client';

export default function JoinPage() {
  const { t, i18n } = useTranslation();
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [status, setStatus] = useState('loading'); // loading | found | claiming | done | error
  const [person, setPerson] = useState(null);
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setError(t('joinPage.noToken'));
      return;
    }
    join.verify(token)
      .then(data => {
        setPerson(data);
        setDisplayName(data.first_name + ' ' + data.last_name);
        setStatus('found');
        console.log('[Kin] Invite token verified — profile:', data.first_name, data.last_name);
      })
      .catch(err => {
        setStatus('error');
        setError(err.message || t('joinPage.invalidToken'));
        console.error('[Kin] Token verification failed:', err.message);
      });
  }, [token, t]);

  const handleClaim = async (e) => {
    e.preventDefault();
    if (!email.trim()) { setError(t('joinPage.emailRequired')); return; }
    setStatus('claiming');
    setError('');
    try {
      await auth.sendMagicLink({
        email: email.trim(),
        displayName: displayName.trim(),
        claimToken: token,
        locale: i18n.language?.slice(0, 2) === 'es' ? 'es' : 'en',
      });
      setStatus('done');
      console.log('[Kin] Magic link sent for profile claim.');
    } catch (err) {
      setStatus('found');
      setError(err.message || t('joinPage.claimFailed'));
      console.error('[Kin] Claim failed:', err.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.logo}>Kin</h1>

        {status === 'loading' && <p style={styles.subtle}>{t('joinPage.verifyingInvite')}</p>}

        {status === 'error' && (
          <div>
            <p style={styles.errorText}>{error}</p>
            <a href="/" style={styles.link}>← {t('joinPage.backToTree')}</a>
          </div>
        )}

        {status === 'found' && person && (
          <form onSubmit={handleClaim}>
            <p style={styles.greeting}>
              {t('joinPage.invitedToClaim')}
            </p>
            <h2 style={styles.personName}>{person.first_name} {person.last_name}</h2>
            {person.maiden_name && (
              <p style={styles.subtle}>née {person.maiden_name}</p>
            )}

            <div style={styles.divider} />

            <p style={styles.label}>{t('joinPage.createAccountLabel')}</p>

            <label style={styles.fieldLabel}>{t('joinPage.displayName')}</label>
            <input
              style={styles.input}
              type="text"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              placeholder={t('joinPage.yourName')}
            />

            <label style={styles.fieldLabel}>{t('joinPage.email')} *</label>
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder={t('joinPage.yourEmail')}
              required
            />

            <p style={styles.subtle}>{t('joinPage.magicLinkHint')}</p>

            {error && <p style={styles.errorText}>{error}</p>}

            <button type="submit" style={styles.btn}>
              {t('joinPage.createAccountClaim')}
            </button>
          </form>
        )}

        {status === 'claiming' && <p style={styles.subtle}>{t('joinPage.creatingAccount')}</p>}

        {status === 'done' && (
          <div>
            <p style={styles.successText}>{t('joinPage.accountCreated')}</p>
            <p style={styles.subtle}>{t('joinPage.openEmail')}</p>
          </div>
        )}
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
    background: 'radial-gradient(circle at 18% 22%, color-mix(in srgb, var(--green) 18%, transparent), transparent 28%), radial-gradient(circle at 84% 18%, color-mix(in srgb, var(--accent) 12%, transparent), transparent 24%), linear-gradient(180deg, color-mix(in srgb, var(--surface) 62%, var(--bg)) 0%, var(--bg) 100%)',
    fontFamily: "'Inter', 'Crimson Pro', sans-serif",
    padding: 20,
    overflow: 'auto',
  },
  card: {
    background: 'linear-gradient(180deg, color-mix(in srgb, var(--surface) 94%, white 6%) 0%, color-mix(in srgb, var(--bg) 88%, var(--surface) 12%) 100%)',
    borderRadius: 22,
    padding: '40px 36px',
    maxWidth: 420,
    width: '100%',
    boxShadow: '0 24px 60px rgba(18,16,14,0.16), 0 0 0 1px rgba(255,255,255,0.05) inset',
    border: '1px solid color-mix(in srgb, var(--border) 88%, transparent)',
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 30,
    fontWeight: 700,
    color: 'var(--green)',
    marginBottom: 20,
    textAlign: 'center',
  },
  greeting: {
    fontSize: 15,
    color: 'var(--text-dim)',
    marginBottom: 4,
    textAlign: 'center',
  },
  personName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 24,
    fontWeight: 600,
    color: 'var(--text)',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtle: {
    fontSize: 13,
    color: 'var(--text-muted)',
    textAlign: 'center',
    marginBottom: 12,
    lineHeight: 1.6,
  },
  divider: {
    height: 1,
    background: 'var(--border)',
    margin: '20px 0',
  },
  label: {
    fontSize: 14,
    color: 'var(--text-dim)',
    marginBottom: 16,
  },
  fieldLabel: {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: 'var(--text-muted)',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '11px 12px',
    fontSize: 13,
    borderRadius: 10,
    border: '1px solid var(--border)',
    background: 'color-mix(in srgb, var(--surface2) 86%, transparent)',
    color: 'var(--text)',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    marginBottom: 4,
  },
  btn: {
    display: 'block',
    width: '100%',
    padding: '12px',
    marginTop: 20,
    background: 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)',
    color: '#fff',
    border: 'none',
    borderRadius: 10,
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 700,
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
    boxShadow: '0 14px 28px color-mix(in srgb, var(--green) 22%, transparent)',
  },
  errorText: {
    color: '#c0392b',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
  },
  successText: {
    color: 'var(--green)',
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 16,
  },
  link: {
    display: 'block',
    textAlign: 'center',
    color: 'var(--green)',
    fontSize: 14,
    marginTop: 16,
    textDecoration: 'none',
  },
};
