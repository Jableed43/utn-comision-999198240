// src/app/store.js
import { configureStore } from '@reduxjs/toolkit';
import tasksReducer from '../features/tasks/tasksSlice'; // Importa el reducer de tu slice de tareas

// configureStore es una función de Redux Toolkit que simplifica la creación del Store.
// Configura automáticamente las Redux DevTools y añade middleware por defecto.
export const store = configureStore({
  reducer: {
    // Aquí defines la estructura de tu estado global.
    // La clave 'tasks' en el objeto 'reducer' significa que el estado manejado por
    // 'tasksReducer' será accesible a través de 'state.tasks' en tu Store de Redux.
    tasks: tasksReducer,
    // Si tuvieras más slices (ej. 'users', 'filters'), los añadirías aquí:
    // users: usersReducer,
    // filters: filtersReducer,
  },
});
