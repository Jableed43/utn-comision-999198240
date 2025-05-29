// 1. Obtener referencias a los elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// 2. Función para agregar una nueva tarea
function agregarTarea() {
  const taskText = taskInput.value.trim(); // Obtener el texto del input y eliminar espacios al inicio/fin

  // Si el campo de texto no está vacío
  if (taskText !== '') {
    // a. Crear el elemento <li> para la tarea
    const listItem = document.createElement('li');

    // b. Crear el span para el texto de la tarea
    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText; // Asignar el texto del input al span

    // c. Crear el botón "Eliminar"
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';

    // d. Agregar Event Listener para el botón "Eliminar"
    deleteBtn.addEventListener('click', function() {
      // 'this' en una función tradicional aquí es el botón 'deleteBtn'
      // Su padre es el 'listItem', entonces removemos el 'listItem'
      this.parentNode.remove();
      // O también: listItem.remove();
    });

    // e. Agregar Event Listener para marcar/desmarcar tarea como completada
    // Usamos el span para que el click en el texto active el completado
    taskSpan.addEventListener('click', function() {
      // 'this' aquí es el 'taskSpan'. Su padre es el 'listItem'
      // Usamos classList.toggle para añadir/quitar la clase 'completed'
      this.parentNode.classList.toggle('completed');
    });

    // f. Ensamblar el listItem: añadir el span y el botón
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);

    // g. Agregar el listItem a la lista <ul>
    taskList.appendChild(listItem);

    // h. Limpiar el campo de entrada
    taskInput.value = '';
    taskInput.focus(); // Poner el foco de nuevo en el input para facilitar la próxima entrada

  } else {
    // Si el campo está vacío, alertar al usuario
    alert('Por favor, escribe una tarea antes de agregarla.');
  }
}

// 3. Asociar la función 'agregarTarea' al evento 'click' del botón
addTaskBtn.addEventListener('click', agregarTarea);

// 4. (Opcional) Permitir agregar tarea al presionar "Enter" en el input
taskInput.addEventListener('keypress', function(event) {
  // Verificamos si la tecla presionada es "Enter" (código 13 o 'Enter')
  if (event.key === 'Enter') {
    agregarTarea(); // Llamamos a la misma función de agregar tarea
  }
});