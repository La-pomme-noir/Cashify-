import React from "react";
import { Link } from "react-router-dom";
import Alert from "../components/Alert";
import ReCAPTCHA from "react-google-recaptcha";

const LoginFormUI = ({
  email,
  setEmail,
  password,
  setPassword,
  handleSubmit,
  handleGoogleLogin,
  showAlert,
  showRecaptchaV2,
  handleRecaptchaV2,
  error,
  success,
  closeAlert,
}) => {
  // Clave de sitio de reCAPTCHA v2 (reemplaza con tu clave)
  const RECAPTCHA_V2_SITE_KEY = import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY;

  return (
    <main className="contenedor">
      <div className="login shadow-cards shadow__cards--login">
        <div className="login__image shadow-cards"></div>
        <form className="login__form shadow-cards" onSubmit={handleSubmit}>
          <fieldset>
            <h2 className="login__title">Bienvenido a Cashify</h2>
            <legend className="login__span">
              Ingresa tus credenciales para acceder a todos los servicios
            </legend>

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

            {/* Mostrar reCAPTCHA v2 siempre */}
            {showRecaptchaV2 && (
              <div className="login__recaptcha">
                <ReCAPTCHA sitekey={RECAPTCHA_V2_SITE_KEY} onChange={handleRecaptchaV2} />
              </div>
            )}

            <button type="submit" className="login__button">
              Login
            </button>

            <hr className="login__hr" />
            <span className="login__span">Iniciar Sesión con Terceros</span>
            <button type="button" className="login__enlace--google" onClick={handleGoogleLogin}>
              Iniciar Sesión con Google <i className="fa-brands fa-google"></i>
            </button>
            <span className="login__span">
              No tienes una cuenta?{" "}
              <Link to="/register" className="login__txtregister">
                !Registrate!
              </Link>
            </span>
          </fieldset>
        </form>
        {showAlert && (
          <Alert message={error || success} type={error ? "error" : "success"} onClose={closeAlert} />
        )}
      </div>
    </main>
  );
};

export default LoginFormUI;