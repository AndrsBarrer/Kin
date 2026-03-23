import process from 'node:process';
import { Resend } from 'resend';
import { normalizeLocale, translate } from './i18n.js';

const MAGIC_LINK_TTL = parseInt(process.env.MAGIC_LINK_TTL_MINUTES || '15', 10);
const EMAIL_DELIVERY_DISABLED = process.env.NODE_ENV === 'test' || process.env.KIN_DISABLE_EMAIL_DELIVERY === '1';
const RESEND_FROM = process.env.RESEND_FROM_EMAIL || process.env.EMAIL_FROM || 'Kin <onboarding@resend.dev>';

let resendClient = null;

export function getEmailDeliveryConfig() {
  return {
    disabled: EMAIL_DELIVERY_DISABLED,
    hasApiKey: Boolean(process.env.RESEND_API_KEY),
    mode: EMAIL_DELIVERY_DISABLED
      ? 'disabled'
      : process.env.RESEND_API_KEY
        ? 'resend'
        : 'stub',
    from: RESEND_FROM,
  };
}

function getResendClient() {
  if (EMAIL_DELIVERY_DISABLED) return null;
  if (!process.env.RESEND_API_KEY) return null;

  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }

  return resendClient;
}

function getFrontendUrl() {
  return (process.env.FRONTEND_URL || 'http://localhost:5173').replace(/\/$/, '');
}

function getApiBaseUrl() {
  const configured = process.env.API_BASE_URL || process.env.BACKEND_URL || 'http://localhost:3001/api';
  return configured.endsWith('/api') ? configured : `${configured.replace(/\/$/, '')}/api`;
}

function buildProposalActionUrl(actionToken, action) {
  return `${getApiBaseUrl()}/proposals/${actionToken}/${action}`;
}

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function getMagicLinkCopy(locale, isClaimFlow) {
  const prefix = isClaimFlow ? 'email.magicLink.claim' : 'email.magicLink.signIn';
  return {
    subject: translate(locale, `${prefix}.subject`),
    preheader: translate(locale, `${prefix}.preheader`),
    eyebrow: translate(locale, `${prefix}.eyebrow`),
    title: translate(locale, `${prefix}.title`),
    intro: translate(locale, `${prefix}.intro`),
    ctaLabel: translate(locale, `${prefix}.ctaLabel`),
    recipientFallback: translate(locale, `${prefix}.recipientFallback`),
    detailFor: translate(locale, `${prefix}.detailFor`),
    detailExpires: translate(locale, `${prefix}.detailExpires`),
    expiresValue: translate(locale, `${prefix}.expiresValue`, { minutes: MAGIC_LINK_TTL }),
    footerNote: translate(locale, `${prefix}.footerNote`, { minutes: MAGIC_LINK_TTL }),
    secureLink: translate(locale, `${prefix}.secureLink`),
    textGreeting: translate(locale, `${prefix}.textGreeting`),
    textAction: translate(locale, `${prefix}.textAction`),
    textExpiry: translate(locale, `${prefix}.textExpiry`, { minutes: MAGIC_LINK_TTL }),
    textIgnore: translate(locale, `${prefix}.textIgnore`),
  };
}

