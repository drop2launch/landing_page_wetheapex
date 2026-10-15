import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { marked } from "marked";

// Blog posts and case studies are Markdown files in /content.
// Add a file, redeploy, and the page, index entry and sitemap entry appear automatically.

const root = path.join(process.cwd(), "content");

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  updated?: string;
  author: string;
  tags: string[];
  html: string;
};

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
  client: string;
  industry: string;
  service: string;
  demo: boolean;
  order: number;
  tools: string[];
  results: { value: string; label: string }[];
  html: string;
};

function readDir<T>(dir: string, map: (slug: string, data: Record<string, unknown>, html: string) => T): T[] {
  const full = path.join(root, dir);
  if (!fs.existsSync(full)) return [];
  return fs
    .readdirSync(full)
    .filter((f) => f.endsWith(".md"))
    .map((file) => {
      const { data, content } = matter(fs.readFileSync(path.join(full, file), "utf8"));
      return map(file.replace(/\.md$/, ""), data, marked.parse(content, { async: false }));
    });
}

const str = (v: unknown, fallback = "") => (typeof v === "string" ? v : v instanceof Date ? v.toISOString().slice(0, 10) : fallback);
const list = (v: unknown) => (Array.isArray(v) ? v.map(String) : []);

export function getPosts(): Post[] {
  return readDir<Post>("blog", (slug, d, html) => ({
    slug,
    title: str(d.title, slug),
    description: str(d.description),
    date: str(d.date),
    updated: str(d.updated) || undefined,
    author: str(d.author),
    tags: list(d.tags),
    html,
  })).sort((a, b) => b.date.localeCompare(a.date));
}

export function getCaseStudies(): CaseStudy[] {
  return readDir<CaseStudy>("case-studies", (slug, d, html) => ({
    slug,
    title: str(d.title, slug),
    description: str(d.description),
    client: str(d.client),
    industry: str(d.industry),
    service: str(d.service),
    demo: d.demo !== false,
    order: typeof d.order === "number" ? d.order : 99,
    tools: list(d.tools),
    results: Array.isArray(d.results)
      ? d.results.map((r) => ({ value: String(r?.value ?? ""), label: String(r?.label ?? "") }))
      : [],
    html,
  })).sort((a, b) => a.order - b.order);
}

export function formatDate(iso: string) {
  const d = new Date(iso);
  return Number.isNaN(d.getTime())
    ? iso
    : d.toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });
}

// Legal pages live in content/legal. {{tokens}} are filled from src/lib/site.ts.
export function getLegal(slug: string, tokens: Record<string, string>) {
  const { data, content } = matter(fs.readFileSync(path.join(root, "legal", `${slug}.md`), "utf8"));
  const filled = content.replace(/\{\{(\w+)\}\}/g, (_, key: string) => tokens[key] ?? `[${key}]`);
  // Give each section heading an id so the page can show an "On this page" list.
  const headings: { id: string; text: string }[] = [];
  const html = (marked.parse(filled, { async: false }) as string).replace(/<h2>(.*?)<\/h2>/g, (_, inner: string) => {
    const text = inner.replace(/<[^>]+>/g, "").replace(/&amp;/g, "&");
    const id = text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
    headings.push({ id, text });
    return `<h2 id="${id}">${inner}</h2>`;
  });
  return { title: str(data.title), description: str(data.description), html, headings };
}
