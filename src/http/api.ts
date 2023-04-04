import { IBooksResponce } from '../interfaces';

const $host: string | undefined = import.meta.env.VITE_API_URL;
const $key: string | undefined = import.meta.env.VITE_API_KEY;

async function searchBooks(search: string): Promise<IBooksResponce> {
  const url = `${$host}?q=${search}&key=${$key}`;
  const response = await fetch(url, {
    method: 'GET',
  });
  return response.json();
}

export { searchBooks };
