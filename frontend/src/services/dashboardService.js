import axios from 'axios';

const API_URL = 'http://localhost:8000/api'; // Definir a URL base para evitar repetições

export const getTotalClientes = async () => {
  try {
    const response = await axios.get(`${API_URL}/totalClientes`);
    return response.data.total || 0;
  } catch (error) {
    console.error('Erro ao buscar total de clientes:', error);
    return 0; // Retorna 0 em caso de erro para evitar falhas no frontend
  }
};

export const getTotalVeiculos = async () => {
  try {
    const response = await axios.get(`${API_URL}/totalVeiculos`);
    return response.data.total || 0;
  } catch (error) {
    console.error('Erro ao buscar total de veículos:', error);
    return 0;
  }
};

export const getTotalMarcacoesMes = async () => {
  try {
    const response = await axios.get(`${API_URL}/totalMarcacoesMes`);
    return response.data.total || 0;
  } catch (error) {
    console.error('Erro ao buscar total de marcações no mês:', error);
    return 0;
  }
};
