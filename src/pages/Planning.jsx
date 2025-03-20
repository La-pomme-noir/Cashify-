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
        <PlanningView {...planningProps} />
      </main>
      <Footer />
    </div>
  );
};

export default Planning;