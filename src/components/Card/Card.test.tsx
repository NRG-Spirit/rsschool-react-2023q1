import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Card from './Card';
import data from '../../data/db.json';

describe('Card', () => {
  it('Render card', () => {
    const testData = data.cards[0];
    render(<Card card={testData} />);
    expect(
      screen.getByRole('heading', {
        level: 4,
      })
    ).toHaveTextContent(data.cards[0].title);
    expect(
      screen.getAllByRole('img', {
        name: 'coin',
      })
    ).toBeInTheDocument;
  });
});
