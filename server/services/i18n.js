import { createInstance } from 'i18next';

const DEFAULT_LOCALE = 'en';
const SUPPORTED_LOCALES = ['en', 'es'];

const resources = {
  en: {
    translation: {
      auth: {
        emailRequired: 'Email is required',
        noAccount: 'No account exists for this email yet. Create an account first or use a tree access code.',
        missingDisplayName: 'Enter your full name to create an account',
        defaultTreeName: 'My Family Tree',
        defaultTreeDescription: 'Created automatically when your Kin account was set up',
      },
      email: {
        magicLink: {
          claim: {
            subject: '[Kin] Claim your place in the family tree',
            preheader: 'Claim your place in Kin with a secure magic link.',
            eyebrow: 'Family Invitation',
            title: 'Your branch is ready',
            intro: 'A place in the tree is waiting for you. Use this secure link to claim your profile in Kin and step into your shared family history.',
            ctaLabel: 'Claim My Place',
            recipientFallback: 'there',
            detailFor: 'For',
            detailExpires: 'Expires',
            expiresValue: 'In {{minutes}} minutes',
            footerNote: 'If you did not request this link, you can safely ignore this email. The link expires automatically in {{minutes}} minutes.',
            secureLink: 'Secure link',
            textGreeting: 'Hi',
            textAction: 'Claim your place',
            textExpiry: 'This link expires in {{minutes}} minutes.',
            textIgnore: 'If you did not request it, you can ignore this email.',
          },
          signIn: {
            subject: '[Kin] Your secure Kin sign-in link',
            preheader: 'Your Kin magic link is ready.',
            eyebrow: 'Secure Sign-In',
            title: 'Your sign-in link is ready',
            intro: 'Use this secure link to sign back in to Kin and continue exploring the people, stories, and branches that connect your family.',
            ctaLabel: 'Open Kin',
            recipientFallback: 'there',
            detailFor: 'For',
            detailExpires: 'Expires',
            expiresValue: 'In {{minutes}} minutes',
            footerNote: 'If you did not request this link, you can safely ignore this email. The link expires automatically in {{minutes}} minutes.',
            secureLink: 'Secure link',
            textGreeting: 'Hi',
            textAction: 'Open Kin',
            textExpiry: 'This link expires in {{minutes}} minutes.',
            textIgnore: 'If you did not request it, you can ignore this email.',
          },
        },
      },
    },
  },
  es: {
    translation: {
      auth: {
        emailRequired: 'El correo es obligatorio',
        noAccount: 'Todavia no existe una cuenta para este correo. Primero crea una cuenta o usa un codigo de acceso del arbol.',
        missingDisplayName: 'Ingresa tu nombre completo para crear una cuenta',
        defaultTreeName: 'Mi arbol familiar',
        defaultTreeDescription: 'Creado automaticamente cuando se configuro tu cuenta de Kin',
      },
      email: {
        magicLink: {
          claim: {
            subject: '[Kin] Reclama tu lugar en el arbol familiar',
            preheader: 'Reclama tu lugar en Kin con un enlace magico seguro.',
            eyebrow: 'Invitacion familiar',
            title: 'Tu rama ya esta lista',
            intro: 'Hay un lugar en el arbol esperandote. Usa este enlace seguro para reclamar tu perfil en Kin y entrar en tu historia familiar compartida.',
            ctaLabel: 'Reclamar mi lugar',
            recipientFallback: 'hola',
            detailFor: 'Para',
            detailExpires: 'Vence',
            expiresValue: 'En {{minutes}} minutos',
            footerNote: 'Si no solicitaste este enlace, puedes ignorar este correo con tranquilidad. El enlace vence automaticamente en {{minutes}} minutos.',
            secureLink: 'Enlace seguro',
            textGreeting: 'Hola',
            textAction: 'Reclama tu lugar',
            textExpiry: 'Este enlace vence en {{minutes}} minutos.',
            textIgnore: 'Si no lo solicitaste, puedes ignorar este correo.',
          },
          signIn: {
            subject: '[Kin] Tu enlace seguro para iniciar sesion en Kin',
            preheader: 'Tu enlace magico de Kin ya esta listo.',
            eyebrow: 'Acceso seguro',
            title: 'Tu enlace de acceso esta listo',
            intro: 'Usa este enlace seguro para volver a entrar a Kin y seguir explorando las personas, historias y ramas que conectan a tu familia.',
            ctaLabel: 'Abrir Kin',
            recipientFallback: 'hola',
            detailFor: 'Para',
            detailExpires: 'Vence',
            expiresValue: 'En {{minutes}} minutos',
            footerNote: 'Si no solicitaste este enlace, puedes ignorar este correo con tranquilidad. El enlace vence automaticamente en {{minutes}} minutos.',
            secureLink: 'Enlace seguro',
            textGreeting: 'Hola',
            textAction: 'Abrir Kin',
            textExpiry: 'Este enlace vence en {{minutes}} minutos.',
            textIgnore: 'Si no lo solicitaste, puedes ignorar este correo.',
          },
        },
      },
    },
  },
};

const i18n = createInstance();

i18n.init({
  lng: DEFAULT_LOCALE,
  fallbackLng: DEFAULT_LOCALE,
  supportedLngs: SUPPORTED_LOCALES,
  resources,
  initImmediate: false,
  interpolation: {
    escapeValue: false,
  },
});

export function normalizeLocale(locale) {
  const normalized = String(locale || '').trim().slice(0, 2).toLowerCase();
  return SUPPORTED_LOCALES.includes(normalized) ? normalized : DEFAULT_LOCALE;
}

export function translate(locale, key, options = {}) {
  return i18n.t(key, {
    lng: normalizeLocale(locale),
    ...options,
  });
}
