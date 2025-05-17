import { useState } from 'react';
import { db } from '../services/firebase';
import { collection, addDoc, updateDoc, doc, serverTimestamp } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

export const OradorIdeaCreateLogic = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('Inversiones');
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const auth = getAuth();
  const user = auth.currentUser;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!title || !description || !category) {
      setError('Por favor, completa todos los campos.');
      setShowAlert(true);
      return null;
    }

    try {
      let ideaData;
      if (isEditing) {
        // Actualizar idea
        const ideaRef = doc(db, 'conference_ideas', editId);
        await updateDoc(ideaRef, {
          title,
          description,
          category,
          updated_at: serverTimestamp(),
        });
        ideaData = { id: editId, title, description, category, updated_at: serverTimestamp(), speaker_id: user.uid };
        setSuccess('Idea actualizada con éxito!');
      } else {
        // Crear nueva idea
        const docRef = await addDoc(collection(db, 'conference_ideas'), {
          title,
          description,
          category,
          created_at: serverTimestamp(),
          speaker_id: user.uid,
        });
        ideaData = { id: docRef.id, title, description, category, created_at: serverTimestamp(), speaker_id: user.uid };
        setSuccess('Idea subida con éxito!');
      }
      setShowAlert(true);
      resetForm();
      setShowModal(false);
      return ideaData; // Devolver la idea creada o editada
    } catch (err) {
      setError('Error al guardar la idea: ' + err.message);
      setShowAlert(true);
      return null;
    }
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setCategory('Inversiones');
    setIsEditing(false);
    setEditId(null);
  };

  const closeAlert = () => setShowAlert(false);

  return {
    title,
    setTitle,
    description,
    setDescription,
    category,
    setCategory,
    handleSubmit,
    error,
    success,
    showAlert,
    closeAlert,
    showModal,
    setShowModal,
    isEditing,
    setIsEditing,
    editId,
    setEditId,
  };
};