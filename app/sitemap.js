import { SITE, SITE_PAGES } from "@/lib/site";

// Served at /sitemap.xml.
export default function sitemap() {
  const lastModified = new Date();
  return SITE_PAGES.map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
