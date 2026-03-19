/**
 * Email service stub.
 * In production, replace the transport with a real provider (SES, SendGrid, etc.).
 * For now, all emails are logged to the console.
 */

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
export async function sendProposalNotification(ownerEmail, proposerName, profileName, proposalSummary) {
  return sendEmail({
    to: ownerEmail,
    subject: `[Kin] ${proposerName} suggested an edit to ${profileName}`,
    text: `${proposerName} has proposed the following change to ${profileName}:\n\n${proposalSummary}\n\nLog in to review this proposal.`,
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
