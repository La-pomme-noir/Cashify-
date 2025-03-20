import React, { useState } from 'react';

const ForumContent = () => {
  const [question, setQuestion] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Pregunta publicada:', question);
    setQuestion('');
  };

  return (
    <section id="foro" className="mb-5 contenedor__foro shadow-cards">
      <h2 className="titles-sections">Foro Financiero</h2>
      <span className="scrollspy__span">Aquí puedes opinar y ver temas de otros usuarios.</span>
      <div className="foro__question shadow-cards">
        <div className="foro__comment">
          <span className="scrollspy__span">Haz una pregunta o selecciona entre las preguntas recientes.</span>
          <div className="foro__icon">
            <i className="fa-solid fa-question"></i>
          </div>
          <hr className="foro__hr" />
          <textarea
            className="foro__txt"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Deja tu pregunta o responde una publicada en el foro"
          ></textarea>
          <button type="submit" className="foro__button" onClick={handleSubmit}>
            Publicar <i className="fa-solid fa-paper-plane"></i>
          </button>
        </div>
        <div className="foro__cards">
          <span className="scrollspy__span">Preguntas Recientes</span>
          <p className="cards__parrafo">Preguntas Financieras Recientes</p>
          <div className="foro__trending shadow-cards">
            <h3 className="cards__title">¿Cómo ahorrar correctamente?</h3>
            <p className="cards__content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla placeat iusto corporis aut fuga enim, explicabo recusandae. Hic facilis dolor,
              minus dolore facere explicabo quidem exercitationem illo incidunt? Ea, est.
            </p>
            <span className="cards__span">
              Victor Laguna <i className="fa-solid fa-circle-user"></i>
            </span>
            <span className="cards__span">/ Sábado a las 8:00 PM</span>
            <p className="cards__parrafo--rta">
              Respuestas: 1 <a href="#"><i className="fa-solid fa-eye"></i></a>
            </p>
            <p className="cards__comment">
              Comentar <a href="#"><i className="fa-solid fa-comment"></i></a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForumContent;