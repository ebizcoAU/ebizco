import { Fragment, createElement } from "react";

// Renders the small Markdown subset Finance's notices use (paragraphs, "- " lists, "> " quote box,
// "|" tables, **bold**, *italic*, bare URLs and emails) into React. Finance's open markers
// ([CONFIRM …], [OPERATOR …], [OPEN …], "OPEN, for backend", [date]) are highlighted and counted, so a
// notice that still has one can't be mistaken for final text.
// One parser, two outputs: React elements (renderNotice, the site pages) or an HTML string
// (renderNoticeHtml, the bare /privacy/talkkim page; Next won't take react-dom/server in a route).

const MARKER = /\[(?:CONFIRM|OPERATOR|OPEN|PM|backend|date|re-date)[^\]]*\]|\bOPEN\b(?:, for [^;.|\])]+?(?: \([A-Z0-9]+\))?(?=[;.|\])]|$))?/g;
const LINK = /(https?:\/\/[^\s)]+[^\s).,;])|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)|\b(oaic\.gov\.au)\b/g;

export function countMarkers(md) {
  return (md.match(MARKER) || []).length;
}

// h(tag, props, ...children) builds one element; Frag is the fragment tag. With `sections`, a line that opens
// with Finance's bold number ("**1. Who we are.** …") becomes an <h2> and its text a new paragraph (bare page only:
// the template pages keep their current structure).
const SECTION = /^\*\*(\d+\.\s[^*]+?)\*\*\s*(.*)$/;
// A line that is one italic span (Finance's "*What changed from …*" notes) is a paragraph of its own, on every page.
const ITALIC_LINE = /^\*[^*\s][^*]*\*$/;

function renderer(h, Frag, { sections = false } = {}) {
  function links(text, key) {
    const out = [];
    let last = 0;
    for (const m of text.matchAll(LINK)) {
      if (m.index > last) out.push(text.slice(last, m.index));
      const [all, url, email, oaic] = m;
      const href = url || (email ? `mailto:${email}` : `https://www.${oaic}`);
      out.push(h("a", { key: `${key}l${m.index}`, href }, all));
      last = m.index + all.length;
    }
    if (last < text.length) out.push(text.slice(last));
    return out;
  }

  function marked(text, key) {
    const out = [];
    let last = 0;
    for (const m of text.matchAll(MARKER)) {
      if (m.index > last) out.push(...links(text.slice(last, m.index), `${key}t${last}`));
      out.push(h("mark", { key: `${key}m${m.index}`, className: "notice-open" }, m[0]));
      last = m.index + m[0].length;
    }
    if (last < text.length) out.push(...links(text.slice(last), `${key}t${last}`));
    return out;
  }

  // **bold** first, then *italic* inside and outside it.
  function inline(text, key = "i") {
    return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
      if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
        return h("strong", { key: `${key}b${i}` }, italic(part.slice(2, -2), `${key}b${i}`));
      }
      return h(Frag, { key: `${key}p${i}` }, italic(part, `${key}p${i}`));
    });
  }

  function italic(text, key) {
    return text.split(/(\*[^*\s][^*]*\*)/g).map((part, i) =>
      part.length > 2 && part.startsWith("*") && part.endsWith("*")
        ? h("em", { key: `${key}e${i}` }, marked(part.slice(1, -1), `${key}e${i}`))
        : h(Frag, { key: `${key}f${i}` }, marked(part, `${key}f${i}`))
    );
  }

  const cells = (row) => row.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

  function blocks(lines, key = "k") {
    lines = [...lines];
    const out = [];
    let i = 0;
    while (i < lines.length) {
      const line = lines[i];
      if (!line.trim()) { i++; continue; }
      if (line.startsWith(">")) {
        const inner = [];
        while (i < lines.length && lines[i].startsWith(">")) inner.push(lines[i++].replace(/^> ?/, ""));
        out.push(h("div", { key: `${key}q${i}`, className: "notice-box" }, blocks(inner, `${key}q${i}`)));
      } else if (line.startsWith("|")) {
        const rows = [];
        while (i < lines.length && lines[i].startsWith("|")) rows.push(lines[i++]);
        const [head, , ...body] = rows; // the second row is the |---| rule
        out.push(
          h("div", { key: `${key}t${i}`, className: "table-responsive notice-table" },
            h("table", { className: "table table-bordered" },
              h("thead", null, h("tr", null, cells(head).map((c, j) => h("th", { key: j, scope: "col" }, inline(c, `h${j}`))))),
              h("tbody", null, body.map((r, n) => h("tr", { key: n }, cells(r).map((c, j) => h("td", { key: j }, inline(c, `c${n}-${j}`))))))
            )
          )
        );
      } else if (line.startsWith("- ")) {
        const items = [];
        while (i < lines.length && lines[i].startsWith("- ")) items.push(lines[i++].slice(2));
        out.push(h("ul", { key: `${key}u${i}` }, items.map((t, n) => h("li", { key: n }, inline(t, `u${n}`)))));
      } else if (sections && SECTION.test(line)) {
        const [, title, rest] = line.match(SECTION);
        out.push(h("h2", { key: `${key}h${i}` }, inline(title, `${key}h${i}`)));
        if (rest.trim()) lines = [...lines.slice(0, i), rest, ...lines.slice(i + 1)];
        else i++;
      } else {
        const para = [];
        while (i < lines.length && lines[i].trim() && !/^(>|\||- )/.test(lines[i]) && !(para.length && ITALIC_LINE.test(lines[i].trim())) && !(sections && para.length && SECTION.test(lines[i]))) {
          para.push(lines[i++]);
          if (ITALIC_LINE.test(para[0].trim())) break;
        }
        out.push(h("p", { key: `${key}p${i}` }, inline(para.join(" "), `${key}p${i}`)));
      }
    }
    return out;
  }

  return (md) => blocks(md.split("\n"));
}

// HTML string output: same tags and classes as the React output; keys are dropped, text is escaped.
const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
const FRAG = Symbol("fragment");
const html = (child) => (Array.isArray(child) ? child.map(html).join("") : child == null ? "" : child.__html ?? esc(String(child)));
function hString(tag, props, ...children) {
  const inner = html(children);
  if (tag === FRAG) return { __html: inner };
  const attrs = Object.entries(props || {})
    .filter(([k]) => k !== "key")
    .map(([k, v]) => ` ${k === "className" ? "class" : k}="${esc(String(v))}"`)
    .join("");
  return { __html: `<${tag}${attrs}>${inner}</${tag}>` };
}

const toReact = renderer(createElement, Fragment);
const toHtml = renderer(hString, FRAG, { sections: true });

export function renderNotice(md) {
  return toReact(md);
}

export function renderNoticeHtml(md) {
  return html(toHtml(md));
}
