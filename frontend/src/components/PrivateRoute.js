import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('token'); // Verifica se o utilizador está autenticado

  if (!isAuthenticated) {
    // Redireciona para a página de login se não estiver autenticado
    return <Navigate to="/login" />;
  }

  // Renderiza o componente protegido se estiver autenticado
  return children;
};

export default PrivateRoute;