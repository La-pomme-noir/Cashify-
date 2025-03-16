import React from 'react';

const QandASection = () => {
  return (
    <section id="answer" className="mb-5">
      <h2 className="titles-sections">Preguntas Frecuentes</h2>
      <div className="accordion" id="answerAccordion">
        <h2 className="accordion__title">Finanzas y Gestión de Gastos</h2>
        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
            >
              ¿Cómo puedo empezar a gestionar mis gastos si no sé por dónde comenzar?
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Comienza registrando todos tus ingresos y gastos durante un mes. Usa nuestra sección "Mi Espacio" para anotarlos en el apartado de notas o prueba
              uno de nuestros simuladores para crear un presupuesto básico.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
            >
              ¿Qué es un presupuesto y por qué es importante?
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Un presupuesto es un plan que detalla tus ingresos y gastos. Es clave para controlar tus finanzas, ahorrar y evitar deudas. En "Consejos"
              encontrarás guías para elaborarlo.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
            >
              ¿Cómo puedo reducir mis gastos diarios sin afectar mi calidad de vida?
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Identifica gastos hormiga (como cafés o suscripciones innecesarias) y prioriza lo esencial. Usa el simulador de "Mi Espacio" para probar
              escenarios de reducción.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFour"
            >
              ¿Qué hago si mis gastos superan mis ingresos?
            </button>
          </h2>
          <div
            id="collapseFour"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Revisa tus gastos fijos y variables para encontrar áreas de ajuste. Lee nuestros artículos en "Noticias" o participa en el foro para pedir
              consejos personalizados.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFive"
            >
              ¿Cómo puedo ahorrar para un objetivo a largo plazo, como comprar una casa?
            </button>
          </h2>
          <div
            id="collapseFive"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Establece un monto mensual y usa un simulador de ahorro en "Mi Espacio" para calcular cuánto tiempo te tomará. Automatiza tus ahorros si es
              posible.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSix"
            >
              ¿Qué son los gastos hormiga y cómo identificarlos?
            </button>
          </h2>
          <div
            id="collapseSix"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Son pequeños gastos diarios (ej. snacks, apps) que suman mucho. Lleva un registro en "Mi Espacio" para detectarlos y eliminarlos.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSeven"
            >
              ¿Vale la pena invertir si solo tengo un pequeño excedente mensual?
            </button>
          </h2>
          <div
            id="collapseSeven"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Sí, incluso pequeñas cantidades pueden crecer con el tiempo. Consulta "Consejos" para opciones de inversión de bajo riesgo.
            </div>
          </div>
        </div>

        <h2 className="accordion__title">Términos y Condiciones</h2>
        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEight"
            >
              ¿Qué información personal debo proporcionar para usar la página?
            </button>
          </h2>
          <div
            id="collapseEight"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Solo necesitamos un correo electrónico para registrarte. En "Mi Espacio" puedes añadir datos financieros, pero son opcionales y están protegidos
              por nuestra política de privacidad.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseNine"
            >
              ¿Puedo compartir el contenido de la página con otros?
            </button>
          </h2>
          <div
            id="collapseNine"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Puedes compartir enlaces a "Noticias" o "Consejos", pero el contenido de "Mi Espacio" y las videoconferencias es exclusivo para usuarios
              registrados.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTen"
            >
              ¿Qué pasa si no sigo las reglas del foro financiero?
            </button>
          </h2>
          <div
            id="collapseTen"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Las publicaciones que violen las reglas serán eliminadas, y los usuarios reincidentes pueden ser suspendidos temporal o permanentemente.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseEleven"
            >
              ¿Puedo cancelar mi suscripción premium en cualquier momento?
            </button>
          </h2>
          <div
            id="collapseEleven"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Sí, puedes cancelarla desde "Mi Espacio" sin penalización, pero perderás acceso a las videoconferencias ilimitadas al finalizar el ciclo de pago.
            </div>
          </div>
        </div>

        <h2 className="accordion__title">Funcionalidades de la Página</h2>
        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwelve"
            >
              ¿Qué ofrecen los simuladores en "Mi Espacio"?
            </button>
          </h2>
          <div
            id="collapseTwelve"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Los simuladores te permiten calcular presupuestos, ahorros, pagos de deudas o proyecciones de inversión ajustadas a tus datos.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThirteen"
            >
              ¿Cómo accedo a las videoconferencias gratuitas?
            </button>
          </h2>
          <div
            id="collapseThirteen"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              En la sección "Videoconferencias", encontrarás un calendario con la próxima sesión gratuita (una cada 15 días). Regístrate con tu cuenta para
              participar.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThirteenDuplicate"
            >
              ¿En qué se diferencia la versión premium de la gratuita?
            </button>
          </h2>
          <div
            id="collapseThirteenDuplicate"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              La versión gratuita incluye una videoconferencia quincenal y acceso básico a simuladores. La premium ofrece videoconferencias ilimitadas y
              herramientas avanzadas en "Mi Espacio".
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFourteen"
            >
              ¿Puedo usar los simuladores sin registrarme?
            </button>
          </h2>
          <div
            id="collapseFourteen"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              No, necesitas una cuenta para guardar tus simulaciones y notas en "Mi Espacio", pero registrarte es gratuito.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseFiveteen"
            >
              ¿Qué tipo de artículos encuentro en "Noticias"?
            </button>
          </h2>
          <div
            id="collapseFiveteen"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Publicamos análisis de tendencias financieras, actualizaciones del mercado y tips prácticos para la gestión de gastos.
            </div>
          </div>
        </div>

        <div className="accordion-item accordion__item">
          <h2 className="accordion-header">
            <button
              className="accordion-button accordion__button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseSixteen"
            >
              ¿Cómo participo en el foro financiero?
            </button>
          </h2>
          <div
            id="collapseSixteen"
            className="accordion-collapse accordion__collapse collapse"
            data-bs-parent="#answerAccordion"
          >
            <div className="accordion-body accordion__body">
              Crea una cuenta, ve a "Foro Financiero" y lee las reglas antes de publicar o responder. ¡Es fácil y todos son bienvenidos!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default QandASection;