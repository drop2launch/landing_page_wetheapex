// Single source of truth for business details.
// Everything marked PLACEHOLDER must be replaced before launch (see README checklist).

export const site = {
  name: "wetheapex",
  legalName: "wetheapex",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://wetheapex.com").replace(/\/$/, ""),
  tagline: "AI automation agency",
  description:
    "wetheapex is an AI automation agency based in the UAE. We design, build and run AI voice agents, chat assistants and workflow automations that remove repetitive work from growing businesses.",
  location: "the United Arab Emirates",
  // Countries shown across the site. Edit this list to add or remove a market.
  countries: ["United Arab Emirates", "United States", "Canada", "United Kingdom", "India", "Saudi Arabia", "Australia", "Singapore"],
  markets: "the UAE, the US, Canada, the UK, India, Saudi Arabia, Australia and Singapore",

  email: "support@wetheapex.com",

  founder: {
    name: "Muthuraman",
    role: "Founder",
    // Short line shown on the home and About pages. Replace with a real bio when ready.
    bio: "Muthuraman leads every project personally, from the first call to handover.",
    linkedin: "https://www.linkedin.com/in/muthu-raman-santhanam-641ab627b/",
  },

  // Your Cal.com booking link (the part after cal.com/). Leave empty to show a placeholder box.
  calLink: "benil-nal1id/30min",

  // Set to false to hide the results strip on the home page until you have real figures.
  showStats: false,
  // Set to false to hide the testimonials section until you have real quotes.
  showTestimonials: false,
  // The testimonials and results figures on the home page are SAMPLE content.
  // While this is true each one carries a small "Sample" label. Set to false once they are real.
  sampleProof: true,

  hostingRegion: "the UAE or the European Union", // DUMMY: confirm where you actually host
  privacyContact: "Muthuraman",
  legalLastUpdated: "16 October 2026", // update whenever the legal pages change
} as const;

export const nav = [
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Case studies", href: "/case-studies" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
] as const;
