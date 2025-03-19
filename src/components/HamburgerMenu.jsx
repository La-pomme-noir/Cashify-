import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

const HamburgerMenu = ({ userName, toggleMenu }) => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);

  // Obtener el rol del usuario desde Firestore
  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const user = auth.currentUser;
        if (user) {
          const userDocRef = doc(db, 'users', user.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role);
          }
        }
      } catch (error) {
        console.error('Error al obtener el rol del usuario:', error.message);
      }
    };

    fetchUserRole();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      toggleMenu();
      navigate('/login');
    } catch (error) {
      console.error('Error al cerrar sesión:', error.message);
    }
  };

  const toggleNewsDropdown = () => {
    setIsNewsDropdownOpen(!isNewsDropdownOpen);
  };

  return (
    <div className="hamburger__menu">
      <button className="hamburger__close" onClick={toggleMenu}>
        <span className="hamburger__close-icon">
          <i className="fa-solid fa-xmark"></i>
        </span>
      </button>
      <div className="hamburger__greeting">Hola, {userName}</div>
      <nav className="hamburger__nav">
        <Link to="/" className="hamburger__link" onClick={toggleMenu}>
          Inicio
        </Link>

        {/* Opción de Noticias con submenú para administradores */}
        <div className="hamburger__dropdown">
          <div className="hamburger__link" onClick={toggleNewsDropdown}>
            Noticias
            <i
              className={`fa-solid ${
                isNewsDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'
              } dropdown-icon`}
            ></i>
          </div>
          <div
            className={`hamburger__dropdown-menu ${
              isNewsDropdownOpen ? 'show' : ''
            }`}
          >
            <Link to="/news" className="hamburger__link--dropdown hamburger__link" onClick={toggleMenu}>
              Ver Noticias
            </Link>
            {userRole === 'administrador' && (
              <Link
                to="/adminNews"
                className="hamburger__link--dropdown hamburger__link"
                onClick={toggleMenu}
              >
                Crear Noticia
              </Link>
            )}
          </div>
        </div>

        <Link to="/qanda" className="hamburger__link" onClick={toggleMenu}>
          Foro Financiero
        </Link>
        <Link to="/myspace" className="hamburger__link" onClick={toggleMenu}>
          Mi Espacio
        </Link>
        <Link to="/conferences" className="hamburger__link" onClick={toggleMenu}>
          VideoConferencias
        </Link>
        <button
          className="hamburger__link hamburger__logout"
          onClick={handleLogout}
        >
          Cerrar Sesión
        </button>
      </nav>
    </div>
  );
};

export default HamburgerMenu;