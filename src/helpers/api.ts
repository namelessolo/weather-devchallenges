import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

const getDailyWeatherByLocation = (lat: number, lon: number) => {
  const currentWeatherURL = `${API_URL}/weather?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`;
  return axios.get(currentWeatherURL);
};

const getForecastWeatherByLocation = (lat: number, lon: number) => {
  const currentWeatherURL = `${API_URL}/forecast?appid=${API_KEY}&lat=${lat}&lon=${lon}&units=metric`;
  return axios.get(currentWeatherURL);
};

const getDailyWeatherByCity = (city: string) => {
  const currentWeatherURL = `${API_URL}/forecast?appid=${API_KEY}&q=${city}&units=metric`;
  return axios.get(currentWeatherURL);
};

const getForecastWeatherByCity = (city: string) => {
  const currentWeatherURL = `${API_URL}/weather?appid=${API_KEY}&q=${city}&units=metric`;
  return axios.get(currentWeatherURL);
};

const api = {
  getDailyWeatherByLocation,
  getForecastWeatherByLocation,
  getDailyWeatherByCity,
  getForecastWeatherByCity,
};

export default api;
