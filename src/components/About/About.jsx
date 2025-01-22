import React from "react";
import TextSphere from "./Textsphere";

const About = () => {
  return (
    <div className=" w-full about h-screen bg-bg-color flex gap-14 justify-center items-center px-40">
      <div className="left-about w-1/2">
        <div className="content flex items-center gap-8 mb-16">
          <div className="heading">
            <p className="text-primary-color font-mono ">01. WHO AM I</p>
            <h1 className="text-cream-white font-main text-4xl font-semibold mt-3">
              About Me
            </h1>
          </div>
          <div className="line w-60 h-1 rounded-xl bg-line-color"></div>
        </div>
        <div className="about-para text-cream-white font-medium text-xl">
          <p className=" leading-7">
            Hey, what's up? My name is Akash. I'm a passionate MERN Stack
            Developer, self-learner, and tech enthusiast with a growing
            expertise in building dynamic, responsive web applications and
            crafting seamless user experiences.
          </p>
          <p className="my-8 leading-7">
            I'm deeply dedicated to self-improvement, constantly honing my
            skills through hard work and curiosity. My commitment to continuous
            learning drives me to explore new technologies, embrace challenges,
            and deliver impactful solutions with precision and determination.
          </p>
          <p className="font-libre text-sm mt-12 italic text-primary-color">
            "The only way to do great work is to love what you do."
          </p>
          <p className="text-sm font-normal mt-1">~ Steve Jobs</p>
        </div>
      </div>
      <div className="right-about w-1/2">
      <TextSphere />
      </div>
    </div>
  );
};

export default About;
