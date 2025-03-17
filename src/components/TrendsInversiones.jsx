import React from 'react';

const TrendsInversiones = () => {
  return (
    <section id='consejos'>
    <h2 className="titles-sections">Inversiones y crecimiento financiero</h2>
    <div id="carouselTarjetasInversiones" className="carousel slide" data-bs-ride="carousel">
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselTarjetasInversiones"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselTarjetasInversiones"
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
                  <img src="/images/consejos-inver1.jpg" alt="ConsejosInversiones-1" />
                  <span className="noticias__span">
                    17 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Construye tu Futuro con Metas</h4>
                  </a>
                  <p className="card-text card__text">
                  Ahorra para grandes sueños como comprar una casa. 
                  La imagen de una mano sosteniendo una pequeña casa de madera simboliza una meta común en el crecimiento financiero: adquirir una propiedad.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__cards */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/consejos-inver2.jpg" alt="ConsejosInversiones-2" />
                  <span className="noticias__span">
                    19 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Cuidado con las Inversiones Arriesgadas</h4>
                  </a>
                  <p className="card-text card__text">
                  Evita riesgos innecesarios que quemen tu capital.
                  La imagen de un billete enrollado y quemado es una advertencia poderosa en el mundo de las inversiones: los riesgos mal calculados pueden destruir tu capital.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/consejos-inver3.jpg" alt="ConsejosInversiones-3" />
                  <span className="noticias__span">
                    17 mar 2025 <li className="noticias__li">- 2 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Organización para el Crecimiento</h4>
                  </a>
                  <p className="card-text card__text">
                  Cuenta y organiza tu dinero para invertir sabiamente.
                  La imagen de billetes, una calculadora y una máquina contadora de dinero enfatiza la importancia de la organización en las inversiones y el crecimiento financiero.
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
                  <img src="/images/consejos-inver4.jpg" alt="ConsejosInversiones-4" />
                  <span className="noticias__span">
                    18 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Decisiones Estratégicas Simples</h4>
                  </a>
                  <p className="card-text card__text">
                  Usa notas para decidir: comprar, mantener o vender.
                  La imagen con notas adhesivas que dicen "BUY", "HOLD" y "SELL" ofrece un enfoque práctico y visual para tomar decisiones de inversión.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/consejos-inver5.jpg" alt="ConsejosInversiones-5" />
                  <span className="noticias__span">
                    21 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Celebra las Victorias del Mercado</h4>
                  </a>
                  <p className="card-text card__text">
                  Disfruta las ganancias con análisis de mercado atento.
                  La imagen de una persona celebrando frente a gráficos de mercado refleja el lado emocionante de las inversiones: las victorias financieras.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/consejos-inver6.jpg" alt="ConsejosInversiones-6" />
                  <span className="noticias__span">
                    22 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Diversifica con Opciones Modernas</h4>
                  </a>
                  <p className="card-text card__text">
                  Incluye criptomonedas y monedas tradicionales en tu plan.
                  La imagen de una moneda de Bitcoin junto a pilas de monedas tradicionales ilustra la importancia de la diversificación en el crecimiento financiero.
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

export default TrendsInversiones;