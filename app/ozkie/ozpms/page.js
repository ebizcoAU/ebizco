import Link from "next/link";

export const metadata = {
  title: "OZPMS — Enterprise Property Management Platform",
  description:
    "OZPMS is the enterprise tier of the Sovereign Edge platform — a property-manager-owned smart-lock platform for public housing, defence housing and large portfolios, built for lawful, auditable credential management at scale.",
  alternates: { canonical: "/ozkie/ozpms" },
};

const sectors = [
  { icon: "fa-building", name: "Public Housing", text: "State and territory housing authorities" },
  { icon: "fa-house-signal", name: "Defence Housing", text: "Military family accommodation" },
  { icon: "fa-key", name: "Private Property Management", text: "Large PM firms managing thousands of properties" },
  { icon: "fa-users", name: "Community Housing", text: "NGO-managed social housing" },
];

const features = [
  {
    icon: "fa-server",
    title: "You Own the Cloud",
    text: "OZPMS is a “mini Tuya” owned by the property management company itself — not a third-party vendor controlling every lock globally.",
  },
  {
    icon: "fa-lock-alt",
    title: "Sealed Credentials, Always",
    text: "Tenants hold their own key on their device; the PM cloud never sees plaintext credentials, only sealed envelopes.",
  },
  {
    icon: "fa-file-contract",
    title: "Lawful Credential Lifecycle",
    text: "Access is issued for the term of the lease and expires on its own — non-renewal, tribunal-ordered revocation and emergency access are all logged with a recorded order reference. There is no self-help lockout capability.",
  },
  {
    icon: "fa-clipboard-check",
    title: "Full Audit Trail",
    text: "Every door access — who, when, which door — is recorded on infrastructure the PM company owns and controls.",
  },
  {
    icon: "fa-wifi",
    title: "No Bridge, No Per-Door Hardware Sprawl",
    text: "Locks connect Wi-Fi direct to your cloud — no bridge hardware needed at every door, which matters at 10,000+ property scale.",
  },
  {
    icon: "fa-globe-asia",
    title: "Australian Data Jurisdiction",
    text: "No third-party cloud dependency and no offshore jurisdiction over your data — host on AWS/Azure Australian regions or fully on-premises.",
  },
];

const lifecycle = [
  { trigger: "Lease end reached", basis: "Credential expires on its own — access was granted for the lease term, nothing is seized" },
  { trigger: "Lease not renewed", basis: "No new credential is issued; nothing is taken away" },
  { trigger: "Tribunal order for possession", basis: "The order is the authority; OZPMS executes it and logs the order reference" },
  { trigger: "Tenant hands back / self-revokes", basis: "Tenant's own action" },
  { trigger: "Emergency access needed", basis: "Fire, police, medical and welfare-check access on statutory and duty-of-care grounds" },
  { trigger: "Contractor access", basis: "Time-bound credential issued with proper notice for scheduled maintenance" },
];

const comparisonRows = [
  { label: "Cloud owner", ozpms: "Property management company", other: "Tuya (third-party)" },
  { label: "Credentials stored on cloud", ozpms: "No — sealed envelopes only", other: "Yes — plaintext" },
  { label: "Revocation", ozpms: "Lock-side, lawfully triggered", other: "Cloud deletion" },
  { label: "Offline operation", ozpms: "Yes — BLE + PIN", other: "No — cloud required" },
  { label: "Data sovereignty", ozpms: "PM company owns its data", other: "Third-party owns it" },
  { label: "Open platform", ozpms: "Open protocol, standard hardware", other: "Proprietary, vendor-locked" },
];

