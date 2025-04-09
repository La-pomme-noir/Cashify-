import React from 'react';
import Header from '../components/Header';
import NavbarMySpace from '../components/NavbarMySpace';
import Footer from '../components/Footer';
import MySpaceSection from '../components/MySpaceSection';
import InvestmentSimulator from '../whatever/InvestmentSimulator';
import InvestmentSimulatorView from '../view/InvestmentSimulatorView';
import DebtSimulator from '../whatever/DebtSimulator';
import DebtSimulatorView from '../view/DebtSimulatorView';
import SavingsSimulator from '../whatever/SavingsSimulator';
import SavingsSimulatorView from '../view/SavingsSimulatorView';
import '../styles/style-myspace.css';

export const MySpace = () => {
  const investmentProps = InvestmentSimulator();
  const debtProps = DebtSimulator();
  const savingsProps = SavingsSimulator();

  return (
    <div>
      <Header />
      <NavbarMySpace />
      <MySpaceSection />
      <main className="contenedor">
      <nav id="navbar-finanzas" className="navbar px-3 mb-3 sticky-top navbar__finanzas">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <a className="nav-link active navbar__links" href="#inversion">
                Simulador Inversión
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__links" href="#deudas">
                Simulador Deudas
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link navbar__links" href="#ahorro">
                Simulador Ahorro
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
        <InvestmentSimulatorView {...investmentProps} />
        <DebtSimulatorView {...debtProps} />
        <SavingsSimulatorView {...savingsProps} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default MySpace;