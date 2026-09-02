import Link from "next/link";

const products = [
  {
    id: "ozlock",
    tag: "Residential",
    name: "OZLOCK",
    icon: "fa-house",
    text: "Self-hosted, encrypted smart lock for homeowners. Wi-Fi Direct primary, BLE offline unlock — no cloud dependency, no subscriptions.",
  },
  {
    id: "ozlodge",
    tag: "Hospitality",
    name: "OZLODGE",
    icon: "fa-hotel",
    text: "PMS-integrated self-check-in for hotels, motels and short-stays — kiosk, app and smart lock in one platform, at 10% OTA commission.",
  },
  {
    id: "ozpms",
    tag: "Enterprise",
    name: "OZPMS",
    icon: "fa-network-wired",
    text: "Property-management platform for 100,000+ properties — hierarchy management and a lawful, auditable credential lifecycle.",
  },
];

const steps = [
  { num: "1", title: "Install the lock", text: "OZLOCK or OZLODGE hardware fits standard doors — commercial-grade, fire-rated, no rewiring." },
  { num: "2", title: "Self-host the server", text: "Run ozlodgeserv or ozpms on your own infrastructure. Your guest data never leaves your control." },
  { num: "3", title: "Control via app", text: "Guests and staff unlock, check in and manage rooms through AURA or MAVEN — online or offline." },
];

const badges = [
  { icon: "fa-lock-alt", label: "AES-256-GCM Sealed Commands", note: "End-to-end encrypted, every message" },
  { icon: "fa-server", label: "Content-Blind Cloud Relay", note: "The server can't read your commands" },
  { icon: "fa-wifi-slash", label: "Offline BLE Unlock", note: "Works with no internet connection" },
  { icon: "fa-code-branch", label: "MIT + GPLv3 Open Source", note: "No vendor lock-in" },
];

const comparisonRows = [
  { label: "Cloud ownership", ozlodge: true, other: false },
  { label: "Data sovereignty", ozlodge: true, other: false },
  { label: "Offline operation", ozlodge: true, other: false },
  { label: "PMS integration", ozlodge: true, other: false },
  { label: "Subscription-free self-hosting", ozlodge: true, other: false },
];

export default function OzkiePage() {
  return (
    <>
      <section className="ozkie-hero">
        <img
          className="ozkie-hero__bg"
          src="/assets/img/others/hero-ihms-selfcheckin.png"
          alt="Hotel corridor with a smart lock and mobile check-in"
        />
        <div className="ozkie-hero__overlay" />
        <div className="ozkie-container">
          <div className="ozkie-hero__content">
            <span className="ozkie-eyebrow">The Sovereign Lock Platform</span>
            <h1>Your data. Your server. Your rules.</h1>
            <p>
              Decentralised self-check-in technology for hotels, motels and short-term rentals.
              OZKIE gives property owners complete control over their data, their guests and their
              future — no third-party cloud, no vendor lock-in, no compromises.
            </p>
            <div className="ozkie-hero__ctas">
              <Link href="/contact" className="ozkie-btn ozkie-btn--primary">
                Book a Demo<i className="far fa-arrow-right" />
              </Link>
              <Link href="#products" className="ozkie-btn ozkie-btn--outline">
                See the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ozkie-section">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">The Problem / The Solution</span>
            <h2>Hotels lose 15–25% to OTAs. We solve that — and two other problems too.</h2>
          </div>
          <div className="ozkie-split">
            <div className="ozkie-split-card ozkie-split-card--problem">
              <h3><i className="fal fa-exclamation-triangle" />The Problem</h3>
              <ul className="ozkie-split-list">
                <li><i className="fal fa-times-circle" />OTA commissions of 15–25% eat directly into margin.</li>
                <li><i className="fal fa-times-circle" />Front-desk staff costs keep rising, especially after-hours.</li>
                <li><i className="fal fa-times-circle" />Guest data sits on third-party cloud platforms you don&apos;t control.</li>
              </ul>
            </div>
            <div className="ozkie-split-card ozkie-split-card--solution">
              <h3><i className="fal fa-check-circle" />The Solution</h3>
              <ul className="ozkie-split-list">
                <li><i className="fal fa-check" />Automated self-check-in — kiosk, app and smart lock, no front desk required.</li>
                <li><i className="fal fa-check" />10% platform commission — less than half of typical OTA rates.</li>
                <li><i className="fal fa-check" />Self-hosted, content-blind relay — your server, your data, full audit trail.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="ozkie-section ozkie-section--alt">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Three Product Tiers</span>
            <h2>One platform, built for every property</h2>
          </div>
          <div className="ozkie-products">
            {products.map((p) => (
              <div key={p.id} className="ozkie-product-card">
                <div className="ozkie-product-card__icon"><i className={"fal " + p.icon} /></div>
                <span className="ozkie-tag">{p.tag}</span>
                <h3>{p.name}</h3>
                <p>{p.text}</p>
                <Link href={"/ozkie/" + p.id}>Learn More<i className="far fa-arrow-right" /></Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="ozkie-section">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">How It Works</span>
            <h2>Live in three steps</h2>
          </div>
          <div className="ozkie-steps">
            {steps.map((s) => (
              <div key={s.num} className="ozkie-step">
                <div className="ozkie-step__num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="trust" className="ozkie-section ozkie-section--alt">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Trust Signals</span>
            <h2>Built to commercial and compliance standards</h2>
          </div>
          <div className="ozkie-badges">
            {badges.map((b) => (
              <div key={b.label} className="ozkie-badge">
                <i className={"fal " + b.icon} />
                <strong>{b.label}</strong>
                <span>{b.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="compare" className="ozkie-section">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Comparison</span>
            <h2>OZLODGE vs. Tuya / TTLock</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="ozkie-compare">
              <thead>
                <tr>
                  <th></th>
                  <th className="ozkie-compare__win">OZLODGE</th>
                  <th>Tuya / TTLock</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td className="ozkie-compare__win">
                      <i className={row.ozlodge ? "far fa-check-circle" : "far fa-times-circle"} />
                    </td>
                    <td>
                      <i className={row.other ? "far fa-check-circle" : "far fa-times-circle"} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ozkie-section ozkie-section--alt">
        <div className="ozkie-container">
          <div className="ozkie-testimonial">
            <i className="fal fa-quote-left" />
            <blockquote>
              Customer stories are on the way — this space is reserved for verified feedback from
              hoteliers and property managers running OZKIE.
            </blockquote>
            <cite>eBizCo Australia</cite>
            <div>
              <span className="ozkie-testimonial-note">Placeholder — real testimonials coming soon</span>
            </div>
          </div>
        </div>
      </section>

      <section className="ozkie-section ozkie-section--dark ozkie-cta">
        <div className="ozkie-container">
          <h2>Start your free 60-day trial</h2>
          <p>No lock-in contracts. 10% commission. Leave anytime. See what a sovereign platform feels like.</p>
          <div className="ozkie-cta__ctas">
            <Link href="/contact" className="ozkie-btn ozkie-btn--primary">Start Free 60-Day Trial</Link>
            <Link href="/contact" className="ozkie-btn ozkie-btn--outline">Book a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
