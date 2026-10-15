import type { Step } from "./services";

export type Industry = {
  slug: string;
  name: string;
  short: string;
  metaDescription: string;
  headline: string;
  intro: string;
  pains: string[];
  useCases: { title: string; detail: string }[];
  workflow: { title: string; steps: Step[] };
  services: string[]; // service slugs
  caseStudy: string | null;
};

export const industries: Industry[] = [
  {
    slug: "ecommerce-d2c",
    name: "E-commerce & D2C",
    short: "Order updates, returns, support queries and stock alerts.",
    metaDescription:
      "Automation for e-commerce and D2C brands: order updates, returns, customer support and stock alerts handled without manual work.",
    headline: "Handle more orders without a bigger support and operations team.",
    intro:
      "As order volume grows, so do “where is my order” messages, return requests and stock checks. We automate the routine ones so your team can focus on the customers who need real help.",
    pains: [
      "Support is flooded with order-status questions, especially during sales.",
      "Returns and refunds are tracked in spreadsheets and chased by hand.",
      "Stock runs out because nobody saw the numbers in time.",
      "Orders, payments and courier data live in separate tools that do not agree.",
    ],
    useCases: [
      {
        title: "Order-status replies on WhatsApp",
        detail: "Customers get an instant, accurate update with a tracking link.",
      },
      {
        title: "Returns and refund workflow",
        detail: "Requests are checked against your policy, approved or escalated, and tracked to completion.",
      },
      {
        title: "Low-stock and reorder alerts",
        detail: "The right person is told before a best-seller runs out.",
      },
      {
        title: "Daily sales and payout reconciliation",
        detail: "Store, payment gateway and courier figures compared automatically, with mismatches listed.",
      },
      {
        title: "Abandoned cart and COD confirmation",
        detail: "Timed messages that recover orders and reduce failed deliveries.",
      },
    ],
    workflow: {
      title: "Example: a return request",
      steps: [
        { title: "Customer requests a return", kind: "trigger" },
        { title: "Checked against policy", detail: "Order date, item, condition", kind: "auto" },
        { title: "Pickup booked", detail: "With your courier", kind: "auto" },
        { title: "Edge cases reviewed", detail: "By your team", kind: "human" },
        { title: "Refund issued and logged", kind: "auto" },
      ],
    },
    services: ["ai-chatbots-agents", "workflow-automation", "crm-lead-automation", "ai-reply-agents"],
    caseStudy: "whatsapp-order-assistant",
  },
  {
    slug: "finance-accounting",
    name: "Finance & accounting operations",
    short: "Invoice entry, reconciliations, approvals and month-end reporting.",
    metaDescription:
      "Automation for finance and accounting teams: invoice processing, reconciliations, approvals and month-end reporting with less manual work.",
    headline: "Close the books faster, with fewer manual steps.",
    intro:
      "Finance work depends on controls and audit trails, and “mostly right” is not good enough. We automate the repetitive steps and keep people in charge of the judgement calls.",
    pains: [
      "Invoices and expense claims are keyed in by hand.",
      "Reconciliations are done in spreadsheets and take days.",
      "Approvals are chased over email with no clear record.",
      "Month-end reports are rebuilt from scratch each time.",
    ],
    useCases: [
      {
        title: "Invoice and PO processing",
        detail: "Documents read, matched and posted, with exceptions queued for review.",
      },
      {
        title: "Bank and ledger reconciliation",
        detail: "Transactions matched automatically, leaving only the unmatched items for your team.",
      },
      {
        title: "Approval workflows",
        detail: "Payments, purchase requests and journals routed with limits, reminders and an audit trail.",
      },
      {
        title: "Month-end reporting pack",
        detail: "Data pulled from your ERP into a consistent report on a schedule.",
      },
      {
        title: "Receivables follow-up",
        detail: "Polite, timed payment reminders that stop when the invoice is paid.",
      },
    ],
    workflow: {
      title: "Example: month-end report",
      steps: [
        { title: "Period closes", kind: "trigger" },
        { title: "Data pulled from ERP", detail: "SAP, Xero or similar", kind: "auto" },
        { title: "Checks run", detail: "Totals and variances flagged", kind: "auto" },
        { title: "Finance reviews flags", kind: "human" },
        { title: "Report sent", detail: "To the same people, in the same format", kind: "auto" },
      ],
    },
    services: ["document-processing", "workflow-automation", "ai-audit-workshop"],
    caseStudy: "invoice-to-erp",
  },
  {
    slug: "saas",
    name: "SaaS",
    short: "Lead routing, onboarding, support triage and renewal reminders.",
    metaDescription:
      "Automation for SaaS companies: lead routing, customer onboarding, support triage and renewal reminders that run without manual effort.",
    headline: "Give every lead and customer a fast, consistent experience.",
    intro:
      "Small SaaS teams wear many hats. We automate the handoffs between marketing, sales, support and finance so nothing depends on someone remembering.",
    pains: [
      "Inbound leads wait hours for a first reply.",
      "Onboarding steps are tracked manually and some customers fall through.",
      "Support tickets are sorted and assigned by hand.",
      "Renewals and failed payments are noticed too late.",
    ],
    useCases: [
      {
        title: "Lead capture and routing",
        detail: "Every trial signup and demo request enriched, scored and assigned in minutes.",
      },
      {
        title: "Onboarding sequences",
        detail: "Tasks, emails and check-ins triggered by what the customer has and has not done.",
      },
      {
        title: "Support triage",
        detail: "Tickets categorised, prioritised and answered from your help docs where possible.",
      },
      {
        title: "Renewal and payment reminders",
        detail: "Account owners alerted ahead of renewals and when a payment fails.",
      },
      {
        title: "Internal reporting",
        detail: "Product, billing and CRM numbers combined into one weekly view.",
      },
    ],
    workflow: {
      title: "Example: a demo request",
      steps: [
        { title: "Demo form submitted", kind: "trigger" },
        { title: "Company details added", detail: "Size, industry, existing customer?", kind: "auto" },
        { title: "Routed to the right rep", detail: "By region and plan fit", kind: "auto" },
        { title: "Rep replies", detail: "With a suggested message and slots", kind: "human" },
        { title: "CRM updated", kind: "auto" },
      ],
    },
    services: ["crm-lead-automation", "ai-chatbots-agents", "workflow-automation"],
    caseStudy: null,
  },
  {
    slug: "retail-restaurants",
    name: "Retail & restaurants",
    short: "Bookings, enquiries, supplier orders and daily sales reports.",
    metaDescription:
      "Automation for retail stores and restaurants: bookings, customer enquiries, supplier orders and daily sales reports handled automatically.",
    headline: "Spend less time on admin and more time on the floor.",
    intro:
      "Owners and managers in retail and hospitality lose hours to messages, bookings, supplier calls and end-of-day numbers. We automate the routine parts with tools that are simple enough for the whole team to use.",
    pains: [
      "Phone and WhatsApp enquiries go unanswered during busy hours.",
      "Bookings and orders are written down in more than one place.",
      "Supplier orders are placed from memory and by phone.",
      "Daily sales numbers are collected by hand from each outlet.",
    ],
    useCases: [
      {
        title: "WhatsApp enquiries and bookings",
        detail: "Opening hours, menus, availability and reservations handled instantly.",
      },
      {
        title: "Daily sales summary",
        detail: "POS figures from every outlet sent to the owner each evening.",
      },
      {
        title: "Supplier reordering",
        detail: "Order suggestions based on stock levels, sent for a one-tap approval.",
      },
      {
        title: "Review and feedback follow-up",
        detail: "Customers asked for feedback, with unhappy responses sent straight to a manager.",
      },
      {
        title: "Staff rota and reminders",
        detail: "Shifts shared and confirmed without a chain of messages.",
      },
    ],
    workflow: {
      title: "Example: a table booking on WhatsApp",
      steps: [
        { title: "Customer asks for a table", kind: "trigger" },
        { title: "Availability checked", kind: "auto" },
        { title: "Booking confirmed", detail: "Added to your booking sheet", kind: "auto" },
        { title: "Large groups referred", detail: "To the manager", kind: "human" },
        { title: "Reminder sent", detail: "On the day", kind: "auto" },
      ],
    },
    services: ["ai-voice-agents", "ai-chatbots-agents", "workflow-automation"],
    caseStudy: null,
  },
  {
    slug: "real-estate",
    name: "Real estate",
    short: "Lead qualification, viewing bookings, follow-ups and listing updates.",
    metaDescription:
      "AI and automation for real estate agencies and developers: instant lead response, viewing bookings, follow-ups and listing updates.",
    headline: "Respond to every property enquiry in seconds, day or night.",
    intro:
      "Property buyers and tenants contact several agents at once, and the first useful reply usually wins. We make sure yours is first, on the phone, on WhatsApp and by email.",
    pains: [
      "Portal and ad leads wait hours for a first reply.",
      "Agents spend evenings calling back enquiries that were never serious.",
      "Viewings are arranged through long chains of calls and messages.",
      "Follow-ups stop after the first attempt.",
    ],
    useCases: [
      { title: "AI voice agent for enquiries", detail: "Answers calls about listings, asks budget and timing, and books a viewing." },
      { title: "Portal and ad lead response", detail: "Every new lead gets a reply on WhatsApp within moments, with the right listing details." },
      { title: "Viewing scheduling", detail: "Slots offered, booked and confirmed, with reminders to the client and the agent." },
      { title: "Lead qualification and routing", detail: "Leads scored on budget, area and timeline, then assigned to the right agent." },
      { title: "Long-term follow-up", detail: "Polite check-ins over weeks and months that stop when the client replies." },
      { title: "Project launch hotline", detail: "For off-plan launches, an AI line answers the surge of calls, shares the brochure and payment plan on WhatsApp, and books callers in with sales." },
    ],
    workflow: {
      title: "Example: a portal enquiry",
      steps: [
        { title: "Enquiry arrives", detail: "Portal, ad or phone call", kind: "trigger" },
        { title: "AI replies and qualifies", detail: "Budget, area, timing", kind: "auto" },
        { title: "Viewing offered", detail: "From the agent's calendar", kind: "auto" },
        { title: "Booked and confirmed", detail: "With a reminder", kind: "auto" },
        { title: "Agent takes over", detail: "With the full history", kind: "human" },
      ],
    },
    services: ["ai-voice-agents", "crm-lead-automation", "ai-chatbots-agents", "ai-reply-agents"],
    caseStudy: null,
  },
  {
    slug: "business-setup",
    name: "Business setup & corporate services",
    short: "Enquiry handling, cost questions, document collection and renewal reminders.",
    metaDescription:
      "AI and automation for business setup consultants and corporate service providers: instant enquiry response, document collection, application tracking and renewal reminders.",
    headline: "Answer every company-formation enquiry while it is still warm.",
    intro:
      "People planning a company ask the same questions of several consultants: which jurisdiction, what it costs, how long it takes, which documents are needed. We make sure your answer is first and accurate, then take the paperwork chasing off your team.",
    pains: [
      "Enquiries from ads and WhatsApp wait hours for a first reply.",
      "Consultants answer the same cost and jurisdiction questions all day.",
      "Passport copies and documents are chased by hand, one client at a time.",
      "Licence and visa renewals are tracked in spreadsheets and sometimes missed.",
    ],
    useCases: [
      { title: "Instant enquiry response", detail: "Calls and WhatsApp messages answered in seconds, with the right questions asked: activity, jurisdiction, visas needed, timeline." },
      { title: "Cost and package guidance", detail: "Common questions answered from your own package list, with anything bespoke passed to a consultant." },
      { title: "Document collection", detail: "Clients get a checklist for their case and reminders until every document has arrived, filed against the right application." },
      { title: "Application status updates", detail: "Clients get updates on WhatsApp as each stage completes, so your team is not asked “any news?” all day." },
      { title: "Renewal reminders", detail: "Trade licence, visa and Emirates ID renewals flagged in good time, with the client contacted automatically." },
    ],
    workflow: {
      title: "Example: a new company-formation enquiry",
      steps: [
        { title: "Enquiry arrives", detail: "Call, WhatsApp or web form", kind: "trigger" },
        { title: "AI answers and qualifies", detail: "Activity, jurisdiction, visas", kind: "auto" },
        { title: "Package details sent", detail: "From your own price list", kind: "auto" },
        { title: "Consultation booked", detail: "With the right consultant", kind: "auto" },
        { title: "Consultant takes over", detail: "With the full history", kind: "human" },
      ],
    },
    services: ["ai-voice-agents", "ai-chatbots-agents", "document-processing", "crm-lead-automation"],
    caseStudy: null,
  },
  {
    slug: "healthcare-clinics",
    name: "Healthcare & clinics",
    short: "Appointment calls, reminders, patient enquiries and front-desk admin.",
    metaDescription:
      "AI and automation for clinics and healthcare providers: appointment booking by phone, reminders, patient enquiries and front-desk admin.",
    headline: "Let your front desk look after the patients who are in the room.",
    intro:
      "Clinic phones ring most when the front desk is busiest. We automate bookings, reminders and routine questions so staff can focus on the people in front of them. Clinical decisions always stay with your team.",
    pains: [
      "Calls go unanswered during clinic hours and patients book elsewhere.",
      "No-shows leave gaps that could have been filled.",
      "Staff repeat the same answers about hours, location and insurance.",
      "Rescheduling takes several calls back and forth.",
    ],
    useCases: [
      { title: "AI receptionist for bookings", detail: "Books, moves and cancels appointments by phone, straight into your scheduling system." },
      { title: "Reminders and confirmations", detail: "Calls or messages before each appointment, with easy rescheduling." },
      { title: "Routine patient questions", detail: "Hours, directions, preparation instructions and accepted insurance, answered instantly." },
      { title: "Waiting-list filling", detail: "When a slot opens, the next patient on the list is offered it automatically." },
      { title: "Intake forms and documents", detail: "Forms sent before the visit and filed against the right record." },
    ],
    workflow: {
      title: "Example: a booking call",
      steps: [
        { title: "Patient calls", detail: "Any time of day", kind: "trigger" },
        { title: "AI answers", detail: "And says it is an AI assistant", kind: "auto" },
        { title: "Slot found and booked", detail: "In your scheduling system", kind: "auto" },
        { title: "Confirmation sent", detail: "With a reminder later", kind: "auto" },
        { title: "Anything clinical", detail: "Goes to your staff", kind: "human" },
      ],
    },
    services: ["ai-voice-agents", "ai-chatbots-agents", "workflow-automation"],
    caseStudy: "ai-receptionist-clinic",
  },
  {
    slug: "hospitality-travel",
    name: "Hospitality & travel",
    short: "Reservations, guest questions, upsells and review follow-up.",
    metaDescription:
      "AI and automation for hotels, travel and hospitality: reservations by phone and chat, guest questions, upsells and review follow-up.",
    headline: "Answer every guest, in every channel, at any hour.",
    intro:
      "Guests ask the same questions before, during and after a stay, and they ask at all hours. We put fast, accurate answers on the phone, WhatsApp and web chat, and hand over to your staff for anything that needs a person.",
    pains: [
      "Reservation calls and messages are missed outside office hours.",
      "Front-of-house staff are pulled away to answer routine questions.",
      "Booking changes are handled by hand across several systems.",
      "Reviews and feedback are requested inconsistently.",
    ],
    useCases: [
      { title: "Reservations by phone and chat", detail: "Availability checked and bookings taken, changed or cancelled without a wait." },
      { title: "Guest questions", detail: "Check-in times, directions, facilities and policies answered instantly." },
      { title: "Pre-arrival messages", detail: "Confirmations, directions and optional extras sent at the right moment." },
      { title: "Requests routed to staff", detail: "Housekeeping, maintenance and special requests sent to the right team and tracked." },
      { title: "Review and feedback follow-up", detail: "Guests asked for feedback after their stay, with unhappy replies sent to a manager." },
    ],
    workflow: {
      title: "Example: a late-night reservation",
      steps: [
        { title: "Guest calls or messages", kind: "trigger" },
        { title: "AI checks availability", detail: "In your booking system", kind: "auto" },
        { title: "Reservation made", detail: "Details confirmed back", kind: "auto" },
        { title: "Confirmation sent", detail: "By message or email", kind: "auto" },
        { title: "Special requests", detail: "Passed to your team", kind: "human" },
      ],
    },
    services: ["ai-voice-agents", "ai-chatbots-agents", "workflow-automation", "ai-reply-agents"],
    caseStudy: null,
  },
  {
    slug: "professional-services",
    name: "Professional services",
    short: "Client intake, document handling, scheduling and billing admin.",
    metaDescription:
      "AI and automation for law firms, accountants, consultancies and agencies: client intake, document handling, scheduling and billing admin.",
    headline: "Spend billable hours on clients, not on admin.",
    intro:
      "Law firms, accountants, consultancies and agencies sell their time, and a surprising share of it goes on intake, chasing documents and scheduling. We automate those steps and keep confidentiality at the centre.",
    pains: [
      "New enquiries wait for a partner or manager to respond.",
      "Staff chase clients for documents by email, again and again.",
      "Meeting scheduling takes several rounds of messages.",
      "Time and billing details are re-entered across systems.",
    ],
    useCases: [
      { title: "Client intake", detail: "Enquiries captured by phone, chat or form, qualified, and booked for a consultation." },
      { title: "Document collection", detail: "Clients sent a checklist and reminded until everything has arrived." },
      { title: "Document review support", detail: "Key fields and dates pulled from contracts, statements and forms for a person to check." },
      { title: "Scheduling", detail: "Meetings booked, moved and confirmed without the back-and-forth." },
      { title: "Billing admin", detail: "Time entries, invoices and payment reminders prepared for approval." },
    ],
    workflow: {
      title: "Example: a new client enquiry",
      steps: [
        { title: "Enquiry arrives", detail: "Call, chat or form", kind: "trigger" },
        { title: "Details captured", detail: "Matter type, urgency", kind: "auto" },
        { title: "Conflict and fit checks", detail: "By your rules", kind: "auto" },
        { title: "Consultation booked", detail: "With the right person", kind: "auto" },
        { title: "Your team takes over", detail: "With a summary", kind: "human" },
      ],
    },
    services: ["ai-voice-agents", "document-processing", "crm-lead-automation"],
    caseStudy: null,
  },
];

export const getIndustry = (slug: string) => industries.find((i) => i.slug === slug);
