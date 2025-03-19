import React, {useState}from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from './HamburgerMenu';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(AuthContext);
  const userName = user ? user.displayName || user.email.split('@')[0] : 'User';

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo header__logo--animacion"
          src="/images/logoCashify10.png"
          alt="Logo Cashify"
        />
      </Link>
      {user && (
        <div className="header__hamburger">
          <button className="hamburger__button" onClick={toggleMenu}>
            <span className="hamburger__icon"><i className="fa-solid fa-bars"></i></span>
          </button>
          {isMenuOpen && <HamburgerMenu userName={userName} toggleMenu={toggleMenu} />}
        </div>
      )}
    </header>
  );
};

export default Header;