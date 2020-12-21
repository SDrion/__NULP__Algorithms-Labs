import { main } from '../main';

test('testFile 1, expected 5', () => {
  expect(main('testFile1')).toBe(5);
});

test('testFile 2, expected 2', () => {
  expect(main('testFile2')).toBe(2);
});

test('testFile 3, expected 201684', () => {
  expect(main('testFile3')).toBe(201684);
});