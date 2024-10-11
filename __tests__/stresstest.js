function stressTest(task, times) {
    for (let i = 0; i < times; i++) {
        task();
    }
    return true;
}

module.exports = stressTest;
