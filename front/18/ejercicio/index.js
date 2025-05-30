// 1. Obtener referencias a los Elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn')
const taskList = document.getElementById('taskList')

// 2. Crear funcion para agregar Tarea
function agregarTarea() {
    const taskText = taskInput.value.trim()
    // Trim quita del texto espacio x delante y x detras

    //Validar si el campo no esta vacio
    if(taskText !== ''){

        //Crear un list item
       const listItem = document.createElement('li')

       //Creamos el span para el texto de la tarea
       const taskSpan = document.createElement('span')

       // Asignarle el texto del input al span
       taskSpan.textContent = taskText

        // Creamos boton de eliminar
        const deleteBtn = document.createElement('button')

        // Creo la funcionalidad de eliminar
        deleteBtn.addEventListener('click', function() {
            //Elimina el li del padre - elimina toda la tarea
            this.parentNode.remove()
            //this señala al objeto en el que se encuentra
        })

        // Marcar y desmarcar una tarea como completada
        taskSpan.addEventListener('click', function() {
            // this hace referencia al listItem
            // toggle añade o quita la clase completed
            this.parentNode.classList.toggle('completed')
        })

        //Armamos el listItem - ensamblar
        // El span - texto
        listItem.appendChild(taskSpan)
        // El boton para eliminar
        listItem.appendChild(deleteBtn)

        // Agregar el listItem a la lista UL
        taskList.appendChild(listItem)

        // limpiamos el input
        taskInput.value = "";

        // necesito enfocar luego de limpiar el input
        taskInput.focus();

    } else {
        alert("Por favor escribe una tarea antes de agregarla")
    }
}

// Asociar la funcion agregar tarea al evento del click del boton
addTaskBtn.addEventListener('click', agregarTarea)

// Como opcional, podemos añadir la tarea al presionar "enter"
taskInput.addEventListener('keypress', function (evento) {
    if(evento.key === 'Enter') {
        agregarTarea()
    }
})