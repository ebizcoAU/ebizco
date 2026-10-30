import { NOTICES, loadNotice } from "./privacyNotices";
import { renderNoticeHtml } from "./noticeMarkdown";
import { SITE } from "./site";

// LOAD-PRIV-1 (operator ask via PM nexus-c5, 2026-10-30): an app privacy notice as ONE self-contained HTML
// document, with no site template, no JS, no web fonts, no images and inline CSS, so it opens fast in the
// app's in-app browser and on a weak phone signal. The site template kept the whole page behind its
// preloader until window "load", and the render-blocking Google Fonts stylesheet could hold "load" for
// minutes when fonts.googleapis.com didn't answer. The text is the same synced Finance file the template
// page used (loadNotice + renderNotice), so nothing is copied by hand.

const CSS = `
:root{color-scheme:light dark;--bg:#fff;--fg:#1f2937;--muted:#5b6472;--line:#d9dee5;--link:#0b57d0;--box:#f4f8ff;--boxline:#0d6efd;--th:#f3f5f8;--warn-bg:#fff4e5;--warn-line:#f0b45a;--warn-fg:#5c3b00;--mark:#ffe08a;--mark-fg:#3d2c00}
@media (prefers-color-scheme:dark){:root{--bg:#121417;--fg:#e6e8eb;--muted:#a3abb7;--line:#343a42;--link:#8ab4f8;--box:#1a2333;--boxline:#5b8def;--th:#1c2026;--warn-bg:#3a2a10;--warn-line:#9a6a1f;--warn-fg:#ffd9a0;--mark:#6b5310;--mark-fg:#fff3cf}}
*{box-sizing:border-box}
html{-webkit-text-size-adjust:100%}
body{margin:0;background:var(--bg);color:var(--fg);font:17px/1.65 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif;overflow-wrap:anywhere}
.wrap{max-width:46rem;margin:0 auto;padding:16px}
header{border-bottom:1px solid var(--line)}
header .wrap{display:flex;flex-wrap:wrap;gap:4px 16px;align-items:center;justify-content:space-between;padding-top:12px;padding-bottom:12px}
.brand{font-weight:700;color:var(--fg);text-decoration:none}
nav{font-size:15px;color:var(--muted)}
a{color:var(--link)}
h1{font-size:1.6rem;line-height:1.25;margin:8px 0 12px}
.sub{color:var(--muted);font-size:15px;margin:16px 0 0}
.draft{background:var(--warn-bg);border:1px solid var(--warn-line);color:var(--warn-fg);border-radius:6px;padding:12px 16px;margin:16px 0}
mark{background:var(--mark);color:var(--mark-fg);padding:0 3px;border-radius:3px}
.notice-box{border-left:4px solid var(--boxline);background:var(--box);padding:12px 16px;margin:0 0 20px}
.notice-box p:first-child{margin-top:0}.notice-box p:last-child{margin-bottom:0}
.table-responsive{overflow-x:auto;margin:0 0 20px;-webkit-overflow-scrolling:touch}
table{border-collapse:collapse;font-size:15px;line-height:1.5;min-width:36rem;overflow-wrap:normal}
th,td{border:1px solid var(--line);padding:8px 10px;text-align:left;vertical-align:top}
th{background:var(--th);white-space:nowrap}
li{margin:0 0 8px}
h2{font-size:1.2rem;line-height:1.35;margin:28px 0 8px}
footer{border-top:1px solid var(--line);margin-top:32px;font-size:15px;color:var(--muted)}
@media print{:root{--bg:#fff;--fg:#000;--muted:#333;--line:#999;--link:#000;--box:#fff;--th:#eee}body{font-size:11pt}header nav,footer a[href="/delete-account"]{display:none}.table-responsive{overflow:visible}table{min-width:0;width:100%;font-size:9pt}tr,h2{break-inside:avoid}h2{break-after:avoid}a{text-decoration:none}}
`.replace(/\n/g, "");

const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

export function bareNoticeHtml(app) {
  const n = loadNotice(app);
  const other = n.readWith && NOTICES[n.readWith];
  const draft = n.draft
    ? `<div class="draft" role="note"><strong>Draft, not yet in effect.</strong> ${n.open > 0 ? `${n.open} item${n.open === 1 ? "" : "s"} still to confirm (highlighted).` : "Effective date to come."}</div>`
    : "";
  const body = [
    draft,
    `<h1>${esc(n.title)}</h1>`,
    n.renameNote ? `<p><strong>${esc(n.renameNote)}</strong></p>` : "",
    `<p>Version ${esc(n.version)} · Effective: ${n.effective ? esc(n.effective) : "<mark>[date to come]</mark>"}</p>`,
    other ? `<p>Read this with the <a href="${other.path}">${esc(other.title)}</a> (${esc(other.version)}), which covers the owner's own account.</p>` : "",
    renderNoticeHtml(n.md),
  ].join("\n");
  return `<!doctype html>
<html lang="en-AU">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(n.title)} | ${esc(SITE.name)}</title>
<meta name="description" content="${esc(n.description)}">
<link rel="canonical" href="${SITE.url}${n.path}">
${n.draft ? '<meta name="robots" content="noindex, nofollow">\n' : ""}<meta name="color-scheme" content="light dark">
<link rel="icon" href="data:,">
<style>${CSS}</style>
</head>
<body>
<header><div class="wrap"><a class="brand" href="/">EBIZCO AUSTRALIA</a><nav><a href="/privacy">Privacy</a> · ${esc(n.name)}</nav></div></header>
<main class="wrap">${body}</main>
<footer><div class="wrap">© EBIZCO AUSTRALIA PTY. LTD. · ABN ${SITE.abn} · <a href="mailto:${SITE.email}">${SITE.email}</a> · <a href="/delete-account">Delete your account</a></div></footer>
</body>
</html>
`;
}

export function bareNoticeResponse(app) {
  return new Response(bareNoticeHtml(app), { headers: { "content-type": "text/html; charset=utf-8" } });
}
