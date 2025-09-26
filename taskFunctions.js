
// Función para añadir una nueva tarea
function addTask(title,tasks) {
    
    if (title) {
      let idSiguiente = 0;
        const objTask ={ 
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
        
        objTask.id = idSiguiente+1;
        //let title = inputAddTask.value;
        if (typeof title === 'string') {
          objTask.title = title.charAt(0).toUpperCase() + title.slice(1);
        }else{
          objTask.title = title;
        }
        
        tasks.push(objTask);
        //localStorage.setItem('tasks', JSON.stringify(tasks));
        //inputAddTask.value="";
        //mostrarContenidoSegunLaUbicacion(ubicacion);
        return tasks;
      }else{
        objTask.id = idSiguiente+1;
        //let title = inputAddTask.value;
        if (typeof title === 'string') {
          objTask.title = title.charAt(0).toUpperCase() + title.slice(1);
        }else{
          objTask.title = title;
        }
        tasks =[objTask];
        //localStorage.setItem('tasks', JSON.stringify(tasks));
        //inputAddTask.value="";
        //mostrarContenidoSegunLaUbicacion(ubicacion);
        return tasks;
      }
        
    }else{
      //alert('El campo add details no debe estas vacio');
      return {error:'El campo add details no debe estas vacio'};
    }
    
  }

  module.exports = { addTask };


  // Función para filtrar tareas incompletas
  function filterUncompleted(tasks) {
    //const tasks = JSON.parse(localStorage.getItem('tasks'));
    //const divMostrarTarea = document.querySelector('#resultado');
    let tasksIncomple = [];
    //divMostrarTarea.innerHTML = "";
    if (tasks) {
      for (const task of tasks) {
        if (!task.completed) {
          //divMostrarTarea.innerHTML += estruturaTarea(task);
          tasksIncomple.push(task);
        }
      }
      //checkTasks();
      return tasksIncomple;
    }
    
  }
 

  // Funcion para borrar todas las tareas
function deleteAll(tasks) {
  //const tasks = JSON.parse(localStorage.getItem('tasks'));
  let indice =0;
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].completed) {
      indice +=1;
    }
  }
  for (let i = 0; i < indice; i++) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].completed) {
        tasks.splice(i,1);
        break
      }
    }
  }  
  //localStorage.setItem('tasks', JSON.stringify(tasks));
  //mostrarContenidoSegunLaUbicacion(ubicacion);
  return tasks;
}

