import React from 'react';
import { Link } from 'react-router-dom';

const HamburgerMenu = ({ userName, toggleMenu }) => {
  return (
    <div className="hamburger__menu">
      <button className="hamburger__close" onClick={toggleMenu}>
      <span className="hamburger__close-icon"><i class="fa-solid fa-xmark"></i></span>
      </button>
      <div className="hamburger__greeting">Hola, {userName}</div>
      <nav className="hamburger__nav">
        <Link to="/" className="hamburger__link" onClick={toggleMenu}>
          Inicio
        </Link>
        <Link to="/news" className="hamburger__link" onClick={toggleMenu}>
          Noticias
        </Link>
        <Link to="/qanda" className="hamburger__link" onClick={toggleMenu}>
          Foro Financiero
        </Link>
        <Link to="/myspace" className="hamburger__link" onClick={toggleMenu}>
          Mi Espacio
        </Link>
        <Link to="/conferences" className="hamburger__link" onClick={toggleMenu}>
          VideoConferencias
        </Link>
        <Link to="/" className="hamburger__link hamburger__logout" onClick={toggleMenu}>
          Cerrar Sesión
        </Link>
      </nav>
    </div>
  );
};

export default HamburgerMenu;