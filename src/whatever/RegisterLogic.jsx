import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebase';
import { saveUserData, determineRole, isEmailRegistered } from '../services/dbService';

export const RegisterLogic = () => {
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

  const validatePassword = (password) => {
    const length = password.length >= 8;
    const uppercase = /[A-Z]/.test(password);
    const lowercase = /[a-z]/.test(password);
    const number = /[0-9]/.test(password);
    const specialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    setPasswordCriteria({ length, uppercase, lowercase, number, specialChar });

    const criteriaMet = [length, uppercase, lowercase, number, specialChar].filter(Boolean).length;
    if (criteriaMet === 5) setPasswordStrength('Fuerte');
    else if (criteriaMet >= 3) setPasswordStrength('Media');
    else setPasswordStrength('Débil');

    return length && uppercase && lowercase && number && specialChar;
  };

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

    if (!validatePassword(password)) {
      setError('La contraseña no cumple con los requisitos de seguridad.');
      setShowAlert(true);
      return;
    }

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

  return {
    username,
    setUsername,
    email,
    setEmail,
    password,
    setPassword,
    termsAccepted,
    setTermsAccepted,
    error,
    success,
    showAlert,
    passwordCriteria,
    passwordStrength,
    handleSubmit,
    handleGoogleRegister,
    handlePasswordChange,
    closeAlert,
  };
};