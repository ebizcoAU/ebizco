import { readFileSync } from "node:fs";
import { join } from "node:path";
import { countMarkers } from "./noticeMarkdown";

// App privacy notices (AU pre-trial, PM nexus-1c 2026-10-17). The text is Finance's, copied verbatim
// into content/privacy/<version>.md by scripts/sync-privacy.mjs; never edit those files by hand.
// The effective date and source commit come from the same sync (<version>.meta.json, taken from Finance's
// heading), so the page never has a date of its own. A new version = a new synced file + bump `version`
// here (the old files stay for the record). No effective date or any open marker = draft (banner +
// noindex + left out of the sitemap), so the page can't pass for final text.
export const NOTICES = {
  aura: {
    path: "/privacy/aura",
    version: "AU-PT-PP-1.1",
    title: "AURA Privacy Policy (pre-trial)",
    description: "How EBIZCO AUSTRALIA PTY LTD handles personal information in the AURA pre-trial app.",
  },
  maven: {
    path: "/privacy/maven",
    version: "AU-PT-BIZ-1.2",
    title: "MAVEN business privacy notice (pre-trial)",
    description: "How the MAVEN pre-trial business app handles a venue's data, and what it keeps.",
    readWith: "aura",
  },
};

export function loadNotice(app) {
  const n = NOTICES[app];
  const dir = join(process.cwd(), "content", "privacy");
  const md = readFileSync(join(dir, `${n.version}.md`), "utf8");
  const meta = JSON.parse(readFileSync(join(dir, `${n.version}.meta.json`), "utf8"));
  if (meta.version !== n.version) throw new Error(`${n.version}.meta.json names ${meta.version}`);
  const open = countMarkers(md);
  return { ...n, md, open, effective: meta.effective, source: meta.source, draft: open > 0 || !meta.effective };
}

export function noticeMetadata(app) {
  const n = loadNotice(app);
  return {
    title: n.title,
    description: n.description,
    alternates: { canonical: n.path },
    ...(n.draft ? { robots: { index: false, follow: false } } : {}),
  };
}
