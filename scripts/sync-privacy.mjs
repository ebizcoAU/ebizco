// Copies a Finance pre-trial privacy notice section (verbatim) from the nexus repo into content/privacy/.
//
//   node scripts/sync-privacy.mjs <nexus notice .md> <section heading prefix> <out version>
//   node scripts/sync-privacy.mjs ../nexus/documents/tax_finance/PreTrial_privacy_notice_consent_BANOI_AURA_2026-10-16.md "### 2b." AU-PT-PP-1.0
//
// The section runs from its heading to the next "---" rule or "##" heading. Only builder-facing marks are
// removed: Finance's ◆ row marker, the in-app button row "[Read the full notice] [OK]" and an italic
// "*( … )*" editor note directly under the heading. Everything else, including OPEN / CONFIRM / OPERATOR
// markers, is kept so the page shows them until Finance closes them. The heading's effective date (or its
// "[date]" placeholder) goes into content/privacy/<version>.meta.json with the source commit.
// Internal refs in the user text ("(BOOKS-1 a, PM …)", "PM nexus-…", "XF-…") fail the sync (exit 1, nothing written).
import { readFileSync, writeFileSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { dirname, basename } from "node:path";

const [src, prefix, version] = process.argv.slice(2).filter((a) => !a.startsWith("--"));
if (!src || !prefix || !version) {
  console.error("usage: node scripts/sync-privacy.mjs <notice.md> <heading prefix> <version>");
  process.exit(1);
}

// Finance edits these files live in the shared nexus tree: sync only committed text (pass --allow-dirty to override).
let dirty = "";
try { dirty = execFileSync("git", ["status", "--porcelain", "--", basename(src)], { cwd: dirname(src) }).toString().trim(); } catch {}
if (dirty && !process.argv.includes("--allow-dirty")) {
  console.error(`${basename(src)} has uncommitted edits; wait for Finance's commit (or pass --allow-dirty)`);
  process.exit(1);
}

const lines = readFileSync(src, "utf8").split("\n");
const start = lines.findIndex((l) => l.startsWith(prefix));
if (start < 0) throw new Error(`heading "${prefix}" not found in ${src}`);
const heading = lines[start];
if (!heading.includes(version)) throw new Error(`heading has no ${version}: ${heading}`);

let end = lines.length;
for (let i = start + 1; i < lines.length; i++) {
  if (lines[i].trim() === "---" || /^#{1,3} /.test(lines[i])) { end = i; break; }
}

let body = lines.slice(start + 1, end);
while (body.length && !body[0].trim()) body.shift();
if (/^\*\(.*\)\*$/.test(body[0]?.trim() ?? "")) body.shift();
body = body
  .filter((l) => l.trim() !== "> [Read the full notice] [OK]")
  .map((l) => l.replace(/ ?◆ ?/g, (m) => (m.startsWith(" ") && m.endsWith(" ") ? " " : "")));
while (body.length && !body[body.length - 1].trim()) body.pop();

// Finance's working refs ("(BOOKS-1 a, PM 2026-10-17)", "PM nexus-28", "XF-388") must never reach the
// public page: fail and list them so Finance fixes the source, never strip them here (PM 2026-10-18).
const INTERNAL_REFS = [/\((?:[A-Z][A-Z0-9-]*\s+[a-d]\b|PM\b)[^)]*\)/, /\bPM nexus-/, /\bXF-\d/, /\bnexus-[0-9a-f]{2}\b/];
// Line numbers are the source file's (body has lost its leading lines, so look the text up there).
const srcLine = (text) => lines.findIndex((l, j) => j > start && j < end && l.includes(text)) + 1;
const leaks = body.flatMap((l) => INTERNAL_REFS.flatMap((re) => {
  const m = l.match(re);
  return m ? [`  line ${srcLine(m[0])}: ${m[0]}`] : [];
}));
if (leaks.length) {
  console.error(`${basename(src)} ${prefix}: internal refs in the user text (ask Finance to remove them; nothing written):`);
  console.error([...new Set(leaks)].join("\n"));
  process.exit(1);
}

const out = `content/privacy/${version}.md`;
writeFileSync(out, body.join("\n") + "\n");

let commit = "uncommitted";
try {
  commit = execFileSync("git", ["log", "-1", "--format=%h", "--", basename(src)], { cwd: dirname(src) }).toString().trim() || commit;
} catch {}

// The effective date is the heading's last "·" part, exactly as Finance wrote it; "[date]" (or anything in
// brackets) = not set yet. It goes into a sidecar so the page never carries a date of its own (PM 2026-10-17).
const last = heading.split("·").pop().trim();
const effective = /^\[.*\]$/.test(last) || !last ? null : last;
const meta = `content/privacy/${version}.meta.json`;
writeFileSync(meta, JSON.stringify({ version, effective, source: `nexus documents/tax_finance/${basename(src)} ${prefix} @ ${commit}` }, null, 2) + "\n");
console.log(`${out}: ${body.length} lines from ${basename(src)} ${prefix} @ ${commit}`);
console.log(`heading: ${heading}`);
console.log(`${meta}: effective ${effective ?? "(not set)"}`);
