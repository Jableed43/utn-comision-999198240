// src/components/TaskItem.jsx
import React from 'react';
import { useDispatch } from 'react-redux'; // Importa useDispatch para enviar acciones
import { toggleComplete, deleteTask } from '../features/tasks/tasksSlice'; // Importa las acciones de tu slice
import './TaskItem.css';
import PropTypes from 'prop-types';

// TaskItem ahora solo recibe 'task' como prop, ya no las funciones de callback
const TaskItem = ({ task }) => {
    // Obtiene la función 'dispatch' del Store de Redux
    const dispatch = useDispatch();

    // Manejador para alternar el estado 'completed' de la tarea
    const handleToggleComplete = () => {
        // Despacha la acción 'toggleComplete' con el ID de la tarea como payload
        dispatch(toggleComplete(task.id));
    };

    // Manejador para eliminar la tarea
    const handleDeleteTask = () => {
        // Despacha la acción 'deleteTask' con el ID de la tarea como payload
        dispatch(deleteTask(task.id));
    };

    return (
        <li className='task-item' >
            {/* Input checkbox para marcar como completada/incompleta */}
            <input
                checked={task.completed}
                onChange={handleToggleComplete} // Llama al manejador que despacha la acción
                className='task-item-checkbox'
                type="checkbox"
            />
            {/* Texto de la tarea, con clase condicional para tachado */}
            <span
                className={`task-item-text ${ task.completed ? "completed" : "" } `}
                onClick={handleToggleComplete} // También puedes permitir alternar haciendo clic en el texto
            >
                {task.text}
            </span>
            {/* Botón para eliminar la tarea */}
            <button
                onClick={handleDeleteTask} // Llama al manejador que despacha la acción
                className='task-item-delete-button'
            >
                Eliminar
            </button>
        </li>
    );
};

// PropTypes para la prop 'task' que sigue siendo necesaria
TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    // onToggleComplete: PropTypes.func.isRequired, // Eliminar estas líneas
    // onDeleteTask: PropTypes.func.isRequired
};

export default TaskItem;
