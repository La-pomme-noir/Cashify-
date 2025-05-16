import React from 'react';
import Header from '../components/Header';
import NavbarOrador from '../components/oradores/NavbarOrador';
import Footer from '../components/Footer';
import OradorSection from '../components/oradores/OradorSection';
import RulesOrador from '../components/oradores/RulesOrador';
import '../styles/style-orador.css';

const OradorHome = () => {
  return (
    <div>
      <Header />
      <NavbarOrador />
      <OradorSection />
      <main className="contenedor">
        <nav id="navbar-orador" className="navbar px-3 mb-3 sticky-top navbar__finanzas">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active navbar__links" href="#reglas">
                Reglas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__links" href="#foro">
                Aportar
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__links" href="#answer">
                Revisar
              </a>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-orador"
          data-bs-smooth-scroll="true"
          className="scrollspy-example bg-body-tertiary p-3 content__scrollspy shadow-cards"
          tabIndex="0"
        >
          <RulesOrador />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default OradorHome;