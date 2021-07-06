import { createSlice } from '@reduxjs/toolkit';

export type task = {
  id: string;
  title: string;
  text: string;
  isDone: boolean;
  // status: 'urgent' | 'important' | '';
};

const initialState: task[] = [
  {
    id: '1',
    title: 'Learn React',
    text: 'Learning react task text',
    isDone: false,
  },
  {
    id: '2',
    title: 'Learn TypeScript',
    text: '',
    isDone: false,
  },
  {
    id: '3',
    title: 'Learn ReduX',
    text: '',
    isDone: false,
  },
];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    add() {},
    remove() {},
    change() {},
  },
});

export default tasksSlice.reducer;
