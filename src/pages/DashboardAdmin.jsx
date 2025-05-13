import React from 'react';
import Header from '../components/Header'; 
import Footer from '../components/Footer'; 
import AdminUserList from '../components/AdminUserList';
import AdminPlanStats from '../components/AdminPlanStats';
import AdminFeedbackReview from '../components/AdminFeedbackReview';
import AdminAddConference from "../components/AdminAddConference";
import AdminConferenceTable from "../components/AdminConferenceTable";
import NavbarConfe from '../components/NavbarConfe';
import "../styles/global.css";
import "../styles/DashboardAdmin.css";

const DashboardAdmin = () => {
  return (
    <>
      <Header />
      <NavbarConfe />

      <div className="contenedor" style={{ padding: "2rem 1rem" }}>
        {/* Encabezado del dashboard */}
        <section className="shadow-cards" style={{ marginBottom: "2rem" }}>
          <h1 className="titles-sections">👑 Panel de Administrador</h1>
          <p className="centrar-texto">
            Gestión de usuarios, planes y retroalimentación.
          </p>
        </section>

        {/* Usuarios Registrados */}
        <section className="shadow-cards" style={{ marginBottom: "2rem" }}>
          <h2 className="titles-sections">📋 Usuarios Registrados</h2>
          <AdminUserList />
        </section>

        {/* Estadísticas de Planes */}
        <section className="shadow-cards" style={{ marginBottom: "2rem" }}>
          <h2 className="titles-sections">📊 Estadísticas de Planes</h2>
          <AdminPlanStats />
        </section>

        {/* Revisión de Feedback */}
        <section className="shadow-cards" style={{ marginBottom: "2rem" }}>
          <h2 className="titles-sections">🗣️ Revisión de Feedback</h2>
          <AdminFeedbackReview />
        </section>

        {/* Agregar Videoconferencia */}
        <section className="shadow-cards" style={{ marginBottom: "2rem" }}>
          <h2 className="titles-sections">🎥 Agregar Videoconferencias</h2>
          <AdminAddConference />
        </section>

        {/* Tabla de Conferencias */}
        <section className="shadow-cards">
          <h2 className="titles-sections">📅 Videoconferencias Programadas</h2>
          <AdminConferenceTable />
        </section>
      </div>

      <Footer />
    </>
  );
};

export default DashboardAdmin;
