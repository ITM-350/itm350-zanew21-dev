const stressTest = require('./myModule');

test('executes task multiple times under stress', () => {
    const task = jest.fn();
    const result = stressTest(task, 1000);
    
    expect(task).toHaveBeenCalledTimes(1000);
    expect(result).toBe(true);
});
