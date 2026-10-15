import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { pad, SectionHead } from "@/components/SectionHead";
import { industries } from "@/content/industries";
import { getLocation, locations } from "@/content/locations";
import { services } from "@/content/services";
import { pageMeta } from "@/lib/seo";

// Unknown slugs return a real 404 instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return locations.map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps<"/locations/[slug]">) {
  const location = getLocation((await params).slug);
  if (!location) return {};
  return pageMeta({ title: location.title, description: location.metaDescription, path: `/locations/${location.slug}` });
}

export default async function LocationPage({ params }: PageProps<"/locations/[slug]">) {
  const location = getLocation((await params).slug);
  if (!location) notFound();
  const relevant = industries.filter((i) => location.industries.includes(i.slug));

  return (
    <>
      <Breadcrumbs
        items={[
          { label: "Locations", href: "/locations" },
          { label: location.short, href: `/locations/${location.slug}` },
        ]}
      />
      <PageHero eyebrow={location.short} title={location.title} intro={location.intro}>
        <Link href="/contact" className="btn btn-primary h-12 px-7 text-[0.95rem]">
          Book your free call
        </Link>
        <Link href="/services" className="btn btn-secondary h-12 px-7 text-[0.95rem]">
          See services
        </Link>
      </PageHero>

      <section className="section">
        <div className="wrap">
          <SectionHead label="What is different here" title={`Automating a business in ${location.name}.`} />
          <ol className="tiles mt-14 sm:grid-cols-2">
            {location.points.map((p, i) => (
              <li key={p.title} className="reveal grid gap-x-6 py-9 sm:grid-cols-[3rem_1fr]">
                <span className="num pt-1">{pad(i)}</span>
                <div>
                  <h3 className="text-xl leading-snug text-primary">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section pt-0">
        <div className="wrap">
          <SectionHead label="Services" title={`What we build for businesses in ${location.name}.`} />
          <ul className="mt-14 border-b border-line">
            {services.map((s, i) => (
              <li key={s.slug} className="border-t border-line">
                <Link href={`/services/${s.slug}`} className="group grid items-baseline gap-x-10 gap-y-2 py-7 lg:grid-cols-12">
                  <span className="num lg:col-span-1">{pad(i)}</span>
                  <span className="text-xl leading-snug text-primary transition-colors group-hover:text-accent-dark lg:col-span-4">{s.name}</span>
                  <span className="max-w-2xl text-muted lg:col-span-6">{s.short}</span>
                  <span className="hidden justify-self-end text-primary transition-transform group-hover:translate-x-1 lg:col-span-1 lg:block">
                    <Icon name="arrow" className="h-5 w-5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section bg-wash band">
        <div className="wrap">
          <SectionHead label="Industries" title={`Where we see the most demand in ${location.name}.`} />
          <ul className="tiles mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {relevant.map((ind) => (
              <li key={ind.slug} className="border-primary/10">
                <Link href={`/industries/${ind.slug}`} className="group block py-7">
                  <span className="flex items-start justify-between gap-3 text-lg leading-snug text-primary group-hover:text-accent-dark">
                    {ind.name}
                    <span className="mt-1 shrink-0 transition-transform group-hover:translate-x-1">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </span>
                  <span className="mt-2 block text-[0.95rem] text-muted">{ind.short}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="wrap grid gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="h2 mt-5">Questions from businesses in {location.name}.</h2>
          </div>
          <div className="lg:col-span-8">
            <Faq items={location.faqs} />
          </div>
        </div>
      </section>

      <nav aria-label="Other locations" className="wrap pb-16">
        <p className="text-sm text-muted">Also see</p>
        <ul className="mt-3 flex flex-wrap gap-2">
          {locations
            .filter((l) => l.slug !== location.slug)
            .map((l) => (
              <li key={l.slug}>
                <Link href={`/locations/${l.slug}`} className="chip block hover:border-primary">
                  {l.short}
                </Link>
              </li>
            ))}
        </ul>
      </nav>

      <Cta />
    </>
  );
}
