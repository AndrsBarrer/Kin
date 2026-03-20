import { useTranslation } from 'react-i18next';
import s from './Legend.module.css';

export default function Legend({ people, rels, tooltipRef, hidden = false }) {
  const { t } = useTranslation();
  const marriages = rels.filter(r => r.type === 'marriage').length;
  const families = Math.floor(rels.filter(r => r.type === 'parent').length / 2);

  return (
    <>
      <div className={`${s.legend} ${hidden ? s.hidden : ''}`} aria-hidden={hidden}>
        <div className={s.title}>{t('legend.title')}</div>
        <div className={s.row}><div className={s.dot} style={{ background: '#2F6B3E' }} />{t('legend.paternal')}</div>
        <div className={s.row}><div className={s.dot} style={{ background: '#1A5C8A' }} />{t('legend.maternal')}</div>
        <div className={s.row}><div className={s.dot} style={{ background: '#7A3A8A' }} />{t('legend.siblingBranch')}</div>
        <div className={s.row}><div className={s.dot} style={{ background: '#8A5A1A' }} />{t('legend.marriedIn')}</div>
        <div className={s.row}><div className={s.line} />{t('legend.parentChild')}</div>
        <div className={s.row}><div className={s.dash} />{t('legend.marriage')}</div>
      </div>
      <div className={`${s.stats} ${hidden ? s.hidden : ''}`} aria-hidden={hidden}>
        {t('legend.stats', {
          people: people.length,
          marriages,
          families,
        })}
      </div>
      <div ref={tooltipRef} className={s.tooltip} />
    </>
  );
}
