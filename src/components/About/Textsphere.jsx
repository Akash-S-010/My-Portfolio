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
    const options = {
      radius: 260, // Sphere radius
      maxSpeed: "fast", // Speed options: slow, normal, fast
      initSpeed: "normal", // Initial speed
      direction: 135, // Rotation direction
      keep: true, // Keep rotating on mouse out
    };

    TagCloud(container, texts, options);

    return () => {
      const tagCloudElement = document.querySelector(".tagcloud");
      if (tagCloudElement) tagCloudElement.innerHTML = "";
    };
  }, []);

  return (
    <div className="text-sphere">
      <span className="tagcloud"></span>
    </div>
  );
};

export default TextSphere;
