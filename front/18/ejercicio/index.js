// 1. Obtener referencias a los Elementos del DOM
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// 2. Función para crear botón de eliminar (reutilizable)
function createDeleteButton() {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Eliminar';
    deleteBtn.className = 'delete-btn';
    deleteBtn.setAttribute('aria-label', 'Eliminar tarea');
    
    deleteBtn.addEventListener('click', function() {
        // Agregar animación de eliminación
        this.parentNode.style.transform = 'translateX(100%)';
        this.parentNode.style.opacity = '0';
        
        setTimeout(() => {
            this.parentNode.remove();
            updateTaskCounter();
        }, 300);
    });
    
    return deleteBtn;
}

// 3. Función para crear span de tarea (reutilizable)
function createTaskSpan(text) {
    const taskSpan = document.createElement('span');
    taskSpan.textContent = text;
    taskSpan.className = 'task-text';
    taskSpan.setAttribute('tabindex', '0');
    taskSpan.setAttribute('role', 'button');
    taskSpan.setAttribute('aria-label', 'Marcar como completada');
    
    taskSpan.addEventListener('click', function() {
        this.parentNode.classList.toggle('completed');
        updateTaskCounter();
    });
    
    // Soporte para teclado (accesibilidad)
    taskSpan.addEventListener('keypress', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.parentNode.classList.toggle('completed');
            updateTaskCounter();
        }
    });
    
    return taskSpan;
}

// 4. Función para actualizar contador de tareas
function updateTaskCounter() {
    const totalTasks = taskList.children.length;
    const completedTasks = taskList.querySelectorAll('.completed').length;
    
    // Crear o actualizar contador
    let counter = document.getElementById('taskCounter');
    if (!counter) {
        counter = document.createElement('div');
        counter.id = 'taskCounter';
        counter.className = 'task-counter';
        document.querySelector('.container').insertBefore(counter, taskList);
    }
    
    counter.innerHTML = `
        <span>Total: ${totalTasks}</span>
        <span>Completadas: ${completedTasks}</span>
        <span>Pendientes: ${totalTasks - completedTasks}</span>
    `;
}

// 5. Función para validar entrada
function validateInput() {
    const taskText = taskInput.value.trim();
    
    if (!taskText) {
        taskInput.style.borderColor = '#dc3545';
        taskInput.style.boxShadow = '0 0 0 0.2rem rgba(220, 53, 69, 0.25)';
        taskInput.placeholder = '¡Escribe una tarea!';
        taskInput.focus();
        return false;
    }
    
    // Resetear estilos de validación
    taskInput.style.borderColor = '';
    taskInput.style.boxShadow = '';
    taskInput.placeholder = 'Escribe una nueva tarea...';
    return true;
}

// 6. Función principal mejorada para agregar tarea
function agregarTarea() {
    if (!validateInput()) {
        return;
    }
    
    const taskText = taskInput.value.trim();
    
    // Crear elementos
    const listItem = document.createElement('li');
    listItem.className = 'task-item';
    
    // Usar funciones reutilizables
    const taskSpan = createTaskSpan(taskText);
    const deleteBtn = createDeleteButton();
    
    // Ensamblar elementos
    listItem.appendChild(taskSpan);
    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
    
    // Limpiar input y enfocar
    taskInput.value = '';
    taskInput.focus();
    
    // Actualizar contador
    updateTaskCounter();
    
    // Agregar animación de entrada
    listItem.style.opacity = '0';
    listItem.style.transform = 'translateY(-10px)';
    
    setTimeout(() => {
        listItem.style.transition = 'all 0.3s ease';
        listItem.style.opacity = '1';
        listItem.style.transform = 'translateY(0)';
    }, 10);
}

// 7. Función para limpiar todas las tareas completadas
function limpiarCompletadas() {
    const completedTasks = taskList.querySelectorAll('.completed');
    completedTasks.forEach(task => {
        task.style.transform = 'translateX(100%)';
        task.style.opacity = '0';
        setTimeout(() => task.remove(), 300);
    });
    
    setTimeout(() => updateTaskCounter(), 350);
}

// 8. Event listeners mejorados
addTaskBtn.addEventListener('click', agregarTarea);

// Mejorar validación en tiempo real
taskInput.addEventListener('input', function() {
    this.style.borderColor = '';
    this.style.boxShadow = '';
    this.placeholder = 'Escribe una nueva tarea...';
});

// Agregar tarea con Enter
taskInput.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        agregarTarea();
    }
});

// 9. Agregar botón para limpiar completadas
document.addEventListener('DOMContentLoaded', function() {
    // Crear botón de limpiar completadas
    const clearBtn = document.createElement('button');
    clearBtn.textContent = 'Limpiar Completadas';
    clearBtn.id = 'clearCompletedBtn';
    clearBtn.className = 'clear-btn';
    
    clearBtn.addEventListener('click', limpiarCompletadas);
    
    // Insertar botón después del botón agregar
    addTaskBtn.parentNode.insertBefore(clearBtn, addTaskBtn.nextSibling);
    
    // Agregar espacio entre botones
    clearBtn.style.marginLeft = '10px';
});