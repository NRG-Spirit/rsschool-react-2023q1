import matchers from '@testing-library/jest-dom/matchers';
import { expect } from 'vitest';
import { server } from './mocks/server';
import fetch from 'isomorphic-fetch';

global.fetch = fetch;

expect.extend(matchers);

beforeAll(() =>
  server.listen({
    onUnhandledRequest: 'bypass',
  })
);
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
