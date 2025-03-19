import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebase';
import Alert from '../components/Alert';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!email || !password) {
      setError('Por favor, completa todos los campos.');
      setShowAlert(true);
      return;
    }

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess('Inicio de sesión exitoso!');
      setShowAlert(true);
      setEmail('');
      setPassword('');
      setTimeout(() => navigate('/'), 2000);
    } catch (err) {
      setError('Error al iniciar sesión: ' + err.message);
      setShowAlert(true);
    }
  };

  const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setSuccess(`Bienvenido, ${user.displayName}!`);
      setShowAlert(true);
      setTimeout(() => navigate('/'), 2000);
      // Extraer username de Google (displayName)
    } catch (err) {
      setError('Error con Google: ' + err.message);
      setShowAlert(true);
    }
  };

  const closeAlert = () => setShowAlert(false);

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
            <a href="#" className="login__enlace--google" onClick={handleGoogleLogin}>
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
        {showAlert && <Alert message={error || success} type={error ? 'error' : 'success'} onClose={closeAlert} />}
      </div>
    </main>
  );
};

export default LoginForm;