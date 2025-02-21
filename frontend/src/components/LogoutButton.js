import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/Authcontext';

const LogoutButton = () => {
  const { logout } = useAuth(); // Função de logout do contexto de autenticação
  const navigate = useNavigate();

  const handleLogout = () => {
    logout(); // Remove o token
    navigate('/login'); // Redireciona para a página de login
  };

  return (
    <button
      onClick={handleLogout}
      className="btn btn-danger w-100 mt-3"
    >
      <i className="fas fa-sign-out-alt me-2"></i> Logout
    </button>
  );
};

export default LogoutButton;