import React from 'react';

const MarketUpdates = () => {
  return (
    <section id='articulos'>
    <h2 className="titles-sections">Actualizaciones del Mercado</h2>
    <div id="carouselTarjetasMercado" className="carousel slide" data-bs-ride="carousel">
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselTarjetasMercado"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselTarjetasMercado"
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
                  <img src="/images/mercado-1.jpg" alt="Mercado-1" />
                  <span className="noticias__span">
                    17 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Oro: El Refugio Seguro que Sigue Brillando en Tiempos de Incertidumbre</h4>
                  </a>
                  <p className="card-text card__text">
                  Las barras de oro de Global Intergold destacan como un activo seguro en un mercado volátil, atrayendo a inversores que buscan proteger 
                  su riqueza frente a la inflación y las tensiones globales.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__cards */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/mercado-2.jpg" alt="Mercado-2" />
                  <span className="noticias__span">
                    19 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">El Dólar Estadounidense: ¿Sigue Siendo el Rey del Mercado Global?</h4>
                  </a>
                  <p className="card-text card__text">
                  Los billetes de 1 dólar, apilados en grandes cantidades, reflejan la omnipresencia del dólar estadounidense en los mercados globales, pero su dominio enfrenta nuevos desafíos.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/mercado-3.jpg" alt="Mercado-3" />
                  <span className="noticias__span">
                    17 mar 2025 <li className="noticias__li">- 2 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">El Euro se Mantiene Firme: Perspectivas del Mercado Monetario Europeo</h4>
                  </a>
                  <p className="card-text card__text">
                  El euro sigue siendo un pilar en los mercados globales, con su valor mostrando estabilidad en medio de fluctuaciones económicas. 
                  Analizamos las perspectivas para esta moneda en el contexto actual.
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
                  <img src="/images/mercado-4.jpg" alt="Mercado-4" />
                  <span className="noticias__span">
                    20 mar 2025 <li className="noticias__li">- 2 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Mercados Volátiles: La Presión de Tomar Decisiones en Tiempo Real</h4>
                  </a>
                  <p className="card-text card__text">
                  Un trader analiza gráficos en un entorno de alta presión, reflejando los desafíos de operar en mercados volátiles mientras busca oportunidades de inversión.
                  Los traders que logren adaptarse a este entorno dinámico serán los que prosperen.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/mercado-5.jpg" alt="Mercado-5" />
                  <span className="noticias__span">
                    21 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Análisis de Datos Financieros: Claves para Entender las Tendencias del Mercado</h4>
                  </a>
                  <p className="card-text card__text">
                  Los informes contables y gráficos financieros son herramientas esenciales para descifrar las tendencias del mercado, ofreciendo a los 
                  inversores datos clave para tomar decisiones informadas.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/mercado-6.jpg" alt="Mercado-6" />
                  <span className="noticias__span">
                    22 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Pérdidas en el Mercado: Cómo Enfrentar los Retrocesos Financieros</h4>
                  </a>
                  <p className="card-text card__text">
                  Un gráfico de pérdidas en el fondo refleja los desafíos del mercado actual, mientras una persona enfrenta la presión de los retrocesos financieros con determinación.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

          </div> {/*Fin row */}
        </div> {/*Fin tendencias__item */}
      </div> {/*Fin tendencias */}
    </div> {/*Fin carousel__slide */}
    </section>
  );
};

export default MarketUpdates;