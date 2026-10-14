import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer-wrapper footer-layout4 bg-theme" data-bg-src="/assets/img/bg/footer-bg-4-1.png">
        <div className="shape1"><img src="/assets/img/shape/footer-shape-5-1.png" alt="shape" /></div>
        <div className="widget-area">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-md-3">
                <div className="widget footer-widget">
                  <h3 className="widget_title">Help Desk</h3>
                  <div className="vs-widget-about">
                    <a href="tel:+61 412783132" className="footer-number1">+61 412783132</a>
                    <p className="footer-address2"><i className="fal fa-map-marker-alt" />Head office: 29 Farrer Street, Braddon ACT 2612</p>
                    <p className="footer-address2"><i className="fal fa-map-marker-alt" />WA office: Unit 1/9 Boag Rd, Morley WA 6062</p>
                    <a href="mailto:admin@ebizco.com.au" className="footer-mail1"><i className="fal fa-envelope" />admin@ebizco.com.au</a>
                  </div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="widget widget_nav_menu footer-widget">
                  <h3 className="widget_title">Useful Links</h3>
                  <div className="menu-all-pages-container">
                    <ul className="menu">
                      <li><Link href="/about" prefetch={false}>About Us</Link></li>
                      <li><Link href="/team" prefetch={false}>Our Team</Link></li>
                      <li><Link href="/blog" prefetch={false}>Latest News</Link></li>
                      <li><Link href="/contact" prefetch={false}>Contact Us</Link></li>
                      <li><Link href="/privacy" prefetch={false}>Privacy Policy</Link></li>
                      <li><Link href="/delete-account" prefetch={false}>Delete your account</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="widget footer-widget">
                  <h3 className="widget_title">About Us</h3>
                  <div className="vs-widget-about">
                    <p className="footer-text">eBizco Australia Pty Ltd — Canberra-based software development company since 1998. Specialists in AI IVR, intelligent automation, and SaaS platform development. Beyond software, we design our own hardware and research mechatronics and robotics for the mining industry. We build decentralised, self-hosted solutions that give businesses complete control over their data and their customers. Home of the Sovereign Lock Platform — the future of hospitality self-check-in.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="copyright-wrap">
            <div className="row gy-2 align-items-center justify-content-between">
              <div className="col-auto d-none d-lg-block">
                <div className="copyright-logo"><Link href="/" prefetch={false}><img src="/assets/img/icon/logowhite.png" alt="Logo" /></Link></div>
              </div>
              <div className="col-auto">
                <p className="copyright-text">Copyright <i className="fal fa-copyright" /> {new Date().getFullYear()} <Link className="text-white" href="/" prefetch={false}>Ebizco Australia Pty Ltd</Link> · ABN 44 091 466 858 · ACN 091 466 858</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
    </>
  );
}
