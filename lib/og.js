import { ImageResponse } from "next/og";

// The 1200×630 link-preview card for a section (shown when a page is shared).
export const ogSize = { width: 1200, height: 630 };

export function ogCard({ eyebrow, title, subtitle, accent }) {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "72px 80px", background: "#0B1530", color: "#FFFFFF", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", fontSize: 30, letterSpacing: 4, textTransform: "uppercase", color: accent }}>{eyebrow}</div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 76, fontWeight: 700, lineHeight: 1.1 }}>{title}</div>
          <div style={{ display: "flex", fontSize: 34, marginTop: 28, color: "#C9D3EA", lineHeight: 1.35 }}>{subtitle}</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 26, color: "#8FA0C8" }}>
          <div style={{ display: "flex" }}>Ebizco Australia Pty Ltd · ABN 44 091 466 858</div>
          <div style={{ display: "flex", color: accent }}>ebizco.com.au</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
