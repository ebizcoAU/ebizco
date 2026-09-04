"use client";

import Link from "next/link";

export default function Header() {
  const translateToVietnamese = (e) => {
    e.preventDefault();
    const target = `https://translate.google.com/translate?sl=auto&tl=vi&u=${encodeURIComponent(window.location.href)}`;
    window.open(target, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="preloader">
        <button className="vs-btn preloaderCls">Cancel Preloader</button>
        <div className="preloader-inner"><span className="loader" /></div>
      </div>
      <div className="vs-menu-wrapper">
        <div className="vs-menu-area text-center">
          <button className="vs-menu-toggle"><i className="fal fa-times" /></button>
          <div className="mobile-logo"><Link href="/"><img src="/assets/img/icon/logo.png" alt="eBizCo" className="logo" /></Link></div>
          <div className="vs-mobile-menu">
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/team">Team</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/privacy">Privacy Statement</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sidemenu-wrapper d-none d-lg-block">
        <div className="sidemenu-content">
          <button className="closeButton sideMenuCls"><i className="far fa-times" /></button>
          <div className="widget">
            <div className="vs-widget-about">
              <div className="footer-logo"><Link href="/"><img src="/assets/img/icon/logo.png" alt="eBizCo" className="logo" /></Link></div>
              <p className="footer-text">Intrinsicly evisculate emerging cutting edge scenarios redefine future-proof e-markets demand line</p>
              <div className="footer-social">
                <a href="#"><i className="fab fa-facebook-f" /></a>{" "}
                <a href="#"><i className="fab fa-twitter" /></a>{" "}
                <a href="#"><i className="fab fa-instagram" /></a>{" "}
                <a href="#"><i className="fab fa-behance" /></a>{" "}
                <a href="#"><i className="fab fa-youtube" /></a>
              </div>
            </div>
          </div>
          <div className="widget">
            <h4 className="widget_title">Gallery Posts</h4>
            <div className="sidebar-gallery">
              <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-1.jpg" alt="Gallery Image" className="w-100" /></div>
              <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-2.jpg" alt="Gallery Image" className="w-100" /></div>
              <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-3.jpg" alt="Gallery Image" className="w-100" /></div>
              <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-4.jpg" alt="Gallery Image" className="w-100" /></div>
              <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-5.jpg" alt="Gallery Image" className="w-100" /></div>
              <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-6.jpg" alt="Gallery Image" className="w-100" /></div>
            </div>
          </div>
          <div className="widget">
            <h3 className="widget_title">Office Maps</h3>
            <div className="footer-map">
              <iframe
                title="office location map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d163720.11965853968!2d8.496481908353967!3d50.121347879150306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47bd096f477096c5%3A0x422435029b0c600!2sFrankfurt%2C%20Germany!5e0!3m2!1sen!2sbd!4v1651732317319!5m2!1sen!2sbd"
                width={200}
                height={180}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
      <header className="vs-header header-layout5">
        <div className="header-shape1" />
        <div className="header-top">
          <div className="container">
            <div className="row align-items-center justify-content-between gx-20">
              <div className="col d-none d-md-block">
                <div className="header-links style-white">
                  <ul>
                    <li><i className="far fa-envelope" /><a href="mailto:ebizco.au@gmail.com">ebizco.au@gmail.com</a></li>
                    <li><i className="far fa-map-marker-alt" />Unit 1/9 Boag Rd Morley WA 6062</li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-dropdown style-white">
                  <a className="dropdown-toggle" href="#" role="button" id="dropdownMenuLink1" data-bs-toggle="dropdown" aria-expanded="false"><i className="fas fa-globe" />English</a>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink1">
                    <li><a href="#" onClick={translateToVietnamese}>Vietnamese</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-auto">
                <div className="header-social style-white">
                  <a href="#"><i className="fab fa-facebook-f" /></a>{" "}
                  <a href="#"><i className="fab fa-twitter" /></a>{" "}
                  <a href="#"><i className="fab fa-instagram" /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky-wrapper">
          <div className="sticky-active">
            <div className="menu-area">
              <div className="container">
                <div className="row align-items-center justify-content-between gx-40">
                  <div className="col-auto">
                    <div className="header-logo"><Link href="/"><img src="/assets/img/icon/logo.png" alt="eBizCo" className="logo" /></Link></div>
                  </div>
                  <div className="col text-end text-xl-center">
                    <nav className="main-menu menu-style4 d-none d-lg-block">
                      <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="/about">About Us</Link></li>
                        <li><Link href="/team">Team</Link></li>
                        <li><Link href="/blog">Blog</Link></li>
                        <li><Link href="/privacy">Privacy Statement</Link></li>
                        <li><Link href="/contact">Contact Us</Link></li>
                      </ul>
                    </nav>
                    <button className="vs-menu-toggle d-inline-block d-lg-none"><i className="fal fa-bars" /></button>
                  </div>
                  <div className="col-auto d-none d-xxxl-block">
                    <div className="header-info style2">
                      <div className="header-info_icon"><img src="/assets/img/icon/tel-1-2.png" alt="call icon" /></div>
                      <div className="media-body">
                        <span className="header-info_label">Call Now</span>
                        <div className="header-info_link"><a href="tel:+61 412783132">+61 412783132</a></div>
                      </div>
                    </div>
                  </div>
                  <div className="col-auto d-none d-xl-block">
                    <div className="header-btns"><Link href="/contact" className="vs-btn style7">Make Appointment<i className="far fa-arrow-right" /></Link></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
