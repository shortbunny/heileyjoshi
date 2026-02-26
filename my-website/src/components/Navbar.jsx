import React from "react";
import "../index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-inner">
        <a href="/" className="logo">
          heiley
        </a>

        <div className="nav-links">
          <a href="#projects">Work</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;