import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import Login from './pages/login';
import Dashboard from './Dashboard/Dashboard';
import Clientes from './Dashboard/ClientsList';
import Veiculos from './Dashboard/VeiculoList';
import Marcacoes from './Dashboard/MarcacaoList';
import Home from './pages/home';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
        {/* Redireciona a raiz ("/") para a dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" />} />

        {/* Rota de login */}
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas */}
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
              <Clientes />
            </PrivateRoute>
          }
        />
        <Route
          path="/veiculos"
          element={
            <PrivateRoute>
              <Veiculos />
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
      </Routes>
    </Router>
  );
};

export default App;