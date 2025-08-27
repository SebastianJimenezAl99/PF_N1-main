const filterUncompleted = require('./filterUncompleted');

describe('filterUncompleted', () => {
  test('1. Devuelve solo tareas incompletas de un arreglo mixto', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: false },
      { id: 3, title: 'Task 3', completed: true },
      { id: 4, title: 'Task 4', completed: false }
    ];
    expect(filterUncompleted(tasks)).toEqual([
      { id: 2, title: 'Task 2', completed: false },
      { id: 4, title: 'Task 4', completed: false }
    ]);
  });

  test('2. Devuelve arreglo vacío si todas las tareas están completadas', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: true },
      { id: 2, title: 'Task 2', completed: true }
    ];
    expect(filterUncompleted(tasks)).toEqual([]);
  });

  test('3. Devuelve undefined si no recibe un arreglo', () => {
    expect(filterUncompleted(undefined)).toBeUndefined();
  });

  test('4. Devuelve todas las tareas si ninguna está completada', () => {
    const tasks = [
      { id: 1, title: 'Task 1', completed: false },
      { id: 2, title: 'Task 2', completed: false }
    ];
    expect(filterUncompleted(tasks)).toEqual(tasks);
  });

  test('5. Devuelve arreglo vacío si el arreglo está vacío', () => {
    expect(filterUncompleted([])).toEqual([]);
  });
});
