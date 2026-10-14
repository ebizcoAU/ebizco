import Link from "next/link";
import { PRODUCTS, externalLinkProps } from "@/lib/products";

export const metadata = {
  title: "ICUTV — Digital Signage, Pay As You Go | eBizCo",
  description:
    "ICUTV is a pay-per-play digital signage network — manage screens from any device, track every play in real time, and only pay for what actually airs.",
};

const usps = [
  "Deploy and run on any devices.",
  "Pay per play, per TV — from $0.005.",
  "Fast connect and distribute in a timely manner.",
  "Real-time viewer statistics.",
];

const platforms = [
  { icon: "/assets/img/icutv/icutv-os-windows.png", label: "Windows" },
  { icon: "/assets/img/icutv/icutv-os-macos.png", label: "macOS" },
  { icon: "/assets/img/icutv/icutv-os-raspberrypi.png", label: "Raspbian" },
  { icon: "/assets/img/icutv/icutv-os-ubuntu.png", label: "Ubuntu" },
  { icon: "/assets/img/icutv/icutv-os-browser.png", label: "Web" },
  { icon: "/assets/img/icutv/icutv-os-android.png", label: "Android" },
];

const apps = [
  {
    icon: "fal fa-sitemap",
    title: "ICUAdmin",
    text: "The online back-office that manages every screen's content, grouping, and cost-per-play from one map-based dashboard.",
  },
  {
    icon: "fal fa-mobile",
    title: "ICURemote",
    text: "A mobile app for uploading content and setting playback schedules on the go, wherever your screens are.",
  },
  {
    icon: "fal fa-tv",
    title: "ICUTV Player",
    text: "The lightweight player app installed on a set-top box or smart TV that actually plays your content.",
  },
];

const showcase = [
  {
    img: "/assets/img/icutv/icutv-screen-grouping.png",
    title: "Grouping TV",
    text: "Organize screens by location on a live map and set a cost-per-play for each group.",
  },
  {
    img: "/assets/img/icutv/icutv-monitor-screens.png",
    title: "Monitoring TV",
    text: "See every screen's online/offline status and location at a glance, in real time.",
  },
  {
    img: "/assets/img/icutv/icutv-ads-asset-workflow.png",
    title: "Loading TV",
    text: "Upload, review and approve ad creative through a built-in registration and moderation workflow.",
  },
  {
    img: "/assets/img/icutv/icutv-analytics-dashboard.png",
    title: "Statistic TV",
    text: "Track total plays, viewers and transactions across your whole network, month by month.",
  },
];

const network = [
  { img: "/assets/img/icutv/icutv-network-airport.png", label: "Airport TV" },
  { img: "/assets/img/icutv/icutv-network-shopping.png", label: "Shopping Centre TV" },
  { img: "/assets/img/icutv/icutv-network-bus.png", label: "Bus TV" },
  { img: "/assets/img/icutv/icutv-network-train.png", label: "Train TV" },
  { img: "/assets/img/icutv/icutv-network-taxi.png", label: "Taxi TV" },
  { img: "/assets/img/icutv/icutv-network-wearable.png", label: "Wearable TV" },
];

