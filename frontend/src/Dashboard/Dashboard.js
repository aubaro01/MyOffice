import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar from './components/NavBar';
import Card from './components/card';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap

const Dashboard = () => {
    const [totalClientes, setTotalClientes] = useState(0);
    const [totalMarcacao, setTotalMarcacao] = useState(0);
    const [totalVeiculos, setTotalVeiculos] = useState(0);

    useEffect(() => {
        // Requisições para buscar os dados
        axios.get('/api/totalMarcacao')
            .then(response => setTotalClientes(response.data.total))
            .catch(error => console.error('Erro ao buscar Marcações:', error));

        axios.get('/api/totalClientes')
            .then(response => setTotalMarcacao(response.data.total))
            .catch(error => console.error('Erro ao buscar Clientes:', error));

        axios.get('/api/totalVeiculos')
            .then(response => setTotalVeiculos(response.data.total))
            .catch(error => console.error('Erro ao buscar Veiculos:', error));
    }, []);

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-2 bg-light p-0">
                    <Navbar />
                </div>
                <div className="col-md-10 p-4">
                    <div className="top">
                        <i className="uil uil-bars sidebar-toggle"></i>
                    </div>
                    <div className="welcome-message text-center mt-4">
                        <h2>Bem-vindo ao PcDash</h2>
                        <p>Algumas estatísticas do seu negocio</p>
                    </div>

                    <div className="cards-container d-flex justify-content-around mt-5">
                        <Card icon="uil uil-users-alt" title="Total de Clientes" value={totalClientes} />
                        <Card icon="uil uil-shopping-cart-alt" title="Total de Marcações" value={totalMarcacao} />
                        <Card icon="uil uil-comments" title="Total de Veiculos" value={totalVeiculos} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;