// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from 'react-router-dom'; // Importa los componentes de React Router DOM
import App from './App'; // Importa el componente App (ahora como layout principal)
import HomePage from './pages/HomePage'; // Importa la nueva página de inicio
import CharactersPage from './pages/CharactersPage'; // Importa la nueva página de personajes

// Define tus rutas de la aplicación
const router = createBrowserRouter([
  {
    path: "/", // Ruta raíz
    element: <App />, // App actuará como el layout principal
    children: [ // Rutas anidadas dentro de App
      {
        index: true, // Esto hace que HomePage se renderice en la ruta "/" (ruta por defecto de App)
        element: <HomePage />,
      },
      {
        path: "/characters", // Ruta para ver los personajes
        element: <CharactersPage />,
      },
      // Puedes añadir más rutas aquí en el futuro
      // {
      //   path: "/about",
      //   element: <AboutPage />,
      // },
    ],
    // Puedes añadir un errorElement aquí si quieres una página de error global
    // errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* El RouterProvider maneja el listado de rutas y las renderiza */}
    <RouterProvider router={router} />
  </React.StrictMode>,
);
