import { useState, useEffect } from 'react';
import { db } from '../services/firebase';
import { collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const OradorIdeaListLogic = () => {
  const [ideas, setIdeas] = useState([]);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    const fetchIdeas = async () => {
      if (user) {
        try {
          const querySnapshot = await getDocs(collection(db, 'conference_ideas'));
          const userIdeas = querySnapshot.docs
            .filter(doc => doc.data().speaker_id === user.uid)
            .map(doc => ({ id: doc.id, ...doc.data() }));
          setIdeas(userIdeas);
        } catch (err) {
          setError('Error al cargar las ideas: ' + err.message);
          setShowAlert(true);
        }
      }
    };
    fetchIdeas();
  }, [user]);

  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'conference_ideas', id));
      setIdeas(ideas.filter(idea => idea.id !== id));
      setSuccess('Idea eliminada con éxito!');
      setShowAlert(true);
    } catch (err) {
      setError('Error al eliminar la idea: ' + err.message);
      setShowAlert(true);
    }
  };

  const updateIdeas = (newIdea) => {
    if (newIdea) {
      setIdeas(prevIdeas => {
        const existingIdeaIndex = prevIdeas.findIndex(idea => idea.id === newIdea.id);
        if (existingIdeaIndex !== -1) {
          // Actualizar idea existente
          const updatedIdeas = [...prevIdeas];
          updatedIdeas[existingIdeaIndex] = newIdea;
          return updatedIdeas;
        }
        // Agregar nueva idea
        return [...prevIdeas, newIdea];
      });
    }
  };

  const closeAlert = () => setShowAlert(false);

  return {
    ideas,
    setIdeas,
    handleDelete,
    updateIdeas,
    error,
    success,
    showAlert,
    closeAlert,
  };
};