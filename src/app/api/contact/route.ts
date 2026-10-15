import { buildEnquiryEmail } from "@/lib/enquiry-email";
import { clientIp, rateLimit } from "@/lib/rate-limit";
import { site } from "@/lib/site";

// Contact form endpoint: validates, filters spam, then emails the enquiry via Resend.
// Required env vars: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL (a verified sender).

const limits = { name: 100, email: 200, company: 150, size: 40, tools: 300, problem: 3000, budget: 40, interest: 80 } as const;
const required = ["name", "email", "company", "size", "problem", "budget"] as const;

export async function POST(req: Request) {
  if (!rateLimit(`contact:${clientIp(req)}`, 5, 10 * 60_000)) {
    return Response.json({ error: "Too many submissions. Please try again later." }, { status: 429 });
  }

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body) return Response.json({ error: "Invalid request." }, { status: 400 });

  // Spam checks: the hidden field must be empty and the form must have been open for a few seconds.
  // Bots get a normal-looking success so they do not retry.
  const startedAt = Number(body.startedAt);
  const tooFast = !startedAt || Date.now() - startedAt < 2000;
  if ((typeof body.website === "string" && body.website !== "") || tooFast) {
    return Response.json({ ok: true });
  }

  const fields = {} as Record<keyof typeof limits, string>;
  for (const key of Object.keys(limits) as (keyof typeof limits)[]) {
    const value = typeof body[key] === "string" ? (body[key] as string).trim() : "";
    if (value.length > limits[key]) {
      return Response.json({ error: `The ${key} field is too long.` }, { status: 400 });
    }
    fields[key] = value;
  }
  for (const key of required) {
    if (!fields[key]) return Response.json({ error: "Please fill in all required fields." }, { status: 400 });
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    return Response.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    if (process.env.NODE_ENV !== "production") {
      // Local development without email set up: log the enquiry so the flow can be tested.
      console.info("[contact] email not configured; enquiry received:", fields);
      return Response.json({ ok: true });
    }
    console.error("[contact] RESEND_API_KEY, CONTACT_TO_EMAIL or CONTACT_FROM_EMAIL is missing");
    return Response.json({ error: "The form is not set up yet." }, { status: 503 });
  }

  const message = buildEnquiryEmail(fields, site.name);

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from: `${site.name} website <${from}>`,
      to: [to],
      reply_to: fields.email,
      subject: message.subject,
      text: message.text,
      html: message.html,
    }),
    signal: AbortSignal.timeout(15_000),
  }).catch((err) => {
    console.error("[contact] could not reach Resend:", err);
    return null;
  });

  if (!res?.ok) {
    if (res) console.error("[contact] Resend error:", res.status, await res.text().catch(() => ""));
    return Response.json({ error: "We could not send your message." }, { status: 502 });
  }
  return Response.json({ ok: true });
}
