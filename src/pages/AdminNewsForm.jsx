import React from 'react';
import { AdminNewsLogic } from '../whatever/AdminNewsLogic';
import AdminNewsUI from '../view/AdminNewsUI';

const AdminNewsForm = () => {
  const {
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
  } = AdminNewsLogic();

  return (
    <AdminNewsUI
      title={title}
      setTitle={setTitle}
      readingTime={readingTime}
      setReadingTime={setReadingTime}
      image={image}
      setImage={setImage}
      shortDescription={shortDescription}
      setShortDescription={setShortDescription}
      longDescription={longDescription}
      setLongDescription={setLongDescription}
      category={category}
      setCategory={setCategory}
      isFeatured={isFeatured}
      setIsFeatured={setIsFeatured}
      featuredType={featuredType}
      setFeaturedType={setFeaturedType}
      handleSubmit={handleSubmit}
      showAlert={showAlert}
      error={error}
      success={success}
      closeAlert={closeAlert}
    />
  );
};

export default AdminNewsForm;