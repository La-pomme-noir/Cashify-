import React from 'react';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(BarElement, CategoryScale, LinearScale, ArcElement, Tooltip, Legend);

const PlanningView = ({
  // Objetivos
  goalDescription,
  setGoalDescription,
  goalAmount,
  setGoalAmount,
  goalTimeframe,
  setGoalTimeframe,
  goals,
  saveGoal,

  // Transacciones
  transactionType,
  setTransactionType,
  transactionAmount,
  setTransactionAmount,
  transactionCategory,
  setTransactionCategory,
  paymentMethod,
  setPaymentMethod,
  transactions,
  saveTransaction,

  // Notas
  noteContent,
  setNoteContent,
  noteCategory,
  setNoteCategory,
  notePaymentMethod,
  setNotePaymentMethod,
  notes,
  saveNote,

  // Datos calculados
  totalIncome,
  totalExpenses,
  suggestion,
}) => {
  // Gráfico de progreso de objetivos
  const goalsChartData = {
    labels: goals.map(goal => goal.description),
    datasets: [
      {
        label: 'Progreso hacia el objetivo ($)',
        data: goals.map(goal => goal.progress),
        backgroundColor: 'rgba(68, 207, 108, 0.6)', // --emerald
        borderColor: 'rgba(68, 207, 108, 1)',
        borderWidth: 1,
      },
      {
        label: 'Monto objetivo ($)',
        data: goals.map(goal => goal.amount),
        backgroundColor: 'rgba(169, 253, 172, 0.6)', // --lightgreen
        borderColor: 'rgba(169, 253, 172, 1)',
        borderWidth: 1,
      },
    ],
  };

  // Gráfico de ingresos vs gastos
  const incomeExpenseChartData = {
    labels: ['Ingresos', 'Gastos'],
    datasets: [
      {
        data: [totalIncome, totalExpenses],
        backgroundColor: ['rgba(68, 207, 108, 0.6)', 'rgba(220, 53, 69, 0.6)'], // --emerald y --rojo
        borderColor: ['rgba(68, 207, 108, 1)', 'rgba(220, 53, 69, 1)'],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="planning">
      <h1 className="titles-sections">Planificación Financiera</h1>

      {/* Sección de objetivos financieros */}
      <section className="planning__section shadow-cards">
        <h2 className="planning__title">Definir Objetivos Financieros</h2>
        <div className="planning__form">
          <div className="form-group">
            <label>Descripción del objetivo:</label>
            <input
              type="text"
              value={goalDescription}
              onChange={(e) => setGoalDescription(e.target.value)}
              placeholder="Ej. Comprar un auto"
            />
          </div>
          <div className="form-group">
            <label>Monto necesario ($):</label>
            <input
              type="number"
              value={goalAmount}
              onChange={(e) => setGoalAmount(e.target.value)}
              placeholder="Ej. 15000"
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Plazo:</label>
            <select value={goalTimeframe} onChange={(e) => setGoalTimeframe(e.target.value)}>
              <option value="short">Corto plazo (1 año)</option>
              <option value="medium">Mediano plazo (1-5 años)</option>
              <option value="long">Largo plazo (5+ años)</option>
            </select>
          </div>
          <button className="planning__button" onClick={saveGoal}>
            Guardar Objetivo
          </button>
        </div>

        {goals.length > 0 && (
          <div className="planning__results">
            <h3>Progreso de tus objetivos</h3>
            <div className="planning__chart">
              <Bar data={goalsChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
            <ul className="planning__goals-list">
              {goals.map(goal => (
                <li key={goal.id} className="planning__goal-item">
                  <span>{goal.description}</span>
                  <span>Monto: ${goal.amount}</span>
                  <span>Plazo: {goal.timeframe}</span>
                  <span>Progreso: ${goal.progress}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>

      {/* Sección de registro de transacciones */}
      <section className="planning__section shadow-cards">
        <h2 className="planning__title">Registro de Ingresos y Gastos</h2>
        <div className="planning__form">
          <div className="form-group">
            <label>Tipo:</label>
            <select value={transactionType} onChange={(e) => setTransactionType(e.target.value)}>
              <option value="income">Ingreso</option>
              <option value="expense">Gasto</option>
            </select>
          </div>
          <div className="form-group">
            <label>Monto ($):</label>
            <input
              type="number"
              value={transactionAmount}
              onChange={(e) => setTransactionAmount(e.target.value)}
              placeholder="Ej. 500"
              min="0"
            />
          </div>
          <div className="form-group">
            <label>Categoría:</label>
            <select
              value={transactionCategory}
              onChange={(e) => setTransactionCategory(e.target.value)}
            >
              <option value="">Selecciona una categoría</option>
              {transactionType === 'income' ? (
                <>
                  <option value="salary">Salario</option>
                  <option value="freelance">Freelance</option>
                  <option value="other">Otros ingresos</option>
                </>
              ) : (
                <>
                  <option value="food">Alimentación</option>
                  <option value="transport">Transporte</option>
                  <option value="entertainment">Entretenimiento</option>
                  <option value="savings">Ahorro</option>
                  <option value="other">Otros gastos</option>
                </>
              )}
            </select>
          </div>
          <div className="form-group">
            <label>Método de pago:</label>
            <select value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)}>
              <option value="">Selecciona un método</option>
              <option value="cash">Efectivo</option>
              <option value="card">Tarjeta</option>
              <option value="transfer">Transferencia</option>
            </select>
          </div>
          <button className="planning__button" onClick={saveTransaction}>
            Registrar Transacción
          </button>
        </div>

        {transactions.length > 0 && (
          <div className="planning__results">
            <h3>Balance General</h3>
            <div className="planning__summary">
              <p>Ingresos Totales: <span className="planning__highlight--income">${totalIncome.toFixed(2)}</span></p>
              <p>Gastos Totales: <span className="planning__highlight--expense">${totalExpenses.toFixed(2)}</span></p>
              <p>Saldo: <span className={totalIncome - totalExpenses >= 0 ? 'planning__highlight--positive' : 'planning__highlight--negative'}>
                ${(totalIncome - totalExpenses).toFixed(2)}
              </span></p>
              {suggestion && <p className="planning__suggestion">{suggestion}</p>}
            </div>
            <div className="planning__chart">
              <Doughnut data={incomeExpenseChartData} options={{ responsive: true, maintainAspectRatio: false }} />
            </div>
            <h3>Transacciones Recientes</h3>
            <table className="planning__table">
              <thead>
                <tr>
                  <th>Tipo</th>
                  <th>Monto</th>
                  <th>Categoría</th>
                  <th>Método de Pago</th>
                  <th>Fecha</th>
                </tr>
              </thead>
              <tbody>
                {transactions.slice(0, 5).map(t => (
                  <tr key={t.id}>
                    <td>{t.type === 'income' ? 'Ingreso' : 'Gasto'}</td>
                    <td>${t.amount}</td>
                    <td>{t.category}</td>
                    <td>{t.paymentMethod}</td>
                    <td>{new Date(t.timestamp.seconds * 1000).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>

      {/* Sección de notas de planificación */}
      <section className="planning__section shadow-cards">
        <h2 className="planning__title">Notas de Planificación</h2>
        <div className="planning__form">
          <div className="form-group">
            <label>Contenido de la nota:</label>
            <textarea
              value={noteContent}
              onChange={(e) => setNoteContent(e.target.value)}
              placeholder="Escribe una nota de planificación..."
              rows="4"
            />
          </div>
          <div className="form-group">
            <label>Categoría:</label>
            <select value={noteCategory} onChange={(e) => setNoteCategory(e.target.value)}>
              <option value="">Selecciona una categoría</option>
              <option value="payment">Pago</option>
              <option value="savings">Ahorro</option>
              <option value="investment">Inversión</option>
              <option value="planning">Planificación</option>
              <option value="income">Ingreso</option>
              <option value="other">Otro</option>
            </select>
          </div>
          <div className="form-group">
            <label>Método de pago (si aplica):</label>
            <select value={notePaymentMethod} onChange={(e) => setNotePaymentMethod(e.target.value)}>
              <option value="">Selecciona un método</option>
              <option value="cash">Efectivo</option>
              <option value="card">Tarjeta</option>
              <option value="transfer">Transferencia</option>
              <option value="N/A">N/A</option>
            </select>
          </div>
          <button className="planning__button" onClick={saveNote}>
            Guardar Nota
          </button>
        </div>

        {notes.length > 0 && (
          <div className="planning__results">
            <h3>Notas Recientes</h3>
            <ul className="planning__notes-list">
              {notes.slice(0, 5).map(note => (
                <li key={note.id} className="planning__note-item">
                  <p>{note.content}</p>
                  <p><strong>Categoría:</strong> {note.category}</p>
                  <p><strong>Método de pago:</strong> {note.paymentMethod}</p>
                  <p><em>{new Date(note.timestamp.seconds * 1000).toLocaleString()}</em></p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </section>
    </div>
  );
};

export default PlanningView;