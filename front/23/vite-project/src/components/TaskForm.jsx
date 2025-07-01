import { useState } from 'react';
import './TaskForm.css';
import { addTask } from '../features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

const TaskForm = () => {
    //estado de la tarea
    const [taskText, setTaskText] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        //Evitamos que se refresque la pagina por comportamiento nativo de form
        e.preventDefault()
        //revisamos que nuestro taskText no esté vacio
        if(taskText.trim()) {
            dispatch(addTask(taskText.trim()))
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

//Eliminamos las props types

export default TaskForm;