import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import ResultsModal from '../components/ResultsModal';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const DebtSimulatorView = ({
  debtAmount,
  setDebtAmount,
  interestRate,
  setInterestRate,
  term,
  setTerm,
  results,
  calculateDebt,
  saveToFirebase,
  downloadPDF,
  showModal,
  setShowModal,
}) => {
  const chartData = results
    ? {
        labels: results.monthlyData.map(data => `Mes ${data.month}`),
        datasets: [
          {
            label: 'Saldo Restante',
            data: results.monthlyData.map(data => data.remainingBalance),
            borderColor: 'rgba(220, 53, 69, 1)', // --rojo
            backgroundColor: 'rgba(220, 53, 69, 0.2)',
            fill: true,
          },
        ],
      }
    : null;

  return (
    <div id='deudas' className="simulator shadow-cards">
      <h2 className="titles-sections">Simulador de Deudas</h2>
      <div className="simulator__form">
        <div className="form-group">
          <label>Monto de la Deuda ($):</label>
          <input
            type="number"
            value={debtAmount}
            onChange={(e) => setDebtAmount(e.target.value)}
            placeholder="Ej. 5000"
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Tasa de Interés (% anual):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Ej. 10"
            min="0"
            step="0.1"
          />
        </div>
        <div className="form-group">
          <label>Plazo (años):</label>
          <input
            type="number"
            value={term}
            onChange={(e) => setTerm(e.target.value)}
            placeholder="Ej. 3"
            min="1"
          />
        </div>
        <button className="simulator__button" onClick={calculateDebt}>
          Calcular
        </button>
      </div>

      {results && (
        <div className="simulator__results">
          <h3>Pago Mensual: ${results.monthlyPayment}</h3>
          <p>Total Pagado: ${results.totalPayment}</p>
          <p>Intereses Totales: ${results.totalInterest}</p>
          <p>Sugerencia: {results.suggestion}</p>
          <div className="simulator__chart">
            {chartData && <Line data={chartData} />}
          </div>
          <div className="simulator__actions">
            <button className="simulator__action-button" onClick={() => setShowModal(true)}>
              Ver Detalles
            </button>
            <button className="simulator__action-button" onClick={saveToFirebase}>
              Guardar Cálculo
            </button>
            <button className="simulator__action-button" onClick={downloadPDF}>
              Descargar PDF
            </button>
          </div>
          {showModal && (
            <ResultsModal
              data={results.monthlyData}
              columns={['Mes', 'Saldo Restante ($)', 'Interés Mensual ($)']}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default DebtSimulatorView;