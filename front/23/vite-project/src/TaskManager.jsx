import React, { useEffect } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import { useSelector } from 'react-redux'
//Va a manejar el estado de las tareas
//a las tareas las va a guardar y las va a consultar - localStorage
//Contiene funciones para añadir, marcar como completas y borrar las tareas

//lo ideal es pasarlo a variable de entorno
const LOCAL_STORAGE_KEY = "react-simple-todo-tasks"

function TaskManager() {

  //Hook para Seleccionar el estado del store - El estado de tareas
  const tasks = useSelector((state) => state.tasks)
     
  //Se guarda como string -  JSON.stringify lo guarda como json
  // JSON.parse lo convierte a js para poder iterarlo y acceder a metodos nativos o propiedades
  // Crea el espacio en localStorage, ademas guarda los datos nuevos
  // Guardar las tareas en localStorage cada vez que el estado 'tasks' cambia en redux
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]); // La dependencia hace que el efecto se re ejecute cuando las tareas cambian
    
  return (
    <div className='app-container'>

    <h1 className='app-title'> Mi lista de tareas </h1>

    {/* TaskForm ya no necesita la prop onAddTask, ya que despachará la accion directamente a redux */}
    <TaskForm/>

    {/* List ya no necesita las props tasks, onDeleteTask, onToggleComplete, ya que accede al estado y despachará las acciones directamente desde redux a traves de taskItem */}
    <TaskList/>

    </div>
  )
}

export default TaskManager