import { render, screen, fireEvent } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import FormPage from './FormPage';
import { BrowserRouter as Router } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

describe('FormPage', () => {
  it('Render header', () => {
    render(
      <Provider store={store}>
        <Router>
          <FormPage />
        </Router>
      </Provider>
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
      <Provider store={store}>
        <Form id={41} />
      </Provider>
    );
    expect(screen.getByTestId('form-date')).toBeInTheDocument();
    expect(screen.getByTestId('form-number')).toBeInTheDocument();
    expect(screen.getByRole('option', { name: 'EN' })).toBeInTheDocument;
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
    const buttons = screen.getAllByRole('button');
    expect(buttons[0]).toBeInTheDocument();
    expect(buttons).toHaveLength(2);
    const textInputs = screen.getAllByRole('textbox');
    expect(textInputs).toHaveLength(4);
    expect(screen.getByTestId('form')).toBeInTheDocument();
  });
});
