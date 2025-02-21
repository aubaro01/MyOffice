import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';

const PrivateRoute = ({ children }) => {
  const { user } = useAuth(); // Verifica se o usuário está autenticado
  return user ? children : <Navigate to="/login" />; // Redireciona para o login se não estiver autenticado
};

export default PrivateRoute;