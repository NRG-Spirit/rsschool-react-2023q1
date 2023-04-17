import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import React from 'react';
import Footer from './Footer';

describe('Render footer', () => {
  it('Should render links', () => {
    render(<Footer />);
    const links = screen.getAllByRole('link');
    expect(links).toHaveLength(2);
  });
});
