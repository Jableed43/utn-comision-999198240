// components/TaskList.js
import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';
import './TaskList.css'; // Importa los estilos de TaskList

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
    if (tasks.length === 0) {
        return <p className="no-tasks-message">No hay tareas pendientes. ¡Añade una nueva!</p>;
    }

    return (
        <ul className="task-list"> {/* Usamos la clase CSS */}
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    onToggleComplete={onToggleComplete}
                    onDeleteTask={onDeleteTask}
                />
            ))}
        </ul>
    );
};

TaskList.propTypes = {
    tasks: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            text: PropTypes.string.isRequired,
            completed: PropTypes.bool.isRequired,
        })
    ).isRequired,
    onToggleComplete: PropTypes.func.isRequired,
    onDeleteTask: PropTypes.func.isRequired,
};

export default TaskList;