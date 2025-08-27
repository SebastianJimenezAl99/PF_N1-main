function filterUncompleted(tasks) {
  if (!tasks) return undefined; 

  return tasks.filter(task => !task.completed);
}

module.exports = filterUncompleted;
