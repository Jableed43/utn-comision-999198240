// src/components/Characters.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const Characters = ({ characters }) => {
  // Manejar el caso cuando no hay personajes (ej. en caso de error o primera carga sin datos)
  if (!characters || characters.length === 0) {
    return (
      <div className="text-center mt-5">
        <p>No se encontraron personajes. Intenta cargar otra página o verifica la conexión.</p>
      </div>
    );
  }

  return (
    <div className='row'>
      {characters.map((item) => (
        // Usar item.id como key. Es más estable que el index si la lista cambia.
        <div key={item.id} className='col mb-5'>
          <div className='card' style={{ minWidth: '200px' }}> {/* w-100 para que la tarjeta ocupe el 100% de la columna */}
            <img src={item.image} className='card-img-top' alt={item.name} /> {/* Añadido alt y clase para imagen de Bootstrap */}
            <div className='card-body'>
              <h5 className='card-title'>{item.name}</h5>
              <hr/>
              <p className='card-text'>**Estado:** {item.status}</p> {/* Añadido estado, es un campo útil */}
              <p className='card-text'>**Especie:** {item.species}</p>
              <p className='card-text'>**Ubicación:** {item.location.name}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Definición de PropTypes para el componente Characters
Characters.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired, // La API devuelve 'id' como número
      name: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      species: PropTypes.string.isRequired,
      location: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      status: PropTypes.string.isRequired, // Añadido status para validación
    })
  ).isRequired,
};

export default Characters;
