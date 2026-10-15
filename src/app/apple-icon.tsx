import { ImageResponse } from "next/og";

// Home-screen icon for phones and tablets: the logo mark on its ink background.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#0b1b2b" }}>
        <svg width="150" height="150" viewBox="0 0 32 32">
          <path d="M6.5 11.5L11.4 22L16 13.6L20.6 22L25.5 9.5" fill="none" stroke="#ffffff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="25.5" cy="9.5" r="2.5" fill="#2bb5ae" />
        </svg>
      </div>
    ),
    size,
  );
}
