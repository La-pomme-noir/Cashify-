import { useState } from 'react';
import { db, auth } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { jsPDF } from 'jspdf';

const SavingsSimulator = () => {
  const [initialAmount, setInitialAmount] = useState('');
  const [periodicContribution, setPeriodicContribution] = useState('');
  const [duration, setDuration] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [results, setResults] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const calculateSavings = () => {
    const initial = parseFloat(initialAmount) || 0;
    const contribution = parseFloat(periodicContribution) || 0;
    const rate = parseFloat(interestRate) / 100 / 12; // Tasa mensual
    const months = parseFloat(duration) * 12;

    if (isNaN(initial) || isNaN(contribution) || isNaN(rate) || isNaN(months) || months <= 0) {
      alert('Por favor, ingresa valores válidos y positivos.');
      return;
    }

    const monthlyData = [];
    let currentAmount = initial;
    for (let month = 1; month <= months; month++) {
      currentAmount = currentAmount * (1 + rate) + contribution;
      monthlyData.push({ month, amount: currentAmount.toFixed(2) });
    }

    setResults({ finalAmount: currentAmount.toFixed(2), monthlyData });
  };

  const saveToFirebase = async () => {
    if (!results) return;
    try {
      await addDoc(collection(db, 'savingsCalculations'), {
        userId: auth.currentUser.uid,
        initialAmount,
        periodicContribution,
        duration,
        interestRate,
        finalAmount: results.finalAmount,
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
    doc.text('Reporte de Simulador de Ahorros', 10, 10);
    doc.text(`Monto Inicial: $${initialAmount}`, 10, 20);
    doc.text(`Aporte Mensual: $${periodicContribution}`, 10, 30);
    doc.text(`Tasa de Interés: ${interestRate}% anual`, 10, 40);
    doc.text(`Duración: ${duration} años`, 10, 50);
    doc.text(`Monto Final: $${results.finalAmount}`, 10, 60);

    let yPosition = 70;
    results.monthlyData.forEach((data, index) => {
      if (index < 10) { // Limitar para no exceder el tamaño del PDF
        doc.text(`Mes ${data.month}: $${data.amount}`, 10, yPosition + (index * 10));
      }
    });

    doc.save('savings-report.pdf');
  };

  return {
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
  };
};

export default SavingsSimulator;