const processTasks = require('./myModule');

test('processes tasks concurrently', async () => {
    const task1 = jest.fn().mockResolvedValue('task1 done');
    const task2 = jest.fn().mockResolvedValue('task2 done');
    
    const results = await processTasks([task1, task2]);
    
    expect(results).toEqual(['task1 done', 'task2 done']);
    expect(task1).toHaveBeenCalled();
    expect(task2).toHaveBeenCalled();
});
