import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { getCaseStudies } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

// Unknown slugs return a real 404 instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return getCaseStudies().map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudies().find((s) => s.slug === slug);
  if (!study) return {};
  return pageMeta({
    title: study.title,
    description: study.description,
    path: `/case-studies/${study.slug}`,
    type: "article",
  });
}

export default async function CaseStudyPage({ params }: PageProps<"/case-studies/[slug]">) {
  const { slug } = await params;
  const study = getCaseStudies().find((s) => s.slug === slug);
  if (!study) notFound();

  return (
    <>
      <article>
        <header className="border-b border-line bg-panel">
          <div className="wrap py-12 sm:py-16">
            <Link href="/case-studies" className="text-sm font-normal text-muted hover:text-primary">
              ← All case studies
            </Link>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              <span className="text-sm text-muted">
                {study.industry} · {study.service}
              </span>
            </div>
            <h1 className="h1 mt-5 max-w-5xl text-balance">{study.title}</h1>
            <p className="lead mt-4 max-w-2xl">{study.description}</p>
            {study.demo && <p className="mt-4 text-sm text-muted">An example project. Company details are illustrative.</p>}
          </div>
        </header>

        {/* Results strip */}
        <section aria-labelledby="results-heading" className="bg-wash band">
          <div className="wrap py-12 sm:py-16">
            <h2 id="results-heading" className="eyebrow ">
              {study.demo ? "Targets we set for this kind of project" : "Measured results"}
            </h2>
            <dl className="mt-8 grid border-t border-line lg:grid-cols-3">
              {study.results.map((r) => (
                <div key={r.label} className="flex flex-col-reverse border-b border-line py-7 lg:border-b-0 lg:border-r lg:px-8 lg:first:pl-0 lg:last:border-r-0">
                  <dt className="mt-3 text-[0.95rem] leading-snug text-muted">{r.label}</dt>
                  <dd className="font-display text-3xl leading-tight text-primary sm:text-4xl">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <div className="bg-panel">
          <div className="wrap grid gap-x-8 gap-y-12 py-16 sm:py-24 lg:grid-cols-12">
            <aside className="space-y-8 lg:col-span-3">
              <section aria-labelledby="client-heading" className="border-t border-primary pt-4">
                <h2 id="client-heading" className="text-sm text-muted">Client</h2>
                <p className="mt-1 font-normal leading-snug text-primary">{study.client}</p>
              </section>
              <section aria-labelledby="service-heading" className="border-t border-line pt-4">
                <h2 id="service-heading" className="text-sm text-muted">Service</h2>
                <p className="mt-1 font-normal leading-snug text-primary">{study.service}</p>
              </section>
              <section aria-labelledby="tools-heading" className="border-t border-line pt-4">
                <h2 id="tools-heading" className="text-sm text-muted">Tools used</h2>
                <ul className="mt-2 flex flex-wrap gap-1.5">
                  {study.tools.map((t) => (
                    <li key={t} className="border border-line px-2.5 py-1 text-sm font-normal text-primary">
                      {t}
                    </li>
                  ))}
                </ul>
              </section>
            </aside>
            {/* Markdown body: Client context → Problem → Approach → Solution → Measurable results */}
            <div className="prose lg:col-span-8 lg:col-start-5" dangerouslySetInnerHTML={{ __html: study.html }} />
          </div>
        </div>
      </article>
      <Cta heading="Have a similar problem?" />
    </>
  );
}
