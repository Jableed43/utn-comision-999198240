// src/components/Characters.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'; // Importa Link

function Characters({ characters }) {
    if (!characters || characters.length === 0) {
        return (
            <div className="text-center mt-5"> {/* Agregamos clases para centrar el texto */}
                <p>No se encontraron personajes. Intenta cargar otra página o verifica la conexión.</p>
            </div>
        );
    }

    return (
        <div className='row'>
            {characters.map((character) => (
                // Envolvemos la tarjeta con un Link
                <div key={character.id} className='col-12 col-md-4 col-lg-3 mb-5 d-flex align-items-stretch'>
                    <Link
                        to={`/characters/${character.id}`} // Ruta dinámica al detalle del personaje
                        className='card w-100 text-decoration-none text-dark' // Estilos para que parezca una tarjeta normal, quitando subrayado
                        style={{ minWidth: '200px' }}
                    >
                        <img src={character.image} className='card-img-top' alt={character.name} />
                        <div className='card-body d-flex flex-column'> {/* flex-column para que el contenido se apile */}
                            <h5 className='card-title'>{character.name}</h5>
                            <hr />
                            <p className='card-text mt-auto'>Estado: {character.status}</p> {/* mt-auto para empujar al final */}
                            <p className='card-text'>Especie: {character.species}</p>
                            <p className='card-text'>Ubicación: {character.location.name}</p>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
}

// Definición de PropTypes para el componente Characters
Characters.propTypes = {
    characters: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            species: PropTypes.string.isRequired,
            location: PropTypes.shape({
                name: PropTypes.string.isRequired,
            }).isRequired,
            status: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default Characters;