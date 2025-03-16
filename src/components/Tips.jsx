import React from 'react';

export const Tips = () => {
  return (
    <div className="noticias__consejos shadow-cards shadow__cards--bg">
      <h2 className="titles-sections">Consejos</h2>
      <article className="noticias__content">
        <img src="/images/bg-ahorro.jpg" alt="Consejos" />
        <a className="noticias__artips" href="#">
          <h3 className="artips__title">Aumenta tu Ahorro con Hábitos Financieros Inteligentes</h3>
          <p className="artips__parrafo">Descubre cómo pequeñas acciones diarias pueden transformar tus finanzas personales.</p>
          <span className="consejos__experto">Victor Laguna, 2025</span>
        </a>
      </article>
    </div>
  );
};

export default Tips;