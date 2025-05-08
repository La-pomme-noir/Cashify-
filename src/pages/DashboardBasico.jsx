import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbardashconf";
import Footer from "../components/Footer";
import RecentVideos from "../components/Recentvideos";
import ChatBasico from "../components/ChatBasico";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../services/firebase";
import "../styles/DashboardBasico.css";
import "../styles/global.css";

const DashboardBasico = () => {
  const [conferencias, setConferencias] = useState([]);

  useEffect(() => {
    const q = query(collection(db, "videoconferencias"), orderBy("date", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setConferencias(data);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Header />
      <Navbar />

      <section className="hero-banner">
        <div className="hero-overlay">
          <h1 className="titles-sections">🎉 Bienvenido al Plan Básico</h1>
          <p className="centrar-texto">Disfruta de todos los beneficios disponibles con tu suscripción activa.</p>
        </div>
      </section>

      <div className="dashboard-basico contenedor" style={{ padding: "2rem 1rem" }}>
        <main className="dashboard-grid">

          <section className="shadow-cards">
            <h2 className="titles-sections">🎥 Videoconferencias Recientes</h2>
            <RecentVideos />
          </section>

          <section className="shadow-cards">
            <h2 className="titles-sections">💬 Chat Estándar</h2>
            <ChatBasico />
          </section>

          <section className="shadow-cards">
            <h2 className="titles-sections">📅 Próximas Videoconferencias</h2>

            {conferencias.length > 0 ? (
              <ul className="conference-list">
                {conferencias.map((conf) => (
                  <li key={conf.id} className="conference-item">
                    <strong>{conf.title}</strong>
                    <span>{new Date(conf.date.seconds * 1000).toLocaleString()}</span>
                    {conf.link && (
                      <a href={conf.link} target="_blank" rel="noreferrer">
                        Ver videoconferencia
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="centrar-texto" style={{ marginTop: "2rem" }}>
                No hay próximas conferencias todavía.
              </p>
            )}
          </section>

        </main>
      </div>

      <Footer />
    </>
  );
};

export default DashboardBasico;
