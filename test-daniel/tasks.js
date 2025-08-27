function deleteAll(tasks) {
  return tasks ? tasks.filter(task => !task.completed) : [];
}
module.exports = deleteAll;