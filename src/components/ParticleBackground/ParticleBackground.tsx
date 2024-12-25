import { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import type { Engine } from 'tsparticles-engine';

const ParticleBackground: React.FC = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fullScreen: {
          enable: true,
          zIndex: -1,
        },
        particles: {
          number: {
            value: 100,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#0fd1cb",
          },
          shape: {
            type: "circle",
          },
          opacity: {
            value: 1,
            random: false,
          },
          size: {
            value: 3,
            random: true,
          },
          move: {
            enable: true,
            speed: 1,
            direction: "none",
            random: false,
            straight: false,
            outModes: {
              default: "out",
            },
          },
          links: {
            enable: true,
            distance: 150,
            color: "#0fd1cb",
            opacity: 0.4,
            width: 1,
          },
        },
      }}
    />
  );
};

export default ParticleBackground;