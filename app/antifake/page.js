"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";

const typedStrings = ["fast, efficient, affordable,", "precise, safe,", "secure & reliable."];

const features = [
  {
    icon: "fa-music",
    title: "Confirming product authenticity and tracing its origin",
    text: "Verify authenticity and trace the origin of the product in a snap, without the need to download an app or provide personal details.",
  },
  {
    icon: "fa-list-ol",
    title: "Instant rewards and gifts",
    text: "Instant rewards with gifts and phone card vouchers, or continue shopping to accumulate points for services when needed.",
  },
  {
    icon: "fa-star",
    title: "Protecting distribution networks and customer loyalty",
    text: "AntiFake proactively connects with potential customers and safeguards the distribution network through intelligent punitive methods.",
  },
  {
    icon: "fa-heartbeat",
    title: "Real-time transparent information",
    text: "Internally shared information is updated and reported in real-time, ensuring transparency based on member roles.",
  },
  {
    icon: "fa-random",
    title: "Preventing territorial infringement, protecting the rights of agents",
    text: "AntiFake safeguards and ensures the rights of agents, preventing territorial infringement, and monitoring hotspots based on income data.",
  },
  {
    icon: "fa-hourglass-start",
    title: "Free smart packaging solution",
    text: "With a coordinated software and hardware approach, AntiFake provides manufacturers with an intelligent, secure, and highly effective packaging model.",
  },
];

const interfaceTabs = [
  {
    id: "dashboard",
    label: "Dashboard",
    text: "Desktop|Tablet interfaces for manufacturers, distributors, agents, and employees to monitor inventory, generate QRCODEs, create products, brands, manage distribution channels, and transact with real-time multidimensional reports.",
  },
  {
    id: "apps",
    label: "Apps",
    text: "Mobile interface for all participating members. Use for personal news references, e-wallets, data activation checks, shopping services, transaction lists, work reports, member introductions, product activation, and reward withdrawals. Apps use the company's own domain name, distinctive and not shared, avoiding unnecessary confusion.",
  },
  {
    id: "digital-id",
    label: "Digital ID",
    text: "Security identification system for network members with dynamic QRCode technology, Digital Geo-Fencing, advanced Crypto technology, in addition to existing security on personal mobile phones.",
  },
];

