import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa o CSS do Bootstrap
//import 'unicons/css/line.css'; // Ícones

const Navbar = () => {
    return (
        <nav className="bg-light sidebar">
            <div className="logo-name p-3 text-center">
                <div className="logo-image mb-2">
                    <img src="/assets/images/logo.png" alt="LOGO ICON" className="img-fluid" />
                </div>
                <span className="logo_name h5">AutoDash</span>
            </div>

            <div className="menu-items p-3">
                <ul className="nav flex-column">
                    <li className="nav-item">
                        <Link to="/dashboard" className="nav-link">
                            <i className="uil uil-estate"></i>
                            <span className="link-name">Home</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Clientes" className="nav-link">
                            <i className="uil uil-users-alt"></i>
                            <span className="link-name">Clientes</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Veiculos" className="nav-link">
                            <i className="uil uil-shopping-cart-alt"></i>
                            <span className="link-name">Veiculos</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/Marcacao" className="nav-link">
                            <i className="uil uil-comments"></i>
                            <span className="link-name">Marcações</span>
                        </Link>
                    </li>
                </ul>

                <ul className="nav flex-column mt-4">
                    <li className="nav-item">
                        <Link to="/logout" className="nav-link">
                            <i className="uil uil-signout"></i>
                            <span className="link-name">Logout</span>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">
                            <i className="uil uil-moon"></i>
                            <span className="link-name">Modo Escuro</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;