import { readFileSync } from "node:fs";
import { join } from "node:path";
import { countMarkers } from "./noticeMarkdown";

// App privacy notices (AU pre-trial, PM nexus-1c 2026-10-17). The text is Finance's, copied verbatim
// into content/privacy/<version>.md by scripts/sync-privacy.mjs; never edit those files by hand.
// A new version = a new content file + bump `version` here (the old file stays for the record).
// `effective` stays null until the PM gives the publish date; null or any open marker = draft
// (banner + noindex), so the page can't pass for final text.
export const NOTICES = {
  aura: {
    path: "/privacy/aura",
    version: "AU-PT-PP-1.0",
    title: "AURA Privacy Policy (pre-trial)",
    description: "How EBIZCO AUSTRALIA PTY LTD handles personal information in the AURA pre-trial app.",
    effective: null,
    source: "nexus documents/tax_finance/PreTrial_privacy_notice_consent_BANOI_AURA_2026-10-16.md §2b @ 2f5248a",
  },
  maven: {
    path: "/privacy/maven",
    version: "AU-PT-BIZ-1.1",
    title: "MAVEN business privacy notice (pre-trial)",
    description: "How the MAVEN pre-trial business app handles a venue's data, and what it keeps.",
    effective: null,
    source: "nexus documents/tax_finance/PreTrial_privacy_notice_business_apps_MAOI_MAVEN_2026-10-17.md §2b @ 2f5248a",
    readWith: "aura",
  },
};

export function loadNotice(app) {
  const n = NOTICES[app];
  const md = readFileSync(join(process.cwd(), "content", "privacy", `${n.version}.md`), "utf8");
  const open = countMarkers(md);
  return { ...n, md, open, draft: open > 0 || !n.effective };
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
