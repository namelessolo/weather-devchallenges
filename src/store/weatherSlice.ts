import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

type weatherState = {
  menu: boolean;
};

const initialState: weatherState = {
  menu: false,
};

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
});

export const { showMenu, closeMenu } = weatherSlice.actions;

export default weatherSlice.reducer;
