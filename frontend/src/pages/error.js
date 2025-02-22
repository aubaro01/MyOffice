import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Error = () => {
    return (
        <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light text-center">
            {/* Imagem ilustrativa */}
            <img
                src="https://cdn.pixabay.com/photo/2017/03/09/12/31/error-2129569_1280.jpg"
                alt="Erro 404"
                className="img-fluid mb-4"
                style={{ maxWidth: '300px' }}
            />

            {/* Título e Mensagem */}
            <h1 className="display-1 font-weight-bold text-danger mb-3">404</h1>
            <h2 className="h3 text-secondary mb-4">Oops! Página não encontrada.</h2>
            <p className="lead text-muted mb-5">
                Parece que você tentou acessar uma página que não existe. <br />
                Verifique o endereço ou volte para a página inicial.
            </p>

            {/* Botão para Voltar ao Dashboard */}
            <Link to="/dashboard" className="btn btn-primary btn-lg">
                <i className="uil uil-estate mr-2"></i><br></br>
                Voltar para o Dashboard
            </Link>
        </div>
    );
};

export default Error;