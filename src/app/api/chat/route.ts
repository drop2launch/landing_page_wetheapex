import { ruleBasedReply, systemPrompt } from "@/lib/chat-knowledge";
import { clientIp, rateLimit } from "@/lib/rate-limit";

// Demo chatbot endpoint.
// - Without an API key it answers from simple rules (src/lib/chat-knowledge.ts).
// - With ANTHROPIC_API_KEY set (server-side env var only) it calls the AI provider.
// To use a different provider, replace `askProvider` and keep the key in a server env var.

type Message = { role: "user" | "assistant"; content: string };

function parseMessages(body: unknown): Message[] | null {
  const raw = (body as { messages?: unknown })?.messages;
  if (!Array.isArray(raw) || raw.length === 0 || raw.length > 12) return null;
  const messages: Message[] = [];
  for (const m of raw) {
    if (!m || (m.role !== "user" && m.role !== "assistant") || typeof m.content !== "string") return null;
    const content = m.content.trim().slice(0, 500);
    if (!content) return null;
    messages.push({ role: m.role, content });
  }
  // The provider expects the conversation to start and end with the visitor.
  while (messages.length && messages[0].role !== "user") messages.shift();
  if (!messages.length || messages[messages.length - 1].role !== "user") return null;
  return messages;
}

async function askProvider(messages: Message[], apiKey: string) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": apiKey,
      "anthropic-version": "2023-06-01",
    },
    body: JSON.stringify({
      model: process.env.CHAT_MODEL || "claude-haiku-5-5",
      max_tokens: 300,
      system: systemPrompt,
      messages,
    }),
    signal: AbortSignal.timeout(20_000),
  });
  if (!res.ok) throw new Error(`Provider returned ${res.status}`);
  const data = await res.json();
  const text = Array.isArray(data.content)
    ? data.content
        .filter((b: { type?: string }) => b.type === "text")
        .map((b: { text?: string }) => b.text ?? "")
        .join("")
        .trim()
    : "";
  if (!text) throw new Error("Provider returned no text");
  return text;
}

export async function POST(req: Request) {
  if (!rateLimit(`chat:${clientIp(req)}`, 15, 60_000)) {
    return Response.json({ error: "Too many messages. Please wait a minute and try again." }, { status: 429 });
  }

  const messages = parseMessages(await req.json().catch(() => null));
  if (!messages) {
    return Response.json({ error: "Invalid request." }, { status: 400 });
  }

  const question = messages[messages.length - 1].content;
  const apiKey = process.env.ANTHROPIC_API_KEY;
  if (!apiKey) {
    return Response.json({ ...ruleBasedReply(question), mode: "rules" });
  }

  try {
    return Response.json({ reply: await askProvider(messages, apiKey), mode: "ai" });
  } catch (err) {
    console.error("[chat] provider error:", err);
    // Fall back to the rule-based answer so the widget keeps working.
    return Response.json({ ...ruleBasedReply(question), mode: "rules" });
  }
}
