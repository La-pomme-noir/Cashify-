import React from 'react';
import '../styles/style-home.css';

const AboutUs = () => {
  return (
    <div className="about-us">
      <h1 className="about-us__titulo titles-sections">Sobre Nosotros</h1>

      <div className="grid">
        <div className="about-us__cards shadow-cards">
          <img src="/images/mision.jpg" alt="Misión" />
          <h2 className="about-us__title">Misión</h2>
          <p>
            Proveer herramientas, consejos y recursos accesibles y prácticos que
            guíen a nuestra comunidad hacia una gestión financiera efectiva y
            sostenible, fomentando el aprendizaje y el crecimiento económico personal.
          </p>
        </div>

        <div className="about-us__cards shadow-cards">
          <img src="/images/vision.jpg" alt="Visión" />
          <h2 className="about-us__title">Visión</h2>
          <p>
            Ser la plataforma líder en educación financiera, empoderando a las
            personas para que tomen decisiones inteligentes con sus recursos, mejoren
            su calidad de vida y alcancen la libertad financiera.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;