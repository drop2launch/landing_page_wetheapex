// Currencies shown in the savings calculator. Prices are no longer published on the site;
// every project gets a fixed quote after the free call.

export type Currency = "AED" | "USD" | "GBP" | "CAD" | "INR";

export const currencies: { code: Currency; label: string; locale: string }[] = [
  { code: "AED", label: "AED", locale: "en-AE" },
  { code: "USD", label: "USD", locale: "en-US" },
  { code: "GBP", label: "GBP", locale: "en-GB" },
  { code: "CAD", label: "CAD", locale: "en-CA" },
  { code: "INR", label: "INR", locale: "en-IN" },
];

export function formatPrice(amount: number, currency: Currency) {
  const locale = currencies.find((c) => c.code === currency)?.locale ?? "en-US";
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
  }).format(amount);
}
