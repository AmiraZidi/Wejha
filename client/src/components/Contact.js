import React from "react";
import "./contact.css";
import Navbarr from "./Navbarr";
import Footer from "./Footer";

function Contact() {
  return (
    <>
    <Navbarr/>
    <div className="contact">
      <h1>Write Us</h1>
      <div className="form">
        <div className="form-row">
          <input type="text" placeholder="Full Name" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="form-row">
          <input type="number" placeholder="Phone" />
          <input type="text" placeholder="Subject" />
        </div>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send Message</button>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Contact;
