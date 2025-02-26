import React from "react";
import "./about.css";
import Navbarr from "./Navbarr";
import Footer from "./Footer";

function About() {
  return (
    <>
    <Navbarr/>
    <div className="about-us">
      <section className="about-header">
        <h1>About Us</h1>
      </section>
      <section className="about-story">
        <h2>Our Story</h2>
        <p>
          At <strong>Wejha</strong>, we believe that travel is
          more than just a journey—it's an experience that transforms, inspires,
          and connects us all. Founded with a passion for exploration and a
          commitment to personalized service, we set out to create a travel
          platform that offers freedom, flexibility, and unforgettable memories.
        </p>
        <p>
          Our story began with a simple idea: to provide travelers with unique,
          tailored experiences that go beyond typical package deals. Over the
          years, we’ve grown into a trusted partner for those seeking customized
          trips, exciting adventures, and new ways to explore the world.
        </p>
      </section>

      <section className="about-mission">
        <h2>Our Mission</h2>
        <p>
          Our mission is to redefine travel. We’re here to help you craft the
          trip of your dreams, whether you're looking to unwind on a peaceful
          beach, explore the bustling streets of a new city, or embark on an
          adventurous trek in the mountains.{" "}
          <strong>Wejha</strong> offers you the tools, resources,
          and support to plan and book a journey that's entirely your own.
        </p>
        <p>We aim to:</p>
        <ul>
          <li>
            Provide personalized travel experiences tailored to your preferences
            and budget.
          </li>
          <li>Offer expert advice and support every step of the way.</li>
          <li>
            Make travel planning as simple and enjoyable as the trip itself.
          </li>
        </ul>
      </section>

      <section className="about-difference">
        <h2>What Makes Us Different?</h2>
        <p>
          At <strong>Wejha</strong>, we don’t just plan trips—we
          craft personalized travel experiences that are as unique as you are.
          Here’s why our clients trust us:
        </p>
        <ol>
          <li>
            <strong>Personalized Itineraries:</strong> We believe that no two
            travelers are alike. Our team works with you to create a trip that
            suits your needs, whether you want a luxury getaway or an affordable
            adventure.
          </li>
          <li>
            <strong>Expert Knowledge:</strong> Our travel experts have firsthand
            experience in all the destinations we offer. We provide insider tips
            and suggestions to make your trip even more memorable.
          </li>
          <li>
            <strong>Seamless Travel Planning:</strong> We simplify the process
            for you—whether it's booking flights, accommodations, or activities.
            Our all-in-one platform makes trip planning easy, so you can focus
            on what truly matters: enjoying your adventure.
          </li>
          <li>
            <strong>Global Reach:</strong> From tropical escapes to cultural
            explorations, we provide travel options for destinations around the
            globe. Wherever you want to go, we have the connections and
            expertise to get you there.
          </li>
          <li>
            <strong>Customer-Centric Service:</strong> We put you at the heart
            of everything we do. Our customer support team is available around
            the clock to answer questions, offer advice, and ensure your trip
            goes smoothly.
          </li>
        </ol>
      </section>

      <section className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Adventure:</strong> We believe in the power of travel to
            open your mind and inspire personal growth.
          </li>
          <li>
            <strong>Integrity:</strong> We are transparent and honest in every
            interaction. Trust is the foundation of everything we do.
          </li>
          <li>
            <strong>Innovation:</strong> We strive to make travel planning easy,
            enjoyable, and accessible to everyone.
          </li>
          <li>
            <strong>Sustainability:</strong> We’re committed to promoting
            sustainable travel practices to protect the environment for future
            generations.
          </li>
        </ul>
      </section>

      <section className="about-join">
        <h2>Join Us on the Journey</h2>
        <p>
          Whether you're a seasoned traveler or someone planning your first
          adventure, <strong>Wejha</strong> is here to help you
          every step of the way. Let us turn your travel dreams into reality.
        </p>
        <p>
          Explore our <a href="/trips">Trips</a> and begin your next
          adventure with us!
        </p>
      </section>
    </div>
    <Footer />
    </>
  );
}

export default About;
