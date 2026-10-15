"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { industries } from "@/content/industries";
import { services } from "@/content/services";
import { nav, site } from "@/lib/site";
import { Logo } from "./Logo";

const submenus: Record<string, { label: string; href: string }[]> = {
  "/services": services.map((s) => ({ label: s.name, href: `/services/${s.slug}` })),
  "/industries": industries.map((i) => ({ label: i.name, href: `/industries/${i.slug}` })),
};

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  // Which desktop dropdown is showing. Only ever one at a time.
  const [menu, setMenu] = useState<string | null>(null);
  const isActive = (href: string) => pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl">
      <div className="wrap flex h-20 items-center justify-between gap-6">
        <Link href="/" aria-label={`${site.name} home`} onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <div className="flex items-center gap-8">
          <nav aria-label="Main" className="hidden lg:block">
            <ul className="flex items-center gap-8">
              {nav.map((item) => (
                <li
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => setMenu(submenus[item.href] ? item.href : null)}
                  onMouseLeave={() => setMenu(null)}
                  onFocus={() => setMenu(submenus[item.href] ? item.href : null)}
                  onBlur={(e) => {
                    if (!e.currentTarget.contains(e.relatedTarget)) setMenu(null);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "Escape") setMenu(null);
                  }}
                >
                  <Link
                    href={item.href}
                    aria-current={isActive(item.href) ? "page" : undefined}
                    aria-expanded={submenus[item.href] ? menu === item.href : undefined}
                    onClick={() => setMenu(null)}
                    className={`block py-2 text-[0.95rem] font-normal transition-colors hover:text-accent-dark ${
                      isActive(item.href) ? "text-accent-dark" : "text-primary"
                    }`}
                  >
                    {item.label}
                  </Link>
                  {submenus[item.href] && (
                    // Opens on hover or keyboard focus, and closes as soon as another item takes over.
                    <div
                      className={`absolute left-1/2 top-full w-72 -translate-x-1/2 pt-2 transition duration-200 ${
                        menu === item.href ? "visible opacity-100" : "invisible opacity-0"
                      }`}
                    >
                      <ul className="rounded-2xl bg-white p-3 shadow-lift">
                        {submenus[item.href].map((sub) => (
                          <li key={sub.href}>
                            <Link
                              href={sub.href}
                              onClick={() => setMenu(null)}
                              className="block rounded-xl px-4 py-2.5 text-[0.95rem] font-normal text-primary transition-colors hover:bg-primary-soft"
                            >
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-2">
            <Link href="/contact" className="btn btn-primary whitespace-nowrap" onClick={() => setOpen(false)}>
              Book a call
            </Link>
            <button
              type="button"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-primary lg:hidden"
              aria-expanded={open}
              aria-controls="mobile-menu"
              onClick={() => setOpen((v) => !v)}
            >
              <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
                {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 9h16M4 15h16" />}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {open && (
        <nav
          id="mobile-menu"
          aria-label="Mobile"
          className="absolute inset-x-0 top-full max-h-[calc(100vh-5rem)] overflow-y-auto bg-white px-6 pb-8 shadow-lift lg:hidden"
        >
          <ul>
            {nav.map((item) => (
              <li key={item.href} className="border-t border-line">
                <Link href={item.href} onClick={() => setOpen(false)} className="block py-4 text-xl font-normal text-primary">
                  {item.label}
                </Link>
                {submenus[item.href] && (
                  <ul className="pb-3">
                    {submenus[item.href].map((sub) => (
                      <li key={sub.href}>
                        <Link href={sub.href} onClick={() => setOpen(false)} className="block py-1.5 text-[0.95rem] text-muted hover:text-primary">
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
