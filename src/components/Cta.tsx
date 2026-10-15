import Link from "next/link";

const agenda = [
  { time: "First 10 minutes", text: "You walk us through one process that eats your team's time." },
  { time: "Next 10 minutes", text: "We map the steps and point out what can run on its own." },
  { time: "Last 10 minutes", text: "You get a straight answer: automate it, fix it first, or leave it." },
];

// Closing section used on every page: what the free call covers, then the booking button.
export function Cta({
  heading = "Find out what your team could stop doing by hand.",
  body = "Book a free 30-minute call. We'll look at one process together and tell you honestly whether it is worth automating.",
}: {
  heading?: string;
  body?: string;
}) {
  return (
    <section className="px-3 pb-3 sm:px-5 sm:pb-5">
      <div className="bg-wash reveal mx-auto max-w-[110rem] rounded-[2rem]">
        <div className="wrap py-24 sm:py-32">
          <p className="eyebrow">The free call</p>
          <h2 className="mt-5 max-w-3xl text-balance text-[2.2rem] leading-[1.12] text-primary sm:text-5xl" style={{ fontWeight: 400, letterSpacing: "-0.025em" }}>
            {heading}
          </h2>
          <p className="lead mt-6 max-w-xl">{body}</p>
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3">
            <Link href="/contact" className="btn btn-primary h-12 px-7 text-[0.95rem]">
              Book your free call
            </Link>
            <Link href="/#savings" className="link">
              Estimate your savings first
            </Link>
          </div>
          <ol className="mt-16 grid gap-x-10 gap-y-6 border-t border-primary/10 pt-8 sm:grid-cols-3">
            {agenda.map((a) => (
              <li key={a.time}>
                <span className="block text-sm text-accent-dark">{a.time}</span>
                <span className="mt-1.5 block text-[0.95rem] text-ink">{a.text}</span>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-sm text-muted">Free. No obligation. No sales deck.</p>
        </div>
      </div>
    </section>
  );
}
