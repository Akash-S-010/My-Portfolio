import React from "react";
import "./Hero.css";
import Button from "./Buttons/Button";

function Hero() {
  return (
    <div className="hero">
      <div className="theme-container">
        <Button className="theme-button" />
      </div>
      <div className="hero-content">
        <p className="first-common-para">Hello! my name is</p>
        <h1 className="main-heading">AKASH S</h1>
        <p className="second-common-para">
          I am a <span className="job-role">MERN Stack Developer</span>
        </p>
      </div>
    </div>
  );
}

export default Hero;
