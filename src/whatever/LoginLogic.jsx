import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, functions, httpsCallable } from "../services/firebase";

export const LoginLogic = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const [showRecaptchaV2, setShowRecaptchaV2] = useState(true); // Mostrar reCAPTCHA v2 por defecto
  const [recaptchaToken, setRecaptchaToken] = useState(null); // Almacenar el token de reCAPTCHA v2
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");

    if (!email || !password) {
      setError("Por favor, completa todos los campos.");
      setShowAlert(true);
      return;
    }

    if (!recaptchaToken) {
      setError("Por favor, completa el desafío de reCAPTCHA.");
      setShowAlert(true);
      return;
    }

    try {
      // Verificar reCAPTCHA v2
      const verifyReCaptchaV2 = httpsCallable(functions, "verifyReCaptchaV2");
      const v2Result = await verifyReCaptchaV2({ token: recaptchaToken });

      if (!v2Result.data.success) {
        setError("Fallo en la verificación de reCAPTCHA v2.");
        setShowAlert(true);
        setRecaptchaToken(null); // Resetear el token para que el usuario lo complete de nuevo
        return;
      }

      // Si pasa reCAPTCHA v2, continuar con el login
      await performLogin();
    } catch (err) {
      setError("Error al verificar reCAPTCHA: " + err.message);
      setShowAlert(true);
      setRecaptchaToken(null);
    }
  };

  const handleGoogleLogin = async () => {
    setError("");
    setSuccess("");

    if (!recaptchaToken) {
      setError("Por favor, completa el desafío de reCAPTCHA.");
      setShowAlert(true);
      return;
    }

    try {
      // Verificar reCAPTCHA v2
      const verifyReCaptchaV2 = httpsCallable(functions, "verifyReCaptchaV2");
      const v2Result = await verifyReCaptchaV2({ token: recaptchaToken });

      if (!v2Result.data.success) {
        setError("Fallo en la verificación de reCAPTCHA v2.");
        setShowAlert(true);
        setRecaptchaToken(null);
        return;
      }

      // Si pasa reCAPTCHA v2, continuar con el login con Google
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      setSuccess(`Bienvenido, ${user.displayName}!`);
      setShowAlert(true);
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setError("Error al iniciar sesión con Google: " + err.message);
      setShowAlert(true);
      setRecaptchaToken(null);
    }
  };

  // Función para manejar el login con email/contraseña
  const performLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSuccess("Inicio de sesión exitoso!");
      setShowAlert(true);
      setEmail("");
      setPassword("");
      setRecaptchaToken(null); // Resetear el token después de un login exitoso
      setTimeout(() => navigate("/"), 2000);
    } catch (err) {
      setError("Error al iniciar sesión: " + err.message);
      setShowAlert(true);
      setRecaptchaToken(null);
    }
  };

  // Función para manejar la verificación de reCAPTCHA v2
  const handleRecaptchaV2 = (token) => {
    setRecaptchaToken(token); // Almacenar el token cuando el usuario completa reCAPTCHA v2
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
    showRecaptchaV2,
    handleSubmit,
    handleGoogleLogin,
    handleRecaptchaV2,
    closeAlert,
  };
};