"use client";

import { useEffect, useRef, useState } from "react";

const team = [
  { name: "Vince Phan", role: "Chief Technology Officer", img: "/antifake/assets/img/team/vince.png" },
  { name: "Dong Nguyen", role: "Marketing Manager", img: "/antifake/assets/img/team/2.jpg" },
  { name: "Aysha Shepard", role: "Chief Executive Officer", img: "/antifake/assets/img/team/3.jpg" },
  { name: "Robyn Peel", role: "Director of Finance", img: "/antifake/assets/img/team/4.jpg" },
];

const funFacts = [
  { from: 2000, to: 2023, label: "Year Launched" },
  { from: 1000, to: 10000, suffix: "+", label: "Members" },
  { from: 0, to: 64, suffix: "+", label: "Agents" },
  { from: 0, to: 3, label: "Countries" },
];

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

export default function AntifakeAboutPage() {
  return (
    <div className="no-bottom no-top" id="content">
      <div id="top" />

      <section
        id="subheader"
        className="text-light"
        style={{ backgroundImage: "url(/antifake/assets/img/bg/1.jpg)", backgroundPosition: "bottom", backgroundSize: "cover" }}
      >
        <div className="center-y relative text-center">
          <div className="container">
            <div className="row">
              <div className="col text-center">
                <h1>About Us</h1>
                <p>
                  AntiFake is a joint venture company between eBizCo Australia Pty Ltd and Antifake Vietnam &amp; Co.
                  With a technology heritage dating back to 1991, eBizCo Australia Pty Ltd has built its position as
                  a prominent software development company in Australia across multiple IT sectors. Meanwhile,
                  Antifake Vietnam &amp; Co includes a group of entrepreneurs from many different business fields in
                  Vietnam, all of whom share a strong determination to fight counterfeit products and protect branded
                  Vietnamese made products.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-5">
              <img src="/antifake/assets/img/misc/p2.png" className="img-fluid" alt="AntiFake platform" />
            </div>
            <div className="col-md-6 offset-md-1">
              <h3>We start with passion...!</h3>
              <p>
                <b>AntiFake</b> was created with a single mission — to wage a war against counterfeit products and
                unclear origins in Vietnam. This effort leverages a powerful combination of local business savvy,
                consumer engagement, and Internet of Things (<b>IoT</b>) technology, dynamic QRCODE, cryptography
                encryption and advanced big data analysis technology, to quickly detect and localize where signs of
                counterfeit products arise.
              </p>
              <p>
                <b>AntiFake</b> is a multi-purpose deterrent tool, a sturdy iron dome of security, supporting
                Vietnamese manufacturers in the constant fight against counterfeit goods, helping them protect
                product brands and maintain customer&apos;s trust.
              </p>
              <p>
                <b>AntiFake</b> is always upgraded and developed with new functions, ready to protect precious
                Vietnamese branded products, nurturing a prosperous environment of trust and the value of
                authenticity.
              </p>
              <p>
                We look forward to accompanying you,
                <br />
                <b>AntiFake Team</b>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section" style={{ backgroundColor: "#f0f4fd" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-12 text-center">
              <h3>AntiFake Team</h3>
            </div>

            {team.map((member) => (
              <div className="col-lg-3 col-md-6 col-sm-6 mb30" key={member.name}>
                <div className="f-profile text-center">
                  <div className="fp-wrap f-invert">
                    <div className="fpw-overlay-btm" />
                    <img src={member.img} className="fp-image img-fluid" alt={member.name} />
                  </div>
                  <h4>{member.name}</h4>
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="section-fun-facts" className="pt60 pb60 text-dark">
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
