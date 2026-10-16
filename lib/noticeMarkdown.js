import { Fragment } from "react";

// Renders the small Markdown subset Finance's notices use (paragraphs, "- " lists, "> " quote box,
// "|" tables, **bold**, *italic*, bare URLs and emails) into React. Finance's open markers
// ([CONFIRM …], [OPERATOR …], [OPEN …], "OPEN, for backend", [date]) are highlighted and counted, so a
// notice that still has one can't be mistaken for final text.

const MARKER = /\[(?:CONFIRM|OPERATOR|OPEN|PM|backend|date)[^\]]*\]|\bOPEN\b(?:, for [^;.|\])]+?(?: \([A-Z0-9]+\))?(?=[;.|\])]|$))?/g;
const LINK = /(https?:\/\/[^\s)]+[^\s).,;])|([\w.+-]+@[\w-]+(?:\.[\w-]+)+)|\b(oaic\.gov\.au)\b/g;

export function countMarkers(md) {
  return (md.match(MARKER) || []).length;
}

function links(text, key) {
  const out = [];
  let last = 0;
  for (const m of text.matchAll(LINK)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [all, url, email, oaic] = m;
    const href = url || (email ? `mailto:${email}` : `https://www.${oaic}`);
    out.push(<a key={`${key}l${m.index}`} href={href}>{all}</a>);
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
    out.push(<mark key={`${key}m${m.index}`} className="notice-open">{m[0]}</mark>);
    last = m.index + m[0].length;
  }
  if (last < text.length) out.push(...links(text.slice(last), `${key}t${last}`));
  return out;
}

// **bold** first, then *italic* inside and outside it.
function inline(text, key = "i") {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**") && part.length > 4) {
      return <strong key={`${key}b${i}`}>{italic(part.slice(2, -2), `${key}b${i}`)}</strong>;
    }
    return <Fragment key={`${key}p${i}`}>{italic(part, `${key}p${i}`)}</Fragment>;
  });
}

function italic(text, key) {
  return text.split(/(\*[^*\s][^*]*\*)/g).map((part, i) =>
    part.length > 2 && part.startsWith("*") && part.endsWith("*")
      ? <em key={`${key}e${i}`}>{marked(part.slice(1, -1), `${key}e${i}`)}</em>
      : <Fragment key={`${key}f${i}`}>{marked(part, `${key}f${i}`)}</Fragment>
  );
}

const cells = (row) => row.trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim());

function blocks(lines, key = "k") {
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) { i++; continue; }
    if (line.startsWith(">")) {
      const inner = [];
      while (i < lines.length && lines[i].startsWith(">")) inner.push(lines[i++].replace(/^> ?/, ""));
      out.push(<div key={`${key}q${i}`} className="notice-box">{blocks(inner, `${key}q${i}`)}</div>);
    } else if (line.startsWith("|")) {
      const rows = [];
      while (i < lines.length && lines[i].startsWith("|")) rows.push(lines[i++]);
      const [head, , ...body] = rows; // the second row is the |---| rule
      out.push(
        <div key={`${key}t${i}`} className="table-responsive notice-table">
          <table className="table table-bordered">
            <thead><tr>{cells(head).map((c, j) => <th key={j} scope="col">{inline(c, `h${j}`)}</th>)}</tr></thead>
            <tbody>{body.map((r, n) => <tr key={n}>{cells(r).map((c, j) => <td key={j}>{inline(c, `c${n}-${j}`)}</td>)}</tr>)}</tbody>
          </table>
        </div>
      );
    } else if (line.startsWith("- ")) {
      const items = [];
      while (i < lines.length && lines[i].startsWith("- ")) items.push(lines[i++].slice(2));
      out.push(<ul key={`${key}u${i}`}>{items.map((t, n) => <li key={n}>{inline(t, `u${n}`)}</li>)}</ul>);
    } else {
      const para = [];
      while (i < lines.length && lines[i].trim() && !/^(>|\||- )/.test(lines[i])) para.push(lines[i++]);
      out.push(<p key={`${key}p${i}`}>{inline(para.join(" "), `${key}p${i}`)}</p>);
    }
  }
  return out;
}

export function renderNotice(md) {
  return blocks(md.split("\n"));
}
