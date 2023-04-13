import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './booksApi';
import { searchReducer } from './searchReducer';
import { formReducer } from './formReducer';

export const store = configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
    search: searchReducer,
    form: formReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
