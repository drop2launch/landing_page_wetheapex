import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Cta } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { pad, SectionHead } from "@/components/SectionHead";
import { WorkflowDiagram } from "@/components/WorkflowDiagram";
import { getIndustry, industries } from "@/content/industries";
import { services } from "@/content/services";
import { getCaseStudies } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

// Unknown slugs return a real 404 instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/industries/[slug]">) {
  const industry = getIndustry((await params).slug);
  if (!industry) return {};
  return pageMeta({
    title: `AI Automation for ${industry.name}`,
    description: industry.metaDescription,
    path: `/industries/${industry.slug}`,
  });
}

export default async function IndustryPage({ params }: PageProps<"/industries/[slug]">) {
  const industry = getIndustry((await params).slug);
  if (!industry) notFound();
  const study = industry.caseStudy ? getCaseStudies().find((c) => c.slug === industry.caseStudy) : undefined;
  const related = services.filter((s) => industry.services.includes(s.slug));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Industries", href: "/industries" },
          { label: industry.name, href: `/industries/${industry.slug}` },
        ]}
      />
      <PageHero
        eyebrow={industry.name}
        title={industry.headline}
        intro={industry.intro}
      >
        <Link href="/contact" className="btn btn-primary">
          Book your free call
          <Icon name="arrow" className="h-4 w-4" />
        </Link>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SectionHead label="The problem" title="Where the time goes." />
          <ol className="tiles mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {industry.pains.map((p, i) => (
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
          <SectionHead label="Use cases" title="What we automate." />
          <ol className="mt-16 border-t border-line">
            {industry.useCases.map((u, i) => (
              <li key={u.title} className="reveal grid gap-x-8 gap-y-2 border-b border-line py-8 lg:grid-cols-12">
                <span className="text-sm font-normal tabular-nums text-accent-dark lg:col-span-1">{pad(i)}</span>
                <h3 className="text-2xl font-normal tracking-[-0.01em] lg:col-span-5">{u.title}</h3>
                <p className="text-lg leading-relaxed text-muted lg:col-span-6">{u.detail}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-panel">
        <div className="wrap">
          <SectionHead label="How it works" title="One workflow, step by step." />
          <div className="reveal mt-16">
            <WorkflowDiagram title={industry.workflow.title} steps={industry.workflow.steps} />
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="wrap">
          <SectionHead label="Services" title="The services that fit." />
          <ul className="tiles mt-16 lg:grid-cols-3">
            {related.map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="group block py-8">
                  <span className="flex items-center justify-between gap-4 text-xl text-primary group-hover:text-accent-dark">
                    {s.name}
                    <span className="transition-transform group-hover:translate-x-1">
                      <Icon name="arrow" className="h-5 w-5" />
                    </span>
                  </span>
                  <span className="mt-3 block text-muted">{s.short}</span>
                </Link>
              </li>
            ))}
          </ul>
          {study && (
            <div className="mt-16 grid gap-x-8 gap-y-6 lg:grid-cols-12">
              <h3 className="text-lg font-normal tracking-[-0.01em] text-primary lg:col-span-3">Related work</h3>
              <div className="border-t border-line lg:col-span-9">
                <CaseStudyCard study={study} />
              </div>
            </div>
          )}
        </div>
      </section>

      <Cta />
    </>
  );
}
