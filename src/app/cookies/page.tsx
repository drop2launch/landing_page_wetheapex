import { analyticsEnabled, CookieSettingsButton } from "@/components/CookieBanner";
import { LegalPage } from "@/components/LegalPage";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "Cookie Policy",
  description: "What this site stores in your browser, why, and how to change your choice.",
  path: "/cookies",
});

export default function Page() {
  return <LegalPage slug="cookies">
      {analyticsEnabled && (
        <p className="mt-8">
          <CookieSettingsButton className="btn btn-secondary" />
        </p>
      )}
    </LegalPage>;
}
