// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import { store } from './app/store';       // Importa tu Store de Redux
import { Provider } from 'react-redux'; // Importa el componente Provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Envuelve tu componente principal <App /> con el Provider.
        Pasa el 'store' que creaste como prop.
        Esto hace que el Store de Redux esté disponible para todos los componentes
        anidados dentro de <App />, permitiéndoles acceder al estado y despachar acciones. */}
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
);