// src/components/ProtectedRoutes.jsx
import React from 'react';
import { Navigate } from 'react-router-dom';
import { auth } from '../services/firebase';

const ProtectedRoutes = ({ children }) => {
  const user = auth.currentUser;

  return user ? children : <Navigate to="/login" replace />;
};

export default ProtectedRoutes;