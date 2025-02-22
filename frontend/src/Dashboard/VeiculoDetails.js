import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o Bootstrap

const VeiculoDetails = () => {
    const [veiculo, setVeiculo] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Obtém o ID do veículo da URL
    const { id } = useParams();

    // Busca os detalhes do veículo ao carregar o componente
    useEffect(() => {
        axios.get(`http://localhost:8000/api/veiculos/${id}`)
            .then(response => {
                setVeiculo(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar detalhes do veículo:', error);
                setError('Veículo não encontrado');
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div className="container mt-5">
            <h2>Detalhes do Veículo</h2>
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
                </div>
            </div>
        </div>
    );
};

export default VeiculoDetails;