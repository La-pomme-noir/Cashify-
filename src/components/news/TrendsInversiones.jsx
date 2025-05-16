import React from 'react';
import { useNewsLogic } from '../../whatever/useNewsLogic';
import NewsCarousel from '../../view/NewsCarousel';

const TrendsInversiones = ({ category }) => {
  const { news, isModalOpen, selectedNews, openModal, closeModal } = useNewsLogic(category);

  return (
    <NewsCarousel
      category={category}
      news={news}
      isModalOpen={isModalOpen}
      selectedNews={selectedNews}
      openModal={openModal}
      closeModal={closeModal}
      sectionId="consejos"
      carouselId="carouselTarjetasMercado"
    />
  );
};

export default TrendsInversiones;