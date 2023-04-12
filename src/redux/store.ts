import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './booksApi';
import { searchReducer } from './searchReducer';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    search: searchReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
