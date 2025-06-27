import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './pages/HomePage.jsx'
import CharactersPage from './pages/CharactersPage.jsx'
import CharacterDetail from './components/CharacterDetail.jsx'

//Definir las rutas de nuestra aplicacion
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      //children son las rutas anidadas dentro de App
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/characters",
        element: <CharactersPage />
      },
      { 
        path: "/characters/:id",
        element: <CharacterDetail />
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* El routerProvider maneja el listado de rutas y las muestra en pantalla */}
    <RouterProvider router={router} />
  </StrictMode>,
)
