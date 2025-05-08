import React, { useContext, useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { db } from '../services/firebase';
import { doc, getDoc } from 'firebase/firestore';

const Protected = ({ children, requireAdmin = false }) => {
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
            setUserRole(userDoc.data().role); // Asegúrate que sea "admin" o "user"
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

  if (!currentUser) {
    return <Navigate to="/login" />;
  }

  if (requireAdmin && userRole !== 'admin') { // aquí unificamos
    return <Navigate to="/login" />;
  }

  return children;
};

export default Protected;
