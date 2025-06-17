// components/TaskItem.js
import React from 'react';
import PropTypes from 'prop-types';
import './TaskItem.css'; // Importa los estilos de TaskItem

const TaskItem = ({ task, onToggleComplete, onDeleteTask }) => {
    return (
        <li className="task-item"> {/* Usamos la clase CSS */}
            <input
                type="checkbox"
                checked={task.completed}
                onChange={() => onToggleComplete(task.id)}
                className="task-item-checkbox" // Usamos la clase CSS
            />
            <span className={`task-item-text ${task.completed ? 'completed' : ''}`}> {/* Clases condicionales */}
                {task.text}
            </span>
            <button
                onClick={() => onDeleteTask(task.id)}
                className="task-item-delete-button" // Usamos la clase CSS
            >
                Eliminar
            </button>
        </li>
    );
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
};

export default TaskItem;