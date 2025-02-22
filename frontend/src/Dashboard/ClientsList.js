import React, { useContext } from 'react';
import { AuthContext } from '../context/Authcontext'; // Verifique o caminho

const ClientesList = () => {
  const { isAuthenticated } = useContext(AuthContext); // Usa o contexto

  if (!isAuthenticated) {
    return <p>Você não tem permissão para acessar esta página.</p>;
  }

  return (
    <div>
      <h2>Lista de Clientes</h2>
      {/* Adicione a lógica da tabela de clientes aqui */}
    </div>
  );
};

export default ClientesList;