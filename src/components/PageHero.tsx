import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  children?: ReactNode;
}) {
  return (
    <section className="px-3 sm:px-5">
      <div className="bg-wash mx-auto max-w-[110rem] rounded-[2rem]">
        <div className="wrap py-20 sm:py-28">
          {eyebrow && <p className="eyebrow">{eyebrow}</p>}
          <h1 className="h1 mt-6 max-w-4xl text-balance">{title}</h1>
          {intro && <p className="lead mt-6 max-w-2xl">{intro}</p>}
          {children && <div className="mt-9 flex flex-wrap gap-3">{children}</div>}
        </div>
      </div>
    </section>
  );
}
