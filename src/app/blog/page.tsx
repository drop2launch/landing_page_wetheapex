import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { formatDate, getPosts } from "@/lib/content";
import { pageMeta } from "@/lib/seo";

export const metadata = pageMeta({
  title: "AI Automation Blog",
  description: "Practical notes on automating operations, finance and customer support work in small and mid-sized teams.",
  path: "/blog",
});

export default function BlogPage() {
  const posts = getPosts();
  return (
    <>
      <PageHero
        eyebrow="Blog"
        title="Practical notes on automating everyday work."
        intro="Written for owners and team leads, not engineers."
      />
      <section className="bg-panel">
        <div className="wrap">
          {posts.length === 0 && <p className="py-16 text-muted">No articles yet.</p>}
          <ul>
            {posts.map((p) => (
              <li key={p.slug} className="border-b border-line last:border-b-0">
                <Link href={`/blog/${p.slug}`} className="group grid gap-x-8 gap-y-3 py-10 lg:grid-cols-12 lg:py-14">
                  <span className="text-sm text-muted lg:col-span-3 lg:pt-2">
                    <time dateTime={p.date}>{formatDate(p.date)}</time>
                    {p.tags.length > 0 && <span className="mt-1 block font-normal text-accent-dark">{p.tags.join(", ")}</span>}
                  </span>
                  <span className="lg:col-span-8">
                    <span className="block text-3xl font-normal leading-[1.1] tracking-[-0.02em] text-primary transition-colors group-hover:text-accent-dark sm:text-4xl">
                      {p.title}
                    </span>
                    <span className="mt-3 block max-w-2xl text-lg leading-relaxed text-muted">{p.description}</span>
                  </span>
                  <span className="hidden justify-self-end text-primary transition-transform group-hover:translate-x-1 group-hover:text-accent lg:col-span-1 lg:block lg:pt-2">
                    <Icon name="arrow" className="h-6 w-6" />
                  </span>
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
