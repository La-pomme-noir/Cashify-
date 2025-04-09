import React from 'react';
import ModalNews from '../components/ModalNews';

const NewsCarousel = ({ category, news, isModalOpen, selectedNews, openModal, closeModal, sectionId, carouselId }) => {
  return (
    <section id={sectionId}>
      <h2 className="titles-sections">{category}</h2>
      <div id={carouselId} className="carousel slide" data-bs-ride="carousel">
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Anterior</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target={`#${carouselId}`}
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Siguiente</span>
        </button>
        <div className="carousel-inner tendencias">
          {news.length > 0 ? (
            news.reduce((acc, item, index) => {
              const slideIndex = Math.floor(index / 3);
              if (!acc[slideIndex]) acc[slideIndex] = { items: [] };
              acc[slideIndex].items.push(item);
              return acc;
            }, []).map((slide, idx) => (
              <div className={`carousel-item ${idx === 0 ? 'active' : ''} tendencias__item`} key={idx}>
                <div className="row">
                  {slide.items.map((item) => (
                    <div className="col-md-4 tendencias__cards" key={item.id}>
                      <div className="card">
                        <div className="card-body card__body">
                          <img src={item.imageUrl} alt={item.title} />
                          <span className="noticias__span">
                            {item.date?.toDate().toLocaleDateString('es-ES')}
                            <li className="noticias__li"> - {item.readingTime} Min. de lectura</li>
                          </span>
                          <a
                            className="noticias__artips"
                            href="#"
                            onClick={(e) => {
                              e.preventDefault();
                              openModal(item);
                            }}
                          >
                            <h4 className="card-title artips__title">{item.title}</h4>
                          </a>
                          <p className="card-text card__text">{item.shortDescription}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <p>No hay noticias en esta categoría.</p>
          )}
        </div>
      </div>
      {isModalOpen && selectedNews && <ModalNews news={selectedNews} closeModal={closeModal} />}
    </section>
  );
};

export default NewsCarousel;