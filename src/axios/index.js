import axios from './axios';

export const api = axios.create({
  baseURL: 'api.openweathermap.org/data/2.5/forecast?lat=35&lon=139&appid={bad46dfee1ae1125ec4faf31e63449de}'
})