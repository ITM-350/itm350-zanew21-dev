function processTasks(tasks) {
    return Promise.all(tasks.map(task => task()));
}

module.exports = processTasks;
