import React from 'react';
import { useNewsLogic } from '../../whatever/useNewsLogic';
import NewsCarousel from '../../view/NewsCarousel';

const MarketUpdates = ({ category }) => {
  const { news, isModalOpen, selectedNews, openModal, closeModal } = useNewsLogic(category);

  return (
    <NewsCarousel
      category={category}
      news={news}
      isModalOpen={isModalOpen}
      selectedNews={selectedNews}
      openModal={openModal}
      closeModal={closeModal}
      sectionId="articulos"
      carouselId="carouselTarjetasMercado"
    />
  );
};

export default MarketUpdates;