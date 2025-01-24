import React from "react";
import TextSphere from "./Textsphere";

const About = () => {
  return (
    <div className="w-full h-screen bg-bg-color px-4 sm:px-0 items-center grid sm:grid-cols-1 sm:px-2 md:grid-cols-1 md:px-5 lg:grid-cols-2 lg:px-10 xl:grid-cols-2 xl:px-40 pt-10">
      <div className="left-about text-center lg:text-left max-w-full">
        <div className="content items-center gap-8 mb-8 lg:mb-16">
          <div className="heading">
            <p className="text-primary-color font-mono text-sm">
              01. WHO AM I
            </p>
            <h1 className="text-cream-white font-main text-4xl font-semibold mt-3">
              About Me
            </h1>
          </div>
          <div className="line mt-3 w-32 md:w-40 lg:w-60 h-1 rounded-xl bg-line-color mx-auto lg:mx-0"></div>
        </div>
        <div className="about-para text-cream-white font-medium text-sm md:text-base lg:text-xl">
          <p className="leading-6 md:leading-7">
            Hey, what's up? My name is Akash. I'm a passionate MERN Stack
            Developer, self-learner, and tech enthusiast with a growing
            expertise in building dynamic, responsive web applications and
            crafting seamless user experiences.
          </p>
          <p className="my-6 md:my-8 leading-6 md:leading-7">
            I'm deeply dedicated to self-improvement, constantly honing my
            skills through hard work and curiosity. My commitment to continuous
            learning drives me to explore new technologies, embrace challenges,
            and deliver impactful solutions with precision and determination.
          </p>
          <p className="font-libre text-xs md:text-sm mt-8 lg:mt-12 italic text-primary-color">
            "The only way to do great work is to love what you do."
          </p>
          <p className="text-xs md:text-sm font-normal mt-1 text-gray-300 ">
            ~ Steve Jobs
          </p>
        </div>
      </div>

      <div className="right-about cursor-grab">
        <TextSphere />
      </div>
    </div>
  );
};

export default About;
