import type { MetadataRoute } from "next";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { services } from "@/content/services";
import { getCaseStudies, getPosts } from "@/lib/content";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Google ignores priority and change frequency, and stops trusting "last modified" dates that
  // change on every build. So only articles, which have a real date, carry one.
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const page = (path: string, _priority?: number, _freq?: string) => ({ url: `${site.url}${path}` });
  return [
    page("", 1, "weekly"),
    page("/services", 0.9),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9)),
    page("/industries", 0.8),
    ...industries.map((i) => page(`/industries/${i.slug}`, 0.8)),
    page("/locations", 0.8),
    ...locations.map((l) => page(`/locations/${l.slug}`, 0.8)),
    page("/contact", 0.8),
    page("/case-studies", 0.7),
    ...getCaseStudies().map((c) => page(`/case-studies/${c.slug}`, 0.6)),
    page("/about", 0.6),
    page("/security", 0.5),
    page("/blog", 0.7, "weekly"),
    ...getPosts().map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(p.updated ?? p.date) })),
    page("/privacy", 0.2, "yearly"),
    page("/terms", 0.2, "yearly"),
    page("/cookies", 0.2, "yearly"),
  ];
}
