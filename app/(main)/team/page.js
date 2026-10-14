import Link from "next/link";

const team = [
  { name: "Vince Phan", roles: ["System Architect", "Director"], photo: "vincephan.jpg" },
  { name: "Sandra Phan", roles: ["Legal and Commercial", "Lawyer"], photo: null },
  { name: "Victor Phan", roles: ["Building & Construction", "Architect"], photo: null },
  { name: "Van Nguyen", roles: ["Accountant", "Company Accountant"], photo: null },
  { name: "Dong Nguyen", roles: ["VN Marketing Manager", "eBizCo VN"], photo: "dongnguyen.jpg" },
  { name: "Paul Hampton", roles: ["System Architect & Integrator"], photo: "paulhampton.jpg" },
  { name: "Trinh Doan", roles: ["AU Marketing Manager", "eBizCo AU"], photo: "trinhdoan.jpg" },
  { name: "Anthony George", roles: ["System Engineer", "Company Engineer"], photo: "anthonygeorge.jpg" },
];

export const metadata = {
  title: "Our Team",
  description: "The people behind eBizco Australia: system architects and engineers, marketing in Australia and Vietnam, legal, architecture and accounting.",
  alternates: { canonical: "/team" },
};

export default function TeamPage() {
  return (
    <>
<div className="breadcumb-wrapper" data-bg-src="/assets/img/breadcrumb/breadcumb-bg.jpg">
  <div className="container z-index-common">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">Team</h1>
      <div className="breadcumb-menu-wrap">
        <ul className="breadcumb-menu">
          <li><Link href="/">Home</Link></li>
          <li>Team</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section className="space-top space-extra-bottom">
  <div className="container wow fadeInUp" data-wow-delay="0.2s">
    <div className="row">
      {team.map((member) => (
        <div className="col-md-6 col-lg-4 col-xl-3" key={member.name}>
          <div className="team-style1">
            <div className="team-img">{member.photo
                ? <img src={`/assets/img/team/${member.photo}`} alt={member.name} />
                : <div role="img" aria-label={member.name} style={{ aspectRatio: "1 / 1", display: "flex", alignItems: "center", justifyContent: "center", background: "var(--theme-color)", color: "var(--white-color)", fontSize: "3rem", fontWeight: 700 }}>{member.name.split(" ").map((w) => w[0]).join("")}</div>}
            </div>
            <div className="team-content">
              <h3 className="team-title">{member.name}</h3>
              <p className="team-degi">{member.roles.join(" · ")}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
<section className="z-index-common space" data-bg-src="/assets/img/bg/cta-bg-1-2.jpg">
  <div className="container">
    <div className="row text-center text-lg-start align-items-center justify-content-between">
      <div className="col-lg-auto"><span className="sec-subtitle text-white">We are here to answer your questions 24/7</span>
        <h2 className="h1 sec-title cta-title1">Need A Consultation?</h2>
      </div>
      <div className="col-lg-auto"><a href="/contact" className="vs-btn">Get A Quote<i className="far fa-arrow-right" /></a></div>
    </div>
  </div>
</section>
    </>
  );
}
