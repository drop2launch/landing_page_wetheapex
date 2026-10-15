"use client";

import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { services } from "@/content/services";
import { site } from "@/lib/site";

const sizes = ["1–10", "11–50", "51–200", "201–500", "500+"];
// PLACEHOLDER ranges: adjust to match your real pricing.
const budgets = ["Not sure yet", "Under $1,000", "$1,000 – $5,000", "$5,000 – $15,000", "$15,000+"];

// A row of choices where one can be picked. Native radio buttons underneath, so it works
// with the keyboard and screen readers.
function Choice({ legend, name, options, required }: { legend: string; name: string; options: string[]; required?: boolean }) {
  return (
    <fieldset>
      <legend className="label">{legend}</legend>
      <div className="mt-2 flex flex-wrap gap-2">
        {options.map((o) => (
          <label key={o} className="cursor-pointer">
            <input type="radio" name={name} value={o} required={required} className="peer sr-only" />
            <span className="block rounded-full border border-line px-4 py-2 text-sm text-ink transition-colors hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent">
              {o}
            </span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}

function Step({ n, title }: { n: number; title: string }) {
  return (
    <p className="flex items-center gap-3 text-primary">
      <span className="flex h-7 w-7 items-center justify-center rounded-full border border-primary/20 text-sm">{n}</span>
      {title}
    </p>
  );
}

export function ContactForm() {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "sending" | "error">("idle");
  const [error, setError] = useState("");
  // When the visitor first touched the form. The server rejects forms
  // submitted faster than a person could fill them in.
  const startedAt = useRef(0);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, startedAt: startedAt.current }),
      });
      const body = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(body.error || "Something went wrong.");
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocusCapture={() => {
        if (!startedAt.current) startedAt.current = Date.now();
      }}
      className="grid gap-10"
    >
      <div className="grid gap-5">
        <Step n={1} title="About you" />
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="name" className="label">Your name</label>
            <input id="name" name="name" required maxLength={100} autoComplete="name" className="field" />
          </div>
          <div>
            <label htmlFor="email" className="label">Work email</label>
            <input id="email" name="email" type="email" required maxLength={200} autoComplete="email" className="field" />
          </div>
        </div>
        <div>
          <label htmlFor="company" className="label">Company</label>
          <input id="company" name="company" required maxLength={150} autoComplete="organization" className="field" />
        </div>
        <Choice legend="Company size (employees)" name="size" options={sizes} required />
      </div>

      <div className="grid gap-5">
        <Step n={2} title="What you would like to fix" />
        <Choice legend="What are you most interested in? (optional)" name="interest" options={[...services.map((s) => s.name), "Not sure yet"]} />
        <div>
          <label htmlFor="problem" className="label">Describe the problem</label>
          <textarea id="problem" name="problem" required rows={4} maxLength={3000} aria-describedby="problem-hint" className="field" />
          <p id="problem-hint" className="mt-1.5 text-sm text-muted">
            A sentence or two is enough, for example “we miss calls after 6pm” or “invoices are typed in by hand”. Please do
            not include passwords or sensitive personal data.
          </p>
        </div>
        <div>
          <label htmlFor="tools" className="label">Tools you use today (optional)</label>
          <input id="tools" name="tools" maxLength={300} placeholder="Shopify, Xero, Zoho, Excel, WhatsApp…" className="field" />
        </div>
        <Choice legend="Budget range" name="budget" options={budgets} required />
      </div>

      {/* Honeypot: hidden from people, tempting to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px] h-0 w-0 overflow-hidden">
        <label htmlFor="website">Leave this field empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div>
        <button type="submit" disabled={status === "sending"} className="btn btn-primary h-12 w-full px-8 text-[0.95rem] disabled:opacity-60 sm:w-auto">
          {status === "sending" ? "Sending…" : "Send and get a reply by email"}
        </button>
        <p className="mt-4 text-sm text-muted">
          We use these details only to reply to your enquiry. See our{" "}
          <a href="/privacy" className="text-primary underline decoration-accent underline-offset-4">Privacy Policy</a>.
        </p>
        <p role="alert" className="mt-2 text-sm text-accent-dark">
          {status === "error" && `${error} You can also email us at ${site.email}.`}
        </p>
      </div>
    </form>
  );
}
