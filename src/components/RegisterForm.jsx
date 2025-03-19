import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebase';
import { saveUserData, determineRole, isEmailRegistered } from '../services/dbService';
import Alert from '../components/Alert';

const RegisterForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [passwordCriteria, setPasswordCriteria] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    number: false,
    specialChar: false,
  });
  const [passwordStrength, setPasswordStrength] = useState('');
  const navigate = useNavigate();

  // Función para validar la contraseña
  const validatePassword = (password) => {
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordCriteria({
      length,
      uppercase,
      lowercase,
      number,
      specialChar,
    });

    // Determinar la fortaleza de la contraseña
    const criteriaMet = [length, uppercase, lowercase, number, specialChar].filter(Boolean).length;
    if (criteriaMet === 5) {
      setPasswordStrength('Fuerte');
    } else if (criteriaMet >= 3) {
      setPasswordStrength('Media');
    } else {
      setPasswordStrength('Débil');
    }

    return length && uppercase && lowercase && number && specialChar;
  };

  // Manejar cambios en la contraseña
  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    validatePassword(newPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    if (!username || !email || !password || !termsAccepted) {
      setError('Por favor, completa todos los campos y acepta los términos.');
      setShowAlert(true);
      return;
    }

    // Validar la contraseña
    if (!validatePassword(password)) {
      setError('La contraseña no cumple con los requisitos de seguridad.');
      setShowAlert(true);
      return;
    }

    // Verificar si el correo ya está registrado
    const isRegistered = await isEmailRegistered(email);
    if (isRegistered) {
      setError('Este correo ya está registrado. Por favor, inicia sesión.');
      setShowAlert(true);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      const role = determineRole(email);
      await saveUserData(user.uid, username, email, role);

      setSuccess('Registro exitoso! Por favor, inicia sesión.');
      setShowAlert(true);
      setTimeout(() => navigate('/login'), 2000);
      setUsername('');
      setEmail('');
      setPassword('');
      setTermsAccepted(false);
      setPasswordCriteria({
        length: false,
        uppercase: false,
        lowercase: false,
        number: false,
        specialChar: false,
      });
      setPasswordStrength('');
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Este correo ya está registrado. Por favor, inicia sesión.');
      } else {
        setError('Error al registrarse: ' + err.message);
      }
      setShowAlert(true);
    }
  };

  const handleGoogleRegister = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      const isRegistered = await isEmailRegistered(user.email);
      if (isRegistered) {
        await auth.signOut();
        setError('Este correo ya está registrado con Google. Por favor, inicia sesión.');
        setShowAlert(true);
        return;
      }

      const derivedUsername = user.displayName || user.email.split('@')[0];
      const role = determineRole(user.email);
      await saveUserData(user.uid, derivedUsername, user.email, role);

      setSuccess(`Registro exitoso con Google! Por favor, inicia sesión.`);
      setShowAlert(true);
      setTimeout(() => navigate('/login'), 2000);
    } catch (err) {
      if (err.code === 'auth/email-already-in-use') {
        setError('Este correo ya está registrado con Google. Por favor, inicia sesión.');
      } else {
        setError('Error con Google: ' + err.message);
      }
      setShowAlert(true);
    }
  };

  const closeAlert = () => setShowAlert(false);

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
              {/* Mostrar criterios de contraseña */}
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

export default RegisterForm;