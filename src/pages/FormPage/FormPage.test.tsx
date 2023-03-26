import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import FormPage from './FormPage';
import { BrowserRouter as Router } from 'react-router-dom';

describe('FormPage', () => {
  it('Render header', () => {
    render(
      <Router>
        <FormPage />
      </Router>
    );
    expect(
      screen.getByRole('heading', {
        level: 1,
      })
    ).toHaveTextContent('Form');
    expect(
      screen.getByRole('link', {
        name: 'Home',
      })
    ).toBeInTheDocument();
  });
  it('Render form', () => {
    render(
      <Router>
        <FormPage />
      </Router>
    );
    expect(screen.getByRole('option', { name: 'PF' })).toBeInTheDocument;
    const inputCheckbox = screen.getByRole<HTMLInputElement>('checkbox');
    expect(inputCheckbox).toBeInTheDocument();
    fireEvent.click(inputCheckbox);
    expect(inputCheckbox).toBeChecked();
    fireEvent.click(inputCheckbox);
    expect(inputCheckbox).not.toBeChecked();

    const inputRadio = screen.getAllByRole<HTMLInputElement>('radio');
    expect(inputRadio[0]).toBeInTheDocument();
    expect(inputRadio[0]).not.toBeChecked();
    fireEvent.click(inputRadio[0]);
    expect(inputRadio[0]).toBeChecked();
  });
});
