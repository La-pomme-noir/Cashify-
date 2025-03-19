import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Navbar = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <nav className="navegacion">
      <Link to="/" className="navegacion__enlaces navegacion__enlaces--activo">
        Inicio
      </Link>
      <Link to="/news" className="navegacion__enlaces">
        Noticias
      </Link>
      <Link to="/qanda" className="navegacion__enlaces">
        Foro Financiero
      </Link>
      <Link to="/myspace" className="navegacion__enlaces">
        Mi Espacio
      </Link>
      <Link to="/conferences" className="navegacion__enlaces">
        VideoConferencias
      </Link>

      {/* Mostrar botones de Iniciar Sesión y Registrarse solo si NO hay usuario autenticado */}
      {!currentUser && (
        <>
          <Link to="/login" className="navegacion__enlaces navegacion__enlaces--botones">
            Iniciar Sesión
          </Link>
          <Link to="/register" className="navegacion__enlaces navegacion__enlaces--botones">
            Registrarse
          </Link>
        </>
      )}
    </nav>
  );
};

export default Navbar;