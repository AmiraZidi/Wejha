import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Linkedin, Instagram } from "react-bootstrap-icons";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-links">
        <div className="footer-sec">
          <div className="link-title">
            <h2>About Us</h2>
          </div>
          <div className="footer-box">
            <p className="footer-p">
              Learn more about our mission and how we help travelers find the
              best trips.
            </p>
            <p className="footer-p">
              <Link to="/about" className="footer-link">
                Read More
              </Link>
            </p>
          </div>
        </div>

        <div className="footer-sec">
          <div className="link-title">
            <h2>Quick Links</h2>
          </div>
          <div className="footer-box">
            <p className="footer-p">
              <Link to="/" className="footer-link">
                Home
              </Link>
            </p>
            <p className="footer-p">
              <Link to="/trips" className="footer-link">
                Trips
              </Link>
            </p>
            <p className="footer-p">
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </p>
          </div>
        </div>

        <div className="footer-sec">
          <div className="link-title">
            <h2>Contact Us</h2>
          </div>
          <div className="footer-box">
            <p className="footer-p">
              <Link to="mailto:zidiamira290@gmail.com" className="footer-link">
                Email: zidiamira290@gmail.com
              </Link>
            </p>
            <p className="footer-p">
              <Link to="tel:+216-53-531-818" className="footer-link">
                Phone: +216 53 831 818
              </Link>
            </p>
          </div>
        </div>
      </div>

      <div className="footer-icons">
        <div className="footer-line"></div>
        <div className="footer-socials">
          <div>
            <Facebook size={30} color="#1d7151" />
          </div>
          <div>
            <Linkedin size={30} color="#1d7151" />
          </div>
          <div>
            <Instagram size={30} color="#1d7151" />
          </div>
        </div>
      </div>

      <div className="footer-copyright">
        <p>© 2025 Developed with ❤️ by Amira ZIDI</p>
      </div>
    </div>
  );
}

export default Footer;
