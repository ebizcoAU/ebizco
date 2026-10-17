"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

// XF-371 S1-web. Each market's own Nexus API, base URL incl. /api/v1. Unset = no self-service form for
// that market; the page then shows only the in-app and email paths (PM 2026-10-16: VN has no prod host yet).
const API = {
  au: process.env.NEXT_PUBLIC_NEXUS_API_AU || "",
  vn: process.env.NEXT_PUBLIC_NEXUS_API_VN || "",
};
const DELETE_EMAIL = "admin@ebizco.com.au"; // operator 2026-10-15
// Grace period (PM 2026-10-16, backend RATE-1 setting account_deletion_grace_days): the request reply
// carries the real due date; these numbers are only the page text.
const GRACE_DAYS = { au: 23, vn: 30 };
// AU sends codes by email until an SMS gateway exists (OTP_SMS off); VN by SMS.
const FALLBACK_CHANNEL = { au: "email", vn: "sms" };
// true from 1.0.886 (ftpos2 2026-10-15: ftpos 6c5c7944, ACCOUNT_DELETION on in AU builds, full phone
// wipe). false = the pre-886 wording: MAVEN deletes through AURA, and the phone wipe is partial.
const MAVEN_DELETE_SHIPPED = true;
// BANOI / MAOI in-app deletion: ACCOUNT_DELETION is still off in the shipped VN builds, and the MAOI entry
// sits on an unlanded branch (ftpos2 2026-10-16). Keep false until ftpos2 confirms the flip; the VN view then
// lists only the web form (when its API is set) and email.
const VN_INAPP_SHIPPED = false;

