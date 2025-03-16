import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style-home.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="header__logo header__logo--animacion"
          src="/images/logoCashify10.png"
          alt="Logo Cashify"
        />
      </Link>
    </header>
  );
};

export default Header;