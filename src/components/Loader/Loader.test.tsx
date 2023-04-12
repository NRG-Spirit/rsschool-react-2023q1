import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Loader from './Loader';

describe('Loader', () => {
  it('Render Loader', () => {
    render(<Loader />);
    expect(screen.getByTestId('loader-test')).toBeInTheDocument();
  });
});