export default function OzpmsPage() {
  return (
    <>
      <section className="ozkie-page-hero">
        <i className="fal fa-network-wired" aria-hidden="true" style={{ position: "absolute", right: "6%", top: "50%", transform: "translateY(-50%)", fontSize: 260, color: "rgba(255,255,255,0.06)" }} />
        <div className="ozkie-container">
          <div className="ozkie-page-hero__content">
            <span className="ozkie-eyebrow">OZKIE / Enterprise</span>
            <h1>10,000 doors. One server. Zero vendor lock-in.</h1>
            <p>
              OZPMS is the enterprise property-management tier of the Sovereign Edge platform, built
              for public housing, defence housing, private property management firms and large
              build-to-rent portfolios — the same sovereignty model as OZLOCK and OZLODGE, scaled to
              100,000+ properties.
            </p>
            <div className="ozkie-hero__ctas">
              <Link href="/contact" className="ozkie-btn ozkie-btn--primary">
                Talk to Us<i className="far fa-arrow-right" />
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
            <span className="ozkie-eyebrow">Who It&apos;s For</span>
            <h2>Built for institutional portfolios</h2>
          </div>
          <div className="ozkie-badges">
            {sectors.map((s) => (
              <div key={s.name} className="ozkie-badge">
                <i className={"fal " + s.icon} />
                <strong>{s.name}</strong>
                <span>{s.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="ozkie-section ozkie-section--alt">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Architecture</span>
            <h2>The property manager is the authority — not a vendor</h2>
            <p>
              Unlike Tuya/TTLock, where a third-party vendor controls every lock globally, OZPMS puts
              control in the hands of the property manager — the party with the legitimate legal
              relationship to the tenant.
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

      <section className="ozkie-section">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Access Lifecycle</span>
            <h2>Lawful by design</h2>
            <p>
              Access that lapses by default is safer than access that persists until someone
              remembers to remove it. OZPMS has no &quot;lockout&quot; control — every change of access is
              tied to a lawful trigger, and the audit trail records why.
            </p>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="ozkie-compare">
              <thead>
                <tr>
                  <th style={{ textAlign: "left" }}>Trigger</th>
                  <th style={{ textAlign: "left" }}>What Happens</th>
                </tr>
              </thead>
              <tbody>
                {lifecycle.map((row) => (
                  <tr key={row.trigger}>
                    <td style={{ textAlign: "left", fontWeight: 600, color: "var(--ozkie-primary)" }}>{row.trigger}</td>
                    <td style={{ textAlign: "left" }}>{row.basis}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="ozkie-note">
            This section describes a product design position, not legal advice. Tenancy law is
            state-based in Australia — qualified legal review should be obtained before deployment
            with any housing authority.
          </p>
        </div>
      </section>

      <section className="ozkie-section ozkie-section--alt">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Comparison</span>
            <h2>OZPMS vs. Tuya / TTLock white-label</h2>
          </div>
          <div style={{ overflowX: "auto" }}>
            <table className="ozkie-compare">
              <thead>
                <tr>
                  <th></th>
                  <th className="ozkie-compare__win">OZPMS</th>
                  <th>Tuya / TTLock</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <td>{row.label}</td>
                    <td className="ozkie-compare__win">{row.ozpms}</td>
                    <td>{row.other}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="ozkie-section">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Pricing</span>
            <h2>Priced for portfolio scale</h2>
          </div>
          <div className="ozkie-price-grid">
            <div className="ozkie-tier">
              <span className="ozkie-tier__tag">Per Doorlock</span>
              <div className="ozkie-price__amount">$29</div>
              <div className="ozkie-price__unit">per month, per doorlock</div>
              <p className="ozkie-price__desc">Covers the lock software, credential lifecycle management and support for that door.</p>
            </div>
            <div className="ozkie-tier">
              <span className="ozkie-tier__tag">Portfolio Server</span>
              <div className="ozkie-price__amount">$2,000</div>
              <div className="ozkie-price__unit">per year, per 100 doorlocks</div>
              <p className="ozkie-price__desc">Your organisation&apos;s OZPMS cloud license, licensed in blocks of 100 doors.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="ozkie-section ozkie-section--alt">
        <div className="ozkie-container">
          <div className="ozkie-title-area">
            <span className="ozkie-eyebrow">Compliance</span>
            <h2>Australian jurisdiction, auditable by design</h2>
          </div>
          <div className="ozkie-feature-grid">
            <div className="ozkie-feature">
              <div className="ozkie-feature__icon"><i className="fal fa-globe-asia" /></div>
              <div>
                <h3>No Third-Party Cloud Dependency</h3>
                <p>Your organisation hosts its own relay — on-premises or in an Australian AWS/Azure region.</p>
              </div>
            </div>
            <div className="ozkie-feature">
              <div className="ozkie-feature__icon"><i className="fal fa-balance-scale" /></div>
              <div>
                <h3>Auditable, Open-Source Firmware</h3>
                <p>Independently buildable and verifiable — no closed, proprietary black box.</p>
              </div>
            </div>
          </div>
          <p className="ozkie-note">
            For deployments with a hard non-PRC-silicon requirement, a defence-tier hardware option
            using non-Chinese silicon is available on request — talk to us about your specific
            compliance requirements.
          </p>
        </div>
      </section>

      <section className="ozkie-section ozkie-section--dark ozkie-cta">
        <div className="ozkie-container">
          <h2>Talk to us about your portfolio</h2>
          <p>From a pilot of a few hundred properties to a state-wide rollout — let&apos;s discuss what OZPMS looks like at your scale.</p>
          <div className="ozkie-cta__ctas">
            <Link href="/contact" className="ozkie-btn ozkie-btn--primary">Talk to Us</Link>
            <Link href="/ozkie/ozlodge" className="ozkie-btn ozkie-btn--outline">See OZLODGE for Hospitality</Link>
          </div>
        </div>
      </section>
    </>
  );
}
