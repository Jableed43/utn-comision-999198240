import React from 'react'
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

function Characters({ characters }) {
  const navigate = useNavigate()

    //Validamos que characters no este vacio ni undefined
    if(!characters || characters.length === 0){
        return (
            <>
            <p>No se encontraron personajes. Intenta cargar otra pagina o verifica la conexion.</p>
            </>
        )
    }

  return (
    <div className='row' >
        {characters.map((character) => (
            <div key={character.id} className='col mb-5' >
                <div className='card' onClick={ () => navigate(`/characters/${character.id}`) } style={{ minWidth: '200px', cursor: 'pointer' }} >
                <img src={character.image} alt={character.name} />
                <div className='card-body'>
                    <h5 className='card-title' > {character.name} </h5>
                    <p className='card-text' > {character.status} </p>
                    <p className='card-text' > {character.species} </p>
                    <p className='card-text' > {character.location.name} </p>
                </div>
                </div>
            </div>
        )) }
    </div>
  )
}

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

export default Characters