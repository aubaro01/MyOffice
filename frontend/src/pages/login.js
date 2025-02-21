import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ Log_admin: '', Pass_admin: '' });
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lógica de login aqui
    navigate('/'); // Redirecionar para a página inicial após o login
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <form onSubmit={handleSubmit} className="p-4 bg-white rounded shadow-sm">
        <h2 className="text-center mb-4">Login</h2>
        <div className="mb-3">
          <label className="form-label">Login</label>
          <input
            type="text"
            value={form.Log_admin}
            onChange={(e) => setForm({ ...form, Log_admin: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Senha</label>
          <input
            type="password"
            value={form.Pass_admin}
            onChange={(e) => setForm({ ...form, Pass_admin: e.target.value })}
            className="form-control"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary w-100">
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;