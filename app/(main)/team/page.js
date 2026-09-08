import Link from "next/link";

const team = [
  { name: "Vince Phan", roles: ["System Architect", "Director"], photo: "vincephan.jpg" },
  { name: "Sandra Phan", roles: ["Legal and Commercial", "Lawyer"], photo: "sandraphan.jpg" },
  { name: "Victor Phan", roles: ["Building & Construction", "Architect"], photo: "victorphan.jpg" },
  { name: "Van Nguyen", roles: ["Accountant", "Company Accountant"], photo: "vannguyen.jpg" },
  { name: "Dong Nguyen", roles: ["VN Marketing Manager", "eBizCo VN"], photo: "dongnguyen.jpg" },
  { name: "Paul Hampton", roles: ["System Architect & Integrator"], photo: "paulhampton.jpg" },
  { name: "Trinh Doan", roles: ["VN Marketing Manager", "eBizCo VN"], photo: "trinhdoan.jpg" },
  { name: "Anthony George", roles: ["System Engineer", "Company Engineer"], photo: "anthonygeorge.jpg" },
];

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
            <div className="team-img"><img src={`/assets/img/team/${member.photo}`} alt={member.name} />
              <div className="team-social"><a href="#"><i className="fab fa-facebook-f" /></a> <a href="#"><i className="fab fa-twitter" /></a> <a href="#"><i className="fab fa-linkedin" /></a></div>
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
<section className="space-top space-extra-bottom skill-dark-bg" data-bg-src="/assets/img/bg/skill-bg-2-1.jpg">
  <div className="container">
    <div className="row flex-row-reverse">
      <div className="col-lg-5 col-xxl-auto mb-30 pb-20 pb-lg-0 wow fadeInUp" data-wow-delay="0.2s"><img src="/assets/img/skill/skill-1-1.jpg" alt="Skill image" /></div>
      <div className="col-lg-7 col-xxl-6 me-xl-auto"><span className="sec-subtitle"><i className="fas fa-bring-forward" />The Great Company Skill</span>
        <h2 className="sec-title3 h1">Connecting People And Build Technology</h2>
        <p className="mb-4 pb-1">Energistically evisculate an expanded array of meta-services after cross-media strategic theme areas. Interactively simplify interactive customer service before fully tested relationship parallel task high standards...</p>
        <div className="progress-box">
          <h3 className="progress-box__title">Business Security</h3><span className="progress-box__number">65%</span>
          <div className="progress-box__progress">
            <div className="progress-box__bar" role="progressbar" style={{width: '65%'}} aria-valuenow={65} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </div>
        <div className="progress-box">
          <h3 className="progress-box__title">Career Development</h3><span className="progress-box__number">88%</span>
          <div className="progress-box__progress">
            <div className="progress-box__bar" role="progressbar" style={{width: '88%'}} aria-valuenow={88} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </div>
        <div className="progress-box">
          <h3 className="progress-box__title">Business Inovation</h3><span className="progress-box__number">90%</span>
          <div className="progress-box__progress">
            <div className="progress-box__bar" role="progressbar" style={{width: '90%'}} aria-valuenow={90} aria-valuemin={0} aria-valuemax={100} />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
