import Link from "next/link";
import { TERMS_EFFECTIVE_DATE as EFFECTIVE_DATE, TERMS_DRAFT } from "@/lib/terms";

export const metadata = {
  title: "Terms of Use",
  description: "Terms of use for the TalkKim and TalkPOS apps.",
  alternates: { canonical: "/terms" },
  ...(TERMS_DRAFT ? { robots: { index: false, follow: false } } : {}),
};

// Placeholder structure (XF-371, PM 2026-10-16): the text comes from Finance / the operator.
// A section whose body is null shows a visible [Text to come …] marker, so it can't ship unnoticed.
const SECTIONS = [
  { id: "about", title: "1. About these terms", body: null },
  { id: "accounts", title: "2. Your account", body: null },
  { id: "use", title: "3. Using the apps", body: null },
  { id: "business", title: "4. Businesses on TalkPOS", body: null },
  { id: "payments", title: "5. Fees and payments", body: null },
  { id: "privacy", title: "6. Privacy", body: <>See our <Link href="/privacy" prefetch={false}>Privacy Policy</Link>.</> },
  { id: "ending", title: "7. Ending your account", body: <>You can delete your account at any time: see <Link href="/delete-account" prefetch={false}>Delete your account</Link>.</> },
  { id: "liability", title: "8. Liability", body: null },
  { id: "changes", title: "9. Changes to these terms", body: null },
  { id: "contact", title: "10. Contact", body: <>Email <a href="mailto:admin@ebizco.com.au">admin@ebizco.com.au</a>, or <Link href="/contact" prefetch={false}>contact us</Link>.</> },
];

const tbc = <strong>[Text to come: Finance / operator]</strong>;

if (!TERMS_DRAFT && SECTIONS.some((s) => !s.body)) throw new Error("terms: effective date set but a section has no text");

export default function TermsPage() {
  return (
    <>
<div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
  <div className="container z-index-common">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">Terms of Use</h1>
      <div className="breadcumb-menu-wrap">
        <ul className="breadcumb-menu">
          <li><Link href="/">Home</Link></li>
          <li>Terms of Use</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section className="space-top space-extra-bottom">
  <div className="container wow fadeInUp" data-wow-delay="0.2s">
    <div className="row justify-content-left text-left">
      <div className="col-xl-10">
        <div className="title-area"><span className="sec-subtitle">TalkKim and TalkPOS</span>
          <p className="sec-title3 h1">Terms of Use</p>
        </div>
        {TERMS_DRAFT && (
          <div className="privacy-notice"><div className="notice-draft" role="note">
            <strong>Draft, not yet in effect.</strong> These terms are still being written; the final text will be published here.
          </div></div>
        )}
        <p className="pb-4">Effective date: {EFFECTIVE_DATE || tbc}. These terms are between you and EBIZCO AUSTRALIA PTY. LTD. (ABN 44 091 466 858).</p>
        {SECTIONS.map((s) => (
          <div key={s.id} id={s.id}>
            <div className="h3"><span className="sec-subtitle">{s.title}</span></div>
            <p className="pb-4">{s.body || tbc}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>
    </>
  );
}
