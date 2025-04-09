import React from 'react';
import Alert from '../components/Alert';
import Header from '../components/Header';
import '../styles/style-adminNews.css';

const AdminNewsUI = ({
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
  handleSubmit,
  showAlert,
  error,
  success,
  closeAlert,
}) => {
  return (
    <div>
      <Header />
      <div className="container__admin">
        <div className="admin__wrapper">
          <h2 className="admin__title">Subir Nueva Noticia</h2>
          <form onSubmit={handleSubmit} className="admin__form">
            <div className="form__group">
              <label htmlFor="title" className="form__label">Título:</label>
              <input
                type="text"
                id="title"
                className="form__input"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                placeholder="Ingresa el título de la noticia"
              />
            </div>
            <div className="form__group">
              <label htmlFor="readingTime" className="form__label">Duración de lectura (minutos):</label>
              <input
                type="number"
                id="readingTime"
                className="form__input"
                value={readingTime}
                onChange={(e) => setReadingTime(e.target.value)}
                required
                placeholder="Ej. 5"
                min="1"
              />
            </div>
            <div className="form__group">
              <label htmlFor="image" className="form__label">Imagen:</label>
              <input
                type="file"
                id="image"
                className="form__input-file"
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </div>
            <div className="form__group">
              <label htmlFor="shortDescription" className="form__label">Descripción corta:</label>
              <textarea
                id="shortDescription"
                className="form__textarea"
                value={shortDescription}
                onChange={(e) => setShortDescription(e.target.value)}
                required
                placeholder="Escribe una breve descripción (máximo 100 caracteres)"
                maxLength="100"
              />
            </div>
            <div className="form__group">
              <label htmlFor="longDescription" className="form__label">Descripción larga:</label>
              <textarea
                id="longDescription"
                className="form__textarea form__textarea-large"
                value={longDescription}
                onChange={(e) => setLongDescription(e.target.value)}
                required
                placeholder="Escribe la descripción completa de la noticia"
              />
            </div>
            <div className="form__group">
              <label htmlFor="category" className="form__label">Categoría:</label>
              <select
                id="category"
                className="form__select"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                required
              >
                <option value="Análisis de Tendencias Financieras">Análisis de Tendencias Financieras</option>
                <option value="Actualizaciones del Mercado">Actualizaciones del Mercado</option>
                <option value="Gestión del dinero personal">Gestión del dinero personal</option>
                <option value="Inversiones y crecimiento financiero">Inversiones y crecimiento financiero</option>
              </select>
            </div>
            <div className="form__group form__group-checkbox">
              <label className="form__label-checkbox">
                <input
                  type="checkbox"
                  checked={isFeatured}
                  onChange={(e) => setIsFeatured(e.target.checked)}
                />
                ¿Es Artículo o Consejo del día?
              </label>
              {isFeatured && (
                <select
                  className="form__select form__select-featured"
                  value={featuredType}
                  onChange={(e) => setFeaturedType(e.target.value)}
                >
                  <option value="">Selecciona...</option>
                  <option value="articleOfTheDay">Artículo del día</option>
                  <option value="adviceOfTheDay">Consejo del día</option>
                </select>
              )}
            </div>
            <button type="submit" className="form__submit-button">Subir Noticia</button>
          </form>
          {showAlert && <Alert message={error || success} type={error ? 'error' : 'success'} onClose={closeAlert} />}
        </div>
      </div>
    </div>
  );
};

export default AdminNewsUI;