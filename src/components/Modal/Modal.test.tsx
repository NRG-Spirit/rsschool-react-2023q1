import React from 'react';
import Modal from './Modal';
import { render, screen, waitFor } from '@testing-library/react';
import { store } from '../../redux/store';
import { Provider } from 'react-redux';

function handlerTest() {}

it('Render Modal', async () => {
  render(
    <Provider store={store}>
      <Modal id={'12345'} handleModal={handlerTest} />
    </Provider>
  );
  const result = await waitFor(() =>
    screen.getByRole('heading', {
      level: 2,
    })
  );
  expect(result).toHaveTextContent('Test title');
});
