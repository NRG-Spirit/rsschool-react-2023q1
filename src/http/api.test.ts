import { getBook, searchBooks } from './api';

it('get book', async () => {
  const book = await getBook('12345');
  expect(book.id).toEqual('Test ID');
});

it('search books', async () => {
  const books = await searchBooks('');
  console.log('book', books);
  expect(books.items[0].id).toEqual('Test ID');
});
