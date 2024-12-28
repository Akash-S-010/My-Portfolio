import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";

export default function Particle() {
  const [init, setInit] = useState(false);
  const [mainColor, setMainColor] = useState("#46c8f8"); // Default fallback color

  // Function to get the current CSS variable value
  const getMainColor = () => {
    const rootStyle = getComputedStyle(document.documentElement);
    return rootStyle.getPropertyValue("--main-color").trim();
  };

  useEffect(() => {
    // Set initial color
    setMainColor(getMainColor());

    // Initialize tsparticles
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });

    // Watch for theme changes (class changes on <html> or <body>)
    const observer = new MutationObserver(() => {
      setMainColor(getMainColor()); // Update the color dynamically
    });

    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    // Cleanup observer
    return () => observer.disconnect();
  }, []);

  const particlesLoaded = (container) => {
    console.log("Particles Loaded:", container);
  };

  return (
    <>
      {init && (
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          style={{
            zIndex: 1,
          }}
          options={{
            particles: {
              number: {
                value: 90,
                density: {
                  enable: true,
                  value_area: 900,
                },
              },
              color: {
                value: mainColor, // Use the resolved color here
              },
              shape: {
                type: "circle",
                stroke: {
                  width: 0,
                  color: "#000000",
                },
              },
              opacity: {
                value: 0.1,
                random: true,
              },
              size: {
                value: 5,
                random: true,
              },
              move: {
                enable: true,
                speed: 3,
                direction: "bottom",
                out_mode: "out",
              },
            },
            interactivity: {
              events: {
                onHover: {
                  enable: true,
                  mode: "bubble",
                },
                onClick: {
                  enable: true,
                  mode: "repulse",
                },
              },
              modes: {
                bubble: {
                  distance: 500,
                  size: 5,
                  duration: 0.3,
                  opacity: 0.9,
                  speed: 3,
                },
                repulse: {
                  distance: 150,
                  duration: 0.4,
                },
              },
            },
            detectRetina: true,
          }}
        />
      )}
    </>
  );
}
