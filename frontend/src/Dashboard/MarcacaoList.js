import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Marcacoes = () => {
  const [marcacoes, setMarcacoes] = useState([]);

  useEffect(() => {
    // Buscar marcações da API
    axios.get('http://localhost:8000/api/marcacoes')
      .then(response => setMarcacoes(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Lista de Marcações</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Data</th>
            <th>Veículo</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          {marcacoes.map(marcacao => (
            <tr key={marcacao.id_Marcacao}>
              <td>{marcacao.id_Marcacao}</td>
              <td>{marcacao.Data_Marc}</td>
              <td>{marcacao.id_veiculo}</td>
              <td>{marcacao.Estado}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Marcacoes;