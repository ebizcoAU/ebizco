import Link from "next/link";

export const metadata = {
  title: "OZLOCK — Residential Smart Lock | OZKIE",
  description:
    "OZLOCK is a self-hosted, encrypted residential smart lock. Your door, your data, your rules — no cloud dependency, no subscriptions, no vendor lock-in.",
};

const features = [
  {
    icon: "fa-key",
    title: "Hardware-Anchored Key Model",
    text: "Each lock is designed around a unique private key held in the device itself — the architecture never requires that key to leave the hardware.",
  },
  {
    icon: "fa-lock-alt",
    title: "Sealed, End-to-End Encrypted Commands",
    text: "Every unlock, lock and credential command is AES-256-GCM encrypted on your phone before it ever leaves the device.",
  },
  {
    icon: "fa-server",
    title: "Content-Blind Cloud Relay",
    text: "The optional cloud relay only routes encrypted envelopes between your app and your lock — it cannot read or forge commands.",
  },
  {
    icon: "fa-wifi-slash",
    title: "Offline BLE Unlock",
    text: "Bluetooth unlock at the door works instantly, with or without an internet connection.",
  },
  {
    icon: "fa-house-signal",
    title: "Two Connectivity Tiers",
    text: "Choose Wi-Fi Direct for a simple, bridge-free setup, or Thread Mesh with a bridge for a more responsive whole-home network.",
  },
  {
    icon: "fa-code-branch",
    title: "Open Source, No Lock-In",
    text: "Protocol under MIT, firmware/server/app under GPLv3. If eBizCo ever disappeared, you could keep running your own relay.",
  },
];

const tiers = [
  {
    name: "OZLOCK Economy",
    tag: "Simple & Affordable",
    highlight: false,
    points: [
      "Wi-Fi Direct (2.4GHz) — connects straight to your home network",
      "No bridge hardware required",
      "Instant offline BLE unlock at the door",
      "Remote commands delivered on the lock's next check-in",
    ],
  },
  {
    name: "OZLOCK Premium",
    tag: "Whole-Home Mesh",
    highlight: true,
    points: [
      "Thread Mesh (802.15.4) via an included bridge",
      "Faster remote command delivery over the mesh network",
      "Instant offline BLE unlock at the door",
      "Scales cleanly across multiple doors on one property",
    ],
  },
];

const comparisonRows = [
  { label: "Cloud ownership", ozlock: true, other: false },
  { label: "Credentials ever stored in cloud", ozlock: false, other: true, invert: true },
  { label: "Server can read your commands", ozlock: false, other: true, invert: true },
  { label: "Works fully offline via BLE", ozlock: true, other: false },
  { label: "Open protocol, no platform lock-in", ozlock: true, other: false },
];

export default function OzlockPage() {
  return (
    <>
      <section className="ozkie-page-hero">
        <i className="fal fa-house" aria-hidden="true" style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", fontSize: 260, color: "rgba(255,255,255,0.06)" }} />
        <div className="ozkie-container">
          <div className="ozkie-page-hero__content">
            <span className="ozkie-eyebrow">OZKIE / Residential</span>
            <h1>Your door. Your data. Your rules.</h1>
            <p>
              OZLOCK is a self-hosted, encrypted smart lock for homeowners. No third-party cloud
              dependency, no recurring subscriptions — just a lock that answers to you.
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
            <h2>Built so no one else can hold your door hostage</h2>
            <p>
              Once you&apos;ve installed a lock, a vendor who controls the cloud behind it can normally
              change the rules whenever they like. OZLOCK is designed so that isn&apos;t possible —
              architecturally, not just contractually.
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
            <span className="ozkie-eyebrow">Two Configurations</span>
            <h2>Pick the tier that fits your home</h2>
          </div>
          <div className="ozkie-tier-grid">
            {tiers.map((t) => (
              <div key={t.name} className={"ozkie-tier" + (t.highlight ? " ozkie-tier--highlight" : "")}>
                <span className="ozkie-tier__tag">{t.tag}</span>
                <h3>{t.name}</h3>
                <ul>
                  {t.points.map((p) => (
                    <li key={p}><i className="far fa-check" />{p}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="ozkie-note">
            Battery life and exact response times vary by configuration and usage pattern and are
            still being measured on production hardware — we&apos;ll publish verified figures once
            testing is complete rather than guess in advance.
          </p>
        </div>
      </section>

      <section className="ozkie-section">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Comparison</span>
            <h2>OZLOCK vs. Tuya / TTLock white-label</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="ozkie-compare">
              <thead>
                <tr>
                  <th></th>
                  <th className="ozkie-compare__win">OZLOCK</th>
                  <th>Tuya / TTLock</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td className="ozkie-compare__win">
                      <i className={row.ozlock ? "far fa-check-circle" : "far fa-times-circle"} />
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
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Licensing</span>
            <h2>Open by design, not just by promise</h2>
          </div>
          <div className="ozkie-license-grid">
            <div className="ozkie-license"><strong>MIT</strong><span>Protocol specification</span></div>
            <div className="ozkie-license"><strong>GPLv3</strong><span>Firmware, server &amp; app</span></div>
            <div className="ozkie-license"><strong>Self-Hostable</strong><span>Run your own relay, anytime</span></div>
            <div className="ozkie-license"><strong>No Lock-In</strong><span>Leave whenever you want</span></div>
          </div>
        </div>
      </section>

      <section className="ozkie-section ozkie-section--dark ozkie-cta">
        <div className="ozkie-container">
          <h2>See OZLOCK on your own door</h2>
          <p>Book a demo and we&apos;ll walk you through the Economy and Premium configurations.</p>
          <div className="ozkie-cta__ctas">
            <Link href="/contact" className="ozkie-btn ozkie-btn--primary">Book a Demo</Link>
            <Link href="/ozkie/ozlodge" className="ozkie-btn ozkie-btn--outline">See OZLODGE for Hospitality</Link>
          </div>
        </div>
      </section>
    </>
  );
}
