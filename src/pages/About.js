import React from "react";
import "../styles/About.css";
import Image from "../assets/about.jpeg";

function About() {
  return (
    <section className="about-section">
      <h1 className="title">ABOUT US</h1>
      <div className="about">
        <div className="aboutLeft">
          <img src={Image} alt="" />
        </div>
        <div className="aboutRight">
          <p>
            At Pizza Joy, we're more than a pizza; we're a culinary journey
            celebrating the art of crafting exceptional pizzas. With a passion
            for flavor and dedication to quality, we've delighted our community
            since 2022. Our story began with a vision to elevate pizza-making
            into an art form, where each hand-tossed crust becomes a canvas for
            the freshest ingredients and inspired combinations. From crackling
            wood-fired ovens that add authenticity, to our inviting ambiance,
            every moment here pays tribute to our love for the perfect pie. Join
            us in savoring tradition with a twist as we redefine your pizza
            experience, one slice at a time.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
