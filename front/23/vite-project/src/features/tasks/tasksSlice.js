// src/features/tasks/tasksSlice.js
import { createSlice } from '@reduxjs/toolkit';

// Define el estado inicial para el slice de tareas.
// Será un array vacío, ya que las tareas se cargarán desde localStorage.
const initialState = [];

const tasksSlice = createSlice({
  name: 'tasks', // Nombre del slice. Se usa como prefijo para los tipos de acciones (ej. 'tasks/addTask')
  initialState, // El estado inicial para tu array de tareas

  // Los 'reducers' son funciones que especifican cómo el estado debe cambiar
  // en respuesta a una acción. Redux Toolkit usa Immer internamente,
  // permitiendo "mutar" el estado directamente de forma segura.
  reducers: {
    // Acción para añadir una nueva tarea.
    // 'action.payload' será el texto de la nueva tarea.
    addTask: (state, action) => {
      state.push({
        id: String(Date.now()), // Genera un ID basado en la marca de tiempo, como en tu código original
        text: action.payload,    // El texto de la tarea
        completed: false,        // Por defecto, la tarea no está completada
      });
    },
    // Acción para alternar el estado 'completed' de una tarea.
    // 'action.payload' será el ID de la tarea a alternar.
    toggleComplete: (state, action) => {
      const taskId = action.payload;
      const existingTask = state.find(task => task.id === taskId);
      if (existingTask) {
        existingTask.completed = !existingTask.completed; // Alterna el estado 'completed'
      }
    },
    // Acción para eliminar una tarea.
    // 'action.payload' será el ID de la tarea a eliminar.
    deleteTask: (state, action) => {
      const taskId = action.payload;
      // Retorna un nuevo array de estado sin la tarea que coincide con el ID.
      // Esta es una mutación "segura" ya que Filter devuelve un nuevo array.
      return state.filter(task => task.id !== taskId);
    },
    // Acción para establecer directamente el array de tareas (útil para cargar desde localStorage).
    // 'action.payload' será el array completo de tareas a usar.
    setTasks: (state, action) => {
      return action.payload; // Reemplaza completamente el estado con el payload
    },
  },
});

// Exporta los "action creators" que Redux Toolkit genera automáticamente.
// Estas son funciones que despacharás desde tus componentes.
export const { addTask, toggleComplete, deleteTask, setTasks } = tasksSlice.actions;

// Exporta el reducer principal de este slice para que pueda ser combinado en el Store.
export default tasksSlice.reducer;
