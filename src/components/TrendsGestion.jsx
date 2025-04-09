import React from 'react';

const TrendsGestion = () => {
  return (
    <section id='consejos'>
    <h2 className="titles-sections">Gestión del dinero personal</h2>
    <div id="carouselTarjetasGestionP" className="carousel slide" data-bs-ride="carousel">
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselTarjetasGestionP"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselTarjetasGestionP"
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
                  <img src="/images/consejos-personal1.jpg" alt="Consejos-1" />
                  <span className="noticias__span">
                    17 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">El Arte de Ahorro Proactivo</h4>
                  </a>
                  <p className="card-text card__text">
                  Crea un plan claro para ahorrar con un tracker visual. 
                  Gestionar el dinero personal es una habilidad esencial que requiere disciplina y estrategia, y el uso de un tracker de ahorros, 
                  como el mostrado en la imagen, es un excelente punto de partida.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__cards */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/consejos-personal2.jpg" alt="Consejos-2" />
                  <span className="noticias__span">
                    19 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Maestría en la Planificación Presupuestaria</h4>
                  </a>
                  <p className="card-text card__text">
                  Domina tu presupuesto con una pizarra y datos claros.
                  La imagen de una persona presentando un presupuesto en una pizarra resalta la importancia de la planificación.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/consejos-personal3.jpg" alt="Consejos-3" />
                  <span className="noticias__span">
                    17 mar 2025 <li className="noticias__li">- 2 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Analizando Tendencias Financieras</h4>
                  </a>
                  <p className="card-text card__text">
                  Estudia gráficos para entender tus finanzas mejor.
                  La imagen de un gráfico financiero con billetes y lápices resalta la importancia de analizar tendencias en la gestión del dinero personal.
                  Este método te permite interpretar patrones.
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
                  <img src="/images/consejos-personal4.jpg" alt="Consejos-4" />
                  <span className="noticias__span">
                    20 mar 2025 <li className="noticias__li">- 2 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">La Estrategia del Carrito de Ahorro</h4>
                  </a>
                  <p className="card-text card__text">
                  Ahorra dinero como si llenaras un carrito con cuidado.
                  La imagen de un carrito de compras con billetes sugiere una metáfora poderosa para la gestión del dinero personal: 
                  trata tus ahorros como si fueras comprando algo valioso.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/consejos-personal5.jpg" alt="Consejos-5" />
                  <span className="noticias__span">
                    21 mar 2025 <li className="noticias__li">- 3 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">El Poder del Control Diario</h4>
                  </a>
                  <p className="card-text card__text">
                  Registra y calcula tus gastos cada día con cuidado.
                  La imagen de alguien manejando dinero, un cuaderno y una calculadora destaca la importancia de la gestión diaria del dinero personal.
                  Este método simple pero efectivo.
                  </p>
                </div> {/*Fin card__body */}
              </div> {/*Fin card */}
            </div> {/*Fin tendencias__card */}

            <div className="col-md-4 tendencias__cards">
              <div className="card">
                <div className="card-body card__body">
                  <img src="/images/consejos-personal6.jpg" alt="Consejos-6" />
                  <span className="noticias__span">
                    22 mar 2025 <li className="noticias__li">- 1 Min. de lectura</li>
                  </span>
                  <a className="noticias__artips" href="#">
                    <h4 className="card-title artips__title">Anticipándote a la Fecha Límite Fiscal</h4>
                  </a>
                  <p className="card-text card__text">
                  Prepárate con tiempo para la fecha límite de impuestos.
                  La imagen de un calendario con una nota adhesiva que dice "Tax Deadline" subraya la necesidad de planificar con antelación.
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

export default TrendsGestion;