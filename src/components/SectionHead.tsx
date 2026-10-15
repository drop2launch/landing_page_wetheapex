import type { ReactNode } from "react";

// Section header that spans the page: label and heading on the left, supporting text and links on the right.
export function SectionHead({
  label,
  title,
  body,
  children,
}: {
  label: string;
  title: ReactNode;
  body?: string;
  dark?: boolean;
  children?: ReactNode;
}) {
  return (
    <div className="reveal grid gap-x-12 gap-y-6 lg:grid-cols-12 lg:items-end">
      <div className="lg:col-span-7">
        <p className="eyebrow">{label}</p>
        <h2 className="h2 mt-5 text-balance">{title}</h2>
      </div>
      {(body || children) && (
        <div className="lg:col-span-4 lg:col-start-9">
          {body && <p className="text-muted">{body}</p>}
          {children && <div className={`flex flex-wrap gap-x-8 gap-y-2 ${body ? "mt-5" : ""}`}>{children}</div>}
        </div>
      )}
    </div>
  );
}

export const pad = (n: number) => String(n + 1).padStart(2, "0");
