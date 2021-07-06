import { configureStore } from '@reduxjs/toolkit';
import tasksSlice from './tasks';
import uiSlice from './ui';

const store = configureStore({
  reducer: { tasks: tasksSlice, ui: uiSlice },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
