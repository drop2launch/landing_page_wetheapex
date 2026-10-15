"use client";

import Link from "next/link";
import Script from "next/script";
import { consentStore } from "@/lib/store";

const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const gaId = process.env.NEXT_PUBLIC_GA_ID;
// With no analytics tool configured the site stores nothing that needs consent, so no banner is shown.
export const analyticsEnabled = Boolean(plausibleDomain || gaId);

// Analytics scripts load only after the visitor accepts. Nothing loads if neither env var is set.
export function Analytics() {
  const consent = consentStore.use();
  if (consent !== "granted") return null;
  return (
    <>
      {plausibleDomain && (
        <Script src="https://plausible.io/js/script.js" data-domain={plausibleDomain} strategy="afterInteractive" />
      )}
      {gaId && (
        <>
          <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
          <Script id="ga4" strategy="afterInteractive">
            {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config',${JSON.stringify(gaId)},{anonymize_ip:true});`}
          </Script>
        </>
      )}
    </>
  );
}

export function CookieBanner() {
  const consent = consentStore.use();
  if (!analyticsEnabled || consent !== "") return null;
  return (
    <section
      aria-label="Cookie consent"
      className="fixed bottom-36 left-4 right-4 z-50 rounded-xl border border-line bg-panel p-5 shadow-xl sm:bottom-4 sm:right-auto sm:max-w-md"
    >
      <h2 className="font-normal text-primary">Cookies and analytics</h2>
      <p className="mt-1 text-sm text-muted">
        We use essential storage to make this site work. With your permission we also use analytics to see which
        pages are useful. <Link href="/cookies" className="link">Cookie Policy</Link>
      </p>
      <div className="mt-4 flex flex-wrap gap-2">
        <button type="button" className="btn btn-secondary px-4 text-sm" onClick={() => consentStore.set("denied")}>
          Essential only
        </button>
        <button type="button" className="btn btn-primary px-4 text-sm" onClick={() => consentStore.set("granted")}>
          Accept analytics
        </button>
      </div>
    </section>
  );
}

// Lets visitors change their mind later (linked from the footer and Cookie Policy).
export function CookieSettingsButton({ className = "hover:text-white hover:underline" }: { className?: string }) {
  if (!analyticsEnabled) return null;
  return (
    <button type="button" className={className} onClick={() => consentStore.set("")}>
      Cookie settings
    </button>
  );
}
