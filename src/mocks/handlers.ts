import { rest } from 'msw';

const $host: string | undefined = import.meta.env.VITE_API_URL;

export const handlers = [
  rest.get(`${$host}/12345`, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
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
      })
    );
  }),
  rest.get($host, (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        items: [
          {
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
          },
        ],
      })
    );
  }),
];
