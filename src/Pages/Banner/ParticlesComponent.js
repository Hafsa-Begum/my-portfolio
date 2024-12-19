import React, { useCallback } from "react";
import { Particles } from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesComponent = () => {
  const particlesInit = useCallback(async (engine) => {
    // This loads the tsParticles instance and features
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        particles: {
          number: {
            value: 15,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          line_linked: {
            enable: false,
          },
          move: {
            enable: true, // Enable movement
            speed: 3, // Adjust speed
            direction: "none", // Movement in all directions
            random: true, // Randomize movement
            straight: false, // Disable straight movement
            out_mode: "out", // Particles reappear on the opposite edge
            attract: {
              enable: false, // Disable attraction between particles
            },
          },
          shape: {
            type: ["image", "circle"],
            image: [
              {
                src: "/react.png",
                height: 10,
                width: 13,
              },
              {
                src: "/js.png",
                height: 10,
                width: 10,
              },
              {
                src: "/mongodb.png",
                height: 10,
                width: 10,
              },
              {
                src: "/html.png",
                height: 10,
                width: 10,
              },
              {
                src: "/css.png",
                height: 10,
                width: 10,
              },
            ],
          },
          color: {
            value: "#000",
          },
          size: {
            value: 10,
            random: false,
            anim: {
              enable: true,
              speed: 10,
              size_min: 5,
              sync: false,
            },
          },
        },
        retina_detect: false,
      }}
      style={{
        backgroundImage: "url('https://wallpaperaccess.com/full/5651982.jpg')",
        backgroundColor: "#cccccc",
        height: "100vh",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        zIndex: "-1",
      }}
    />
    );
};


export default ParticlesComponent;
