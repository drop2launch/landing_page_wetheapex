// The wetheapex mark.
//
// Idea: a "w" (for "we") drawn as one continuous line whose last stroke keeps climbing
// past the others to a single point, the apex. It reads as a letter, a rising path and
// a summit marker at once, and stays legible at browser-tab size.
//
// Two versions of the same drawing:
//   LogoMark      the line on its own, for the header, footer and documents
//   LogoTile      the line on an ink tile, for the browser tab and app icons
//                 (the same geometry is repeated in src/app/icon.svg and apple-icon.tsx)

const INK = "#0b1b2b";
const TEAL = "#0e7c7b";
const TEAL_LIGHT = "#7fd6cf";

export function LogoMark({ light = false, className = "h-7 w-9" }: { light?: boolean; className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 36 28" className={className}>
      <path
        d="M3.5 8L10.5 23L17.5 11L24.5 23L32 5.5"
        fill="none"
        stroke={light ? "#ffffff" : INK}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="32" cy="5.5" r="3.2" fill={light ? TEAL_LIGHT : TEAL} />
    </svg>
  );
}

export function LogoTile({ className = "h-9 w-9" }: { className?: string }) {
  return (
    <svg aria-hidden="true" viewBox="0 0 32 32" className={className}>
      <rect width="32" height="32" rx="8" fill={INK} />
      <path d="M6.5 11.5L11.4 22L16 13.6L20.6 22L25.5 9.5" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="25.5" cy="9.5" r="2.5" fill="#2bb5ae" />
    </svg>
  );
}

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`inline-flex items-center gap-2.5 text-[1.3rem] leading-none tracking-[-0.035em] ${light ? "text-white" : "text-primary"}`}>
      <LogoMark light={light} />
      <span>
        <span className="font-light">wethe</span>
        <span className="font-semibold">apex</span>
      </span>
    </span>
  );
}
