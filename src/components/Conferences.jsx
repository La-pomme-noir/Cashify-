import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../styles/global.css";
import { useAuth } from "../context/AuthContext";

const Conferences = () => {
  const navigate = useNavigate();
  const { currentUser, userData, loading } = useAuth();
  const [mostrarPublico, setMostrarPublico] = useState(false);

  useEffect(() => {
    if (loading) return;

    if (!currentUser || !userData) {
      setMostrarPublico(true);
      return;
    }

    if (userData?.role === "admin") {
      navigate("/dashboard-admin");
    } else {
      switch (userData?.planActivo) {
        case "plan-basico":
          navigate("/dashboard-basico");
          break;
        case "plan-empresarial":
          navigate("/dashboard-empresarial");
          break;
        case "plan-corporativo":
          navigate("/dashboard-corporativo");
          break;
        default:
          setMostrarPublico(true);
      }
    }
  }, [currentUser, userData, loading, navigate]);

  if (loading || (!mostrarPublico && !currentUser)) return null;

  return (
    <div style={{ backgroundColor: "var(--honeydew)", fontFamily: "var(--fuenteParrafo)", paddingBottom: "5rem" }}>
      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h1 style={{ fontFamily: "var(--fuenteHeading)", color: "var(--seagreen)", fontSize: "4rem" }}>
          Sección de Videoconferencias
        </h1>
        <p style={{ maxWidth: "800px", margin: "1rem auto", color: "var(--black)" }}>
          Explora nuestra plataforma de videoconferencias para profesionales en gestión financiera. Aprende de expertos
          del sector y mantente al día con las últimas tendencias.
        </p>
      </section>

    

      <section
        style={{
          backgroundColor: "var(--lightgreen)",
          padding: "4rem 2rem",
          textAlign: "center",
        }}
      >
        <h2 style={{ fontFamily: "var(--fuenteHeading)", fontSize: "3.2rem", color: "var(--black)" }}>
          Únete a las Videoconferencias de Cashify
        </h2>
        <p style={{ margin: "1rem auto", color: "var(--black)" }}>
          Aprende de expertos financieros y mejora tus habilidades en gestión financiera.
        </p>
        <button
          onClick={() => navigate("/login")}
          style={{
            marginTop: "2rem",
            padding: "1rem 2rem",
            backgroundColor: "var(--seagreen)",
            color: "white",
            border: "none",
            borderRadius: "0.8rem",
            fontWeight: "bold",
            cursor: "pointer",
          }}
        >
          Regístrate ahora
        </button>
      </section>

      <section style={{ padding: "4rem 2rem", textAlign: "center" }}>
        <h2 style={{ fontFamily: "var(--fuenteHeading)", fontSize: "3.2rem", color: "var(--seagreen)" }}>
          Planes de precios
        </h2>
        <p style={{ marginBottom: "2rem", color: "var(--black)" }}>
          Elige el plan perfecto para ti. Aprende de forma inteligente, clara y constante, adaptándote con nosotros.
        </p>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "2rem",
            justifyContent: "center",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            {
              titulo: "Plan Básico",
              precio: "$55.000/mes",
              beneficios: ["✔ Acceso básico", "✔ 1 sesión semanal", "✔ Chat estándar"],
            },
            {
              titulo: "Plan Empresarial",
              precio: "$70.000/mes",
              beneficios: ["✔ 3 sesiones semanales", "✔ Herramientas de chat avanzadas", "✔ Análisis de retroalimentación"],
            },
            {
              titulo: "Plan Corporativo",
              precio: "$85.000/mes",
              beneficios: ["✔ Sesiones ilimitadas", "✔ Acceso completo para el equipo", "✔ Datos e insights"],
            },
          ].map((plan, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "2rem",
                borderRadius: "1rem",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                maxWidth: "300px",
                minWidth: "260px",
                textAlign: "left",
              }}
            >
              <h3 style={{ fontFamily: "var(--fuenteHeading)", fontSize: "2.4rem", color: "var(--black)" }}>
                {plan.titulo}
              </h3>
              <p style={{ fontWeight: "bold", color: "var(--seagreen)", margin: "1rem 0" }}>{plan.precio}</p>
              <ul style={{ paddingLeft: "1.5rem", color: "var(--black)", lineHeight: "1.6" }}>
                {plan.beneficios.map((beneficio, i) => (
                  <li key={i}>{beneficio}</li>
                ))}
              </ul>
              <button
                onClick={() => navigate("/login")}
                style={{
                  marginTop: "1.5rem",
                  width: "100%",
                  padding: "0.8rem",
                  backgroundColor: "var(--seagreen)",
                  color: "white",
                  border: "none",
                  borderRadius: "0.5rem",
                  fontWeight: "bold",
                  cursor: "pointer",
                }}
              >
                Comenzar
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Conferences;