const T = {
  au: {
    lang: "en",
    subtitle: "AURA and MAVEN",
    intro: "You can ask us to delete your AURA or MAVEN account at any time: here, inside the app, or by email. This page explains how, what we delete, and what Australian law requires us to keep.",
    form: {
      title: "Delete your account here",
      lead: (c) => `Enter the ${c === "email" ? "email address" : "mobile number"} on your account. We'll send it a 6-digit code to confirm it's you.`,
      contactEmail: "Email address", contactPhone: "Mobile number (04…)",
      useEmail: "Use email instead", usePhone: "Use mobile number instead",
      send: "Send code", sending: "Sending…",
      sentTo: (m) => `If an account uses this, we've sent a 6-digit code to ${m}. It expires in a few minutes.`,
      code: "6-digit code", verify: "Confirm code", verifying: "Checking…", resend: "Start again",
      confirmTitle: "Delete your account?",
      confirmBody: (d) => `You'll be signed out on every device. Your account is deleted after ${d} days; sign in again before then and tap Cancel deletion if you change your mind.`,
      confirm: "Delete my account", confirming: "Deleting…", back: "Don't delete",
      doneTitle: "Your account will be deleted",
      done: (due, days) => `We've signed you out everywhere. Your account will be deleted on ${due}${days != null ? ` (in ${days} days)` : ""}. To cancel, sign in to the app before then and tap Cancel deletion.`,
      already: (due) => `A deletion is already pending for this account. It will be deleted on ${due}.`,
      blockedTitle: "Something needs sorting out first",
      blocked: {
        ACTIVE_BUSINESS: `You own an active business. Close it in the app first (or delete from the MAVEN app, which offers to close it for you), or email ${DELETE_EMAIL}, then come back.`,
        OPEN_MARKET_ORDERS: "You have orders that are still in progress. Wait until they're finished.",
        RIDE_SETTLEMENT_DUE: "A ride settlement is still owed. Settle it in the app first.",
        OPEN_INVOICE: "You have an unpaid invoice. Pay it first, or email us.",
      },
      blockedAgain: "When that's done, start again here: you'll need a new code.",
      errors: {
        OTP_WRONG: (n) => `That code isn't right.${n != null ? ` ${n} tries left.` : ""}`,
        OTP_EXPIRED: "That code has expired. Start again for a new one.",
        OTP_LOCKED: "Too many wrong codes. Try again later.",
        OTP_RATE_LIMITED: "Please wait a moment before asking for another code.",
        RATE_LIMITED: "Too many attempts. Try again in 15 minutes.",
        OTP_TOKEN_INVALID: "Your confirmation has expired. Start again.",
        ACCOUNT_NOT_FOUND: "We couldn't find an account with that email or number.",
        DELETION_NOT_READY: "Deletion on the web isn't available right now. Use the app or email us.",
        BAD_REQUEST: "Please check what you entered.",
        NETWORK: "We couldn't reach our server. Check your connection and try again.",
        DEFAULT: "Something went wrong. Try again, or email us.",
      },
    },
    howTitle: "Other ways to delete",
    how: [
      <><strong>In the AURA app:</strong> open <strong>Profile</strong>, scroll to the bottom and tap <strong>Delete account</strong> (under Log Out). Tap <strong>Continue</strong>, then enter the 6-digit code we send to your account&apos;s phone or email.</>,
      MAVEN_DELETE_SHIPPED
        ? <><strong>In the MAVEN app:</strong> open the <strong>Profile</strong> tab, scroll to the bottom and tap <strong>Delete account</strong> (under Log Out), on the owner&apos;s own device. The steps are the same as in AURA. If an active business you own is the only thing in the way, the delete screen offers to close it for you. It stays closed even if you cancel the deletion; email <a href={`mailto:${DELETE_EMAIL}`}>{DELETE_EMAIL}</a> to reopen it. You can also close it first in the AURA app: <strong>Profile</strong> → <strong>View details</strong>, tap the red bin icon next to the business, then <strong>Close business</strong>.</>
        : <><strong>MAVEN:</strong> your MAVEN account is your AURA account, so delete it in the AURA app as above. If you own a business that is still active, close it first: in AURA open <strong>Profile</strong> → <strong>View details</strong>, tap the red bin icon next to the business, then <strong>Close business</strong>.</>,
      <><strong>Changed your mind?</strong> Sign in again before the deletion date and tap <strong>Cancel deletion</strong>.</>,
      <><strong>By email:</strong> write to <a href={`mailto:${DELETE_EMAIL}?subject=Delete%20my%20account`}>{DELETE_EMAIL}</a> from the email address or phone number on your account, and we&apos;ll confirm it&apos;s you before deleting.</>,
    ],
    whatTitle: "What we delete",
    what: `Your profile, contacts, chats, location history and the devices linked to your account. ${MAVEN_DELETE_SHIPPED
      ? "When you confirm, you're signed out on every device, and the app's copy on your phone is removed."
      : "When you confirm, AURA signs you out on every device and clears your account data from the app on this phone. Uninstall the app to remove any remaining files (such as saved photos)."}`,
    keepTitle: "What we keep, and for how long",
    keepLead: "Australian law requires us to keep some records. They are archived securely, aren't shown to anyone, and are deleted when the period ends:",
    keep: [
      "Invoices and receipts for your MAVEN subscription or fees: up to 7 years.",
      "Ride records (fares, receipts, driver payments and settlements): up to 7 years. Pickup and drop-off points are removed once any complaint period has closed.",
      "If you run a business on MAVEN, its sales and tax records are the business's own records. The business must keep them for 5 years (7 for a company). Close the business separately.",
    ],
    keepTail: "Records we keep no longer show your name in any list or screen.",
    timingTitle: "Timing",
    timing: (d) => `Your account is deleted ${d} days after you confirm, and you can cancel before then. Your account data is then deleted or de-identified, except the records listed above that the law requires us to keep. For an email request, the ${d} days start once we've confirmed it's you.`,
    moreTitle: "More",
    more: <>Read our <Link href="/privacy" prefetch={false}>Privacy Policy</Link>, or <Link href="/contact" prefetch={false}>contact us</Link> with any question.</>,
    address: "eBizco Australia Pty Ltd, 29 Farrer Street Braddon ACT 2612.",
  },
  vn: {
    lang: "vi",
    subtitle: "BANOI và MAOI",
    intro: "Bạn có thể yêu cầu xoá tài khoản BANOI hoặc MAOI bất cứ lúc nào, qua email hoặc (khi có) ngay tại đây và trong ứng dụng. Trang này hướng dẫn cách xoá, những gì chúng tôi xoá và những gì phải giữ lại.",
    form: {
      title: "Xoá tài khoản tại đây",
      lead: (c) => `Nhập ${c === "email" ? "email" : "số điện thoại"} của tài khoản. Chúng tôi sẽ gửi mã 6 số để xác nhận đúng là bạn.`,
      contactEmail: "Email", contactPhone: "Số điện thoại",
      useEmail: "Dùng email", usePhone: "Dùng số điện thoại",
      send: "Gửi mã", sending: "Đang gửi…",
      sentTo: (m) => `Nếu có tài khoản dùng thông tin này, chúng tôi đã gửi mã 6 số tới ${m}. Mã hết hạn sau vài phút.`,
      code: "Mã 6 số", verify: "Xác nhận mã", verifying: "Đang kiểm tra…", resend: "Làm lại",
      confirmTitle: "Xoá tài khoản?",
      confirmBody: (d) => `Bạn sẽ bị đăng xuất trên mọi thiết bị. Tài khoản sẽ bị xoá sau ${d} ngày. Trước ngày đó bạn vẫn có thể huỷ: khôi phục tài khoản bằng số điện thoại hoặc email.`,
      confirm: "Xoá tài khoản của tôi", confirming: "Đang xoá…", back: "Không xoá",
      doneTitle: "Đã gửi yêu cầu xoá",
      done: (due) => `Bạn đã được đăng xuất trên mọi thiết bị. Tài khoản sẽ bị xoá vào ngày ${due}. Muốn giữ lại, hãy khôi phục tài khoản trước ngày đó.`,
      already: (due) => `Tài khoản đang chờ xoá. Tài khoản sẽ bị xoá vào ngày ${due}.`,
      blockedTitle: "Cần xử lý trước",
      blocked: {
        ACTIVE_BUSINESS: `Bạn đang sở hữu một cửa hàng còn hoạt động. Hãy đóng cửa hàng trong ứng dụng trước, hoặc email ${DELETE_EMAIL}, rồi quay lại.`,
        OPEN_MARKET_ORDERS: "Bạn còn đơn hàng chưa xong. Hãy chờ đơn hoàn tất.",
        RIDE_SETTLEMENT_DUE: "Bạn còn khoản quyết toán chuyến xe chưa trả. Hãy thanh toán trong ứng dụng trước.",
        OPEN_INVOICE: "Bạn còn hoá đơn chưa thanh toán. Hãy thanh toán trước, hoặc gửi email cho chúng tôi.",
      },
      blockedAgain: "Xong rồi, hãy làm lại tại đây: bạn sẽ cần mã mới.",
      errors: {
        OTP_WRONG: (n) => `Mã chưa đúng.${n != null ? ` Còn ${n} lần thử.` : ""}`,
        OTP_EXPIRED: "Mã đã hết hạn. Hãy làm lại để nhận mã mới.",
        OTP_LOCKED: "Nhập sai quá nhiều lần. Hãy thử lại sau.",
        OTP_RATE_LIMITED: "Vui lòng chờ một chút trước khi xin mã mới.",
        RATE_LIMITED: "Quá nhiều lần thử. Hãy thử lại sau 15 phút.",
        OTP_TOKEN_INVALID: "Xác nhận đã hết hạn. Hãy làm lại.",
        ACCOUNT_NOT_FOUND: "Không tìm thấy tài khoản với email hoặc số điện thoại này.",
        DELETION_NOT_READY: "Hiện chưa xoá được trên web. Hãy dùng ứng dụng hoặc gửi email.",
        BAD_REQUEST: "Vui lòng kiểm tra thông tin đã nhập.",
        NETWORK: "Không kết nối được máy chủ. Kiểm tra mạng và thử lại.",
        DEFAULT: "Đã có lỗi. Hãy thử lại hoặc gửi email cho chúng tôi.",
      },
    },
    howTitle: "Các cách xoá khác",
    how: [
      ...(VN_INAPP_SHIPPED ? [
        <><strong>Trong ứng dụng BANOI:</strong> mở <strong>Hồ sơ</strong>, chọn <strong>Xoá tài khoản</strong> (chữ đỏ ngay dưới Đăng xuất), chọn <strong>Tiếp tục</strong>, rồi nhập mã 6 số gửi tới số điện thoại hoặc email của tài khoản. Muốn giữ lại tài khoản, chọn <strong>Huỷ xoá tài khoản</strong> trước ngày xoá.</>,
      ] : []),
      <><strong>Đổi ý?</strong> Trước ngày xoá bạn vẫn có thể huỷ: khôi phục tài khoản bằng số điện thoại hoặc email.</>,
      <><strong>Qua email:</strong> gửi tới <a href={`mailto:${DELETE_EMAIL}?subject=Xoa%20tai%20khoan`}>{DELETE_EMAIL}</a> từ email hoặc số điện thoại của tài khoản; chúng tôi xác nhận đúng là bạn rồi mới xoá.</>,
    ],
    whatTitle: "Những gì chúng tôi xoá",
    what: "Hồ sơ, lịch, thiết bị và tin nhắn chờ chuyển của bạn. Khi bạn xác nhận, bạn được đăng xuất trên mọi thiết bị và bản lưu trong ứng dụng trên điện thoại bị xoá. Tin nhắn đã gửi vẫn nằm trên điện thoại người nhận.",
    keepTitle: "Những gì phải giữ lại",
    keepLead: "Chúng tôi chỉ giữ lại, không kèm tên của bạn trong bất kỳ danh sách hay màn hình nào:",
    keep: [
      "Nhật ký an ninh: 24 tháng.",
      "Bản ghi đồng ý không kèm tên: 24 tháng.",
      "Nếu bạn kinh doanh trên MAOI, sổ sách bán hàng và thuế là hồ sơ của hộ kinh doanh, do hộ kinh doanh lưu giữ theo luật. Hãy đóng cửa hàng riêng.",
    ],
    keepTail: "",
    timingTitle: "Thời hạn",
    timing: (d) => `Tài khoản bị xoá ${d} ngày sau khi bạn xác nhận; bạn có thể huỷ trước thời hạn đó. Với yêu cầu qua email, ${d} ngày được tính từ khi chúng tôi xác nhận đúng là bạn.`,
    moreTitle: "Thêm",
    more: <>Xem <Link href="/privacy" prefetch={false}>Chính sách quyền riêng tư</Link>, hoặc <Link href="/contact" prefetch={false}>liên hệ</Link> nếu có câu hỏi.</>,
    address: "eBizco Australia Pty Ltd, 29 Farrer Street Braddon ACT 2612.",
  },
};

