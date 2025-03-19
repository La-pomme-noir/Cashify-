import React, { useState } from 'react';
import { db, storage } from '../services/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import Alert from '../components/Alert';

const AdminNewsForm = () => {
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

  return (
    <div className="admin-news-form">
      <h2>Subir Nueva Noticia</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Título:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Duración de lectura (minutos):</label>
          <input
            type="number"
            value={readingTime}
            onChange={(e) => setReadingTime(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Imagen:</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción corta:</label>
          <textarea
            value={shortDescription}
            onChange={(e) => setShortDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Descripción larga:</label>
          <textarea
            value={longDescription}
            onChange={(e) => setLongDescription(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label>Categoría:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="Análisis de Tendencias Financieras">Análisis de Tendencias Financieras</option>
            <option value="Actualizaciones del Mercado">Actualizaciones del Mercado</option>
            <option value="Gestión del dinero personal">Gestión del dinero personal</option>
            <option value="Inversiones y crecimiento financiero">Inversiones y crecimiento financiero</option>
          </select>
        </div>
        <div className="form-group">
          <label>
            <input
              type="checkbox"
              checked={isFeatured}
              onChange={(e) => setIsFeatured(e.target.checked)}
            /> ¿Es Artículo o Consejo del día?
          </label>
          {isFeatured && (
            <select value={featuredType} onChange={(e) => setFeaturedType(e.target.value)}>
              <option value="">Selecciona...</option>
              <option value="articleOfTheDay">Artículo del día</option>
              <option value="adviceOfTheDay">Consejo del día</option>
            </select>
          )}
        </div>
        <button type="submit">Subir Noticia</button>
      </form>
      {showAlert && <Alert message={error || success} type={error ? 'error' : 'success'} onClose={closeAlert} />}
    </div>
  );
};

export default AdminNewsForm;