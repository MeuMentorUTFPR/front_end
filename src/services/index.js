import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: 10000
});

export default api;