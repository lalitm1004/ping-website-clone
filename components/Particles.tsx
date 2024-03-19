"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the @tsparticles/slim package too.

export default function ParticleComponent() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    console.log(container);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      particles: {
        number: {
          value: 365,
          density: {
            enable: true,
            value_area: 5838
          }
        },
        color: {
          value: "#E7E8E9"
        },
        shape: {
          type: "triangle",
          stroke: {
            width: 0,
            color: "#000000"
          },
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        links: {
          enable: true,
          distance: 100,
          color: "#E7E8E9",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: undefined,
          random: false,
          straight: false,
          out_mode: null,
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        events: {
          onHover: {
            enable: true,
            mode: "grab"
          },
          onClick: {
            enable: true,
            mode: "push"
          }
        },
        modes: {
          "grab": {
            "distance": 100,
            links: {
              opacity: 1
            }
          },
          "push": {
            particles_nb: 4
          }
        }
      }
    }),
    [],
  );

  if (init) {
    return (
        <Particles
          id={"tsparticles"}
          particlesLoaded={particlesLoaded}
          options={options}
        />
    );
  }

  return <></>;
};