// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom'; // Importa Link para la navegación declarativa
import rick from "../assets/rick.jpg"

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 to-indigo-200 text-center p-4">
      <h1 className="text-5xl md:text-6xl font-extrabold text-purple-700 mb-6 animate-pulse">
        ¡Bienvenido a la App de Rick y Morty!
      </h1>
      <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl">
        Explora todos los personajes del universo de Rick y Morty.
      </p>
      {/* Usamos Link para navegar a la página de personajes */}
      <Link
        to="/characters"
        >
        Ver Personajes
      </Link>
      <br />
      <img width='800px' src={rick} alt="rick" />
    </div>
  );
};

export default HomePage;
