import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { profiles as profilesApi } from '../api/client';
import s from './AddPersonModal.module.css';

const MOBILE_BREAKPOINT = '(max-width: 768px)';

function sanitizeYear(value) {
  return value.replace(/\D/g, '').slice(0, 4);
}

export default function AddPersonModal({ activeTreeId, treeLoading, people, onSave, onClose, mode = 'create', initialValues = null }) {
  const { t } = useTranslation();
  const isEditMode = mode === 'edit';
  const currentProfileId = initialValues?.id || null;
  const [fn, setFn] = useState('');
  const [ln, setLn] = useState('');
  const [mn, setMn] = useState('');
  const [gn, setGn] = useState('M');
  const [by, setBy] = useState('');
  const [dy, setDy] = useState('');
  const [bio, setBio] = useState('');
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [sp, setSp] = useState('');
  const [saving, setSaving] = useState(false);
  const [dupes, setDupes] = useState([]);
  const [stepIndex, setStepIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_BREAKPOINT).matches
  );
  const [mobileViewportHeight, setMobileViewportHeight] = useState(null);
  const dupeTimer = useRef(null);
  const modalRef = useRef(null);
  const canSubmit = isEditMode || (Boolean(activeTreeId) && !treeLoading);
  const selectablePeople = people.filter((person) => person.id !== currentProfileId);
  const parent1Options = selectablePeople.filter((person) => person.id === p1 || person.id !== p2);
  const parent2Options = selectablePeople.filter((person) => person.id === p2 || person.id !== p1);
  const hasRelationshipStep = selectablePeople.length > 0;
  const mobileSteps = [
    {
      key: 'identity',
      title: t('addPersonModal.steps.identity.title'),
      description: t('addPersonModal.steps.identity.description'),
    },
    {
      key: 'details',
      title: t('addPersonModal.steps.details.title'),
      description: t('addPersonModal.steps.details.description'),
    },
    ...(hasRelationshipStep ? [{
      key: 'relationships',
      title: t('addPersonModal.steps.relationships.title'),
      description: t('addPersonModal.steps.relationships.description'),
    }] : []),
  ];
  const activeStep = mobileSteps[Math.min(stepIndex, mobileSteps.length - 1)];
  const isLastStep = stepIndex === mobileSteps.length - 1;

  useEffect(() => {
    setFn(initialValues?.firstName || '');
    setLn(initialValues?.lastName || '');
    setMn(initialValues?.maiden || '');
    setGn(initialValues?.gender || 'M');
    setBy(initialValues?.birth ? String(initialValues.birth) : '');
    setDy(initialValues?.death ? String(initialValues.death) : '');
    setBio(initialValues?.bio || '');
    setP1(initialValues?.parent1 || '');
    setP2(initialValues?.parent2 || '');
    setSp(initialValues?.spouse || '');
    setDupes([]);
    setStepIndex(0);
  }, [initialValues]);

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;

    const mediaQuery = window.matchMedia(MOBILE_BREAKPOINT);
    const syncViewport = () => setIsMobile(mediaQuery.matches);

    syncViewport();
    mediaQuery.addEventListener('change', syncViewport);
    return () => mediaQuery.removeEventListener('change', syncViewport);
  }, []);

  useEffect(() => {
    if (!isMobile || typeof window === 'undefined') {
      setMobileViewportHeight(null);
      return undefined;
    }

    const viewport = window.visualViewport;
    if (!viewport) {
      setMobileViewportHeight(window.innerHeight);
      return undefined;
    }

    const syncHeight = () => setMobileViewportHeight(viewport.height);

    syncHeight();
    viewport.addEventListener('resize', syncHeight);
    viewport.addEventListener('scroll', syncHeight);

    return () => {
      viewport.removeEventListener('resize', syncHeight);
      viewport.removeEventListener('scroll', syncHeight);
    };
  }, [isMobile]);

  useEffect(() => {
    if (typeof document === 'undefined' || typeof window === 'undefined') return undefined;

    const { body, documentElement } = document;
    const scrollY = window.scrollY;
    const previousBodyOverflow = body.style.overflow;
    const previousBodyPosition = body.style.position;
    const previousBodyTop = body.style.top;
    const previousBodyLeft = body.style.left;
    const previousBodyRight = body.style.right;
    const previousBodyWidth = body.style.width;
    const previousHtmlOverflow = documentElement.style.overflow;

    body.style.overflow = 'hidden';
    body.style.position = 'fixed';
    body.style.top = `-${scrollY}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    documentElement.style.overflow = 'hidden';

    return () => {
      body.style.overflow = previousBodyOverflow;
      body.style.position = previousBodyPosition;
      body.style.top = previousBodyTop;
      body.style.left = previousBodyLeft;
      body.style.right = previousBodyRight;
      body.style.width = previousBodyWidth;
      documentElement.style.overflow = previousHtmlOverflow;
      window.scrollTo(0, scrollY);
    };
  }, []);

  useEffect(() => {
    setStepIndex((current) => Math.min(current, mobileSteps.length - 1));
  }, [mobileSteps.length]);

  useEffect(() => {
    if (!isMobile || !modalRef.current) return;
    modalRef.current.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isMobile, stepIndex]);

  // Live duplicate check with debounce
  useEffect(() => {
    if (isEditMode) {
      setDupes([]);
      return;
    }
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
      } catch {
        setDupes([]);
      }
    }, 400);
    return () => clearTimeout(dupeTimer.current);
  }, [activeTreeId, fn, isEditMode, ln]);

  const validateIdentityStep = () => {
    if (!fn.trim() || !ln.trim()) {
      alert(t('addPersonModal.firstNameRequired'));
      return false;
    }
    return true;
  };

  const showStep = (stepKey) => !isMobile || activeStep?.key === stepKey;

  const handleNextStep = () => {
    if (activeStep?.key === 'identity' && !validateIdentityStep()) return;
    setStepIndex((current) => Math.min(current + 1, mobileSteps.length - 1));
  };

  const handleBackStep = () => {
    if (stepIndex === 0) {
      onClose();
      return;
    }
    setStepIndex((current) => Math.max(current - 1, 0));
  };

  const handleSave = async () => {
    if (!canSubmit) {
      alert(treeLoading ? t('common.loadingFamilyTree') : t('app.noActiveTree'));
      return;
    }
    if (!validateIdentityStep()) return;
    if (p1 && p2 && p1 === p2) {
      alert(t('addPersonModal.parentsMustBeDifferent'));
      return;
    }
    setSaving(true);
    try {
      const saved = await onSave({
        firstName: fn.trim(),
        lastName: ln.trim(),
        maiden: mn.trim(),
        gender: gn,
        birth: parseInt(by) || null,
        death: parseInt(dy) || null,
        bio: bio.trim(),
        parent1: p1 || null,
        parent2: p2 || null,
        spouse: sp || null,
      });
      if (saved !== false) {
        onClose();
      }
    } finally {
      setSaving(false);
    }
  };

  const handleFocusCapture = (event) => {
    if (!isMobile) return;

    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    window.setTimeout(() => {
      target.scrollIntoView({ block: 'center', behavior: 'smooth' });
    }, 220);
  };

  const modalStyle = isMobile && mobileViewportHeight
    ? { maxHeight: `${Math.max(Math.floor(mobileViewportHeight) - 12, 320)}px` }
    : undefined;

  return (
    <div className={s.backdrop} onClick={e => e.target === e.currentTarget && onClose()}>
      <div className={s.modal} ref={modalRef} style={modalStyle} onFocusCapture={handleFocusCapture}>
        <h2>{isEditMode ? t('addPersonModal.editTitle') : t('addPersonModal.title')}</h2>
        {isMobile && (
          <div className={s.stepper}>
            <div className={s.stepMeta}>
              <span className={s.stepCount}>{t('addPersonModal.stepCounter', { current: stepIndex + 1, total: mobileSteps.length })}</span>
              <strong className={s.stepTitle}>{activeStep.title}</strong>
              <p className={s.stepDescription}>{activeStep.description}</p>
            </div>
            <div className={s.stepDots} aria-hidden="true">
              {mobileSteps.map((step, index) => (
                <span key={step.key} className={`${s.stepDot} ${index === stepIndex ? s.stepDotActive : ''}`} />
              ))}
            </div>
          </div>
        )}

        {showStep('identity') && (
          <div className={s.stepPanel}>
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
          </div>
        )}

        {showStep('details') && (
          <div className={s.stepPanel}>
            <div className={s.frow}>
              <div className={s.fg}>
                <label>{t('addPersonModal.birthYear')}</label>
                <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder={t('addPersonModal.placeholders.birthYear')} value={by} onChange={e => setBy(sanitizeYear(e.target.value))} />
              </div>
              <div className={s.fg}>
                <label>{t('addPersonModal.deathYear')}</label>
                <input type="text" inputMode="numeric" pattern="[0-9]*" placeholder={t('addPersonModal.placeholders.deathYear')} value={dy} onChange={e => setDy(sanitizeYear(e.target.value))} />
              </div>
            </div>
            <div className={s.fg}>
              <label>{t('addPersonModal.biography')}</label>
              <textarea placeholder={t('addPersonModal.placeholders.biography')} value={bio} onChange={e => setBio(e.target.value)} />
            </div>
          </div>
        )}

        {showStep('relationships') && (
          <div className={s.stepPanel}>
            <div className={s.frow}>
              <div className={s.fg}>
                <label>{t('addPersonModal.parent1')}</label>
                <select value={p1} onChange={e => setP1(e.target.value)}>
                  <option value="">— {t('addPersonModal.noneOption')} —</option>
                  {parent1Options.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
                </select>
              </div>
              <div className={s.fg}>
                <label>{t('addPersonModal.parent2')}</label>
                <select value={p2} onChange={e => setP2(e.target.value)}>
                  <option value="">— {t('addPersonModal.noneOption')} —</option>
                  {parent2Options.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
                </select>
              </div>
            </div>
            <div className={s.fg}>
              <label>{t('addPersonModal.spouse')}</label>
              <select value={sp} onChange={e => setSp(e.target.value)}>
                <option value="">— {t('addPersonModal.noneOption')} —</option>
                {selectablePeople.map(p => <option key={p.id} value={p.id}>{p.firstName} {p.lastName}</option>)}
              </select>
            </div>
          </div>
        )}

        {isMobile ? (
          <div className={`${s.actions} ${s.mobileActions}`}>
            <button className={s.cancelBtn} onClick={handleBackStep} disabled={saving}>
              {stepIndex === 0 ? t('common.cancel') : t('common.back')}
            </button>
            <button
              className={s.saveBtn}
              onClick={isLastStep ? handleSave : handleNextStep}
              disabled={saving || !canSubmit}
            >
              {isLastStep
                ? (saving ? (isEditMode ? t('addPersonModal.updating') : t('addPersonModal.saving')) : (isEditMode ? t('addPersonModal.updatePerson') : t('addPersonModal.addPerson')))
                : t('common.continue')}
            </button>
          </div>
        ) : (
          <div className={s.actions}>
            <button className={s.cancelBtn} onClick={onClose} disabled={saving}>{t('common.cancel')}</button>
            <button className={s.saveBtn} onClick={handleSave} disabled={saving || !canSubmit}>
              {saving ? (isEditMode ? t('addPersonModal.updating') : t('addPersonModal.saving')) : (isEditMode ? t('addPersonModal.updatePerson') : t('addPersonModal.addPerson'))}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
