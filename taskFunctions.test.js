const { addTask } = require('./taskFunctions');  

/* test('agregar una tarea a lista existente', () => {

    const tasks = [{ id: 1, title: 'Comprar pan', completed: false }];
  
    const result = addTask('correr', tasks);
  
    // Validamos el resultado
    expect(result.length).toBe(2);            // ahora debe haber 2 tareas
    expect(result[1].id).toBe(2);             // la nueva tarea debe tener id=2
    expect(result[1].title).toBe('Correr');   // el título debe estar capitalizado
    expect(result[1].completed).toBe(false); // completed siempre empieza en false
  }); */

test('no debe agregar una tarea si el título está vacío aunque el array tenga tareas', () => {
    const tasks = [{ id: 1, title: 'Comprar pan', completed: false }];

    const result = addTask('', tasks); // título vacío

    // Validamos que devuelva el error
    expect(result).toEqual({ error: 'El campo add details no debe estas vacio' });
});