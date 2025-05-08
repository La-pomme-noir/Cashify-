import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebase";
import { doc, getDoc } from "firebase/firestore";

const PlanInfo = () => {
  const navigate = useNavigate();
  const [planActivo, setPlanActivo] = useState(null);
  const [loading, setLoading] = useState(true);

  const planes = [
    {
      id: "plan-basico",
      nombre: "Plan Básico",
      precio: "$55.000/mes",
      beneficios: ["Acceso básico", "1 sesión semanal", "Chat estándar"],
    },
    {
      id: "plan-empresarial",
      nombre: "Plan Empresarial",
      precio: "$75.000/mes",
      beneficios: ["3 sesiones semanales", "Herramientas de chat avanzadas", "Análisis de retroalimentación"],
    },
    {
      id: "plan-corporativo",
      nombre: "Plan Corporativo",
      precio: "$85.000/mes",
      beneficios: ["Sesiones ilimitadas", "Acceso completo para el equipo", "Datos e insights"],
    },
  ];

  useEffect(() => {
    const obtenerPlan = async () => {
      const user = auth.currentUser;
      if (!user) {
        setPlanActivo(null);
        setLoading(false);
        return;
      }

      try {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setPlanActivo(docSnap.data().planActivo || null);
        } else {
          setPlanActivo(null);
        }
      } catch (error) {
        console.error("Error obteniendo el plan:", error);
        setPlanActivo(null);
      } finally {
        setLoading(false);
      }
    };

    obtenerPlan();
  }, []);

  const redirigirCompra = (plan) => {
    navigate("/formulario-compra", { state: { planSeleccionado: plan.id } });
  };

  if (loading) return <p className="centrar-texto" style={{ marginTop: "2rem" }}>Cargando planes...</p>;

  return (
    <section className="shadow-cards">
      <h2 className="titles-sections">🛒 Mi Plan</h2>

      {planActivo ? (
        <p className="centrar-texto" style={{ fontSize: "1.8rem", marginTop: "1.5rem" }}>
          🎉 Ya tienes un plan activo: <strong>{planActivo.replace("plan-", "").toUpperCase()}</strong>.
        </p>
      ) : (
        <div className="planes-conferences">
          {planes.map((plan) => (
            <div key={plan.id} className="plan-card-public">
              <h3>{plan.nombre}</h3>
              <p className="plan-price-public">{plan.precio}</p>
              <ul>
                {plan.beneficios.map((b, i) => (
                  <li key={i}>✓ {b}</li>
                ))}
              </ul>
              <button className="btn-primary-seagreen" onClick={() => redirigirCompra(plan)}>

                Comenzar
              </button>
            </div>
          ))}
        </div>
      )}
    </section>
  );
};

export default PlanInfo;
