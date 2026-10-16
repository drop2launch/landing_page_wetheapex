import { chatFaqs } from "@/content/chat-faq";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { services } from "@/content/services";
import { site } from "@/lib/site";

// /llms.txt: a plain-text summary of the site for AI assistants and AI search tools,
// which increasingly answer questions like "AI automation agency in Dubai" directly.
export const dynamic = "force-static";

export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    `Operated by ${site.legalName}, ${site.address.city}, ${site.address.country}. Based in ${site.location}. Works with businesses in ${site.countries.join(", ")}.`,
    `Contact: ${site.url}/contact · ${site.email}`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${site.url}/services/${s.slug}): ${s.short}`),
    "",
    "## Industries",
    ...industries.map((i) => `- [${i.name}](${site.url}/industries/${i.slug}): ${i.short}`),
    "",
    "## Locations",
    ...locations.map((l) => `- [${l.title}](${site.url}/locations/${l.slug})`),
    "",
    "## Common questions",
    ...chatFaqs.map((f) => `### ${f.q}\n${f.a}\n`),
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
