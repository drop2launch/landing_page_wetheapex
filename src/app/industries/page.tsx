import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { pad } from "@/components/SectionHead";
import { industries } from "@/content/industries";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI Automation by Industry",
  description:
    "AI and automation use cases for e-commerce, finance, SaaS, retail and restaurants, real estate, clinics, hospitality and professional services.",
  path: "/industries",
});

export default function IndustriesPage() {
  return (
    <>
      <PageHero
        eyebrow="Industries"
        title="The same problem looks different in every business."
        intro="Nine sectors where phones, messages and paperwork take up the most time, with the tasks we most often automate in each."
      />
      <section className="section">
        <div className="wrap">
          <ul className="tiles md:grid-cols-2 xl:grid-cols-3">
            {industries.map((ind, i) => (
              <li key={ind.slug}>
                <Link href={`/industries/${ind.slug}`} className="group block py-12">
                  <span className="flex items-center justify-between">
                    <span className="num">{pad(i)}</span>
                    <span className="text-primary transition-transform group-hover:translate-x-1 group-hover:text-accent-dark">
                      <Icon name="arrow" className="h-5 w-5" />
                    </span>
                  </span>
                  <span className="mt-6 block text-3xl leading-tight tracking-[-0.02em] text-primary group-hover:text-accent-dark">
                    {ind.name}
                  </span>
                  <span className="mt-3 block max-w-md text-lg text-muted">{ind.headline}</span>
                  <ul className="mt-6 space-y-1.5 text-[0.95rem] text-ink">
                    {ind.useCases.slice(0, 3).map((u) => (
                      <li key={u.title} className="flex gap-3">
                        <span className="text-accent">
                          <Icon name="check" className="mt-1 h-4 w-4" />
                        </span>
                        {u.title}
                      </li>
                    ))}
                  </ul>
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
