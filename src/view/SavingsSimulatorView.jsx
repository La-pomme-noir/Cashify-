import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import ResultsModal from '../components/ResultsModal';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const SavingsSimulatorView = ({
  initialAmount,
  setInitialAmount,
  periodicContribution,
  setPeriodicContribution,
  duration,
  setDuration,
  interestRate,
  setInterestRate,
  results,
  calculateSavings,
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
            label: 'Evolución del Ahorro',
            data: results.monthlyData.map(data => data.amount),
            borderColor: 'rgba(169, 253, 172, 1)', // --lightgreen
            backgroundColor: 'rgba(169, 253, 172, 0.2)',
            fill: true,
          },
        ],
      }
    : null;

  return (
    <div id='ahorro' className="simulator shadow-cards">
      <h2 className="titles-sections">Simulador de Ahorros</h2>
      <div className="simulator__form">
        <div className="form-group">
          <label>Monto Inicial ($):</label>
          <input
            type="number"
            value={initialAmount}
            onChange={(e) => setInitialAmount(e.target.value)}
            placeholder="Ej. 1000"
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Aporte Mensual ($):</label>
          <input
            type="number"
            value={periodicContribution}
            onChange={(e) => setPeriodicContribution(e.target.value)}
            placeholder="Ej. 100"
            min="0"
          />
        </div>
        <div className="form-group">
          <label>Duración (años):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Ej. 5"
            min="1"
          />
        </div>
        <div className="form-group">
          <label>Tasa de Interés (% anual):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Ej. 3"
            min="0"
            step="0.1"
          />
        </div>
        <button className="simulator__button" onClick={calculateSavings}>
          Calcular
        </button>
      </div>

      {results && (
        <div className="simulator__results">
          <h3>Monto Final: ${results.finalAmount}</h3>
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
              columns={['Mes', 'Monto ($)']}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SavingsSimulatorView;