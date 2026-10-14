import Link from "next/link";

export const metadata = {
  title: "Delete your account | AURA and MAVEN",
  description: "How to delete your AURA or MAVEN account, what we delete and what the law requires us to keep.",
};

// Placeholders the operator confirms before this page is deployed (XF-371 S1-web).
// A value left as null shows a visible [TBC …] marker, so it can't ship unnoticed.
const DELETE_EMAIL = null; // proposed: admin@ebizco.com.au
const DELETE_DAYS = null; // proposed: 30 (needs someone to process requests by hand until the AU deletion job is on)
const AURA_MENU_PATH = null; // from ftpos2
const MAVEN_MENU_PATH = null; // from ftpos2

const tbc = (what) => <strong>[TBC: {what}]</strong>;

export default function DeleteAccountPage() {
  return (
    <>
<div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
  <div className="container z-index-common">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">Delete your account</h1>
      <div className="breadcumb-menu-wrap">
        <ul className="breadcumb-menu">
          <li><Link href="/">Home</Link></li>
          <li>Delete your account</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section className="space-top space-extra-bottom">
  <div className="container wow fadeInUp" data-wow-delay="0.2s">
    <div className="row justify-content-left text-left">
      <div className="col-xl-10">
        <div className="title-area"><span className="sec-subtitle">AURA and MAVEN</span>
          <p className="sec-title3 h1">Delete your account</p>
        </div>
        <p className="pb-4">You can ask us to delete your AURA or MAVEN account at any time, from inside the app or by email. This page explains how, what we delete, and what Australian law requires us to keep.</p>

        <div className="h3"><span className="sec-subtitle">How to delete</span></div>
        <ul className="pb-4">
          <li><p><strong>In AURA:</strong> {AURA_MENU_PATH ?? tbc("AURA menu path")}.</p></li>
          <li><p><strong>In MAVEN:</strong> {MAVEN_MENU_PATH ?? tbc("MAVEN menu path")}. If you own a business that is still active, close it or transfer it first.</p></li>
          <li><p><strong>By email:</strong> write to {DELETE_EMAIL ? <a href={`mailto:${DELETE_EMAIL}?subject=Delete%20my%20account`}>{DELETE_EMAIL}</a> : tbc("email address")} from the email address or phone number on your account, and we&apos;ll confirm it&apos;s you before deleting.</p></li>
        </ul>

        <div className="h3"><span className="sec-subtitle">What we delete</span></div>
        <p className="pb-4">Your profile, contacts, chats, location history and the devices linked to your account. The copy on your phone is removed as soon as you confirm.</p>

        <div className="h3"><span className="sec-subtitle">What we keep, and for how long</span></div>
        <p>Australian law requires us to keep some records. They are archived securely, aren&apos;t shown to anyone, and are deleted when the period ends:</p>
        <ul>
          <li><p>Invoices and receipts for your MAVEN subscription or fees: up to 7 years.</p></li>
          <li><p>Ride records (fares, receipts, driver payments and settlements): up to 7 years. Pickup and drop-off points are removed once any complaint period has closed.</p></li>
          <li><p>If you run a business on MAVEN, its sales and tax records are the business&apos;s own records. The business must keep them for 5 years (7 for a company). Delete or close the business separately, and download what you need first.</p></li>
        </ul>
        <p className="pb-4">Records we keep no longer show your name in any list or screen.</p>

        <div className="h3"><span className="sec-subtitle">Timing</span></div>
        <p className="pb-4">We&apos;ll confirm we&apos;ve received your request, and within {DELETE_DAYS ?? tbc("number of")} days your account data will be deleted or de-identified, except the records listed above that the law requires us to keep.</p>

        <div className="h3"><span className="sec-subtitle">More</span></div>
        <p>Read our <Link href="/privacy" prefetch={false}>Privacy Policy</Link>, or <Link href="/contact" prefetch={false}>contact us</Link> with any question.</p>
        <p>eBizco Australia Pty Ltd, 29 Farrer Street Braddon ACT 2612.</p>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
