import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBooksResponse } from '../interfaces';

const $host: string | undefined = import.meta.env.VITE_API_URL;
const $key: string | undefined = import.meta.env.VITE_API_KEY;

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: $host }),
  endpoints: (build) => ({
    searchBooks: build.query<IBooksResponse, string>({
      query: (search: string) => ({
        url: '',
        params: {
          q: search,
          key: $key,
        },
      }),
    }),
  }),
});

export const { useSearchBooksQuery } = booksApi;
