import React from "react";
import "../styles/Dashboard-conferences.css"; // Asegúrate de tenerlo o importarlo

const Recentvideos = ({ videos = [] }) => (
  <section className="shadow-cards contenedor">
    <h2 className="titles-sections">🎥 Videos Recientes</h2>
    {videos.length > 0 ? (
      <div className="videos-grid">
        {videos.map((video) => (
          <div key={video.id} className="video-card-dashboard">
            <h4 className="video-title">{video.titulo}</h4>
            <div className="video-frame-dashboard">
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
    ) : (
      <p className="no-videos-text">No hay videos disponibles por ahora.</p>
    )}
  </section>
);

export default Recentvideos;
