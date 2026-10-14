import Link from "next/link";

export const metadata = {
  title: "Delete your AURA or MAVEN account",
  description: "How to delete your AURA or MAVEN account, what we delete and what the law requires us to keep.",
  alternates: { canonical: "/delete-account" },
};

// Placeholders the operator confirms before this page is deployed (XF-371 S1-web).
// A value left as null shows a visible [TBC …] marker, so it can't ship unnoticed.
const DELETE_EMAIL = "admin@ebizco.com.au"; // operator 2026-10-15
const DELETE_DAYS = 30; // operator 2026-10-15: requests handled by hand within 30 days until the AU deletion job is on
// true from 1.0.886 (ftpos2 2026-10-15: ftpos 6c5c7944, ACCOUNT_DELETION on in AU builds, full phone
// wipe). false = the pre-886 wording: MAVEN deletes through AURA, and the phone wipe is partial.
const MAVEN_DELETE_SHIPPED = true;

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
          <li><p><strong>In the AURA app:</strong> open <strong>Profile</strong>, scroll to the bottom and tap <strong>Delete account</strong> (under Log Out). Tap <strong>Continue</strong>, then enter the 6-digit code we send to your account&apos;s phone or email.</p></li>
          {MAVEN_DELETE_SHIPPED ? (
          <li><p><strong>In the MAVEN app:</strong> open the <strong>Profile</strong> tab, scroll to the bottom and tap <strong>Delete account</strong> (under Log Out), on the owner&apos;s own device. The steps are the same as in AURA. If an active business you own is the only thing in the way, the delete screen offers to close it for you. You can also close it first in the AURA app: <strong>Profile</strong> → <strong>View details</strong>, tap the red bin icon next to the business, then <strong>Close business</strong>.</p></li>
          ) : (
          <li><p><strong>MAVEN:</strong> your MAVEN account is your AURA account, so delete it in the AURA app as above. If you own a business that is still active, close it first: in AURA open <strong>Profile</strong> → <strong>View details</strong>, tap the red bin icon next to the business, then <strong>Close business</strong>.</p></li>
          )}
          <li><p><strong>Changed your mind?</strong> Sign in again before the deletion date and tap <strong>Cancel deletion</strong>.</p></li>
          <li><p><strong>By email:</strong> write to {DELETE_EMAIL ? <a href={`mailto:${DELETE_EMAIL}?subject=Delete%20my%20account`}>{DELETE_EMAIL}</a> : tbc("email address")} from the email address or phone number on your account, and we&apos;ll confirm it&apos;s you before deleting.</p></li>
        </ul>

        <div className="h3"><span className="sec-subtitle">What we delete</span></div>
        <p className="pb-4">Your profile, contacts, chats, location history and the devices linked to your account. {MAVEN_DELETE_SHIPPED
          ? "When you confirm, you are signed out on every device and the copy on your phone is removed."
          : "When you confirm, AURA signs you out on every device and clears your account data from the app on this phone. Uninstall the app to remove any remaining files (such as saved photos)."}</p>

        <div className="h3"><span className="sec-subtitle">What we keep, and for how long</span></div>
        <p>Australian law requires us to keep some records. They are archived securely, aren&apos;t shown to anyone, and are deleted when the period ends:</p>
        <ul>
          <li><p>Invoices and receipts for your MAVEN subscription or fees: up to 7 years.</p></li>
          <li><p>Ride records (fares, receipts, driver payments and settlements): up to 7 years. Pickup and drop-off points are removed once any complaint period has closed.</p></li>
          <li><p>If you run a business on MAVEN, its sales and tax records are the business&apos;s own records. The business must keep them for 5 years (7 for a company). Close the business separately.</p></li>
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
