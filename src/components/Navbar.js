import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa"; // Hamburger and close icons
import "../App.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo #007bff">Sanskaar Yogshala</div>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <a href="#hero" className="nav-link" onClick={toggleMenu}>
          Home
        </a>
        <a href="#teachers" className="nav-link" onClick={toggleMenu}>
          Teachers
        </a>
        <a href="#testimonials" className="nav-link" onClick={toggleMenu}>
          Testimonials
        </a>
        <a href="#schedule" className="nav-link" onClick={toggleMenu}>
          Schedule
        </a>
        <a href="#contact" className="nav-link" onClick={toggleMenu}>
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
