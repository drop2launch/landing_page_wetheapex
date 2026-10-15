import Link from "next/link";
import { CaseStudyCard } from "@/components/CaseStudyCard";
import { Cta } from "@/components/Cta";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { LiveWorkflow } from "@/components/LiveWorkflow";
import { RoiTeaser } from "@/components/RoiTeaser";
import { ScrollStory } from "@/components/ScrollStory";
import { pad, SectionHead } from "@/components/SectionHead";
import { departments } from "@/content/departments";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { services } from "@/content/services";
import { getCaseStudies } from "@/lib/content";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = {
  ...pageMeta({
    title: "AI Agency in the UAE",
    description:
      "AI agency in the UAE, working worldwide. AI receptionists, AI call agents, reply agents, WhatsApp chatbots and n8n automation for businesses everywhere.",
    path: "/",
  }),
  title: { absolute: `AI Agency UAE: AI Receptionist & Call Agents | ${site.name}` },
};

const assurances = [
  { label: "Fixed quotes", body: "A price agreed before any work starts." },
  { label: "You own it", body: "Built in your accounts, with documentation." },
  { label: "People in control", body: "Exceptions and approvals go to your team." },
  { label: "NDA on request", body: "Your data is never used to train AI models." },
];

const pains = [
  {
    title: "Skilled people doing copy-paste work",
    body: "Your team moves data between spreadsheets, inboxes and systems by hand, every single day.",
  },
  {
    title: "Leads and customers waiting for replies",
    body: "Enquiries arrive at night or on weekends and sit until someone gets to them.",
  },
  {
    title: "Reports that take days to assemble",
    body: "By the time the numbers are pulled together, they are already out of date.",
  },
  {
    title: "Growth that means more headcount",
    body: "Every increase in orders, invoices or tickets needs another hire to keep up.",
  },
];

const steps = [
  {
    title: "Discover",
    body: "A free call to understand your team, your tools and where the time goes.",
    get: "A shortlist of tasks worth a closer look.",
  },
  {
    title: "Audit",
    body: "We map your processes and rank what to automate by time and cost saved.",
    get: "A ranked plan with estimated savings and a fixed quote.",
  },
  {
    title: "Build",
    body: "We build in short stages, test with your real data and train your team.",
    get: "A working automation, tested and documented.",
  },
  {
    title: "Support",
    body: "We monitor, fix and improve the automations as your business changes.",
    get: "Alerts, fixes and a monthly summary of what ran.",
  },
];

// How we use AI, in plain language.
const aiPrinciples = [
  {
    title: "The right model for the task",
    body: "We are not tied to one AI provider. We choose per task from leading models such as Claude, GPT and Gemini, and use smaller, cheaper ones where they do the job as well.",
  },
  {
    title: "Grounded in your data",
    body: "Answers come from your own documents, policies and records, not from the model's memory. When it does not know, it says so and hands over.",
  },
  {
    title: "Guardrails on what it can do",
    body: "Each agent has a defined job and a defined set of actions. Anything sensitive, such as refunds, payments or messages to customers, can require a person's approval.",
  },
  {
    title: "Tested before your customers see it",
    body: "We replay real past cases through the system and review the results with you. It goes live when you are satisfied, not before.",
  },
  {
    title: "Running costs you can predict",
    body: "AI usage is paid per task. We estimate that cost before we build, show it in the quote, and set limits so there are no surprises.",
  },
  {
    title: "Your data stays yours",
    body: "We use business plans whose terms rule out training on your data, and send only what a task needs.",
  },
];

const tools = [
  "n8n", "Make", "Power Automate", "Twilio", "Vapi", "Power Apps", "SharePoint", "Power BI",
  "SAP", "Python", "SQL", "WhatsApp Business", "Google Workspace", "Microsoft 365",
];

