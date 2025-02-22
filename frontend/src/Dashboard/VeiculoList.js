import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o Bootstrap

const VeiculosList = () => {
    const [veiculos, setVeiculos] = useState([]);

    // Busca os veículos ao carregar o componente
    useEffect(() => {
        axios.get('http://localhost:8000/api/veiculos')
            .then(response => {
                setVeiculos(response.data);
            })
            .catch(error => {
                console.error('Erro ao buscar veículos:', error);
            });
    }, []);

    return (
        <div className="container mt-5">
            <h2>Lista de Veículos</h2>
            {veiculos.length > 0 ? (
                <div className="row">
                    {veiculos.map(veiculo => (
                        <div key={veiculo.id_Veiculo} className="col-md-4 mb-4">
                            <div className="card shadow-sm">
                                <div className="card-body">
                                    <h4 className="card-title">Matrícula: {veiculo.Matricula_veiculo}</h4>
                                    <p className="card-text">
                                        <strong>Cliente ID:</strong> {veiculo.id_Cliente}
                                    </p>
                                    <p className="card-text">
                                        <strong>Marca ID:</strong> {veiculo.id_Marca}
                                    </p>
                                    <p className="card-text">
                                        <strong>Modelo ID:</strong> {veiculo.id_Modelo}
                                    </p>
                                    <p className="card-text">
                                        <strong>Quilometragem:</strong> {veiculo.Km_veiculo}
                                    </p>
                                    <p className="card-text">
                                        <strong>Observações:</strong> {veiculo.obs}
                                    </p>
                                    <div className="button-container">
                                        <Link
                                            to={`/veiculos/${veiculo.id_Veiculo}`}
                                            className="btn btn-primary"
                                        >
                                            Ver Detalhes
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Nenhum veículo encontrado.</p>
            )}
        </div>
    );
};

export default VeiculosList;