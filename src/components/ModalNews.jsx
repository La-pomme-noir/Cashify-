import React from 'react';

const ModalNews = ({ news, closeModal }) => {
  if (!news) return null;

  return (
    <div className="modal__overlay">
      <div className="modal__content">
        <div className="modal__content--scroll">
          <button className="modal__close" onClick={closeModal}>
            <i className="fa-solid fa-xmark"></i>
          </button>
          <div className="modal__header">
            <h3 className="modal__title">{news.title}</h3>
            <span className="modal__meta">
              <i className="fa-solid fa-clock"></i> {news.date?.toDate().toLocaleDateString('es-ES')} |{' '}
              <i className="fa-solid fa-book"></i> {news.readingTime} min. de lectura
            </span>
          </div>
          <p className="modal__subtitle">{news.shortDescription}</p>
          <img src={news.imageUrl} alt={news.title} className="modal__image" />
          <div className="modal__text">
            <p>{news.longDescription}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalNews;