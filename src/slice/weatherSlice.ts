import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CurrentWeather, DailyForecast } from '../types/types';
import api from '../helpers/api';
import { getLocation } from '../helpers/helpers';
import { AxiosResponse } from 'axios';

type WeatherState = {
  menu: boolean;
  weather: {
    currentWeather: CurrentWeather | null;
    forecast: DailyForecast | null;
  };
  error: string | unknown;
  loading: boolean;
  state: 'idle' | 'loading' | 'error' | 'success';
};

const initialState: WeatherState = {
  weather: {
    currentWeather: null,
    forecast: null,
  },
  menu: false,
  error: '',
  loading: false,
  state: 'idle',
};

type ValidationErrors = {
  cod: string;
  message: string;
};

export const fetchWeather = createAsyncThunk<
  [CurrentWeather, DailyForecast],
  string | null,
  { rejectValue: ValidationErrors }
>('weather/fetchByCity', async (city, { rejectWithValue }) => {
  try {
    let currentWeatherResponse: Promise<AxiosResponse<any, any>>;
    let forecastWeatherResponse: Promise<AxiosResponse<any, any>>;
    if (city) {
      currentWeatherResponse = api.getForecastWeatherByCity(city);
      forecastWeatherResponse = api.getDailyWeatherByCity(city);
    } else {
      const [lat, lon] = await getLocation();
      currentWeatherResponse = api.getDailyWeatherByLocation(lat, lon);
      forecastWeatherResponse = api.getForecastWeatherByLocation(lat, lon);
    }
    const response = await Promise.all([currentWeatherResponse, forecastWeatherResponse]);
    const [currentWeather, forecastWeather] = response;
    return [currentWeather.data, forecastWeather.data];
  } catch (err: any) {
    return rejectWithValue(err.response.data);
  }
});

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    showMenu: (state) => {
      state.menu = true;
    },
    closeMenu: (state) => {
      state.menu = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchWeather.fulfilled, (state, action) => {
      state.weather.currentWeather = action.payload[0];
      state.weather.forecast = action.payload[1];
      state.loading = false;
    });
    builder.addCase(fetchWeather.rejected, (state, action) => {
      state.error = action.payload?.message;
      state.loading = false;
    });
    builder.addCase(fetchWeather.pending, (state) => {
      state.loading = true;
      state.menu = false;
    });
  },
});

export const { showMenu, closeMenu } = weatherSlice.actions;

export default weatherSlice.reducer;
