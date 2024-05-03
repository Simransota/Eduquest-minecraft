import React, { useEffect } from "react";
import { Link } from 'react-router-dom';
// import particlesJS from "particles.js"; // Import particles.js library
import "./Sparkles.css"; // Import CSS file
import Sidebar from "./Sidebar.jsx"
import CreateTest from "./CreateTest";
function Sparkles() {
  useEffect(() => {
    const options = {
      particles: {
        number: {
          value: 99,
          density: {
            enable: true,
            value_area: 552.4033491425909
          }
        },
        color: {
          value: "#ffffff"
        },
        shape: {
          type: "circle",
          stroke: {
            width: 0,
            color: "#000000"
          },
          polygon: {
            nb_sides: 3
          },
          image: {
            src: "img/github.svg",
            width: 70,
            height: 100
          }
        },
        opacity: {
          value: 1,
          random: true,
          anim: {
            enable: false,
            speed: 1,
            opacity_min: 0.1,
            sync: false
          }
        },
        size: {
          value: 2,
          random: true,
          anim: {
            enable: false,
            speed: 40,
            size_min: 0.1,
            sync: false
          }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: "#ffffff",
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 1.5782952832645452,
          direction: "none",
          random: true,
          straight: false,
          out_mode: "out",
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: "canvas",
        events: {
          onhover: {
            enable: true,
            mode: "repulse"
          },
          onclick: {
            enable: true,
            mode: "repulse"
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 400,
            line_linked: {
              opacity: 1
            }
          },
          bubble: {
            distance: 400,
            size: 40,
            duration: 2,
            opacity: 8,
            speed: 3
          },
          repulse: {
            distance: 200,
            duration: 0.4
          },
          push: {
            particles_nb: 4
          },
          remove: {
            particles_nb: 2
          }
        }
      },
      retina_detect: false
    };

    // Initialize particles
    particlesJS("particle", options);
  }, []);

  return (
    <>
      <div id="particle" />
      <Sidebar/>
      <CreateTest/>
      <div ontouchstart="">
        <Link to='/quiz'>
        <button className="absolute top-[45em] left-24">
          <div className="button ">
            <a href="#" className="vt323-regular "><p>Start</p></a>
          </div>
        </button>
        </Link>
        </div>
    </>
  );
}

export default Sparkles;