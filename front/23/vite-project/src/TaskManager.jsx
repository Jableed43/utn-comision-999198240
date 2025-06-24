// src/TaskManager.jsx
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importa los hooks de Redux para interactuar con el Store
import { setTasks } from './features/tasks/tasksSlice'; // Importa la acción setTasks para cargar el estado inicial
import TaskForm from './components/TaskForm'; // Asegúrate de que la ruta sea correcta
import TaskList from './components/TaskList'; // Asegúrate de que la ruta sea correcta
import './TaskManager.css'; // Asegúrate de tener tu archivo CSS para TaskManager

// Define la clave para localStorage, como en tu código original
const LOCAL_STORAGE_KEY = "react-simple-todo-tasks";

function TaskManager() {
  const dispatch = useDispatch(); // Hook para obtener la función 'dispatch' para enviar acciones al Store
  const tasks = useSelector(state => state.tasks); // Hook para seleccionar el estado 'tasks' del Store de Redux

  // Efecto para cargar las tareas desde localStorage al inicio de la aplicación.
  // Este useEffect se ejecuta una única vez al montar el componente.
  useEffect(() => {
    const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (storedTasks) {
      try {
        const parsedTasks = JSON.parse(storedTasks);
        // Despacha la acción 'setTasks' para inicializar el estado de Redux con las tareas cargadas.
        dispatch(setTasks(parsedTasks));
      } catch (error) {
        console.error("Error al parsear tareas de localStorage:", error);
        // Si hay un error al parsear, inicializa con un array vacío para evitar problemas
        dispatch(setTasks([]));
      }
    }
  }, [dispatch]); // La dependencia 'dispatch' asegura que el efecto no se ejecute innecesariamente

  // Efecto para guardar las tareas en localStorage cada vez que el estado 'tasks' cambia en Redux.
  // Este useEffect se ejecuta cada vez que el array 'tasks' (obtenido de Redux) cambia.
  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks]); // La dependencia 'tasks' hace que el efecto se re-ejecute cuando las tareas cambien

  return (
    <div className='app-container'>
      <h1 className='app-title'> Mi lista de tareas </h1>

      {/* TaskForm ya no necesita la prop onAddTask, ya que despachará la acción directamente a Redux */}
      <TaskForm />

      {/* TaskList ya no necesita las props tasks, onDeleteTask, onToggleComplete,
          ya que accederá al estado y despachará acciones directamente desde Redux a través de TaskItem */}
      <TaskList />
    </div>
  );
}

export default TaskManager;
