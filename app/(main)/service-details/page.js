import Link from "next/link";
export default function ServiceDetailsPage() {
  return (
    <>
<div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
  <div className="container z-index-common">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">Service Details</h1>
      <div className="breadcumb-menu-wrap">
        <ul className="breadcumb-menu">
          <li><Link href="/">Home</Link></li>
          <li>Service Details</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section className="space-top space-extra-bottom">
  <div className="container">
    <div className="row flex-row-reverse">
      <div className="col-lg-8">
        <div className="mb-3 pb-3"><img src="/assets/img/service/sr-d-1-1.jpg" alt="Project image" /></div>
        <h2 className="h4">IT Solution And Business</h2>
        <p>Holisticly benchmark functional products before excellent methods of empowerment. Seamlessly visualize innovative web-readiness whereas extensive initiatives. Completely unleash frictionless data via end-to-end services. Continually unleash virtual e-tailers through magnetic core competencies. Interactively engage distributed alignments via focused alignments. Dynamically fabricate excellent innovation for go forward technology. Intrinsicly impact empowered scenarios after cost effective outsourcing. Synergistically productivate pandemic e-business rather than state of the art e-tailers. Continually expedite customized information with go forward potentialities.</p>
        <div className="row gx-0 mb-4 pb-2 pt-3 wow fadeInUp" data-wow-delay="0.2s">
          <div className="col-xl-6"><img src="/assets/img/service/sr-d-1-2.jpg" alt="project image" className="w-100" /></div>
          <div className="col-xl-6">
            <div className="service-list-box">
              <h3 className="h5 title">Service Features</h3>
              <div className="list-style3">
                <ul>
                  <li><i className="fal fa-check-circle" />We Provide Flexible IT Services</li>
                  <li><i className="fal fa-check-circle" />Best IT Solution with Our Team</li>
                  <li><i className="fal fa-check-circle" />Award Winning Digital Solutions</li>
                  <li><i className="fal fa-check-circle" />25 Years Skilled Experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <h3 className="h5">The challenge of project</h3>
        <p>Interactively engage distributed alignments via focused alignments. Dynamically fabricate excellent innovation for go forward technology. Intrinsicly impact empowered scenarios after cost effective outsourcing. Synergistically productivate pandemic e-business rather than state of the art e-tailers.</p>
        <p>Completely unleash frictionless data via end-to-end services. Continually unleash virtual e-tailers through magnetic core competencies. Interactively engage distributed alignments via focused alignments.</p>
        <div className="row pt-3 mb-30 pb-10 gy-30 wow fadeInUp" data-wow-delay="0.2s">
          <div className="col-md-6"><img src="/assets/img/service/sr-d-1-3.jpg" alt="project image" /></div>
          <div className="col-md-6"><img src="/assets/img/service/sr-d-1-4.jpg" alt="project image" /></div>
        </div>
        <div className="accordion accordion-style1 layout2 wow fadeInUp" data-wow-delay="0.2s" id="faqVersion1">
          <div className="accordion-item">
            <div className="accordion-header" id="headingOne"><button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">01 What Is The Design Process For Branding?</button></div>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#faqVersion1">
              <div className="accordion-body">
                <p>Assertively communicate multidisciplinary content through emerging skills for intermandated e-tailers. Rapidiously revolutionize emerging supply for interdependent portals. Monotonectally restore 24/365 leadership for high quality niche markets transform emerging mindshare...</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="headingTwo"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Contrary to popular belief simply random text?</button></div>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#faqVersion1">
              <div className="accordion-body">
                <p>Assertively communicate multidisciplinary content through emerging skills for intermandated e-tailers. Rapidiously revolutionize emerging supply for interdependent portals. Monotonectally restore 24/365 leadership for high quality niche markets transform emerging mindshare...</p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <div className="accordion-header" id="headingThree"><button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Master Technology It Solution Services Making?</button></div>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#faqVersion1">
              <div className="accordion-body">
                <p>Assertively communicate multidisciplinary content through emerging skills for intermandated e-tailers. Rapidiously revolutionize emerging supply for interdependent portals. Monotonectally restore 24/365 leadership for high quality niche markets transform emerging mindshare...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <aside className="service-sidebar">
          <div className="widget widget_categories">
            <h3 className="widget_title">All Services</h3>
            <ul>
              <li><a href="/service-details">UI/UX Designing</a></li>
              <li><a href="/service-details">Digital Marketing</a></li>
              <li><a href="/service-details">App Development</a></li>
              <li><a href="/service-details">Cloud Solution</a></li>
              <li><a href="/service-details">Business Management</a></li>
            </ul>
          </div>
          <div className="widget">
            <h3 className="widget_title">Working Hours</h3>
            <div className="widget-workhours">
              <ul>
                <li><i className="fal fa-clock" />Mon – Fri 1.00 – 2:00 pm</li>
                <li><i className="fal fa-clock" />Saturday 8.00 – 12:00 pm</li>
                <li><span className="text-theme"><i className="fal fa-clock" />Sunday closed</span></li>
              </ul>
            </div>
          </div>
          <div className="quote-box" data-bg-src="/assets/img/widget/quote-box.jpg">
            <h3 className="quote-box__title">Have Any Query?</h3><a href="contact.html" className="vs-btn">Get A Quote<i className="far fa-arrow-right" /></a>
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
