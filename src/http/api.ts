import { IBooksResponse, IBook } from '../interfaces';
/* import fetch from 'node-fetch'; */

const $host: string | undefined = import.meta.env.VITE_API_URL;
const $key: string | undefined = import.meta.env.VITE_API_KEY;

async function searchBooks(search: string, limit = 14, page = 0): Promise<IBooksResponse> {
  const url = `${$host}?q=${search}&maxResults=${limit}&startIndex=${page}&key=${$key}`;
  const response = await fetch(url, {
    method: 'GET',
  });
  if (response.status === 200) {
    return response.json();
  } else {
    throw new Error(response.statusText);
  }
}

async function getBook(id: string): Promise<IBook> {
  const url = `${$host}/${id}?key=${$key}`;
  const response = await fetch(url, {
    method: 'GET',
  });
  if (response.status === 200) {
    const json = await response.json();
    return json;
  } else {
    throw new Error(response.statusText);
  }
}

export { searchBooks, getBook };
