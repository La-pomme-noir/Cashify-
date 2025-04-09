import React from "react";

const NewsDashboard = ({ noticias }) => (
  <section className="dashboard__section">
    <h2 className="section-title">Últimas noticias</h2>
    <div className="dashboard__cards">
      {noticias.map((noticia) => (
        <div key={noticia.id} className="card-dashboard">
          <h3>{noticia.titulo}</h3>
          <p>{noticia.descripcion}</p>
        </div>
      ))}
    </div>
  </section>
);

export default NewsDashboard;
