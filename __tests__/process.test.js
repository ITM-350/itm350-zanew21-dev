const processOrder = require('./myModule');

test('changes order status to processed', () => {
    const order = { id: 1, status: 'pending' };
    const processedOrder = processOrder(order);
    expect(processedOrder.status).toBe('processed');
});
