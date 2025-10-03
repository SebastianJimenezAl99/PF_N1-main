// Función para añadir una nueva tarea
function addTask(title, tasks) {
  if (title) {
    let idSiguiente = 0;
    const objTask = { 
      id: 0,
      title: "",
      completed: false
    };

    if (tasks) {
      for (const task of tasks) {
        if (task.id > idSiguiente) {
          idSiguiente = task.id;
        }
      }

      objTask.id = idSiguiente + 1;
      if (typeof title === 'string') {
        objTask.title = title.charAt(0).toUpperCase() + title.slice(1);
      } else {
        objTask.title = title;
      }

      tasks.push(objTask);
      return tasks;
    } else {
      objTask.id = idSiguiente + 1;
      if (typeof title === 'string') {
        objTask.title = title.charAt(0).toUpperCase() + title.slice(1);
      } else {
        objTask.title = title;
      }
      tasks = [objTask];
      return tasks;
    }
  } else {
    return { error: 'El campo add details no debe estar vacio' }; // <- corregido y sin tilde
  }
}

// Función para filtrar tareas incompletas
function filterUncompleted(tasks) {
  let tasksIncomple = [];
  if (tasks) {
    for (const task of tasks) {
      if (!task.completed) {
        tasksIncomple.push(task);
      }
    }
    return tasksIncomple;
  }
}

// Función para borrar todas las tareas completadas
function deleteAll(tasks) {
  if (!Array.isArray(tasks)) {
    return [];
  }
  return tasks.filter(task => !task.completed);
}

// Exportamos todas las funciones que queramos usar fuera de este archivo
module.exports = { addTask, filterUncompleted, deleteAll };
