import { useState } from 'react';
import './TaskForm.css';
import PropTypes from 'prop-types'

const TaskForm = ({ onAddTask }) => {
    //estado de la tarea
    const [taskText, setTaskText] = useState("")

    const handleSubmit = (e) => {
        //Evitamos que se refresque la pagina por comportamiento nativo de form
        e.preventDefault()
        //revisamos que nuestro taskText no esté vacio
        if(taskText.trim()) {
            onAddTask(taskText.trim())
            //Limpiar el campo input del formulario
            setTaskText("")
        }
    }

    return (
        <form onSubmit={handleSubmit} className='task-form' >
            <input value={taskText} onChange={e => setTaskText(e.target.value)} placeholder='Escriba su tarea' className='task-form-input' type="text" id='input-task' />
            <button className='task-form-button' type='submit'> Añadir Tarea </button>
        </form>
    )
};

//PropTypes permite tipar las props - Evitando que envie por prop algo indeseado
TaskForm.propTypes = {
    onAddTask: PropTypes.func.isRequired,
}

export default TaskForm;