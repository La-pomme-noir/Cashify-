import React from 'react';
import '../styles/style-news.css';

export const TrendsCarousel = () => {
    return (
    <>
    <h2 className="titles-sections">Análisis de Tendencias Financieras</h2>
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
                    <h4 className="card-title artips__title">Explorando el Dinamismo del Mercado de Criptomonedas</h4>
                  </a>
                  <p className="card-text card__text">
                  Descubre cómo los gráficos en tiempo real de criptomonedas ofrecen insights clave para tomar decisiones de inversión 
                  en un entorno financiero en constante evolución.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__cards */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card2.jpg" alt="Análisis-2" />
                  <span className="noticias__span">
                    18 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Desentrañando Tendencias con Gráficos de Área Apilada</h4>
                  </a>
                  <p className="card-text card__text">
                  Los gráficos de área apilada brindan una visión clara y detallada de las tendencias financieras, ideales para evaluar 
                  el desempeño de sectores y categorías a lo largo del tiempo.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card3.jpg" alt="Análisis-3" />
                  <span className="noticias__span">
                    19 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Reportes Financieros: Análisis Práctico con Herramientas Clave</h4>
                  </a>
                  <p className="card-text card__text">
                  Explora reportes con gráficos de dona y barras, acompañados de calculadora y lentes, que facilitan un análisis accesible y efectivo de las tendencias del mercado.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

          </div> {/*Fin row */}
        </div> {/*Fin tendencias__item */}

        {/* Segundas cards */}

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
                    <h4 className="card-title artips__title">Profundizando en Tendencias con Gráficos Diversificados</h4>
                  </a>
                  <p className="card-text card__text">
                  Analiza tendencias financieras con precisión utilizando histogramas, diagramas de dona y lupas, herramientas esenciales para un estudio detallado del mercado.
                  Estas herramientas te permiten visualizar patrones.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card5.jpg" alt="Análisis-5" />
                  <span className="noticias__span">
                    21 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">La Convergencia entre Criptomonedas y Finanzas Tradicionales</h4>
                  </a>
                  <p className="card-text card__text">
                  Descubre cómo Bitcoin, euros y gráficos en laptops fusionan las dinámicas de cripto y monedas tradicionales en las tendencias financieras actuales.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/analisis-card6.jpg" alt="Análisis-6" />
                  <span className="noticias__span">
                    22 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Análisis Financiero Avanzado con Herramientas Modernas</h4>
                  </a>
                  <p className="card-text card__text">
                  Evalúa proyecciones económicas con reportes, gráficos de barras y líneas, y calculadoras, optimizando el análisis de tendencias con tecnología actual.
                  Aprovecha la tecnología actual para identificar patrones clave
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

          </div> {/*Fin row */}
        </div> {/*Fin tendencias__item */}
      </div> {/*Fin tendencias */}
    </div> {/*Fin carousel__slide */}
    </>
  );
};

export default TrendsCarousel;