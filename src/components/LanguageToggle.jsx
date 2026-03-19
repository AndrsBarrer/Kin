import { useTranslation } from 'react-i18next';

const colors = {
  active: '#4A5D23',
  background: '#F9F7F2',
  border: '#D8D2C4',
  text: '#3D3A34',
  muted: '#766F63',
  shadow: 'rgba(43, 52, 25, 0.12)',
};

function getButtonStyle(isActive, isFirst, isLast) {
  return {
    appearance: 'none',
    border: 'none',
    background: isActive ? colors.active : 'transparent',
    color: isActive ? colors.background : colors.text,
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
    transition: 'background 160ms ease, color 160ms ease, transform 160ms ease',
  };
}

export default function LanguageToggle() {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language?.slice(0, 2) === 'es' ? 'es' : 'en';

  const handleLanguageChange = async (language) => {
    if (language === currentLanguage) return;
    await i18n.changeLanguage(language);
  };

  return (
    <div
      role="group"
      aria-label="Language switcher"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: 3,
        borderRadius: 999,
        background: colors.background,
        border: `1px solid ${colors.border}`,
        boxShadow: `0 4px 12px ${colors.shadow}`,
        flexShrink: 0,
      }}
    >
      <button
        type="button"
        onClick={() => handleLanguageChange('en')}
        aria-pressed={currentLanguage === 'en'}
        aria-label="Switch language to English"
        style={getButtonStyle(currentLanguage === 'en', true, false)}
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => handleLanguageChange('es')}
        aria-pressed={currentLanguage === 'es'}
        aria-label="Cambiar idioma a espanol"
        style={getButtonStyle(currentLanguage === 'es', false, true)}
      >
        ES
      </button>
    </div>
  );
}