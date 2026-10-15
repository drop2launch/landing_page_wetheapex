"use client";

import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { chatFaqs, chatTopics, faqById, relatedFaqs, type ChatTopic } from "@/content/chat-faq";
import { site } from "@/lib/site";
import { Icon } from "./Icon";
import { LogoTile } from "./Logo";

type Message = {
  role: "user" | "assistant";
  content: string;
  link?: { label: string; href: string };
  related?: string[]; // ids of follow-up questions
};

const greeting: Message = {
  role: "assistant",
  content: `Hi, I'm the ${site.name} AI assistant, an automated helper. Pick a topic below or type your own question. For anything I can't answer, a person is one click away.`,
};

// Turns site paths in an answer ("/contact", "/services") into links.
function withLinks(text: string) {
  return text.split(/(\/(?:contact|services|industries|locations|security|about|case-studies)[a-z0-9\-/#]*)/g).map((part, i) =>
    i % 2 ? (
      <Link key={i} href={part} className="text-accent-dark underline underline-offset-2">
        {part}
      </Link>
    ) : (
      <Fragment key={i}>{part}</Fragment>
    ),
  );
}

// Site assistant. Prepared questions are answered instantly from src/content/chat-faq.ts.
// Typed questions go to our own /api/chat route; any AI provider key stays on the server.
export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([greeting]);
  const [topic, setTopic] = useState<ChatTopic>(chatTopics[0]);
  const [input, setInput] = useState("");
  const [busy, setBusy] = useState(false);
  const logRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (open) inputRef.current?.focus();
  }, [open]);

  useEffect(() => {
    logRef.current?.scrollTo({ top: logRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, busy]);

  const close = () => {
    setOpen(false);
    toggleRef.current?.focus();
  };

  const asked = messages.filter((m) => m.role === "user").map((m) => m.content);

  // A prepared question: answer straight away, no network call.
  function askPrepared(id: string) {
    const faq = faqById(id);
    if (!faq || busy) return;
    const alreadyAsked = chatFaqs.filter((f) => asked.includes(f.q)).map((f) => f.id);
    setMessages((m) => [
      ...m,
      { role: "user", content: faq.q },
      { role: "assistant", content: faq.a, link: faq.link, related: relatedFaqs(faq.id, alreadyAsked).map((f) => f.id) },
    ]);
  }

  // A typed question: ask the server.
  async function send(text: string) {
    const content = text.trim().slice(0, 500);
    if (!content || busy) return;
    const next = [...messages, { role: "user" as const, content }];
    setMessages(next);
    setInput("");
    setBusy(true);
    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        // The greeting is interface text only; send the real conversation, most recent turns.
        body: JSON.stringify({ messages: next.slice(1).slice(-10).map(({ role, content }) => ({ role, content })) }),
      });
      const data = await res.json();
      setMessages([
        ...next,
        { role: "assistant", content: data.reply ?? data.error ?? "Sorry, something went wrong.", link: data.link, related: data.related },
      ]);
    } catch {
      setMessages([...next, { role: "assistant", content: `Sorry, I couldn't reach the server. You can email us at ${site.email}.` }]);
    } finally {
      setBusy(false);
    }
  }

  const started = messages.length > 1;
  const last = messages[messages.length - 1];
  const followUps = !busy && last.role === "assistant" ? (last.related ?? []).map(faqById).filter((f) => f && !asked.includes(f.q)) : [];

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-3 lg:bottom-4">
      {open && (
        <div
          role="dialog"
          aria-label={`${site.name} assistant`}
          onKeyDown={(e) => e.key === "Escape" && close()}
          className="flex h-[38rem] max-h-[calc(100vh-9rem)] w-[calc(100vw-2rem)] max-w-[26rem] flex-col overflow-hidden rounded-3xl border border-line bg-white shadow-lift lg:max-h-[calc(100vh-6rem)]"
        >
          {/* Header */}
          <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4">
            <div className="flex items-center gap-3">
              <LogoTile className="h-9 w-9" />
              <div>
                <p className="text-[0.95rem] font-normal text-primary">Ask {site.name}</p>
                <p className="flex items-center gap-1.5 text-xs text-muted">
                  <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" />
                  AI assistant · not a person
                </p>
              </div>
            </div>
            <div className="flex items-center gap-1">
              {started && (
                <button
                  type="button"
                  onClick={() => setMessages([greeting])}
                  className="rounded-full px-3 py-1.5 text-xs text-muted hover:bg-primary-soft hover:text-primary"
                >
                  Start over
                </button>
              )}
              <button type="button" onClick={close} className="rounded-full p-2 text-muted hover:bg-primary-soft hover:text-primary" aria-label="Close chat">
                <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>

          {/* Conversation */}
          <div ref={logRef} role="log" aria-live="polite" className="flex-1 space-y-3 overflow-y-auto px-5 py-5">
            {messages.map((m, i) => (
              <div key={i} className={m.role === "user" ? "flex justify-end" : ""}>
                <div
                  className={`max-w-[88%] rounded-2xl px-4 py-2.5 text-[0.92rem] leading-relaxed ${
                    m.role === "user" ? "rounded-br-md bg-primary text-white" : "rounded-bl-md bg-primary-soft text-ink"
                  }`}
                >
                  <span className="sr-only">{m.role === "user" ? "You: " : "Assistant: "}</span>
                  {m.role === "assistant" ? withLinks(m.content) : m.content}
                  {m.link && (
                    <Link
                      href={m.link.href}
                      onClick={() => setOpen(false)}
                      className="mt-2.5 flex w-fit items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[0.85rem] text-primary hover:text-accent-dark"
                    >
                      {m.link.label}
                      <Icon name="arrow" className="h-3.5 w-3.5" />
                    </Link>
                  )}
                </div>
              </div>
            ))}

            {busy && (
              <p className="flex w-fit items-center gap-1 rounded-2xl rounded-bl-md bg-primary-soft px-4 py-3.5" aria-label="Assistant is typing">
                {[0, 1, 2].map((d) => (
                  <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" style={{ animationDelay: `${d * 0.15}s` }} />
                ))}
              </p>
            )}

            {/* Follow-up suggestions after an answer */}
            {started && followUps.length > 0 && (
              <div className="pt-1">
                <p className="mb-2 text-xs text-muted">People also ask</p>
                <ul className="space-y-1.5">
                  {followUps.map(
                    (f) =>
                      f && (
                        <li key={f.id}>
                          <button
                            type="button"
                            onClick={() => askPrepared(f.id)}
                            className="flex w-full items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-2.5 text-left text-[0.88rem] text-primary transition-colors hover:border-primary"
                          >
                            {f.q}
                            <Icon name="arrow" className="h-3.5 w-3.5 shrink-0 text-muted" />
                          </button>
                        </li>
                      ),
                  )}
                </ul>
              </div>
            )}

            {/* Topic browser: shown at the start, and again via "Browse topics" */}
            {!started && (
              <div className="pt-1">
                <div role="tablist" aria-label="Topics" className="flex flex-wrap gap-1.5">
                  {chatTopics.map((t) => (
                    <button
                      key={t}
                      type="button"
                      role="tab"
                      aria-selected={t === topic}
                      onClick={() => setTopic(t)}
                      className={`rounded-full px-3 py-1.5 text-[0.82rem] transition-colors ${
                        t === topic ? "bg-primary text-white" : "border border-line text-ink hover:border-primary"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
                <ul className="mt-3 space-y-1.5">
                  {chatFaqs
                    .filter((f) => f.topic === topic)
                    .map((f) => (
                      <li key={f.id}>
                        <button
                          type="button"
                          onClick={() => askPrepared(f.id)}
                          className="flex w-full items-center justify-between gap-3 rounded-xl border border-line px-3.5 py-2.5 text-left text-[0.88rem] text-primary transition-colors hover:border-primary"
                        >
                          {f.q}
                          <Icon name="arrow" className="h-3.5 w-3.5 shrink-0 text-muted" />
                        </button>
                      </li>
                    ))}
                </ul>
              </div>
            )}
          </div>

          {/* Composer */}
          <div className="border-t border-line px-4 pb-3 pt-3">
            <form
              className="flex items-center gap-2 rounded-full border border-line bg-white py-1 pl-4 pr-1 focus-within:border-primary"
              onSubmit={(e) => {
                e.preventDefault();
                send(input);
              }}
            >
              <label htmlFor="chat-input" className="sr-only">
                Your question
              </label>
              <input
                id="chat-input"
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                maxLength={500}
                placeholder="Type your question"
                autoComplete="off"
                className="min-w-0 flex-1 bg-transparent py-2 text-[0.92rem] text-ink outline-none placeholder:text-muted"
              />
              <button
                type="submit"
                disabled={busy || !input.trim()}
                aria-label="Send"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary text-white transition-opacity disabled:opacity-30"
              >
                <Icon name="arrow" className="h-4 w-4 -rotate-90" />
              </button>
            </form>
            <div className="mt-2.5 flex items-center justify-between gap-3 px-1 text-xs text-muted">
              <span>Prefer to talk it through?</span>
              <Link href="/contact" onClick={() => setOpen(false)} className="text-primary underline decoration-accent underline-offset-4 hover:text-accent-dark">
                Book a free call
              </Link>
            </div>
          </div>
        </div>
      )}

      <button
        ref={toggleRef}
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="btn btn-dark h-12 w-12 gap-2.5 px-0 shadow-lift sm:w-auto sm:px-5"
      >
        <span className="flex items-center justify-center">
          <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z" />
          </svg>
        </span>
        {/* Icon only on phones so the button does not cover page text */}
        <span className="sr-only sm:not-sr-only">{open ? "Close chat" : "Ask a question"}</span>
      </button>
    </div>
  );
}
