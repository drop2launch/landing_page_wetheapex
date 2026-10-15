import Link from "next/link";
import { BookingEmbed } from "@/components/BookingEmbed";
import { BookingTabs } from "@/components/BookingTabs";
import { ContactForm } from "@/components/ContactForm";
import { Faq } from "@/components/Faq";
import { Icon } from "@/components/Icon";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Book a call",
  description:
    "Book a free 30-minute call or send us a few details about what you would like to automate. We reply by email.",
  path: "/contact",
});

const agenda = [
  { time: "First 10 minutes", text: "You walk us through one process that eats your team's time." },
  { time: "Next 10 minutes", text: "We map the steps and point out what can run on its own." },
  { time: "Last 10 minutes", text: "You get a straight answer: automate it, fix it first, or leave it." },
];

const promises = ["Free, with no obligation", "No sales deck", "An NDA first, if you want one", "You speak with the founder"];

const after = [
  { title: "Within one working day", text: "You hear back from us by email, or get your calendar invite straight away." },
  { title: "On the call", text: "We look at one real process together and say honestly whether it is worth automating." },
  { title: "If it is a fit", text: "You get a fixed quote and a timeline in writing. No work starts until you approve it." },
];

const faqs = [
  { q: "Is the call really free?", a: "Yes. It is 30 minutes, there is no obligation, and you leave with at least one task worth automating." },
  { q: "What should I prepare?", a: "Pick one task that takes your team the most time each week, and note roughly how many hours it takes and which tools are involved." },
  { q: "Can we sign an NDA before we talk?", a: "Yes. Mention it in the form or email us, and we will send ours or sign yours first." },
  { q: "What if we are not ready to automate anything?", a: "Then we will say so. A clear “not yet” with reasons is a perfectly good outcome for a first call." },
];

export default function ContactPage() {
  return (
    <>
      <section className="px-3 sm:px-5">
        <div className="bg-wash mx-auto max-w-[110rem] rounded-[2rem]">
          <div className="wrap grid gap-x-16 gap-y-12 py-12 sm:py-20 lg:grid-cols-12">
            {/* Left: what the call is */}
            <div className="lg:col-span-5">
              <p className="eyebrow">Book a call</p>
              <h1 className="h1 mt-6 text-balance">
                30 minutes. One process. <span className="text-muted">A straight answer.</span>
              </h1>
              <p className="lead mt-6 max-w-md">
                Tell us what is eating your team&apos;s time. We will tell you what can run on its own, and what it
                would take.
              </p>

              <ol className="mt-10 border-t border-primary/10">
                {agenda.map((a) => (
                  <li key={a.time} className="grid gap-1 border-b border-primary/10 py-4 sm:grid-cols-[9.5rem_1fr]">
                    <span className="text-sm text-accent-dark">{a.time}</span>
                    <span className="text-[0.95rem] leading-snug text-ink">{a.text}</span>
                  </li>
                ))}
              </ol>

              <ul className="mt-8 grid gap-x-6 gap-y-2.5 text-[0.95rem] text-ink sm:grid-cols-2">
                {promises.map((p) => (
                  <li key={p} className="flex items-center gap-2.5">
                    <span className="text-accent">
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    {p}
                  </li>
                ))}
              </ul>

              <address className="mt-10 max-w-sm not-italic">
                <a href={`mailto:${site.email}`} className="glass flex items-center gap-3 rounded-2xl p-4 transition-shadow hover:shadow-lift">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-primary">
                    <Icon name="inbox" className="h-[1.1rem] w-[1.1rem]" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm text-muted">Email</span>
                    <span className="block truncate text-[0.95rem] text-primary">{site.email}</span>
                  </span>
                </a>
              </address>
            </div>

            {/* Right: calendar or form */}
            <div className="lg:col-span-7">
              <div className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-9">
                <BookingTabs calendarReady={Boolean(site.calLink)} calendar={<BookingEmbed />} form={<ContactForm />} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What happens next */}
      <section className="section">
        <div className="wrap">
          <p className="eyebrow">What happens next</p>
          <h2 className="h2 mt-5 max-w-2xl text-balance">From first message to a fixed quote, in three steps.</h2>
          <ol className="tiles mt-12 lg:grid-cols-3">
            {after.map((s, i) => (
              <li key={s.title} className="py-8">
                <span className="block text-5xl leading-none text-accent-dark" style={{ fontWeight: 300, letterSpacing: "-0.03em" }}>
                  {i + 1}
                </span>
                <h3 className="mt-6 text-xl text-primary">{s.title}</h3>
                <p className="mt-2 max-w-sm text-[0.95rem] text-muted">{s.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Questions before you book */}
      <section className="section pt-0">
        <div className="wrap grid gap-x-16 gap-y-10 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <p className="eyebrow">Before you book</p>
            <h2 className="h2 mt-5">Quick answers.</h2>
            <p className="mt-5 max-w-xs text-muted">
              More questions? Ask the assistant in the corner, or see{" "}
              <Link href="/services" className="text-primary underline decoration-accent underline-offset-4">
                our services
              </Link>
              .
            </p>
          </div>
          <div className="lg:col-span-8">
            <Faq items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
