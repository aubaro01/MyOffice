import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o Bootstrap

const ClienteDetails = () => {
    const [cliente, setCliente] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Obtém o ID do cliente da URL
    const { id } = useParams();

    // Busca os detalhes do cliente ao carregar o componente
    useEffect(() => {
        axios.get(`http://localhost:8000/api/clientes/${id}`)
            .then(response => {
                setCliente(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Erro ao buscar detalhes do cliente:', error);
                setError('Cliente não encontrado');
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
            <h2>Detalhes do Cliente</h2>
            <div className="card shadow-sm">
                <div className="card-body">
                    <h4 className="card-title">Nome: {cliente.Nome_Cliente}</h4>
                    <p className="card-text">
                        <strong>Contacto:</strong> {cliente.Contacto_Cliente}
                    </p>
                    <p className="card-text">
                        <strong>Email:</strong> {cliente.Email_Cliente}
                    </p>
                    <p className="card-text">
                        <strong>NIF:</strong> {cliente.NIF}
                    </p>
                    <p className="card-text">
                        <strong>Observações:</strong> {cliente.obs}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ClienteDetails;