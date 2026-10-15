import Link from "next/link";
import { site } from "@/lib/site";
import { JsonLd } from "./JsonLd";

// A small trail above the page ("Home / Services / AI voice agents") plus the matching
// structured data, which lets search engines show the trail in results.
export function Breadcrumbs({ items }: { items: { label: string; href: string }[] }) {
  const trail = [{ label: "Home", href: "/" }, ...items];
  return (
    <nav aria-label="Breadcrumb" className="wrap pt-6">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: trail.map((t, i) => ({ "@type": "ListItem", position: i + 1, name: t.label, item: `${site.url}${t.href}` })),
        }}
      />
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted">
        {trail.map((t, i) => (
          <li key={t.href} className="flex items-center gap-2">
            {i > 0 && <span aria-hidden="true">/</span>}
            {i === trail.length - 1 ? (
              <span aria-current="page" className="text-primary">{t.label}</span>
            ) : (
              <Link href={t.href} className="hover:text-primary">{t.label}</Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
