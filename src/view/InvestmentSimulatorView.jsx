import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale } from 'chart.js';
import ResultsModal from '../components/ResultsModal';

ChartJS.register(LineElement, PointElement, LinearScale, Title, Tooltip, Legend, CategoryScale);

const InvestmentSimulatorView = ({
  initialAmount,
  setInitialAmount,
  interestRate,
  setInterestRate,
  duration,
  setDuration,
  investmentType,
  setInvestmentType,
  results,
  calculateInvestment,
  saveToFirebase,
  downloadPDF,
  showModal,
  setShowModal,
}) => {
  const chartData = results
    ? {
        labels: results.yearlyData.map(data => `Año ${data.year}`),
        datasets: [
          {
            label: 'Crecimiento del Capital',
            data: results.yearlyData.map(data => data.amount),
            borderColor: 'rgba(68, 207, 108, 1)', // --emerald
            backgroundColor: 'rgba(68, 207, 108, 0.2)',
            fill: true,
          },
        ],
      }
    : null;

  return (
    <div id='inversion' className="simulator shadow-cards">
      <h2 className="titles-sections">Simulador de Inversión</h2>
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
          <label>Tasa de Interés (% anual):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Ej. 5"
            min="0"
            step="0.1"
          />
        </div>
        <div className="form-group">
          <label>Duración (años):</label>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            placeholder="Ej. 10"
            min="1"
          />
        </div>
        <div className="form-group">
          <label>Tipo de Inversión:</label>
          <select value={investmentType} onChange={(e) => setInvestmentType(e.target.value)}>
            <option value="simple">Interés Simple</option>
            <option value="compound">Interés Compuesto</option>
          </select>
        </div>
        <button className="simulator__button" onClick={calculateInvestment}>
          Calcular
        </button>
      </div>

      {results && (
        <div className="simulator__results">
          <h3>Resultado: ${results.finalAmount}</h3>
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
              data={results.yearlyData}
              columns={['Año', 'Monto ($)', 'Interés Acumulado ($)']}
              onClose={() => setShowModal(false)}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default InvestmentSimulatorView;