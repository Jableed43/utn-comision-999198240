// src/components/CharactersPage.jsx
import React from 'react';
import useRickAndMortyApi from '../hooks/useRickAndMortyApi';
import Navbar from '../components/Navbar';
import Pagination from '../components/Pagination';
import Characters from '../components/Characters';


function CharactersPage() {
  // Usa el hook personalizado para obtener todos los datos y funciones
  const { characters, info, loading, error, onPrevious, onNext } = useRickAndMortyApi();

  // Muestra un estado de carga mientras se obtienen los datos
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-2xl text-blue-600">
        Cargando personajes...
      </div>
    );
  }

  // Muestra un mensaje de error si algo sale mal
  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-red-100 text-red-700 p-4">
        <h2 className="text-xl font-semibold mb-2">¡Error al cargar los datos!</h2>
        <p className="text-lg">{error.message}</p>
        <p className="text-sm text-gray-600 mt-4">
          Por favor, verifica tu conexión a internet o la URL de la API.
        </p>
      </div>
    );
  }

  // Si no hay carga ni error, renderiza el contenido principal
  return (
    <>
      <Navbar brand="Rick and Morty App" /> {/* La Navbar ahora es parte de esta página */}

      <div className="container mx-auto px-4 mt-5"> {/* Agregado mx-auto y px-4 para centrar y padding */}
        {/* Componente de paginación superior */}
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />

        {/* Componente para mostrar los personajes */}
        <Characters characters={characters} />

        {/* Componente de paginación inferior */}
        <Pagination
          prev={info.prev}
          next={info.next}
          onPrevious={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}

export default CharactersPage;
