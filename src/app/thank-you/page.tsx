import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata = pageMeta({
  title: "Thank you",
  description: "Thanks for getting in touch.",
  path: "/thank-you",
  noindex: true,
});

export default function ThankYouPage() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">Thank you</p>
        <h1 className="h1 mt-6 max-w-4xl">We&apos;ve got your details.</h1>
        <p className="lead mt-6 max-w-2xl">
          If you booked a call, a calendar invite is on its way. If you sent the form, we will reply by email,
          usually within one working day.
        </p>
        <div className="card mt-10 max-w-2xl">
          <h2 className="h3">To get the most from the call</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5">
            <li>Pick one task that takes your team the most time each week.</li>
            <li>Note roughly how many hours it takes and who does it.</li>
            <li>List the tools involved, such as spreadsheets, your CRM or your accounting system.</li>
          </ul>
        </div>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/case-studies" className="btn btn-secondary">
            See example projects
          </Link>
          <Link href="/" className="btn btn-primary">
            Back to home
          </Link>
        </div>
        <p className="mt-6 text-sm text-muted">
          Need to add something? Email <a href={`mailto:${site.email}`} className="link">{site.email}</a>.
        </p>
      </div>
    </section>
  );
}
