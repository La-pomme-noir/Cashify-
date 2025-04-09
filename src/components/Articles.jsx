import React from 'react';
import { Link } from 'react-router-dom';

export const Articles = () => {
  return (
    <div className="noticias__articulos shadow-cards shadow__cards--bg">
      <h2 className="titles-sections">Artículos del Día</h2>
      <article className="noticias__content">
        <img src="/images/bg-finversiones.jpg" alt="Inversiones" />
        <Link className="noticias__artips" to="https://www.larepublica.co/finanzas/bogota-sera-sede-del-fis-2025-el-primer-evento-sobre-fondos-de-inversion-colectiva-4083559">
          <h3 className="artips__title">
            El futuro de los fondos de inversión colectiva, centro del debate del evento FIS 2025
          </h3>
          <p className="artips__parrafo">
            El próximo 10 y 11 de abril se realizará en Bogotá el Funds Investors Summit 2025 en la Cámara de Comercio de Bogotá.
          </p>
        </Link>
      </article>
    </div>
  );
};

export default Articles;