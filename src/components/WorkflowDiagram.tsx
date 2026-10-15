import type { CSSProperties } from "react";
import type { Step } from "@/content/services";

const kindLabel = { trigger: "Trigger", auto: "Automated", human: "Your team" } as const;
const anim = (name: string, i: number) => ({ animationName: `${name}-${Math.min(i, 4)}` }) as CSSProperties;

// A workflow drawn as numbered points on a line (a column on small screens, a row on large ones).
// The steps light up one after another on a loop; with reduced motion they simply stay still.
// It is an ordered list, so screen readers announce it as numbered steps.
export function WorkflowDiagram({ title, steps }: { title: string; steps: Step[] }) {
  return (
    <figure>
      <figcaption className="flex flex-wrap items-center justify-between gap-3">
        <span className="text-lg text-primary">{title}</span>
        <span className="inline-flex items-center gap-2 text-sm text-muted">
          <span aria-hidden="true" className="h-2 w-2 rounded-full bg-accent" style={{ animation: "wf-pulse 1.8s ease-in-out infinite" }} />
          Runs on its own
        </span>
      </figcaption>
      <ol className="relative mt-10 grid gap-3 lg:auto-cols-fr lg:grid-flow-col lg:gap-6">
        {/* The line the steps sit on, and the pulse that travels along it (large screens) */}
        <span aria-hidden="true" className="absolute bottom-6 left-[1.57rem] top-6 w-px bg-line lg:bottom-auto lg:left-0 lg:right-0 lg:top-[1.07rem] lg:h-px lg:w-auto" />
        <span
          aria-hidden="true"
          className="wf-anim absolute top-[0.77rem] hidden h-2.5 w-2.5 translate-x-[0.75rem] rounded-full bg-accent shadow-[0_0_0_5px_rgb(14_124_123/0.18)] lg:block"
          style={{ animationName: "wf-travel" }}
        />
        {steps.map((step, i) => (
          <li
            key={step.title}
            className="wf-anim relative flex gap-5 rounded-2xl px-2 py-3 lg:block lg:rounded-none lg:p-0"
            style={anim("wf-row", i)}
          >
            <span
              className="wf-anim relative flex h-[2.15rem] w-[2.15rem] shrink-0 items-center justify-center rounded-full border border-line bg-white text-sm text-muted"
              style={anim("wf-node", i)}
            >
              {i + 1}
            </span>
            <span className="block lg:mt-5 lg:pr-4">
              <span className="block text-[1.05rem] font-normal leading-snug text-primary">{step.title}</span>
              {step.detail && <span className="mt-1 block text-[0.95rem] leading-snug text-muted">{step.detail}</span>}
              <span className="mt-2 block text-sm text-accent-dark">{kindLabel[step.kind ?? "auto"]}</span>
            </span>
          </li>
        ))}
      </ol>
    </figure>
  );
}
