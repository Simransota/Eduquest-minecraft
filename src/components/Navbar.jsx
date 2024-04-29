import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/Logo.png";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  const handleMouseDown = () => {
    setIsActive(true);
  };

  const handleMouseUp = () => {
    setIsActive(false);
  };

  return (
    <nav style={{ color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem' }}>
      <div style={{ flex: 1, textAlign: 'left' }} className='vt323-regular'>
        <a href="#" style={{ color: 'white', marginRight: '1rem' }}>Home</a>
        <a href="#" style={{ color: 'white', marginRight: '1rem' }}>How it works</a>
        <a href="#" style={{ color: 'white' }}>Features</a>
      </div>
      <div style={{ flex: 1, textAlign: 'center' , marginLeft:'5em'}}>
        <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
      </div>
      <div style={{ flex: 1, textAlign: 'right' }}>
        <Link to="/signup">
          <button
            style={{
              all: "unset",
              display: "inline-block",
              padding: "1em",
              color: "white",
              textTransform: "uppercase",
              fontFamily: "VT323, monospace",
              letterSpacing: "1.5px",
              fontWeight: "bold",
              cursor: "pointer",
              borderRadius: "1em",
              backgroundColor: "#58cc02",
              boxShadow: isActive ? "none" : "0 5px 0 #58a700",
              transform: isActive ? "translateY(5px)" : "none",
              transition: "transform 0.2s",
            }}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            className='vt323-regular'
          >
            Start
          </button>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;