function buildEmailShell({ preheader, eyebrow, title, intro, ctaLabel, ctaUrl, detailRows = [], footerNote, secureLinkLabel = 'Secure link', lang = 'en' }) {
  const rowsHtml = detailRows.length > 0
    ? detailRows.map(({ label, value }) => `
          <tr>
            <td style="padding:0 0 14px;">
              <div style="font-family:Inter,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#9A948E;margin-bottom:5px;">${escapeHtml(label)}</div>
              <div style="font-family:Inter,Arial,sans-serif;font-size:14px;line-height:1.6;color:#2D2A26;">${escapeHtml(value)}</div>
            </td>
          </tr>`).join('')
    : '';

  return `<!doctype html>
<html lang="${escapeHtml(lang)}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>${escapeHtml(title)}</title>
  </head>
  <body style="margin:0;padding:0;background:#F5F1EB;color:#2D2A26;">
    <div style="display:none;max-height:0;overflow:hidden;opacity:0;visibility:hidden;">${escapeHtml(preheader)}</div>
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#F5F1EB;padding:32px 16px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:620px;">
            <tr>
              <td style="padding:0 0 16px;">
                <div style="font-family:'Playfair Display',Georgia,serif;font-size:34px;line-height:1;color:#3D7C47;text-align:center;letter-spacing:0.02em;">Kin</div>
              </td>
            </tr>
            <tr>
              <td style="background:#FDFBF8;border:1px solid #DCD5C8;border-radius:18px;padding:0;box-shadow:0 18px 44px rgba(45,42,38,0.10);overflow:hidden;">
                <div style="height:10px;background:linear-gradient(90deg,#3D7C47 0%,#8A7350 100%);"></div>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="padding:36px 34px 30px;">
                  <tr>
                    <td>
                      <div style="font-family:Inter,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:#8A7350;margin-bottom:14px;">${escapeHtml(eyebrow)}</div>
                      <h1 style="margin:0 0 14px;font-family:'Playfair Display',Georgia,serif;font-size:32px;line-height:1.2;color:#2D2A26;font-weight:600;">${escapeHtml(title)}</h1>
                      <p style="margin:0 0 24px;font-family:Inter,Arial,sans-serif;font-size:15px;line-height:1.75;color:#5E5850;">${escapeHtml(intro)}</p>
                    </td>
                  </tr>
                  ${rowsHtml}
                  <tr>
                    <td style="padding:10px 0 28px;">
                      <a href="${escapeHtml(ctaUrl)}" style="display:inline-block;padding:14px 24px;border-radius:10px;background:#3D7C47;color:#ffffff;text-decoration:none;font-family:Inter,Arial,sans-serif;font-size:14px;font-weight:700;">${escapeHtml(ctaLabel)}</a>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:0 0 22px;">
                      <div style="padding:16px 18px;background:#F0EBE2;border:1px solid #DCD5C8;border-radius:12px;">
                        <div style="font-family:Inter,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#9A948E;margin-bottom:6px;">${escapeHtml(secureLinkLabel)}</div>
                        <div style="font-family:Inter,Arial,sans-serif;font-size:13px;line-height:1.7;color:#3A72A0;word-break:break-all;">${escapeHtml(ctaUrl)}</div>
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="border-top:1px solid #DCD5C8;padding-top:18px;">
                      <p style="margin:0;font-family:Inter,Arial,sans-serif;font-size:12px;line-height:1.7;color:#9A948E;">${escapeHtml(footerNote)}</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

export async function sendEmail({ to, subject, text, html }) {
  const resend = getResendClient();

  if (!resend) {
    const config = getEmailDeliveryConfig();
    console.log(`\n╔══════════════════════════════════════`);
    console.log(`║  📧 EMAIL (delivery stub)`);
    console.log(`║  Reason:  ${config.disabled ? 'delivery disabled' : 'missing RESEND_API_KEY'}`);
    console.log(`║  To:      ${to}`);
    console.log(`║  Subject: ${subject}`);
    console.log(`║  Body:    ${text || '(html only)'}`);
    console.log(`╚══════════════════════════════════════\n`);
    return { messageId: `dev-${Date.now()}`, to, subject, provider: 'stub' };
  }

  const { data, error } = await resend.emails.send({
    from: RESEND_FROM,
    to,
    subject,
    text,
    html,
  });

  if (error) {
    throw new Error(error.message || 'Failed to send email with Resend');
  }

  console.log(`[Kin Email] Sent via Resend to ${to} (${data?.id || 'no-id'})`);

  return { messageId: data?.id || null, to, subject, provider: 'resend' };
}

export async function sendMagicLinkEmail(to, magicLink, options = {}) {
  const isClaimFlow = Boolean(options.claimToken);
  const copy = getMagicLinkCopy(options.locale, isClaimFlow);
  const recipientName = options.displayName?.trim() || copy.recipientFallback;
  const detailRows = [
    { label: copy.detailFor, value: recipientName },
    { label: copy.detailExpires, value: copy.expiresValue },
  ];
  const html = buildEmailShell({
    preheader: copy.preheader,
    eyebrow: copy.eyebrow,
    title: copy.title,
    intro: copy.intro,
    ctaLabel: copy.ctaLabel,
    ctaUrl: magicLink,
    detailRows,
    footerNote: copy.footerNote,
    secureLinkLabel: copy.secureLink,
    lang: normalizeLocale(options.locale),
  });
  const text = [
    `${copy.textGreeting} ${recipientName},`,
    '',
    copy.intro,
    '',
    `${copy.textAction}: ${magicLink}`,
    '',
    copy.textExpiry,
    copy.textIgnore,
  ].join('\n');

  return sendEmail({
    to,
    subject: copy.subject,
    text,
    html,
  });
}

/**
 * Send a notification that someone proposed an edit to a claimed profile.
 */
export async function sendProposalNotification(ownerEmail, proposerName, profileName, proposalSummary, actionToken) {
  const acceptUrl = buildProposalActionUrl(actionToken, 'accept');
  const rejectUrl = buildProposalActionUrl(actionToken, 'reject');
  const reviewUrl = `${getFrontendUrl()}/?proposal=pending`;

  return sendEmail({
    to: ownerEmail,
    subject: `[Kin] ${proposerName} suggested an edit to ${profileName}`,
    text: `${proposerName} has proposed the following change to ${profileName}:\n\n${proposalSummary}\n\nApprove in one click:\n${acceptUrl}\n\nReject in one click:\n${rejectUrl}\n\nOpen Kin:\n${reviewUrl}`,
  });
}

/**
 * Send a weekly digest email.
 */
export async function sendDigestEmail(to, digestItems) {
  const lines = digestItems.map(item => `• ${item}`).join('\n');
  return sendEmail({
    to,
    subject: `[Kin] Your weekly family update`,
    text: `Here's what happened this week:\n\n${lines}`,
  });
}
