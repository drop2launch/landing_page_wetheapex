"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { Icon, type IconName } from "./Icon";

type Actor = "Trigger" | "AI" | "Rule" | "System" | "Your team";
type FlowStep = { icon: IconName; title: string; detail: string; actor: Actor; result: string };

// Three example automations. All content is illustrative sample data.
const flows: { tab: string; summary: string; steps: FlowStep[] }[] = [
  {
    tab: "Phone call",
    summary: "Call answered, appointment booked and confirmed. Your team gets the summary in the morning.",
    steps: [
      { icon: "phone", title: "A customer calls", detail: "After hours, lines busy", actor: "Trigger", result: "Answered" },
      { icon: "chat", title: "AI voice agent answers", detail: "Understands the request", actor: "AI", result: "Wants to book" },
      { icon: "compass", title: "Calendar checked", detail: "Real availability, live", actor: "System", result: "Slot found" },
      { icon: "bolt", title: "Appointment booked", detail: "Confirmed by message", actor: "AI", result: "Confirmed" },
      { icon: "users", title: "Summary sent to your team", detail: "Or the call, if it is urgent", actor: "Your team", result: "Logged" },
    ],
  },
  {
    tab: "Enquiry to CRM",
    summary: "Lead captured, scored and handed to sales with a reply ready to send.",
    steps: [
      { icon: "inbox", title: "New enquiry arrives", detail: "Website, WhatsApp or email", actor: "Trigger", result: "Received" },
      { icon: "bolt", title: "AI reads and sorts it", detail: "Intent, urgency, customer", actor: "AI", result: "Demo request · urgent" },
      { icon: "shield", title: "Checked against your rules", detail: "Fit, priority, owner", actor: "Rule", result: "Good fit · sales" },
      { icon: "database", title: "Added to your CRM", detail: "With the full history", actor: "System", result: "Record created" },
      { icon: "bell", title: "Right person notified", detail: "With a drafted reply", actor: "Your team", result: "Ready to review" },
    ],
  },
  {
    tab: "Invoice to ERP",
    summary: "Invoice read, matched and posted. Finance only sees the exceptions.",
    steps: [
      { icon: "inbox", title: "Invoice arrives by email", detail: "PDF or scan", actor: "Trigger", result: "Received" },
      { icon: "doc", title: "AI extracts the fields", detail: "Supplier, VAT, totals, lines", actor: "AI", result: "Fields captured" },
      { icon: "shield", title: "Matched to the purchase order", detail: "Quantity and price checked", actor: "Rule", result: "PO matched" },
      { icon: "database", title: "Posted to your ERP", detail: "With the document attached", actor: "System", result: "Posted" },
      { icon: "users", title: "Exceptions go to finance", detail: "Only when a check fails", actor: "Your team", result: "Nothing to review" },
    ],
  },
  {
    tab: "Support reply",
    summary: "Customer answered in their own channel. Your team steps in only when needed.",
    steps: [
      { icon: "chat", title: "Customer asks a question", detail: "“Where is my order?”", actor: "Trigger", result: "Received" },
      { icon: "bolt", title: "AI finds the order", detail: "From the phone number or order ID", actor: "AI", result: "Order found" },
      { icon: "compass", title: "Delivery status checked", detail: "Live from the courier", actor: "System", result: "Out for delivery" },
      { icon: "chat", title: "Reply sent", detail: "Plain language, with tracking link", actor: "AI", result: "Answered" },
      { icon: "users", title: "Handed over if delayed", detail: "With the full conversation", actor: "Your team", result: "Not needed" },
    ],
  },
];

const STEP_MS = 1500;
const REST_MS = 3200;

const motionQuery = "(prefers-reduced-motion: reduce)";
function useReducedMotion() {
  return useSyncExternalStore(
    (cb) => {
      const mq = window.matchMedia(motionQuery);
      mq.addEventListener("change", cb);
      return () => mq.removeEventListener("change", cb);
    },
    () => window.matchMedia(motionQuery).matches,
    () => false,
  );
}

