import type { Faq as FaqItem } from "@/content/services";
import { faqSchema } from "@/lib/seo";
import { JsonLd } from "./JsonLd";

// Native <details> elements: keyboard accessible and work without JavaScript.
export function Faq({ items, schema = true }: { items: FaqItem[]; schema?: boolean }) {
  return (
    <div className="border-t border-line">
      {schema && <JsonLd data={faqSchema(items)} />}
      {items.map((item) => (
        <details key={item.q} className="group border-b border-line">
          <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-6 text-lg font-normal text-primary transition-colors hover:text-accent-dark [&::-webkit-details-marker]:hidden">
            {item.q}
            <span
              aria-hidden="true"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full shrink-0 text-accent-dark transition-transform duration-300 group-open:rotate-45"
            >
              <svg viewBox="0 0 12 12" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round">
                <path d="M6 1.5v9M1.5 6h9" />
              </svg>
            </span>
          </summary>
          <p className="max-w-2xl pb-7 leading-relaxed text-muted">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
