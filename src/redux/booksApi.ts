import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IBooksResponse, IBook } from '../interfaces';
import fetch from 'isomorphic-fetch';

interface IParams {
  search: string;
  page: number;
  limit?: number;
}

const $host: string | undefined = import.meta.env.VITE_API_URL;
const $key: string | undefined = import.meta.env.VITE_API_KEY;

export const booksApi = createApi({
  reducerPath: 'booksApi',
  baseQuery: fetchBaseQuery({ baseUrl: $host, fetchFn: fetch }),
  endpoints: (build) => ({
    searchBooks: build.query<IBooksResponse, IParams>({
      query: (args: IParams) => ({
        url: '',
        params: {
          q: args.search,
          key: $key,
          maxResults: args.limit || 14,
          startIndex: args.page * 14,
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