async function call(base, path, body) {
  let res;
  try {
    res = await fetch(`${base}${path}`, {
      method: body ? "POST" : "GET",
      headers: body ? { "Content-Type": "application/json" } : undefined,
      body: body ? JSON.stringify(body) : undefined,
    });
  } catch {
    return { ok: false, status: 0, body: { code: "NETWORK" } };
  }
  const json = await res.json().catch(() => ({}));
  return { ok: res.ok, status: res.status, body: json };
}

const fmtDate = (iso, lang) => {
  const t = Date.parse(iso || "");
  return Number.isNaN(t) ? "—" : new Date(t).toLocaleDateString(lang === "vi" ? "vi-VN" : "en-AU", { day: "numeric", month: "long", year: "numeric" });
};

function SelfServiceForm({ market, base }) {
  const t = T[market];
  const f = t.form;
  const [channels, setChannels] = useState(null); // delete-purpose channels the API offers
  const [channel, setChannel] = useState(null);
  const [to, setTo] = useState("");
  const [otp, setOtp] = useState(null); // { otp_id, masked_to }
  const [code, setCode] = useState("");
  const [token, setToken] = useState(null);
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null); // { kind: 'done'|'blocked', body }

  useEffect(() => {
    let live = true;
    call(base, "/auth/otp/channels").then((r) => {
      if (!live) return;
      // A failed lookup (rate limit, network) falls back to the market's usual channel; Send then
      // shows the real error. Only an API that answers with no delete channel hides the form.
      const list = r.ok ? (r.body.by_purpose && r.body.by_purpose.delete) || [] : [FALLBACK_CHANNEL[market]];
      setChannels(list);
      setChannel(list.includes(r.body.default) ? r.body.default : list[0] || null);
    });
    return () => { live = false; };
  }, [base, market]);

  const errText = (b) => {
    const e = f.errors[b && b.code] || f.errors.DEFAULT;
    return typeof e === "function" ? e(b.attempts_left) : e;
  };
  const restart = () => { setOtp(null); setCode(""); setToken(null); setError(null); setResult(null); };

  const send = async (ev) => {
    ev.preventDefault();
    setBusy(true); setError(null);
    const r = await call(base, "/auth/otp/send", {
      channel, to, purpose: "delete", lang: t.lang, ...(market === "vn" ? { app_variant: "banoi" } : {}),
    });
    setBusy(false);
    if (r.ok) setOtp({ otp_id: r.body.otp_id, masked_to: r.body.masked_to });
    else setError(errText(r.body));
  };
  const verify = async (ev) => {
    ev.preventDefault();
    setBusy(true); setError(null);
    const r = await call(base, "/auth/otp/verify", { otp_id: otp.otp_id, code: code.trim() });
    setBusy(false);
    if (r.ok) setToken(r.body.otp_token);
    else setError(errText(r.body));
  };
  const confirm = async () => {
    setBusy(true); setError(null);
    const r = await call(base, "/public/account-deletion", { channel, to, otp_token: token });
    setBusy(false);
    // The token is single use: whatever the answer, a new attempt needs a new code.
    setToken(null);
    if (r.ok) setResult({ kind: "done", body: r.body });
    else if (r.status === 409 && Array.isArray(r.body.blockers)) setResult({ kind: "blocked", body: r.body });
    else { setOtp(null); setCode(""); setError(errText(r.body)); }
  };

  const box = { border: "1px solid #e2e5ea", borderRadius: 10, padding: "20px 22px", marginBottom: 32, background: "#f8f9fb" };
  const input = { width: "100%", maxWidth: 360, padding: "10px 12px", border: "1px solid #cfd4dc", borderRadius: 6, fontSize: 16, marginBottom: 12, display: "block" };
  const btn = { padding: "10px 20px", borderRadius: 6, border: "none", background: "#1d4ed8", color: "#fff", fontWeight: 600, cursor: busy ? "wait" : "pointer", marginRight: 10 };
  const btnDanger = { ...btn, background: "#b91c1c" };
  const btnPlain = { ...btn, background: "transparent", color: "#1d4ed8", padding: "10px 4px" };

  if (channels && channels.length === 0) return null; // this API offers no delete channel: in-app/email only

  return (
    <div style={box} aria-live="polite">
      <div className="h4" style={{ marginBottom: 8 }}>{f.title}</div>
      {result && result.kind === "done" && (() => {
        const d = result.body.deletion || {};
        return (
          <>
            <p><strong>{f.doneTitle}</strong></p>
            <p className="mb-0">{result.body.already ? f.already(fmtDate(d.deletion_due_at, t.lang)) : f.done(fmtDate(d.deletion_due_at, t.lang), d.days_left)}</p>
          </>
        );
      })()}
      {result && result.kind === "blocked" && (
        <>
          <p><strong>{f.blockedTitle}</strong></p>
          <ul>
            {result.body.blockers.map((b) => <li key={b}><p className="mb-1">{f.blocked[b] || f.errors.DEFAULT}</p>
              {b === "ACTIVE_BUSINESS" && Array.isArray(result.body.blocking_businesses) && result.body.blocking_businesses.length > 0 && (
                <p className="mb-1" style={{ color: "#555" }}>{result.body.blocking_businesses.map((x) => x.name || x.business_name || x.business_id).join(", ")}</p>
              )}</li>)}
          </ul>
          <p>{f.blockedAgain}</p>
          <button type="button" style={btn} onClick={restart}>{f.resend}</button>
        </>
      )}
      {!result && !otp && (
        <form onSubmit={send}>
          <p>{f.lead(channel)}</p>
          <input style={input} type={channel === "email" ? "email" : "tel"} autoComplete={channel === "email" ? "email" : "tel"}
            placeholder={channel === "email" ? f.contactEmail : f.contactPhone} aria-label={channel === "email" ? f.contactEmail : f.contactPhone}
            value={to} onChange={(e) => setTo(e.target.value)} required disabled={!channel} />
          <button type="submit" style={btn} disabled={busy || !channel || !to.trim()}>{busy ? f.sending : f.send}</button>
          {channels && channels.length > 1 && (
            <button type="button" style={btnPlain} onClick={() => { setChannel(channel === "email" ? "sms" : "email"); setTo(""); }}>
              {channel === "email" ? f.usePhone : f.useEmail}
            </button>
          )}
        </form>
      )}
      {!result && otp && !token && (
        <form onSubmit={verify}>
          <p>{f.sentTo(otp.masked_to)}</p>
          <input style={input} inputMode="numeric" autoComplete="one-time-code" maxLength={6} placeholder={f.code} aria-label={f.code}
            value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, ""))} required />
          <button type="submit" style={btn} disabled={busy || code.length !== 6}>{busy ? f.verifying : f.verify}</button>
          <button type="button" style={btnPlain} onClick={restart}>{f.resend}</button>
        </form>
      )}
      {!result && token && (
        <>
          <p><strong>{f.confirmTitle}</strong></p>
          <p>{f.confirmBody(GRACE_DAYS[market])}</p>
          <button type="button" style={btnDanger} disabled={busy} onClick={confirm}>{busy ? f.confirming : f.confirm}</button>
          <button type="button" style={btnPlain} onClick={restart}>{f.back}</button>
        </>
      )}
      {error && <p role="alert" style={{ color: "#b91c1c", marginTop: 12, marginBottom: 0 }}>{error}</p>}
    </div>
  );
}

