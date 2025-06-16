import React, { useState } from 'react';
import './Navbar.css'; // Importation des styles

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Gère l'état du menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Inverse l’état à chaque clic
  };

  return (
    <nav className="navbar">
      <div className="logo">MyBrand</div>

      <ul className={`nav-links ${isOpen ? 'active' : ''}`}>
        <li><a href="#">Accueil</a></li>
        <li><a href="#">Services</a></li>
        <li><a href="#">À propos</a></li>
        <li><a href="#">Contact</a></li>
      </ul>

      <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
