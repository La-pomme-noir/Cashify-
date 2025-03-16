import React from 'react';
import '../styles/style-news.css';

export const TrendsCarousel = () => {
  return (
    <div id="carouselTarjetas" className="carousel slide" data-bs-ride="carousel">
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselTarjetas"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselTarjetas"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>
      <div className="carousel-inner tendencias">
        <div className="carousel-item active tendencias__item">
          <div className="row">
            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card1.jpg" alt="Análisis-1" />
                  <span className="noticias__span">
                    17 mar 2025 <li className="noticias__li">- 2 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Explorando el Mercado de Criptomonedas</h4>
                  </a>
                  <p className="card-text card__text">
                    Descubre cómo los gráficos en tiempo real de criptomonedas, te permiten analizar tendencias y tomar decisiones de inversión informadas en un
                    entorno financiero dinámico.
                  </p>
                </div>
              </div>
            </div>
            {/* Agrega las otras dos tarjetas de la primera diapositiva aquí */}
            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card2.jpg" alt="Análisis-2" />
                  <span className="noticias__span">
                    18 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Desentrañando Patrones con Gráficos de Área Apilada</h4>
                  </a>
                  <p className="card-text card__text">
                    Los gráficos de área apilada en esta pantalla ofrecen una visión clara de las tendencias financieras a lo largo del tiempo, ideal para analizar
                    el crecimiento de diferentes sectores o categorías.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card3.jpg" alt="Análisis-3" />
                  <span className="noticias__span">
                    19 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Reportes financieros con gráficos y calculadora</h4>
                  </a>
                  <p className="card-text card__text">
                    Esta imagen presenta reportes con gráficos de dona y barras, acompañados de una calculadora, un teléfono y lentes, destacando un enfoque práctico
                    y accesible para analizar tendencias financieras.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="carousel-item tendencias__item">
          <div className="row">
            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card4.jpg" alt="Análisis-4" />
                  <span className="noticias__span">
                    20 mar 2025 <li className="noticias__li">- 2 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Profundizando en Datos con Gráficos Diversificados</h4>
                  </a>
                  <p className="card-text card__text">
                    Explora una variedad de gráficos financieros, desde histogramas hasta diagramas de dona, que te permiten analizar tendencias con detalle usando
                    lupas y notas como apoyo.
                  </p>
                </div>
              </div>
            </div>
            {/* Agrega las otras dos tarjetas de la segunda diapositiva aquí */}
            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card5.jpg" alt="Análisis-5" />
                  <span className="noticias__span">
                    21 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">La Fusión de Criptomonedas y Finanzas Tradicionales</h4>
                  </a>
                  <p className="card-text card__text">
                    Esta imagen combina monedas de Bitcoin, billetes de euro y una laptop con gráficos, mostrando cómo las tendencias financieras abarcan tanto
                    cripto como monedas tradicionales.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card6.jpg" alt="Análisis-6" />
                  <span className="noticias__span">
                    22 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Análisis Financiero Práctico con Herramientas Modernas</h4>
                  </a>
                  <p className="card-text card__text">
                    Esta imagen muestra reportes financieros con gráficos de barras y líneas, acompañados de calculadoras, ideales para un análisis profundo de
                    tendencias y proyecciones económicas.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendsCarousel;