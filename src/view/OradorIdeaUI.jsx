import React from 'react';
import Alert from '../components/Alert';

const OradorIdeaUI = ({
  title,
  setTitle,
  description,
  setDescription,
  category,
  setCategory,
  handleSubmit,
  ideas,
  handleEdit,
  handleDelete,
  showAlert,
  error,
  success,
  closeAlert,
  showModal,
  setShowModal,
  isEditing,
}) => {
  return (
    <div className="speaker-ideas">
      <div className="speaker-ideas__container">
        <h2 id='crearIdea' className="speaker-ideas__title">Gestión de Ideas de Conferencias</h2>
        <button
          className="speaker-ideas__new-button"
          onClick={() => setShowModal(true)}
        >
          Nueva Idea
        </button>
        {showModal && (
          <div className="speaker-ideas__modal">
            <div className="speaker-ideas__modal-content">
              <button
                className="speaker-ideas__modal-close"
                onClick={() => setShowModal(false)}
              >
                ×
              </button>
              <h3 className="speaker-ideas__modal-title">
                {isEditing ? 'Editar Idea' : 'Nueva Idea'}
              </h3>
              <form onSubmit={handleSubmit} className="speaker-ideas__form">
                <div className="speaker-ideas__form-group">
                  <label htmlFor="title" className="speaker-ideas__form-label">Título:</label>
                  <input
                    type="text"
                    id="title"
                    className="speaker-ideas__form-input"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    placeholder="Ingresa el título de la conferencia"
                  />
                </div>
                <div className="speaker-ideas__form-group">
                  <label htmlFor="description" className="speaker-ideas__form-label">Descripción:</label>
                  <textarea
                    id="description"
                    className="speaker-ideas__form-textarea"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                    placeholder="Describe la idea de la conferencia"
                  />
                </div>
                <div className="speaker-ideas__form-group">
                  <label htmlFor="category" className="speaker-ideas__form-label">Categoría:</label>
                  <select
                    id="category"
                    className="speaker-ideas__form-select"
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    required
                  >
                    <option value="Inversiones">Inversiones</option>
                    <option value="Gestión Financiera">Gestión Financiera</option>
                    <option value="Ahorro">Ahorro</option>
                    <option value="Planificación">Planificación</option>
                  </select>
                </div>
                <button type="submit" className="speaker-ideas__form-submit">
                  {isEditing ? 'Actualizar Idea' : 'Subir Idea'}
                </button>
              </form>
            </div>
          </div>
        )}
        {showAlert && <Alert message={error || success} type={error ? 'error' : 'success'} onClose={closeAlert} />}
        {ideas.length > 0 ? (
          <table id='listarIdea' className="speaker-ideas__table">
            <thead>
              <tr>
                <th>Título</th>
                <th>Descripción</th>
                <th>Categoría</th>
                <th>Fecha de Creación</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {ideas.map((idea) => (
                <tr key={idea.id}>
                  <td>{idea.title}</td>
                  <td>{idea.description}</td>
                  <td>{idea.category}</td>
                  <td>{idea.created_at?.toDate().toLocaleDateString()}</td>
                  <td>
                    <i
                      className="fas fa-edit speaker-ideas__table-action"
                      onClick={() => handleEdit(idea)}
                    ></i>
                    <i
                      className="fas fa-trash speaker-ideas__table-action"
                      onClick={() => handleDelete(idea.id)}
                    ></i>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="speaker-ideas__empty">No hay ideas registradas.</p>
        )}
      </div>
    </div>
  );
};

export default OradorIdeaUI;