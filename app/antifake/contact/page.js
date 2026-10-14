const offices = [
  {
    name: "VIETNAM OFFICE",
    className: "padding30 text-light box-rounded",
    style: { backgroundColor: "#777" },
    address: "106/6 TX13, P. Thạnh Xuân, Q12, Ho Chi Minh City, Vietnam",
    phone: "+84 908 888 218",
    email: "admin@antifake.au",
    whatsapp: "https://wa.me/84908888218",
  },
  {
    name: "AUSTRALIA OFFICE",
    className: "padding30 bg-color text-light box-rounded",
    style: undefined,
    address: "Unit 1/9 Boag Rd, Morley WA 6062, Australia",
    phone: "+61 412 783 132",
    email: "admin@antifake.au",
    whatsapp: "https://wa.me/61412783132",
  },
];

export const metadata = {
  title: "Contact",
  description: "Contact AntiFake's Vietnam and Australia offices to book an online consultation.",
  alternates: { canonical: "/antifake/contact" },
};

export default function AntifakeContactPage() {
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
              <div className="col-md-12 text-center">
                <h1>Contact Us</h1>
                <p>Contact and book an online consultation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section">
        <div className="container">
          <div className="row">
            <h3>If you have any questions, please contact us</h3>
          </div>
          <div className="row">
            {offices.map((office) => (
              <div className="col-lg-6 col-md-6 mb30" key={office.name}>
                <div className={office.className} style={office.style}>
                  <h3>{office.name}</h3>
                  <address className="s1">
                    <span>
                      <i className="fa fa-map-marker fa-lg" />
                      {office.address}
                    </span>
                    <span>
                      <i className="fa fa-phone fa-lg" />
                      {office.phone}
                    </span>
                    <span>
                      <i className="fa fa-envelope-o fa-lg pb-4" />
                      <a href={`mailto:${office.email}`}>{office.email}</a>
                    </span>
                    <a aria-label="Chat on WhatsApp" href={office.whatsapp}>
                      <img
                        alt="Chat on WhatsApp"
                        src="/antifake/assets/img/misc/WhatsAppButtonGreenSmall.png"
                        width="200"
                      />
                    </a>
                  </address>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
