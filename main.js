/* Los siguientes nombres de funciones son una sugerencia de funciones que necesitarás en tu programa,
sin embargo, no te limites solo a estas funciones. Crea tantas como consideres necesarias.

La estructura de cada objeto "tarea" es la siguiente:

{
  id: 1,
  title: "tarea",
  completed: false
}

*/
//variable para saber en que boton estan
let ubicacion = 1;
//funcion para mostra segun el filtro
function mostrarContenidoSegunLaUbicacion(ubi) {
  let divBotonEliminarTodo = document.querySelector('#divBotonEliminarTodo');
  if (ubi == 1) {
    mostrarTarea();
    divBotonEliminarTodo.style.display = "none";
  }

  if (ubi == 2) {
    filterUncompleted();
  }

  if (ubi == 3) {
    filterCompleted();
    mostrarBotonBorrar(ubi);
  }
}
//LA LLAMAMOS ENSEGUIDAD
mostrarContenidoSegunLaUbicacion(ubicacion);

//BOTONES DE FILTRO
const botonAll = document.querySelector('#all');
const botonActive = document.querySelector('#active');
const botonCompleted = document.querySelector('#completed');
const divAgregacion = document.querySelector('#agregacion');
let divBotonEliminarTodo = document.querySelector('#divBotonEliminarTodo');
const buttonDeleteAll = document.querySelector('#divBotonEliminarTodo button');

botonAll.addEventListener('click',()=>{
  mostrarTarea();
  botonAll.classList.remove('inactivo');
  botonAll.classList.add('activado');

  botonActive.classList.remove('activado');
  botonActive.classList.add('inactivo');

  botonCompleted.classList.remove('activado');
  botonCompleted.classList.add('inactivo')
  ubicacion=1;
  mostrarContenidoSegunLaUbicacion(ubicacion);
  mostrarBotonBorrar(ubicacion);
  divAgregacion.style.display = "";
  divBotonEliminarTodo.style.display = "none";
});

botonActive.addEventListener('click',()=>{
  
  botonActive.classList.remove('inactivo');
  botonActive.classList.add('activado');
  
  botonAll.classList.remove('activado');
  botonAll.classList.add('inactivo')

  botonCompleted.classList.remove('activado');
  botonCompleted.classList.add('inactivo')
  ubicacion=2;
  mostrarContenidoSegunLaUbicacion(ubicacion);
  mostrarBotonBorrar(ubicacion);
  divAgregacion.style.display = "";
  divBotonEliminarTodo.style.display = "none";
});

botonCompleted.addEventListener('click',()=>{
  botonCompleted.classList.remove('inactivo');
  botonCompleted.classList.add('activado');
  
  botonActive.classList.remove('activado');
  botonActive.classList.add('inactivo')
  
  botonAll.classList.remove('activado');
  botonAll.classList.add('inactivo')

  ubicacion=3;
  mostrarContenidoSegunLaUbicacion(ubicacion);
  mostrarBotonBorrar(ubicacion);
  divAgregacion.style.display = "none";
  divBotonEliminarTodo.style.display = "";
  control=0;
});
//mostrar todas las tareas
function mostrarTarea() {
  const tasks =JSON.parse(localStorage.getItem('tasks'));
  const divMostrarTarea = document.querySelector('#resultado');
  divMostrarTarea.innerHTML = "";
  if (tasks) {
    for (const task of tasks) {
      divMostrarTarea.innerHTML += estruturaTarea(task);
    }
    checkTasks();
  }

}

//BONTON PARA SALVAR TAREA
const buttonSavetask = document.querySelector('#textButton input');
buttonSavetask.addEventListener('click',addTask);

// Función para añadir una nueva tarea
function addTask() {
  let tasks = JSON.parse(localStorage.getItem('tasks'));
  const inputAddTask = document.querySelector('#text input')
  
  if (inputAddTask.value) {
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
      let title = inputAddTask.value;
      if (typeof title === 'string') {
        objTask.title = title.charAt(0).toUpperCase() + title.slice(1);
      }else{
        objTask.title = title;
      }
      
    
      tasks.push(objTask);
      localStorage.setItem('tasks', JSON.stringify(tasks));
      inputAddTask.value="";
      mostrarContenidoSegunLaUbicacion(ubicacion);
    }else{
      objTask.id = idSiguiente+1;
      let title = inputAddTask.value;
      if (typeof title === 'string') {
        objTask.title = title.charAt(0).toUpperCase() + title.slice(1);
      }else{
        objTask.title = title;
      }
      tasks =[objTask];
      localStorage.setItem('tasks', JSON.stringify(tasks));
      inputAddTask.value="";
      mostrarContenidoSegunLaUbicacion(ubicacion);
    }
      
  }else{
    alert('El campo add details no debe estas vacio');
  }
  
}

