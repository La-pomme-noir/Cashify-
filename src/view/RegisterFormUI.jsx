import React from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/Alert';
import ReCAPTCHA from 'react-google-recaptcha';

const RegisterFormUI = ({
  username,
  setUsername,
  email,
  setEmail,
  password,
  handlePasswordChange,
  termsAccepted,
  setTermsAccepted,
  handleSubmit,
  handleGoogleRegister,
  showAlert,
  error,
  success,
  closeAlert,
  passwordCriteria,
  passwordStrength,
  handleRecaptchaV2, // Añadido como prop
}) => {
  const RECAPTCHA_V2_SITE_KEY = import.meta.env.VITE_RECAPTCHA_V2_SITE_KEY;

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
                onChange={handlePasswordChange}
              />
              <div className="password__criteria">
                <p className="criteria__title">La contraseña debe cumplir con:</p>
                <ul className="criteria__list">
                  <li className={passwordCriteria.length ? 'criteria__met' : 'criteria__not--met'}>
                    <i className={passwordCriteria.length ? 'fa-solid fa-check' : 'fa-solid fa-times'}></i> Al menos 8 caracteres
                  </li>
                  <li className={passwordCriteria.uppercase ? 'criteria__met' : 'criteria__not--met'}>
                    <i className={passwordCriteria.uppercase ? 'fa-solid fa-check' : 'fa-solid fa-times'}></i> Al menos una mayúscula (A-Z)
                  </li>
                  <li className={passwordCriteria.lowercase ? 'criteria__met' : 'criteria__not--met'}>
                    <i className={passwordCriteria.lowercase ? 'fa-solid fa-check' : 'fa-solid fa-times'}></i> Al menos una minúscula (a-z)
                  </li>
                  <li className={passwordCriteria.number ? 'criteria__met' : 'criteria__not--met'}>
                    <i className={passwordCriteria.number ? 'fa-solid fa-check' : 'fa-solid fa-times'}></i> Al menos un número (0-9)
                  </li>
                  <li className={passwordCriteria.specialChar ? 'criteria__met' : 'criteria__not--met'}>
                    <i className={passwordCriteria.specialChar ? 'fa-solid fa-check' : 'fa-solid fa-times'}></i> Al menos un carácter especial (e.g., !@#$)
                  </li>
                </ul>
                {password && (
                  <p className={`password__strength strength-${passwordStrength.toLowerCase()}`}>
                    Fortaleza de la contraseña: {passwordStrength}
                  </p>
                )}
              </div>
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

            {/* Añadir reCAPTCHA v2 */}
            <div className="login__recaptcha">
              <ReCAPTCHA sitekey={RECAPTCHA_V2_SITE_KEY} onChange={handleRecaptchaV2} />
            </div>

            <button type="submit" className="login__button">
              Registrarse
            </button>

            <hr className="login__hr" />
            <span className="login__span">Registrarse con Terceros</span>
            <a href="#" className="login__enlace--google" onClick={handleGoogleRegister}>
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
        {showAlert && <Alert message={error || success} type={error ? 'error' : 'success'} onClose={closeAlert} />}
      </div>
    </main>
  );
};

export default RegisterFormUI;