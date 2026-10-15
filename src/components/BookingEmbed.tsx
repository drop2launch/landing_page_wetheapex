import { site } from "@/lib/site";

// Cal.com inline embed. Set `calLink` in src/lib/site.ts to turn it on.
// In Cal.com, set the event's redirect-after-booking URL to /thank-you.
export function BookingEmbed() {
  if (!site.calLink) {
    return (
      <div className="flex min-h-80 flex-col items-center justify-center rounded-xl border-2 border-dashed border-accent bg-accent-soft p-6 text-center">
        <p className="font-normal text-accent-dark">[BOOKING CALENDAR — TO CONNECT]</p>
        <p className="mt-2 max-w-sm text-sm text-ink">
          Add your Cal.com link in <code>src/lib/site.ts</code> (<code>calLink</code>) and the calendar appears here.
          Until then, use the form or contact details on this page.
        </p>
      </div>
    );
  }
  return (
    <iframe
      src={`https://cal.com/${site.calLink}?embed=true&theme=light`}
      title={`Book a call with ${site.name}`}
      loading="lazy"
      className="h-[42rem] w-full rounded-xl border border-line bg-white"
    />
  );
}
