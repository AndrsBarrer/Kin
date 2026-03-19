 import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { join, setToken } from '../api/client';

export default function JoinPage() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');

  const [status, setStatus] = useState('loading'); // loading | found | claiming | done | error
  const [person, setPerson] = useState(null);
  const [email, setEmail] = useState('');
  const [displayName, setDisplayName] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (!token) {
      setStatus('error');
      setError('No invite token provided.');
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
        setError(err.message || 'Invalid or expired invite token.');
        console.error('[Kin] Token verification failed:', err.message);
      });
  }, [token]);

  const handleClaim = async (e) => {
    e.preventDefault();
    if (!email.trim()) { setError('Email is required.'); return; }
    if (password.length < 8) { setError('Password must be at least 8 characters.'); return; }
    if (password !== confirmPassword) { setError('Passwords do not match.'); return; }
    setStatus('claiming');
    setError('');
    try {
      const result = await join.claim(token, email.trim(), displayName.trim(), password);
      setToken(result.token);
      setStatus('done');
      console.log('[Kin] Profile claimed — user account created, session active.');
    } catch (err) {
      setStatus('found');
      setError(err.message || 'Failed to create account.');
      console.error('[Kin] Claim failed:', err.message);
    }
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h1 style={styles.logo}>Kin</h1>

        {status === 'loading' && <p style={styles.subtle}>Verifying invite…</p>}

        {status === 'error' && (
          <div>
            <p style={styles.errorText}>{error}</p>
            <a href="/" style={styles.link}>← Back to family tree</a>
          </div>
        )}

        {status === 'found' && person && (
          <form onSubmit={handleClaim}>
            <p style={styles.greeting}>
              You've been invited to claim the profile for
            </p>
            <h2 style={styles.personName}>{person.first_name} {person.last_name}</h2>
            {person.maiden_name && (
              <p style={styles.subtle}>née {person.maiden_name}</p>
            )}

            <div style={styles.divider} />

            <p style={styles.label}>Create your account to manage this profile:</p>

            <label style={styles.fieldLabel}>Display Name</label>
            <input
              style={styles.input}
              type="text"
              value={displayName}
              onChange={e => setDisplayName(e.target.value)}
              placeholder="Your name"
            />

            <label style={styles.fieldLabel}>Email Address *</label>
            <input
              style={styles.input}
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="you@example.com"
              required
            />

            <label style={styles.fieldLabel}>Create Password *</label>
            <input
              style={styles.input}
              type="password"
              value={password}
              onChange={e => setPassword(e.target.value)}
              placeholder="At least 8 characters"
              minLength={8}
              required
            />

            <label style={styles.fieldLabel}>Confirm Password *</label>
            <input
              style={styles.input}
              type="password"
              value={confirmPassword}
              onChange={e => setConfirmPassword(e.target.value)}
              placeholder="Repeat your password"
              minLength={8}
              required
            />

            {error && <p style={styles.errorText}>{error}</p>}

            <button type="submit" style={styles.btn}>
              Create Account & Claim Profile
            </button>
          </form>
        )}

        {status === 'claiming' && <p style={styles.subtle}>Creating your account…</p>}

        {status === 'done' && (
          <div>
            <p style={styles.successText}>Account created! Your profile has been claimed.</p>
            <a href="/" style={styles.btn}>Open Family Tree →</a>
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
    background: '#F5F1EB',
    fontFamily: "'Inter', 'Crimson Pro', sans-serif",
    padding: 20,
    overflow: 'auto',
  },
  card: {
    background: '#FDFBF8',
    borderRadius: 12,
    padding: '40px 36px',
    maxWidth: 420,
    width: '100%',
    boxShadow: '0 8px 32px rgba(0,0,0,0.08)',
    border: '1px solid #DCD5C8',
  },
  logo: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 28,
    fontWeight: 700,
    color: '#3D7C47',
    marginBottom: 20,
    textAlign: 'center',
  },
  greeting: {
    fontSize: 15,
    color: '#5E5850',
    marginBottom: 4,
    textAlign: 'center',
  },
  personName: {
    fontFamily: "'Playfair Display', serif",
    fontSize: 24,
    fontWeight: 600,
    color: '#2D2A26',
    textAlign: 'center',
    marginBottom: 4,
  },
  subtle: {
    fontSize: 13,
    color: '#9A948E',
    textAlign: 'center',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    background: '#DCD5C8',
    margin: '20px 0',
  },
  label: {
    fontSize: 14,
    color: '#5E5850',
    marginBottom: 16,
  },
  fieldLabel: {
    display: 'block',
    fontSize: 11,
    fontWeight: 600,
    letterSpacing: '.08em',
    textTransform: 'uppercase',
    color: '#9A948E',
    marginBottom: 4,
    marginTop: 12,
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '9px 12px',
    fontSize: 13,
    borderRadius: 8,
    border: '1px solid #DCD5C8',
    background: '#F0EBE2',
    color: '#2D2A26',
    fontFamily: "'Inter', sans-serif",
    outline: 'none',
    marginBottom: 4,
  },
  btn: {
    display: 'block',
    width: '100%',
    padding: '11px',
    marginTop: 20,
    background: '#3D7C47',
    color: '#fff',
    border: 'none',
    borderRadius: 8,
    fontFamily: "'Inter', sans-serif",
    fontSize: 14,
    fontWeight: 600,
    cursor: 'pointer',
    textAlign: 'center',
    textDecoration: 'none',
  },
  errorText: {
    color: '#c0392b',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
  },
  successText: {
    color: '#3D7C47',
    fontSize: 15,
    fontWeight: 600,
    textAlign: 'center',
    marginBottom: 16,
  },
  link: {
    display: 'block',
    textAlign: 'center',
    color: '#3D7C47',
    fontSize: 14,
    marginTop: 16,
    textDecoration: 'none',
  },
};