export default function IcutvPage() {
  return (
    <>
      <div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
        <div className="container z-index-common">
          <div className="breadcumb-content">
            <h1 className="breadcumb-title">ICUTV — Digital Signage, Pay As You Go</h1>
            <div className="breadcumb-menu-wrap">
              <ul className="breadcumb-menu">
                <li><Link href="/">Home</Link></li>
                <li>ICUTV</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
              <span className="sec-subtitle">Digital Signage — ICUTV</span>
              <h2 className="sec-title3 h1">A simple, pay-as-you-go TV advertising network.</h2>
              <p className="mb-4">
                Build your content once, push it to the cloud, and play it on any screen — from airport
                baggage claims to taxi headrests — without buying new hardware or locking into a broadcast contract.
              </p>
              <ul className="list-unstyled mb-4">
                {usps.map((item) => (
                  <li key={item} className="mb-2">
                    <i className="far fa-check-circle text-theme me-2" />
                    {item}
                  </li>
                ))}
              </ul>
              <a href="/contact" className="vs-btn">
                Start Free Trial<i className="far fa-arrow-right" />
              </a>{" "}
              <a href="#how-it-works" className="vs-btn style3">
                See How It Works<i className="far fa-long-arrow-right" />
              </a>
            </div>
            <div className="col-lg-6 text-center wow fadeInUp" data-wow-delay="0.2s">
              <img src="/assets/img/icutv/icutv-playanywhere.png" className="img-fluid" alt="Build once, save to the cloud, play on any device" />
            </div>
          </div>
        </div>
      </section>

      <section className="space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-xl-6">
              <span className="sec-subtitle">Runs Anywhere</span>
              <h3 className="sec-title3 h4">Deploy on the hardware you already have</h3>
            </div>
          </div>
          <div className="row text-center justify-content-center">
            {platforms.map((p) => (
              <div className="col-4 col-sm-3 col-md-2 mb-4" key={p.label}>
                <div className="icutv-platform-badge">
                  <img src={p.icon} alt={p.label} />
                </div>
                <div className="mt-2">{p.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-xl-6">
              <span className="sec-subtitle">How It Works</span>
              <h3 className="sec-title3 h1">Three apps, one content pipeline</h3>
            </div>
          </div>
          <div className="row">
            {apps.map((app) => (
              <div className="col-md-4" key={app.title}>
                <div className="feature-style2 text-center">
                  <div className="feature-icon icutv-feature-icon">
                    <i className={app.icon} />
                  </div>
                  <h4 className="feature-title h5">{app.title}</h4>
                  <p className="feature-text">{app.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-xl-7">
              <span className="sec-subtitle">See It In Action</span>
              <h3 className="sec-title3 h1">Real screens, real-time control</h3>
              <p className="mb-0">
                A live ICUTV network today: <strong>1,128,067+</strong> ads played and counting, all tracked
                automatically from the moment content goes live.
              </p>
            </div>
          </div>
          <div className="row">
            {showcase.map((item) => (
              <div className="col-md-6 mb-30" key={item.title}>
                <img src={item.img} className="img-fluid rounded" alt={item.title} />
                <h5 className="mt-3 mb-1">{item.title}</h5>
                <p className="mb-0">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="space-extra-bottom">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-3">
              <h3 className="sec-title3 h4">TV Network</h3>
            </div>
            <div className="col-lg-9">
              <p>
                Our TV network spans fixed and mobile screens: fixed points at bus stops, light rail stations,
                airports, hospitals and shopping centres, plus mobile screens riding in taxis and on wearable
                displays.
              </p>
            </div>
          </div>
          <div className="row">
            {network.map((n) => (
              <div className="col-lg-4 col-sm-6 mb-30" key={n.label}>
                <img src={n.img} className="img-fluid rounded" alt={n.label} />
                <h5 className="mt-2 text-center">{n.label}</h5>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-style1 z-index-common">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-xl-8">
              <h2 className="h1" style={{ color: "var(--white-color)" }}>Pay per play, per TV — from $0.005</h2>
              <p style={{ color: "var(--white-color)" }} className="mb-2">
                Use your own TV screens for free, or lease ours.
              </p>
              <p style={{ color: "var(--white-color)" }} className="mb-4">
                Get a free 3-month trial — start with a single screen, then add more whenever you&apos;re ready.
              </p>
              <a href="/contact" className="vs-btn" style={{ backgroundColor: "var(--white-color)", color: "var(--theme-color)" }}>
                Try It Now<i className="far fa-arrow-right" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="space-top space-extra-bottom">
        <div className="container">
          <div className="row justify-content-center text-center mb-4">
            <div className="col-xl-6">
              <span className="sec-subtitle">Explore More</span>
              <h3 className="sec-title3 h4">Other eBizCo products</h3>
            </div>
          </div>
          <div className="row justify-content-center text-center">
            <div className="col-md-4 mb-3">
              <Link href={PRODUCTS.ozlodge.href} className="vs-btn style3 w-100">{PRODUCTS.ozlodge.name} — {PRODUCTS.ozlodge.tagline}</Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link href={PRODUCTS.antifake.href} {...externalLinkProps(PRODUCTS.antifake)} className="vs-btn style3 w-100">{PRODUCTS.antifake.name} — {PRODUCTS.antifake.tagline}</Link>
            </div>
            <div className="col-md-4 mb-3">
              <Link href={PRODUCTS.projman.href} {...externalLinkProps(PRODUCTS.projman)} className="vs-btn style3 w-100">{PRODUCTS.projman.name} — {PRODUCTS.projman.tagline}</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
