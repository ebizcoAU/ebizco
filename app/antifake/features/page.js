const roles = [
  {
    icon: "fa-cog",
    title: "Role of manufacturer/importer",
    tasks: [
      "Product identification & grouping",
      "Export QRCode according to production batch",
      "Packaging products",
      "Advertising and brand promotion",
      "Management of import and export goods",
      "Recruiting distributors",
      "Product quality warranty",
    ],
  },
  {
    icon: "fa-building",
    title: "Role of distributor",
    tasks: [
      "Confirmation from manufacturer",
      "Manage goods by channel",
      "Stimulate demand for distribution channels",
      "Supervise distribution products",
      "Recruitment Distribution staff",
      "Recruitment Agency",
      "Manage goods to agents",
    ],
  },
  {
    icon: "fa-user",
    title: "Role of distributor staff",
    tasks: [
      "Confirmation from distributors",
      "Recruitment Agency",
      "Supervise distribution products",
      "Stimulate demand for agents",
      "Support agents to display products",
      "Sales Order",
      "Monitor Agents",
    ],
  },
  {
    icon: "fa-anchor",
    title: "Role of Agent",
    tasks: [
      "Confirmation from distributors staff",
      "Receive goods and activate products",
      "Confirm products sold during the day",
      "Recruitment Agency Staff",
      "Accept Warranty and product quality assurance",
    ],
  },
  {
    icon: "fa-thumbs-up",
    title: "Role of Agent Staff",
    tasks: [
      "Confirmation from agent",
      "Confirm activation",
      "Customer consultant",
      "Advertising and brand promotion",
      "Interact with end consumers",
      "Introducing new customers",
    ],
  },
  {
    icon: "fa-users",
    title: "Role of customer",
    tasks: [
      "Product Verification",
      "Tracing product origins",
      "Activate and receive promotion awards",
      "Access to personal service data",
      "Introducing new customers",
      "Schedule a service booking",
    ],
  },
];

export const metadata = {
  title: "Features — AntiFake",
  description:
    "How AntiFake's dynamic QRCODE, cryptography and packaging platform powers every role across the manufacturing and distribution network.",
};

export default function AntifakeFeaturesPage() {
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
                <h1>&quot;Technology is just a tool&quot;</h1>
                <p>
                  The method of product authenticating and tracing product origin is now far different from
                  traditional verification methods. The fight against counterfeit products cannot rely entirely on
                  superficial measures such as stamping, or basic QR codes or barcodes. Real success in this fight is
                  based on the pillars of discipline, transparent information, clear operating procedures and fair
                  profit sharing rules.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <i className="icon-big fa fa-list-ol bg-color text-light" />
            </div>
            <div className="col-md-8">
              <h3>Operating procedures</h3>
              <p>
                AntiFake helps manufacturers improve packaging and distribution systems more scientifically based on
                Just-In-Time (<b>JIT</b>) manufacturing, producing &quot;the right product, in the right quantity, at
                the right place.&quot;
              </p>
              <p>
                Product authentication measures and distribution sanctions are incorporated into the on-demand
                system, helping to cut unnecessary costs and bring products to market.
              </p>
              <p>FAST — SAFE — SECURE — MOST ECONOMIC.</p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section" style={{ backgroundColor: "#f0f4fd" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12 text-center">
              <h3>Clear work description and responsibilities</h3>
              <p>
                AntiFake helps network members manage and operate their work more effectively, with described roles
                and responsibilities.
              </p>
            </div>
          </div>
          <div className="row align-items-center">
            {roles.map((role) => (
              <div className="col-md-4 pb-5" key={role.title}>
                <div className="padding30 box-rounded" style={{ backgroundColor: "#fff" }}>
                  <p>
                    <b>{role.title}</b> &nbsp;&nbsp;
                    <i className={"icon-small fa " + role.icon} />
                  </p>
                  <ul>
                    {role.tasks.map((task) => (
                      <li key={task}>{task}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section aria-label="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <i className="icon-big fa fa-star bg-color text-light" />
            </div>
            <div className="col-md-8">
              <h3>Encourage and develop the market</h3>
              <p>
                AntiFake provides free solutions for offering prizes, gifts, and activating rewards quickly and
                easily via e-wallet. Members participating in the network enjoy fair benefits based on their work
                efforts and participating roles.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section" style={{ backgroundColor: "#f0f4fd" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-8">
              <h3>Indexation to evaluate product effectiveness and market access</h3>
              <p>
                AntiFake helps network participants directly track and monitor the amount of activated goods, and
                how the goods are distributed in the area.
              </p>
            </div>
            <div className="col-md-4 text-center">
              <i className="icon-big fa fa-bar-chart bg-color text-light" />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-4 text-center">
              <i className="icon-big fa fa-random bg-color text-light" />
            </div>
            <div className="col-md-8">
              <h3>Rules and regulations are clear</h3>
              <p>AntiFake is designed with a special structure through sanctions and promotions such as:</p>
              <ul>
                <li>Limit offline distribution</li>
                <li>Protect &amp; maximize benefits for agents and distributors</li>
                <li>Prevent selling outside designated territory</li>
                <li>Transparent profit distribution</li>
                <li>Transparently commend and reward members</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section" style={{ backgroundColor: "#f0f4fd" }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-12">
              <h3>Smart Packaging 4.0</h3>
              <p>
                AntiFake supports manufacturers to print QRCode directly on products and package them according to
                the Just-In-Time (<b>JIT</b>) production process, while managing the quantity of imported and
                exported goods, inventory and warehouse.
              </p>
            </div>
          </div>
          <div className="spacer-single" />
          <div className="mt-2 pt-2 row align-items-center">
            <div className="col-md-4 text-center">
              <img src="/antifake/assets/img/misc/f1.png" width="360" className="img-fluid" alt="AntiFake Encoder" />
              <h6>AntiFake Encoder</h6>
            </div>
            <div className="col-md-4 text-center">
              <video width="360" height="240" controls>
                <source src="/antifake/assets/img/misc/tijprinter.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h6>QRCODE and label Printer</h6>
            </div>
            <div className="col-md-4 text-center">
              <img
                src="/antifake/assets/img/misc/labelapplicator.jpg"
                width="360"
                className="img-fluid"
                alt="Label Applicator"
              />
              <h6>Label Applicator</h6>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
