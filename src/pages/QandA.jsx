import React from 'react';
import Header from '../components/Header';
import NavbarForum from '../components/NavbarForum';
import Footer from '../components/Footer';
import ForumSection from '../components/ForumSection';
import RulesSection from '../components/RulesSection';
import ForumContent from '../components/ForumContent';
import QandASection from '../components/QandASection';
import '../styles/style-qanda.css';

const QandA = () => {
  return (
    <div>
      <Header />
      <NavbarForum />
      <ForumSection />
      <main className="contenedor">
        <nav id="navbar-finanzas" className="navbar px-3 mb-3 sticky-top navbar__finanzas">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active navbar__links" href="#reglas">
                Reglas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__links" href="#foro">
                Foro
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__links" href="#answer">
                Q&A
              </a>
            </li>
          </ul>
        </nav>
        <div
          data-bs-spy="scroll"
          data-bs-target="#navbar-finanzas"
          data-bs-smooth-scroll="true"
          className="scrollspy-example bg-body-tertiary p-3 content__scrollspy shadow-cards"
          tabIndex="0"
        >
          <RulesSection />
          <ForumContent />
          <QandASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default QandA;