import { useState, useEffect } from 'react';
import { db, auth } from '../services/firebase';
import { collection, addDoc, getDocs, query, where } from 'firebase/firestore';

const PlanningLogic = () => {
  // Estados para los objetivos financieros
  const [goalDescription, setGoalDescription] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [goalTimeframe, setGoalTimeframe] = useState('short');
  const [goals, setGoals] = useState([]);

  // Estados para ingresos y gastos
  const [transactionType, setTransactionType] = useState('income');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionCategory, setTransactionCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [transactions, setTransactions] = useState([]);

  // Estados para notas de planificación
  const [noteContent, setNoteContent] = useState('');
  const [noteCategory, setNoteCategory] = useState('');
  const [notePaymentMethod, setNotePaymentMethod] = useState('');
  const [notes, setNotes] = useState([]);

  // Estados para cálculos y balances
  const [totalIncome, setTotalIncome] = useState(0);
  const [totalExpenses, setTotalExpenses] = useState(0);
  const [suggestion, setSuggestion] = useState('');

  // Cargar datos de Firebase al montar el componente
  useEffect(() => {
    const fetchData = async () => {
      if (!auth.currentUser) return;

      try {
        // Cargar objetivos financieros
        const goalsQuery = query(
          collection(db, 'financialGoals'),
          where('userId', '==', auth.currentUser.uid)
        );
        const goalsSnapshot = await getDocs(goalsQuery);
        const goalsList = goalsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setGoals(goalsList);

        // Cargar transacciones
        const transactionsQuery = query(
          collection(db, 'transactions'),
          where('userId', '==', auth.currentUser.uid)
        );
        const transactionsSnapshot = await getDocs(transactionsQuery);
        const transactionsList = transactionsSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setTransactions(transactionsList);

        // Cargar notas de planificación
        const notesQuery = query(
          collection(db, 'planningNotes'),
          where('userId', '==', auth.currentUser.uid)
        );
        const notesSnapshot = await getDocs(notesQuery);
        const notesList = notesSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        }));
        setNotes(notesList);
      } catch (error) {
        console.error('Error al cargar datos:', error.message);
      }
    };

    fetchData();
  }, []);

  // Calcular balances y sugerencias cada vez que cambien las transacciones
  useEffect(() => {
    const income = transactions
      .filter(t => t.type === 'income')
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);
    const expenses = transactions
      .filter(t => t.type === 'expense')
      .reduce((sum, t) => sum + parseFloat(t.amount), 0);

    setTotalIncome(income);
    setTotalExpenses(expenses);

    // Generar sugerencia automática
    if (income > 0) {
      const savingsPercentage = 20;
      const suggestedSavings = (income * savingsPercentage) / 100;
      const remaining = income - expenses;
      if (remaining < suggestedSavings) {
        setSuggestion(
          `Te sugerimos ahorrar al menos $${suggestedSavings.toFixed(2)} (20% de tus ingresos). Considera reducir gastos en categorías no esenciales.`
        );
      } else {
        setSuggestion(
          `¡Buen trabajo! Tienes un excedente de $${remaining.toFixed(2)} después de gastos. Considera ahorrar o invertir este monto.`
        );
      }
    }
  }, [transactions]);

  // Guardar un objetivo financiero
  const saveGoal = async () => {
    if (!goalDescription || !goalAmount || !goalTimeframe) {
      alert('Por favor, completa todos los campos del objetivo.');
      return;
    }

    try {
      const newGoal = {
        userId: auth.currentUser.uid,
        description: goalDescription,
        amount: parseFloat(goalAmount).toFixed(2),
        timeframe: goalTimeframe,
        progress: 0,
        timestamp: new Date(),
      };

      const docRef = await addDoc(collection(db, 'financialGoals'), newGoal);
      setGoals([...goals, { id: docRef.id, ...newGoal }]);

      // Crear una nota de planificación automáticamente
      const note = {
        userId: auth.currentUser.uid,
        content: `Objetivo financiero creado: ${goalDescription} - $${goalAmount} (${goalTimeframe} plazo)`,
        category: 'planning',
        paymentMethod: 'N/A',
        timestamp: new Date(),
      };
      const noteRef = await addDoc(collection(db, 'planningNotes'), note);
      setNotes([...notes, { id: noteRef.id, ...note }]);

      setGoalDescription('');
      setGoalAmount('');
      setGoalTimeframe('short');
    } catch (error) {
      console.error('Error al guardar el objetivo:', error.message);
      alert('Error al guardar el objetivo.');
    }
  };

  // Guardar una transacción
  const saveTransaction = async () => {
    if (!transactionAmount || !transactionCategory || !paymentMethod) {
      alert('Por favor, completa todos los campos de la transacción.');
      return;
    }

    try {
      const newTransaction = {
        userId: auth.currentUser.uid,
        type: transactionType,
        amount: parseFloat(transactionAmount).toFixed(2),
        category: transactionCategory,
        paymentMethod,
        timestamp: new Date(),
      };

      const docRef = await addDoc(collection(db, 'transactions'), newTransaction);
      setTransactions([...transactions, { id: docRef.id, ...newTransaction }]);

      // Crear una nota de planificación automáticamente
      const note = {
        userId: auth.currentUser.uid,
        content: `${transactionType === 'income' ? 'Ingreso' : 'Gasto'} registrado: $${transactionAmount} en ${transactionCategory} (método: ${paymentMethod})`,
        category: transactionType === 'income' ? 'income' : transactionCategory,
        paymentMethod,
        timestamp: new Date(),
      };
      const noteRef = await addDoc(collection(db, 'planningNotes'), note);
      setNotes([...notes, { id: noteRef.id, ...note }]);

      setTransactionAmount('');
      setTransactionCategory('');
      setPaymentMethod('');
    } catch (error) {
      console.error('Error al guardar la transacción:', error.message);
      alert('Error al guardar la transacción.');
    }
  };

  // Guardar una nota de planificación manualmente
  const saveNote = async () => {
    if (!noteContent || !noteCategory || !notePaymentMethod) {
      alert('Por favor, completa todos los campos de la nota.');
      return;
    }

    try {
      const newNote = {
        userId: auth.currentUser.uid,
        content: noteContent,
        category: noteCategory,
        paymentMethod: notePaymentMethod,
        timestamp: new Date(),
      };

      const docRef = await addDoc(collection(db, 'planningNotes'), newNote);
      setNotes([...notes, { id: docRef.id, ...newNote }]);

      setNoteContent('');
      setNoteCategory('');
      setNotePaymentMethod('');
    } catch (error) {
      console.error('Error al guardar la nota:', error.message);
      alert('Error al guardar la nota.');
    }
  };

  return {
    // Estados y funciones para objetivos
    goalDescription,
    setGoalDescription,
    goalAmount,
    setGoalAmount,
    goalTimeframe,
    setGoalTimeframe,
    goals,
    saveGoal,

    // Estados y funciones para transacciones
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

    // Estados y funciones para notas
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
  };
};

export default PlanningLogic;