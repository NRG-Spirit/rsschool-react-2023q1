import { createSlice } from '@reduxjs/toolkit';

interface ISearchState {
  search: string;
  page: number;
}

const initialState: ISearchState = {
  search: '',
  page: 1,
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: initialState,
  reducers: {
    setSearchState(state, actions: { payload: string; type: string }) {
      return { ...state, search: actions.payload, page: 1 };
    },
    setPageState(state, actions: { payload: number; type: string }) {
      return { ...state, page: actions.payload };
    },
  },
});

export const { setSearchState, setPageState } = searchSlice.actions;
export const searchReducer = searchSlice.reducer;
