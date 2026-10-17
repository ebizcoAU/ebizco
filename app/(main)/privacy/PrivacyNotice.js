import Link from "next/link";
import { NOTICES, loadNotice } from "@/lib/privacyNotices";
import { renderNotice } from "@/lib/noticeMarkdown";

export default function PrivacyNotice({ app }) {
  const n = loadNotice(app);
  const other = n.readWith && NOTICES[n.readWith];
  return (
    <>
<div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
  <div className="container z-index-common">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">{n.title}</h1>
      <div className="breadcumb-menu-wrap">
        <ul className="breadcumb-menu">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/privacy" prefetch={false}>Privacy</Link></li>
          <li>{app.toUpperCase()}</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section className="space-top space-extra-bottom">
  <div className="container wow fadeInUp" data-wow-delay="0.2s">
    <div className="row justify-content-left text-left">
      <div className="col-xl-10 privacy-notice">
        {n.draft && (
          <div className="notice-draft" role="note">
            <strong>Draft, not yet in effect.</strong> {n.open > 0 ? `${n.open} item${n.open === 1 ? "" : "s"} still to confirm (highlighted).` : "Effective date to come."}
          </div>
        )}
        <div className="title-area"><span className="sec-subtitle">Version {n.version}</span>
          <p className="sec-title3 h1">{n.title}</p>
        </div>
        <p className="pb-2">Version {n.version} · Effective: {n.effective || <mark className="notice-open">[date to come]</mark>}</p>
        {other && (
          <p className="pb-2">Read this with the <Link href={other.path} prefetch={false}>{other.title}</Link> ({other.version}), which covers the owner&apos;s own account.</p>
        )}
        {renderNotice(n.md)}
      </div>
    </div>
  </div>
</section>
    </>
  );
}
