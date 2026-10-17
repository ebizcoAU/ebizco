import { SITE, SITE_PAGES } from "@/lib/site";
import { NOTICES, loadNotice } from "@/lib/privacyNotices";

// Served at /sitemap.xml. App privacy notices join once they're final (no open markers, effective date set).
export default function sitemap() {
  const lastModified = new Date();
  const notices = Object.keys(NOTICES).map(loadNotice).filter((n) => !n.draft)
    .map((n) => ({ path: n.path, priority: 0.3, changeFrequency: "yearly" }));
  return [...SITE_PAGES, ...notices].map(({ path, priority, changeFrequency }) => ({
    url: path === "/" ? SITE.url : `${SITE.url}${path}`,
    lastModified,
    changeFrequency,
    priority,
  }));
}
