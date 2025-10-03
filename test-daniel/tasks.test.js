const { deleteAll } = require('../taskFunctions');

describe('Función deleteAll', () => {
  test('debería eliminar todas las tareas completadas', () => {
    const tasks = [
      { id: 1, description: 'Hacer la compra', completed: true },
      { id: 2, description: 'Estudiar', completed: false },
      { id: 3, description: 'Llamar a Juan', completed: true },
      { id: 4, description: 'Ir al gimnasio', completed: false },
      { id: 5, description: 'Leer libro', completed: true }
    ];
    const expected = [
      { id: 2, description: 'Estudiar', completed: false },
      { id: 4, description: 'Ir al gimnasio', completed: false }
    ];
    expect(deleteAll(tasks)).toEqual(expected);
  });

  test('debería devolver un arreglo vacío si todas las tareas están completadas', () => {
    const tasks = [
      { id: 1, description: 'Hacer la compra', completed: true },
      { id: 2, description: 'Estudiar', completed: true }
    ];
    expect(deleteAll(tasks)).toEqual([]);
  });

  test('debería devolver el mismo arreglo si ninguna tarea está completada', () => {
    const tasks = [
      { id: 1, description: 'Hacer la compra', completed: false },
      { id: 2, description: 'Estudiar', completed: false }
    ];
    expect(deleteAll(tasks)).toEqual(tasks);
  });

  test('debería manejar un arreglo vacío', () => {
    const tasks = [];
    expect(deleteAll(tasks)).toEqual([]);
  });

  test('debería devolver un arreglo vacío si recibe null', () => {
    expect(deleteAll(null)).toEqual([]);
  });

  test('debería manejar un arreglo con tareas duplicadas', () => {
    const tasks = [
      { id: 1, description: 'Hacer la compra', completed: true },
      { id: 2, description: 'Estudiar', completed: false },
      { id: 1, description: 'Hacer la compra', completed: true },
      { id: 2, description: 'Estudiar', completed: false }
    ];
    const expected = [
      { id: 2, description: 'Estudiar', completed: false },
      { id: 2, description: 'Estudiar', completed: false }
    ];
    expect(deleteAll(tasks)).toEqual(expected);
  });

  test('debería funcionar con tareas sin ID', () => {
    const tasks = [
      { description: 'Hacer la compra', completed: true },
      { description: 'Estudiar', completed: false }
    ];
    const expected = [
      { description: 'Estudiar', completed: false }
    ];
    expect(deleteAll(tasks)).toEqual(expected);
  });

  test('debería manejar un arreglo grande', () => {
    const tasks = Array.from({ length: 100 }, (_, index) => ({
      id: index + 1,
      description: `Tarea ${index + 1}`,
      completed: index % 2 === 0
    }));
    const expected = tasks.filter(task => !task.completed);
    expect(deleteAll(tasks)).toEqual(expected);
  });
});
