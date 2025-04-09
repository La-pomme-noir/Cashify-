import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!termsAccepted) {
      alert('Debes aceptar los términos y condiciones para registrarte.');
      return;
    }
    console.log('Registration submitted:', { username, email, password });
    // Aquí podrías agregar la lógica para enviar al backend
    setUsername('');
    setEmail('');
    setPassword('');
    setTermsAccepted(false);
  };

  return (
    <main className="contenedor">
      <div className="login shadow-cards shadow__cards--login">
        <div className="register__image shadow-cards"></div>
        <form className="login__form shadow-cards" onSubmit={handleSubmit}>
          <fieldset>
            <h2 className="login__title">Bienvenido a Cashify</h2>
            <legend className="login__span">Registra tus credenciales para acceder a todos los servicios</legend>

            <div className="login__campos">
              <label htmlFor="username" className="login__label">
                Usuario <i className="fa-solid fa-user"></i>
              </label>
              <input
                type="text"
                id="username"
                className="login__input"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            <div className="login__campos">
              <label htmlFor="email" className="login__label">
                Correo <i className="fa-solid fa-envelope"></i>
              </label>
              <input
                type="email"
                id="email"
                className="login__input"
                placeholder="correo@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login__campos">
              <label htmlFor="password" className="login__label">
                Contraseña <i className="fa-solid fa-lock"></i>
              </label>
              <input
                type="password"
                id="password"
                className="login__input"
                placeholder="***********"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login__campos">
              <input
                type="checkbox"
                id="terms"
                className="check__terms"
                checked={termsAccepted}
                onChange={(e) => setTermsAccepted(e.target.checked)}
              />
              <a href="#" className="login__check">
                Estoy de acuerdo con los términos y condiciones <i className="fa-solid fa-file-contract"></i>
              </a>
            </div>

            <button type="submit" className="login__button">
              Registrarse
            </button>

            <hr className="login__hr" />
            <span className="login__span">Registrarse con Terceros</span>
            <a href="#" className="login__enlace--google">
              Registrarse con Google <i className="fa-brands fa-google"></i>
            </a>
            <span className="login__span">
              Ya tienes una cuenta?{' '}
              <Link to="/login" className="login__txtregister">
                Inicia Sesión!
              </Link>
            </span>
          </fieldset>
        </form>
      </div>
    </main>
  );
};

export default RegisterForm;