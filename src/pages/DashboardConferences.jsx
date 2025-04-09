import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import NavbarConferencias from '../components/NavbarConfe';
import Footer from '../components/Footer';
import NewsDashboard from '../components/NewDashboard';
import RecentVideos from '../components/RecentVideos';
import ConferenceTable from '../components/ConferenceTable';
import PlanInfo from '../components/PlanInfo';
import '../styles/style-dashboard.css';

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
      <NavbarConferencias />
      <div className="dashboard-container">
        <section className="dashboard__header">
          <h1 className="section-title">Bienvenido de nuevo</h1>
          <p>Explora tus beneficios y mantente al día con Cashify.</p>
        </section>
        <NewsDashboard noticias={noticias} />
        <RecentVideos videos={videos} />
        <ConferenceTable />
        <PlanInfo />
      </div>
      <Footer />
    </>
  );
};

export default DashboardConferences;
