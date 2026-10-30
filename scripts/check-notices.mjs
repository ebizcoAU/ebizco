// Checks that every line of each app privacy notice's synced text reaches the rendered bare page (Finance, LOAD-PRIV-1).
//
//   npm run check:notices
//
// For every notice in lib/privacyNotices.js, each non-blank line of content/privacy/<version>.md must appear, as
// visible text, in bareNoticeHtml(app) (the same function /privacy/talkkim serves). The only lines allowed to be
// missing are the ones the notice's configured hideChangesFrom removes, and those must be absent. Text is compared
// with Markdown syntax removed and whitespace ignored. Exit 1 on any failure.
import { register } from "node:module";
import { readFileSync } from "node:fs";
import { join } from "node:path";

// The lib files use extensionless relative imports (Next resolves them); add ".js" for plain Node.
register(
  "data:text/javascript," +
    encodeURIComponent(`export async function resolve(s, c, next) {
      if (/^\\.{1,2}\\//.test(s) && !/\\.[cm]?js$/.test(s)) return next(s + ".js", c);
      return next(s, c);
    }`)
);

const { NOTICES, loadNotice } = await import("../lib/privacyNotices.js");
const { bareNoticeHtml } = await import("../lib/bareNotice.js");

const decode = (s) => s.replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&amp;/g, "&");
const squash = (s) => s.replace(/\s+/g, "");
// Visible text of one Markdown line: drop quote/list/table markers and bold/italic asterisks.
const visible = (line) =>
  line.replace(/^> ?/, "").replace(/^- /, "").replace(/\|/g, "").replace(/\*\*/g, "").replace(/(^|[^\w*])\*([^*\s][^*]*)\*/g, "$1$2");

let failed = 0;
for (const app of Object.keys(NOTICES)) {
  const n = loadNotice(app);
  const raw = readFileSync(join(process.cwd(), "content", "privacy", `${n.version}.md`), "utf8");
  const page = squash(decode(bareNoticeHtml(app).replace(/<[^>]+>/g, "")));
  const shown = new Set(n.md.split("\n"));
  const lines = raw.split("\n").filter((l) => l.trim() && !/^\|[-| ]+\|$/.test(l.trim()));
  const hidden = lines.filter((l) => !shown.has(l));
  const missing = lines.filter((l) => shown.has(l) && !page.includes(squash(visible(l))));
  const leaked = hidden.filter((l) => page.includes(squash(visible(l))));
  const ok = !missing.length && !leaked.length;
  if (!ok) failed++;
  console.log(`${ok ? "PASS" : "FAIL"} ${app} ${n.path} ${n.version}: ${lines.length - hidden.length}/${lines.length} lines rendered; ` +
    `${hidden.length} hidden by hideChangesFrom ${n.hideChangesFrom ?? "(none)"}`);
  for (const l of hidden) console.log(`  hidden (configured): ${l.slice(0, 100)}`);
  for (const l of missing) console.log(`  MISSING: ${l.slice(0, 100)}`);
  for (const l of leaked) console.log(`  SHOWN BUT CONFIGURED HIDDEN: ${l.slice(0, 100)}`);
}
process.exit(failed ? 1 : 0);
