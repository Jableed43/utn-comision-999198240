import TaskItem from './TaskItem';
import './TaskList.css';
import PropTypes from 'prop-types';

const TaskList = ({ tasks, onToggleComplete, onDeleteTask }) => {
   
    //rederizado condicional
    //empty-state
    if(tasks.length === 0){
        return <p className='no-tasks-message' > No hay tareas pendientes, ¡Añade una nueva! </p>
    }

    return (
        <ul className='task-list' >
            {/* El bloque de codigo del map va entre parentesis en el renderizado xq es un retorno */}
            {tasks.map(task => ( 
                <TaskItem 
                key={task.id}
                task={task}
                onDeleteTask={onDeleteTask}
                onToggleComplete={onToggleComplete}
                />
             )) }
        </ul>
    )
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