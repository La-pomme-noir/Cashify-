import React from "react";
import "../styles/Dashboard-conferences.css"; // Asegúrate de importar los estilos

const NewsDashboard = ({ noticias }) => (
  <section className="dashboard__section">
    <h2 className="titles-sections">Últimas noticias</h2>
    <div className="news-cards">
      {noticias.map((noticia) => (
        <div key={noticia.id} className="news-card">
          <h3 className="news-title">{noticia.titulo}</h3>
          <p className="news-description">{noticia.descripcion}</p>
        </div>
      ))}
    </div>
  </section>
);

export default NewsDashboard;
