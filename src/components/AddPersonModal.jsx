import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { profiles as profilesApi } from '../api/client';
import { useTree } from '../context/TreeContext';
import s from './AddPersonModal.module.css';

export default function AddPersonModal({ people, onSave, onClose }) {
  const { t } = useTranslation();
  const [fn, setFn] = useState('');
  const [ln, setLn] = useState('');
  const [mn, setMn] = useState('');
  const [gn, setGn] = useState('M');
  const [by, setBy] = useState('');
  const [dy, setDy] = useState('');
  const [br, setBr] = useState('paternal');
  const [bio, setBio] = useState('');
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [sp, setSp] = useState('');
  const [saving, setSaving] = useState(false);
  const [dupes, setDupes] = useState([]);
  const dupeTimer = useRef(null);
  const { activeTreeId } = useTree();

  // Live duplicate check with debounce
  useEffect(() => {
    if (dupeTimer.current) clearTimeout(dupeTimer.current);
    const firstName = fn.trim();
    const lastName = ln.trim();
    if (!firstName || !lastName || !activeTreeId) {
      setDupes([]);
      return;
    }
    dupeTimer.current = setTimeout(async () => {
      try {
        const results = await profilesApi.duplicates(activeTreeId, firstName, lastName);
        setDupes(results);
      } catch (_) {
        setDupes([]);
      }
    }, 400);
    return () => clearTimeout(dupeTimer.current);
  }, [fn, ln, activeTreeId]);

  const handleSave = async () => {
    if (!fn.trim() || !ln.trim()) { alert(t('addPersonModal.firstNameRequired')); return; }
    setSaving(true);
    await onSave({
      firstName: fn.trim(),
      lastName: ln.trim(),
      maiden: mn.trim(),
      gender: gn,
      birth: parseInt(by) || null,
      death: parseInt(dy) || null,
      branch: br,
      bio: bio.trim(),
      parent1: p1 || null,
      parent2: p2 || null,
      spouse: sp || null,
    });
    onClose();
  };

  return (
    <div className={s.backdrop} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={s.modal}>
        <h2>{t('addPersonModal.title')}</h2>
        <div className={s.frow}>
          <div className={s.fg}>
            <label>{t('addPersonModal.firstName')} *</label>
            <input type="text" placeholder={t('addPersonModal.placeholders.firstName')} value={fn} onChange={e => setFn(e.target.value)} />
          </div>
          <div className={s.fg}>
            <label>{t('addPersonModal.lastName')} *</label>
            <input type="text" placeholder={t('addPersonModal.placeholders.lastName')} value={ln} onChange={e => setLn(e.target.value)} />
          </div>
        </div>
        {dupes.length > 0 && (
          <div className={s.dupeWarning}>
            <div className={s.dupeTitle}>⚠ {t('addPersonModal.duplicateTitle')}</div>
            {dupes.map(d => (
              <div key={d.id} className={s.dupeItem}>
                {d.first_name} {d.last_name}
                {d.maiden_name ? ` (née ${d.maiden_name})` : ''}
                <span className={s.dupeScore}>{t('addPersonModal.duplicateMatch', { score: d.score })}</span>
              </div>
            ))}
          </div>
        )}
        <div className={s.frow}>
          <div className={s.fg}>
            <label>{t('addPersonModal.maidenName')}</label>
            <input type="text" value={mn} onChange={e => setMn(e.target.value)} />
          </div>
          <div className={s.fg}>
            <label>{t('addPersonModal.gender')}</label>
            <select value={gn} onChange={e => setGn(e.target.value)}>
              <option value="M">{t('addPersonModal.genderOptions.male')}</option>
              <option value="F">{t('addPersonModal.genderOptions.female')}</option>
              <option value="O">{t('addPersonModal.genderOptions.other')}</option>
            </select>
          </div>
        </div>
        <div className={s.frow}>
          <div className={s.fg}>
            <label>{t('addPersonModal.birthYear')}</label>
            <input type="text" placeholder={t('addPersonModal.placeholders.birthYear')} value={by} onChange={e => setBy(e.target.value)} />
          </div>
          <div className={s.fg}>
            <label>{t('addPersonModal.deathYear')}</label>
            <input type="text" placeholder={t('addPersonModal.placeholders.deathYear')} value={dy} onChange={e => setDy(e.target.value)} />
          </div>
        </div>
        <div className={s.fg}>
          <label>{t('addPersonModal.branch')}</label>
          <select value={br} onChange={e => setBr(e.target.value)}>
            <option value="paternal">{t('addPersonModal.branchOptions.paternal')}</option>
            <option value="maternal">{t('addPersonModal.branchOptions.maternal')}</option>
            <option value="sibling">{t('addPersonModal.branchOptions.sibling')}</option>
            <option value="married">{t('addPersonModal.branchOptions.married')}</option>
          </select>
        </div>
        <div className={s.fg}>
          <label>{t('addPersonModal.biography')}</label>
          <textarea placeholder={t('addPersonModal.placeholders.biography')} value={bio} onChange={e => setBio(e.target.value)} />
        </div>
        <div className={s.frow}>
          <div className={s.fg}>
            <label>{t('addPersonModal.parent1')}</label>
            <select value={p1} onChange={e => setP1(e.target.value)}>
              <option value="">— {t('addPersonModal.noneOption')} —</option>
              {people.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
            </select>
          </div>
          <div className={s.fg}>
            <label>{t('addPersonModal.parent2')}</label>
            <select value={p2} onChange={e => setP2(e.target.value)}>
              <option value="">— {t('addPersonModal.noneOption')} —</option>
              {people.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
            </select>
          </div>
        </div>
        <div className={s.fg}>
          <label>{t('addPersonModal.spouse')}</label>
          <select value={sp} onChange={e => setSp(e.target.value)}>
            <option value="">— {t('addPersonModal.noneOption')} —</option>
            {people.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
          </select>
        </div>
        <div className={s.actions}>
          <button className={s.cancelBtn} onClick={onClose} disabled={saving}>{t('common.cancel')}</button>
          <button className={s.saveBtn} onClick={handleSave} disabled={saving}>
            {saving ? t('addPersonModal.saving') : t('addPersonModal.addPerson')}
          </button>
        </div>
      </div>
    </div>
  );
}
