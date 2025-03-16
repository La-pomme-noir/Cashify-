import React from 'react';

const RulesSection = () => {
  return (
    <section id="reglas" className="mb-5 shadow-cards shadow__cards-rules">
      <h2 className="titles-sections">Reglas para participar</h2>
      <span class="scrollspy__span">Nos alegra que formes parte de nuestra comunidad, donde el respeto y el aprendizaje mutuo son nuestras guías principales.</span>
      <ul class="scrollspy__foro">
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i><span class="scrollspy__span-reglas"> Sé respetuoso con otros usuarios:</span> Evita insultos, lenguaje ofensivo o ataques personales. Fomenta un diálogo constructivo.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> No compartas información personal sensible.</span> Protege tu privacidad y la de otros; no publiques datos como números de cuenta, direcciones o información identificable.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> Evita el spam o contenido irrelevante.</span> No publiques anuncios, enlaces promocionales sin contexto o mensajes repetitivos que no aporten valor al tema financiero.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i><span class="scrollspy__span-reglas"> Publica contenido veraz y fundamentado:</span> Si das consejos o compartes información, asegúrate de que sea precisa y, si es posible, incluye fuentes confiables.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> No promuevas esquemas de enriquecimiento rápido:</span> Está prohibido publicar contenido sobre estafas, pirámides o promesas de ganancias irreales.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> Usa un lenguaje claro y profesional:</span> Evita jerga innecesaria o mensajes confusos; el objetivo es que todos entiendan y participen.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i><span class="scrollspy__span-reglas"> Cita tus fuentes:</span> Si mencionas datos, estadísticas o noticias, indica de dónde provienen (ej. enlaces a artículos o estudios) para dar credibilidad.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> Respeta las leyes y regulaciones financieras:</span> No sugieras actividades ilegales, como manipulación de mercados o evasión fiscal.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> Mantén los temas relacionados con finanzas:</span> El foro es para discutir inversiones, ahorros, presupuestos, etc. Publicaciones fuera de tema pueden ser eliminadas.</li>
      </ul> {/* Fin scrollspy__foro */}
    </section>
  );
};

export default RulesSection;