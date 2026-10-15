"use client";

import { useState, type ReactNode } from "react";

// Two ways to get in touch, shown one at a time so the page stays short.
export function BookingTabs({ calendar, form, calendarReady }: { calendar: ReactNode; form: ReactNode; calendarReady: boolean }) {
  // Until a calendar link is configured, open on the form so visitors can always act.
  const [tab, setTab] = useState<"calendar" | "form">(calendarReady ? "calendar" : "form");
  const tabs = [
    { id: "calendar" as const, label: "Pick a time", hint: "Fastest: a calendar invite straight away" },
    { id: "form" as const, label: "Write to us first", hint: "We reply by email" },
  ];
  return (
    <div>
      <div role="tablist" aria-label="Ways to get in touch" className="grid grid-cols-2 gap-2 rounded-2xl bg-primary-soft p-1.5">
        {tabs.map((t) => (
          <button
            key={t.id}
            type="button"
            role="tab"
            id={`tab-${t.id}`}
            aria-selected={tab === t.id}
            aria-controls={`panel-${t.id}`}
            onClick={() => setTab(t.id)}
            className={`rounded-xl px-4 py-3 text-left transition-colors ${tab === t.id ? "bg-white shadow-soft" : "hover:bg-white/60"}`}
          >
            <span className="block text-[0.95rem] text-primary">{t.label}</span>
            <span className="hidden text-sm text-muted sm:block">{t.hint}</span>
          </button>
        ))}
      </div>
      <div role="tabpanel" id="panel-calendar" aria-labelledby="tab-calendar" hidden={tab !== "calendar"} className="mt-8">
        {calendar}
      </div>
      <div role="tabpanel" id="panel-form" aria-labelledby="tab-form" hidden={tab !== "form"} className="mt-8">
        {form}
      </div>
    </div>
  );
}
