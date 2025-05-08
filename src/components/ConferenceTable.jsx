import React from "react";
import "../styles/Dashboard-conferences.css"; // asegúrate que esté importado

const ConferenceTable = () => (
  <section className="shadow-cards contenedor">
    <h2 className="titles-sections">Próximas Conferencias</h2>

    <div className="conference-table-container">
      <table className="conference-table">
        <thead>
          <tr>
            <th>Fecha</th>
            <th>Título</th>
            <th>Descripción</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>10 Abril</td>
            <td>Fintech & IA</td>
            <td>Descubre el futuro de las finanzas inteligentes.</td>
          </tr>
          <tr>
            <td>15 Abril</td>
            <td>Ciberseguridad</td>
            <td>Protegiendo datos en el nuevo mundo digital.</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
);

export default ConferenceTable;
