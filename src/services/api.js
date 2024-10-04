// /src/services/api.js
import axios from 'axios';

// Criação da instância do axios para a API
const api = axios.create({
    baseURL: 'http://localhost:8080',  // Endereço da API
});

export default api;
