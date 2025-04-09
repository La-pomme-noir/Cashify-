import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login submitted:', { email, password });
    // Aquí podrías agregar la lógica para enviar al backend
    setEmail('');
    setPassword('');
  };

  return (
    <main className="contenedor">
      <div className="login shadow-cards shadow__cards--login">
        <div className="login__image shadow-cards"></div>
        <form className="login__form shadow-cards" onSubmit={handleSubmit}>
          <fieldset>
            <h2 className="login__title">Bienvenido a Cashify</h2>
            <legend className="login__span">Ingresa tus credenciales para acceder a todos los servicios</legend>

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

            <a href="#" className="login__enlace">
              Olvidaste tu contraseña? <i className="fa-solid fa-user-lock"></i>
            </a>

            <button type="submit" className="login__button">
              Login
            </button>

            <hr className="login__hr" />
            <span className="login__span">Iniciar Sesión con Terceros</span>
            <a href="#" className="login__enlace--google">
              Iniciar Sesión con Google <i className="fa-brands fa-google"></i>
            </a>
            <span className="login__span">
              No tienes una cuenta?{' '}
              <Link to="/register" className="login__txtregister">
                !Registrate!
              </Link>
            </span>
          </fieldset>
        </form>
      </div>
    </main>
  );
};

export default LoginForm;