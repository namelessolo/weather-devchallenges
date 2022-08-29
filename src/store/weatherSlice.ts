import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CurrentWeather, DailyForecast } from '../types/types';
import { fetchWeatherByCityOrLocation } from '../helpers/api';

type weatherState = {
  menu: boolean;
  weather: {
    currentWeather: CurrentWeather | null;
    forecast: DailyForecast | null;
  };
  error: string | undefined | unknown;
  loading: boolean;
};

const initialState: weatherState = {
  weather: {
    currentWeather: null,
    forecast: null,
  },
  menu: false,
  error: '',
  loading: false,
};

export const fetchWeather = createAsyncThunk(
  'weather/fetchByCity',
  async (city: string | null, { rejectWithValue }) => {
    if (city) {
      try {
        return await fetchWeatherByCityOrLocation(city);
      } catch (err: any) {
        return rejectWithValue(err.response.data.message);
      }
    } else {
      return await fetchWeatherByCityOrLocation();
    }
  }
);

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
      if (action.payload) {
        state.error = action.payload;
      } else {
        state.error = action.error.message;
      }
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
