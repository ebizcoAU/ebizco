import Link from "next/link";

export default function AntifakeFooter() {
  return (
    <footer className="footer-light">
      <div className="container">
        <div className="row">
          <div className="col-lg-2">
            <div className="widget">
              <Link href="/antifake"><img alt="AntiFake" className="logo" src="/antifake/assets/img/minilogo-light.png" /></Link>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="widget">
              <h5>Company</h5>
              <ul>
                <li><Link className="a-underline" href="/antifake/about">About AntiFake<span></span></Link></li>
                <li><Link className="a-underline" href="/antifake/jobs">Job Opportunities<span></span></Link></li>
                <li><Link className="a-underline" href="/antifake/contact">Contact Us<span></span></Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="widget">
              <h5>Products</h5>
              <ul>
                <li><Link className="a-underline" href="/antifake/features">Features<span></span></Link></li>
                <li><Link className="a-underline" href="/antifake#pricing">Service Plan<span></span></Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="widget">
              <h5>Help Line</h5>
              <ul>
                <li><Link className="a-underline" href="/blog">Blog<span></span></Link></li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="widget">
              <h5>Contact</h5>
              <ul>
                <li><span>WhatsApp|Zalo|Viber</span></li>
                <li><span className="pe-0">+84 (0)908888218</span></li>
                <li><span className="pe-0">+61 (0)412783132</span></li>
                <li><span>Email:</span><span>vince.phan@antifake.vn</span></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="subfooter">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="de-flex">
                <div className="de-flex-col">
                  &copy; Copyright {new Date().getFullYear()} - AntiFake by eBizCo Australia Pty Ltd
                </div>

                <div className="de-flex-col">
                  <div className="social-icons">
                    <a href="#"><i className="fa fa-facebook fa-lg" /></a>
                    <a href="#"><i className="fa fa-twitter fa-lg" /></a>
                    <a href="#"><i className="fa fa-linkedin fa-lg" /></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
