import type { Faq } from "./services";

// Location pages. Each one answers "can you do this for a business like mine, here?"
// with details that are specific to the place: channels, language, privacy law, currency, time zone.
export type Location = {
  slug: string;
  name: string; // "the UAE", "Dubai"
  short: string; // label used in links
  title: string; // page headline (the search phrase people use)
  metaDescription: string;
  intro: string;
  points: { title: string; body: string }[];
  industries: string[]; // industry slugs that matter most here
  faqs: Faq[];
};

export const locations: Location[] = [
  {
    slug: "uae",
    name: "the UAE",
    short: "United Arab Emirates",
    title: "AI agency in the UAE",
    metaDescription:
      "AI agency based in the UAE. AI receptionists, AI call agents, reply agents, WhatsApp chatbots and n8n automation for businesses across the Emirates.",
    intro:
      "wetheapex is based in the UAE. We build AI voice agents, WhatsApp assistants and workflow automations for businesses across the Emirates, in English and Arabic, priced in dirhams.",
    points: [
      { title: "WhatsApp first", body: "Most customer conversations in the UAE happen on WhatsApp. We build on the official WhatsApp Business API, so replies, bookings and order updates happen where your customers already are." },
      { title: "English and Arabic", body: "Voice agents and chat assistants are tested in both languages with real sample conversations before launch." },
      { title: "UAE data protection law", body: "We work to the UAE Personal Data Protection Law. Access is limited to what the project needs, and your data is never used to train AI models." },
      { title: "Same time zone, priced in AED", body: "You deal with a team in your own working day, and quotes and invoices are in dirhams with VAT shown clearly." },
    ],
    industries: ["real-estate", "business-setup", "healthcare-clinics", "hospitality-travel", "retail-restaurants", "ecommerce-d2c"],
    faqs: [
      { q: "Do you work with businesses outside Dubai?", a: "Yes. We work with businesses across all seven Emirates. Most projects are delivered remotely, with calls at a time that suits you." },
      { q: "Can the AI speak Arabic?", a: "Yes. English is the usual starting point and Arabic is added and tested with real sample calls and messages before launch." },
      { q: "Do you invoice in dirhams?", a: "Yes. Quotes and invoices are in AED, with VAT added where it applies." },
      { q: "Do you offer an AI call answering service in the UAE?", a: "Yes. Our AI receptionist answers your business calls 24/7 in English and Arabic, books appointments, sends details on WhatsApp and transfers urgent calls to your team. Calls are forwarded from your existing number." },
      { q: "Is an AI receptionist better than a virtual receptionist?", a: "For routine calls, usually. It answers on the first ring at any hour, handles several calls at once and books straight into your systems. Many businesses keep people for complex or sensitive calls and let the AI handle the rest." },
    ],
  },
  {
    slug: "dubai",
    name: "Dubai",
    short: "Dubai",
    title: "AI agency in Dubai",
    metaDescription:
      "AI agency for Dubai businesses: AI receptionists, AI call agents, reply agents and WhatsApp chatbots for real estate, clinics, hospitality and retail.",
    intro:
      "Dubai businesses compete on speed of response. We build AI voice agents, WhatsApp assistants and automations that answer every call and enquiry in seconds, day or night.",
    points: [
      { title: "Built for fast-moving sectors", body: "Real estate, clinics, hospitality and retail in Dubai all live on enquiries. We make sure none of them wait, on the phone, on WhatsApp or by email." },
      { title: "An international customer base", body: "Your customers call and message in several languages and time zones. An AI receptionist answers at 3am as well as it does at 3pm." },
      { title: "Works with the tools Dubai teams use", body: "Property portals, booking systems, CRMs such as HubSpot, Zoho and Salesforce, and accounting tools such as Zoho Books and Xero." },
      { title: "Free zone and mainland", body: "We work with companies in both. If your free zone has its own data protection rules, such as DIFC, we follow those." },
    ],
    industries: ["real-estate", "business-setup", "hospitality-travel", "healthcare-clinics", "retail-restaurants"],
    faqs: [
      { q: "Can you meet in person in Dubai?", a: "Most work is remote, which keeps costs down. An in-person session in Dubai can be arranged for audits and workshops." },
      { q: "Do you build for real estate agencies in Dubai?", a: "Yes. Instant portal lead response, AI voice agents for enquiries and viewing scheduling are among our most requested projects." },
      { q: "Can you build an AI receptionist for a Dubai clinic or business setup company?", a: "Yes. Clinics use it for bookings, reminders and routine patient questions. Business setup consultants use it to answer formation enquiries instantly and collect documents. Both work in English and Arabic." },
      { q: "Does it work with our Dubai business number?", a: "Usually, yes. Calls are forwarded from your existing business line, either always or only when nobody picks up, so customers keep calling the number they know." },
    ],
  },
  {
    slug: "abu-dhabi",
    name: "Abu Dhabi",
    short: "Abu Dhabi",
    title: "AI agency in Abu Dhabi",
    metaDescription:
      "AI automation for Abu Dhabi businesses: AI voice agents, document processing, approval workflows and reporting automation, in English and Arabic.",
    intro:
      "We help Abu Dhabi organisations remove repetitive work from finance, operations and front-desk teams, with automations that keep people in control of approvals and exceptions.",
    points: [
      { title: "Strong on process and controls", body: "Many Abu Dhabi organisations run approval-heavy processes. We automate the routing, reminders and record-keeping without removing a single control." },
      { title: "Documents and reporting", body: "Invoices, purchase orders and month-end reports are read, checked and prepared automatically, with exceptions held for review." },
      { title: "English and Arabic", body: "Assistants, forms and notifications can run in both languages." },
      { title: "ADGM aware", body: "If you are registered in ADGM, its data protection regulations apply and we work to them." },
    ],
    industries: ["finance-accounting", "professional-services", "healthcare-clinics", "hospitality-travel"],
    faqs: [
      { q: "Do you work with government-related entities?", a: "We work with private businesses of 10 to 200 people. If you need a vendor with formal security certifications, tell us early, as we do not currently hold them." },
      { q: "Can automations run inside our Microsoft 365?", a: "Yes. Power Automate, Power Apps and SharePoint are among the tools we build with, so your data stays in your own tenant." },
    ],
  },
  {
    slug: "india",
    name: "India",
    short: "India",
    title: "AI agency for businesses in India",
    metaDescription:
      "AI automation for Indian businesses: WhatsApp chatbots, AI voice agents, n8n workflows and GST invoice processing, priced in rupees.",
    intro:
      "We build AI assistants and automations for growing Indian businesses, from D2C brands and SaaS companies to clinics and finance teams, with quotes in rupees.",
    points: [
      { title: "WhatsApp is the main channel", body: "Order updates, support, lead capture and COD confirmation all work best on WhatsApp in India. We build on the official Business API." },
      { title: "GST-aware document processing", body: "Supplier invoices are read with GSTIN, tax breakdowns and line items, then checked and posted to your accounting system." },
      { title: "DPDP Act", body: "We handle personal data in line with the Digital Personal Data Protection Act, 2023: consent first, minimum data, and deletion when it is no longer needed." },
      { title: "Priced in INR, close time zone", body: "Invoices are in rupees with GST where it applies, and our working day overlaps almost fully with yours." },
    ],
    industries: ["ecommerce-d2c", "saas", "finance-accounting", "healthcare-clinics", "retail-restaurants"],
    faqs: [
      { q: "Do you work with Indian D2C brands?", a: "Yes. WhatsApp order-status assistants, returns workflows and COD confirmation are common first projects." },
      { q: "Can voice agents speak Hindi or other Indian languages?", a: "English is the starting point. Hindi and other languages can be added and are tested with real sample calls before launch." },
      { q: "Do you invoice in rupees?", a: "Yes. Quotes and invoices are in INR, with GST added where it applies." },
    ],
  },
  {
    slug: "united-states",
    name: "the United States",
    short: "United States",
    title: "AI agency for US businesses",
    metaDescription:
      "AI automation for US small and mid-sized businesses: AI voice agents and receptionists, lead response, CRM automation and n8n workflows, quoted in US dollars.",
    intro:
      "We build AI voice agents and automations for US businesses that want every call answered and every lead followed up, without adding headcount.",
    points: [
      { title: "Never miss a call", body: "For clinics, home services, real estate and professional firms, a missed call is a lost customer. An AI receptionist answers every one, around the clock." },
      { title: "Outbound calls done properly", body: "Reminder and follow-up calls go only to people who have agreed to be contacted, and the agent always says it is an AI assistant." },
      { title: "Works with your stack", body: "HubSpot, Salesforce, QuickBooks, Google Workspace, Microsoft 365 and most tools with an API." },
      { title: "Quoted in USD, calls in your hours", body: "Fixed quotes in dollars, with meetings scheduled in US business hours." },
    ],
    industries: ["healthcare-clinics", "real-estate", "professional-services", "saas", "ecommerce-d2c"],
    faqs: [
      { q: "You are based in the UAE. How does working with a US business go?", a: "Delivery is remote. Calls are scheduled in your business hours, and day-to-day progress is shared in writing so nothing waits on a time-zone overlap." },
      { q: "Are AI voice calls legal for my business?", a: "Rules for automated and recorded calls vary by state and by purpose. We build with disclosure and consent as defaults, and you should confirm the specifics for your use with your own counsel." },
    ],
  },
  {
    slug: "united-kingdom",
    name: "the United Kingdom",
    short: "United Kingdom",
    title: "AI agency for UK businesses",
    metaDescription:
      "AI automation for UK businesses: AI receptionists, WhatsApp and web chat assistants, workflow automation and document processing, UK GDPR aware, quoted in pounds.",
    intro:
      "We help UK small and mid-sized businesses take repetitive work off their teams, with AI assistants and automations built with UK GDPR in mind.",
    points: [
      { title: "UK GDPR from the start", body: "Data minimisation, clear purposes and a named processor list are part of every build, not an afterthought." },
      { title: "Calls and messages with consent", body: "Outbound contact follows consent rules, and voice agents introduce themselves as AI." },
      { title: "Finance and VAT documents", body: "Invoices are read with VAT numbers and breakdowns, then matched and posted to Xero, Sage or QuickBooks." },
      { title: "Quoted in GBP, overlapping hours", body: "Our working day overlaps with most of yours, and quotes are in pounds." },
    ],
    industries: ["professional-services", "healthcare-clinics", "ecommerce-d2c", "hospitality-travel"],
    faqs: [
      { q: "Where is our data processed?", a: "Wherever possible, inside your own accounts. Where a provider processes data elsewhere, we tell you which one and where before work starts." },
      { q: "Do you invoice in pounds?", a: "Yes. Quotes and invoices are in GBP." },
    ],
  },
  {
    slug: "canada",
    name: "Canada",
    short: "Canada",
    title: "AI agency for Canadian businesses",
    metaDescription:
      "AI automation for Canadian businesses: AI voice agents, chat assistants, CRM and workflow automation, built with PIPEDA and CASL in mind, quoted in CAD.",
    intro:
      "We build AI assistants and workflow automations for Canadian businesses, with privacy and anti-spam rules considered from the first design.",
    points: [
      { title: "PIPEDA and CASL aware", body: "Consent, purpose and unsubscribe handling are built into follow-up sequences and outbound contact." },
      { title: "Every call and enquiry answered", body: "AI receptionists and chat assistants cover evenings, weekends and busy periods." },
      { title: "English first, French on request", body: "French can be added and is tested with real sample conversations before launch." },
      { title: "Quoted in CAD", body: "Fixed quotes in Canadian dollars, with meetings in your business hours." },
    ],
    industries: ["healthcare-clinics", "professional-services", "real-estate", "saas"],
    faqs: [
      { q: "Can the assistant work in French?", a: "Yes, on request. Each language is tested with real examples before it goes live." },
      { q: "Do you invoice in Canadian dollars?", a: "Yes. Quotes and invoices are in CAD." },
    ],
  },
  {
    slug: "saudi-arabia",
    name: "Saudi Arabia",
    short: "Saudi Arabia",
    title: "AI agency for businesses in Saudi Arabia",
    metaDescription:
      "AI automation for Saudi businesses: Arabic and English AI voice agents, WhatsApp assistants and workflow automation, built with the Saudi PDPL in mind.",
    intro:
      "We build Arabic and English AI assistants and automations for Saudi businesses, working from the neighbouring UAE in nearly the same time zone.",
    points: [
      { title: "Arabic first", body: "Assistants are designed and tested in Arabic, including the way customers actually write and speak, with English alongside." },
      { title: "WhatsApp and phone", body: "The two channels customers use most. Both are answered instantly, with handover to your team when needed." },
      { title: "Saudi PDPL", body: "We design data flows with the Kingdom's Personal Data Protection Law in mind, including where data is stored and processed." },
      { title: "A neighbour's working day", body: "One hour apart, with the same working week." },
    ],
    industries: ["retail-restaurants", "healthcare-clinics", "real-estate", "hospitality-travel"],
    faqs: [
      { q: "Which currency do you quote in?", a: "US dollars or UAE dirhams, whichever you prefer." },
      { q: "Can data stay inside the Kingdom?", a: "Tell us your requirement at the start. Where the tools allow it, we choose hosting and providers to match." },
    ],
  },
  {
    slug: "australia",
    name: "Australia",
    short: "Australia",
    title: "AI agency for Australian businesses",
    metaDescription:
      "AI automation for Australian businesses: AI receptionists, chat assistants, workflow and document automation, built with the Privacy Act in mind.",
    intro:
      "We build AI voice agents and automations for Australian small and mid-sized businesses, delivered remotely with clear written updates.",
    points: [
      { title: "After-hours covered", body: "An AI receptionist answers when your team has gone home, books the appointment and sends the summary for the morning." },
      { title: "Privacy Act aware", body: "Collection notices, minimum data and clear retention are part of the design." },
      { title: "Works with Xero and MYOB exports", body: "Invoices and reports are read, checked and posted, with exceptions held for a person." },
      { title: "Async by default", body: "With a large time difference, progress is shared in writing each day and calls are booked in your morning or afternoon." },
    ],
    industries: ["healthcare-clinics", "professional-services", "real-estate", "retail-restaurants"],
    faqs: [
      { q: "How do you handle the time difference?", a: "Daily written updates, and calls at the start or end of your day. Nothing is blocked waiting for a meeting." },
      { q: "Which currency do you quote in?", a: "US dollars." },
    ],
  },
  {
    slug: "singapore",
    name: "Singapore",
    short: "Singapore",
    title: "AI agency for Singapore businesses",
    metaDescription:
      "AI automation for Singapore businesses: AI voice agents, WhatsApp assistants, CRM and workflow automation, built with the PDPA in mind.",
    intro:
      "We build AI assistants and workflow automations for Singapore businesses that serve customers across the region and across time zones.",
    points: [
      { title: "PDPA aware", body: "Consent, purpose limitation and Do Not Call considerations are part of how outbound contact is designed." },
      { title: "Regional customers, one inbox", body: "Enquiries from several countries and channels are captured, routed and answered in one workflow." },
      { title: "WhatsApp and web chat", body: "Assistants answer common questions, qualify leads and book calls, then hand over with the full conversation." },
      { title: "Four hours apart", body: "Our mornings overlap with your afternoons, which makes same-day replies normal." },
    ],
    industries: ["saas", "ecommerce-d2c", "professional-services", "hospitality-travel"],
    faqs: [
      { q: "Which currency do you quote in?", a: "US dollars." },
      { q: "Can assistants handle more than one language?", a: "Yes. English first, with other languages added and tested before launch." },
    ],
  },
];

export const getLocation = (slug: string) => locations.find((l) => l.slug === slug);
