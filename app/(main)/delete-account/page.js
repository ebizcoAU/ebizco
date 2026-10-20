import Link from "next/link";
import DeleteAccount from "./DeleteAccount";

export const metadata = {
  title: "Delete your account",
  description: "How to delete your TalkKim or TalkPOS account, what we delete and what the law requires us to keep.",
  alternates: { canonical: "/delete-account" },
};

// One page for both markets (XF-371 S1-web, PM 2026-10-16): Australia (English) and Việt Nam
// (Vietnamese), both TalkKim / TalkPOS since XF-397. /delete-account?market=vn opens the Vietnamese view.
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
        <DeleteAccount />
      </div>
    </div>
  </div>
</section>
    </>
  );
}
