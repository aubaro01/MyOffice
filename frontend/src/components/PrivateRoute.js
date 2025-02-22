import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../context/Authcontext';

const PrivateRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext); // Verifica o estado de autenticação

  return isAuthenticated ? children : <Navigate to="/login" />; // Redireciona para o login se não estiver autenticado
};

export default PrivateRoute;