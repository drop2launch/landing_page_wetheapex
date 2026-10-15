import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Default social sharing image, generated at build time.
export const alt = `${site.name}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 84,
          background: "#0b1b2b",
          color: "#ffffff",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", fontSize: 44 }}>
          <svg width="64" height="64" viewBox="0 0 32 32" style={{ marginRight: 20 }}>
            <path d="M4 11L10.4 24L16 13.6L21.6 24L28 8" fill="none" stroke="#ffffff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="28" cy="8" r="2.9" fill="#7fd6cf" />
          </svg>
          <span style={{ opacity: 0.75 }}>wethe</span>
          <span style={{ fontWeight: 700 }}>apex</span>
        </div>
        <div style={{ display: "flex", marginTop: 40, fontSize: 66, lineHeight: 1.15 }}>
          We take the repetitive work off your team&apos;s plate.
        </div>
        <div style={{ display: "flex", marginTop: 28, fontSize: 30, color: "#7fd6cf" }}>
          AI voice agents, chat assistants and workflow automation
        </div>
      </div>
    ),
    size,
  );
}
