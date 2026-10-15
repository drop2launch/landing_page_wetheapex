import Link from "next/link";
import { Cta } from "@/components/Cta";
import { Icon } from "@/components/Icon";
import { PageHero } from "@/components/PageHero";
import { pad } from "@/components/SectionHead";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Security & data handling",
  description:
    "How we handle client data in plain language: access controls, NDAs, no training on client data, hosting location and credential handling.",
  path: "/security",
});

const sections = [
  {
    title: "Access: only what the project needs",
    points: [
      "We ask for the minimum access required for the work, and prefer a dedicated user or service account over a shared login.",
      "Access is limited to the people working on your project.",
      "When the project ends, or whenever you ask, access is removed and we confirm it in writing.",
    ],
  },
  {
    title: "Confidentiality and NDAs",
    points: [
      "We are happy to sign your NDA, or provide ours, before you share anything sensitive.",
      "We do not name clients, show their data or publish case studies without written permission.",
    ],
  },
  {
    title: "No training on your data",
    points: [
      "We do not use client data to train AI models.",
      "Where a project uses an AI provider, we use business or API plans whose terms state that submitted data is not used for model training, and we tell you which provider is involved before work starts.",
      "We send an AI provider only the data a task needs, and remove or mask personal details where the task allows it.",
    ],
  },
  {
    title: "Where your data lives",
    points: [
      "Wherever possible, automations run inside your own accounts (your Microsoft 365, your automation platform, your CRM), so the data stays where it already is.",
      `Where we host a component for you, it is hosted in ${site.hostingRegion}. We agree the location with you first.`,
      "We keep working copies of client data only for as long as the project needs them, then delete them.",
    ],
  },
  {
    title: "Credentials",
    points: [
      "Passwords and API keys are never sent over email or chat. We use your secure sharing method, or a password manager.",
      "Keys are stored in a password manager or in your own secrets vault, not in code, documents or spreadsheets.",
      "Keys used during a build are rotated at handover.",
    ],
  },
  {
    title: "How we build",
    points: [
      "Every automation has error alerts and a fallback to a person, so failures are seen rather than silent.",
      "We test with sample or masked data where practical before connecting to live systems.",
      "You receive documentation that lists what each automation can access and what it does.",
    ],
  },
  {
    title: "If something goes wrong",
    points: [
      "If we become aware of an incident affecting your data, we will tell you promptly, explain what we know, and work with you on next steps and any legal notifications.",
    ],
  },
];

export default function SecurityPage() {
  return (
    <>
      <PageHero
        eyebrow="Security & data handling"
        title="How we look after your data."
        intro="Automation work means touching your systems and your customers' information. Here is how we handle that, without the jargon."
      />
      <section className="bg-panel">
        <ol className="wrap">
          {sections.map((s, i) => (
            <li key={s.title} className="reveal grid gap-x-8 gap-y-5 border-b border-line py-12 lg:grid-cols-12 lg:py-16">
              <span className="num text-accent-dark lg:col-span-1 lg:pt-2">{pad(i)}</span>
              <h2 className="text-2xl font-normal leading-tight tracking-[-0.02em] text-primary sm:text-3xl lg:col-span-4">{s.title}</h2>
              <ul className="space-y-4 text-lg leading-relaxed text-ink lg:col-span-7">
                {s.points.map((p) => (
                  <li key={p} className="flex gap-4">
                    <span className="mt-1 shrink-0 text-accent">
                      <Icon name="check" className="h-5 w-5" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="section bg-wash band">
        <div className="wrap grid gap-x-8 gap-y-6 lg:grid-cols-12">
          <p className="eyebrow self-start  lg:col-span-3 lg:pt-4">Plainly stated</p>
          <div className="lg:col-span-9">
            <h2 className="h2">What we do not claim.</h2>
            <p className="mt-6 max-w-3xl text-xl leading-relaxed text-muted">
              {site.name} is a small agency. We do not currently hold formal security certifications such as ISO
              27001 or SOC 2, and we will not suggest otherwise. If your organisation requires a certified vendor,
              a security questionnaire or specific contract terms, tell us early and we will be clear about what we
              can and cannot meet.
            </p>
            <p className="mt-8 max-w-2xl text-muted">
              Questions about a specific requirement? Email{" "}
              <a href={`mailto:${site.email}`} className="font-normal text-accent-dark underline-offset-4 hover:underline">
                {site.email}
              </a>{" "}
              or read our{" "}
              <Link href="/privacy" className="font-normal text-accent-dark underline-offset-4 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
      <Cta />
    </>
  );
}
