import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
  const [showSubmenu, setShowSubmenu] = useState(false);

  const toggleSubmenu = (e) => {
    e.preventDefault();
    setShowSubmenu(!showSubmenu);
  };

  return (
    <nav className="navegacion">
      <Link to="/" className="navegacion__enlaces navegacion__enlaces--activo">
        Inicio
      </Link>

      {/* Menú Noticias con submenú */}
      <div className="navegacion__submenu">
        <a href="#" className="navegacion__enlaces" onClick={toggleSubmenu}>
          Noticias <i className="bi bi-arrow-down-short"></i>
        </a>
        <div className={`navegacion__submenu--contenido ${showSubmenu ? 'show' : ''}`}>
          <Link to="/news">Todo</Link>
          <Link to="/news/articles">Artículos</Link>
          <Link to="/news/tips">Consejos</Link>
        </div>
      </div>

      <Link to="/qanda" className="navegacion__enlaces">
        Preguntas y Respuestas
      </Link>
      <Link to="/myspace" className="navegacion__enlaces">
        Mi Espacio
      </Link>
      <Link to="/conferences" className="navegacion__enlaces">
        VideoConferencias
      </Link>
      <Link to="/login" className="navegacion__enlaces navegacion__enlaces--botones">
        Iniciar Sesión
      </Link>
      <Link to="/register" className="navegacion__enlaces navegacion__enlaces--botones">
        Registrarse
      </Link>
    </nav>
  );
};

export default Navbar;