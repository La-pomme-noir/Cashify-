import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../styles/Dashboard.css';

const DashboardConferences = () => {
  const [noticias, setNoticias] = useState([]);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setNoticias([
      { id: 1, titulo: "Lanzamiento Cashify AI", descripcion: "Nuestra nueva herramienta de IA financiera ya está disponible." },
      { id: 2, titulo: "Actualización de seguridad", descripcion: "Mejoramos nuestros protocolos de autenticación." }
    ]);

    setVideos([
        {
            id: 1,
            titulo: "Principios de economía en tiempos modernos",
            url: "https://www.youtube.com/embed/p9dgODyxbdU"
          },
          {
            id: 2,
            titulo: "Crítica de la Economía Política de Karl Marx",
            url: "https://www.youtube.com/embed/KOl5M_wQGxc"
          }
    ]);
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <div className="dashboard-container">
        <section className="dashboard__header">
          <h1 className="section-title">Bienvenido de nuevo</h1>
          <p>Explora tus beneficios y mantente al día con Cashify.</p>
        </section>

        <section className="dashboard__section">
          <h2 className="section-title">Últimas noticias</h2>
          <div className="dashboard__cards">
            {noticias.map((noticia) => (
              <div key={noticia.id} className="card">
                <h3>{noticia.titulo}</h3>
                <p>{noticia.descripcion}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard__section">
          <h2 className="section-title">Videos recientes</h2>
          <div className="dashboard__videos">
            {videos.map((video) => (
              <div key={video.id} className="video-card">
                <h4>{video.titulo}</h4>
                <div className="video-frame">
                  <iframe
                    width="100%"
                    height="200"
                    src={video.url}
                    title={video.titulo}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="dashboard__section">
          <h2 className="section-title">Próximas conferencias</h2>
          <div className="conference-table-container">
            <table className="conference-table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Título</th>
                  <th>Descripción</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10 Abril</td>
                  <td>Fintech & IA</td>
                  <td>Descubre el futuro de las finanzas inteligentes.</td>
                </tr>
                <tr>
                  <td>15 Abril</td>
                  <td>Ciberseguridad</td>
                  <td>Protegiendo datos en el nuevo mundo digital.</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="dashboard__section">
          <h2 className="section-title">🛡 Mi plan</h2>
          <p>Suscripción activa: <strong>Plan Zomp Premium</strong></p>
          <button className="btn btn__emerald">Ver detalles</button>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DashboardConferences;
