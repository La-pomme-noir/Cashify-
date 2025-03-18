import React from 'react';

const ModalNews = ({ closeModal }) => {
  return (
    <div className="modal__overlay">
      <div className="modal__content">
      <div className="modal__content--scroll">
        <button className="modal__close" onClick={closeModal}>
          <i className="fa-solid fa-xmark"></i>
        </button>
        <div className="modal__header">
          <h3 className="modal__title">Encuentros modernos</h3>
          <span className="modal__meta">
            <i className="fa-solid fa-clock"></i> 22 dic 2022 | <i className="fa-solid fa-book"></i> 5 min. de lectura
          </span>
        </div>
        <p className="modal__subtitle">
          Crea un subtítulo para atraer la atención del blog donde resumes dichas publicaciones en un párrafo de opinión, una infografía o contenido interactivo relacionado con tu audiencia y que sea atractivo.
        </p>
        <img
          src="/images/analisis-card1.jpg"
          alt="Analisis 1"
          className="modal__image"
        />
          <div className="modal__text">
            <p>
              Bienvenido a tu nuevo blog. Agrega aquí algunos párrafos con contenido que tú tengas en mente o que consideres útil para tu audiencia. Puedes hablar de noticias originales e interesantes. Plantea un tema o dilema que pueda generar debate o interés entre tus lectores. Si tienes imágenes o infografías, aquí es un buen lugar para incluirlas.
            </p>
            <p>
              Divide el contenido en secciones claras y bien estructuradas. Por ejemplo, podrías incluir un apartado con consejos prácticos o un análisis detallado. Además, asegúrate de que el texto sea legible y atractivo, utilizando un lenguaje claro y conciso. Los lectores apreciarán contenido que sea fácil de entender y que les aporte valor.
            </p>
            <p>
              Añade más contenido para probar el scroll. Este párrafo es adicional para simular un texto más largo. Habla sobre tendencias actuales, como el uso de tecnología en finanzas, o cualquier tema que quieras explorar. El objetivo es que el usuario pueda desplazarse solo en esta área sin afectar el diseño general.
            </p>
            <p>
              Continúa expandiendo el contenido si es necesario. Por ejemplo, podrías incluir estadísticas, citas de expertos o ejemplos prácticos. Esto hará que el modal sea más dinámico y útil para tu audiencia.
            </p>
          </div>
        </div> {/*Fin modal__text-scroll */}
      </div>
    </div>
  );
};

export default ModalNews;