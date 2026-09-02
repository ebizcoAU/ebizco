"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Products", href: "/ozkie#products" },
  { label: "How It Works", href: "/ozkie#how-it-works" },
  { label: "Technology", href: "/ozkie#trust" },
  { label: "For Hoteliers", href: "/ozkie/ozlodge" },
  { label: "Contact", href: "/contact" },
];

export default function OzkieHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="ozkie-header">
      <div className="ozkie-container ozkie-header__inner">
        <Link href="/ozkie" className="ozkie-logo" onClick={() => setOpen(false)}>
          OZKIE<span>Sovereign Lock Platform</span>
        </Link>
        <nav className={"ozkie-nav" + (open ? " is-open" : "")}>
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="ozkie-btn ozkie-btn--primary" onClick={() => setOpen(false)}>
            Book a Demo
          </Link>
        </nav>
        <button
          type="button"
          className="ozkie-nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setOpen((v) => !v)}
        >
          <i className={open ? "fal fa-times" : "fal fa-bars"} />
        </button>
      </div>
    </header>
  );
}
