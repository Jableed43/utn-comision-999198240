import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import TaskManager from './TaskManager.jsx';

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
    {
    path: "/tasks",
    element: <TaskManager />,
  },
]);

//El RouterProvider maneja el listado de rutas
createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={routes} />
  </StrictMode>
);