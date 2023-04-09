import { IBook } from '../interfaces';

const bookResponse: IBook = {
  id: 'Test ID',
  volumeInfo: {
    imageLinks: {
      thumbnail: '',
      smallThumbnail: '',
    },
    authors: ['Test Author'],
    title: 'Test title',
    pageCount: 100,
    publishedDate: '09.09.1999',
  },
};
