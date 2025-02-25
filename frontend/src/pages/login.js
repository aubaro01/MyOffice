import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../configure/axiosConfig';
import './login.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { AuthContext } from '../context/Authcontext';

const Login = () => {
  const [form, setForm] = useState({ Log_admin: '', Pass_admin: '' });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const userRef = useRef(null);
  const { login } = useContext(AuthContext); // Use o login do contexto

  useEffect(() => {
    if (userRef.current) {
      userRef.current.focus();
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    try {
      const response = await axios.post('/login', form, { withCredentials: true });
      console.log('Resposta da API:', response.data); // Verifique a resposta da API

      login(); // Chama a função login do contexto
      setSuccess(true);
      setForm({ Log_admin: '', Pass_admin: '' });
      navigate('/dashboard'); // Redireciona imediatamente após o login
    } catch (error) {
      setError('Credenciais inválidas ou erro no servidor');
      console.error('Erro no login:', error); // Log de erro
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Login</h2>
        {success && <div className="alert alert-success">Login bem-sucedido! Redirecionando...</div>}
        {error && <div className="alert alert-danger">{error}</div>}
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="username">Usuário</label>
            <input
              type="text"
              id="username"
              name="Log_admin"
              ref={userRef}
              value={form.Log_admin}
              onChange={handleChange}
              className="form-control"
              placeholder="Digite seu usuário"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Senha</label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="Pass_admin"
                value={form.Pass_admin}
                onChange={handleChange}
                className="form-control"
                placeholder="Digite sua senha"
                required
              />
              <button
                type="button"
                className="toggle-password"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>
          <button type="submit" className="btn btn-primary w-100" disabled={loading}>
            {loading ? 'Carregando...' : 'Entrar'}
          </button>
        </form>

        {/* Botão "Voltar para a Home" */}
        <button
          onClick={() => navigate('/home')}
          className="btn btn-secondary w-100 mt-3"
        >
          Voltar para a Home
        </button>

        <p className="text-center mt-3">
          <button onClick={() => navigate('/recuperar-senha')} className="forgot-password">
            Esqueceu a senha?
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;