const plans = [
  {
    name: "Standard",
    tagline: "Basic Plan",
    quarterly: "5,000",
    yearly: "19,000",
    extraStamp: "$0.04/stamp if use more than 60,000 stamp/qtr",
    features: [
      { yes: true, text: "100,000 stamp/qtr" },
      { yes: true, text: "Products/Produce verification" },
      { yes: true, text: "Products/Produce traceability" },
      { yes: true, text: "Distribution monitoring" },
      { yes: true, text: "Self generate QRCODE on demand" },
      { yes: true, text: "Customer Referral System" },
      { yes: false, text: "Digital Wallet" },
      { yes: false, text: "Host on private domain" },
      { yes: false, text: "Detailed full channel Sale report" },
      { yes: false, text: "Commission Sharing Scheme" },
      { yes: false, text: "Inventory Control|Monitoring" },
      { yes: false, text: "Import|Export Inventory" },
      { yes: true, text: "OTP SMS included free" },
      { yes: true, text: "8AM-5PM Mon-Fri support help line" },
      { yes: true, text: "Free 1x AntiFake Encoder for packaging" },
      { yes: true, text: "Free 1x TIJ printer + Conveyor bench" },
    ],
  },
  {
    name: "Professional",
    tagline: "Domestic Local Products",
    quarterly: "20,000",
    yearly: "70,000",
    extraStamp: "$0.07/stamp if use more than 300,000 stamp/qtr",
    features: [
      { yes: true, text: "300,000 stamp/qtr" },
      { yes: true, text: "Products/Produce verification" },
      { yes: true, text: "Products/Produce traceability" },
      { yes: true, text: "Distribution monitoring" },
      { yes: true, text: "Self generate QRCODE on demand" },
      { yes: true, text: "Customer Referral System" },
      { yes: true, text: "Digital Wallet" },
      { yes: true, text: "Host on private domain" },
      { yes: true, text: "Detailed full channel Sale report" },
      { yes: true, text: "Commission Sharing Scheme" },
      { yes: true, text: "Inventory Control|Monitoring" },
      { yes: true, text: "Import|Export Inventory" },
      { yes: true, text: "OTP SMS included free" },
      { yes: true, text: "8AM-5PM Mon-Sat support help line" },
      { yes: true, text: "Free 2x AntiFake Encoder for packaging" },
      { yes: true, text: "Free 1x TIJ printer + Conveyor bench" },
    ],
  },
  {
    name: "Enterprise",
    tagline: "International Exported Products",
    quarterly: "200,000",
    yearly: "700,000",
    extraStamp: "$0.11/stamp if use more than 3,000,000 stamp/qtr",
    features: [
      { yes: true, text: "3,000,000 stamp/qtr" },
      { yes: true, text: "Products/Produce verification" },
      { yes: true, text: "Products/Produce traceability" },
      { yes: true, text: "Distribution monitoring" },
      { yes: true, text: "Self generate QRCODE on demand" },
      { yes: true, text: "Customer Referral System" },
      { yes: true, text: "Digital Wallet" },
      { yes: true, text: "Host on private domain" },
      { yes: true, text: "Detailed full channel Sale report" },
      { yes: true, text: "Commission Sharing Scheme" },
      { yes: true, text: "Inventory Control|Monitoring" },
      { yes: true, text: "Import|Export Inventory" },
      { yes: true, text: "OTP Worldwide SMS included free" },
      { yes: true, text: "8AM-5PM 7 days support help line" },
      { yes: true, text: "Free 8x AntiFake Encoder for packaging" },
      { yes: true, text: "Free 4x TIJ printer + Conveyor bench" },
    ],
  },
];

const faqLeft = [
  {
    q: "How do I download the app?",
    a: "Just use your phone camera or Zalo to scan any AntiFake QRCODE product, the QRCODE will automatically guide you to open AntiFake's app. If you simply confirm the authenticity and origin of the product, you do not need to register anything, except if you want to activate the reward, then you need to register a phone number.",
  },
  {
    q: "Which service package should I choose?",
    a: "If your need is just to confirm authenticity and trace the origin of the product with a usage quantity of less than 100,000 QRCODE stamps/quarter, choose Standard. For promotion rewards and distribution network management under 300,000 stamps/quarter, choose Professional. For the same needs above 3,000,000 stamps/quarter, choose Enterprise.",
  },
  {
    q: "What if I use more stamps than the service package I purchased?",
    a: "You only need to pay for the extra stamps according to the proposed service package, such as the Standard package which is $0.04/extra stamp.",
  },
];

const faqRight = [
  {
    q: "Does AntiFake print or use any anti-counterfeit stamps?",
    a: "Instead of pre-printing anti-counterfeit stamps, AntiFake allows users to directly print QRCODE on their products with the included printer system. You can add details on the date of release, expiration date, production batch, with the quantity of your choice.",
  },
  {
    q: "How can I start AntiFake?",
    a: "After being consulted and choosing the appropriate service package, AntiFake staff will come to your site to assist in assembling printers, scanners and guide you in using the packaging system, product export and distribution network monitoring.",
  },
  {
    q: "If I have my own system available, can I connect to AntiFake?",
    a: "AntiFake supports data connection via Excel CSV or SQL file. If you use the Professional or Enterprise package, you can directly access the database.",
  },
];

