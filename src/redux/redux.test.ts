import { searchReducer, setSearchState, setPageState } from './searchReducer';
import { formReducer, addBookState } from './formReducer';

describe('searchReducer', () => {
  const init = {
    search: '',
    page: 1,
  };
  it('should return initial state', () => {
    const result = searchReducer(undefined, { type: '' });
    expect(result).toEqual(init);
  });
  it('should set page number', () => {
    const action = { type: setPageState.type, payload: 2 };
    const result = searchReducer(init, action);
    expect(result.page).toBe(2);
  });
  it('should set search value', () => {
    const action = { type: setSearchState.type, payload: 'Redux' };
    const result = searchReducer(init, action);
    expect(result.search).toBe('Redux');
  });
});

describe('formReducer', () => {
  it('should return initial state', () => {
    const result = formReducer(undefined, { type: '' });
    expect(result).toEqual([]);
  });
  it('should set formData', () => {
    const book = {
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
    const action = { type: addBookState.type, payload: book };
    const result = formReducer([], action);
    expect(result[0].id).toBe(book.id);
  });
});
