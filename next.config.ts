import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // Make sure the Markdown in /content ships with the server functions.
  outputFileTracingIncludes: { "/**": ["./content/**/*"] },
  // Removed pages: send old links somewhere useful instead of a 404.
  async redirects() {
    return [
      { source: "/pricing", destination: "/contact", permanent: true },
      // Example projects that were removed
      ...["lead-routing-saas", "n8n-daily-sales-report", "ai-audit-professional-services", "real-estate-enquiry-response"].map((slug) => ({
        source: `/case-studies/${slug}`,
        destination: "/case-studies",
        permanent: true,
      })),
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
