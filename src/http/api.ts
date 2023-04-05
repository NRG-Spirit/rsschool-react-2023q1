import { IBooksResponce } from '../interfaces';

const $host: string | undefined = import.meta.env.VITE_API_URL;
const $key: string | undefined = import.meta.env.VITE_API_KEY;

async function searchBooks(search: string, limit = 14, page = 0): Promise<IBooksResponce> {
  const url = `${$host}?q=${search}&maxResults=${limit}&startIndex=${page}&key=${$key}`;
  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
}

export { searchBooks };
