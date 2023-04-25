import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import HomePage from './HomePage';
import { BrowserRouter as Router } from 'react-router-dom';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('HomePage', () => {
  it('Render header', () => {
    render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
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
    ).toBeInTheDocument();
  });
  it('Render searcBar', () => {
    render(
      <Provider store={store}>
        <Router>
          <HomePage />
        </Router>
      </Provider>
    );
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });
});
