import KMP from './kmp';

test('1st test, pattern: "do", sequence: "hello, dogs. how are you doing today?"', () => {
  expect(KMP('do', 'hello, dogs. how are you doing today?')).toMatchObject([8, 26]);
});

test('2nd test, pattern: "l", sequence: "ldmxnglziulpklu?"', () => {
  expect(KMP('l', 'ldmxnglziulpklu?')).toMatchObject([0, 6, 10, 13]);
});