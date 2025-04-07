import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

const ProtectedRoutes = ({ children, requireAdmin = false }) => {
  const { currentUser } = useContext(AuthContext);
  const [userRole, setUserRole] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserRole = async () => {
      if (currentUser) {
        try {
          const userDocRef = doc(db, 'users', currentUser.uid);
          const userDoc = await getDoc(userDocRef);
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role);
          }
        } catch (error) {
          console.error('Error al obtener el rol del usuario:', error.message);
        }
      }
      setLoading(false);
    };

    fetchUserRole();
  }, [currentUser]);

  if (loading) {
    return <div>Cargando...</div>;
  }

  // Si el usuario no está autenticado, redirigir a /login
  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  // Si la ruta requiere rol de administrador y el usuario no lo tiene, redirigir a /news
  if (requireAdmin && userRole !== 'administrador') {
    return <Navigate to="/news" />;
  }

  // Si pasa todas las verificaciones, renderizar el componente hijo
  return children;
};

export default ProtectedRoutes;