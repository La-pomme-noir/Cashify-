import React from 'react';
import Header from '../components/Header';
import NavbarMySpace from '../components/NavbarMySpace';
import PlanningSection from '../components/PlanningSection';
import Footer from '../components/Footer';
import PlanningLogic from '../whatever/PlanningLogic';
import PlanningView from '../view/PlanningView';
import '../styles/style-planning.css';

const Planning = () => {
  const planningProps = PlanningLogic();

  return (
    <div>
      <Header />
      <NavbarMySpace />
      <PlanningSection />
      <main className="contenedor">
      <nav id="navbar-finanzas" className="navbar px-3 mb-3 sticky-top navbar__finanzas">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active navbar__links" href="#planificacion">
                Planificación
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__links" href="#movimiento">
                Movimiento
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__links" href="#notas">
                Notas
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
        <PlanningView {...planningProps} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Planning;