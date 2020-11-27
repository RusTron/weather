import axios from 'axios';

const API_KEY = 'bad46dfee1ae1125ec4faf31e63449de';

export const getData = ({ lat, lng }) => axios
  .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&appid=${API_KEY}`);
