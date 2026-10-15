import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { pad, SectionHead } from "@/components/SectionHead";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { getService, services } from "@/content/services";
import { getCaseStudies } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

// Unknown slugs return a real 404 instead of rendering on demand.
export const dynamicParams = false;

// Titles written the way people search.
const searchTitles: Record<string, string> = {
  "ai-voice-agents": "AI Receptionist & AI Call Agent for Business",
  "ai-reply-agents": "AI Reply Agents for Email, WhatsApp & Reviews",
  "ai-chatbots-agents": "AI Chatbots & WhatsApp Chatbot Development",
  "workflow-automation": "n8n Automation Agency & Workflow Automation",
  "crm-lead-automation": "CRM Automation & Lead Management Automation",
  "document-processing": "Invoice & Document Processing Automation",
  "ai-audit-workshop": "AI Audit & AI Strategy Workshop",
};

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) return {};
  return pageMeta({
    title: searchTitles[service.slug] ?? service.name,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({ params }: PageProps<"/services/[slug]">) {
  const service = getService((await params).slug);
  if (!service) notFound();
  const study = service.caseStudy ? getCaseStudies().find((c) => c.slug === service.caseStudy) : undefined;
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: service.name,
          description: service.metaDescription,
          url: `${site.url}/services/${service.slug}`,
          provider: { "@type": "Organization", name: site.name, url: site.url },
          areaServed: ["AE", "US", "CA", "GB", "IN", "SA", "AU", "SG"],
        }}
      />
      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: service.name, href: `/services/${service.slug}` },
        ]}
      />
      <PageHero
        eyebrow={service.name}
        title={service.headline}
        intro={service.intro}
      >
        <Link href="/contact" className="btn btn-primary">
          Book your free call
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      {/* Key facts */}
      <section aria-label="At a glance" className="border-b border-line bg-panel">
        <dl className="wrap grid sm:grid-cols-2 lg:grid-cols-4">
          {[
            { k: "Typical timeline", v: service.timeline },
            { k: "Pricing", v: "Fixed quote before work starts" },
            { k: "Ownership", v: "Runs in your accounts" },
            { k: "First step", v: "A free 30-minute call" },
          ].map((f) => (
            <div key={f.k} className="border-line py-7 lg:border-l lg:px-8 lg:first:border-l-0 lg:first:pl-0">
              <dt className="text-sm text-muted">{f.k}</dt>
              <dd className="mt-1 text-xl font-normal tracking-[-0.01em] text-primary">{f.v}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section">
        <div className="wrap">
          <SectionHead label="The problem" title="Where the time goes today." />
          <ol className="tiles mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {service.problems.map((p, i) => (
              <li key={p} className="reveal py-8">
                <span className="num text-accent-dark">{pad(i)}</span>
                <p className="mt-4 text-xl font-normal leading-snug tracking-[-0.01em] text-primary">{p}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-wash band">
        <div className="wrap">
          <SectionHead label="What we build" title="What you get." />
          <ol className="mt-16 border-t border-line">
            {service.build.map((b, i) => (
              <li key={b.title} className="reveal grid gap-x-8 gap-y-2 border-b border-line py-8 lg:grid-cols-12">
                <span className="text-sm font-normal tabular-nums text-accent-dark lg:col-span-1">{pad(i)}</span>
                <h3 className="text-2xl font-normal tracking-[-0.01em] lg:col-span-4">{b.title}</h3>
                <p className="text-lg leading-relaxed text-muted lg:col-span-7">{b.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-panel">
        <div className="wrap">
          <SectionHead label="How it works" title="One workflow, step by step." />
          <div className="reveal mt-16">
            <WorkflowDiagram title={service.workflow.title} steps={service.workflow.steps} />
          </div>
          <div className="mt-16 grid gap-x-8 gap-y-6 lg:grid-cols-12">
            <div className="lg:col-span-3">
              <h3 className="text-lg font-normal tracking-[-0.01em] text-primary">Tools we use</h3>
              <p className="mt-2 text-sm text-muted">
                The exact tools depend on what you already use. We recommend the simplest option that does the job.
              </p>
            </div>
            <ul className="flex flex-wrap content-start gap-2 lg:col-span-9">
              {service.tools.map((t) => (
                <li key={t} className="chip">
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Shown only when a case study is linked to this service */}
      {study && (
        <section className="section border-t border-line">
          <div className="wrap grid gap-x-8 gap-y-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow">Related work</p>
              <h2 className="h2 mt-6">See it in a project.</h2>
            </div>
            <div className="border-t border-line lg:col-span-8">
              <CaseStudyCard study={study} />
            </div>
          </div>
        </section>
      )}

      <section className="section border-t border-line bg-panel">
        <div className="wrap grid gap-x-8 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="h2 mt-6">Questions we get asked.</h2>
          </div>
          <div className="lg:col-span-8">
            <Faq items={service.faqs} />
          </div>
        </div>
      </section>

      <nav aria-label="Other services" className="border-t border-line">
        <ul className="wrap grid sm:grid-cols-2 lg:grid-cols-4">
          {others.map((s) => (
            <li key={s.slug} className="border-line lg:border-l lg:first:border-l-0">
              <Link href={`/services/${s.slug}`} className="group flex h-full items-center justify-between gap-4 py-6 lg:px-6">
                <span className="font-normal tracking-[-0.01em] text-primary group-hover:text-accent-dark">{s.name}</span>
                <span className="text-muted transition-transform group-hover:translate-x-1 group-hover:text-accent">
                  <Icon name="arrow" className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <Cta />
    </>
  );
}
