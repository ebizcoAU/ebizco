"use client";

import { useState } from "react";
import Link from "next/link";

const jobs = [
  {
    title: "Project Sale Manager",
    rate: "Hourly Rate — $60.00/hr",
    description: [
      "Search and update customer, partner and market information.",
      "Manage and support the preparation of documents, publications, items, etc. to serve projects.",
      "Ability to give clear and easy-to-understand customer consultation presentations.",
      "Analyze information and propose marketing plans.",
      "Update project related information.",
      "Report work weekly/monthly/quarterly.",
      "Support communication with customers and internally during project implementation and operation.",
      "Participate in supporting R&D activities.",
      "Participate in implementing projects with team members.",
      "Other tasks as assigned by direct manager/Director.",
    ],
    benefits: [
      "Job type: Full-time",
      "50% salary probation",
      "Equipped with modern laptops/external monitors specifically for design.",
      "Insurance: Worker's Comp, 10.5% Super.",
    ],
  },
  {
    title: "Graphic Designer (Illustrator)",
    rate: "Hourly Rate — $45.00/hr",
    description: [
      "Illustrate and design ideas that exceed expectations.",
      "Clear ideas and create prototypes to evaluate designs.",
      "College level or higher majors: Illustration, digital media, graphic design, architecture, studio art, multimedia...",
      "Good skills in illustrating and expressing ideas through sketches.",
      "Proficient in using the Adobe creative toolset — Photoshop, Illustrator, InDesign, Premiere Pro, After Effects.",
      "Knowledge of 3D is an advantage (Revit, Rhino, AutoCAD, 3D Studio MAX, SketchUp).",
      "Experience in building projects from concept through design and implementation/production.",
      "Good communication skills and effective work management.",
      "Be open to collaboration and feedback, and be able to defend the design choices made.",
    ],
    benefits: [
      "Job type: Full-time",
      "50% salary probation",
      "Equipped with modern laptops/external monitors specifically for design.",
      "Insurance: Worker's Comp, 10.5% Super.",
    ],
  },
  {
    title: "Sale Staff",
    rate: "Base salary $1,000/week + Commission",
    description: [
      "Good skills in illustrating and expressing ideas.",
      "Need to have good communication skills to communicate with customers and determine the other person's needs.",
      "Identify customers' real needs and propose appropriate services.",
      "Provide service-related information to customers.",
      "Basic experience in building relationships and connecting customers.",
      "Be open to collaboration and feedback.",
      "Must meet committed targets.",
    ],
    benefits: ["Job type: Full-time", "50% salary probation", "Insurance: Worker's Comp, 10.5% Super."],
  },
];

export default function AntifakeJobsPage() {
  const [openIndex, setOpenIndex] = useState(0);

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
                <h1>Job Opportunities</h1>
                <p>We are always looking for talents to join the Company</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section aria-label="section">
        <div className="container">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              <div className="expand-list">
                {jobs.map((job, i) => (
                  <div className="expand-custom" key={job.title}>
                    <button
                      type="button"
                      className="ec-header"
                      style={{ background: "none", border: "none", width: "100%", textAlign: "left" }}
                      onClick={() => setOpenIndex((cur) => (cur === i ? null : i))}
                      aria-expanded={openIndex === i}
                    >
                      <div className="c1">
                        <img src="/antifake/assets/img/misc/avatar-1.png" alt="" />
                      </div>
                      <div className="c2">
                        <h4>{job.title}</h4>
                        <p>{job.rate}</p>
                      </div>
                      <div className="c3">
                        <span className="toggle" />
                      </div>
                    </button>

                    {openIndex === i && (
                      <div className="details">
                        <div className="row">
                          <div className="col-md-6 mb-sm-30">
                            <div className="box-custom">
                              <h4>Job description</h4>
                              <ul className="list s1">
                                {job.description.map((line) => (
                                  <li key={line}>{line}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="col-md-6 mb-sm-30">
                            <div className="box-custom">
                              <h4>Salary and benefits</h4>
                              <ul className="list s1">
                                {job.benefits.map((line) => (
                                  <li key={line}>{line}</li>
                                ))}
                              </ul>
                            </div>
                          </div>

                          <div className="spacer-single" />

                          <div className="col-md-12">
                            <Link href="/antifake/contact" className="btn btn-custom">
                              Register
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
