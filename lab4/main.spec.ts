import { main } from './main';

test('testFile 1, expected 5', () => {
  expect(main('testFile1')).toBe(5);
});