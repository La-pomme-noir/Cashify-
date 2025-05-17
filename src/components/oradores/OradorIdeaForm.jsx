import React from 'react';
import { OradorIdeaCreateLogic } from '../../whatever/OradorIdeaCreateLogic';
import { OradorIdeaListLogic } from '../../whatever/OradorIdeaListLogic';
import OradorIdeaUI from '../../view/OradorIdeaUI';

const OradorIdeaForm = () => {
  const {
    title,
    setTitle,
    description,
    setDescription,
    category,
    setCategory,
    handleSubmit,
    error: createError,
    success: createSuccess,
    showAlert: createShowAlert,
    closeAlert: createCloseAlert,
    showModal,
    setShowModal,
    isEditing,
    setIsEditing,
    editId,
    setEditId,
  } = OradorIdeaCreateLogic();

  const {
    ideas,
    updateIdeas,
    handleDelete,
    error: listError,
    success: listSuccess,
    showAlert: listShowAlert,
    closeAlert: listCloseAlert,
  } = OradorIdeaListLogic();

  // Combinar estados de error, éxito y alertas
  const error = createError || listError;
  const success = createSuccess || listSuccess;
  const showAlert = createShowAlert || listShowAlert;
  const closeAlert = () => {
    createCloseAlert();
    listCloseAlert();
  };

  // Manejar edición pasando los datos al formulario
  const handleEdit = (idea) => {
    setTitle(idea.title);
    setDescription(idea.description);
    setCategory(idea.category);
    setEditId(idea.id);
    setIsEditing(true);
    setShowModal(true);
  };

  // Actualizar lista de ideas después de crear/editar
  const handleSubmitWithUpdate = async (e) => {
    const newIdea = await handleSubmit(e);
    if (newIdea) {
      updateIdeas(newIdea);
    }
  };

  return (
    <OradorIdeaUI
      title={title}
      setTitle={setTitle}
      description={description}
      setDescription={setDescription}
      category={category}
      setCategory={setCategory}
      handleSubmit={handleSubmitWithUpdate}
      ideas={ideas}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      showAlert={showAlert}
      error={error}
      success={success}
      closeAlert={closeAlert}
      showModal={showModal}
      setShowModal={setShowModal}
      isEditing={isEditing}
    />
  );
};

export default OradorIdeaForm;