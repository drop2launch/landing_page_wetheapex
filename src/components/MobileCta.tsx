"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

// Phone-only bar pinned to the bottom of the screen so the booking button is always one tap away.
export function MobileCta() {
  const pathname = usePathname();
  if (pathname === "/contact" || pathname === "/thank-you") return null;
  return (
    <>
      <div aria-hidden="true" className="h-[4.5rem] lg:hidden" />
      <div className="fixed inset-x-0 bottom-0 z-30 border-t border-line bg-white/95 px-4 py-3 backdrop-blur lg:hidden">
        <Link href="/contact" className="btn btn-primary h-12 w-full text-[0.95rem]">
          Book your free 30-minute call
        </Link>
      </div>
    </>
  );
}
