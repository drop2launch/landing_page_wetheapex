"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import type { Department } from "@/content/departments";
import { Icon } from "./Icon";

// Scroll-driven section. On large screens the panel on the left stays pinned while the
// text on the right scrolls past; the panel's content changes to match whichever block is
// in the middle of the screen. On phones it is a normal stacked list.
export function ScrollStory({ items }: { items: Department[] }) {
  const [active, setActive] = useState(0);
  const blocks = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    // A block becomes active when it crosses the horizontal centre line of the window.
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );
    blocks.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-x-16 lg:grid-cols-12">
      {/* Pinned panel (large screens only) */}
      <div className="hidden lg:col-span-5 lg:block">
        <div className="bg-wash sticky top-28 flex h-[min(36rem,calc(100vh-9rem))] flex-col overflow-hidden rounded-[2rem] p-10">
          <div className="flex items-center justify-between text-sm text-muted">
            <span>
              <span className="text-primary">{String(active + 1).padStart(2, "0")}</span> / {String(items.length).padStart(2, "0")}
            </span>
            <span className="flex gap-1.5" aria-hidden="true">
              {items.map((item, i) => (
                <span key={item.name} className={`h-1 rounded-full transition-all duration-500 ${i === active ? "w-8 bg-accent" : "w-3 bg-primary/15"}`} />
              ))}
            </span>
          </div>

          <div className="relative mt-8 flex-1" aria-hidden="true">
            {items.map((item, i) => (
              <div
                key={item.name}
                className={`absolute inset-0 flex flex-col transition-all duration-700 ease-out ${
                  i === active ? "translate-y-0 opacity-100" : i < active ? "-translate-y-6 opacity-0" : "translate-y-6 opacity-0"
                }`}
              >
                <p className="text-[2.6rem] leading-[1.08] text-primary" style={{ fontWeight: 400, letterSpacing: "-0.03em" }}>
                  {item.name}
                </p>
                <div className="glass mt-auto p-6">
                  <p className="text-sm text-accent-dark">Where we usually start</p>
                  <p className="mt-2 text-lg leading-snug text-primary">{item.firstProject.title}</p>
                  <p className="mt-2 text-[0.95rem] text-muted">{item.firstProject.detail}</p>
                </div>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {item.tools.map((t) => (
                    <li key={t} className="rounded-full bg-white/70 px-3 py-1 text-sm text-ink">
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scrolling text */}
      <div className="lg:col-span-7">
        {items.map((item, i) => (
          <article
            key={item.name}
            ref={(el) => {
              blocks.current[i] = el;
            }}
            data-index={i}
            className={`flex flex-col justify-center border-t border-line py-12 transition-opacity duration-500 first:border-t-0 lg:min-h-[78vh] lg:border-t-0 lg:py-16 ${
              i === active ? "lg:opacity-100" : "lg:opacity-25"
            }`}
          >
            <p className="num">{String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-3 text-[1.9rem] leading-tight text-primary lg:text-[2.2rem]" style={{ fontWeight: 400, letterSpacing: "-0.02em" }}>
              {item.name}
            </h3>
            <p className="mt-4 max-w-2xl text-lg text-muted">{item.intro}</p>

            <p className="mt-8 text-sm text-primary">What we take over</p>
            <ul className="mt-3 max-w-2xl border-t border-line">
              {item.tasks.map((task) => (
                <li key={task} className="flex gap-4 border-b border-line py-3.5 text-ink">
                  <span className="mt-1 shrink-0 text-accent">
                    <Icon name="check" className="h-4 w-4" />
                  </span>
                  {task}
                </li>
              ))}
            </ul>

            {/* On phones the pinned panel is hidden, so its content appears here instead */}
            <div className="bg-wash mt-8 rounded-3xl p-6 lg:hidden">
              <p className="text-sm text-accent-dark">Where we usually start</p>
              <p className="mt-2 text-lg leading-snug text-primary">{item.firstProject.title}</p>
              <p className="mt-2 text-[0.95rem] text-muted">{item.firstProject.detail}</p>
              <p className="mt-4 text-sm text-muted">{item.tools.join(" · ")}</p>
            </div>

            <Link href={`/services/${item.service}`} className="link mt-8 w-fit">
              See how we do it
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
