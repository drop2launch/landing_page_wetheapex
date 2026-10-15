import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow">404</p>
        <h1 className="h1 mt-6 max-w-4xl">We couldn&apos;t find that page.</h1>
        <p className="lead mt-6 max-w-2xl">The link may be old or mistyped. These should help:</p>
        <ul className="mt-8 flex flex-wrap gap-3">
          <li><Link href="/" className="btn btn-primary">Home</Link></li>
          <li><Link href="/services" className="btn btn-secondary">Services</Link></li>
          <li><Link href="/case-studies" className="btn btn-secondary">Case studies</Link></li>
          <li><Link href="/contact" className="btn btn-secondary">Contact</Link></li>
        </ul>
      </div>
    </section>
  );
}
