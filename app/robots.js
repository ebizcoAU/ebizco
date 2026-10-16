import { SITE } from "@/lib/site";

// Served at /robots.txt.
export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/", disallow: "/i/" }, // invite links are private per person
    sitemap: `${SITE.url}/sitemap.xml`,
    host: SITE.url,
  };
}
