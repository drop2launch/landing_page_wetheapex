import Link from "next/link";
import type { CaseStudy } from "@/lib/content";
import { Icon } from "./Icon";

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  return (
    <article className="group relative flex h-full flex-col py-10">
      <p className="flex flex-wrap items-center gap-3 text-sm text-muted">
        {study.industry}
      </p>
      <h3 className="mt-4 text-2xl leading-snug tracking-[-0.015em] text-primary group-hover:text-accent-dark">
        <Link href={`/case-studies/${study.slug}`} className="after:absolute after:inset-0">
          {study.title}
        </Link>
      </h3>
      <p className="mt-3 text-muted">{study.description}</p>
      <span className="mt-auto flex items-center gap-2 pt-8 text-[0.95rem] text-primary">
        Read the project
        <span className="transition-transform group-hover:translate-x-1">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </span>
    </article>
  );
}
