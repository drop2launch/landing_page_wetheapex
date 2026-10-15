export type Step = {
  title: string;
  detail?: string;
  // trigger = what starts the workflow, auto = done by the automation, human = a person steps in
  kind?: "trigger" | "auto" | "human";
};

export type Faq = { q: string; a: string };

export type Service = {
  slug: string;
  name: string;
  short: string;
  metaDescription: string;
  headline: string;
  intro: string;
  problems: string[];
  build: { title: string; detail: string }[];
  workflow: { title: string; steps: Step[] };
  tools: string[];
  timeline: string; // currently dummy values: replace with your real typical timelines
  caseStudy: string | null; // slug of a file in content/case-studies
  faqs: Faq[];
};

export const services: Service[] = [
  {
    slug: "ai-voice-agents",
    name: "AI receptionist & AI call agents",
    short:
      "AI receptionists and AI call agents that answer every call, book appointments, make reminder calls and transfer to your team when a person is needed.",
    metaDescription:
      "AI receptionist and AI call answering service for your business: answers every call 24/7 in English and Arabic, books appointments, makes reminder calls and hands over to your team.",
    headline: "Never miss a call again. Every caller gets an answer.",
    intro:
      "We build AI receptionists and AI call agents: voice AI that answers your phone in a natural voice, handles routine calls from start to finish, makes reminder and follow-up calls, and passes the rest to your team with a summary. They work around the clock and always tell callers they are speaking with an AI assistant.",
    problems: [
      "Calls go unanswered after hours and during busy periods, and the caller rings someone else.",
      "Your front desk spends the day on the same questions: hours, prices, availability.",
      "Callers wait on hold or leave voicemails that are picked up late.",
      "Messages are written on paper and never reach the CRM.",
    ],
    build: [
      {
        title: "AI receptionist",
        detail: "Answers on the first ring, understands what the caller needs, answers common questions and routes the call.",
      },
      {
        title: "Appointment booking by phone",
        detail: "Checks your calendar, offers times, books the slot and confirms by SMS or WhatsApp.",
      },
      {
        title: "Outbound AI call agent",
        detail: "Appointment reminders, confirmations, lead call-backs and follow-ups, made only to people who have agreed to be contacted.",
      },
      {
        title: "Transfer to a person",
        detail: "Urgent or complex calls are passed to your team live, with a short summary so the caller does not repeat themselves.",
      },
      {
        title: "Call notes in your systems",
        detail: "Every call is summarised and logged against the right contact in your CRM or booking system.",
      },
      {
        title: "Call, then WhatsApp",
        detail: "After the call, the caller gets the details on WhatsApp or SMS: the booking, a location pin, a brochure or a payment link.",
      },
      {
        title: "English and Arabic",
        detail: "One agent can answer in English and Arabic, and switch when the caller does. Each language is tested with real sample calls.",
      },
    ],
    workflow: {
      title: "Example: an after-hours booking call",
      steps: [
        { title: "Customer calls", detail: "After hours, or while lines are busy", kind: "trigger" },
        { title: "AI answers and listens", detail: "In a natural voice", kind: "auto" },
        { title: "Calendar checked", detail: "Real availability, live", kind: "auto" },
        { title: "Appointment booked", detail: "Confirmed by message", kind: "auto" },
        { title: "Team gets a summary", detail: "Or the call, if it is urgent", kind: "human" },
      ],
    },
    tools: ["Twilio", "Vapi", "Retell AI", "ElevenLabs", "n8n", "Google Calendar", "Your CRM or booking system"],
    timeline: "2–4 weeks", // DUMMY
    caseStudy: "ai-receptionist-clinic",
    faqs: [
      {
        q: "What is the difference between an AI receptionist and an AI call agent?",
        a: "An AI receptionist answers incoming calls: questions, bookings, messages and transfers. An AI call agent also makes outbound calls, such as reminders, confirmations and calling back new leads. Most businesses start with the receptionist and add outbound calls later.",
      },
      {
        q: "Does it sound robotic?",
        a: "Current voice models sound natural and cope with interruptions and pauses. You listen to test calls and choose the voice before it goes live.",
      },
      {
        q: "Does it tell callers they are speaking with an AI?",
        a: "Yes. The agent introduces itself as an AI assistant at the start of the call. Where calls are recorded, we also set up the notice the law requires.",
      },
      {
        q: "Which languages can it speak?",
        a: "English is the usual starting point, and Arabic and other languages can be added. We test each language with real sample calls before launch.",
      },
      {
        q: "What happens when it cannot help?",
        a: "It transfers the call to your team, or takes a message and sends it to the right person straight away. You decide the rules.",
      },
      {
        q: "Can we keep our existing phone number?",
        a: "Usually, yes. Calls are forwarded from your current number, either always or only when your team does not pick up. In the UAE that is normally a forwarding setting on your existing business line, which we confirm with you during setup.",
      },
      {
        q: "How is this different from a virtual receptionist or a call answering service?",
        a: "A virtual receptionist or call answering service uses people in a call centre who take messages from a script. An AI receptionist answers on the first ring at any hour, can take several calls at once, books straight into your calendar and logs every call in your CRM. Many businesses use AI for routine calls and keep people for the calls that need them.",
      },
      {
        q: "Are calls recorded, and is that allowed?",
        a: "Only if you want them to be. Where calls are recorded, callers are told at the start, recordings are kept for a period you choose, and access is limited, in line with the UAE Personal Data Protection Law and the rules in the other countries you serve.",
      },
      {
        q: "How long does it take to go live?",
        a: "A focused receptionist for one location is usually live within a few weeks: a short discovery call, a build, test calls you listen to, then a soft launch on after-hours calls before it takes daytime overflow.",
      },
    ],
  },
  {
    slug: "ai-reply-agents",
    name: "AI reply agents",
    short:
      "AI that reads incoming emails, WhatsApp and social messages and reviews, then replies or drafts the reply for your team to approve.",
    metaDescription:
      "AI reply agents for email, WhatsApp, Instagram, Facebook and Google reviews. Fast, accurate replies sent automatically or drafted for approval.",
    headline: "Every message answered in minutes, in your voice.",
    intro:
      "We build AI reply agents that read what comes into your inboxes, understand what the person wants, and either reply straight away or prepare a draft for your team to approve. They answer from your own information and pass anything unusual to a person.",
    problems: [
      "Shared inboxes fill up faster than the team can answer them.",
      "Instagram and Facebook messages are missed or answered days later.",
      "Google reviews go unanswered, including the unhappy ones.",
      "The same questions are typed out by hand, slightly differently each time.",
    ],
    build: [
      {
        title: "Email reply agent",
        detail: "Sorts incoming email, answers routine questions and drafts replies to the rest for a person to check and send.",
      },
      {
        title: "WhatsApp and social messages",
        detail: "Replies to WhatsApp, Instagram and Facebook messages from your own content, and hands over when needed.",
      },
      {
        title: "Review replies",
        detail: "Drafts a thoughtful reply to each Google review, with negative ones flagged to a manager first.",
      },
      {
        title: "Approval mode",
        detail: "Start with every reply approved by a person, then let the routine ones go out automatically once you trust them.",
      },
    ],
    workflow: {
      title: "Example: a customer email",
      steps: [
        { title: "Email arrives", detail: "In your shared inbox", kind: "trigger" },
        { title: "AI reads and sorts it", detail: "Topic, urgency, customer", kind: "auto" },
        { title: "Checks your information", detail: "Order, policy, help content", kind: "auto" },
        { title: "Drafts the reply", detail: "In your tone of voice", kind: "auto" },
        { title: "Approved and sent", detail: "Or sent automatically, if routine", kind: "human" },
      ],
    },
    tools: ["Gmail", "Outlook", "WhatsApp Business API", "Instagram", "Facebook", "Google Business Profile", "n8n"],
    timeline: "2–4 weeks", // DUMMY
    caseStudy: null,
    faqs: [
      {
        q: "Will it send replies without anyone checking?",
        a: "Only if you want it to. Most clients start with every reply drafted for approval, then let routine replies go automatically once they are happy with the quality.",
      },
      {
        q: "Will the replies sound like us?",
        a: "The agent is set up with your tone of voice, your standard answers and examples of good past replies, and you review samples before launch.",
      },
      {
        q: "Can it reply to Google reviews?",
        a: "Yes. It drafts a reply to each review. Negative reviews are flagged to a manager rather than answered automatically.",
      },
      {
        q: "What happens with messages it does not understand?",
        a: "They are passed to a person with a short note on why, and nothing is sent until someone deals with them.",
      },
    ],
  },
  {
    slug: "ai-chatbots-agents",
    name: "AI chatbots & agents",
    short:
      "Answer common questions and qualify leads on your website and WhatsApp, around the clock, and hand over to a person when needed.",
    metaDescription:
      "Website and WhatsApp assistants that answer customer questions, qualify leads and hand over to your team when a person is needed.",
    headline: "Reply to every customer in seconds, without adding to your support team.",
    intro:
      "We build assistants for your website and WhatsApp that answer the questions your team answers every day, collect the details you need from new leads, and pass the conversation to a person when it matters.",
    problems: [
      "The same ten questions take up most of your support team's day.",
      "Enquiries that arrive at night or on weekends wait until the next working day.",
      "Sales spends time on leads that were never a fit.",
      "Customers repeat themselves because the conversation history is not passed on.",
    ],
    build: [
      {
        title: "Support assistant",
        detail:
          "Answers from your own help articles, policies and order data. When it does not know, it says so and hands over.",
      },
      {
        title: "Lead qualification",
        detail:
          "Asks the questions your sales team would ask, then books a call or routes the lead to the right person.",
      },
      {
        title: "Handover to a person",
        detail:
          "Your team gets the full conversation and a short summary, so the customer never has to start again.",
      },
      {
        title: "Review and reporting",
        detail:
          "A regular summary of what customers asked, what was answered and what needs a better answer.",
      },
    ],
    workflow: {
      title: "Example: a WhatsApp order query",
      steps: [
        { title: "Customer sends a message", detail: "“Where is my order?”", kind: "trigger" },
        { title: "Assistant identifies the order", detail: "Matches phone number or order ID", kind: "auto" },
        { title: "Looks up the status", detail: "Reads from your store or courier", kind: "auto" },
        { title: "Replies with an update", detail: "In plain language, with a tracking link", kind: "auto" },
        { title: "Hands over if needed", detail: "Delays and complaints go to your team", kind: "human" },
      ],
    },
    tools: ["WhatsApp Business API", "Website chat widget", "n8n", "Your help centre or documents", "Your CRM or store"],
    timeline: "2–4 weeks", // DUMMY
    caseStudy: "whatsapp-order-assistant",
    faqs: [
      {
        q: "Will it make things up?",
        a: "We limit it to your approved content and data. When a question falls outside that, it says it does not know and offers to connect the customer with a person.",
      },
      {
        q: "Can customers still reach a human?",
        a: "Yes. Handover is part of every build, and you decide the rules for when it happens.",
      },
      {
        q: "Which languages does it support?",
        a: "English by default. Arabic and other languages can be scoped during the audit and tested with your real conversations before launch.",
      },
      {
        q: "Do you use the official WhatsApp Business API?",
        a: "Yes. We connect through Meta's official WhatsApp Business Platform, via a Meta-approved provider, so your number is verified and is not at risk of being banned the way unofficial tools are. Meta charges per message under its own pricing, which changes from time to time, so we estimate those costs in your quote.",
      },
      {
        q: "What is the difference between a WhatsApp chatbot and a WhatsApp AI agent?",
        a: "A basic chatbot follows fixed menus and buttons. An AI agent understands free-text messages, answers from your own information, looks up orders or bookings in your systems and takes actions, then hands over to a person when it should.",
      },
      {
        q: "Is customer conversation data used to train AI models?",
        a: "No. We configure the AI providers we use so that your data is not used for model training. See our Security page for details.",
      },
    ],
  },
  {
    slug: "workflow-automation",
    name: "n8n & workflow automation",
    short: "Workflows built in n8n, Make or Power Automate that connect the tools you already use, so work moves without anyone retyping it.",
    metaDescription:
      "n8n workflow automation, plus Make and Power Automate. We connect your existing tools so data moves without manual copy-paste.",
    headline: "Stop moving data between systems by hand.",
    intro:
      "We connect the tools your team already uses so that an order, a form, an approval or a report moves from one step to the next on its own, with a person involved only where judgement is needed.",
    problems: [
      "People copy the same information into two or three systems.",
      "Approvals sit in someone's inbox with no reminder and no record.",
      "Weekly reports are rebuilt by hand from exports and spreadsheets.",
      "A process works only because one person remembers every step.",
    ],
    build: [
      {
        title: "n8n workflows, hosted your way",
        detail: "Built on n8n cloud or self-hosted on your own server, so your data stays where you want it.",
      },
      {
        title: "AI steps inside the workflow",
        detail: "Reading emails, sorting requests, drafting replies and summarising documents, as steps in the same flow.",
      },
      {
        title: "System-to-system connections",
        detail: "Data entered once and sent everywhere it is needed, with checks on the way.",
      },
      {
        title: "Approval flows",
        detail: "Requests routed to the right approver, with reminders, escalation and an audit trail.",
      },
      {
        title: "Scheduled reports",
        detail: "Numbers pulled, combined and delivered on a schedule, in the format your team already reads.",
      },
      {
        title: "Alerts and exceptions",
        detail: "When something fails or looks wrong, the right person is told and the item is held for review.",
      },
    ],
    workflow: {
      title: "Example: purchase request approval",
      steps: [
        { title: "Request submitted", detail: "Through a simple form", kind: "trigger" },
        { title: "Checked against budget", detail: "Amount and cost centre validated", kind: "auto" },
        { title: "Sent to the approver", detail: "With one-click approve or reject", kind: "human" },
        { title: "Recorded in your system", detail: "No retyping", kind: "auto" },
        { title: "Requester notified", detail: "With the decision and next step", kind: "auto" },
      ],
    },
    tools: ["n8n", "Make", "Power Automate", "Power Apps", "SharePoint", "Google Workspace", "Microsoft 365", "Python"],
    timeline: "1–3 weeks", // DUMMY
    caseStudy: null,
    faqs: [
      {
        q: "Which platform do you build on?",
        a: "It depends on what you already have. If you are a Microsoft 365 business, Power Automate usually makes sense. Otherwise we tend to use n8n or Make. We explain the choice and its running cost before we start.",
      },
      {
        q: "Who owns the automations?",
        a: "You do. They are built in your accounts, and you receive documentation for each one.",
      },
      {
        q: "What happens when a connected tool changes?",
        a: "Workflows are monitored and failures raise an alert. Fixes are covered under a support plan, or quoted separately if you do not have one.",
      },
      {
        q: "Can you work with our older or in-house systems?",
        a: "Usually, as long as there is an API, a database connection or a regular export. We confirm this during the audit.",
      },
    ],
  },
  {
    slug: "crm-lead-automation",
    name: "CRM & lead-handling automation",
    short: "Every enquiry is captured, routed to the right person and followed up on time.",
    metaDescription:
      "CRM and lead-handling automation: capture every enquiry, route it to the right person and follow up on time, without manual data entry.",
    headline: "No enquiry lost, no follow-up forgotten.",
    intro:
      "We make sure every lead from your website, ads, WhatsApp and email lands in one place, reaches the right person quickly and gets followed up, whether or not someone remembers to do it.",
    problems: [
      "Leads arrive through several channels and some never reach the CRM.",
      "The first reply depends on who happens to see the enquiry.",
      "Follow-ups are missed when the team is busy.",
      "The CRM is out of date because updating it is extra work.",
    ],
    build: [
      {
        title: "One intake for every channel",
        detail: "Website forms, ads, WhatsApp and email all create or update the same CRM record.",
      },
      {
        title: "Routing rules",
        detail: "Leads assigned by region, product or deal size, with a notification to the owner.",
      },
      {
        title: "Follow-up sequences",
        detail: "Timed reminders and messages that stop as soon as the lead replies.",
      },
      {
        title: "Pipeline upkeep",
        detail: "Stages, notes and next steps updated from calls, emails and meetings.",
      },
    ],
    workflow: {
      title: "Example: a new website enquiry",
      steps: [
        { title: "Form submitted", detail: "Or an ad lead, or a WhatsApp message", kind: "trigger" },
        { title: "Record created", detail: "Duplicates merged", kind: "auto" },
        { title: "Lead scored and routed", detail: "By your rules", kind: "auto" },
        { title: "Owner notified", detail: "With context and a suggested reply", kind: "human" },
        { title: "Follow-up scheduled", detail: "Until the lead replies or is closed", kind: "auto" },
      ],
    },
    tools: ["HubSpot", "Zoho CRM", "Salesforce", "Pipedrive", "n8n", "Make", "WhatsApp Business API"],
    timeline: "2–4 weeks", // DUMMY
    caseStudy: null,
    faqs: [
      {
        q: "We do not have a CRM yet. Can you still help?",
        a: "Yes. We can recommend one that fits your team size and budget and set it up as part of the project.",
      },
      {
        q: "Will automated follow-ups feel robotic?",
        a: "They are written with you, in your voice, and they stop the moment a lead replies so a person can take over.",
      },
      {
        q: "Can you clean up our existing CRM data?",
        a: "Yes. De-duplication and field clean-up can be scoped as part of the build.",
      },
    ],
  },
  {
    slug: "document-processing",
    name: "Document processing",
    short:
      "Invoices, purchase orders and reports are read, checked and entered into your systems, with exceptions flagged for review.",
    metaDescription:
      "Automated processing of invoices, purchase orders and reports. Data is extracted, checked against your rules and entered into your systems.",
    headline: "Take manual data entry out of invoices, POs and reports.",
    intro:
      "We set up a process that reads incoming documents, pulls out the fields you need, checks them against your rules and posts them to your accounting or ERP system. Anything uncertain goes to a person.",
    problems: [
      "Invoices are typed into the system line by line.",
      "Mismatches between invoice, PO and receipt are found late.",
      "Month-end is slowed down by a backlog of documents.",
      "There is no clear record of who checked or approved what.",
    ],
    build: [
      {
        title: "Capture",
        detail: "Documents collected from a shared mailbox, a folder or an upload form.",
      },
      {
        title: "Extraction",
        detail: "Supplier, dates, amounts, tax and line items read from PDFs and scans.",
      },
      {
        title: "Checks",
        detail: "Matching against purchase orders, duplicate detection and tax validation.",
      },
      {
        title: "Review queue and posting",
        detail: "Clean documents are posted. Exceptions wait in a queue with the reason shown.",
      },
    ],
    workflow: {
      title: "Example: supplier invoice",
      steps: [
        { title: "Invoice arrives by email", detail: "PDF or scan", kind: "trigger" },
        { title: "Fields extracted", detail: "Supplier, amounts, tax, line items", kind: "auto" },
        { title: "Matched to the PO", detail: "Quantity and price checked", kind: "auto" },
        { title: "Exceptions reviewed", detail: "Only the ones that fail a check", kind: "human" },
        { title: "Posted to your ERP", detail: "With the document attached", kind: "auto" },
      ],
    },
    tools: ["SAP", "Xero", "Zoho Books", "QuickBooks", "Power Automate", "SharePoint", "Python", "Power BI"],
    timeline: "3–6 weeks", // DUMMY
    caseStudy: "invoice-to-erp",
    faqs: [
      {
        q: "How accurate is the extraction?",
        a: "It depends on document quality and layout variety, so we measure it on a sample of your own documents before quoting. Anything below the confidence threshold you set goes to a person for review.",
      },
      {
        q: "Does it handle VAT and sales-tax invoices?",
        a: "Yes. Tax amounts and registration numbers can be extracted and checked. We set up the rules for the countries you invoice in, such as UAE and UK VAT.",
      },
      {
        q: "Does it work with scanned or photographed documents?",
        a: "Yes, though clear scans give better results. We test with your real documents during the audit.",
      },
      {
        q: "Where are our documents stored?",
        a: "In your own storage wherever possible. See our Security page for how we handle client data.",
      },
    ],
  },
  {
    slug: "ai-audit-workshop",
    name: "AI audit & strategy workshop",
    short:
      "A paid, fixed-scope review of your processes that ends with a ranked list of what to automate and what it will save.",
    metaDescription:
      "A fixed-price audit of your operations that identifies what to automate first, what it will save and what it will cost.",
    headline: "Know exactly what to automate first, and what it is worth.",
    intro:
      "The audit is the best place to start if you know there is time being wasted but are not sure where to begin. You get a clear, costed plan that you can act on with us, with another provider or in-house.",
    problems: [
      "You are being told to “use AI” but nobody can say where it would pay off.",
      "Different teams have different ideas and no way to compare them.",
      "You have tried a tool or two and it did not stick.",
      "You need numbers before committing budget.",
    ],
    build: [
      {
        title: "Process walkthroughs",
        detail: "Short sessions with the people who do the work, to see the real steps and the real tools.",
      },
      {
        title: "Time and cost map",
        detail: "Where hours go each week, based on your own figures.",
      },
      {
        title: "Ranked opportunities",
        detail: "Each one with effort, estimated saving, risks and what it depends on.",
      },
      {
        title: "A 90-day plan",
        detail: "What to do first, what to leave alone, and what each step is expected to cost.",
      },
    ],
    workflow: {
      title: "How the audit runs",
      steps: [
        { title: "Kick-off call", detail: "Goals, teams and tools", kind: "trigger" },
        { title: "Process walkthroughs", detail: "With the people doing the work", kind: "human" },
        { title: "Analysis", detail: "Time, cost and feasibility", kind: "auto" },
        { title: "Report", detail: "Ranked opportunities and plan", kind: "auto" },
        { title: "Review workshop", detail: "Decide what to do next", kind: "human" },
      ],
    },
    tools: ["Process mapping", "Your existing reports and exports", "Power BI", "Python", "SQL"],
    timeline: "1–2 weeks", // DUMMY
    caseStudy: null,
    faqs: [
      {
        q: "Do we have to build with you afterwards?",
        a: "No. The report is yours and is written so that any competent team could act on it.",
      },
      {
        q: "Is the audit fee credited against a build?",
        a: "Yes. If you go ahead with a build within 30 days, the audit fee is credited against it.", // DUMMY policy
      },
      {
        q: "How much of our team's time does it need?",
        a: "Usually a kick-off call, a short session with each team involved and a review workshop at the end.",
      },
      {
        q: "What if you find nothing worth automating?",
        a: "Then we will say so. A clear “not yet” with reasons is a valid outcome and saves you from spending on the wrong thing.",
      },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
