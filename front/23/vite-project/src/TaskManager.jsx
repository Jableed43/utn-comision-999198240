import React, { useEffect, useState } from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
//Va a manejar el estado de las tareas
//a las tareas las va a guardar y las va a consultar - localStorage
//Contiene funciones para añadir, marcar como completas y borrar las tareas

//lo ideal es pasarlo a variable de entorno
const LOCAL_STORAGE_KEY = "react-simple-todo-tasks"

function TaskManager() {
  //Estado de las tareas
  const [tasks, setTasks] = useState([])
  
  //Se guarda como string -  JSON.stringify lo guarda como json
  // JSON.parse lo convierte a js para poder iterarlo y acceder a metodos nativos o propiedades
  // Crea el espacio en localStorage, ademas guarda los datos nuevos
    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);
  
  //Busca el listado de tareas en localStorage, si existe setea el estado con las tareas existentes
    useEffect(() => {
        const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);


  //Funcion para añadir la tarea
  const handleAddTask = (text) => {
    // Tarea -> texto, completed, id
    // id
    const newId = String(Date.now())
    // Armamos nuestro objeto tarea
    const newTask = { id: newId, text, completed: false }
    // prevTasks son las tareas ya existentes en el estado
    // usamos el spread operator para abrir el array para introducir la nueva tarea
    // Esta forma permite añadir a las anteriores la nueva
    setTasks((prevTasks) => [...prevTasks, newTask])
  }

  //Funcion para marcar completa/ imcompleta - toggle
  const handleToggleComplete = (id) => {
    setTasks((prevTasks) =>
      //validamos que el id que nos llega se encuentra en nuestro listado
      prevTasks.map((task) =>
        // Abrir - spread a la tarea con el id que me llegó
        // el id que me llega por parametro coincide con alguno que tengo en mi estado?
        // si coincide le cambiamos el completed al valor booleano opuesto true->false, false->true
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    )
  }

  //Funcion para borrar la tarea
  const handleDeleteTask = (id) => {
    // Filter retorna un nuevo array
    // Con el filter borramos porque dejamos afuera los registros que coincidan con el id del parametro
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id))
  }

  return (
    <div className='app-container'>

    <h1 className='app-title'> Mi lista de tareas </h1>

    {/* TaskForm */}
    <TaskForm onAddTask={handleAddTask} />

    {/* List */}
    <TaskList onDeleteTask={handleDeleteTask} onToggleComplete={handleToggleComplete} tasks={tasks} />

    </div>
  )
}

export default TaskManager