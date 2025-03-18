import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // Estado para controlar el menú
  const isLoggedIn = true; // Simulamos que el usuario está logueado (puedes ajustarlo luego)
  const userName = "User"; // Nombre de usuario simulado

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo header__logo--animacion"
          src="/images/logoCashify10.png"
          alt="Logo Cashify"
        />
      </Link>
      {isLoggedIn && (
        <div className="header__hamburger">
          <button className="hamburger__button" onClick={toggleMenu}>
            <span className="hamburger__icon"><i class="fa-solid fa-bars"></i></span>
          </button>
          {isMenuOpen && <HamburgerMenu userName={userName} toggleMenu={toggleMenu} />}
        </div>
      )}
    </header>
  );
};

export default Header;