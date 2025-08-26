  const { addTask } = require('./test-sebas');  

  // test('Agregar una tarea a lista existente', () => {

  //   const tasks = [
  //     { id: 1, title: 'Dormir', completed: false },
  //     { id: 2, title: 'Bañarse', completed: false },
  //     { id: 3, title: 'Ir al Supermark', completed: false }
  //   ];
  
  //   const result = addTask('correr', tasks);
  
  //   // Validamos el resultado
  //   expect(result.length).toBe(4);            
  //   expect(result[3].id).toBe(4);             
  //   expect(result[3].title).toBe('Correr');   
  //   expect(result[3].completed).toBe(false); 
  // }); 

  // test('Agregar una primera tarea, sin lista de tareas antes', () => {
  //     const tasks = [];

  //     const result = addTask('Correr', tasks); 

  //     expect(result.length).toBe(1);            
  //     expect(result[0].id).toBe(1);             
  //     expect(result[0].title).toBe('Correr');   
  //     expect(result[0].completed).toBe(false); 
  // });

  // test('No debe agregar una tarea si el título está vacío aunque el array tenga tareas', () => {
  //     const tasks = [{ id: 1, title: 'Comprar pan', completed: false }];

  //     const result = addTask('', tasks); // título vacío

  //     expect(result).toEqual({ error: 'El campo add details no debe estas vacio' });
  // });

  // test('No debe agregar una tarea si el título está vacío aunque el array no tenga tarea', () => {
  //   const tasks = [];

  //   const result = addTask('', tasks); // título vacío

  //   expect(result).toEqual({ error: 'El campo add details no debe estas vacio' });
  // });

  // test('Agregar una tarea con minuscula al inicio con array con tareas', () => {

  //   const tasks = [
  //     { id: 1, title: 'Dormir', completed: false },
  //     { id: 2, title: 'Bañarse', completed: false },
  //     { id: 3, title: 'Ir al Supermark', completed: false }
  //   ];
  
  //   const result = addTask('jugar futbol en la noche', tasks);
  
  //   // Validamos el resultado           
  //   expect(result[3].title).toBe('Jugar futbol en la noche');   
  // }); 

  // test('Agregar una tarea con minuscula al inicio con array sin tareas', () => {

  //   const tasks = [];
  
  //   const result = addTask('jugar futbol en la noche', tasks);
  
  //   // Validamos el resultado           
  //   expect(result[0].title).toBe('Jugar futbol en la noche');   
  // });

  // test('No debe agregar tarea si manda uno espacio en el titulo aunque el array tenga tarea', () => {

  //   const tasks = [
  //     { id: 1, title: 'Dormir', completed: false },
  //     { id: 2, title: 'Bañarse', completed: false },
  //     { id: 3, title: 'Ir al Supermark', completed: false }
  //   ];
  
  //   const result = addTask(' ', tasks);
  
  //   // Validamos el resultado           
  //   expect(result).toEqual({ error: 'El campo add details no debe estas vacio' });  
  // });

  // test('No debe agregar tarea si manda uno espacio en el titulo aunque el array no tenga tarea', () => {

  //   const tasks = [];
  
  //   const result = addTask(' ', tasks);
  
  //   // Validamos el resultado           
  //   expect(result).toEqual({ error: 'El campo add details no debe estas vacio' });  
  // });


  // test('No debe agregar tarea si manda muchos espacio en el titulo aunque el array tenga tarea', () => {

  //   const tasks = [
  //     { id: 1, title: 'Dormir', completed: false },
  //     { id: 2, title: 'Bañarse', completed: false },
  //     { id: 3, title: 'Ir al Supermark', completed: false }
  //   ];
  
  //   const result = addTask('       ', tasks);
  
  //   // Validamos el resultado           
  //   expect(result).toEqual({ error: 'El campo add details no debe estas vacio' });  
  // });

  // test('No debe agregar tarea si manda muchos espacio en el titulo aunque el array no tenga tarea', () => {

  //   const tasks = [];
  
  //   const result = addTask('        ', tasks);
  
  //   // Validamos el resultado           
  //   expect(result).toEqual({ error: 'El campo add details no debe estas vacio' });  
  // })

  // test('Debe agregar el titulo de la tarea ignorando los espacio antes y depues del mismo titulo o frace aunque el array tenga tarea', () => {

  //   const tasks = [
  //     { id: 1, title: 'Dormir', completed: false },
  //     { id: 2, title: 'Bañarse', completed: false },
  //     { id: 3, title: 'Ir al Supermark', completed: false }
  //   ];
  
  //   const result = addTask('      jugar lol        ', tasks);
  
  //   // Validamos el resultado           
  //   expect(result[3].title).toBe('Jugar lol');
  // });

  // test('Debe agregar el titulo de la tarea ignorando los espacio antes y depues del mismo titulo o frace aunque el array no tenga tarea', () => {

  //   const tasks = [
  //     { id: 1, title: 'Dormir', completed: false },
  //     { id: 2, title: 'Bañarse', completed: false },
  //     { id: 3, title: 'Ir al Supermark', completed: false }
  //   ];
  
  //   const result = addTask('      jugar lol        ', tasks);
  
  //   // Validamos el resultado           
  //   expect(result[3].title).toBe('Jugar lol');
  // });

  test('No Debe agregar solo numero al titulo de la tarea aunque al array este con tareas', () => {

    const tasks = [
      { id: 1, title: 'Dormir', completed: false },
      { id: 2, title: 'Bañarse', completed: false },
      { id: 3, title: 'Ir al Supermark', completed: false }
    ];
  
    const result = addTask('61274671264726', tasks);
  
    // Validamos el resultado           
    expect(result.length).toBe(3);
  });


  test('No Debe agregar solo numero al titulo de la tarea aunque al array este sin tarea', () => {

    const tasks = [];
  
    const result = addTask('61274671264726', tasks);
  
    // Validamos el resultado           
    expect(result.length).toBe(0);
  });

  test('No Debe agregar solo numero al titulo de la tarea, sin importar que tenga un espacio en el medio, aunque al array este con tareas', () => {

    const tasks = [
      { id: 1, title: 'Dormir', completed: false },
      { id: 2, title: 'Bañarse', completed: false },
      { id: 3, title: 'Ir al Supermark', completed: false }
    ];
  
    const result = addTask('6127467 1264726', tasks);
  
    // Validamos el resultado           
    expect(result.length).toBe(3);
  });

  test('No Debe agregar solo numero al titulo de la tarea, sin importar que tenga espacio en el medio, aunque al array este sin tarea', () => {

    const tasks = [];
  
    const result = addTask('6127467 1264726', tasks);
  
    // Validamos el resultado           
    expect(result.length).toBe(0);
  });

  test('No Debe agregar solo numero al titulo de la tarea, sin importar que tenga un espacio antes y despues de los numeros, aunque al array este con tareas', () => {

    const tasks = [
      { id: 1, title: 'Dormir', completed: false },
      { id: 2, title: 'Bañarse', completed: false },
      { id: 3, title: 'Ir al Supermark', completed: false }
    ];
  
    const result = addTask('     61274671264726      ', tasks);
  
    // Validamos el resultado           
    expect(result.length).toBe(3);
  });

  test('No Debe agregar solo numero al titulo de la tarea, sin importar que tenga espacio antes y despues de lso numeros, aunque al array este sin tarea', () => {

    const tasks = [];
  
    const result = addTask('      61274671264726        ', tasks);
  
    // Validamos el resultado           
    expect(result.length).toBe(0);
  });