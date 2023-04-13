import { createSlice } from '@reduxjs/toolkit';
import { IBook } from '../interfaces';

const initialState: IBook[] = [];

export const formSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    addBookState(state, actions: { payload: IBook; type: string }) {
      return (state = state.concat(actions.payload));
    },
  },
});

export const { addBookState } = formSlice.actions;
export const formReducer = formSlice.reducer;
