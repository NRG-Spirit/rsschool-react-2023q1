import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import App from './App';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';
import { store } from './redux/store';
import { Provider } from 'react-redux';

describe('App', () => {
  it('Render App', () => {
    render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toBeInTheDocument();
  });
  it('Landing to about us route', () => {
    const route = '/about';
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('About us');
  });
  it('Landing to 404', () => {
    const badRoute = '/some/bad/route';
    render(
      <Provider store={store}>
        <MemoryRouter initialEntries={[badRoute]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page not found - 404');
  });
});
