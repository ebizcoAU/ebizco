import Link from "next/link";
import { PRODUCTS, externalLinkProps } from "@/lib/products";

export const metadata = {
  title: "News",
  description: "News from eBizco Australia: AntiFake product authentication, ICUTV addressable TV and OZLODGE mobile hotel check-in.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
<div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
  <div className="container z-index-common">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">Blog List</h1>
      <div className="breadcumb-menu-wrap">
        <ul className="breadcumb-menu">
          <li><Link href="/">Home</Link></li>
          <li>Blog List</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section className="vs-blog-wrapper space-top space-extra-bottom">
  <div className="container">
    <div className="row gx-40">
      <div className="col-lg-8">
        <div className="vs-blog blog-single">
          <div className="blog-img vs-carousel" data-arrows="true" data-slide-show={1} data-fade="true"><Link href={PRODUCTS.antifake.href} {...externalLinkProps(PRODUCTS.antifake)}><img src="/assets/img/blog/fake1.png" alt="Blog Image" /></Link></div>
          <div className="blog-content">
            <div className="blog-meta"><Link href="/blog"><i className="far fa-calendar" />18 May, 2023</Link> <Link href="/blog"><i className="fal fa-user" />by Admin</Link></div>
            <h2 className="blog-title"><Link href={PRODUCTS.antifake.href} {...externalLinkProps(PRODUCTS.antifake)}>AntiFake: Ending the guesswork on counterfeit goods</Link></h2>
            <p>Counterfeit goods are rampant across Asia, where there is still no standard way to verify a product is genuine — just the naked eye, and a lot of luck. AntiFake replaces that guesswork with proof: scan the product&apos;s QR code and know for certain.</p><Link href={PRODUCTS.antifake.href} {...externalLinkProps(PRODUCTS.antifake)} className="link-btn">Read Details<i className="far fa-arrow-right" /></Link>
          </div>
        </div>
        <div className="vs-blog blog-single">
          <div className="blog-img vs-carousel" data-arrows="true" data-slide-show={1} data-fade="true"><Link href={PRODUCTS.icutv.href}><img src="/assets/img/blog/icutv1.png" alt="Blog Image" /></Link></div>
          <div className="blog-content">
            <div className="blog-meta"><Link href={PRODUCTS.icutv.href}><i className="far fa-calendar" />28 Apr, 2020 &nbsp;&nbsp;&nbsp;&nbsp;<i className="fal fa-user" />By Admin</Link></div>
            <h2 className="blog-title"><Link href={PRODUCTS.icutv.href}>ICUTV - Efficiently reach ideal audience, trim costs, and maximize impact with Addressable TV</Link></h2>
            <p>Whether you have tested addressable TV, or you’re still sitting on the sidelines, growth projections show that it’s time to take addressability seriously. Channel ad spending is expected to reach $3.49 billion by 2021. According to NScreenmedia, out of 88.3 million pay TV households, 70M are set-top box (STB) addressable-enabled for pharma targeting...</p><Link href={PRODUCTS.icutv.href} className="link-btn">Read Details<i className="far fa-arrow-right" /></Link>
          </div>
        </div>
        <div className="vs-blog blog-single">
          <div className="blog-img vs-carousel" data-arrows="true" data-slide-show={1} data-fade="true"><Link href={PRODUCTS.ozlodge.href}><img width={751} height={200} src="/assets/img/blog/ihms1.png" alt="Blog Image" /></Link></div>
          <div className="blog-content">
            <div className="blog-meta"><Link href={PRODUCTS.ozlodge.href}><i className="far fa-calendar" />22 Mar, 2018 &nbsp;&nbsp;&nbsp;&nbsp;<i className="fal fa-user" />By Admin</Link></div>
            <h2 className="blog-title"><Link href={PRODUCTS.ozlodge.href}>OZLODGE - Experience the Future of Hospitality: Instant Check-in via Mobile!</Link></h2>
            <p>Revolutionize hotel check-in with our innovative self-serve system! Seamlessly check in using your mobile phone, making the process efficient and hassle-free, enhancing your stay from the moment you arrive....</p><Link href={PRODUCTS.ozlodge.href} className="link-btn">Read Details<i className="far fa-arrow-right" /></Link>
          </div>
        </div>
        <div className="vs-pagination">
          <ul>
            <li><a className="active" href="/blog#">1</a></li>
          </ul>
        </div>
      </div>
      <div className="col-lg-4">
        <aside className="sidebar-area">
          <div className="widget widget_search">
            <form className="search-form"><input type="text" placeholder="Search Here" /> <button type="submit"><i className="far fa-search" /></button></form>
          </div>
          <div className="widget widget_categories">
            <h3 className="widget_title">Categories</h3>
            <ul>
              <li><Link href={PRODUCTS.ozlodge.href}>OZLODGE</Link></li>
              <li><Link href={PRODUCTS.icutv.href}>ICUTV</Link></li>
              <li><Link href={PRODUCTS.antifake.href} {...externalLinkProps(PRODUCTS.antifake)}>AntiFake</Link></li>
              <li><Link href={PRODUCTS.projman.href} {...externalLinkProps(PRODUCTS.projman)}>ProjMan</Link></li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