const testimonials = [
  {
    title: "Excellence!",
    text: "Great app, like I've never experienced before. Thank you to the team for your full support and for providing us with a great solution that meets our criteria.",
    author: "Dong, MotoCare",
  },
  {
    title: "Fantastic!",
    text: "Thank you AntiFake, for providing timely anti-counterfeiting technology with very reasonable and affordable security methods, saving a lot of time and resources in product management and distribution.",
    author: "Vui, Vui Pharmarcy",
  },
  {
    title: "Top of the line technology",
    text: "Compared to previous anti-counterfeiting services using stamps, AntiFake is filled with functions that never seemed possible. At the same time, bringing anti-counterfeiting methods to a new standard with latest technology and vision ahead of time.",
    author: "Hiền, Gạo Ông Cua",
  },
  {
    title: "You are a Pro!",
    text: "We tried to develop a platform like this before but AntiFake is by far much better with deep understanding of the problem surrounding the battle against fake products, hence their solution is more precise to eliminate the problem.",
    author: "Dong, Motocare",
  },
];

const funFacts = [
  { from: 2000, to: 2023, label: "Year Launched" },
  { from: 1000, to: 10000, suffix: "+", label: "Members" },
  { from: 0, to: 64, suffix: "+", label: "Agents" },
  { from: 0, to: 3, label: "Countries" },
];

function useTypedText(strings, { typeSpeed = 50, backDelay = 1500, deleteSpeed = 25 } = {}) {
  const [text, setText] = useState("");
  useEffect(() => {
    let stringIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      const current = strings[stringIndex];
      if (!deleting) {
        charIndex += 1;
        setText(current.slice(0, charIndex));
        if (charIndex === current.length) {
          deleting = true;
          timer = setTimeout(tick, backDelay);
          return;
        }
        timer = setTimeout(tick, typeSpeed);
      } else {
        charIndex -= 1;
        setText(current.slice(0, charIndex));
        if (charIndex === 0) {
          deleting = false;
          stringIndex = (stringIndex + 1) % strings.length;
        }
        timer = setTimeout(tick, deleteSpeed);
      }
    };

    timer = setTimeout(tick, typeSpeed);
    return () => clearTimeout(timer);
  }, [strings, typeSpeed, backDelay, deleteSpeed]);

  return text;
}

function useRotator(count, delay = 6000) {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (!pausedRef.current) setActive((i) => (i + 1) % count);
    }, delay);
    return () => clearInterval(id);
  }, [count, delay]);

  return { active, setActive, pause: () => (pausedRef.current = true), resume: () => (pausedRef.current = false) };
}

function CountUpStat({ from, to, suffix = "" }) {
  const ref = useRef(null);
  const [value, setValue] = useState(from);
  const startedRef = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !startedRef.current) {
          startedRef.current = true;
          const duration = 2000;
          const startTime = performance.now();
          const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            setValue(Math.round(from + (to - from) * progress));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [from, to]);

  return (
    <h3 ref={ref}>
      <span className="timer">{value}</span>
      {suffix}
    </h3>
  );
}

