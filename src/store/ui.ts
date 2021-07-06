import { createSlice } from '@reduxjs/toolkit';

type ui = {
  isDarkTheme: boolean;
  isGridView: boolean;
};
const initialState: ui = {
  isDarkTheme: false,
  isGridView: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    toggleGrid(state) {
      state.isGridView = true;
    },
    toggleList(state) {
      state.isGridView = false;
    },
    toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
