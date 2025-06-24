// src/components/TaskList.jsx
import { useSelector } from 'react-redux'; // Importa useSelector para leer el estado de Redux
import TaskItem from './TaskItem'; // Asegúrate de que la ruta sea correcta
import './TaskList.css';

// TaskList ya no recibe 'tasks', 'onToggleComplete', 'onDeleteTask' como props
const TaskList = () => {
    // Selecciona el array de tareas del estado global de Redux.
    // 'state' es el estado completo del Store; 'state.tasks' accede a la parte gestionada por tasksSlice.
    const tasks = useSelector(state => state.tasks);

    // Renderizado condicional para el "empty-state"
    if(tasks.length === 0){
        return <p className='no-tasks-message' > No hay tareas pendientes, ¡Añade una nueva! </p>;
    }

    return (
        <ul className='task-list' >
            {/* Itera sobre las tareas obtenidas de Redux */}
            {tasks.map(task => (
                <TaskItem
                    key={task.id} // Siempre es buena práctica usar una key única en listas
                    task={task} // Pasa el objeto de tarea individual como prop a TaskItem
                    // Ya no pasamos onToggleComplete y onDeleteTask como props aquí,
                    // porque TaskItem ahora despachará estas acciones directamente a Redux.
                />
            ))}
        </ul>
    );
};

export default TaskList;
