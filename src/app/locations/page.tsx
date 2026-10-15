import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { locations } from "@/content/locations";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI Agency in the UAE, India, US, UK & More",
  description:
    "AI voice agents, chatbots and workflow automation for businesses in the UAE, India, the US, UK, Canada, Saudi Arabia, Australia and Singapore.",
  path: "/locations",
});

export default function LocationsPage() {
  return (
    <>
      <Breadcrumbs items={[{ label: "Locations", href: "/locations" }]} />
      <PageHero
        eyebrow="Locations"
        title="Based in the UAE. Working with businesses worldwide."
        intro="The work is the same everywhere. The channels, languages, privacy rules and currencies are not, so each page covers what is specific to that place."
      />
      <section className="section">
        <div className="wrap">
          <ul className="tiles sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="group block py-8">
                  <span className="flex items-start justify-between gap-3 text-xl leading-snug text-primary group-hover:text-accent-dark">
                    {l.title}
                    <span className="mt-1 shrink-0 transition-transform group-hover:translate-x-1">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </span>
                  <span className="mt-3 block text-[0.95rem] text-muted">{l.intro}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta />
    </>
  );
}
