import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_PROPERTY_MANAGEMENT_BACKEND_URL,
});

export default api;