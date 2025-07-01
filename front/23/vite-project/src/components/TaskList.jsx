import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';
import './TaskList.css';
import PropTypes from 'prop-types';

const TaskList = () => {

  //Hook para Seleccionar el estado del store - El estado de tareas
  const tasks = useSelector((state) => state.tasks)

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
//   Las props onDeleteTask y onToggleComplete se quitan y ahora se despachan directamente a redux
                />
             )) }
        </ul>
    )
};

export default TaskList;