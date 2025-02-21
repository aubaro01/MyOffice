import React from 'react';
import Sidebar from '../components/SideBar';
import SummaryCard from './components/card';
import LogoutButton from './components/LogoutButton'; // Importe o botão de logout

const Dashboard = () => {
  return (
    <div className="d-flex">
      <Sidebar />
      <div className="flex-grow-1 p-4">
        <div className="d-flex justify-content-end mb-4">
          <LogoutButton /> {/* Adicione o botão de logout no canto superior direito */}
        </div>
        <h1 className="mb-4">Dashboard</h1>
        <div className="row mb-4">
          <div className="col-md-4">
            <SummaryCard title="Total de Clientes" value="120" color="primary" />
          </div>
          <div className="col-md-4">
            <SummaryCard title="Total de Veículos" value="85" color="success" />
          </div>
          <div className="col-md-4">
            <SummaryCard title="Marcas Registradas" value="10" color="warning" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;