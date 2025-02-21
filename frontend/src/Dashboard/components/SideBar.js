import React from 'react';
import { Link } from 'react-router-dom';
import LogoutButton from '../Dashboard/components/LogoutButton'; // Importe o botão de logout

const Sidebar = () => {
  return (
    <nav className="bg-dark text-white vh-100 p-3" style={{ width: '250px' }}>
      <h3 className="text-center mb-4">PC Auto</h3>
      <ul className="list-unstyled">
        <li className="mb-3">
          <Link to="/dashboard" className="text-white text-decoration-none">
            <i className="fas fa-home me-2"></i> Dashboard
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/clientes" className="text-white text-decoration-none">
            <i className="fas fa-users me-2"></i> Clientes
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/veiculos" className="text-white text-decoration-none">
            <i className="fas fa-car me-2"></i> Veículos
          </Link>
        </li>
        <li className="mb-3">
          <Link to="/marcacoes" className="text-white text-decoration-none">
            <i className="fas fa-calendar-alt me-2"></i> Marcações
          </Link>
        </li>
      </ul>

      {/* Adicione o botão de logout no final da barra lateral */}
      <LogoutButton />
    </nav>
  );
};

export default Sidebar;