import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__logo">
          <img src="/images/logoCashify10.png" alt="Logo Cashify" />
        </div>

        <div className="footer__secciones">
          <Link to="/" className="footer__enlaces">
            Inicio
          </Link>
          <Link to="/news" className="footer__enlaces">
            Noticias
          </Link>
          <Link to="/qanda" className="footer__enlaces">
            Foro Financiero
          </Link>
          <Link to="/myspace" className="footer__enlaces">
            Mi Espacio
          </Link>
          <Link to="/conferences" className="footer__enlaces">
            VideoConferencias
          </Link>
        </div>

        <div className="footer__parrafo">
          <p className="footer__paragraph">
            Copyright©2025 Cashify. Todos los Derechos Reservados
          </p>
        </div>

        <div className="footer__redes">
          <a className="footer__enlaces" href="#">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a className="footer__enlaces" href="#">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a className="footer__enlaces" href="#">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a className="footer__enlaces" href="#">
            <i className="fa-brands fa-youtube"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;