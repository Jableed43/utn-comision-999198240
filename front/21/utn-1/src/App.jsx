import './App.css'
import { useState } from 'react'

function App() {
  //Estado, setEstado
  const [contenido, setContenido] = useState("Soy contenido inicial")

  //manejador
  const handleContenido = () => {
    if(contenido === " "){
      setContenido("Soy contenido")
    } else {
      setContenido(" ")
    }
  }

  return (

      <>
        <p> {contenido} </p>
        <button onClick={ handleContenido } > Cambiar contenido </button>
      </>

  )
}

export default App 
