"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { PRODUCTS, externalLinkProps } from "@/lib/products";
import "./home.css";

const heroSlides = [
  {
    id: "ozlodge",
    subtitle: "Hospitality Automation — OZLODGE",
    title: "Self Check-In, Solved.",
    text: "OZLODGE automates hotel, motel and short-stay check-in with app, kiosk and smart-lock integration — self-hosted, with no third-party cloud and full data control.",
    image: "/assets/img/others/hero-ihms-selfcheckin.png",
    primaryCta: { label: "Explore OZLODGE", href: PRODUCTS.ozlodge.href, external: PRODUCTS.ozlodge.external },
  },
  {
    id: "antifake",
    subtitle: "Product Authentication — AntiFake",
    title: "Stop Counterfeits Cold.",
    text: "AntiFake gives brands and consumers instant, verifiable proof of authenticity — protecting products from pharmaceuticals to premium goods.",
    image: "/assets/img/others/hero-antifake-authentication.png",
    primaryCta: { label: "Explore AntiFake", href: PRODUCTS.antifake.href, external: PRODUCTS.antifake.external },
  },
  {
    id: "projman",
    subtitle: "Construction Workforce Platform — ProjMan",
    title: "Verified Skills. Zero Guesswork.",
    text: "ProjMan turns the 18-stage construction lifecycle into immutable, multi-party verified evidence — cutting RPL credentialing from 18 months to weeks.",
    image: "/assets/img/others/hero-projman-construction.png",
    primaryCta: { label: "Explore ProjMan", href: PRODUCTS.projman.href, external: PRODUCTS.projman.external },
  },
  {
    id: "icutv",
    subtitle: "Pay-Per-Play Digital Signage — ICUTV",
    title: "Play Anywhere. Pay Per Play.",
    text: "ICUTV is a pay-as-you-go digital signage network — manage every screen from the cloud and only pay for the plays that actually air.",
    image: "/assets/img/icutv/icutv-playanywhere.png",
    primaryCta: { label: "Explore ICUTV", href: PRODUCTS.icutv.href, external: PRODUCTS.icutv.external },
  },
];

const products = [
  {
    id: "ozlodge",
    icon: "fal fa-concierge-bell",
    title: "OZLODGE - Hotel Automation",
    href: PRODUCTS.ozlodge.href,
    external: PRODUCTS.ozlodge.external,
    text: "Automated hotel operation optimizes guest experiences and enhances efficiency by utilizing advanced technologies. From streamlined check-ins to smart room controls, it revolutionizes the hospitality industry with seamless, hassle-free services.",
  },
  {
    id: "icutv",
    icon: "fal fa-tv",
    title: "ICUTV - Digital Signage",
    href: PRODUCTS.icutv.href,
    external: PRODUCTS.icutv.external,
    text: "A pay-per-play digital signage network: build your content once, deploy it to any screen — from airports to taxis — and track every play in real time. No hardware lock-in, no wasted airtime.",
  },
  {
    id: "antifake",
    icon: "fal fa-shield-check",
    title: "AntiFake - Authentication",
    href: PRODUCTS.antifake.href,
    external: PRODUCTS.antifake.external,
    text: "Every product ships with a unique dynamic QR code. Scanning it in the app verifies authenticity, can trigger a manufacturer-defined consumer reward, and deducts that unit from stock — tracing it from factory to distributor to sale outlet. A purchase from outside that trail is a strong tamper signal.",
  },
  {
    id: "projman",
    icon: "fal fa-hard-hat",
    title: "ProjMan - Construction Workforce",
    href: PRODUCTS.projman.href,
    external: PRODUCTS.projman.external,
    text: "ProjMan transforms the 18-stage construction lifecycle into an immutable instrument of workforce integrity — multi-party verified, geolocated evidence that slashes RPL credentialing time from 18 months to weeks.",
  },
];

