import Link from "next/link";

export default function OzkieFooter() {
  return (
    <footer className="ozkie-footer">
      <div className="ozkie-container">
        <div className="ozkie-footer__grid">
          <div>
            <div className="ozkie-logo" style={{ marginBottom: 16 }}>
              OZKIE<span>Sovereign Lock Platform</span>
            </div>
            <p style={{ maxWidth: 320 }}>
              Decentralised self-check-in technology for hotels, motels and short-term rentals. Your data. Your server. Your rules.
            </p>
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li><Link href="/ozkie/ozlock">OZLOCK — Residential</Link></li>
              <li><Link href="/ozkie/ozlodge">OZLODGE — Hospitality</Link></li>
              <li><Link href="/ozkie/ozpms">OZPMS — Enterprise</Link></li>
            </ul>
          </div>
          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/">eBizCo Australia</Link></li>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><Link href="/privacy">Privacy Statement</Link></li>
            </ul>
          </div>
        </div>
        <div className="ozkie-footer__bottom">
          <span>© {new Date().getFullYear()} eBizCo Australia Pty Ltd. OZKIE is part of the eBizCo product family.</span>
          <span>Self-hosted. Open source. No vendor lock-in.</span>
        </div>
      </div>
    </footer>
  );
}
