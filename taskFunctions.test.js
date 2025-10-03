const { addTask } = require('./taskFunctions');  

/* test('agregar una tarea a lista existente', () => {
  const tasks = [{ id: 1, title: 'Comprar pan', completed: false }];
  const result = addTask('correr', tasks);

  expect(result.length).toBe(2);            
  expect(result[1].id).toBe(2);             
  expect(result[1].title).toBe('Correr');   
  expect(result[1].completed).toBe(false); 
}); */

test('no debe agregar una tarea si el título está vacío aunque el array tenga tareas', () => {
  const tasks = [{ id: 1, title: 'Comprar pan', completed: false }];

  const result = addTask('', tasks); 

  expect(result).toEqual({ error: 'El campo add details no debe estar vacio' }); // <- corregido
});
