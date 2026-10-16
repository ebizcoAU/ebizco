"use client";
import { useEffect, useState } from "react";

// Custom-scheme deep links (ftpos2 2026-10-16): the app's bundle id is its scheme; the app handles
// /invite/<code> with the B10 work. Universal / App Links come later (paid Apple team + Play upload
// key: ftpos5 hosts the .well-known files then). One market per view, never mixed (ftpos2): AU = AURA
// in English, VN = BANOI in Vietnamese; the page language picks the default, the visitor can switch.
// No deferred deep link: the code is never put in a store URL (it's lost on install), so a visitor
// without the app installs it, then types the code at sign-up.
const APPS = {
  au: { lang: "en", name: "AURA", scheme: "com.ebizco.aura", store: { ios: null, android: null } },
  vn: { lang: "vi", name: "BANOI", scheme: "com.ebizco.banoi", store: { ios: null, android: null } },
};
const T = {
  au: {
    eyebrow: "You're invited", title: "Join AURA",
    lead: "Someone has invited you to the AURA pre-trial. This is your invite code:",
    open: "Open AURA", notInstalled: "Don't have AURA yet?",
    install: "Install the app, then enter this code when you sign up.",
    ios: "App Store", android: "Google Play", storeSoon: "Ask the person who invited you for the install link.",
    invalid: "This invite link isn't complete. Check the link you were sent, or ask for a new one.",
    switchTo: "Tiếng Việt · BANOI",
  },
  vn: {
    eyebrow: "Lời mời", title: "Tham gia BANOI",
    lead: "Bạn được mời dùng thử BANOI. Đây là mã mời của bạn:",
    open: "Mở BANOI", notInstalled: "Chưa có BANOI?",
    install: "Cài ứng dụng, rồi nhập mã này khi đăng ký.",
    ios: "App Store", android: "Google Play", storeSoon: "Hãy hỏi người mời bạn link cài đặt.",
    invalid: "Liên kết mời chưa đầy đủ. Hãy kiểm tra lại liên kết, hoặc xin mã mới.",
    switchTo: "English · AURA",
  },
};

export default function Invite({ code }) {
  const [market, setMarket] = useState("au");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search).get("market");
    if (q === "vn" || q === "au") setMarket(q);
    else if (/^vi\b/i.test(navigator.language || "")) setMarket("vn");
  }, []);
  const app = APPS[market];
  const t = T[market];
  const shown = code ? `${code.slice(0, 4)} ${code.slice(4)}` : null;
  const stores = [["ios", t.ios], ["android", t.android]].filter(([k]) => app.store[k]);
  const btn = { display: "inline-block", padding: "14px 28px", borderRadius: 8, fontWeight: 700, fontSize: 18, textDecoration: "none" };

  return (
    <div lang={app.lang} style={{ textAlign: "center" }}>
      <span className="sec-subtitle">{t.eyebrow}</span>
      <h1 className="sec-title h1" style={{ marginBottom: 16 }}>{t.title}</h1>
      {!shown ? <p>{t.invalid}</p> : (
        <>
          <p style={{ fontSize: 18 }}>{t.lead}</p>
          <div data-invite-code style={{ fontFamily: "monospace", fontSize: 44, fontWeight: 800, letterSpacing: ".12em", margin: "8px 0 24px" }}>{shown}</div>
          <a href={`${app.scheme}://invite/${code}`} className="vs-btn" style={btn}>{t.open}</a>
          <div style={{ marginTop: 36, paddingTop: 24, borderTop: "1px solid #e2e5ea" }}>
            <p style={{ fontWeight: 700, marginBottom: 6 }}>{t.notInstalled}</p>
            <p>{t.install}</p>
            {stores.length > 0
              ? <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
                  {stores.map(([k, label]) => <a key={k} href={app.store[k]} style={{ ...btn, fontSize: 16, border: "1px solid #1d4ed8", color: "#1d4ed8" }}>{label}</a>)}
                </div>
              : <p style={{ color: "#666" }}>{t.storeSoon}</p>}
          </div>
        </>
      )}
      <p style={{ marginTop: 32 }}>
        <button type="button" onClick={() => setMarket(market === "au" ? "vn" : "au")}
          style={{ background: "none", border: "none", color: "#1d4ed8", textDecoration: "underline", cursor: "pointer", fontSize: 15 }}>{t.switchTo}</button>
      </p>
    </div>
  );
}
