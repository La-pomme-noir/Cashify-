import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbardashconf";
import Footer from "../components/Footer";
import RecentVideos from "../components/Recentvideos";
import ChatBasico from "../components/ChatBasico";
import FeedbackAnalysis from "../components/Feedback";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../services/firebase";
import "../styles/DashboardEmpresarial.css";
import "../styles/global.css";

const DashboardEmpresarial = () => {
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

      <div className="dashboard-empresarial contenedor" style={{ padding: "2rem 1rem" }}>
        <section className="shadow-cards">
          <h1 className="titles-sections">🚀 Bienvenido al Plan Empresarial</h1>
          <p className="centrar-texto">
            Accede a herramientas mejoradas, métricas clave, sesiones semanales y análisis de feedback para tu crecimiento financiero.
          </p>
        </section>

        <section className="shadow-cards">
          <h2 className="titles-sections">🎥 Videoconferencias Recientes</h2>
          <RecentVideos />
        </section>

        <section className="shadow-cards">
          <h2 className="titles-sections">💬 Chat Empresarial</h2>
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

        <section className="shadow-cards">
          <h2 className="titles-sections">📊 Análisis de Feedback</h2>
          <FeedbackAnalysis />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DashboardEmpresarial;
