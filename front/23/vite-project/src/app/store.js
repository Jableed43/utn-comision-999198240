import { configureStore } from "@reduxjs/toolkit";
// Importamos el reducer del slice de tareas
import tasksReducer from '../features/tasks/tasksSlice'

const LOCAL_STORAGE_KEY = 'react-simple-todo-tasks'; // La misma clave que usas en el componente

// Función para cargar el estado inicial desde localStorage
const loadState = () => {
  try {
    const serializedState = localStorage.getItem(LOCAL_STORAGE_KEY);
    if (serializedState === null) {
      return undefined; // Devuelve undefined para que Redux use el initialState del reducer
    }
    return JSON.parse(serializedState);
  } catch (error) {
    console.error("Error al cargar el estado de localStorage:", error);
    return undefined; // En caso de error, también deja que Redux use el initialState
  }
};

export const store = configureStore({
    reducer: {
        //Definimos la estructura del estado global
        //Escribimos el estado que es manejado por el reducer
        tasks: tasksReducer,
    },
     preloadedState: {
        tasks: loadState(), // Pasa el estado de 'tasks' cargado desde localStorage
  },
})