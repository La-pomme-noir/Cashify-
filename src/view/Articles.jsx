import React from 'react';
import { Link } from 'react-router-dom';

export const Articles = ({ article }) => {
  return (
    <div className="noticias__articulos shadow-cards shadow__cards--bg">
      <h2 className="titles-sections">Artículos del Día</h2>
      {article ? (
        <article className="noticias__content">
          <img src={article.imageUrl} alt={article.title} />
          <Link className="noticias__artips" to="#" onClick={(e) => e.preventDefault()}>
            <h3 className="artips__title">{article.title}</h3>
            <p className="artips__parrafo">{article.shortDescription}</p>
          </Link>
        </article>
      ) : (
        <p>No hay artículo destacado hoy.</p>
      )}
    </div>
  );
};

export default Articles;