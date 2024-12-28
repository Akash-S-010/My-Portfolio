import React from "react";
import "./Hero.css";
import Button from "./Buttons/Button";
import Particle from "./Particle";
function Hero() {
  return (
    
    <div className="hero">
      <Particle />
      <div className="theme-container">
        <Button className="theme-button" />
      </div>
      <div className="hero-content">
        <p className="first-common-para">Hello! my name is</p>
        <h1 className="main-heading">AKASH S</h1>
        <p className="second-common-para">
          I am a <span className="job-role"> &nbsp;&nbsp;MERN Stack Developer</span>
        </p>
      </div>
      <div className="hero-bottom">
        <a className="resume" href="#">Resume</a>
        <div className="social-links">
          <a href="https://github.com/Akash-S-010"><i className="fa-brands fa-github"></i></a>
          <a href="https://www.linkedin.com/in/akash-s-mahe/"><i className="fa-brands fa-linkedin"></i></a>
          <a href="https://www.instagram.com/akash.s.in/"><i className="fa-brands fa-instagram"></i></a>
        </div>
      </div>
    </div>
  );
}

export default Hero;
