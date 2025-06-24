// src/App.jsx
import React from 'react';
import { Outlet } from 'react-router-dom'; // Outlet renderiza el componente de la ruta anidada

function App() {
  return (
    // Aquí puedes poner elementos de layout que sean comunes a todas las rutas,
    // como un footer global o un header que no sea parte de cada página.
    // En este caso, solo usamos Outlet para renderizar la ruta actual.
    <div>
      {/* Outlet renderizará el componente asociado a la ruta actual (HomePage o CharactersPage) */}
      <Outlet />
    </div>
  );
}

export default App;
