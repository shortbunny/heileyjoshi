import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

function Navbar() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="navbar">
      <Link to="/" className="logo" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
        Heiley
      </Link>
      <div className="nav-links">
        <button onClick={() => scrollToSection("about")}>About</button>
        <button onClick={() => scrollToSection("projects")}>Work</button>
        <button onClick={() => scrollToSection("cta")}>Contact</button>
      </div>
    </nav>
  );
}

export default Navbar;