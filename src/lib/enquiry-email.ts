// Builds the email you receive when someone submits the contact form.
// Plain tables and inline styles only, because email apps ignore most modern CSS.
// Kept deliberately simple for inbox placement: no hidden text, no tracking, no images,
// and no links at all. You answer by pressing Reply.

export type Enquiry = {
  name: string;
  email: string;
  company: string;
  size: string;
  tools: string;
  problem: string;
  budget: string;
  interest?: string;
};

const esc = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

const oneLine = (s: string) => s.replace(/[\r\n]+/g, " ").trim();

export function buildEnquiryEmail(e: Enquiry, siteName: string) {
  const firstName = oneLine(e.name).split(" ")[0];
  const subject = `Website enquiry from ${oneLine(e.name)} at ${oneLine(e.company)}`;
  const received = new Date().toLocaleString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "Asia/Dubai",
  });

  const summary: [string, string][] = [
    ["Interested in", e.interest || "Not specified"],
    ["Company size", `${e.size} people`],
    ["Budget", e.budget],
  ];
  const contact: [string, string][] = [
    ["Name", e.name],
    ["Email", e.email],
    ["Company", e.company],
    ["Tools they use", e.tools || "Not given"],
  ];

  const text = [
    `${e.name} from ${e.company} sent an enquiry through the ${siteName} website.`,
    "",
    ...summary.map(([k, v]) => `${k}: ${v}`),
    "",
    ...contact.map(([k, v]) => `${k}: ${v}`),
    "",
    "What they would like to fix:",
    e.problem,
    "",
    `To answer, reply to this email. Your reply goes to ${e.email}.`,
    "",
    `Received ${received} (UAE time) through the contact form.`,
  ].join("\n");

  // Visual design: a plain white, left-aligned notification in the manner of Stripe or Linear.
  // No card, no coloured panels. Hierarchy comes from type size, weight and hairlines only.
  const ink = "#0b1b2b";
  const body = "#27333f";
  const muted = "#6b7785";
  const line = "#e9edf1";
  const accent = "#0e7c7b";
  const font = "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;";
  const label = `${font}font-size:11px;line-height:16px;letter-spacing:0.08em;text-transform:uppercase;color:${muted};`;

  const details: [string, string][] = [...summary, ...contact];
  const detailRows = details
    .map(
      ([k, v]) => `<tr>
          <td valign="top" style="${font}padding:9px 0;font-size:14px;line-height:22px;color:${muted};width:150px;">${k}</td>
          <td valign="top" style="${font}padding:9px 0;font-size:15px;line-height:22px;color:${ink};">${esc(v)}</td>
        </tr>`,
    )
    .join("");

  const rule = `<tr><td style="padding:28px 0 0;"><div style="height:1px;line-height:1px;font-size:1px;background:${line};">&nbsp;</div></td></tr>`;

  const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<title>${esc(subject)}</title>
</head>
<body style="margin:0;padding:0;background:#ffffff;">
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#ffffff;">
    <tr><td style="padding:40px 24px 48px;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

        <tr><td>
          <table role="presentation" cellpadding="0" cellspacing="0"><tr>
            <td width="28" height="28" align="center" valign="middle" style="${font}background:${ink};border-radius:7px;color:#ffffff;font-size:16px;line-height:26px;font-weight:700;">w</td>
            <td style="${font}padding-left:10px;font-size:16px;line-height:28px;color:${ink};letter-spacing:-0.01em;">wethe<strong>apex</strong></td>
          </tr></table>
        </td></tr>

        <tr><td style="padding:40px 0 0;">
          <div style="${label}color:${accent};">New enquiry</div>
          <h1 style="${font}margin:10px 0 0;font-size:28px;line-height:34px;font-weight:600;color:${ink};letter-spacing:-0.025em;">${esc(e.name)}</h1>
          <div style="${font}margin:6px 0 0;font-size:16px;line-height:24px;color:${muted};">${esc(e.company)} &nbsp;·&nbsp; ${esc(received)} UAE</div>
        </td></tr>

        ${rule}

        <tr><td style="padding:24px 0 0;">
          <div style="${label}">Message</div>
          <div style="${font}margin:10px 0 0;font-size:17px;line-height:28px;color:${body};">${esc(e.problem).replace(/\n/g, "<br>")}</div>
        </td></tr>

        ${rule}

        <tr><td style="padding:24px 0 0;">
          <div style="${label}">Details</div>
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:6px;">${detailRows}</table>
        </td></tr>

        ${rule}

        <tr><td style="padding:24px 0 0;">
          <div style="${font}font-size:15px;line-height:24px;color:${body};"><strong style="color:${ink};">Reply to this email to answer ${esc(firstName)}.</strong> Your reply is sent to the address above, not to this notification.</div>
        </td></tr>

        <tr><td style="padding:40px 0 0;">
          <div style="${font}font-size:12px;line-height:18px;color:${muted};">Sent automatically by the contact form on ${esc(siteName)}.</div>
        </td></tr>

      </table>
    </td></tr>
  </table>
</body>
</html>`;

  return { subject, text, html };
}
