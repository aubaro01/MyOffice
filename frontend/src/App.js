import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { AuthProvider } from './context/Authcontext'; // Importe o AuthProvider
import Login from './pages/login';
import Dashboard from './Dashboard/Dashboard';
import ClientesList from './Dashboard/ClientsList';
import VeiculosList from './Dashboard/VeiculoList';
import VeiculoDetails from './Dashboard/VeiculoDetails';
import Marcacoes from './Dashboard/MarcacaoList';
import Home from './pages/home';
import Error from './pages/error';

const App = () => {
  return (
    <AuthProvider> {/* Envolva todas as rotas com o AuthProvider */}
      <Router>
        <Routes>
          {/* Rota para a página inicial */}
          <Route path="/home" element={<Home />} />

          {/* Rota para o login */}
          <Route path="/login" element={<Login />} />

          {/* Rota para a página de erro */}
          <Route path="/error" element={<Error />} />

          {/* Rotas Protegidas */}
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route
            path="/clientes"
            element={
              <PrivateRoute>
                <ClientesList />
              </PrivateRoute>
            }
          />
          <Route
            path="/veiculos"
            element={
              <PrivateRoute>
                <VeiculosList />
              </PrivateRoute>
            }
          />
          <Route
            path="/veiculos/:id"
            element={
              <PrivateRoute>
                <VeiculoDetails />
              </PrivateRoute>
            }
          />
          <Route
            path="/marcacoes"
            element={
              <PrivateRoute>
                <Marcacoes />
              </PrivateRoute>
            }
          />

          {/* Redireciona a rota raiz ("/") para a página inicial */}
          <Route path="/" element={<Navigate to="/home" />} />

          {/* Rota para páginas não encontradas (fallback) */}
          <Route path="*" element={<Navigate to="/error" />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
};

export default App;