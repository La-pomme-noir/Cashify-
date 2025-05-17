import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth, db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

const HamburgerMenu = ({ userName, toggleMenu }) => {
  const navigate = useNavigate();
  const [userRole, setUserRole] = useState(null);
  const [isNewsDropdownOpen, setIsNewsDropdownOpen] = useState(false);
  const [isMySpaceDropdownOpen, setIsMySpaceDropdownOpen] = useState(false);
  const [isConferencesDropdownOpen, setIsConferencesDropdownOpen] = useState(false);
  const [isOradoresDropdownOpen, setIsOradoresDropdownOpen] = useState(false);

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

  const toggleMySpaceDropdown = () => {
    setIsMySpaceDropdownOpen(!isMySpaceDropdownOpen);
  };

  const toggleConferencesDropdown = () => {
    setIsConferencesDropdownOpen(!isConferencesDropdownOpen);
  };

  const toggleOradoresDropdown = () => {
    setIsOradoresDropdownOpen(!isOradoresDropdownOpen);
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
          </div> {/*Fin habmurguer__link news */}
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
          </div> {/*Fin hamburguer__dropdown-menu news */}
        </div> {/*Fin hamburguer__dropdown news*/}

        <Link to="/qanda" className="hamburger__link" onClick={toggleMenu}>
          Foro Financiero
        </Link>

        {/* Nuevo submenú para Mi Espacio */}
        <div className="hamburger__dropdown">
          <div className="hamburger__link" onClick={toggleMySpaceDropdown}>
            Mi Espacio
            <i
              className={`fa-solid ${
                isMySpaceDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'
              } dropdown-icon`}
            ></i>
          </div>
          <div
            className={`hamburger__dropdown-menu ${
              isMySpaceDropdownOpen ? 'show' : ''
            }`}
          >
            <Link to="/myspace" className="hamburger__link--dropdown hamburger__link" onClick={toggleMenu}>
              Simuladores
            </Link>
            <Link to="/planning" className="hamburger__link--dropdown hamburger__link" onClick={toggleMenu}>
              Planificación
            </Link>
          </div>
        </div>
        
        {/* Opción de VideoConferencias con submenú para administradores */}
        <div className="hamburger__dropdown">
          <div className="hamburger__link" onClick={toggleConferencesDropdown}>
            VideoConferencias
            <i
              className={`fa-solid ${
                isConferencesDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'
              } dropdown-icon`}
            ></i>
          </div> {/*Fin hamburguer__link conferences */}

          <div
            className={`hamburger__dropdown-menu ${
              isConferencesDropdownOpen ? 'show' : ''
            }`}
          >
            <Link to="/conferences" className="hamburger__link--dropdown hamburger__link" onClick={toggleMenu}>
              Ver VideoConferencias
            </Link>
            {userRole === 'administrador' && (
              <Link
                to="/dashboard-admin"
                className="hamburger__link--dropdown hamburger__link"
                onClick={toggleMenu}
              >
                Panel VideoConferencias
              </Link>
            )}
          </div> {/*Fin hamburguer__dropdown-menu conferences */}
        </div> {/*Fin hamburguer__dropdown conferences*/}

        {/* Opción de Oradores */}
        <div className="hamburger__dropdown">
          <div className="hamburger__link" onClick={toggleOradoresDropdown}>
            Oradores
            <i
              className={`fa-solid ${
                isOradoresDropdownOpen ? 'fa-chevron-up' : 'fa-chevron-down'
              } dropdown-icon`}
            ></i>
          </div> {/*Fin hamburguer__link conferences */}

          <div
            className={`hamburger__dropdown-menu ${
              isOradoresDropdownOpen ? 'show' : ''
            }`}
          >
            {/* <Link to="/viewOradores" className="hamburger__link--dropdown hamburger__link" onClick={toggleMenu}>
              Ver Oradores
            </Link> */}

            {userRole === 'orador' && (
              <Link
                to="/oradorhome"
                className="hamburger__link--dropdown hamburger__link"
                onClick={toggleMenu}
              >
                Panel Oradores
              </Link>
            )}
          </div> {/*Fin hamburguer__dropdown-menu oradores */}
        </div> {/*Fin hamburguer__dropdown oradores*/}

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