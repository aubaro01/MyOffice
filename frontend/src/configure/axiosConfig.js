// src/config/axiosConfig.js
import axios from 'axios';

// Define a URL base do backend
axios.defaults.baseURL = 'http://localhost:8000/api';

// Configura o Axios para enviar credenciais (cookies/sessões)
axios.defaults.withCredentials = true;

// Adiciona headers comuns (opcional)
axios.defaults.headers.common['Accept'] = 'application/json';
axios.defaults.headers.common['Content-Type'] = 'application/json';

export default axios;