import Link from "next/link";
import { industries } from "@/content/industries";
import { locations } from "@/content/locations";
import { services } from "@/content/services";
import { site } from "@/lib/site";
import { analyticsEnabled, CookieSettingsButton } from "./CookieBanner";
import { Logo } from "./Logo";

const company = [
  { label: "About", href: "/about" },
  { label: "Case studies", href: "/case-studies" },
  { label: "Blog", href: "/blog" },
  { label: "Security & data handling", href: "/security" },
  { label: "Contact", href: "/contact" },
];

const legal = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms of Service", href: "/terms" },
  { label: "Cookie Policy", href: "/cookies" },
];

function Column({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h2 className="text-sm font-normal text-muted">{title}</h2>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-[0.95rem] text-primary transition-colors hover:text-accent-dark">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line bg-white">
      <div className="wrap grid gap-x-10 gap-y-12 py-20 sm:grid-cols-2 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo />
          <p className="mt-5 max-w-xs text-[0.95rem] text-muted">{site.description}</p>
          <address className="mt-6 space-y-1.5 text-[0.95rem] not-italic text-primary">
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-accent-dark">
                {site.email}
              </a>
            </p>
            <p>
              <a href={site.founder.linkedin} rel="noopener" className="hover:text-accent-dark">
                LinkedIn
              </a>
            </p>
          </address>
        </div>
        <div className="lg:col-span-3 lg:col-start-6">
          <Column title="Services" links={services.map((s) => ({ label: s.name, href: `/services/${s.slug}` }))} />
        </div>
        <div className="lg:col-span-2">
          <Column title="Industries" links={industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` }))} />
        </div>
        <div className="lg:col-span-2">
          <Column title="Company" links={company} />
        </div>
      </div>
      <nav aria-label="Locations" className="wrap border-t border-line py-6">
        <ul className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted">
          <li className="text-primary">AI agency in</li>
          {locations.map((l) => (
            <li key={l.slug}>
              <Link href={`/locations/${l.slug}`} className="hover:text-primary">
                {l.short}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <div className="wrap flex flex-col gap-3 border-t border-line py-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="max-w-xl">
          © {new Date().getFullYear()} {site.name}, operated by {site.legalName}.
          <br />
          {site.address.street}, {site.address.poBox}, {site.address.city}, {site.address.country}.
        </p>
        <ul className="flex flex-wrap gap-x-6 gap-y-2">
          {legal.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-primary">
                {l.label}
              </Link>
            </li>
          ))}
          {analyticsEnabled && (
            <li>
              <CookieSettingsButton className="hover:text-primary" />
            </li>
          )}
        </ul>
      </div>
    </footer>
  );
}
