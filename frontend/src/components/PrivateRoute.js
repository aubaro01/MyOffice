// src/components/PrivateRoute.js
import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Exemplo simples: verificando se existe a flag "isLoggedIn" no localStorage
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
