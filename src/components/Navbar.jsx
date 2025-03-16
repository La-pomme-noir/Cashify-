import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Navbar = () => {
  useEffect(() => {
    // Función para alternar el submenú
    const toggleSubmenu = (event) => {
      event.preventDefault();
      const submenu = event.currentTarget.nextElementSibling;
      submenu.classList.toggle('activo');
    };

    // Función para cerrar el submenú al hacer clic fuera
    const closeSubmenuOnClickOutside = (event) => {
      const submenu = document.querySelector('.navegacion__submenu--contenido');
      const toggleLink = document.querySelector('.navegacion__submenu .navegacion__enlaces');

      if (submenu && toggleLink && !toggleLink.contains(event.target) && !submenu.contains(event.target)) {
        submenu.classList.remove('activo');
      }
    };

    // Seleccionamos el enlace del submenú y le añadimos el evento de click
    const submenuToggle = document.querySelector('.navegacion__submenu .navegacion__enlaces');
    if (submenuToggle) {
      submenuToggle.addEventListener('click', toggleSubmenu);
    }

    document.addEventListener('click', closeSubmenuOnClickOutside);

    // Cleanup: eliminar eventos cuando el componente se desmonta
    return () => {
      if (submenuToggle) {
        submenuToggle.removeEventListener('click', toggleSubmenu);
      }
      document.removeEventListener('click', closeSubmenuOnClickOutside);
    };
  }, []);

  return (
    <nav className="navegacion">
      <Link to="/" className="navegacion__enlaces navegacion__enlaces--activo">
        Inicio
      </Link>

      {/* Menú Noticias con Submenú */}
      <div className="navegacion__submenu">
        <a href="#" className="navegacion__enlaces">
          Noticias <i className="bi bi-arrow-down-short"></i>
        </a>
        <div className="navegacion__submenu--contenido">
          <Link to="/news">Todo</Link>
          <Link to="/news/articles">Artículos</Link>
          <Link to="/news/tips">Consejos</Link>
        </div>
      </div>

      <Link to="/qanda" className="navegacion__enlaces">
        Foro Financiero
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