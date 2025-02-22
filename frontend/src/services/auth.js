import api from './api';

export const login = async (credentials) => {
  try {
    const response = await api.post('/login', credentials);
    localStorage.setItem('token', response.data.token); // Salvar token no localStorage
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const logout = async () => {
  try {
    await api.post('/logout');
    localStorage.removeItem('token'); // Remover token do localStorage
  } catch (error) {
    throw error.response.data;
  }
};