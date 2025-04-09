import React, { useState } from 'react';
import '../styles/style-home.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    apellidos: '',
    telefono: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Formulario enviado:', formData);
    // Aquí puedes agregar la lógica para enviar el formulario a un backend
  };

  return (
    <section className="contact">
      <h2 className="contact__title titles-sections">Contáctanos</h2>
      <div className="contact__grid contact__shadow">
        <div className="contact__information">
          <p>
            <span className="contact__span">
              Estamos aquí para ayudarte a alcanzar tus metas financieras.
            </span>{' '}
            Si tienes preguntas, necesitas asesoría o simplemente quieres compartir
            tus ideas, no dudes en comunicarte con nosotros.
          </p>
          <p>
            Estamos aquí para apoyarte en cada paso hacia un futuro financiero
            sólido.{' '}
            <span className="contact__span">
              No dudes en ponerte en contacto con nosotros; cada pregunta o idea
              cuenta.
            </span>
          </p>
          <p>
            Puedes llamarnos, escribirnos o completar el formulario, y nuestro equipo
            estará encantado de atenderte.{' '}
            <span className="contact__span">
              ¡Tu camino hacia unas finanzas saludables comienza aquí!
            </span>
          </p>
          <div className="contact__access">
            <h3 className="contact__titulo no-margin">Número Telefónico</h3>
            <i className="fa-solid fa-phone-volume contact__icon">
              <span className="contact__call"> +57 607 691 7700</span>
            </i>
          </div>

          <div className="contact__access">
            <h3 className="contact__titulo no-margin">Correo</h3>
            <i className="fa-solid fa-envelope contact__icon">
              <span className="contact__email"> cashifycontact@gmail.com</span>
            </i>
          </div>

          <div className="contact__access">
            <h3 className="contact__titulo no-margin">Ubicación</h3>
            <i className="fa-solid fa-location-dot contact__icon">
              <span className="contact__location">
                {' '}
                Calle De Los Estudiantes 9 82, Bucaramanga, Santander · 01 km
              </span>
            </i>
          </div>
        </div>

        <form className="contact__formulario" onSubmit={handleSubmit}>
          <fieldset className="contact__fieldset">
            <legend className="contact__legend">
              Contáctanos Llenando Todos los Campos
            </legend>
            <div className="contact__form">
              <div className="contact__campos">
                <label className="contact__label" htmlFor="nombre">
                  Nombre
                </label>
                <input
                  className="contact__input"
                  placeholder="Nombre"
                  type="text"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__campos contact__campos--apellido">
                <label className="contact__label" htmlFor="apellidos">
                  Apellidos
                </label>
                <input
                  className="contact__input"
                  placeholder="Apellidos"
                  type="text"
                  name="apellidos"
                  value={formData.apellidos}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__campos">
                <label className="contact__label" htmlFor="telefono">
                  Teléfono
                </label>
                <input
                  className="contact__input"
                  placeholder="Teléfono"
                  type="tel"
                  name="telefono"
                  value={formData.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__campos">
                <label className="contact__label" htmlFor="correo">
                  Correo
                </label>
                <input
                  className="contact__input"
                  placeholder="Correo"
                  type="email"
                  name="correo"
                  value={formData.correo}
                  onChange={handleChange}
                />
              </div>

              <div className="contact__campos">
                <label className="contact__label" htmlFor="mensaje">
                  Mensaje
                </label>
                <textarea
                  className="contact__tarea"
                  name="mensaje"
                  placeholder="Tu mensaje"
                  value={formData.mensaje}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <div className="contact__button">
              <input
                className="contact__envio"
                type="submit"
                value="Enviar"
              />
            </div>
          </fieldset>
        </form>
      </div>
    </section>
  );
};

export default Contact;