import process from 'node:process';
import { Resend } from 'resend';

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

function buildEmailShell({ preheader, eyebrow, title, intro, ctaLabel, ctaUrl, detailRows = [], footerNote }) {
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
<html lang="en">
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
                        <div style="font-family:Inter,Arial,sans-serif;font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:#9A948E;margin-bottom:6px;">Secure link</div>
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
  const recipientName = options.displayName?.trim() || 'there';
  const isClaimFlow = Boolean(options.claimToken);
  const subject = isClaimFlow
    ? '[Kin] Claim your place in the family tree'
    : '[Kin] Your secure Kin sign-in link';
  const intro = isClaimFlow
    ? `A place in the tree is waiting for you. Use this secure link to claim your profile in Kin and step into your shared family history.`
    : `Use this secure link to sign back in to Kin and continue exploring the people, stories, and branches that connect your family.`;
  const detailRows = [
    { label: 'For', value: recipientName },
    { label: 'Expires', value: `In ${MAGIC_LINK_TTL} minutes` },
  ];
  const footerNote = `If you did not request this link, you can safely ignore this email. The link expires automatically in ${MAGIC_LINK_TTL} minutes.`;
  const html = buildEmailShell({
    preheader: isClaimFlow ? 'Claim your place in Kin with a secure magic link.' : 'Your Kin magic link is ready.',
    eyebrow: isClaimFlow ? 'Family Invitation' : 'Secure Sign-In',
    title: isClaimFlow ? 'Your branch is ready' : 'Your sign-in link is ready',
    intro,
    ctaLabel: isClaimFlow ? 'Claim My Place' : 'Open Kin',
    ctaUrl: magicLink,
    detailRows,
    footerNote,
  });
  const text = [
    `Hi ${recipientName},`,
    '',
    intro,
    '',
    `${isClaimFlow ? 'Claim your place' : 'Open Kin'}: ${magicLink}`,
    '',
    `This link expires in ${MAGIC_LINK_TTL} minutes.`,
    'If you did not request it, you can ignore this email.',
  ].join('\n');

  return sendEmail({
    to,
    subject,
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
