function addItemToCollection(collection, item) {
    if (!collection.includes(item)) {
        collection.push(item);
    }
    return collection;
}

module.exports = addItemToCollection;
