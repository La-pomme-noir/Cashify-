import React from 'react';

const RulesOrador = () => {
  return (
    <section id="reglas" className="mb-5 shadow-cards shadow__cards-rules">
      <h2 className="titles-sections">Reglas para participar</h2>
      <span class="scrollspy__span">Nos alegra que formes parte de nuestra comunidad, donde el respeto y el aprendizaje mutuo son nuestras guías principales.</span>
      <ul class="scrollspy__foro">
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i><span class="scrollspy__span-reglas"> Respeto y profesionalismo:</span> Mantén un tono cordial en tus conferencias. Evita lenguaje ofensivo y promueve un ambiente de aprendizaje.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> Protección de datos:</span> No compartas información personal sensible tuya ni de los asistentes. La privacidad es fundamental.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> Evita el spam y la publicidad engañosa:</span> No promuevas productos, esquemas de enriquecimiento rápido o contenido ajeno al propósito educativo de Cashify.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i><span class="scrollspy__span-reglas"> Contenido relevante y de calidad:</span> Publica información precisa y fundamentada. Si proporcionas datos o estadísticas, cita fuentes confiables.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> Cumplimiento de normativas financieras</span> No incentives prácticas ilegales, como evasión fiscal o manipulación de mercados.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> Claridad en la comunicación:</span> Usa un lenguaje accesible para que todos los participantes comprendan y aprovechen la información.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i><span class="scrollspy__span-reglas"> Cita tus fuentes:</span> Si mencionas datos, estadísticas o noticias, indica de dónde provienen (ej. enlaces a artículos o estudios) para dar credibilidad.</li>
        <li class="scrollspy__li"><i class="fa-solid fa-square-check"></i> <span class="scrollspy__span-reglas"> Interacción con la comunidad:</span> Responde dudas de manera constructiva y fomenta la participación respetuosa de los asistentes.</li>
      </ul> {/* Fin scrollspy__orador */}
    </section>
  );
};

export default RulesOrador;