import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/style-conference.css";

const Conferences = () => {
  const navigate = useNavigate();

  return (
    <div className="conference-container">

      <section className="welcome-section">
        <h1>Sección de Videoconferencias</h1>
        <p>
          Explora nuestra plataforma de videoconferencias para profesionales en gestión financiera. Aprende de expertos del sector y mantente al día con las últimas tendencias.
        </p>
        <div className="btn-group">
          <button className="primary-btn">Acción principal</button>
          <button className="secondary-btn">Acción secundaria</button>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery">
          {[...Array(6)].map((_, i) => (
            <div className="gallery-item" key={i}></div>
          ))}
        </div>
      </section>

      <section className="info-banner">
        <h2>Únete a las Videoconferencias de Cashify</h2>
        <p>Aprende de expertos financieros y mejora tus habilidades en gestión financiera.</p>
        <button className="primary-btn">Regístrate ahora</button>
      </section>

      <section className="pricing-plan">
        <h2>Planes de precios</h2>
        <p>
          Elige el plan perfecto para ti. Aprende de forma inteligente, clara y constante, adaptándote con nosotros.
        </p>

        <div className="plan-toggle">
          <button>Mensual</button>
          <button>Anual</button>
        </div> 

        <div className="plans">

          <div className="plan">
            <h3>Plan Básico</h3>
            <p className="price">$20/mes</p>
            <ul>
              <li>✔ Acceso básico</li>
              <li>✔ 1 sesión semanal</li>
              <li>✔ Chat estándar</li>
            </ul>
            <button className="outline-btn" onClick={() => navigate("/compra/plan-basico")}>
                Comenzar
            </button>
          </div> {/* Fin plan basico */}

          <div className="plan popular">
            <h3>Plan Empresarial</h3>
            <p className="price">$29/mes</p>
            <ul>
              <li>✔ 3 sesiones semanales</li>
              <li>✔ Herramientas de chat avanzadas</li>
              <li>✔ Análisis de retroalimentación</li>
            </ul>
            <button className="filled-btn" onClick={() => navigate("/compra/plan-empresarial")}>
                Comenzar
            </button>
          </div> {/* Fin plan empresarial */}

          <div className="plan">
            <h3>Plan Corporativo</h3>
            <p className="price">$49/mes</p>
            <ul>
              <li>✔ Sesiones ilimitadas</li>
              <li>✔ Acceso completo para el equipo</li>
              <li>✔ Datos e insights</li>
            </ul>
            <button className="filled-btn" onClick={() => navigate("/compra/plan-corporativo")}>
                Comenzar
            </button>
          </div> {/*Fin plan corporativo */}

        </div> {/* Fin plans */}
      </section>
    </div>
  );
};

export default Conferences;
