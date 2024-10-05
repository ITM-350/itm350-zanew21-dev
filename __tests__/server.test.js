// src/server.test.js
const multiply = require('../server');

test('multiplies 2 * 3 to equal 6', () => {
    expect(multiply(2, 3)).toBe(6);
});

test('multiplies 4 * 0 to equal 0', () => {
    expect(multiply(4, 0)).toBe(0);
});