const testimonials = [
  {
    name: "Mr Cheng Williams",
    role: "QUEST Hotel Chain",
    img: "/assets/img/team/t-5-3.jpg",
    quote:
      "Exemplary IT solutions have significantly elevated our hotel development, enhancing efficiency and guest experiences to unparalleled heights.",
  },
  {
    name: "Ms Claire Bauech",
    role: "RayWhite Property Manager",
    img: "/assets/img/team/t-5-2.jpg",
    quote: "Outstanding IT prowess elevating property management to unprecedented levels of efficiency and innovation. Impressive work!",
  },
  {
    name: "Steve Thiele",
    role: "TransACT Communications",
    img: "/assets/img/team/t-2-4.jpg",
    quote: "Your IT service excellency is commendable, showcasing expertise that propels businesses to new heights of success and innovation.",
  },
  {
    name: "Peter Kamens",
    role: "Canningvale Linnen",
    img: "/assets/img/team/t-1-1.jpg",
    quote: "Remarkable IT expertise in factory automation, streamlining processes and optimizing efficiency. A true game-changer!",
  },
];

const blogPosts = [
  {
    id: "antifake",
    img: "/assets/img/blog/blog-5-1.jpg",
    tag: "Develop",
    title: "AntiFake - Product Authentication",
    href: PRODUCTS.antifake.href,
    external: PRODUCTS.antifake.external,
  },
  {
    id: "projman",
    img: "/assets/img/blog/blog-5-2.jpg",
    tag: "Design",
    title: "Projman - Tailored Automated Microsoft Project App for Mining",
    href: PRODUCTS.projman.href,
    external: PRODUCTS.projman.external,
  },
  {
    id: "motocare",
    img: "/assets/img/blog/blog-5-3.jpg",
    tag: "Affiliat",
    title: "Motocare Partnership",
    href: "/blog-details",
    external: false,
  },
];

function useHeroRotation(count, delay = 6000) {
  const [active, setActive] = useState(0);
  const timerRef = useRef(null);
  const pausedRef = useRef(false);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      if (!pausedRef.current) setActive((i) => (i + 1) % count);
    }, delay);
    return () => clearInterval(timerRef.current);
  }, [count, delay]);

  return {
    active,
    setActive,
    pause: () => (pausedRef.current = true),
    resume: () => (pausedRef.current = false),
  };
}

