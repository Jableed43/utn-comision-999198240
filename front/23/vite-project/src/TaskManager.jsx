import React, { useState, useEffect } from 'react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import './App.css'; // Importa los estilos de App
import { NavLink } from 'react-router-dom';

const LOCAL_STORAGE_KEY = 'react-simple-todo-tasks';

function TaskManager() {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (text) => {
        const newId = String(Date.now());
        const newTask = { id: newId, text, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTask]);
    };

    const handleToggleComplete = (id) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) =>
                task.id === id ? { ...task, completed: !task.completed } : task
            )
        );
    };

    const handleDeleteTask = (id) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
    };

    return (
        <div className="app-container"> {/* Usamos la clase CSS */}
        <NavLink
          to={"/"}
        >
          home
        </NavLink>
            <h1 className="app-title">Mi Lista de Tareas Simple</h1> {/* Usamos la clase CSS */}
            <TaskForm onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onToggleComplete={handleToggleComplete}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
}

export default TaskManager;