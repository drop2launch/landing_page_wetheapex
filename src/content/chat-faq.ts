import { industries } from "./industries";
import { currencies } from "./pricing";
import { services } from "./services";
import { site } from "@/lib/site";

// Everything the chat assistant knows, as ready-made questions and answers.
// The widget shows these as one-tap questions; the server also matches typed questions against them.
// Edit an answer here and it changes in both places.

export type ChatTopic = "Services" | "Voice agents" | "Pricing" | "How it works" | "AI & data" | "Getting started";

export type ChatFaq = {
  id: string;
  topic: ChatTopic;
  q: string;
  a: string;
  /** Words and phrases that suggest a typed question is about this entry. Lowercase.
   *  Start one with "!" when it signals what the visitor wants (cost, ownership, fit) rather than a subject. */
  keywords: string[];
  link?: { label: string; href: string };
};

export const chatTopics: ChatTopic[] = ["Services", "Voice agents", "Pricing", "How it works", "AI & data", "Getting started"];

const priceAnswer =
  "We do not publish a price list, because cost depends on how many systems are involved and how many exceptions the process has. After a free 30-minute call you get a fixed quote for a defined scope, including an estimate of running costs, before any work starts.";

const book = { label: "Book a free call", href: "/contact" };

export const chatFaqs: ChatFaq[] = [
  // ---------------------------------------------------------------- Services
  {
    id: "services",
    topic: "Services",
    q: "What services do you offer?",
    a: `${services.length} services: ${services.map((s) => s.name).join(", ")}. Each is a defined piece of work with a fixed scope and price.`,
    keywords: ["services", "offer", "what do you do", "what can you do", "help with", "build"],
    link: { label: "See all services", href: "/services" },
  },
  {
    id: "chatbots",
    topic: "Services",
    q: "What can a website or WhatsApp assistant do?",
    a: "It answers common questions from your own help content and order data, qualifies new leads, books calls, and hands over to a person with the full conversation when it is not sure.",
    keywords: ["chatbot", "chat bot", "whatsapp", "website chat", "assistant", "support bot", "live chat"],
    link: { label: "AI chatbots & agents", href: "/services/ai-chatbots-agents" },
  },
  {
    id: "n8n",
    topic: "Services",
    q: "Do you build n8n workflows?",
    a: "Yes. n8n is our main workflow tool, on n8n cloud or self-hosted on your own server. We also build in Make and Power Automate when those fit your setup better.",
    keywords: ["n8n", "zapier", "power automate", "workflow", "workflows", "integrate", "integration", "self-hosted", "self hosted"],
    link: { label: "n8n & workflow automation", href: "/services/workflow-automation" },
  },
  {
    id: "crm",
    topic: "Services",
    q: "How do you help with leads and CRM?",
    a: "Every enquiry from your website, ads, WhatsApp, phone and email lands in one place, is scored and routed to the right person, and gets followed up automatically until the lead replies.",
    keywords: ["crm", "lead", "leads", "sales", "follow up", "follow-up", "pipeline", "hubspot", "zoho", "salesforce", "pipedrive"],
    link: { label: "CRM & lead handling", href: "/services/crm-lead-automation" },
  },
  {
    id: "documents",
    topic: "Services",
    q: "Can you automate invoices and documents?",
    a: "Yes. Invoices, purchase orders and reports are read, checked against your rules and posted to your accounting or ERP system. Anything that fails a check waits for a person, with the reason shown.",
    keywords: ["invoice", "invoices", "document", "documents", "purchase order", "ocr", "pdf", "erp", "sap", "xero", "accounting", "reconciliation"],
    link: { label: "Document processing", href: "/services/document-processing" },
  },
  {
    id: "audit",
    topic: "Services",
    q: "What is the AI audit?",
    a: "A paid, fixed-scope review of how your team works. You get a ranked list of what to automate, with estimated savings and cost for each, and a 90-day plan you can act on with us or anyone else.",
    keywords: ["audit", "workshop", "strategy", "where to start", "not sure", "assessment", "review"],
    link: { label: "AI audit & strategy workshop", href: "/services/ai-audit-workshop" },
  },
  {
    id: "industries",
    topic: "Services",
    q: "Which industries do you work with?",
    a: `${industries.map((i) => i.name).join(", ")}. If yours is not listed, the same approach usually applies wherever calls, messages and paperwork repeat.`,
    keywords: ["industry", "industries", "sector", "e-commerce", "ecommerce", "saas", "retail", "restaurant", "real estate", "property", "clinic", "healthcare", "hotel", "hospitality", "law firm", "accountant"],
    link: { label: "See industries", href: "/industries" },
  },

  // ------------------------------------------------------------ Voice agents
  {
    id: "voice",
    topic: "Voice agents",
    q: "What is an AI voice agent?",
    a: "An AI receptionist that answers your phone in a natural voice. It handles routine calls from start to finish, books appointments, takes messages, and transfers to your team when a person is needed.",
    keywords: ["voice", "voice agent", "receptionist", "phone", "telephone", "calls", "answer calls", "missed calls", "ivr", "call centre", "call center"],
    link: { label: "AI voice agents & receptionist", href: "/services/ai-voice-agents" },
  },
  {
    id: "voice-booking",
    topic: "Voice agents",
    q: "Can it book appointments over the phone?",
    a: "Yes. It checks your calendar live, offers times, books the slot and confirms by SMS or WhatsApp. It can also move or cancel bookings and make reminder calls.",
    keywords: ["appointment", "appointments", "booking by phone", "reservation", "reservations", "calendar", "schedule", "reminder", "no-show"],
    link: { label: "How the voice agent works", href: "/services/ai-voice-agents" },
  },
  {
    id: "voice-natural",
    topic: "Voice agents",
    q: "Does it sound robotic?",
    a: "Current voice models sound natural and cope with interruptions and pauses. You listen to test calls and choose the voice before anything goes live.",
    keywords: ["robotic", "sound", "natural", "human-like", "accent", "quality of voice"],
  },
  {
    id: "voice-disclosure",
    topic: "Voice agents",
    q: "Does it tell callers they are talking to an AI?",
    a: "Yes. The agent introduces itself as an AI assistant at the start of every call. Where calls are recorded, we also set up the notice the law requires.",
    keywords: ["disclose", "disclosure", "tell callers", "know it is ai", "recorded", "recording", "consent"],
  },
  {
    id: "voice-languages",
    topic: "Voice agents",
    q: "Which languages does it speak?",
    a: "English is the usual starting point, and Arabic and other languages can be added. Each language is tested with real sample calls before launch.",
    keywords: ["!language", "!languages", "!arabic", "english", "hindi", "multilingual", "speak"],
  },
  {
    id: "voice-handover",
    topic: "Voice agents",
    q: "What happens when the agent cannot help?",
    a: "It transfers the call to your team with a short summary, or takes a message and sends it to the right person straight away. You set the rules for when that happens.",
    keywords: ["transfer", "handover", "hand over", "escalate", "cannot help", "human", "real person", "speak to someone"],
  },

  {
    id: "call-agent",
    topic: "Voice agents",
    q: "Can it make outbound calls, like an AI call agent?",
    a: "Yes. An AI call agent can make appointment reminders, confirmations and call-backs to new leads, only to people who have agreed to be contacted. It introduces itself as an AI assistant on every call.",
    keywords: ["!call agent", "!calling agent", "!phone agent", "outbound", "cold call", "call back", "callback", "reminder calls", "dialer"],
    link: { label: "AI receptionist & call agents", href: "/services/ai-voice-agents" },
  },
  {
    id: "virtual-receptionist",
    topic: "Voice agents",
    q: "How is an AI receptionist different from a virtual receptionist or call answering service?",
    a: "A virtual receptionist or call answering service is a person in a call centre taking messages from a script. An AI receptionist answers on the first ring at any hour, handles several calls at once, books straight into your calendar and logs every call in your CRM. Many businesses use AI for routine calls and keep people for the rest.",
    keywords: ["!virtual receptionist", "!call answering", "!answering service", "call center", "call centre", "outsource", "human receptionist", "compare"],
    link: { label: "Read the comparison", href: "/blog/ai-receptionist-vs-virtual-receptionist-uae" },
  },
  {
    id: "voice-number",
    topic: "Voice agents",
    q: "Can we keep our existing business number?",
    a: "Usually, yes. Calls are forwarded from your current number, either always or only when nobody picks up, so customers keep calling the number they know. We confirm the forwarding setup with you during the build.",
    keywords: ["!existing number", "!our number", "!phone number", "keep number", "forward", "forwarding", "landline", "etisalat", "du", "port"],
  },
  {
    id: "whatsapp-api",
    topic: "Services",
    q: "Do you use the official WhatsApp Business API?",
    a: "Yes. We connect through Meta's official WhatsApp Business Platform via a Meta-approved provider, so your number is verified and not at risk of being banned. Meta charges per message under its own pricing, and we estimate those costs in your quote.",
    keywords: ["!whatsapp api", "!whatsapp business api", "official", "banned", "meta", "green tick", "whatsapp cost", "whatsapp pricing"],
    link: { label: "AI chatbots & agents", href: "/services/ai-chatbots-agents" },
  },
  {
    id: "reply-agent",
    topic: "Services",
    q: "What is an AI reply agent?",
    a: "AI that reads incoming emails, WhatsApp and social messages and Google reviews, then replies straight away or drafts the reply for your team to approve. It answers from your own information and passes anything unusual to a person.",
    keywords: ["!reply agent", "!auto reply", "!auto-reply", "!autoreply", "email replies", "inbox", "instagram", "facebook", "dm", "dms", "reviews", "google reviews"],
    link: { label: "AI reply agents", href: "/services/ai-reply-agents" },
  },

  // ----------------------------------------------------------------- Pricing
  {
    id: "price",
    topic: "Pricing",
    q: "How much does it cost?",
    a: priceAnswer,
    keywords: ["!price", "!prices", "!pricing", "!cost", "!costs", "!how much", "fee", "fees", "charge", "quote", "budget", "expensive", "cheap", "rates"],
    link: { label: "Get a fixed quote", href: "/contact" },
  },
  {
    id: "running-cost",
    topic: "Pricing",
    q: "What does it cost to run after it is built?",
    a: "Usually the platform subscription and AI usage, billed to you directly by the provider. We estimate both in the quote and set usage limits so there are no surprises.",
    keywords: ["!running cost", "!cost to run", "!ongoing cost", "!monthly cost", "subscription", "usage", "per call", "per message", "!maintenance cost"],
  },
  {
    id: "fixed-price",
    topic: "Pricing",
    q: "Is the price fixed?",
    a: "Yes. After a short call we agree a defined scope and give you a fixed quote before any work starts. If the scope changes, we agree the change and its cost first.",
    keywords: ["fixed", "fixed price", "hourly", "estimate", "scope creep", "hidden", "extra charges"],
  },
  {
    id: "currencies",
    topic: "Pricing",
    q: "Which currencies do you invoice in?",
    a: `${currencies.map((c) => c.code).join(", ")}, depending on where you are based. VAT or GST is added where it applies.`,
    keywords: ["currency", "currencies", "aed", "usd", "gbp", "cad", "inr", "dirham", "dollar", "pound", "rupee", "vat", "gst", "invoice in"],
  },
  {
    id: "roi",
    topic: "Pricing",
    q: "How do I know it will pay for itself?",
    a: "Multiply the hours a task takes each week by the hourly cost and by 52. Compare that with the build and running cost. The calculator on our home page does the sum, and if a task will not pay back within a year we will tell you.",
    keywords: ["roi", "return", "pay back", "payback", "worth it", "save", "savings", "calculator", "value"],
    link: { label: "Open the savings calculator", href: "/#savings" },
  },

  // ------------------------------------------------------------ How it works
  {
    id: "process",
    topic: "How it works",
    q: "How does a project run?",
    a: "Four steps. Discover: a free call. Audit: we map the process and give you a ranked plan with a fixed quote. Build: short stages, tested on your real data. Support: monitoring, fixes and improvements.",
    keywords: ["process", "how do you work", "how does it work", "steps", "method", "project run", "approach", "stages"],
    link: { label: "See the method", href: "/#process" },
  },
  {
    id: "timeline",
    topic: "How it works",
    q: "How long does it take?",
    a: "It depends on scope. A single workflow or a first voice agent is the quickest kind of project. You get a timeline with your quote, before any work begins.",
    keywords: ["!how long", "!timeline", "time frame", "weeks", "duration", "deadline", "how fast", "quickly", "when can"],
  },
  {
    id: "from-us",
    topic: "How it works",
    q: "What do you need from us?",
    a: "A person who knows the process, access to the tools involved (only what the project needs), and a set of real past examples to test against. Usually a kick-off call, a few short check-ins and a review at the end.",
    keywords: ["need from us", "our time", "our team", "involvement", "requirements", "prepare", "access"],
  },
  {
    id: "change-software",
    topic: "How it works",
    q: "Do we need to change the software we use?",
    a: "Usually not. We build around your current tools. If something has an API, a database connection or a regular export, we can normally connect it.",
    keywords: ["change software", "existing tools", "current tools", "replace", "migrate", "our system", "legacy", "api", "tools you work with"],
  },
  {
    id: "ownership",
    topic: "How it works",
    q: "Who owns what you build?",
    a: "You do. Everything is built in your accounts and comes with plain-language documentation, so it keeps working whether or not you stay with us.",
    keywords: ["!own", "!owns", "!ownership", "!who owns", "intellectual property", "our accounts", "lock-in", "locked in"],
  },
  {
    id: "support",
    topic: "How it works",
    q: "What happens after launch?",
    a: "Automations are monitored and failures raise an alert. A monthly support plan covers fixes, changes when a connected tool updates, small improvements, and a summary of what ran.",
    keywords: ["after launch", "support", "maintenance", "breaks", "break", "goes wrong", "fix", "monitor", "retainer"],
  },

  // --------------------------------------------------------------- AI & data
  {
    id: "models",
    topic: "AI & data",
    q: "Which AI models do you use?",
    a: "It depends on the task. We choose from leading models such as Claude, GPT and Gemini, and use smaller ones where they do the job as well. You know which is used, and why, before we build.",
    keywords: ["model", "models", "claude", "gpt", "chatgpt", "openai", "gemini", "anthropic", "llm", "which ai"],
  },
  {
    id: "mistakes",
    topic: "AI & data",
    q: "Will the AI make mistakes?",
    a: "It can, so every build is tested on your real past cases first, limited to a defined set of actions, and set to hand uncertain cases to a person. Sensitive actions can require approval.",
    keywords: ["mistake", "mistakes", "wrong", "hallucinate", "hallucination", "accurate", "accuracy", "reliable", "errors", "trust"],
  },
  {
    id: "security",
    topic: "AI & data",
    q: "Is our data safe?",
    a: "We ask only for the access a project needs, keep credentials in a password manager or your own vault, remove access when the work ends, and send an AI provider only what a task requires.",
    keywords: ["safe", "security", "secure", "data", "privacy", "confidential", "gdpr", "pdpl", "access", "credentials", "passwords"],
    link: { label: "Security & data handling", href: "/security" },
  },
  {
    id: "training",
    topic: "AI & data",
    q: "Is our data used to train AI?",
    a: "No. We use business plans whose terms rule out training on your data, and we tell you which provider is involved before work starts.",
    keywords: ["!train", "!training", "!used to train", "learn from our data"],
  },
  {
    id: "certifications",
    topic: "AI & data",
    q: "Do you hold security certifications?",
    a: `No. ${site.name} is a small agency and does not currently hold certifications such as ISO 27001 or SOC 2. If you need a certified vendor or a security questionnaire completed, tell us early and we will be clear about what we can meet.`,
    keywords: ["!certification", "!certifications", "!certified", "!iso", "soc 2", "soc2", "compliance", "compliant"],
  },
  {
    id: "nda",
    topic: "AI & data",
    q: "Will you sign an NDA?",
    a: "Yes. We are happy to sign yours or provide ours before you share anything sensitive, including before the first call.",
    keywords: ["!nda", "!non-disclosure", "confidentiality agreement"],
  },
  {
    id: "replace-staff",
    topic: "AI & data",
    q: "Will this replace our staff?",
    a: "The aim is to remove repetitive tasks so your team can spend time on work that needs judgement. Exceptions, approvals and difficult conversations stay with people.",
    keywords: ["replace", "jobs", "staff", "redundant", "employees", "lay off"],
  },

  // --------------------------------------------------------- Getting started
  {
    id: "start",
    topic: "Getting started",
    q: "How do I get started?",
    a: "Book a free 30-minute call. We look at one process together and tell you honestly whether it is worth automating. There is no obligation and no sales deck.",
    keywords: ["start", "started", "begin", "next step", "book", "book a call", "meeting", "demo", "consultation", "sign up"],
    link: book,
  },
  {
    id: "call",
    topic: "Getting started",
    q: "What happens on the free call?",
    a: "First 10 minutes: you walk us through one process. Next 10: we map the steps and point out what can run on its own. Last 10: you get a straight answer, automate it, fix it first, or leave it.",
    keywords: ["free call", "on the call", "30 minutes", "30-minute", "agenda", "what happens on"],
    link: book,
  },
  {
    id: "fit",
    topic: "Getting started",
    q: "Are we the right size for this?",
    a: "A good fit is usually 10 to 200 people with a process someone repeats every day or week, in tools that have an API or an export. If the process changes weekly and nobody owns it yet, it is probably too early.",
    keywords: ["!a fit", "!right fit", "!good fit", "!right size", "!too small", "!too big", "small business", "startup", "enterprise", "sme"],
  },
  {
    id: "where",
    topic: "Getting started",
    q: "Where are you based and who do you work with?",
    a: `We are based in ${site.location} and work with teams in ${site.countries.join(", ")}. Calls with other time zones are scheduled at a time that suits you.`,
    keywords: ["where", "based", "location", "country", "countries", "uae", "dubai", "abu dhabi", "usa", "canada", "uk", "india", "saudi", "australia", "singapore", "time zone", "timezone", "remote"],
  },
  {
    id: "contact",
    topic: "Getting started",
    q: "How can I reach a person?",
    a: `Email ${site.email}, or book a call and you will speak with the founder directly.`,
    keywords: ["contact", "email", "reach", "talk to", "speak to", "human", "person", "phone number", "whatsapp number", "call you"],
    link: book,
  },
];

