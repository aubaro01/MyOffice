import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Veiculos = () => {
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    // Buscar veículos da API
    axios.get('http://localhost:8000/api/veiculos')
      .then(response => setVeiculos(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Veículos</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Matrícula</th>
            <th>Cliente</th>
            <th>Marca</th>
            <th>Modelo</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map(veiculo => (
            <tr key={veiculo.id_Veiculo}>
              <td>{veiculo.id_Veiculo}</td>
              <td>{veiculo.Matricula_veiculo}</td>
              <td>{veiculo.id_Cliente}</td>
              <td>{veiculo.id_Marca}</td>
              <td>{veiculo.id_Modelo}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Veiculos;