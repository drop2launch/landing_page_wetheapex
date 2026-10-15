import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { pad } from "@/components/SectionHead";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI Agency Services: Receptionists, Call & Reply Agents",
  description:
    "AI receptionists, AI call agents, AI reply agents, chatbots, n8n workflow automation, CRM and lead handling, document processing, and a paid AI audit to help you decide where to start.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Seven ways we take manual work off your team."
        intro="Each service is scoped, priced and delivered as a defined piece of work. If you are not sure which one fits, start with the audit."
      />
      <section className="bg-panel">
        <ul className="wrap">
          {services.map((s, i) => (
            <li key={s.slug} className="border-b border-line last:border-b-0">
              <Link href={`/services/${s.slug}`} className="group grid gap-x-8 gap-y-4 py-10 lg:grid-cols-12 lg:py-14">
                <span className="num lg:col-span-1 lg:pt-3">{pad(i)}</span>
                <span className="lg:col-span-6">
                  <span className="block text-3xl font-normal leading-[1.08] tracking-[-0.02em] text-primary transition-colors group-hover:text-accent-dark sm:text-[2.6rem]">
                    {s.name}
                  </span>
                  <span className="mt-4 block max-w-xl text-lg leading-relaxed text-muted">{s.short}</span>
                </span>
                <span className="self-start lg:col-span-4 lg:pt-3">
                  <span className="block text-sm text-muted">Typical timeline</span>
                  <span className="mt-1 block text-lg text-primary">{s.timeline}</span>
                </span>
                <span className="hidden justify-self-end text-primary transition-transform group-hover:translate-x-1 group-hover:text-accent lg:col-span-1 lg:block lg:pt-3">
                  <Icon name="arrow" className="h-6 w-6" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Cta heading="Not sure which one you need?" body="Most teams aren't. Book a free 30-minute call and we'll tell you where we would start, and why." />
    </>
  );
}
