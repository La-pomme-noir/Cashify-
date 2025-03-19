import React from 'react';

export const Tips = ({ advice }) => {
  return (
    <div className="noticias__consejos shadow-cards shadow__cards--bg">
      <h2 className="titles-sections">Consejos</h2>
      {advice ? (
        <article className="noticias__content">
          <img src={advice.imageUrl} alt={advice.title} />
          <a className="noticias__artips" href="#" onClick={(e) => e.preventDefault()}>
            <h3 className="artips__title">{advice.title}</h3>
            <p className="artips__parrafo">{advice.shortDescription}</p>
            <span className="consejos__experto">Admin, {new Date(advice.date?.toDate()).getFullYear()}</span>
          </a>
        </article>
      ) : (
        <p>No hay consejo destacado hoy.</p>
      )}
    </div>
  );
};

export default Tips;