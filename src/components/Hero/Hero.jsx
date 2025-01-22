import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import resume from "../../assets/AkashS.pdf";
import "./Hero.css";
import Typewriter from "typewriter-effect";

const Hero = () => {
  return (
    <div className="hero w-full h-screen bg-bg-color text-cream-white flex flex-col justify-center items-center relative">
      <div className="main-content text-center">
        <p className="text-lg text-primary-color font-mono">Hi! my name is</p>
        <h1 className="text-8xl font-bold font-main my-8">AKASH S</h1>
        <p className="text-2xl mt-4 font-sans">
      I am a{" "}
      <span className="text-primary-color font-semibold inline-block">
        <Typewriter
          options={{
            strings: ["MERN Stack Developer.","Frontend Developer.", "Backend Developer."],
            autoStart: true,
            loop: true,
            delay: 50, // Typing speed
            deleteSpeed: 40, // Speed of deletion
            cursor: "|", // Custom cursor
          }}
        />
      </span>
    </p>
      </div>

      <div className="bottom-div w-full flex justify-between px-12 absolute bottom-8">
        <div className="resume">
          <a href={resume} target="_blank" rel="noopener noreferrer" className="underline-anime text-2xl font-main hover:text-primary-color transition">
            Resume
          </a>
        </div>

        <div className="social-icons flex space-x-4">
          <a href="https://github.com/Akash-S-010">
            <FaGithub className="text-2xl cursor-pointer hover:text-tertiary-color transition hover:text-primary-color" />
          </a>
          <a href="https://www.linkedin.com/in/akash-s-mahe/">
            <FaLinkedin className="text-2xl cursor-pointer hover:text-tertiary-color transition hover:text-primary-color" />
          </a>
          <a href="https://www.instagram.com/akash.s.in/">
            <FiInstagram className="text-2xl cursor-pointer hover:text-tertiary-color transition hover:text-primary-color" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
