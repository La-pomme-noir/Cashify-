import { useState } from 'react';
import { db, auth } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { jsPDF } from 'jspdf';

const DebtSimulator = () => {
  const [debtAmount, setDebtAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [term, setTerm] = useState('');
  const [results, setResults] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const calculateDebt = () => {
    const principal = parseFloat(debtAmount);
    const rate = parseFloat(interestRate) / 100 / 12; // Tasa mensual
    const months = parseFloat(term) * 12;

    if (isNaN(principal) || isNaN(rate) || isNaN(months) || principal <= 0 || rate <= 0 || months <= 0) {
      alert('Por favor, ingresa valores válidos y positivos.');
      return;
    }

    const monthlyPayment = (principal * rate * Math.pow(1 + rate, months)) / (Math.pow(1 + rate, months) - 1);
    const totalPayment = monthlyPayment * months;
    const totalInterest = totalPayment - principal;

    const monthlyData = [];
    let remainingBalance = principal;
    for (let month = 1; month <= months; month++) {
      const interest = remainingBalance * rate;
      const principalPayment = monthlyPayment - interest;
      remainingBalance -= principalPayment;
      monthlyData.push({ month, remainingBalance: remainingBalance.toFixed(2), interest: interest.toFixed(2) });
    }

    setResults({
      monthlyPayment: monthlyPayment.toFixed(2),
      totalPayment: totalPayment.toFixed(2),
      totalInterest: totalInterest.toFixed(2),
      monthlyData,
      suggestion: totalInterest > principal * 0.5 ? 'Considera pagar más cada mes para reducir los intereses.' : 'Tu plan de pago es razonable.',
    });
  };

  const saveToFirebase = async () => {
    if (!results) return;
    try {
      await addDoc(collection(db, 'debtCalculations'), {
        userId: auth.currentUser.uid,
        debtAmount,
        interestRate,
        term,
        monthlyPayment: results.monthlyPayment,
        totalPayment: results.totalPayment,
        totalInterest: results.totalInterest,
        monthlyData: results.monthlyData,
        timestamp: new Date(),
      });
      alert('Cálculo guardado exitosamente.');
    } catch (error) {
      console.error('Error al guardar en Firebase:', error);
      alert('Error al guardar el cálculo.');
    }
  };

  const downloadPDF = () => {
    if (!results) return;
    const doc = new jsPDF();
    doc.text('Reporte de Simulador de Deudas', 10, 10);
    doc.text(`Monto de la Deuda: $${debtAmount}`, 10, 20);
    doc.text(`Tasa de Interés: ${interestRate}% anual`, 10, 30);
    doc.text(`Plazo: ${term} años`, 10, 40);
    doc.text(`Pago Mensual: $${results.monthlyPayment}`, 10, 50);
    doc.text(`Total Pagado: $${results.totalPayment}`, 10, 60);
    doc.text(`Intereses Totales: $${results.totalInterest}`, 10, 70);
    doc.text(`Sugerencia: ${results.suggestion}`, 10, 80);

    let yPosition = 90;
    results.monthlyData.forEach((data, index) => {
      if (index < 10) { // Limitar para no exceder el tamaño del PDF
        doc.text(`Mes ${data.month}: Saldo Restante $${data.remainingBalance}, Interés $${data.interest}`, 10, yPosition + (index * 10));
      }
    });

    doc.save('debt-report.pdf');
  };

  return {
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
  };
};

export default DebtSimulator;