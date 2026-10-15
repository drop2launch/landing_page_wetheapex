"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { formatPrice, type Currency } from "@/content/pricing";
import { CurrencyToggle, useCurrency } from "./Price";

// Example hourly cost per currency, used until the visitor moves the slider.
const hourlyDefault: Record<Currency, number> = { AED: 60, USD: 30, GBP: 22, CAD: 38, INR: 500 };

function Slider({
  label,
  value,
  display,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  display: string;
  min: number;
  max: number;
  step: number;
  onChange: (n: number) => void;
}) {
  const id = useId();
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label htmlFor={id} className="text-[0.95rem] text-muted">
          {label}
        </label>
        <output htmlFor={id} className="text-xl tabular-nums text-primary">
          {display}
        </output>
      </div>
      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-4 h-1 w-full cursor-pointer appearance-none rounded-full bg-primary/15 accent-accent"
      />
    </div>
  );
}

// Home-page hook: two sliders that turn "a few hours a week" into an annual figure.
export function RoiTeaser() {
  const currency = useCurrency();
  const [hours, setHours] = useState(15);
  const [hourlyOverride, setHourly] = useState<number | null>(null);
  const base = hourlyDefault[currency];
  const hourly = hourlyOverride ?? base;
  const annual = hours * hourly * 52;

  return (
    <div className="bg-wash grid gap-12 rounded-[2rem] p-8 sm:p-14 lg:grid-cols-2 lg:items-center">
      <div className="flex min-w-0 flex-col gap-9">
        <div className="flex flex-wrap items-center gap-4">
          <span className="text-sm text-muted">Currency</span>
          <CurrencyToggle />
        </div>
        <Slider
          label="Hours spent on one manual task each week"
          value={hours}
          display={`${hours} h`}
          min={1}
          max={80}
          step={1}
          onChange={setHours}
        />
        <Slider
          label="Cost per hour of the people doing it"
          value={hourly}
          display={formatPrice(hourly, currency)}
          min={Math.round(base / 4)}
          max={base * 5}
          step={Math.max(1, Math.round(base / 20))}
          onChange={setHourly}
        />
      </div>
      <div aria-live="polite" className="min-w-0">
        <p className="text-muted">That one task costs you</p>
        <p className="mt-2 text-6xl leading-none tabular-nums text-primary sm:text-7xl" style={{ fontWeight: 400, letterSpacing: "-0.04em" }}>
          {formatPrice(annual, currency)}
        </p>
        <p className="mt-3 text-lg text-ink">every year.</p>
        <p className="mt-1 text-sm text-muted">
          {hours} hours × {formatPrice(hourly, currency)} × 52 weeks. An estimate from your own numbers.
        </p>
        <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
          <Link href="/contact" className="btn btn-primary h-12 px-7 text-[0.95rem]">
            Book a call to cut it
          </Link>
        </div>
      </div>
    </div>
  );
}