export const faqById = (id: string) => chatFaqs.find((f) => f.id === id);

/** Up to three other questions from the same topic, for "people also ask" suggestions. */
export function relatedFaqs(id: string, exclude: string[] = []): ChatFaq[] {
  const current = faqById(id);
  if (!current) return [];
  return chatFaqs.filter((f) => f.topic === current.topic && f.id !== id && !exclude.includes(f.id)).slice(0, 3);
}

/** Finds the entry that best matches a typed question, or undefined if nothing fits. */
export function matchFaq(question: string): ChatFaq | undefined {
  const text = ` ${question.toLowerCase().replace(/[^a-z0-9\s-]/g, " ").replace(/\s+/g, " ")} `;
  let best: ChatFaq | undefined;
  let bestScore = 0;
  for (const faq of chatFaqs) {
    let score = 0;
    for (const raw of faq.keywords) {
      const strong = raw.startsWith("!");
      const k = strong ? raw.slice(1) : raw;
      // Also accept a simple plural ("clinic" matches "clinics").
      if (text.includes(` ${k} `) || text.includes(` ${k}s `) || (k.includes(" ") && text.includes(k))) {
        // Intent words outrank subject words; longer phrases outrank single words.
        score += strong ? 5 : k.includes(" ") ? 3 : 1.5;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      best = faq;
    }
  }
  return bestScore >= 1.5 ? best : undefined;
}