// Hero piece: an automation running step by step. Each step shows who does it (AI, a rule,
// a system or your team) and what it produced. It cycles through three examples, can be
// switched by hand, and shows the finished state without motion when reduced motion is on.
export function LiveWorkflow() {
  const reduced = useReducedMotion();
  const [flowIndex, setFlowIndex] = useState(0);
  const [progress, setProgress] = useState(0); // number of finished steps; the next one is running

  const flow = flows[flowIndex];
  const total = flow.steps.length;
  const done = reduced ? total : progress;
  const complete = done >= total;

  useEffect(() => {
    if (reduced) return;
    const t = setTimeout(
      () => {
        if (progress < total) {
          setProgress(progress + 1);
        } else {
          setFlowIndex((flowIndex + 1) % flows.length);
          setProgress(0);
        }
      },
      progress < total ? STEP_MS : REST_MS,
    );
    return () => clearTimeout(t);
  }, [reduced, progress, total, flowIndex]);

  const select = (i: number) => {
    setFlowIndex(i);
    setProgress(0);
  };

  return (
    <figure className="glass min-w-0 overflow-hidden p-6 sm:p-8">
      {/* Header: label on the left, live status on the right */}
      <div className="flex items-center justify-between gap-4">
        <p className="eyebrow">Live example</p>
        <p className="flex items-center gap-2 text-sm text-muted">
          <span
            aria-hidden="true"
            className={`h-1.5 w-1.5 rounded-full bg-accent ${complete ? "" : "animate-pulse"}`}
          />
          {complete ? "Complete" : "Running"}
        </p>
      </div>

      {/* Example switcher: plain text tabs with an underline, in the same style as the site's links */}
      <div
        role="tablist"
        aria-label="Example automations"
        className="mt-5 flex min-w-0 gap-6 overflow-x-auto border-b border-primary/10 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {flows.map((f, i) => (
          <button
            key={f.tab}
            type="button"
            role="tab"
            aria-selected={i === flowIndex}
            onClick={() => select(i)}
            className={`-mb-px whitespace-nowrap border-b pb-3 pt-1 text-[0.95rem] outline-offset-[-2px] transition-colors duration-300 ${
              i === flowIndex ? "border-primary text-primary" : "border-transparent text-muted hover:text-primary"
            }`}
          >
            {f.tab}
          </button>
        ))}
      </div>

      {/* Steps */}
      <figcaption className="sr-only">{flow.tab}: an example automation in five steps.</figcaption>
      <ol className="relative mt-5">
        {/* Track, and the part of it already travelled */}
        <span aria-hidden="true" className="absolute bottom-8 left-4 top-8 w-px bg-primary/10">
          <span
            className="block w-full bg-accent transition-[height] duration-700 ease-out"
            style={{ height: `${(Math.min(done, total - 1) / (total - 1)) * 100}%` }}
          />
        </span>
        {flow.steps.map((step, i) => {
          const state = i < done ? "done" : i === done ? "running" : "queued";
          return (
            <li key={`${flowIndex}-${step.title}`} className="relative grid grid-cols-[2rem_1fr] items-center gap-x-5 py-3 sm:grid-cols-[2rem_1fr_auto]">
              <span className="relative flex h-8 w-8 items-center justify-center">
                {state === "running" && (
                  <span aria-hidden="true" className="absolute -inset-[5px] animate-spin rounded-full border border-accent/20 border-t-accent" />
                )}
                <span
                  className={`flex h-8 w-8 items-center justify-center rounded-full border transition-colors duration-500 ${
                    state === "done"
                      ? "border-accent bg-accent text-white"
                      : state === "running"
                        ? "border-accent bg-white text-accent-dark"
                        : "border-primary/15 bg-white text-muted"
                  }`}
                >
                  <Icon name={state === "done" ? "check" : step.icon} className="h-4 w-4" />
                </span>
              </span>

              <span className="min-w-0">
                <span className={`block text-[0.95rem] leading-snug transition-colors duration-500 ${state === "queued" ? "text-muted" : "text-primary"}`}>
                  {step.title}
                </span>
                <span className="mt-0.5 block text-sm leading-snug text-muted">
                  <span className={step.actor === "AI" || step.actor === "Your team" ? "text-accent-dark" : ""}>{step.actor}</span>
                  <span aria-hidden="true"> · </span>
                  {step.detail}
                </span>
              </span>

              {/* What the step produced (wider screens). A fixed width keeps the card from shifting. */}
              <span className="hidden w-36 text-right text-sm sm:block">
                {state === "done" && <span className="text-accent-dark">{step.result}</span>}
                {state === "running" && <span className="text-primary">Working…</span>}
                {state === "queued" && <span className="text-primary/25">—</span>}
              </span>
            </li>
          );
        })}
      </ol>

      {/* Progress and outcome */}
      <div className="mt-5 border-t border-primary/10 pt-5">
        <div className="flex items-center gap-4">
          <span className="shrink-0 text-sm tabular-nums text-primary">
            {complete ? "Done" : `Step ${Math.min(done + 1, total)} of ${total}`}
          </span>
          <span aria-hidden="true" className="h-px flex-1 bg-primary/10">
            <span className="block h-px bg-accent transition-[width] duration-700 ease-out" style={{ width: `${(done / total) * 100}%` }} />
          </span>
        </div>
        <p className={`mt-3 min-h-[2.75rem] text-sm leading-relaxed transition-colors duration-500 ${complete ? "text-ink" : "text-muted"}`}>
          {complete ? flow.summary : "An example with sample data. Choose another above."}
        </p>
      </div>
    </figure>
  );
}