export default function DeleteAccount() {
  const [market, setMarket] = useState("au");
  useEffect(() => {
    const q = new URLSearchParams(window.location.search);
    if (q.get("market") === "vn" || q.get("lang") === "vi") setMarket("vn");
  }, []);
  const t = T[market];
  const pick = (m) => {
    setMarket(m);
    const u = new URL(window.location.href);
    if (m === "vn") u.searchParams.set("market", "vn"); else u.searchParams.delete("market");
    window.history.replaceState(null, "", u);
  };
  const tab = (m, label) => (
    <button key={m} type="button" onClick={() => pick(m)} aria-pressed={market === m} style={{
      padding: "8px 16px", borderRadius: 20, marginRight: 8, marginBottom: 8, cursor: "pointer", fontWeight: 600,
      border: `1px solid ${market === m ? "#1d4ed8" : "#cfd4dc"}`, background: market === m ? "#1d4ed8" : "#fff", color: market === m ? "#fff" : "#333",
    }}>{label}</button>
  );

  return (
    <div lang={t.lang}>
      <div style={{ marginBottom: 20 }}>
        {tab("au", "Australia · AURA / MAVEN")}
        {tab("vn", "Việt Nam · BANOI / MAOI")}
      </div>
      <div className="title-area"><span className="sec-subtitle">{t.subtitle}</span>
        <p className="sec-title3 h1">{market === "vn" ? "Xoá tài khoản" : "Delete your account"}</p>
      </div>
      <p className="pb-4">{t.intro}</p>

      {API[market] && <SelfServiceForm key={market} market={market} base={API[market]} />}

      <div className="h3"><span className="sec-subtitle">{t.howTitle}</span></div>
      <ul className="pb-4">{t.how.map((x, i) => <li key={i}><p>{x}</p></li>)}</ul>

      <div className="h3"><span className="sec-subtitle">{t.whatTitle}</span></div>
      <p className="pb-4">{t.what}</p>

      <div className="h3"><span className="sec-subtitle">{t.keepTitle}</span></div>
      <p>{t.keepLead}</p>
      <ul>{t.keep.map((x) => <li key={x}><p>{x}</p></li>)}</ul>
      {t.keepTail && <p className="pb-4">{t.keepTail}</p>}

      <div className="h3"><span className="sec-subtitle">{t.timingTitle}</span></div>
      <p className="pb-4">{t.timing(GRACE_DAYS[market])}</p>

      <div className="h3"><span className="sec-subtitle">{t.moreTitle}</span></div>
      <p>{t.more}</p>
      <p>{t.address}</p>
    </div>
  );
}
