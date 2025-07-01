import './TaskItem.css';
import PropTypes from 'prop-types';
import { toggleComplete, deleteTask } from '../features/tasks/tasksSlice';
import { useDispatch } from 'react-redux';

const TaskItem = ({ task }) => {

    const dispatch = useDispatch()


    return (
        <li className='task-item' >
            <input checked={task.completed} onChange={ () => dispatch(toggleComplete(task.id))} className='task-item-checkbox' type="checkbox"/>
            {/* clase condicional en span */}
            <span className={`task-item-text ${ task.completed ? "completed" : "" } `} > {task.text} </span>
            <button onClick={ () => dispatch(deleteTask(task.id)) } className='task-item-delete-button'> Eliminar </button>
        </li>
    )
};

TaskItem.propTypes = {
    task: PropTypes.shape({
        id: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired,
    }).isRequired
}

export default TaskItem;