import React from "react";

const RecentVideos = ({ videos }) => (
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
);

export default RecentVideos;
