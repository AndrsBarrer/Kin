import { useState, useEffect, useRef } from 'react';
import { profiles as profilesApi } from '../api/client';
import { useTree } from '../context/TreeContext';
import s from './AddPersonModal.module.css';

export default function AddPersonModal({ people, onSave, onClose }) {
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
    if (!fn.trim() || !ln.trim()) { alert('First and last name required.'); return; }
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
        <h2>Add to Family Tree</h2>
        <div className={s.frow}>
          <div className={s.fg}>
            <label>First Name *</label>
            <input type="text" placeholder="Maria" value={fn} onChange={e => setFn(e.target.value)} />
          </div>
          <div className={s.fg}>
            <label>Last Name *</label>
            <input type="text" placeholder="García" value={ln} onChange={e => setLn(e.target.value)} />
          </div>
        </div>
        {dupes.length > 0 && (
          <div className={s.dupeWarning}>
            <div className={s.dupeTitle}>⚠ Possible duplicates found:</div>
            {dupes.map(d => (
              <div key={d.id} className={s.dupeItem}>
                {d.first_name} {d.last_name}
                {d.maiden_name ? ` (née ${d.maiden_name})` : ''}
                <span className={s.dupeScore}>{d.score}% match</span>
              </div>
            ))}
          </div>
        )}
        <div className={s.frow}>
          <div className={s.fg}>
            <label>Maiden Name</label>
            <input type="text" value={mn} onChange={e => setMn(e.target.value)} />
          </div>
          <div className={s.fg}>
            <label>Gender</label>
            <select value={gn} onChange={e => setGn(e.target.value)}>
              <option value="M">Male</option>
              <option value="F">Female</option>
              <option value="O">Other / Unknown</option>
            </select>
          </div>
        </div>
        <div className={s.frow}>
          <div className={s.fg}>
            <label>Birth Year</label>
            <input type="text" placeholder="1945" value={by} onChange={e => setBy(e.target.value)} />
          </div>
          <div className={s.fg}>
            <label>Death Year</label>
            <input type="text" placeholder="if applicable" value={dy} onChange={e => setDy(e.target.value)} />
          </div>
        </div>
        <div className={s.fg}>
          <label>Branch</label>
          <select value={br} onChange={e => setBr(e.target.value)}>
            <option value="paternal">Paternal</option>
            <option value="maternal">Maternal</option>
            <option value="sibling">Sibling branch</option>
            <option value="married">Married in</option>
          </select>
        </div>
        <div className={s.fg}>
          <label>Biography</label>
          <textarea placeholder="A few words about this person…" value={bio} onChange={e => setBio(e.target.value)} />
        </div>
        <div className={s.frow}>
          <div className={s.fg}>
            <label>Parent 1</label>
            <select value={p1} onChange={e => setP1(e.target.value)}>
              <option value="">— none —</option>
              {people.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
            </select>
          </div>
          <div className={s.fg}>
            <label>Parent 2</label>
            <select value={p2} onChange={e => setP2(e.target.value)}>
              <option value="">— none —</option>
              {people.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
            </select>
          </div>
        </div>
        <div className={s.fg}>
          <label>Spouse / Partner</label>
          <select value={sp} onChange={e => setSp(e.target.value)}>
            <option value="">— none —</option>
            {people.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
          </select>
        </div>
        <div className={s.actions}>
          <button className={s.cancelBtn} onClick={onClose} disabled={saving}>Cancel</button>
          <button className={s.saveBtn} onClick={handleSave} disabled={saving}>
            {saving ? 'Saving…' : 'Add Person'}
          </button>
        </div>
      </div>
    </div>
  );
}
