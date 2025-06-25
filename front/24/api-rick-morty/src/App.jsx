import { Outlet } from "react-router-dom"

function App() {

  return (
    <>
    {/* Outlet muestra el componente asociado a la ruta actual (homePage, charactersPage) */}
    <Outlet />
    </>
  )
}

export default App
