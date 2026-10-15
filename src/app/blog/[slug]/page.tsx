import Link from "next/link";
import { notFound } from "next/navigation";
import { Cta } from "@/components/Cta";
import { JsonLd } from "@/components/JsonLd";
import { formatDate, getPosts } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

// Unknown slugs return a real 404 instead of rendering on demand.
export const dynamicParams = false;

export function generateStaticParams() {
  return getPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) return {};
  return pageMeta({ title: post.title, description: post.description, path: `/blog/${post.slug}`, type: "article" });
}

export default async function BlogPostPage({ params }: PageProps<"/blog/[slug]">) {
  const { slug } = await params;
  const post = getPosts().find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.title,
          description: post.description,
          datePublished: post.date,
          dateModified: post.updated ?? post.date,
          author: { "@type": "Person", name: post.author },
          publisher: { "@type": "Organization", name: site.name, url: site.url },
          mainEntityOfPage: `${site.url}/blog/${post.slug}`,
        }}
      />
      <article>
        <header className="border-b border-line bg-panel">
          <div className="wrap max-w-3xl py-12 sm:py-16">
            <Link href="/blog" className="text-sm font-normal text-muted hover:text-primary">
              ← All articles
            </Link>
            <h1 className="h1 mt-4">{post.title}</h1>
            <p className="lead mt-4">{post.description}</p>
            <p className="mt-4 text-sm text-muted">
              By {post.author} · <time dateTime={post.date}>{formatDate(post.date)}</time>
              {post.updated && (
                <>
                  {" "}· Updated <time dateTime={post.updated}>{formatDate(post.updated)}</time>
                </>
              )}
            </p>
          </div>
        </header>
        <div className="bg-panel"><div className="wrap max-w-3xl py-16 sm:py-24">
          <div className="prose" dangerouslySetInnerHTML={{ __html: post.html }} />
        </div></div>
      </article>
      <Cta />
    </>
  );
}
