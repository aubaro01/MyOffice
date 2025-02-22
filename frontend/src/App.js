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
        {/* Rota raiz */}
        <Route path="/home" element={<Home />} />

        {/* Rota de login */}
        <Route path="/login" element={<Login />} />

        {/* Rotas protegidas */}
        <Route
          path="/dashboard"
          element={
            //Colocar private para auth
            <Dashboard />
          }
        />
        <Route
          path="/clientes"
          element={
                        //Colocar private para auth

              <Clientes />
          
          }
        />
        <Route
          path="/veiculos"
          element={
                        //Colocar private para auth

              <Veiculos />
          }
        />
        <Route
          path="/marcacoes"
          element={
            //Colocar private para auth
            <Marcacoes />
          }
        />

        {/* Rota para páginas não encontradas (fallback) */}
        <Route path="*" element={<h1>404 - Página não encontrada</h1>} />
      </Routes>
    </Router>
  );
};

export default App;