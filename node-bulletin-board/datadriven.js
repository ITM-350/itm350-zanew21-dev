function calculateTotal(prices) {
    return prices.reduce((acc, price) => acc + price, 0);
}

module.exports = calculateTotal;
