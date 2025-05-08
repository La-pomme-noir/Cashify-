import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { auth, db } from "../services/firebase";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { PayPalButtons } from "@paypal/react-paypal-js";
import "../styles/FormularioCompra.css";

const FormularioCompra = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const plan = location.state?.planSeleccionado || "ninguno";

  const precios = {
    "plan-basico": 55000,
    "plan-empresarial": 75000,
    "plan-corporativo": 85000,
  };

  const precio = precios[plan] || 0;

  const formatoCOP = new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    minimumFractionDigits: 0,
  });

  const handleAprobacionPayPal = async (details) => {
    const user = auth.currentUser;
    if (!user) {
      alert("Debes iniciar sesión para comprar.");
      return;
    }

    const compra = {
      uid: user.uid,
      correo: details.payer.email_address,
      nombre: `${details.payer.name.given_name} ${details.payer.name.surname}`,
      plan,
      precio,
      pais: details.purchase_units[0]?.shipping?.address?.country_code || "No especificado",
      fechaCompra: new Date(),
      metodoPago: "PayPal",
    };

    try {
      await addDoc(collection(db, "compras_planes"), compra);
      await setDoc(doc(db, "users", user.uid), { planActivo: plan }, { merge: true });

      alert("✅ Pago con PayPal realizado con éxito.");

      switch (plan) {
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
          navigate("/dashboard");
      }
    } catch (error) {
      console.error("Error al registrar la compra PayPal:", error);
      alert("❌ Hubo un error al registrar la compra por PayPal.");
    }
  };

  return (
    <div className="compra-form-container">
      <div className="resumen-compra">
        <h2>Suscribirse a {plan.replace("plan-", "").toUpperCase()}</h2>
        <h1>{formatoCOP.format(precio)}</h1>
        <p>por año</p>
        <hr />
        <div className="detalle-plan">
          <div>
            <strong>{plan.replace("plan-", "").toUpperCase()}</strong>
            <p>Accede a todas las funciones del plan por un año.</p>
          </div>
          <span>{formatoCOP.format(precio)}</span>
        </div>
        <div className="linea-precio">
          <span>Subtotal</span>
          <span>{formatoCOP.format(precio)}</span>
        </div>
        <div className="promo">
          <button disabled>⏳ Añadir código de promoción (próximamente)</button>
        </div>
        <div className="linea-precio total">
          <span>Total a pagar hoy</span>
          <span>{formatoCOP.format(precio)}</span>
        </div>
      </div>

      {/* 👉 Botón de pago con PayPal */}
      <div className="paypal-buttons">
        <h3>Paga con PayPal</h3>
        <PayPalButtons
          style={{ layout: "vertical" }}
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: (precio / 4000).toFixed(2), // 🔵 Aquí aseguras el valor en dólares
                    currency_code: "USD",
                  }
                }
              ]
            });
          }}
          onApprove={(data, actions) => {
            return actions.order.capture().then((details) => {
              handleAprobacionPayPal(details);
            });
          }}
        />
      </div>
    </div>
  );
};

export default FormularioCompra;
