import React from "react";

const ConferenceTable = () => (
  <section className="dashboard__section">
    <h2 className="section-title">Próximas conferencias</h2>
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
    </div> /* Fin conference-table-container */
  </section>
);

export default ConferenceTable;
