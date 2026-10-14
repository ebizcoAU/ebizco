import Link from "next/link";

export const metadata = {
  title: "OZLODGE — Hospitality Self Check-In",
  description:
    "OZLODGE brings self-hosted, data-sovereign self-check-in to hotels, motels, short-stays, student housing and mining accommodation — deep PMS integration, no third-party cloud.",
  alternates: { canonical: "/ozkie/ozlodge" },
};

const features = [
  {
    icon: "fa-server",
    title: "Your Own On-Premises Server",
    text: "ozlodgeserv runs on your property's LAN and is the source of truth for room assignments, credentials and audit logs — not a vendor's cloud.",
  },
  {
    icon: "fa-mobile-alt",
    title: "Guest App, Kiosk or Front Desk",
    text: "Guests check in through the BANOI app, a lobby self-check-in kiosk, or the front desk running the MAOI PMS app — whichever fits your property.",
  },
  {
    icon: "fa-wifi-slash",
    title: "Works Through an Outage",
    text: "Front-desk check-in, room assignment and physical key programming all run over the local LAN, so a lost internet connection doesn't stop guests checking in.",
  },
  {
    icon: "fa-clipboard-check",
    title: "Deep PMS Integration",
    text: "Room roster sync via /pms/rooms keeps your existing property management system and OZLODGE in step, in both upsert and reconcile modes.",
  },
  {
    icon: "fa-lock-alt",
    title: "Sealed Guest Credentials",
    text: "Digital passports and PINs are encrypted end-to-end and never stored in plaintext on any server — including the cloud relay.",
  },
  {
    icon: "fa-code-branch",
    title: "MIT + GPLv3 + CERN-OHL-S",
    text: "Protocol and SDK under MIT, server/app/firmware under GPLv3, and hardware schematics under CERN-OHL-S v2 — no closed clones, no vendor lock-in.",
  },
];

const workflows = [
  { num: "1", title: "Book", text: "A guest books through your existing channels — OTA, direct booking, or walk-in — and the reservation lands in your PMS as usual." },
  { num: "2", title: "Check In", text: "Guests self-check-in via the BANOI app (geofenced to the property), a lobby kiosk, or the front desk — day or night, online or offline." },
  { num: "3", title: "Unlock", text: "At the door, BLE unlock is instant and works with no network connection at all — the lock verifies credentials locally." },
];

const comparisonRows = [
  { label: "Cloud owner", ozlodge: "Hotel / self-hosted", other: "Tuya (third-party)" },
  { label: "Credential storage", ozlodge: "Encrypted, never in cloud", other: "Plaintext, stored centrally" },
  { label: "Server visibility", ozlodge: "Content-blind relay only", other: "Reads every command" },
  { label: "Offline operation", ozlodge: "Yes — BLE + PIN keypad", other: "Requires active internet" },
  { label: "Data sovereignty", ozlodge: "Hotel retains custody", other: "Vendor retains control" },
  { label: "PMS integration", ozlodge: "Deep local sync", other: "Limited / proprietary" },
];

