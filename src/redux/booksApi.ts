import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBooksResponse, IBook } from '../interfaces';

const $host: string | undefined = import.meta.env.VITE_API_URL;
const $key: string | undefined = import.meta.env.VITE_API_KEY;

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: $host }),
  endpoints: (build) => ({
    searchBooks: build.query<IBooksResponse, string>({
      query: (search: string, page = 1, limit = 14) => ({
        url: '',
        params: {
          q: search,
          key: $key,
          maxResults: limit,
          startIndex: page,
        },
      }),
    }),
    searchBook: build.query<IBook, string>({
      query: (id: string) => ({
        url: id,
        params: {
          key: $key,
        },
      }),
    }),
  }),
});

export const { useSearchBooksQuery, useSearchBookQuery } = booksApi;
