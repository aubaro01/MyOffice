// src/components/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../configure/axiosConfig';

const Login = () => {
  const [form, setForm] = useState({ Log_admin: '', Pass_admin: '' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/login', form, { withCredentials: true });
      console.log('Resposta do backend:', response.data);
      setError(null);

      // Redireciona para a dashboard se o login foi bem-sucedido
     // Dentro do handleSubmit, após o login bem-sucedido:
if (response.data.message === 'Login efetuado com sucesso') {
  localStorage.setItem('isLoggedIn', 'true');
  navigate('/dashboard');
}

    } catch (error) {
      console.error('Erro:', error.response ? error.response.data : error.message);
      setError('Credenciais inválidas ou erro no servidor');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={form.Log_admin}
        onChange={(e) => setForm({ ...form, Log_admin: e.target.value })}
        placeholder="Usuário"
      />
      <input
        type="password"
        value={form.Pass_admin}
        onChange={(e) => setForm({ ...form, Pass_admin: e.target.value })}
        placeholder="Senha"
      />
      <button type="submit">Entrar</button>
      {error && <p>{error}</p>}
    </form>
  );
};

export default Login;
