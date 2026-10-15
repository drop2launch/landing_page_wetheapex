import Link from "next/link";
import { Cta } from "@/components/Cta";
import { PageHero } from "@/components/PageHero";
import { pad, SectionHead } from "@/components/SectionHead";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "About wetheapex, an AI Automation Agency in the UAE",
  description: `${site.name} is a founder-led AI automation agency based in the UAE, working with operations, finance and customer support teams.`,
  path: "/about",
});

const values = [
  {
    title: "Outcomes over technology",
    body: "We start from the hours and cost you want back, then choose the simplest tool that gets you there.",
  },
  {
    title: "Honest scoping",
    body: "If a task is not worth automating, we will say so. A clear “not yet” is better than a project that does not pay back.",
  },
  {
    title: "People stay in control",
    body: "Automations handle the routine. Exceptions, approvals and judgement calls go to your team.",
  },
  {
    title: "You own what we build",
    body: "Everything runs in your accounts and comes with documentation your team can follow.",
  },
];

const reasons = [
  {
    title: "We start from the process, not the tool",
    body: "We look at how the work is actually done before recommending anything, so the automation fits your team.",
  },
  {
    title: "Fluent in both toolsets",
    body: "Comfortable in the Microsoft stack (Power Automate, Power Apps, SharePoint, Power BI) and in open tools (n8n, Make, Python, SQL).",
  },
  {
    title: "Projects run properly",
    body: "Every project has a defined scope, a plan and a handover, so work is tracked and delivered as agreed.",
  },
  {
    title: "You talk to the person doing the work",
    body: "A small, founder-led team. No account managers in between.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A small team that takes repetitive work seriously."
        intro={`${site.name} is a founder-led agency based in ${site.location}, working with businesses in ${site.markets}.`}
      />

      <section className="section bg-panel">
        <div className="wrap grid gap-x-8 gap-y-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="max-w-sm border-t border-primary pt-4">
              <p className="text-xl font-normal tracking-[-0.01em] text-primary">{site.founder.name}</p>
              <p className="text-muted">
                {site.founder.role}, {site.name}
              </p>
              <a href={site.founder.linkedin} rel="noopener" className="link mt-3">
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="lg:col-span-7 lg:col-start-6">
            <p className="eyebrow">The story</p>
            <div className="mt-6 space-y-6 text-xl leading-relaxed text-ink">
              <p className="text-2xl font-normal leading-snug tracking-[-0.01em] text-primary sm:text-3xl">
                {site.name} exists because skilled people spend too much of their week on work that follows the
                same steps every time.
              </p>
              <p>
                Copying data between systems, chasing approvals, answering the same questions, rebuilding the same
                report. None of it needs judgement, and all of it can be handed to software that is set up
                carefully and watched properly.
              </p>
              <p>
                We help small and mid-sized teams remove that work from operations, finance and customer support,
                using tools that are proven and affordable, and explaining every step in plain language.
              </p>
              <p>{site.founder.bio}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section border-t border-line">
        <div className="wrap">
          <SectionHead label="Values" title="How we make decisions." />
          <ol className="tiles mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <li key={v.title} className="reveal py-8">
                <span className="num text-accent-dark">{pad(i)}</span>
                <h3 className="mt-4 text-xl font-normal leading-[1.15] tracking-[-0.01em] text-primary">{v.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{v.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-wash band">
        <div className="wrap">
          <SectionHead label="Why us" title="Why teams choose to work with us." />
          <ol className="mt-16 border-t border-line">
            {reasons.map((r, i) => (
              <li key={r.title} className="reveal grid gap-x-8 gap-y-2 border-b border-line py-8 lg:grid-cols-12">
                <span className="text-sm font-normal tabular-nums text-accent-dark lg:col-span-1">{pad(i)}</span>
                <h3 className="text-2xl font-normal tracking-[-0.01em] lg:col-span-5">{r.title}</h3>
                <p className="text-lg leading-relaxed text-muted lg:col-span-6">{r.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section bg-panel">
        <div className="wrap">
          <SectionHead
            label="Where we work"
            title="Based in the UAE, working across time zones."
            body="Our working day overlaps with the Gulf, the UK and Europe. Calls with North America and Asia-Pacific are scheduled at a time that suits you."
          >
            <Link href="/security" className="link">
              How we handle your data
            </Link>
          </SectionHead>
          <ul className="tiles mt-16 grid-cols-2 sm:grid-cols-3 lg:grid-cols-7">
            {site.countries.map((c) => (
              <li key={c} className="py-5 text-[1.05rem] font-normal leading-tight tracking-[-0.01em] text-primary">
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Cta />
    </>
  );
}
