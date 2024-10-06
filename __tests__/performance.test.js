const fetchData = require('./myModule');

test('fetches data within 1 second', async () => {
    const start = Date.now();
    const data = await fetchData();
    const end = Date.now();
    expect(data).toBe('data');
    expect(end - start).toBeLessThanOrEqual(1000);
});