const faqs = [
  {
    q: "What is an AI agent, in plain terms?",
    a: "Software that can read a request, decide what to do from rules you set, and carry out the steps in your tools, such as looking up an order or updating a record. It asks a person when it is unsure.",
  },
  {
    q: "Which AI models do you use?",
    a: "It depends on the task. We choose from leading models such as Claude, GPT and Gemini, and tell you which one is used and why before we build.",
  },
  {
    q: "Will the AI make mistakes?",
    a: "It can, which is why every build is tested on your real cases first, limited to defined actions, and set to hand uncertain cases to a person.",
  },
  {
    q: "What does it cost to run after it is built?",
    a: "Usually the platform subscription and AI usage, billed to you directly by the provider. We estimate both in the quote.",
  },
  {
    q: "Do we need to change the software we use?",
    a: "Usually not. We build around your current tools.",
  },
  {
    q: "How long does a project take?",
    a: "A single workflow or a first voice agent typically takes one to four weeks. You get a timeline before we start.",
  },
  {
    q: "What happens when something breaks?",
    a: "Automations are monitored and failures alert us. Support plans cover fixes.",
  },
  {
    q: "Is our data safe?",
    a: "Access is limited to what the project needs, we sign an NDA, and your data is not used to train AI models. The Security page has the details.",
  },
  {
    q: "Will this replace our staff?",
    a: "The aim is to remove repetitive tasks so your team can spend time on work that needs judgement.",
  },
  {
    q: "What if we're not sure what to automate?",
    a: "That is what the AI Audit is for. It gives you a ranked list of opportunities with estimated savings.",
  },
];

// SAMPLE content: replace with real client quotes and figures, then set sampleProof to false in site.ts.
const testimonials = [
  {
    quote: "We stopped missing calls after hours. Bookings are in the calendar before we open in the morning.",
    name: "Sara M.",
    role: "Clinic Manager, dental clinic",
  },
  {
    quote: "Invoices that used to take most of a morning are posted before we have finished our coffee.",
    name: "James R.",
    role: "Finance Lead, distribution company",
  },
  {
    quote: "Every enquiry gets a reply in minutes, and for the first time our CRM is actually up to date.",
    name: "Priya K.",
    role: "Head of Sales, SaaS company",
  },
];

const stats = [
  { value: "1,200+", label: "Hours saved for clients each month" },
  { value: "40+", label: "Workflows and agents in production" },
  { value: "3 weeks", label: "Average time to a first automation" },
  { value: "4.9 / 5", label: "Client-reported satisfaction" },
];

const standards = [
  { title: "Tested on your real data", body: "Every automation is run against your own documents, messages and records before it goes live." },
  { title: "A person in the loop", body: "Anything uncertain or unusual is held for your team, with the reason shown." },
  { title: "Monitored from day one", body: "Failures raise an alert. Nothing breaks silently." },
  { title: "Documented and handed over", body: "You get a plain-language guide to what each automation does and what it can access." },
  { title: "Secure by default", body: "Least-privilege access, NDA on request, and your data is never used to train AI models." },
  { title: "Measured, not assumed", body: "We record a baseline first and report against it, so you can see what changed." },
];

const fit = {
  yes: [
    "You have 10 to 200 people and a process someone repeats every day or week.",
    "The work lives in tools with an API or an export: a CRM, an ERP, spreadsheets, an inbox.",
    "You want a fixed scope and a fixed price, not an open-ended retainer.",
  ],
  no: [
    "The process changes every week and nobody owns it yet.",
    "You want AI for its own sake, without a task or a number to improve.",
    "You need a vendor with formal security certifications today.",
  ],
};

// Second half of a headline, set in grey.
const quiet = "text-muted";

