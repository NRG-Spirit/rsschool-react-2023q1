import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import App from './App';
import { BrowserRouter as Router, MemoryRouter } from 'react-router-dom';

describe('App', () => {
  it('Render App', () => {
    render(
      <Router>
        <App />
      </Router>
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
      <MemoryRouter initialEntries={[route]}>
        <App />
      </MemoryRouter>
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
      <MemoryRouter initialEntries={[badRoute]}>
        <App />
      </MemoryRouter>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Page not found - 404');
  });
});
