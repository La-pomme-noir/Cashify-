// src/components/PlanningLogic.jsx
import { useState, useEffect } from 'react';
import { db, auth } from '../services/firebase';
import { collection, addDoc, getDocs, query, where, deleteDoc, doc, updateDoc } from 'firebase/firestore';

const PlanningLogic = () => {
  // Estados para los objetivos financieros
  const [goalDescription, setGoalDescription] = useState('');
  const [goalAmount, setGoalAmount] = useState('');
  const [goalTimeframe, setGoalTimeframe] = useState('short');
  const [goalPaymentMethod, setGoalPaymentMethod] = useState('');
  const [goals, setGoals] = useState([]);
  const [editingGoal, setEditingGoal] = useState(null);

  // Estados para ingresos y gastos
  const [transactionType, setTransactionType] = useState('income');
  const [transactionAmount, setTransactionAmount] = useState('');
  const [transactionCategory, setTransactionCategory] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [selectedGoalId, setSelectedGoalId] = useState('');
  const [transactions, setTransactions] = useState([]);
  const [editingTransaction, setEditingTransaction] = useState(null);

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
    if (!goalDescription || !goalAmount || !goalTimeframe || !goalPaymentMethod) {
      alert('Por favor, completa todos los campos del objetivo.');
      return;
    }

    try {
      const newGoal = {
        userId: auth.currentUser.uid,
        description: goalDescription,
        amount: parseFloat(goalAmount).toFixed(2),
        timeframe: goalTimeframe,
        progress: "0.00",
        paymentMethod: goalPaymentMethod,
        timestamp: new Date(),
      };

      let docRef;
      if (editingGoal) {
        // Actualizar objetivo existente
        docRef = doc(db, 'financialGoals', editingGoal.id);
        await updateDoc(docRef, newGoal);
        setGoals(goals.map(g => (g.id === editingGoal.id ? { id: editingGoal.id, ...newGoal } : g)));
        setEditingGoal(null);
      } else {
        // Crear nuevo objetivo
        docRef = await addDoc(collection(db, 'financialGoals'), newGoal);
        setGoals([...goals, { id: docRef.id, ...newGoal }]);
      }

      // Crear una nota de planificación
      const note = {
        userId: auth.currentUser.uid,
        content: editingGoal
          ? `Objetivo actualizado: "${goalDescription}" por $${goalAmount} a ${goalTimeframe} plazo, método de pago: ${goalPaymentMethod}`
          : `Nuevo objetivo financiero: "${goalDescription}" por $${goalAmount} a ${goalTimeframe} plazo, método de pago: ${goalPaymentMethod}`,
        category: 'planning',
        paymentMethod: goalPaymentMethod,
        timestamp: new Date(),
      };
      const noteRef = await addDoc(collection(db, 'planningNotes'), note);
      setNotes([...notes, { id: noteRef.id, ...note }]);

      // Resetear formulario
      setGoalDescription('');
      setGoalAmount('');
      setGoalTimeframe('short');
      setGoalPaymentMethod('');
    } catch (error) {
      console.error('Error al guardar el objetivo:', error.message);
      alert('Error al guardar el objetivo.');
    }
  };

  // Eliminar un objetivo
  const deleteGoal = async (goalId) => {
    try {
      await deleteDoc(doc(db, 'financialGoals', goalId));
      setGoals(goals.filter(goal => goal.id !== goalId));

      const goal = goals.find(g => g.id === goalId);
      const note = {
        userId: auth.currentUser.uid,
        content: `Objetivo eliminado: "${goal.description}" por $${goal.amount}`,
        category: 'planning',
        paymentMethod: 'N/A',
        timestamp: new Date(),
      };
      const noteRef = await addDoc(collection(db, 'planningNotes'), note);
      setNotes([...notes, { id: noteRef.id, ...note }]);
    } catch (error) {
      console.error('Error al eliminar el objetivo:', error.message);
      alert('Error al eliminar el objetivo.');
    }
  };

  // Editar un objetivo
  const editGoal = (goal) => {
    setEditingGoal(goal);
    setGoalDescription(goal.description);
    setGoalAmount(goal.amount);
    setGoalTimeframe(goal.timeframe);
    setGoalPaymentMethod(goal.paymentMethod);
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
        goalId: transactionCategory === 'goal' ? selectedGoalId : null,
        timestamp: new Date(),
      };

      let docRef;
      if (editingTransaction) {
        // Actualizar transacción existente
        docRef = doc(db, 'transactions', editingTransaction.id);
        await updateDoc(docRef, newTransaction);
        setTransactions(transactions.map(t => (t.id === editingTransaction.id ? { id: editingTransaction.id, ...newTransaction } : t)));
        setEditingTransaction(null);
      } else {
        // Crear nueva transacción
        docRef = await addDoc(collection(db, 'transactions'), newTransaction);
        setTransactions([...transactions, { id: docRef.id, ...newTransaction }]);
      }

      // Crear una nota de planificación
      let noteContent = editingTransaction
        ? `${transactionType === 'income' ? 'Ingreso' : 'Gasto'} actualizado: $${transactionAmount} en ${transactionCategory} (método: ${paymentMethod})`
        : `${transactionType === 'income' ? 'Ingreso' : 'Gasto'} registrado: $${transactionAmount} en ${transactionCategory} (método: ${paymentMethod})`;
      if (transactionCategory === 'goal' && selectedGoalId) {
        const goal = goals.find(g => g.id === selectedGoalId);
        if (goal) {
          noteContent += `, destinado al objetivo "${goal.description}"`;
        }
      }

      const note = {
        userId: auth.currentUser.uid,
        content: noteContent,
        category: transactionType === 'income' ? 'income' : transactionCategory,
        paymentMethod,
        timestamp: new Date(),
      };
      const noteRef = await addDoc(collection(db, 'planningNotes'), note);
      setNotes([...notes, { id: noteRef.id, ...note }]);

      // Actualizar progreso del objetivo si es un ingreso destinado a un objetivo
      if (transactionType === 'income' && transactionCategory === 'goal' && selectedGoalId) {
        const goal = goals.find(g => g.id === selectedGoalId);
        if (goal) {
          const currentProgress = parseFloat(goal.progress || 0);
          const newProgress = editingTransaction
            ? currentProgress - parseFloat(editingTransaction.amount) + parseFloat(transactionAmount)
            : currentProgress + parseFloat(transactionAmount);
          const updatedGoal = { ...goal, progress: newProgress.toFixed(2) };

          await updateDoc(doc(db, 'financialGoals', selectedGoalId), {
            progress: newProgress.toFixed(2),
          });

          setGoals(goals.map(g => (g.id === selectedGoalId ? updatedGoal : g)));
        }
      }

      // Resetear formulario
      setTransactionAmount('');
      setTransactionCategory('');
      setPaymentMethod('');
      setSelectedGoalId('');
    } catch (error) {
      console.error('Error al guardar la transacción:', error.message);
      alert('Error al guardar la transacción.');
    }
  };

  // Eliminar una transacción
  const deleteTransaction = async (transactionId) => {
    try {
      const transaction = transactions.find(t => t.id === transactionId);
      await deleteDoc(doc(db, 'transactions', transactionId));
      setTransactions(transactions.filter(t => t.id !== transactionId));

      // Revertir el progreso del objetivo si la transacción estaba asociada a uno
      if (transaction.type === 'income' && transaction.category === 'goal' && transaction.goalId) {
        const goal = goals.find(g => g.id === transaction.goalId);
        if (goal) {
          const currentProgress = parseFloat(goal.progress || 0);
          const newProgress = Math.max(0, currentProgress - parseFloat(transaction.amount));
          const updatedGoal = { ...goal, progress: newProgress.toFixed(2) };

          await updateDoc(doc(db, 'financialGoals', transaction.goalId), {
            progress: newProgress.toFixed(2),
          });

          setGoals(goals.map(g => (g.id === transaction.goalId ? updatedGoal : g)));
        }
      }

      // Crear una nota automática sobre la eliminación
      const note = {
        userId: auth.currentUser.uid,
        content: `Transacción eliminada: ${transaction.type === 'income' ? 'Ingreso' : 'Gasto'} de $${transaction.amount} en ${transaction.category}`,
        category: transaction.type === 'income' ? 'income' : transaction.category,
        paymentMethod: transaction.paymentMethod,
        timestamp: new Date(),
      };
      const noteRef = await addDoc(collection(db, 'planningNotes'), note);
      setNotes([...notes, { id: noteRef.id, ...note }]);
    } catch (error) {
      console.error('Error al eliminar la transacción:', error.message);
      alert('Error al eliminar la transacción.');
    }
  };

  // Editar una transacción
  const editTransaction = (transaction) => {
    setEditingTransaction(transaction);
    setTransactionType(transaction.type);
    setTransactionAmount(transaction.amount);
    setTransactionCategory(transaction.category);
    setPaymentMethod(transaction.paymentMethod);
    setSelectedGoalId(transaction.goalId || '');
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

  // Eliminar una nota
  const deleteNote = async (noteId) => {
    try {
      await deleteDoc(doc(db, 'planningNotes', noteId));
      setNotes(notes.filter(note => note.id !== noteId));
    } catch (error) {
      console.error('Error al eliminar la nota:', error.message);
      alert('Error al eliminar la nota.');
    }
  };

  return {
    // Objetivos
    goalDescription,
    setGoalDescription,
    goalAmount,
    setGoalAmount,
    goalTimeframe,
    setGoalTimeframe,
    goalPaymentMethod,
    setGoalPaymentMethod,
    goals,
    saveGoal,
    deleteGoal,
    editGoal,
    editingGoal,

    // Transacciones
    transactionType,
    setTransactionType,
    transactionAmount,
    setTransactionAmount,
    transactionCategory,
    setTransactionCategory,
    paymentMethod,
    setPaymentMethod,
    selectedGoalId,
    setSelectedGoalId,
    transactions,
    saveTransaction,
    deleteTransaction,
    editTransaction,
    editingTransaction,

    // Notas
    noteContent,
    setNoteContent,
    noteCategory,
    setNoteCategory,
    notePaymentMethod,
    setNotePaymentMethod,
    notes,
    saveNote,
    deleteNote,

    // Datos calculados
    totalIncome,
    totalExpenses,
    suggestion,
  };
};

export default PlanningLogic;