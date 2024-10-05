const addItemToCollection = require('./myModule');

test('adds item to the collection', () => {
    const collection = [];
    expect(addItemToCollection(collection, 'item1')).toEqual(['item1']);
});

test('does not add duplicate item', () => {
    const collection = ['item1'];
    expect(addItemToCollection(collection, 'item1')).toEqual(['item1']);
});
