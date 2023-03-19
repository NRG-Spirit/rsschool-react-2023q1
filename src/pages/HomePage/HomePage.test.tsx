import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('HomePage', () => {
  it('Render header', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Home');
    expect(
      screen.getByRole('link', {
        name: 'Home',
      })
    );
  });
  it('Render searcBar', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(screen.getByRole('textbox'));
  });
  it('Render CardsList', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(
      screen.getAllByRole('heading', {
        level: 4,
      })
    ).toHaveLength(27);
  });
  it('Render Card', () => {
    render(
      <Router>
        <HomePage />
      </Router>
    );
    expect(
      screen.getAllByRole('img', {
        name: 'coin',
      })
    ).toHaveLength(54);
  });
});
