import { useState } from 'react';
import { db, auth } from '../services/firebase';
import { collection, addDoc } from 'firebase/firestore';
import { jsPDF } from 'jspdf';

const InvestmentSimulator = () => {
  const [initialAmount, setInitialAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [duration, setDuration] = useState('');
  const [investmentType, setInvestmentType] = useState('simple');
  const [results, setResults] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const calculateInvestment = () => {
    const principal = parseFloat(initialAmount);
    const rate = parseFloat(interestRate) / 100;
    const time = parseFloat(duration);

    if (isNaN(principal) || isNaN(rate) || isNaN(time) || principal <= 0 || rate <= 0 || time <= 0) {
      alert('Por favor, ingresa valores válidos y positivos.');
      return;
    }

    let finalAmount = 0;
    const yearlyData = [];
    let currentAmount = principal;

    if (investmentType === 'simple') {
      for (let year = 1; year <= time; year++) {
        const interest = principal * rate * year;
        finalAmount = principal + interest;
        yearlyData.push({ year, amount: finalAmount });
      }
    } else if (investmentType === 'compound') {
      for (let year = 1; year <= time; year++) {
        currentAmount = currentAmount * (1 + rate);
        yearlyData.push({ year, amount: currentAmount });
      }
      finalAmount = currentAmount;
    }

    setResults({ finalAmount: finalAmount.toFixed(2), yearlyData });
  };

  const saveToFirebase = async () => {
    if (!results) return;
    try {
      await addDoc(collection(db, 'investmentCalculations'), {
        userId: auth.currentUser.uid,
        initialAmount,
        interestRate,
        duration,
        investmentType,
        finalAmount: results.finalAmount,
        yearlyData: results.yearlyData,
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
    doc.text('Reporte de Simulador de Inversión', 10, 10);
    doc.text(`Monto Inicial: $${initialAmount}`, 10, 20);
    doc.text(`Tasa de Interés: ${interestRate}%`, 10, 30);
    doc.text(`Duración: ${duration} años`, 10, 40);
    doc.text(`Tipo de Inversión: ${investmentType === 'simple' ? 'Interés Simple' : 'Interés Compuesto'}`, 10, 50);
    doc.text(`Monto Final: $${results.finalAmount}`, 10, 60);

    let yPosition = 70;
    results.yearlyData.forEach((data, index) => {
      doc.text(`Año ${data.year}: $${data.amount.toFixed(2)}`, 10, yPosition + (index * 10));
    });

    doc.save('investment-report.pdf');
  };

  return {
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
  };
};

export default InvestmentSimulator;