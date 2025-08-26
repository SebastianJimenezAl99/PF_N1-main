// Función para añadir una nueva tarea
function addTask(title,tasks) {

    title = title.trim();// se agrego para corregir los bug
    
    if (title) {
      if (/^\d+(\s+\d+)*$/.test(title)) {
        return tasks;
      }

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