import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const navigate = useNavigate();
    const [isAuthenticated, setIsAuthenticated] = useState(true); // Estado de autenticação

    const handleSair = () => {
        // 1. Remove o estado de autenticação do localStorage
        localStorage.removeItem('isAuthenticated');
    
        // 2. Redireciona para a página de login
        navigate('/login');
    };

    return (
        <nav className="h-100 d-flex flex-column p-3 shadow fixed-left bg-light text-dark" style={{ width: '250px' }}>
            {/* Logo e Nome do Sistema */}
            <div className="text-center mb-4">
                <img src="/assets/images/logo.png" alt="LOGO ICON" className="img-fluid mb-2" style={{ width: '80px' }} />
                <h2 className="h4 font-weight-bold">AutoDash</h2>
            </div>

            {/* Links de Navegação */}
            <ul className="nav flex-column flex-grow-1">
                <li className="nav-item mb-2">
                    <Link to="/dashboard" className="nav-link d-flex align-items-center p-2 rounded text-dark hover-light">
                        <i className="uil uil-estate mr-3" style={{ fontSize: '1.25rem' }}></i>
                        <span className="font-weight-bold">Home</span>
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/Clientes" className="nav-link d-flex align-items-center p-2 rounded text-dark hover-light">
                        <i className="uil uil-users-alt mr-3" style={{ fontSize: '1.25rem' }}></i>
                        <span className="font-weight-bold">Clientes</span>
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/Veiculos" className="nav-link d-flex align-items-center p-2 rounded text-dark hover-light">
                        <i className="uil uil-car mr-3" style={{ fontSize: '1.25rem' }}></i>
                        <span className="font-weight-bold">Veículos</span>
                    </Link>
                </li>
                <li className="nav-item mb-2">
                    <Link to="/Marcacao" className="nav-link d-flex align-items-center p-2 rounded text-dark hover-light">
                        <i className="uil uil-calendar-alt mr-3" style={{ fontSize: '1.25rem' }}></i>
                        <span className="font-weight-bold">Marcações</span>
                    </Link>
                </li>
            </ul>

            {/* Botão de Sair */}
            <ul className="nav flex-column border-top pt-3">
                <li className="nav-item">
                    <button
                        onClick={handleSair} // Chama a função de sair
                        className="nav-link d-flex align-items-center p-2 rounded w-100 border-0 bg-light text-dark"
                    >
                        <i className="uil uil-signout mr-3" style={{ fontSize: '1.25rem' }}></i>
                        <span className="font-weight-bold">Sair</span>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;