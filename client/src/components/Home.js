import React from "react";
import { Carousel } from "react-bootstrap";
import "./Home.css";
import { Link } from "react-router-dom";
import { CheckCircleFill } from "react-bootstrap-icons";
import Navbarr from "./Navbarr";
import Footer from "./Footer";

function Home() {
  return (
    <>
    <Navbarr/>
    <div className="home">
      {/* carousel */}
      <div className="firstsec">
        <Carousel fade>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://gfxpartner.com/Frolic/images/slide01.jpg"
              alt="First slide"
            />
            <Carousel.Caption>
              <h1 className="carousel-title">
                Turn your dream trip into reality.
              </h1>
              <p className="carousel-description">
                Suggest a trip, join fellow travelers , and let agencies compete
                to offer you the best experience!
              </p>
              <Link to="/trips">
                <button className="carousel-cta">Explore Trips</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://gfxpartner.com/Frolic/images/slide02.jpg"
              alt="Second slide"
            />
            <Carousel.Caption>
              <h1 className="carousel-title">
                Turn your dream trip into reality.
              </h1>
              <p className="carousel-description">
                Suggest a trip, join fellow travelers , and let agencies compete
                to offer you the best experience!
              </p>
              <Link to="/trips">
                <button className="carousel-cta">Explore Trips</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://gfxpartner.com/Frolic/images/slide04.jpg"
              alt="Third slide"
            />
            <Carousel.Caption>
              <h1 className="carousel-title">
                Turn your dream trip into reality.
              </h1>
              <p className="carousel-description">
                Suggest a trip, join fellow travelers , and let agencies compete
                to offer you the best experience!
              </p>
              <Link to="/trips">
                <button className="carousel-cta">Explore Trips</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="http://gfxpartner.com/Frolic/images/slide03.jpg"
              alt="Fourth slide"
            />
            <Carousel.Caption>
              <h1 className="carousel-title">
                Turn your dream trip into reality.
              </h1>
              <p className="carousel-description">
                Suggest a trip, join fellow travelers , and let agencies compete
                to offer you the best experience!
              </p>
              <Link to="/trips">
                <button className="carousel-cta">Explore Trips</button>
              </Link>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
      {/* why choose us? */}
      <div className="whysec">
        <div className="why-header">
          <h1>Why Choose Us?</h1>
        </div>
        <div className="why-main">
          <div className="Why-card">
            <CheckCircleFill
              style={{
                marginBottom: "20px",
                fontSize: "40px",
                color: "#1d7151",
              }}
            />
            <h3>Personalized Travel</h3>
            <p>No fixed plans; you decide the trip!</p>
          </div>
          <div className="Why-card">
            <CheckCircleFill
              style={{
                marginBottom: "20px",
                fontSize: "40px",
                color: "#1d7151",
              }}
            />
            <h3>Competitive Pricing</h3>
            <p>Agencies offer the best deals just for you.</p>
          </div>
          <div className="Why-card">
            <CheckCircleFill
              style={{
                marginBottom: "20px",
                fontSize: "40px",
                color: "#1d7151",
              }}
            />
            <h3>
              Community <br />
              Driven
            </h3>
            <p>Connect with like-minded travelers.</p>
          </div>
          <div className="Why-card">
            <CheckCircleFill
              style={{
                marginBottom: "20px",
                fontSize: "40px",
                color: "#1d7151",
              }}
            />
            <h3>Easy & Transparent</h3>
            <p>No hidden fees, just exciting adventures!</p>
          </div>
        </div>
      </div>
      {/* how it works? */}
      <div className="howsec">
        <div className="howtitle"></div>
      </div>
    </div>
    <Footer />
    </>
  );
}

export default Home;
