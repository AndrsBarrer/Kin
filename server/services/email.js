/**
 * Email service stub.
 * In production, replace the transport with a real provider (SES, SendGrid, etc.).
 * For now, all emails are logged to the console.
 */

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

export async function sendEmail({ to, subject, text, html }) {
  console.log(`\n╔══════════════════════════════════════`);
  console.log(`║  📧 EMAIL (dev stub)`);
  console.log(`║  To:      ${to}`);
  console.log(`║  Subject: ${subject}`);
  console.log(`║  Body:    ${text || '(html only)'}`);
  console.log(`╚══════════════════════════════════════\n`);
  return { messageId: `dev-${Date.now()}`, to, subject };
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
