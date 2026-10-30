/** @type {import('next').NextConfig} */
const nextConfig = {
  turbopack: {
    root: import.meta.dirname,
  },
  // XF-397 rename (Finance nexus-88 recommendation, 2026-10-20): the app privacy notices moved to /privacy/talkkim
  // and /privacy/talkpos. App builds, store listings and consent records link the old URLs, so these stay forever.
  // permanent = 308; the query (?m=vn etc.) is kept.
  async redirects() {
    return [
      { source: "/privacy/aura", destination: "/privacy/talkkim", permanent: true },
      { source: "/privacy/maven", destination: "/privacy/talkpos", permanent: true },
      // LOAD-PRIV-1 (operator, 2026-10-30): the operator's spelling. 301 as asked (statusCode, not permanent).
      { source: "/privacy/talkim", destination: "/privacy/talkkim", statusCode: 301 },
    ];
  },
};

export default nextConfig;
