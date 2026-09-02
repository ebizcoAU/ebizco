"use client";

import { useState } from "react";
import Link from "next/link";

export default function AntifakeHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header id="antifake-header" className={"transparent scroll-light" + (open ? " menu-open" : "")}>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="de-flex sm-pt10">
              <div className="de-flex-col">
                <div id="logo">
                  <Link href="/antifake" onClick={() => setOpen(false)}>
                    <img alt="AntiFake" className="logo" src="/antifake/assets/img/minilogo-light.png" />
                    <img alt="AntiFake" className="logo-2" src="/antifake/assets/img/minilogo.png" />
                  </Link>
                </div>
              </div>
              <div className="de-flex-col header-col-mid">
                <ul id="mainmenu">
                  <li><Link href="/antifake" onClick={() => setOpen(false)}>Home<span></span></Link></li>
                  <li><Link href="/antifake#features" onClick={() => setOpen(false)}>Features<span></span></Link></li>
                  <li><Link href="/antifake#pricing" onClick={() => setOpen(false)}>Pricing<span></span></Link></li>
                  <li><Link href="/contact" onClick={() => setOpen(false)}>Contact +61 412783132<span></span></Link></li>
                </ul>
              </div>
              <div className="de-flex-col">
                <a className="btn-custom" href="https://demo.antifake.vn"><i className="fa fa-arrow-right" />Sign In</a>
                <span id="menu-btn" onClick={() => setOpen((v) => !v)} role="button" tabIndex={0} aria-label="Toggle navigation" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
