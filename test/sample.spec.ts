import { expect, test } from 'vitest';
import { hello } from '../src/index';

test('Sample test', () => {
  expect(hello()).toBe('Hello world!');
});
