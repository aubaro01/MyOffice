import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Clientes = () => {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    // Buscar clientes da API
    axios.get('http://localhost:8000/api/clientes')
      .then(response => setClientes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Clientes</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Nome</th>
            <th>Contacto</th>
            <th>Email</th>
            <th>NIF</th>
          </tr>
        </thead>
        <tbody>
          {clientes.map(cliente => (
            <tr key={cliente.id_Cliente}>
              <td>{cliente.id_Cliente}</td>
              <td>{cliente.Nome_Cliente}</td>
              <td>{cliente.Contacto_Cliente}</td>
              <td>{cliente.Email_Cliente}</td>
              <td>{cliente.NIF}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Clientes;