export default function AntifakePage() {
  const typed = useTypedText(typedStrings);
  const testi = useRotator(testimonials.length, 6000);
  const [activeTab, setActiveTab] = useState(interfaceTabs[0].id);
  const [yearly, setYearly] = useState(false);
  const [openFaq, setOpenFaq] = useState({ left: 0, right: null });

  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />

      <section aria-label="hero" style={{ backgroundImage: "url(/antifake/assets/img/bg/1.jpg)", backgroundPosition: "top", backgroundSize: "cover" }} className="text-light">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5">
              <div className="h1 text-light" style={{ fontSize: 42, lineHeight: "48px", textShadow: "2px 2px 6px purple" }}>
                Verify genuine products in a <span style={{ fontWeight: 400, color: "#fff" }}>&quot;tiktak&quot;</span>
              </div>
              <div className="text-light" style={{ fontSize: 40, lineHeight: "45px", minHeight: 90 }}>
                {typed}
                <span aria-hidden="true">|</span>
              </div>
              <div className="spacer-40" />
              <p className="lead pt-2">
                A new method using dynamic QRCODE technology, Cryptography, AI data analysis to pinpoint and detect
                counterfeit goods. Combined with intelligent packaging procedures, <b>AntiFake</b> is a robust
                deterrent to safeguard your brand, distribution network, and customers.
              </p>
              <div className="spacer-20" />
              <Link className="btn-custom px-4" href="#features" style={{ fontSize: 10 }}>Learn more</Link>{" "}
              <Link className="btn-border px-3" href="/antifake/contact" style={{ fontSize: 10 }}>Register</Link>
            </div>
            <div className="col-lg-6 offset-lg-1 text-center">
              <img src="/antifake/assets/img/misc/p1.png" className="img-fluid" alt="AntiFake product verification app" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" style={{ backgroundColor: "#f0f4fd" }}>
        <div className="container">
          <div className="text-center">
            <span className="p-title">Explore</span>
            <br />
            <h2>Top features</h2>
            <div className="small-border" />
          </div>

          <div className="row sequence">
            {features.map((f) => (
              <div className="col-lg-4 col-md-6 mb30 sq-item" key={f.title}>
                <div className="f-box f-icon-left f-icon-circle f-icon-shadow">
                  <i className={"fa " + f.icon + " bg-color text-light"} />
                  <div className="fb-text">
                    <h4>{f.title}</h4>
                    <p>{f.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="section-banner">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 d-none d-lg-block d-xl-block text-center">
              <img className="img-fluid" src="/antifake/assets/img/misc/5logo.png" alt="AntiFake interfaces" />
            </div>

            <div className="col-lg-5 offset-md-1">
              <span className="display-title">AntiFake</span>
              <br />
              <h3>Practical solution, with multiple interfaces for users</h3>
              <ul className="nav nav-pills mb-3" role="tablist">
                {interfaceTabs.map((t) => (
                  <li className="nav-item" key={t.id}>
                    <button
                      type="button"
                      className={"nav-link" + (activeTab === t.id ? " active" : "")}
                      onClick={() => setActiveTab(t.id)}
                    >
                      {t.label}
                    </button>
                  </li>
                ))}
              </ul>
              <div className="tab-content">
                {interfaceTabs.map((t) => (
                  <div key={t.id} className={"tab-pane fade" + (activeTab === t.id ? " show active" : "")}>
                    {activeTab === t.id && <p>{t.text}</p>}
                  </div>
                ))}
              </div>
              <div className="spacer-half" />
              <Link className="btn-custom px-4" href="#features" style={{ fontSize: 10 }}>Learn more</Link>{" "}
              <Link className="btn-border px-3" href="/antifake/contact" style={{ fontSize: 10 }}>Register</Link>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" style={{ backgroundColor: "#f0f4fd" }}>
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <span className="p-title">Choose your service package</span>
              <br />
              <h2>Price list</h2>
              <div className="small-border" />

              <div className="af-switch-set">
                <button type="button" className={!yearly ? "is-active" : ""} onClick={() => setYearly(false)}>Quarterly</button>
                <button
                  type="button"
                  className={"af-switch-track" + (yearly ? " is-yearly" : "")}
                  onClick={() => setYearly((v) => !v)}
                  aria-label="Toggle quarterly or yearly pricing"
                >
                  <span className="af-switch-thumb" />
                </button>
                <button type="button" className={yearly ? "is-active" : ""} onClick={() => setYearly(true)}>Yearly</button>
              </div>
              <div className="spacer-20" />
            </div>
          </div>

          <div className="row sequence">
            {plans.map((plan) => (
              <div className="col-lg-4 col-md-6 col-sm-12 sq-item" key={plan.name}>
                <div className="pricing-s1 mb30">
                  <div className="top">
                    <h2>{plan.name}</h2>
                    <p className="plan-tagline">{plan.tagline}</p>
                  </div>
                  <div className="mid text-light bg-color">
                    <p className="price">
                      <span className="currency">$</span>
                      <span>{yearly ? plan.yearly : plan.quarterly}</span>
                      <span>{yearly ? "/year" : "/qtr"}</span>
                    </p>
                    <p className="price">
                      <span className="currency">Extra stamp</span>
                      <span>{plan.extraStamp}</span>
                    </p>
                  </div>

                  <div className="bottom">
                    <ul>
                      {plan.features.map((f) => (
                        <li key={f.text}>
                          <i className={f.yes ? "fa fa-check" : "fa fa-times text-danger"} />
                          {f.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="action">
                    <Link href="/antifake/contact" className="btn-custom">Register</Link>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-lg-6 offset-lg-3 text-center">
              <small>Price is in AUD, exclude GST.</small>
            </div>
          </div>

          <div className="spacer-double" />

          <div className="row">
            <div className="col-md-12 text-center">
              <h2>Frequently Asked Questions</h2>
              <div className="small-border" />
            </div>

            <div className="col-md-6">
              <div className="accordion">
                {faqLeft.map((item, i) => (
                  <div className="card" key={item.q}>
                    <div className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <button
                          type="button"
                          className="d-block position-relative text-dark collapsible-link py-2 w-100 text-start"
                          style={{ background: "none", border: "none" }}
                          onClick={() => setOpenFaq((s) => ({ ...s, left: s.left === i ? null : i }))}
                        >
                          {item.q}
                        </button>
                      </h6>
                    </div>
                    {openFaq.left === i && (
                      <div className="card-body p-4">
                        <p className="m-0">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="col-md-6">
              <div className="accordion">
                {faqRight.map((item, i) => (
                  <div className="card" key={item.q}>
                    <div className="card-header bg-white shadow-sm border-0">
                      <h6 className="mb-0 font-weight-bold">
                        <button
                          type="button"
                          className="d-block position-relative text-dark collapsible-link py-2 w-100 text-start"
                          style={{ background: "none", border: "none" }}
                          onClick={() => setOpenFaq((s) => ({ ...s, right: s.right === i ? null : i }))}
                        >
                          {item.q}
                        </button>
                      </h6>
                    </div>
                    {openFaq.right === i && (
                      <div className="card-body p-4">
                        <p className="m-0">{item.a}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-testimonial">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="text-center">
                <span className="p-title">Latest</span>
                <br />
                <h2>Customer reviews</h2>
                <div className="small-border" />
              </div>

              <div onMouseEnter={testi.pause} onMouseLeave={testi.resume}>
                <div className="af-testi-track">
                  {testimonials.map((t, i) => (
                    <div className="af-testi-slide" key={t.author} style={{ display: i === testi.active ? "block" : "none" }}>
                      <div className="de_testi opt-2 review">
                        <blockquote>
                          <div className="p-rating">
                            <i className="fa fa-star checked" />
                            <i className="fa fa-star checked" />
                            <i className="fa fa-star checked" />
                            <i className="fa fa-star checked" />
                            <i className="fa fa-star" />
                          </div>
                          <h3>{t.title}</h3>
                          <p>{t.text}</p>
                          <div className="de_testi_by"><span>{t.author}</span></div>
                        </blockquote>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="af-testi-dots">
                  {testimonials.map((t, i) => (
                    <button
                      key={t.author}
                      type="button"
                      className={"af-testi-dot" + (i === testi.active ? " is-active" : "")}
                      aria-label={`Show review ${i + 1}`}
                      onClick={() => testi.setActive(i)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="section-fun-facts" className="pt60 pb60 text-light bg-color">
        <div className="container">
          <div className="row">
            {funFacts.map((f) => (
              <div className="col-lg-3 col-md-6" key={f.label}>
                <div className="de_count">
                  <CountUpStat from={f.from} to={f.to} suffix={f.suffix} />
                  <h5>{f.label}</h5>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
