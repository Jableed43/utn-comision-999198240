import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { store } from './app/store.js'
import { Provider } from 'react-redux'

// Provider envuelve el componente principal y le pasa el store
// Permitimos que el store (estado global) este disponible para todos los componentes que se encuentren anidados en App. 
// Todos pueden acceder al estado y ademas pueden despachar acciones

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store} >
      <App />
    </Provider>
  </StrictMode>,
)
