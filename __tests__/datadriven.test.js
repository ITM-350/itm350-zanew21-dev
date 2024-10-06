const calculateTotal = require('./myModule');

test.each([
    [[10, 20, 30], 60],
    [[5, 15], 20],
    [[100], 100],
])('calculates total for %p', (prices, expectedTotal) => {
    expect(calculateTotal(prices)).toBe(expectedTotal);
});
