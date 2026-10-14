"use client";

import { useState } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [australiaStatus, setAustraliaStatus] = useState("");
  const [vietnamStatus, setVietnamStatus] = useState("");

  function handleSubmit(setStatus) {
    return (e) => {
      e.preventDefault();
      setStatus("Thanks for reaching out — we'll get back to you shortly.");
      e.currentTarget.reset();
    };
  }

  return (
    <>
<div className="breadcumb-wrapper" data-bg-src="/assets/img/bg/breadcumb-bg.jpg">
  <div className="container z-index-common">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">Contact Us</h1>
      <div className="breadcumb-menu-wrap">
        <ul className="breadcumb-menu">
          <li><Link href="/">Home</Link></li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  </div>
</div>
<section className="space-top space-extra-bottom">
  <div className="container">
    <div className="nav contact-tab-menu" id="nav-contactTab" role="tablist">
      <button className="nav-link active" id="nav-AustraliaAddress-tab" data-bs-toggle="tab" data-bs-target="#nav-AustraliaAddress" type="button" role="tab" aria-controls="nav-AustraliaAddress" aria-selected="true">
        <span className="btn-img"><img src="/assets/img/contact/contact-1-1.jpg" alt="contact" /></span><span className="btn-title">Ebizco Australia Pty Ltd</span><br /> <span className="btn-text">29 Farrer Street, Braddon ACT 2612&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
      </button> 
      <button className="nav-link" id="nav-VietnamAddress-tab" data-bs-toggle="tab" data-bs-target="#nav-VietnamAddress" type="button" role="tab" aria-controls="nav-VietnamAddress" aria-selected="false">
        <span className="btn-img"><img src="/assets/img/contact/contact-1-2.jpg" alt="contact" /></span><span className="btn-title">eBizCo, Vietnam </span><br /> <span className="btn-text">103 Thạnh Xuân, P Thạnh Xuân, Quận 12, HCM City</span>
      </button> 
    </div>
    <div className="tab-content" id="nav-contactTabContent">
      <div className="tab-pane fade show active" id="nav-AustraliaAddress" role="tabpanel" aria-labelledby="nav-AustraliaAddress-tab">
        <div className="row">
          <div className="col-lg-6 mb-30">
            <div className="contact-box">
              <h3 className="contact-box__title h4">Australia Office Address</h3>
              <p className="contact-box__text" />
              <div className="contact-box__item">
                <div className="contact-box__icon"><i className="fal fa-phone-alt" /></div>
                <div className="media-body">
                  <h4 className="contact-box__label">Phone Number &amp; Email</h4>
                  <p className="contact-box__info"><a href="tel:+61 412783132">+(61) 412783132</a><a href="mailto:vince.phan@ebizco.com.au">vince.phan@ebizco.com.au</a></p>
                </div>
              </div>
              <div className="contact-box__item">
                <div className="contact-box__icon"><i className="far fa-map-marker-alt" /></div>
                <div className="media-body">
                  <h4 className="contact-box__label">Our Office Addresses</h4>
                  <p className="contact-box__info">Head office: 29 Farrer Street, Braddon ACT 2612<br />WA office: Unit 1/9 Boag Rd, Morley WA 6062</p>
                </div>
              </div>
              <div className="contact-box__item">
                <div className="contact-box__icon"><i className="far fa-clock" /></div>
                <div className="media-body">
                  <h4 className="contact-box__label">Official Work Time</h4>
                  <p className="contact-box__info">7:00am - 6:00pm ( Mon - Fri ) Sat, Sun &amp; Holiday Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="contact-box">
              <h3 className="contact-box__title h4">Leave a Message</h3>
              <p className="contact-box__text">We’re Ready To Help You</p>
              <form className="contact-box__form" onSubmit={handleSubmit(setAustraliaStatus)}>
                <div className="row gx-20">
                  <div className="col-md-6 form-group"><input type="text" name="name" id="name2" placeholder="Your Name" /> <i className="fal fa-user" /></div>
                  <div className="col-md-6 form-group"><input type="email" name="email" id="email2" placeholder="Email Address" /> <i className="fal fa-envelope" /></div>
                  <div className="col-12 form-group"><select name="subject" id="subject2">
                      <option value="OZLODGE">OZLODGE - Hotel Automation</option>
                      <option value="icuTV">icuTV - TV Ads</option>
                      <option value="AntiFake">AntiFake</option>
                      <option value="swDev">Software Development</option>
                    </select></div>
                  <div className="col-12 form-group"><textarea name="message" id="message2" placeholder="Type Your Message" defaultValue={""} /></div>
                  <div className="col-12"><button className="vs-btn">Submit Message<i className="far fa-arrow-right" /></button></div>
                </div>
              </form>
              <p className="form-messages mb-0 mt-3">{australiaStatus}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="tab-pane fade" id="nav-VietnamAddress" role="tabpanel" aria-labelledby="nav-VietnamAddress-tab">
        <div className="row">
          <div className="col-lg-6 mb-30">
            <div className="contact-box">
              <h3 className="contact-box__title h4">Vietname Office Address</h3>
              <p className="contact-box__text" />
              <div className="contact-box__item">
                <div className="contact-box__icon"><i className="fal fa-phone-alt" /></div>
                <div className="media-body">
                  <h4 className="contact-box__label">Phone Number &amp; Email</h4>
                  <p className="contact-box__info"><a href="tel:+86 0908999218">+(86) 908888218</a><a href="mailto:admin@antifake.vn">admin@antifake.vn</a></p>
                </div>
              </div>
              <div className="contact-box__item">
                <div className="contact-box__icon"><i className="far fa-map-marker-alt" /></div>
                <div className="media-body">
                  <h4 className="contact-box__label">Our Office Address</h4>
                  <p className="contact-box__info">103 Đường Thạnh Xuân, Phường Thạnh Xuân Quận 12</p>
                </div>
              </div>
              <div className="contact-box__item">
                <div className="contact-box__icon"><i className="far fa-clock" /></div>
                <div className="media-body">
                  <h4 className="contact-box__label">Giờ làm việc</h4>
                  <p className="contact-box__info">7:00am - 6:00pm ( Thứ Hai - Thứ Sáu ) </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 mb-30">
            <div className="contact-box">
              <h3 className="contact-box__title h4">Leave a Message</h3>
              <p className="contact-box__text">We’re Ready To Help You</p>
              <form className="contact-box__form" onSubmit={handleSubmit(setVietnamStatus)}>
                <div className="row gx-20">
                  <div className="col-md-6 form-group"><input type="text" name="name" id="name3" placeholder="Your Name" /> <i className="fal fa-user" /></div>
                  <div className="col-md-6 form-group"><input type="email" name="email" id="email3" placeholder="Email Address" /> <i className="fal fa-envelope" /></div>
                  <div className="col-12 form-group"><select name="subject" id="subject3" defaultValue="">
                      <option value="" disabled hidden>Select subject</option>
                      <option value="OZLODGE">OZLODGE - Hotel Automation</option>
                      <option value="icuTV">icuTV - TV Ads</option>
                      <option value="AntiFake">AntiFake</option>
                      <option value="swDev">Software Development</option>
                    </select></div>
                  <div className="col-12 form-group"><textarea name="message" id="message3" placeholder="Type Your Message" defaultValue={""} /></div>
                  <div className="col-12"><button className="vs-btn">Submit Message<i className="far fa-arrow-right" /></button></div>
                </div>
              </form>
              <p className="form-messages mb-0 mt-3">{vietnamStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
