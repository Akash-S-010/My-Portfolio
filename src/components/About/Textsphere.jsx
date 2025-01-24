import React, { useEffect } from "react";
import TagCloud from 'TagCloud';
import "./Textsphere.css";

const TextSphere = () => {
  useEffect(() => {
    const container = ".tagcloud";
    const texts = [
      "HTML",
      "CSS",
      "JavaScript",
      "Tailwind CSS",
      "Bootstrap",
      "React.js",
      "Redux",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
      "API",
      "Postman",
      "VS Code",
      "Firebase",
    ];

    // Determine the radius based on screen size
    const radius = window.innerWidth <= 550 ? 190 : 260;

    const options = {
      radius, // Dynamically set radius
      maxSpeed: "fast", // Speed options: slow, normal, fast
      initSpeed: "normal", // Initial speed
      direction: 135, // Rotation direction
      keep: true, // Keep rotating on mouse out
    };

    TagCloud(container, texts, options);

    return () => {
      const tagCloudElement = document.querySelector(".tagcloud");
      if (tagCloudElement) tagCloudElement.innerHTML = "";
      window.innerWidth <= 550 ? tagCloudElement.style.fontSize = "10px" : tagCloudElement.style.fontSize = "17px";
   };
  }, []); // Empty dependency array ensures this effect runs only once after mount

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
