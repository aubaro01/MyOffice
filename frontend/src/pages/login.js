import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [form, setForm] = useState({ Log_admin: '', Pass_admin: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate(); // Hook para redirecionamento

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      // Faz a requisição para o backend
      const response = await axios.post('http://localhost:8000/api/login', form);

      // Login bem-sucedido
      localStorage.setItem('token', response.data.token); // Armazena o token
      setSuccess(true); // Exibe mensagem de sucesso

      // Redireciona para a dashboard após 2 segundos
      setTimeout(() => {
        navigate('/dashboard'); // Redireciona para a dashboard
      }, 2000);
    } catch (error) {
      setError('Credenciais inválidas ou erro no servidor');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-lg p-4 rounded-4" style={{ width: '350px', backgroundColor: '#ffffff' }}>
        <h2 className="text-center mb-4 text-primary fw-bold">Login</h2>

        {/* Mensagem de sucesso */}
        {success && (
          <div className="alert alert-success text-center">
            Login bem-sucedido! Redirecionando...
          </div>
        )}

        {/* Mensagem de erro */}
        {error && <div className="alert alert-danger">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Usuário</label>
            <input
              type="text"
              value={form.Log_admin}
              onChange={(e) => setForm({ ...form, Log_admin: e.target.value })}
              className="form-control rounded-3 border-1"
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Senha</label>
            <input
              type="password"
              value={form.Pass_admin}
              onChange={(e) => setForm({ ...form, Pass_admin: e.target.value })}
              className="form-control rounded-3 border-1"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-100 rounded-3 fw-bold d-flex align-items-center justify-content-center"
            disabled={loading}
          >
            {loading ? (
              <>
                <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                Carregando...
              </>
            ) : (
              'Entrar'
            )}
          </button>
        </form>

        <p className="text-center mt-3">
          <button
            onClick={() => navigate('/recuperar-senha')}
            className="text-decoration-none text-muted bg-transparent border-none"
          >
            Esqueceu a senha?
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;