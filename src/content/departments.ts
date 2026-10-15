// What we automate, by team. Used by the scrolling section on the home page.
export type Department = {
  name: string;
  intro: string;
  tasks: string[];
  firstProject: { title: string; detail: string };
  tools: string[];
  service: string; // slug of the most relevant service page
};

export const departments: Department[] = [
  {
    name: "Front desk & phone",
    intro:
      "A missed call is often a missed customer. An AI voice agent answers every call on the first ring, day or night, deals with the routine ones and passes the rest to your team with a summary.",
    tasks: [
      "Answering every call, including after hours and at busy times",
      "Booking, moving and cancelling appointments by phone",
      "Answering common questions: hours, prices, location, availability",
      "Reminder and confirmation calls to reduce no-shows",
      "Taking messages and logging every call in your CRM",
    ],
    firstProject: {
      title: "An AI receptionist for after-hours and overflow calls",
      detail: "It answers when your team cannot, books straight into your calendar, and tells callers it is an AI assistant.",
    },
    tools: ["Twilio", "Vapi", "Retell AI", "Google Calendar", "n8n"],
    service: "ai-voice-agents",
  },
  {
    name: "Customer support",
    intro:
      "Most support queues are filled with the same handful of questions. An assistant answers those in seconds, in the customer's own channel, and passes everything else to your team with the context attached.",
    tasks: [
      "Order-status and FAQ replies on WhatsApp and web chat",
      "Sorting and routing new tickets by topic and urgency",
      "Drafted replies for agents to review and send",
      "Return and refund requests checked against your policy",
      "Feedback requests, with unhappy replies sent to a manager",
    ],
    firstProject: {
      title: "An assistant for your five most common questions",
      detail: "It answers from your own help content and order data, and hands over when it is not sure.",
    },
    tools: ["WhatsApp Business", "Web chat", "Your help centre", "n8n"],
    service: "ai-chatbots-agents",
  },
  {
    name: "Finance & accounting",
    intro:
      "Finance work is rule-heavy and document-heavy, which makes it a strong fit for automation. Controls and approvals stay exactly as they are. What goes away is the typing and the chasing.",
    tasks: [
      "Supplier invoices and purchase orders read and posted",
      "Bank and ledger reconciliation, leaving only the unmatched items",
      "Payment and purchase approvals with limits and an audit trail",
      "Month-end reporting packs built on a schedule",
      "Polite payment reminders that stop when the invoice is paid",
    ],
    firstProject: {
      title: "Supplier invoices read, matched and posted to your ERP",
      detail: "Clean invoices go straight through. Anything that fails a check waits for a person, with the reason shown.",
    },
    tools: ["SAP", "Xero", "Zoho Books", "Power Automate", "Power BI"],
    service: "document-processing",
  },
  {
    name: "Sales & CRM",
    intro:
      "Leads go cold while they wait. We make sure every enquiry is captured, reaches the right person in minutes, and gets followed up whether or not anyone remembers.",
    tasks: [
      "Enquiries from every channel captured in one place",
      "Leads scored and routed by region, product or deal size",
      "Follow-up sequences that stop the moment a lead replies",
      "Call and meeting notes written back to the CRM",
      "Pipeline and activity reports sent each week",
    ],
    firstProject: {
      title: "Every enquiry into the CRM and to the right owner",
      detail: "Website forms, ads, WhatsApp and email all feed one workflow, so your rules are applied once.",
    },
    tools: ["HubSpot", "Zoho CRM", "Salesforce", "Make", "WhatsApp Business"],
    service: "crm-lead-automation",
  },
  {
    name: "Operations",
    intro:
      "Operations teams hold the business together with spreadsheets, exports and reminders. We connect the systems so information moves on its own, and people step in only where judgement is needed.",
    tasks: [
      "Order, stock and delivery alerts to the right person",
      "Reorder suggestions sent for a one-tap approval",
      "Daily and weekly reports that build themselves",
      "Internal requests and approvals with reminders",
      "Data kept in step between your systems, with no retyping",
    ],
    firstProject: {
      title: "A daily report that builds itself",
      detail: "Figures are pulled from your systems, checked, and delivered in the format your team already reads.",
    },
    tools: ["Google Workspace", "Microsoft 365", "SharePoint", "Python", "SQL"],
    service: "workflow-automation",
  },
];
