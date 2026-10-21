import { readFileSync } from "node:fs";
import { join } from "node:path";
import { countMarkers } from "./noticeMarkdown";

// App privacy notices (AU pre-trial, PM nexus-1c 2026-10-17). The text is Finance's, copied verbatim
// into content/privacy/<version>.md by scripts/sync-privacy.mjs; never edit those files by hand.
// The effective date and source commit come from the same sync (<version>.meta.json, taken from Finance's
// heading), so the page never has a date of its own. A new version = a new synced file + bump `version`
// here (the old files stay for the record). No effective date or any open marker = draft (banner +
// noindex + left out of the sitemap), so the page can't pass for final text.
// First live publish (Play store listing, Finance nexus-88 + PM nexus-e8, 2026-10-20): the XF-397 renamed 1.1 / 1.2
// text (Finance branch 1fe3cd6) at /privacy/talkkim + /privacy/talkpos; /privacy/aura + /privacy/maven 308 there
// (next.config.mjs), since current app builds link them. Keys 'aura' / 'maven' are internal ids. Page-level, not in
// Finance's synced body: the "was called" line, and the date = the actual publish day set by the PM (null = draft:
// banner + noindex). 1.0 never went live, so the body's leading "What changed from …" line is hidden this time.
export const PUBLISH_DATE = "27 Oct 2026";

export const NOTICES = {
  aura: {
    name: "TalkKim",
    path: "/privacy/talkkim",
    renameNote: "TalkKim was called AURA. Some screens in your app may still say AURA until the next update; this policy covers the app under either name.",
    version: "AU-PT-PP-1.1",
    title: "TalkKim Privacy Policy (pre-trial)",
    description: "How EBIZCO AUSTRALIA PTY. LTD. handles personal information in the TalkKim pre-trial app.",
  },
  maven: {
    name: "TalkPOS",
    path: "/privacy/talkpos",
    renameNote: "TalkPOS was called MAVEN. Some screens in your app may still say MAVEN until the next update; this notice covers the app under either name.",
    version: "AU-PT-BIZ-1.2",
    title: "TalkPOS business privacy notice (pre-trial)",
    description: "How the TalkPOS pre-trial business app handles a venue's data, and what it keeps.",
    readWith: "aura",
  },
};

export function loadNotice(app) {
  const n = NOTICES[app];
  const dir = join(process.cwd(), "content", "privacy");
  const md = readFileSync(join(dir, `${n.version}.md`), "utf8").replace(/^\*What changed from [^\n]*\*\n+/, "");
  const meta = JSON.parse(readFileSync(join(dir, `${n.version}.meta.json`), "utf8"));
  if (meta.version !== n.version) throw new Error(`${n.version}.meta.json names ${meta.version}`);
  const open = countMarkers(md);
  return { ...n, md, open, effective: PUBLISH_DATE, source: meta.source, draft: open > 0 || !PUBLISH_DATE };
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
