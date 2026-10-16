import type { Metadata } from "next";
import { site } from "./site";

// Builds the per-page title, description, canonical URL and Open Graph tags.
export function pageMeta({
  title,
  description,
  path,
  type = "website",
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  noindex?: boolean;
}): Metadata {
  const url = `${site.url}${path}`;
  // Child pages replace the parent's Open Graph block, so the shared image is set explicitly.
  const images = [{ url: "/opengraph-image", width: 1200, height: 630, alt: `${site.name}: ${site.tagline}` }];
  return {
    title,
    description,
    alternates: { canonical: url },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      title: `${title} | ${site.name}`,
      description,
      url,
      siteName: site.name,
      type,
      locale: "en",
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images,
    },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

// Business details for search engines. "ProfessionalService" is the closest standard type for an agency.
export const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "ProfessionalService"],
      "@id": `${site.url}/#organization`,
      name: site.name,
      legalName: site.legalName,
      url: site.url,
      logo: `${site.url}/icon.svg`,
      image: `${site.url}/opengraph-image`,
      description: site.description,
      email: site.email,
      slogan: site.tagline,
      address: {
        "@type": "PostalAddress",
        streetAddress: site.address.street,
        postOfficeBoxNumber: site.address.poBox,
        addressLocality: site.address.city,
        addressRegion: site.address.city,
        addressCountry: site.address.countryCode,
      },
      areaServed: ["AE", "US", "CA", "GB", "IN", "SA", "AU", "SG"].map((c) => ({ "@type": "Country", name: c })),
      knowsAbout: [
        "AI agency",
        "AI automation",
        "AI voice agents",
        "AI receptionist",
        "AI call agents",
        "AI phone agents",
        "AI reply agents",
        "AI call answering service",
        "Virtual receptionist",
        "WhatsApp AI agents",
        "WhatsApp chatbots",
        "n8n workflow automation",
        "CRM automation",
        "Document processing automation",
        "AI strategy",
      ],
      sameAs: [site.founder.linkedin],
    },
    {
      "@type": "WebSite",
      "@id": `${site.url}/#website`,
      url: site.url,
      name: site.name,
      publisher: { "@id": `${site.url}/#organization` },
      inLanguage: "en",
    },
  ],
};
