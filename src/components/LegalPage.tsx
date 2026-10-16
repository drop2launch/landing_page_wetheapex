import type { ReactNode } from "react";
import { getLegal } from "@/lib/content";
import { site } from "@/lib/site";
import { PageHero } from "./PageHero";

const plausible = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;
const ga = process.env.NEXT_PUBLIC_GA_ID;
const aiChat = Boolean(process.env.ANTHROPIC_API_KEY);

// The analytics and chat wording follows the site's real settings, so the policies stay accurate
// when you switch a tool on or off. Nothing here needs editing by hand.
const analyticsTools = [
  plausible && "Plausible Analytics (based in the EU, uses no cookies and does not collect IP addresses)",
  ga && "Google Analytics 4 (Google, United States)",
].filter(Boolean) as string[];

const analyticsShare = analyticsTools.length
  ? `- **Analytics, only if you accept:** ${analyticsTools.join("; ")}`
  : "- **Analytics:** none at present. If we add an analytics tool it will load only after you accept it, and it will be listed here first.";

const analyticsData = analyticsTools.length
  ? "| Pages visited, referring site, approximate country, device and browser type | Only if you accept analytics | To see which pages are useful and improve the site | Consent |"
  : "";

const analyticsCookies = analyticsTools.length
  ? [
      "Analytics load **only after you choose \"Accept analytics\"**, and stop when you change your choice to \"Essential only\".",
      "",
      "| Service | What it does | Cookies it sets | Lasts |",
      "|---|---|---|---|",
      plausible ? "| Plausible Analytics | Counts page visits in aggregate | None | Not applicable |" : "",
      ga ? "| Google Analytics 4 | Counts visits and how pages are used, with IP addresses truncated | `_ga`, `_ga_<id>` | Up to 2 years |" : "",
    ]
      .filter((l, i) => i < 4 || l)
      .join("\n")
  : "We do not currently use any analytics or advertising tools, so this site sets **no tracking cookies** and shows no cookie banner. If we add an analytics tool, it will load only after you accept it, and this page will list it first.";

const chatProvider = aiChat
  ? "- **Chat assistant:** Anthropic (United States), which generates the assistant's answers. Under its commercial terms your messages are not used to train its models; it may keep them for a short period for safety and abuse monitoring."
  : "- **Chat assistant:** none. The assistant answers from prepared responses on our own server.";

const chatRetention = aiChat
  ? "Not stored by us. Our AI provider may keep them for a short period under its own terms, as described above."
  : "Not stored. They are answered on our server and discarded.";

export const legalTokens = {
  name: site.name,
  legalName: site.legalName,
  address: `${site.address.street}, ${site.address.poBox}, ${site.address.city}, ${site.address.country}`,
  email: site.email,
  url: site.url,
  updated: site.legalLastUpdated,
  privacyContact: site.privacyContact,
  hostingRegion: site.hostingRegion,
  analyticsShare,
  analyticsData,
  analyticsCookies,
  chatProvider,
  chatRetention,
  cookieChoice: analyticsTools.length
    ? "Use \"Cookie settings\" in the footer or on the [Cookie Policy](/cookies) page."
    : "No analytics run on this site at present, so there is nothing to switch off.",
};

export function LegalPage({ slug, children }: { slug: string; children?: ReactNode }) {
  const doc = getLegal(slug, legalTokens);
  return (
    <>
      <PageHero eyebrow="Legal" title={doc.title} intro={`Last updated: ${site.legalLastUpdated}`} />
      <section className="section">
        <div className="wrap grid gap-12 lg:grid-cols-[15rem_minmax(0,1fr)] lg:gap-20">
          {doc.headings.length > 2 && (
            <nav aria-label="On this page" className="lg:sticky lg:top-28 lg:self-start">
              <p className="eyebrow">On this page</p>
              <ol className="mt-5 space-y-2.5 border-l border-line pl-4 text-sm">
                {doc.headings.map((h) => (
                  <li key={h.id}>
                    <a href={`#${h.id}`} className="text-muted transition-colors hover:text-primary">
                      {h.text}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          )}
          <div className="min-w-0">
            <div className="prose" dangerouslySetInnerHTML={{ __html: doc.html }} />
            {children}
          </div>
        </div>
      </section>
    </>
  );
}
