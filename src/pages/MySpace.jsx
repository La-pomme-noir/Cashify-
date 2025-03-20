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
        <InvestmentSimulatorView {...investmentProps} />
        <DebtSimulatorView {...debtProps} />
        <SavingsSimulatorView {...savingsProps} />
      </main>
      <Footer />
    </div>
  );
};

export default MySpace;