export default function Home() {
  const studies = getCaseStudies().slice(0, 3);

  return (
    <>
      {/* 1. Hero: message on the left, a workflow running on the right */}
      <section className="px-3 sm:px-5">
        <div className="bg-wash relative mx-auto max-w-[110rem] overflow-hidden rounded-[2rem]">
          <div className="wrap grid gap-10 py-10 sm:py-16 lg:grid-cols-12 lg:items-center lg:gap-10 lg:py-24 xl:gap-16">
            <div className="min-w-0 lg:col-span-6 xl:col-span-7">
              {/* The small label is part of the H1 so the page's main heading names what we are */}
              <h1>
                <span className="eyebrow">AI agency in the UAE, working worldwide</span>
                <span className="mt-6 block text-balance text-[2.1rem] leading-[1.1] text-primary sm:text-5xl lg:text-[3rem] xl:text-[3.6rem] 2xl:text-[4.25rem]" style={{ fontWeight: 400, letterSpacing: "-0.03em" }}>
                  We take the repetitive work off your team&apos;s plate, so you can grow without hiring for it.
                </span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted sm:mt-6 sm:text-xl">
                {site.name} designs, builds and runs AI receptionists, AI call agents, reply agents and workflow
                automations for growing businesses. Every call answered, every message replied to, and reports that
                prepare themselves.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Link href="/contact" className="btn btn-primary h-12 px-7 text-[0.95rem]">
                  Book your free call
                </Link>
                <a href="#process" className="btn btn-secondary h-12 px-7 text-[0.95rem]">
                  See how it works
                </a>
              </div>
              <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink">
                {["Free 30-minute call", "Fixed quote before work starts", "You own everything we build"].map((t) => (
                  <li key={t} className="flex items-center gap-2">
                    <span className="text-accent">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0 lg:col-span-6 xl:col-span-5">
              <LiveWorkflow />
            </div>
          </div>
        </div>
      </section>

      {/* 2. Problem */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">The problem</p>
          <p className="statement reveal mt-6 max-w-4xl text-balance">
            Does this sound like your week? <span className={quiet}>If so, this is the work we remove.</span>
          </p>
          <ol className="tiles mt-16 sm:grid-cols-2">
            {pains.map((p, i) => (
              <li key={p.title} className="reveal grid gap-x-6 py-9 sm:grid-cols-[3rem_1fr]">
                <span className="num pt-1">{pad(i)}</span>
                <div>
                  <h3 className="text-xl leading-snug text-primary">{p.title}</h3>
                  <p className="mt-2 text-muted">{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* What we automate: content changes as you scroll */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            label="What we automate"
            title={
              <>
                Five areas, twenty-five everyday jobs. <span className={quiet}>Scroll to see what we take over in each.</span>
              </>
            }
          />
          <div className="mt-10 lg:mt-4">
            <ScrollStory items={departments} />
          </div>
        </div>
      </section>

      {/* 3. Services */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            label="Services"
            title={
              <>
                What we build. <span className={quiet}>Seven defined pieces of work, each with a fixed scope.</span>
              </>
            }
          />
          <ul className="mt-14 border-b border-line">
            {services.map((s, i) => (
              <li key={s.slug} className="reveal border-t border-line">
                <Link href={`/services/${s.slug}`} className="group grid items-baseline gap-x-10 gap-y-2 py-8 lg:grid-cols-12">
                  <span className="num lg:col-span-1">{pad(i)}</span>
                  <span className="text-2xl leading-snug tracking-[-0.015em] text-primary transition-colors group-hover:text-accent-dark lg:col-span-5">
                    {s.name}
                  </span>
                  <span className="text-muted lg:col-span-5">{s.short}</span>
                  <span className="hidden justify-self-end text-primary transition-transform group-hover:translate-x-1 group-hover:text-accent-dark lg:col-span-1 lg:block">
                    <Icon name="arrow" className="h-5 w-5" />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-8 max-w-3xl text-[0.95rem] text-muted">
            <span className="text-primary">We work with the tools you already use:</span> {tools.join(", ")}. Don&apos;t see
            yours? If it has an API or an export, we can usually connect it.
          </p>
        </div>
      </section>

      {/* What it costs */}
      <section id="savings" className="scroll-mt-24 px-3 sm:px-5">
        <div className="mx-auto max-w-[110rem]">
          <div className="wrap mb-10">
            <SectionHead
              label="What it costs you"
              title={
                <>
                  Put a number on it. <span className={quiet}>Move the sliders to match one task in your business.</span>
                </>
              }
            />
          </div>
          <div className="reveal">
            <RoiTeaser />
          </div>
        </div>
      </section>

      {/* 4. Industries */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            label="Industries"
            title={
              <>
                Built for businesses like yours. <span className={quiet}>Nine sectors, each with its own use cases.</span>
              </>
            }
          />
          <ul className="tiles mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind) => (
              <li key={ind.slug} className="reveal">
                <Link href={`/industries/${ind.slug}`} className="group block py-8">
                  <span className="flex items-start justify-between gap-3 text-xl leading-snug text-primary transition-colors group-hover:text-accent-dark">
                    {ind.name}
                    <span className="mt-1 shrink-0 transition-transform group-hover:translate-x-1">
                      <Icon name="arrow" className="h-4 w-4" />
                    </span>
                  </span>
                  <span className="mt-3 block text-[0.95rem] text-muted">{ind.short}</span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 max-w-3xl text-[0.95rem] text-muted">
            <span className="text-primary">Based in the UAE.</span> Working with teams in{" "}
            {locations
              .filter((l) => !["dubai", "abu-dhabi"].includes(l.slug))
              .map((l, i, arr) => (
                <span key={l.slug}>
                  <Link href={`/locations/${l.slug}`} className="underline decoration-line underline-offset-4 hover:text-primary">
                    {l.short}
                  </Link>
                  {i < arr.length - 1 ? ", " : "."}
                </span>
              ))}
          </p>
        </div>
      </section>

      {/* 5. Process */}
      <section id="process" className="section scroll-mt-20 pt-0">
        <div className="wrap">
          <SectionHead
            label="The Apex Method"
            title={
              <>
                How we work. <span className={quiet}>Four steps, no surprises.</span>
              </>
            }
          />
          <ol className="tiles mt-14 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <li key={s.title} className="reveal py-8">
                <span className="block text-5xl leading-none text-accent-dark" style={{ fontWeight: 300, letterSpacing: "-0.03em" }}>
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl text-primary">{s.title}</h3>
                <p className="mt-2 text-[0.95rem] text-muted">{s.body}</p>
                <p className="mt-4 border-t border-line pt-4 text-[0.95rem] text-ink">
                  <span className="block text-sm text-accent-dark">You get</span>
                  {s.get}
                </p>
              </li>
            ))}
          </ol>
          <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-2 text-[0.95rem] text-ink">
            {assurances.map((a) => (
              <li key={a.label} className="flex items-center gap-2">
                <span className="text-accent">
                  <Icon name="check" className="h-4 w-4" />
                </span>
                {a.label}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How we use AI */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            label="The AI behind it"
            title={
              <>
                Useful AI is mostly careful engineering. <span className={quiet}>Here is how we keep it reliable.</span>
              </>
            }
            body="No black boxes. Before we build, you know which model is used, what it can touch and what it costs to run."
          >
            <Link href="/security" className="link">
              How we handle your data
            </Link>
          </SectionHead>
          <ol className="mt-14 border-b border-line">
            {aiPrinciples.map((a, i) => (
              <li key={a.title} className="reveal grid gap-x-10 gap-y-2 border-t border-line py-8 lg:grid-cols-12">
                <span className="num lg:col-span-1">{pad(i)}</span>
                <h3 className="text-xl leading-snug text-primary lg:col-span-4">{a.title}</h3>
                <p className="max-w-2xl text-muted lg:col-span-7">{a.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Our standard */}
      <section className="section pt-0">
        <div className="wrap">
          <SectionHead
            label="Our standard"
            title={
              <>
                A world-class standard of delivery. <span className={quiet}>Six things every project gets.</span>
              </>
            }
          />
          <ol className="tiles mt-14 sm:grid-cols-2 lg:grid-cols-3">
            {standards.map((st, i) => (
              <li key={st.title} className="reveal grid gap-x-5 py-8 sm:grid-cols-[2.5rem_1fr]">
                <span className="num pt-1">{pad(i)}</span>
                <div>
                  <h3 className="text-xl leading-snug text-primary">{st.title}</h3>
                  <p className="mt-2 text-[0.95rem] text-muted">{st.body}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Is this for you */}
      <section className="px-3 sm:px-5">
        <div className="bg-wash mx-auto max-w-[110rem] rounded-[2rem]">
          <div className="wrap py-20 sm:py-24">
            <SectionHead
              label="Is this for you?"
              title={
                <>
                  We are a good fit for some teams, <span className={quiet}>and honest when we are not.</span>
                </>
              }
            >
              <Link href="/contact" className="link">
                Check your fit on a free call
              </Link>
            </SectionHead>
            <div className="mt-14 grid gap-x-16 gap-y-12 lg:grid-cols-2">
              <div>
                <h3 className="text-lg text-primary">A good fit if</h3>
                <ul className="mt-5 border-t border-primary/10">
                  {fit.yes.map((t) => (
                    <li key={t} className="flex gap-4 border-b border-primary/10 py-4 text-ink">
                      <span className="mt-1 shrink-0 text-accent">
                        <Icon name="check" className="h-4 w-4" />
                      </span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg text-primary">Probably not yet if</h3>
                <ul className="mt-5 border-t border-primary/10">
                  {fit.no.map((t) => (
                    <li key={t} className="flex gap-4 border-b border-primary/10 py-4 text-muted">
                      <span aria-hidden="true" className="mt-0.5 shrink-0">—</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Results */}
      <section className="section">
        <div className="wrap">
          <SectionHead
            label="In practice"
            title="What this looks like in practice."
            body="Three examples of how we take a problem from the first call to a measured result."
          >
            <Link href="/case-studies" className="link">
              All examples
            </Link>
          </SectionHead>
          {site.showStats && (
            <>
              <dl className="tiles mt-14 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((st) => (
                  <div key={st.label} className="flex flex-col-reverse py-8">
                    <dt className="mt-2 text-[0.95rem] text-muted">{st.label}</dt>
                    <dd className="text-5xl leading-none text-primary" style={{ fontWeight: 300, letterSpacing: "-0.03em" }}>
                      {st.value}
                    </dd>
                  </div>
                ))}
              </dl>
              {site.sampleProof && <p className="mt-2 text-sm text-muted">Sample figures shown for layout. To be replaced with real results.</p>}
            </>
          )}
          <ul className="tiles mt-14 lg:grid-cols-3">
            {studies.map((s) => (
              <li key={s.slug} className="reveal">
                <CaseStudyCard study={s} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 8. Testimonials */}
      {site.showTestimonials && (
        <section className="section pt-0">
          <div className="wrap">
            <SectionHead label="Testimonials" title="What clients say." />
            <ul className="tiles mt-14 lg:grid-cols-3">
              {testimonials.map((t) => (
                <li key={t.name} className="reveal flex flex-col py-9">
                  {site.sampleProof && <span className="badge mb-5 w-fit">Sample</span>}
                  <blockquote className="text-xl leading-snug text-primary" style={{ letterSpacing: "-0.01em" }}>
                    “{t.quote}”
                  </blockquote>
                  <p className="mt-auto pt-8 text-[0.95rem] text-primary">
                    {t.name}
                    <span className="block text-sm text-muted">{t.role}</span>
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Who you work with */}
      <section className="section pt-0">
        <div className="wrap">
          <div className="max-w-3xl">
            <p className="eyebrow">Who you work with</p>
            <p className="statement mt-6 text-balance">
              You talk to the person doing the work. <span className={quiet}>No account managers in between.</span>
            </p>
            <p className="lead mt-6 max-w-xl">
              {site.name} is founder-led. {site.founder.bio}
            </p>
            <p className="mt-8 text-primary">
              {site.founder.name}
              <span className="block text-sm text-muted">
                {site.founder.role}, {site.name}
              </span>
            </p>
            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
              <Link href="/about" className="link">
                Our story
              </Link>
              <a href={site.founder.linkedin} rel="noopener" className="link">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="section pt-0">
        <div className="wrap grid gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">FAQ</p>
            <h2 className="h2 mt-5">Common questions.</h2>
            <p className="mt-5 max-w-xs text-muted">Can&apos;t find yours? Ask the assistant in the corner, or book a call.</p>
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>

      {/* 11. Final CTA */}
      <Cta />
    </>
  );
}
