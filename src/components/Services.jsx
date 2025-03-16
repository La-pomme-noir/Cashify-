import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/style-home.css';

const Services = () => {
  return (
    <div className="services">
      <h2 className="services__titulo titles-sections">Nuestros Servicios</h2>
      <div className="services__grid">
        <div className="services__cards">
          <img src="/gifs/financialtips.gif" alt="Consejos" />
          <Link to="/news/tips">
            <h3 className="services__title">Consejos</h3>
          </Link>
          <p className="services__parrafo">
            Recibe recomendaciones claras, prácticas y personalizadas que te
            ayudarán a organizar tus finanzas, maximizar tus ahorros y tomar
            decisiones inteligentes para alcanzar tus objetivos económicos.
          </p>
        </div>

        <div className="services__cards">
          <img src="/gifs/finanzasblog.gif" alt="Preguntas y Respuestas" />
          <Link to="/qanda">
            <h3 className="services__title">Foro Financiero</h3>
          </Link>
          <p className="services__parrafo">
            Únete a una comunidad dinámica de usuarios apasionados por las finanzas.
            Comparte experiencias, resuelve dudas y aprende de las discusiones sobre
            inversiones, presupuestos y estrategias financieras.
          </p>
        </div>

        <div className="services__cards">
          <img src="/gifs/simulatorfinanzas.gif" alt="Simuladores" />
          <Link to="/myspace">
            <h3 className="services__title">Simuladores</h3>
          </Link>
          <p className="services__parrafo">
            Experimenta con nuestras herramientas interactivas que te permiten
            simular escenarios financieros, desde la planificación de tus ahorros
            hasta el cálculo de inversiones, para tomar decisiones bien
            fundamentadas.
          </p>
        </div>

        <div className="services__cards">
          <img src="/gifs/videoconferencias.gif" alt="VideoConferencias" />
          <Link to="/conferences">
            <h3 className="services__title">VideoConferencias</h3>
          </Link>
          <p className="services__parrafo">
            Accede a sesiones virtuales con expertos en finanzas, donde podrás
            aprender sobre diversos temas, aclarar dudas y recibir asesoría en tiempo
            real desde la comodidad de tu hogar.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;