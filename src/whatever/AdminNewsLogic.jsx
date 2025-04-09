import { useState } from 'react';
import { db, storage } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

export const AdminNewsLogic = () => {
  const [title, setTitle] = useState('');
  const [readingTime, setReadingTime] = useState('');
  const [image, setImage] = useState(null);
  const [shortDescription, setShortDescription] = useState('');
  const [longDescription, setLongDescription] = useState('');
  const [category, setCategory] = useState('Análisis de Tendencias Financieras');
  const [isFeatured, setIsFeatured] = useState(false);
  const [featuredType, setFeaturedType] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAlert, setShowAlert] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!title || !readingTime || !image || !shortDescription || !longDescription || !category) {
      setError('Por favor, completa todos los campos obligatorios.');
      setShowAlert(true);
      return;
    }

    if (isNaN(readingTime) || readingTime <= 0) {
      setError('La duración de lectura debe ser un número positivo.');
      setShowAlert(true);
      return;
    }

    try {
      // Subir imagen a Firebase Storage
      const storageRef = ref(storage, `news/${Date.now()}_${image.name}`);
      await uploadBytes(storageRef, image);
      const imageUrl = await getDownloadURL(storageRef);

      // Guardar datos en Firestore
      await addDoc(collection(db, 'news'), {
        title,
        date: serverTimestamp(),
        readingTime: Number(readingTime),
        imageUrl,
        shortDescription,
        longDescription,
        category,
        isFeatured,
        featuredType: isFeatured ? featuredType : '',
      });

      setSuccess('Noticia subida con éxito!');
      setShowAlert(true);
      setTitle('');
      setReadingTime('');
      setImage(null);
      setShortDescription('');
      setLongDescription('');
      setCategory('Análisis de Tendencias Financieras');
      setIsFeatured(false);
      setFeaturedType('');
    } catch (err) {
      setError('Error al subir la noticia: ' + err.message);
      setShowAlert(true);
    }
  };

  const closeAlert = () => setShowAlert(false);

  return {
    title,
    setTitle,
    readingTime,
    setReadingTime,
    image,
    setImage,
    shortDescription,
    setShortDescription,
    longDescription,
    setLongDescription,
    category,
    setCategory,
    isFeatured,
    setIsFeatured,
    featuredType,
    setFeaturedType,
    error,
    success,
    showAlert,
    handleSubmit,
    closeAlert,
  };
};