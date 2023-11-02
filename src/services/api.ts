import axios from 'axios';
import { SnackData } from '../interfaces/SnackData';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export const getBurgers = () => api.get<SnackData[]>('/burgers')
export const getPizzas = () => api.get<SnackData[]>('/pizzas')
export const getBebidas = () => api.get<SnackData[]>('/drinks')
export const getSorvetes = () => api.get<SnackData[]>('/ice-creams')

export default api;
