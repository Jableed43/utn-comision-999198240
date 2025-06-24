// src/components/TaskForm.jsx
import { useState } from 'react';
import { useDispatch } from 'react-redux'; // Importa useDispatch para enviar acciones
import { addTask } from '../features/tasks/tasksSlice'; // Importa la acción addTask
import './TaskForm.css';
import PropTypes from 'prop-types'; // Puedes eliminar esta importación si ya no hay props

const TaskForm = () => { // Ya no recibe 'onAddTask' como prop
    // Estado local para el texto del input de la tarea
    const [taskText, setTaskText] = useState("");
    // Obtiene la función 'dispatch' del Store de Redux
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado del formulario de recargar la página
        // Verifica si el texto de la tarea no está vacío después de eliminar espacios en blanco
        if(taskText.trim()) {
            // Despacha la acción 'addTask' al Store de Redux.
            // El 'payload' de la acción será el texto de la tarea.
            dispatch(addTask(taskText.trim()));
            setTaskText(""); // Limpia el campo de entrada después de añadir la tarea
        }
    };

    return (
        <form onSubmit={handleSubmit} className='task-form' >
            <input
                value={taskText}
                onChange={e => setTaskText(e.target.value)} // Actualiza el estado local del input
                placeholder='Escriba su tarea'
                className='task-form-input'
                type="text"
                id='input-task'
            />
            <button className='task-form-button' type='submit'> Añadir Tarea </button>
        </form>
    );
};

// Elimina o ajusta PropTypes, ya que 'onAddTask' ya no es una prop.
// TaskForm.propTypes = {
//     onAddTask: PropTypes.func.isRequired,
// };

export default TaskForm;
