"use client";

import { currencies, type Currency } from "@/content/pricing";
import { currencyStore } from "@/lib/store";

export function useCurrency(): Currency {
  const value = currencyStore.use();
  return currencies.some((c) => c.code === value) ? (value as Currency) : "AED";
}

export function CurrencyToggle() {
  const currency = useCurrency();
  return (
    <div role="group" aria-label="Currency" className="inline-flex rounded-full border border-line p-1">
      {currencies.map((c) => (
        <button
          key={c.code}
          type="button"
          aria-pressed={currency === c.code}
          onClick={() => currencyStore.set(c.code)}
          className={`min-h-8 rounded-full px-2.5 text-sm font-normal transition-colors sm:px-3.5 ${
            currency === c.code ? "bg-primary text-white" : "text-primary hover:bg-primary-soft"
          }`}
        >
          {c.label}
        </button>
      ))}
    </div>
  );
}
