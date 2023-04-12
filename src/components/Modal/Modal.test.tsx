import React from 'react';
import Modal from './Modal';
import { render, screen, waitFor } from '@testing-library/react';

function handlerTest() {}

it('Render Modal', async () => {
  render(<Modal id={'12345'} handleModal={handlerTest} />);
  const result = await waitFor(() =>
    screen.getByRole('heading', {
      level: 2,
    })
  );
  expect(result).toHaveTextContent('Test title');
});
