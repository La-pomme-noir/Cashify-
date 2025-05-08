import React, { useState, useEffect } from "react";
import Header from '../components/Header';
import NavbarConferencias from '../components/NavbarConfe';
import Footer from '../components/Footer';
import NewsDashboard from '../components/NewDashboard';
import RecentVideos from '../components/Recentvideos';
import PlanInfo from '../components/PlanInfo';
import { collection, onSnapshot, query, orderBy, doc, getDoc } from "firebase/firestore";
import { auth, db } from "../services/firebase";
import '../styles/global.css';
import '../styles/style-dashboard.css';
import '../styles/Dashboard-conferences.css';

const DashboardConferences = () => {
  const [noticias, setNoticias] = useState([]);
  const [videos, setVideos] = useState([]);
  const [conferencias, setConferencias] = useState([]);
  const [planActivo, setPlanActivo] = useState(null);

  useEffect(() => {
    setNoticias([
      {
        id: 1,
        titulo: "Cashify AI",
        descripcion: "Nuestra nueva herramienta de IA financiera ya está disponible."
      },
      {
        id: 2,
        titulo: "Actualización de seguridad",
        descripcion: "Mejoramos nuestros protocolos de autenticación."
      }
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

  useEffect(() => {
    const q = query(collection(db, "videoconferencias"), orderBy("date", "asc"));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setConferencias(data);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    const fetchPlan = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPlanActivo(docSnap.data().planActivo || null);
        }
      }
    };
    fetchPlan();
  }, []);

  return (
    <>
      <Header />
      <NavbarConferencias />
      <div className="contenedor" style={{ padding: "2rem 1rem" }}>
        
        {/* Bienvenida */}
        <section className="shadow-cards">
          <h1 className="titles-sections">Bienvenido de nuevo</h1>
          <p className="centrar-texto">
            Explora tus beneficios y mantente al día con Cashify.
          </p>
        </section>

        {/* Noticias */}
        <NewsDashboard noticias={noticias} />

        {/* Videos */}
        <RecentVideos videos={videos} />

        {/* SOLO SI TIENE PLAN ACTIVO */}
        {planActivo && (
          <section className="shadow-cards contenedor">
            <h2 className="titles-sections">📅 Próximas Conferencias</h2>

            {conferencias.length > 0 ? (
              <ul style={{ listStyle: "none", padding: 0, marginTop: "2rem" }}>
                {conferencias.map((conf) => (
                  <li
                    key={conf.id}
                    style={{
                      marginBottom: "1.5rem",
                      backgroundColor: "var(--ghostwhite)",
                      padding: "1.5rem",
                      borderRadius: "1rem",
                      textAlign: "center",
                      boxShadow: "0 2px 8px rgba(0,0,0,0.08)"
                    }}
                  >
                    <strong style={{ fontSize: "2rem", color: "var(--seagreen)" }}>
                      {conf.title}
                    </strong>
                    <br />
                    <span style={{ color: "var(--black)", fontSize: "1.6rem" }}>
                      {new Date(conf.date.seconds * 1000).toLocaleString()}
                    </span>
                    <br />
                    {conf.link && (
                      <a
                        href={conf.link}
                        target="_blank"
                        rel="noreferrer"
                        style={{
                          color: "var(--emerald)",
                          fontWeight: "bold",
                          marginTop: "1rem",
                          display: "inline-block",
                          textDecoration: "underline"
                        }}
                      >
                        Ver videoconferencia
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            ) : (
              <p style={{ textAlign: "center", marginTop: "2rem" }}>
                No hay próximas conferencias todavía.
              </p>
            )}
          </section>
        )}

        {/* Información de Plan */}
        <PlanInfo />
      </div>
      <Footer />
    </>
  );
};

export default DashboardConferences;