export default function HomePage() {
  const hero = useHeroRotation(heroSlides.length);

  return (
    <div className="ebizco-home">
      {/* ---------- Hero ---------- */}
      <section
        className="hp-hero"
        onMouseEnter={hero.pause}
        onMouseLeave={hero.resume}
      >
        {heroSlides.map((slide, i) => (
          <div key={slide.id} className={"hp-hero-slide" + (i === hero.active ? " is-active" : "")}>
            <img className="hp-hero-img" src={slide.image} alt={slide.title} />
            <div className="hp-hero-scrim" />
            <div className="hp-hero-inner hp-container">
              <div className="hp-hero-copy">
                <span className="hp-hero-eyebrow"><i className="fal fa-arrow-right" />{slide.subtitle}</span>
                <h1 className="hp-hero-title">{slide.title}</h1>
                <p className="hp-hero-text">{slide.text}</p>
                <div className="hp-hero-ctas">
                  <Link
                    href={slide.primaryCta.href}
                    className="hp-btn hp-btn--solid"
                    prefetch={false}
                    {...externalLinkProps(slide.primaryCta)}
                  >
                    {slide.primaryCta.label}<i className="far fa-arrow-right" />
                  </Link>
                  <Link href="/contact" className="hp-btn hp-btn--ghost-light" prefetch={false}>
                    Get In Touch
                  </Link>
                </div>
                <div className="hp-hero-nav">
                  <span className="hp-hero-count">0{hero.active + 1} / 0{heroSlides.length}</span>
                  <div className="hp-hero-dots">
                    {heroSlides.map((s, i2) => (
                      <button
                        key={s.id}
                        type="button"
                        aria-label={`Show slide ${i2 + 1}: ${s.title}`}
                        className={"hp-hero-dot" + (i2 === hero.active ? " is-active" : "")}
                        onClick={() => hero.setActive(i2)}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="hp-hero-arrows">
          <button
            type="button"
            aria-label="Previous slide"
            className="hp-hero-arrow"
            onClick={() => hero.setActive((hero.active - 1 + heroSlides.length) % heroSlides.length)}
          >
            <i className="far fa-arrow-left" />
          </button>
          <button
            type="button"
            aria-label="Next slide"
            className="hp-hero-arrow"
            onClick={() => hero.setActive((hero.active + 1) % heroSlides.length)}
          >
            <i className="far fa-arrow-right" />
          </button>
        </div>
      </section>

      {/* ---------- Products ---------- */}
      <section className="hp-band">
        <div className="hp-container wow fadeInUp" data-wow-delay="0.1s">
          <div className="hp-section-head">
            <span className="hp-eyebrow"><i className="fal fa-arrow-right" />What We Build</span>
            <h2 className="hp-title">Four Platforms, One Engineering Team</h2>
          </div>
          <div className="hp-grid-4">
            {products.map((p) => (
              <div className="hp-card" key={p.id}>
                <div className="hp-card-icon"><i className={p.icon} /></div>
                <h3 className="hp-card-title">{p.title}</h3>
                <p className="hp-card-text">{p.text}</p>
                <Link
                  href={p.href}
                  className="hp-card-link"
                  prefetch={false}
                  {...externalLinkProps(p)}
                >
                  Learn More<i className="far fa-arrow-right" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- About ---------- */}
      <section className="hp-band hp-band--smoke">
        <div className="hp-container wow fadeInUp" data-wow-delay="0.1s">
          <div className="hp-about">
            <div className="hp-about-img">
              <img src="/assets/img/about/ab-8-1.jpg" alt="eBizCo team at work" />
            </div>
            <div>
              <span className="hp-eyebrow"><i className="fal fa-arrow-right" />A highly recommended Company Awarded</span>
              <h2 className="hp-title">A Top-tier Software Company...</h2>
              <ul className="hp-checklist">
                <li><i className="far fa-check" />Cutting-edge technology expertise.</li>
                <li><i className="far fa-check" />Proven track record of successful projects.</li>
                <li><i className="far fa-check" />Exceptional customer satisfaction and reviews.</li>
              </ul>
              <Link href="/about" className="hp-btn hp-btn--outline" prefetch={false}>
                Learn More About Us<i className="fal fa-long-arrow-right" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Testimonials ---------- */}
      <section className="hp-band hp-band--navy">
        <div className="hp-container wow fadeInUp" data-wow-delay="0.1s">
          <div className="hp-section-head">
            <span className="hp-eyebrow" style={{ color: "#8db0ff" }}><i className="fal fa-arrow-right" />Customer Testimonial</span>
            <h2 className="hp-title" style={{ color: "#fff" }}>What People&rsquo;s Say</h2>
          </div>
          <div className="hp-testi-grid">
            {testimonials.map((t) => (
              <div className="hp-testi-card" key={t.name}>
                <div className="hp-testi-stars">
                  <i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" /><i className="fas fa-star" />
                </div>
                <p className="hp-testi-quote">&quot;{t.quote}&quot;</p>
                <div className="hp-testi-author">
                  <img src={t.img} alt={t.name} />
                  <div>
                    <div className="hp-testi-name">{t.name}</div>
                    <div className="hp-testi-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Blog ---------- */}
      <section className="hp-band">
        <div className="hp-container wow fadeInUp" data-wow-delay="0.1s">
          <div className="hp-section-head">
            <span className="hp-eyebrow"><i className="fal fa-arrow-right" />Blog &amp; News</span>
            <h2 className="hp-title">Get Latest Updates</h2>
          </div>
          <div className="hp-grid-3">
            {blogPosts.map((b) => (
              <div className="hp-blog-card" key={b.id}>
                <Link href={b.href} className="hp-blog-img" prefetch={false} {...externalLinkProps(b)}>
                  <img src={b.img} alt={b.title} />
                </Link>
                <div className="hp-blog-body">
                  <div className="hp-blog-meta">
                    <span><i className="far fa-folder" />{b.tag}</span>
                    <span><i className="fal fa-user" />Vince Phan</span>
                  </div>
                  <h3 className="hp-blog-title"><Link href={b.href} prefetch={false} {...externalLinkProps(b)}>{b.title}</Link></h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Closing CTA ---------- */}
      <section className="hp-band--tight" style={{ paddingBottom: 100 }}>
        <div className="hp-container wow fadeInUp" data-wow-delay="0.1s">
          <div className="hp-cta">
            <div>
              <h3 className="hp-cta-title">Ready to build with us?</h3>
              <p className="hp-cta-text">Tell us what you&rsquo;re trying to ship — we&rsquo;ll tell you how fast we can get there.</p>
            </div>
            <Link href="/contact" className="hp-btn hp-btn--ghost-light" style={{ borderColor: "#fff" }} prefetch={false}>
              Get In Touch<i className="far fa-arrow-right" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