//MOSTRAR TODAS LAS TAREAS 
function estruturaTarea(objTask){
  return`
  <div class="ilLista">
    <div>
      <input class="form-check-input checkbox" type="checkbox" id="task-${objTask.id}" ${objTask.completed ? 'checked' : ""}>
      <span id="span-${objTask.id}">${objTask.completed ? '<s>'+objTask.title+'</s>' : objTask.title}</span>
    </div>
    <i id="basurita-${objTask.id}" class="fa-solid fa-trash basurita-inactiva"></i>
  </div>
  `
}
// Función para filtrar tareas completadas
function filterCompleted() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const divMostrarTarea = document.querySelector('#resultado');
  divMostrarTarea.innerHTML = "";
  if (tasks) {
    for (const task of tasks) {
      if (task.completed) {
        divMostrarTarea.innerHTML += estruturaTarea(task);
      }
    }
    checkTasks();
  }
  
}

// Función para filtrar tareas incompletas
function filterUncompleted() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const divMostrarTarea = document.querySelector('#resultado');
  divMostrarTarea.innerHTML = "";
  if (tasks) {
    for (const task of tasks) {
      if (!task.completed) {
        divMostrarTarea.innerHTML += estruturaTarea(task);
      }
    }
    checkTasks();
  }
  
}

//FUNCION PARA CONFIRMAR TAREAS
function checkTasks(){
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  const checkboxs = document.querySelectorAll('.checkbox');
  
  checkboxs.forEach(checkbox =>{
    checkbox.addEventListener('click',() =>{
      let idObtenido = checkbox.id.split("-")[1];
      const span = document.querySelector('#span-'+idObtenido)
      for (const task of tasks) {
        if(task.id == idObtenido) {
          if (task.completed) {
            task.completed = false;
            
            span.innerHTML=task.title
            localStorage.setItem('tasks', JSON.stringify(tasks));
            mostrarContenidoSegunLaUbicacion(ubicacion);
          }else{
            task.completed = true;
            
            span.innerHTML=`
            <s>${task.title}</s>
            `
            localStorage.setItem('tasks', JSON.stringify(tasks));
            mostrarContenidoSegunLaUbicacion(ubicacion);
          }
        }
      }
    })
  })
}

//FUNCION PARA BORRAR TAREA UNA POR UNA
let control = 0;
function mostrarBotonBorrar(ubi) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  let botonesBorrar = document.querySelectorAll('.fa-solid')
  if (ubi == 3) {
    
    botonesBorrar.forEach(botonBorrar => {
      botonBorrar.classList.remove('basurita-inactiva');
      botonBorrar.classList.add('basurita-activa');

      botonBorrar.addEventListener('click',() => {
        control++;
        if (control != 2) {
          let id= botonBorrar.id.split("-")[1];
          let indice=-1;
          for (let i = 0; i < tasks.length; i++) {
            if (tasks[i].id == id) {
              indice = i;
              break;
            }
          }
          console.log('el id es: '+id);
          tasks.splice(indice,1); //me esta borrando dos elemento cuando selecciono uno
          localStorage.setItem('tasks', JSON.stringify(tasks));
          mostrarContenidoSegunLaUbicacion(ubicacion);
        }
        
      })

    })
    
  }else{
    botonesBorrar.forEach(botonBorrar => {
      botonBorrar.classList.remove('basurita-activa');
      botonBorrar.classList.add('basurita-inactiva');
      })
  }
  
}

buttonDeleteAll.addEventListener('click',deleteAll)
// Funcion para borrar todas las tareas
function deleteAll() {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
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
  localStorage.setItem('tasks', JSON.stringify(tasks));
  mostrarContenidoSegunLaUbicacion(ubicacion);
}
