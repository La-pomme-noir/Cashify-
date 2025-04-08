import React from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar'; // O NavbarMySpace
import Footer from '../components/Footer';
import 'normalize.css';

import '../styles/Dashboard.css';

const DashboardConferences = () => {
  return (
    <>
      <Header />
      <Navbar />

      <div className="dashboard-container">
        <section className="dashboard__header">
          <h1>Bienvenido de nuevo </h1>
          <p>Explora tus beneficios y mantente al día con Cashify.</p>
        </section>

        <section className="dashboard__section">
          <h2> Últimas noticias</h2>
          {/* Aquí puedes mapear artículos desde backend */}
          <div className="dashboard__cards">
            <div className="card">Noticia 1</div>
            <div className="card">Noticia 2</div>
          </div>
        </section>

        <section className="dashboard__section">
          <h2>Videos recientes</h2>
          {/* Puedes insertar reproductores o thumbnails con enlaces */}
          <div className="dashboard__cards">
            <div className="card">Video 1</div>
            <div className="card">Video 2</div>
          </div>
        </section>

        <section className="dashboard__section">
          <h2> Próximas conferencias</h2>
          <ul className="dashboard__list">
            <li>10 Abril - Fintech & IA</li>
            <li>15 Abril - Ciberseguridad</li>
          </ul>
        </section>

        <section className="dashboard__section">
          <h2>🛡 Mi plan</h2>
          <p>Suscripción activa: <strong>Plan Zomp Premium</strong></p>
          <button className="btn btn__emerald">Ver detalles</button>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DashboardConferences;
