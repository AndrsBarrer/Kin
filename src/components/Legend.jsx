import s from './Legend.module.css';

export default function Legend({ people, rels, tooltipRef }) {
  const marriages = rels.filter(r => r.type === 'marriage').length;
  const families = Math.floor(rels.filter(r => r.type === 'parent').length / 2);

  return (
    <>
      <div className={s.legend}>
        <div className={s.title}>Legend</div>
        <div className={s.row}><div className={s.dot} style={{ background: '#2F6B3E' }} />Paternal</div>
        <div className={s.row}><div className={s.dot} style={{ background: '#1A5C8A' }} />Maternal</div>
        <div className={s.row}><div className={s.dot} style={{ background: '#7A3A8A' }} />Sibling branch</div>
        <div className={s.row}><div className={s.dot} style={{ background: '#8A5A1A' }} />Married in</div>
        <div className={s.row}><div className={s.line} />Parent–child</div>
        <div className={s.row}><div className={s.dash} />Marriage</div>
      </div>
      <div className={s.stats}>
        {people.length} people · {marriages} marriages · {families} families
      </div>
      <div ref={tooltipRef} className={s.tooltip} />
    </>
  );
}