export default function OzlodgePage() {
  return (
    <>
      <section className="ozkie-hero ozkie-page-hero__photo">
        <img
          className="ozkie-hero__bg"
          src="/assets/img/others/hero-ihms-selfcheckin.png"
          alt="Hotel corridor with a smart lock and mobile check-in"
        />
        <div className="ozkie-hero__overlay" />
        <div className="ozkie-container">
          <div className="ozkie-hero__content">
            <span className="ozkie-eyebrow">OZKIE / Hospitality</span>
            <h1>The lock that checks itself in.</h1>
            <p>
              OZLODGE gives hotels, motels, short-stays, student housing and mining accommodation a
              fully automated self-check-in system — with complete data sovereignty. Your on-premises
              server stays the authority; the cloud is just a content-blind relay.
            </p>
            <div className="ozkie-hero__ctas">
              <Link href="/contact" className="ozkie-btn ozkie-btn--primary">
                Book a Demo<i className="far fa-arrow-right" />
              </Link>
              <Link href="/ozkie" className="ozkie-btn ozkie-btn--outline">
                Back to Sovereign Lock Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="ozkie-section">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Architecture</span>
            <h2>Built for the property, not the platform</h2>
            <p>
              Unlike white-label platforms where a third-party vendor controls every lock globally,
              OZLODGE puts control in the hands of the operator. Your on-premises server is the
              ultimate authority — the cloud relay is structurally incapable of reading or forging
              guest commands.
            </p>
          </div>
          <div className="ozkie-feature-grid">
            {features.map((f) => (
              <div key={f.title} className="ozkie-feature">
                <div className="ozkie-feature__icon"><i className={"fal " + f.icon} /></div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ozkie-section ozkie-section--alt">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">How It Works</span>
            <h2>From booking to unlock</h2>
          </div>
          <div className="ozkie-steps">
            {workflows.map((s) => (
              <div key={s.num} className="ozkie-step">
                <div className="ozkie-step__num">{s.num}</div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ozkie-section">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Comparison</span>
            <h2>OZLODGE vs. Tuya / TTLock white-label</h2>
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
                    <td className="ozkie-compare__win">{row.ozlodge}</td>
                    <td>{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ozkie-section ozkie-section--alt">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Pricing</span>
            <h2>Pay per door, not per platform</h2>
          </div>
          <div className="ozkie-price-grid">
            <div className="ozkie-tier">
              <span className="ozkie-tier__tag">Per Doorlock</span>
              <div className="ozkie-price__amount">$29</div>
              <div className="ozkie-price__unit">per month, per doorlock</div>
              <p className="ozkie-price__desc">Covers the lock software, credential management and support for that door.</p>
            </div>
            <div className="ozkie-tier">
              <span className="ozkie-tier__tag">OTA Referral</span>
              <div className="ozkie-price__amount">10%</div>
              <div className="ozkie-price__unit">on bookings referred through OZLODGE</div>
              <p className="ozkie-price__desc">Applies only to bookings made through the OZLODGE platform — not your existing OTA or direct bookings.</p>
            </div>
            <div className="ozkie-tier">
              <span className="ozkie-tier__tag">Property Server</span>
              <div className="ozkie-price__amount">$1,000</div>
              <div className="ozkie-price__unit">per year, per 50 doorlocks</div>
              <p className="ozkie-price__desc">Your on-premises ozlodgeserv license, licensed in blocks of 50 doors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ozkie-section">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Licensing</span>
            <h2>Open at every layer</h2>
          </div>
          <div className="ozkie-license-grid">
            <div className="ozkie-license"><strong>MIT</strong><span>Protocol &amp; client SDK</span></div>
            <div className="ozkie-license"><strong>GPLv3</strong><span>Server, bridge &amp; app</span></div>
            <div className="ozkie-license"><strong>CERN-OHL-S v2</strong><span>Hardware schematics</span></div>
            <div className="ozkie-license"><strong>CC-BY-SA 4.0</strong><span>Documentation</span></div>
          </div>
        </div>
      </section>

      <section className="ozkie-section ozkie-cta" style={{ background: "var(--ozkie-bg-alt)" }}>
        <div className="ozkie-container">
          <h2 style={{ color: "var(--ozkie-primary)" }}>10% commission. Free 60-day trial. No lock-in contracts.</h2>
          <p style={{ color: "var(--ozkie-text-soft)" }}>Less than half of typical OTA commission rates — and you can leave anytime.</p>
          <div className="ozkie-cta__ctas">
            <Link href="/contact" className="ozkie-btn ozkie-btn--primary">Start Free 60-Day Trial</Link>
            <Link href="/contact" className="ozkie-btn ozkie-btn--outline-dark">Book a Demo</Link>
          </div>
        </div>
      </section>
    </>
  );
}
