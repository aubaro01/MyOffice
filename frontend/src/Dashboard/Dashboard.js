import React, { useEffect, useState } from 'react';
import axios from '../configure/axiosConfig';
import Navbar from './components/NavBar';
import Card from './components/card'; // Importe o componente Card
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [totalClientes, setTotalClientes] = useState(0);
  const [totalMarcacao, setTotalMarcacao] = useState(0);
  const [totalVeiculos, setTotalVeiculos] = useState(0);
  const [marcacoesHoje, setMarcacoesHoje] = useState([]);

  useEffect(() => {
    // Busca o total de clientes
    axios.get('/api/total-clientes')
      .then(response => setTotalClientes(response.data.total))
      .catch(error => console.error('Erro ao buscar Clientes:', error));

    // Busca o total de marcações
    axios.get('/api/totalMarcacao')
      .then(response => setTotalMarcacao(response.data.total))
      .catch(error => console.error('Erro ao buscar Marcações:', error));

    // Busca o total de veículos
    axios.get('/api/totalVeiculos')
      .then(response => setTotalVeiculos(response.data.total))
      .catch(error => console.error('Erro ao buscar Veiculos:', error));

    // Busca as marcações do dia
    axios.get('/api/marcacoesHoje')
      .then(response => setMarcacoesHoje(response.data))
      .catch(error => console.error('Erro ao buscar Marcações do Dia:', error));
  }, []);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Sidebar */}
        <div className="col-md-2 bg-light p-0 border-end">
          <Navbar />
        </div>
        
        {/* Main Content */}
        <div className="col-md-10 p-4">
          <div className="d-flex justify-content-between align-items-center mb-4">
            <h2 className="mb-0">Dashboard</h2>
          </div>

          {/* Welcome Message */}
          <div className="mb-5 p-4 bg-white rounded shadow-sm text-center">
            <h3>Bem-vindo ao PcDash</h3>
            <p className="text-muted">Aqui estão algumas estatísticas do seu negócio</p>
          </div>

          {/* Statistics Cards */}
          <div className="row">
            <div className="col-md-4 mb-4">
              <Card
                icon="uil uil-users-alt"
                title="Total de Clientes"
                value={totalClientes}
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                icon="uil uil-shopping-cart-alt"
                title="Total de Marcações"
                value={totalMarcacao}
              />
            </div>
            <div className="col-md-4 mb-4">
              <Card
                icon="uil uil-car"
                title="Total de Veículos"
                value={totalVeiculos}
              />
            </div>
          </div>

          {/* Today's Appointments Table */}
          <div className="row mt-5">
            <div className="col-12">
              <div className="card shadow-sm">
                <div className="card-header bg-white">
                  <h5 className="mb-0">Marcações do Dia</h5>
                </div>
                <div className="card-body">
                  {marcacoesHoje.length > 0 ? (
                    <table className="table table-striped">
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Cliente</th>
                          <th>Veículo</th>
                          <th>Data</th>
                          <th>Estado</th>
                        </tr>
                      </thead>
                      <tbody>
                        {marcacoesHoje.map(marcacao => (
                          <tr key={marcacao.id}>
                            <td>{marcacao.id}</td>
                            <td>{marcacao.cliente}</td>
                            <td>{marcacao.veiculo}</td>
                            <td>{new Date(marcacao.data).toLocaleString()}</td>
                            <td>{marcacao.estado}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ) : (
                    <p className="text-muted">Nenhuma marcação para hoje.</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;