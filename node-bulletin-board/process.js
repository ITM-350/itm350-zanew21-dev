function processOrder(order) {
    order.status = 'processed';
    return order;
}

module.exports = processOrder;
