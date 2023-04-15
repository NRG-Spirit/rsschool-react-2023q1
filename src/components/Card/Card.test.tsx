import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Card from './Card';
import { IBook } from '../../interfaces';

describe('Render card', () => {
  const testData: IBook = {
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
  it('Should render title', () => {
    render(<Card card={testData} handleModal={() => {}} />);
    expect(
      screen.getByRole('heading', {
        level: 4,
      })
    ).toHaveTextContent(testData.volumeInfo.title);
  });
  it('Should render image', () => {
    render(<Card card={testData} handleModal={() => {}} />);
    expect(
      screen.getByRole('img', {
        name: 'cover',
      })
    ).toBeInTheDocument;
  });
});
