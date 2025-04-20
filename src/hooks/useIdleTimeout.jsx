import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../services/firebase";

// Tiempo de inactividad en milisegundos (15 minutos = 15 * 60 * 1000)
const IDLE_TIMEOUT = 15 * 60 * 1000;
// Tiempo para mostrar la advertencia antes de cerrar la sesión (30 segundos)
const WARNING_THRESHOLD = 30 * 1000;

const useIdleTimeout = () => {
  const navigate = useNavigate();
  const idleTimerRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState(IDLE_TIMEOUT);
  const [showWarning, setShowWarning] = useState(false);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      alert("Tu sesión ha expirado debido a inactividad. Por favor, inicia sesión nuevamente.");
    } catch (error) {
      console.error("Error al cerrar sesión por inactividad:", error.message);
    }
  };

  const resetIdleTimer = () => {
    if (idleTimerRef.current) {
      clearTimeout(idleTimerRef.current);
    }
    setTimeLeft(IDLE_TIMEOUT);
    setShowWarning(false);
    idleTimerRef.current = setTimeout(handleLogout, IDLE_TIMEOUT);

    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const remaining = IDLE_TIMEOUT - elapsed;
      setTimeLeft(remaining > 0 ? remaining : 0);

      if (remaining <= WARNING_THRESHOLD) {
        setShowWarning(true);
      }

      if (remaining <= 0) {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  };

  const handleActivity = () => {
    resetIdleTimer();
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        resetIdleTimer();

        window.addEventListener("mousemove", handleActivity);
        window.addEventListener("mousedown", handleActivity);
        window.addEventListener("keypress", handleActivity);
        window.addEventListener("scroll", handleActivity);
        window.addEventListener("touchstart", handleActivity);
      } else {
        if (idleTimerRef.current) {
          clearTimeout(idleTimerRef.current);
        }
        setTimeLeft(IDLE_TIMEOUT);
        setShowWarning(false);
      }
    });

    return () => {
      unsubscribe();
      if (idleTimerRef.current) {
        clearTimeout(idleTimerRef.current);
      }
      window.removeEventListener("mousemove", handleActivity);
      window.removeEventListener("mousedown", handleActivity);
      window.removeEventListener("keypress", handleActivity);
      window.removeEventListener("scroll", handleActivity);
      window.removeEventListener("touchstart", handleActivity);
    };
  }, [navigate]);

  return { timeLeft, showWarning, resetIdleTimer };
};

export default useIdleTimeout;