import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="bg-light">
      {/* Navbar */}
      <nav className="navbar navbar-expand-md navbar-light bg-white shadow fixed-top">
        <div className="container">
          <a className="navbar-brand fw-bold text-dark" href="/">PC Auto</a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Alternar navegação"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#recursos">Recursos</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#produto">Produto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#contato">Contato</a>
              </li>
              <li className="nav-item">
                <a className="nav-link btn btn-outline-dark" href="/login">Login</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="d-flex flex-column align-items-center justify-content-center text-white text-center"
        style={{ height: "100vh", background: "linear-gradient(to right, #343a40, #6c757d)" }}
      >
        <h1 className="display-4 fw-bold">PC Auto</h1>
        <p className="lead">Gestão inteligente para oficinas automotivas</p>
      </section>

      {/* Recursos */}
      <section id="recursos" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Recursos</h2>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    {/* Ícone de Gestão de Clientes */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-people text-dark"
                      viewBox="0 0 16 16"
                    >
                      <path d="M13 7c0 1.105-.672 2-1.5 2S10 8.105 10 7s.672-2 1.5-2S13 5.895 13 7zm-9 0c0 1.105.672 2 1.5 2S7 8.105 7 7s-.672-2-1.5-2S4 5.895 4 7zM10 8.5c.828 0 1.5.895 1.5 2S10.828 13 10 13H6c-.828 0-1.5-.895-1.5-2S5.172 8.5 6 8.5h4zM4.5 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" />
                    </svg>
                  </div>
                  <h5 className="card-title">Gestão de Clientes</h5>
                  <p className="card-text">Organize seus clientes de forma eficiente.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    {/* Ícone de Controle de Veículos */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-car-front text-dark"
                      viewBox="0 0 16 16"
                    >
                      <path d="M4 9a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3H4V9z" />
                      <path
                        fillRule="evenodd"
                        d="M2.93 4.21A1.5 1.5 0 0 1 4.26 3h7.48a1.5 1.5 0 0 1 1.33.79l1.26 2.1A1.5 1.5 0 0 1 14 7H2a1.5 1.5 0 0 1-.92-2.01l1.85-3zM12 1H4a2 2 0 0 0-1.78 1.11L.79 6.2a.5.5 0 0 0 0 .3l2.43 4.18A2 2 0 0 0 4 11h8a2 2 0 0 0 1.78-1.11l2.43-4.18a.5.5 0 0 0 0-.3l-2.43-4.09A2 2 0 0 0 12 1z"
                      />
                    </svg>
                  </div>
                  <h5 className="card-title">Controle de Veículos</h5>
                  <p className="card-text">Acompanhe veículos e serviços realizados.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card h-100 shadow-sm">
                <div className="card-body text-center">
                  <div className="mb-3">
                    {/* Ícone de Agendamentos */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-calendar-check text-dark"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.854 7.146a.5.5 0 0 0-.708.708L11.293 9H8.5a.5.5 0 0 0 0 1h2.793l-1.147 1.146a.5.5 0 1 0 .708.708l2-2a.5.5 0 0 0 0-.708l-2-2z" />
                      <path d="M1 2a1 1 0 0 1 1-1h1v1H2v1h12V2h-1V1h1a1 1 0 0 1 1 1v2H1V2zm0 3h14v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5zm4 3a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1H5z" />
                    </svg>
                  </div>
                  <h5 className="card-title">Agendamentos</h5>
                  <p className="card-text">Gerencie e automatize as marcações.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Produto */}
      <section id="produto" className="py-5 bg-white">
        <div className="container">
          <h2 className="text-center mb-4">Nosso Produto</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <img
                src="../assets/img/relatorio.png"
                className="img-fluid rounded shadow"
                alt="Interface do Sistema"
              />
            </div>
            <div className="col-md-6">
              <h3 className="mb-3">Interface Intuitiva</h3>
              <p>
                Experiência moderna e fluida para melhor produtividade. Nossa interface foi projetada para simplificar tarefas e otimizar o fluxo de trabalho, oferecendo uma experiência agradável e intuitiva.
              </p>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <i className="bi bi-check2 me-2 text-dark"></i>
                  Fácil navegação
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2 me-2 text-dark"></i>
                  Design responsivo
                </li>
                <li className="mb-2">
                  <i className="bi bi-check2 me-2 text-dark"></i>
                  Performance otimizada
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Contato */}
      <section id="contato" className="py-5">
        <div className="container">
          <h2 className="text-center mb-4">Entre em Contato</h2>
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card shadow-sm">
                <div className="card-body">
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Nome" required />
                    </div>
                    <div className="mb-3">
                      <input type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="mb-3">
                      <textarea className="form-control" rows="4" placeholder="Mensagem" required></textarea>
                    </div>
                    <div className="d-grid">
                      <button type="submit" className="btn btn-dark">
                        Enviar
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3">
        <div className="container">
          <p className="mb-0">PC Auto © 2025. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
