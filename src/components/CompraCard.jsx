import React from "react";
import { useNavigate } from "react-router-dom";

const CompraCard = ({ plan }) => {
  const navigate = useNavigate();

  const handleCompra = () => {
    navigate("/formulario-compra", { state: { planSeleccionado: plan } });
  };

  return (
    <div className="compra-card">
      <h2>Resumen del Plan</h2>
      <p>Has seleccionado el <strong>{plan}</strong>. Finaliza tu compra a continuación.</p>
      <button onClick={handleCompra}>
        Comprar ahora
      </button>
    </div>
  );
};

export default CompraCard;
