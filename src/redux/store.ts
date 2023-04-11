import { configureStore } from '@reduxjs/toolkit';
import { booksApi } from './booksApi';

export default configureStore({
  reducer: {
    [booksApi.reducerPath]: booksApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(booksApi.middleware),
});
