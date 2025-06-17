// components/TaskForm.js
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './TaskForm.css'; // Importa los estilos de TaskForm

const TaskForm = ({ onAddTask }) => {
    const [taskText, setTaskText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (taskText.trim()) {
            onAddTask(taskText.trim());
            setTaskText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="task-form"> {/* Usamos la clase CSS */}
            <input
                type="text"
                value={taskText}
                onChange={(e) => setTaskText(e.target.value)}
                placeholder="Añadir nueva tarea..."
                className="task-form-input" // Usamos la clase CSS
            />
            <button type="submit" className="task-form-button"> {/* Usamos la clase CSS */}
                Añadir Tarea
            </button>
        </form>
    );
};

TaskForm.propTypes = {
    onAddTask: PropTypes.func.isRequired,
};

export default TaskForm;