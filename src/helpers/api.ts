import { CurrentWeather, DailyForecast } from '../types/types';
import axios from 'axios';
import { getLocation } from './helpers';

const API_KEY = process.env.REACT_APP_API_KEY;
const API_URL = process.env.REACT_APP_API_URL;

export const fetchWeatherByCityOrLocation = async (city?: string) => {
  let forecastWeatherURL: string;
  let currentWeatherURL: string;
  if (city) {
    forecastWeatherURL = `${API_URL}/forecast?appid=${API_KEY}&q=${city}`;
    currentWeatherURL = `${API_URL}/weather?appid=${API_KEY}&q=${city}`;
  } else {
    const [lat, lon] = await getLocation();
    forecastWeatherURL = `${API_URL}/forecast?appid=${API_KEY}&lat=${lat}&lon=${lon}`;
    currentWeatherURL = `${API_URL}/weather?appid=${API_KEY}&lat=${lat}&lon=${lon}`;
  }
  const currentWeather = (await (await axios.get(currentWeatherURL)).data) as CurrentWeather;
  const forecastWeather = (await (await axios.get(forecastWeatherURL)).data) as DailyForecast;
  const data = await Promise.all([currentWeather, forecastWeather]);
  return data;
};
