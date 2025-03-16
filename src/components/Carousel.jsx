import React from 'react';
import '../styles/style-home.css';

const Carousel = () => {
  return (
    <div id="carouselExampleDark" className="carousel carousel-dark slide">
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleDark"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active" data-bs-interval="10000">
          <img
            src="/images/carousel-billetes.jpg"
            className="d-block w-100"
            alt="Billetes"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel__title">El Poder del Dinero Inteligente</h5>
            <p className="carousel__parrafo">
              Descubre cómo gestionar tus finanzas con estrategias inteligentes que
              impulsan tu éxito económico.
            </p>
          </div>
        </div>
        <div className="carousel-item" data-bs-interval="2000">
          <img
            src="/images/carousel-grafico.jpg"
            className="d-block w-100"
            alt="Gráfico"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel__title">El Lenguaje de los Gráficos Financieros</h5>
            <p className="carousel__parrafo">
              Interpreta y comprende el impacto detrás de los números con datos
              visuales claros y estrategias financieras efectivas.
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="/images/carousel-plan.jpg"
            className="d-block w-100"
            alt="Plan"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5 className="carousel__title">Todo Comienza con un Plan</h5>
            <p className="carousel__parrafo">
              La clave del éxito financiero está en la planificación. Da el primer
              paso hacia tus metas con determinación y claridad.
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleDark"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;