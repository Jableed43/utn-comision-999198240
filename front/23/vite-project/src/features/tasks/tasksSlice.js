import { createSlice } from '@reduxjs/toolkit'

// crear un estado inicial para el slice de tareas
const initialState = [];

const taskSlice = createSlice({
    // Nombre del slice
    name: 'tasks',
    initialState,

    //reducers -> funciones que especifican como el estado debe cambiar
    reducers: {
        //añadir tarea
        addTask: (state, action) => {
            state.push({
                id: String(Date.now()),
                //payload -> carga - es lo que se manda por parametro
                text: action.payload,
                completed: false,
            })
        },

        //toggleComplete
        toggleComplete: (state, action) => {
            const taskId = action.payload;
            //buscamos la tarea que queremos completar
            const existingTask = state.find(task => task.id === taskId)
            if(existingTask){
                //Alterna el estado completed
                existingTask.completed = !existingTask.completed
            }
        },

        //Accion de eliminar la tarea
        deleteTask: (state, action) => {
            const taskId = action.payload;
            // con el filter omitimos la tarea que tiene el id que nos llega por payload
            return state.filter(task => task.id !== taskId)
        },

        //Accion para establecer el array de tareas - se relaciona con el localStorage

        setTasks: (state, action) => {
            return action.payload
        }
    }
})

//Exportamos las acciones, funciones que despacharemos desde nuestros componentes
export const { addTask, toggleComplete, deleteTask, setTasks } = taskSlice.actions;

//Exportar el reducir para que pueda ser utilizado en el store

export default taskSlice.reducer;