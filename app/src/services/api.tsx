import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.15.2:8082',
});

export default api;