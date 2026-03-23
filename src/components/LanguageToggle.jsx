import { useTranslation } from 'react-i18next';

function getButtonStyle(isActive, isFirst, isLast) {
  return {
    appearance: 'none',
    border: 'none',
    background: isActive ? 'linear-gradient(135deg, var(--green) 0%, var(--green-light) 100%)' : 'transparent',
    color: isActive ? '#fff' : 'var(--text)',
    cursor: isActive ? 'default' : 'pointer',
    fontFamily: "'Inter', sans-serif",
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: '0.08em',
    lineHeight: 1,
    minHeight: 30,
    minWidth: 34,
    padding: '0 10px',
    borderRadius: isFirst ? '999px 0 0 999px' : isLast ? '0 999px 999px 0' : 0,
    boxShadow: isActive ? '0 10px 20px color-mix(in srgb, var(--green) 22%, transparent)' : 'none',
    transition: 'background 160ms ease, color 160ms ease, transform 160ms ease, box-shadow 160ms ease',
  };
}

export default function LanguageToggle({ currentLanguage: controlledLanguage = null, onLanguageChange = null }) {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language?.slice(0, 2) === 'es' ? 'es' : 'en';
  const activeLanguage = controlledLanguage || currentLanguage;

  const handleLanguageChange = async (language) => {
    if (language === activeLanguage) return;
    if (onLanguageChange) {
      await onLanguageChange(language);
      return;
    }
    await i18n.changeLanguage(language);
  };

  return (
    <div
      role="group"
      aria-label={t('languageToggle.label')}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: 3,
        borderRadius: 999,
        background: 'var(--ui-shell-surface-soft)',
        border: '1px solid var(--ui-shell-border)',
        boxShadow: '0 8px 18px var(--ui-shell-shadow)',
        flexShrink: 0,
      }}
    >
      <button
        type="button"
        onClick={() => handleLanguageChange('en')}
        aria-pressed={activeLanguage === 'en'}
        aria-label={t('languageToggle.english')}
        style={getButtonStyle(activeLanguage === 'en', true, false)}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleLanguageChange('es')}
        aria-pressed={activeLanguage === 'es'}
        aria-label={t('languageToggle.spanish')}
        style={getButtonStyle(activeLanguage === 'es', false, true)}
      >
        ES
      </button>
    </div>
  );
}