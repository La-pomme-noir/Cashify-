import React, { useState, useEffect } from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbardashconf";
import Footer from "../components/Footer";
import RecentVideos from "../components/Recentvideos";
import ChatBasico from "../components/ChatBasico";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";
import { db } from "../services/firebase";
import "../styles/DashboardCorporativo.css";
import "../styles/global.css";

const DashboardCorporativo = () => {
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
      <div className="dashboard-corporativo contenedor" style={{ padding: "2rem 1rem" }}>

        <section className="shadow-cards">
          <h1 className="titles-sections">🎯 Bienvenido al Panel Corporativo</h1>
          <p className="centrar-texto">
            Accede a reportes estratégicos, videoconferencias y visualizaciones avanzadas para la toma de decisiones.
          </p>
        </section>

        <section className="shadow-cards">
          <h2 className="titles-sections">📊 Insights Financieros</h2>
          <div className="metric-card"><span>💰 Ingresos Totales:</span> <span>$ --</span></div>
          <div className="metric-card"><span>💸 Egresos Totales:</span> <span>$ --</span></div>
          <div className="metric-card"><span>📈 Utilidad Neta:</span> <span>$ --</span></div>
        </section>

        <section className="shadow-cards">
          <h2 className="titles-sections">📐 Métricas Avanzadas</h2>
          <div className="metric-card"><span>📊 ROI:</span> <span>% --</span></div>
          <div className="metric-card"><span>💼 CAC:</span> <span>$ --</span></div>
          <div className="metric-card"><span>📌 Tasa de retención:</span> <span>% --</span></div>
        </section>

        <section className="shadow-cards">
          <h2 className="titles-sections">📝 Reportes Detallados</h2>
          <div className="metric-card">
            <span>📄 Reporte de Ingresos - Marzo 2025</span>
            <button className="download-btn">Descargar</button>
          </div>
          <div className="metric-card">
            <span>📄 Reporte de Gastos - Marzo 2025</span>
            <button className="download-btn">Descargar</button>
          </div>
          <div className="metric-card">
            <span>📄 Reporte de Balance General</span>
            <button className="download-btn">Descargar</button>
          </div>
        </section>

        <section className="shadow-cards">
          <h2 className="titles-sections">🎥 Videoconferencias Recientes</h2>
          <RecentVideos />
        </section>

        <section className="shadow-cards">
          <h2 className="titles-sections">💬 Chat Corporativo</h2>
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

      </div>
      <Footer />
    </>
  );
};

export default DashboardCorporativo;
