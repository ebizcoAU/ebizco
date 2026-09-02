import Link from "next/link";
export default function PricePlanPage() {
  return (
    <>
<div className="breadcumb-wrapper" data-bg-src="/assets/img/breadcumb/breadcumb-bg.jpg">
  <div className="container z-index-common">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">Pricing Plans</h1>
      <div className="breadcumb-menu-wrap">
        <ul className="breadcumb-menu">
          <li><Link href="/">Home</Link></li>
          <li>Pricing Plans</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<div className="container pt-4">
  <div className="alert alert-warning">
    Placeholder content: these prices and blog teasers are unedited template demo data, not real eBizCo pricing. Replace with actual plans before this page goes live.
  </div>
</div>
<section className="space-top space-extra-bottom">
  <div className="container wow fadeInUp" data-wow-delay="0.2s">
    <div className="row vs-carousel" data-slide-show={3} data-md-slide-show={2} data-center-mode="true">
      <div className="col-xl-4">
        <div className="price-style1">
          <div className="price-shape" data-bg-src="/assets/img/shape/price-bg-shape-1-1.png" />
          <h3 className="price-package h5">Basic Plan</h3>
          <div className="price-amount h1">$29.99 <span className="price-duration">/monthly</span></div>
          <div className="price-features">
            <ul>
              <li><i className="far fa-check-circle" />Ad Management</li>
              <li><i className="far fa-check-circle" />Live Chat</li>
              <li><i className="far fa-check-circle" />Multi-Language Content</li>
              <li><i className="far fa-check-circle" />Conversational Bots</li>
              <li><i className="far fa-check-circle" />Programmable Chatbots</li>
            </ul>
          </div><a href="/contact" className="vs-btn">Get Started<i className="far fa-arrow-right" /></a>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="price-style1">
          <div className="price-shape" data-bg-src="/assets/img/shape/price-bg-shape-1-1.png" />
          <h3 className="price-package h5">Silver Plan</h3>
          <div className="price-amount h1">$39.99 <span className="price-duration">/anually</span></div>
          <div className="price-features">
            <ul>
              <li><i className="far fa-check-circle" />Ad Management</li>
              <li><i className="far fa-check-circle" />Live Chat</li>
              <li><i className="far fa-check-circle" />Multi-Language Content</li>
              <li><i className="far fa-check-circle" />Conversational Bots</li>
              <li><i className="far fa-check-circle" />Programmable Chatbots</li>
            </ul>
          </div><a href="/contact" className="vs-btn">Get Started<i className="far fa-arrow-right" /></a>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="price-style1">
          <div className="price-shape" data-bg-src="/assets/img/shape/price-bg-shape-1-1.png" />
          <h3 className="price-package h5">Gold Plan</h3>
          <div className="price-amount h1">$79.99 <span className="price-duration">/yearly</span></div>
          <div className="price-features">
            <ul>
              <li><i className="far fa-check-circle" />Ad Management</li>
              <li><i className="far fa-check-circle" />Live Chat</li>
              <li><i className="far fa-check-circle" />Multi-Language Content</li>
              <li><i className="far fa-check-circle" />Conversational Bots</li>
              <li><i className="far fa-check-circle" />Programmable Chatbots</li>
            </ul>
          </div><a href="/contact" className="vs-btn">Get Started<i className="far fa-arrow-right" /></a>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="price-style1">
          <div className="price-shape" data-bg-src="/assets/img/shape/price-bg-shape-1-1.png" />
          <h3 className="price-package h5">VIP Plan</h3>
          <div className="price-amount h1">$99.99 <span className="price-duration">/lifetime</span></div>
          <div className="price-features">
            <ul>
              <li><i className="far fa-check-circle" />Ad Management</li>
              <li><i className="far fa-check-circle" />Live Chat</li>
              <li><i className="far fa-check-circle" />Multi-Language Content</li>
              <li><i className="far fa-check-circle" />Conversational Bots</li>
              <li><i className="far fa-check-circle" />Programmable Chatbots</li>
            </ul>
          </div><a href="/contact" className="vs-btn">Get Started<i className="far fa-arrow-right" /></a>
        </div>
      </div>
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
<section className="vs-blog-wrapper space-top space-extra-bottom">
  <div className="container wow fadeInUp" data-wow-delay="0.2s">
    <div className="row justify-content-center text-center">
      <div className="col-xl-6">
        <div className="title-area"><span className="sec-subtitle">Weekly Updates</span>
          <h2 className="sec-title3 h1">Weekly Latest Updates</h2>
        </div>
      </div>
    </div>
    <div className="row vs-carousel" data-slide-show={3} data-md-slide-show={2}>
      <div className="col-xl-4">
        <div className="vs-blog blog-style1">
          <div className="blog-img"><img src="/assets/img/blog/blog-1-1.jpg" alt="Blog Image" className="w-100" />
            <div className="blog-content">
              <div className="blog-meta"><a href="/blog"><i className="far fa-calendar" />24 Feb, 2022</a> <a href="/blog"><i className="fal fa-user" />by admin</a></div>
              <h3 className="blog-title h5"><a href="/blog-details">Contrary to popular belief ipsum is not simply</a></h3><a href="/blog-details" className="link-btn">Read Details<i className="far fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="vs-blog blog-style1">
          <div className="blog-img"><img src="/assets/img/blog/blog-1-4.jpg" alt="Blog Image" className="w-100" />
            <div className="blog-content">
              <div className="blog-meta"><a href="/blog"><i className="far fa-calendar" />30 Mar, 2022</a> <a href="/blog"><i className="fal fa-user" />by admin</a></div>
              <h3 className="blog-title h5"><a href="/blog-details">Lorem ipsum placeholder text commonly used</a></h3><a href="/blog-details" className="link-btn">Read Details<i className="far fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="vs-blog blog-style1">
          <div className="blog-img"><img src="/assets/img/blog/blog-1-2.jpg" alt="Blog Image" className="w-100" />
            <div className="blog-content">
              <div className="blog-meta"><a href="/blog"><i className="far fa-calendar" />31 Jul, 2022</a> <a href="/blog"><i className="fal fa-user" />by admin</a></div>
              <h3 className="blog-title h5"><a href="/blog-details">From its medieval to the digital learn everything</a></h3><a href="/blog-details" className="link-btn">Read Details<i className="far fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
      <div className="col-xl-4">
        <div className="vs-blog blog-style1">
          <div className="blog-img"><img src="/assets/img/blog/blog-1-3.jpg" alt="Blog Image" className="w-100" />
            <div className="blog-content">
              <div className="blog-meta"><a href="/blog"><i className="far fa-calendar" />26 Aug, 2022</a> <a href="/blog"><i className="fal fa-user" />by admin</a></div>
              <h3 className="blog-title h5"><a href="/blog-details">Global Business Goal Make Life Easy From Tech</a></h3><a href="/blog-details" className="link-btn">Read Details<i className="far fa-arrow-right" /></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
