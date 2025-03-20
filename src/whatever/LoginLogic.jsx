import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from '../services/firebase';

export const LoginLogic = () => {
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
    } catch (err) {
      setError('Error con Google: ' + err.message);
      setShowAlert(true);
    }
  };

  const closeAlert = () => setShowAlert(false);

  return {
    email,
    setEmail,
    password,
    setPassword,
    error,
    success,
    showAlert,
    handleSubmit,
    handleGoogleLogin,
    closeAlert,
  };
};