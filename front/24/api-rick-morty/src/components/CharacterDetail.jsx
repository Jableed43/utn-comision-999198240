// src/components/CharacterDetail.jsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom'; // Importamos useParams y useNavigate
import useCharacterDetail from '../hooks/useCharacterDetail'; // Importamos nuestro hook de detalle

const CharacterDetail = () => {
  const { id } = useParams(); // Obtiene el ID del personaje desde la URL
  const navigate = useNavigate(); // Para volver a la página anterior

  // Usamos nuestro hook para obtener los datos del personaje por su ID
  const { character, loading, error } = useCharacterDetail(id);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <p>Cargando detalles del personaje...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center mt-5 text-red-600">
        <p>Error: {error.message}</p>
        <button
          onClick={() => navigate(-1)} // Vuelve a la página anterior
          className="btn btn-primary mt-3"
        >
          Volver a la lista
        </button>
      </div>
    );
  }

  if (!character) {
    return (
      <div className="text-center mt-5">
        <p>Personaje no encontrado.</p>
        <button
          onClick={() => navigate(-1)}
          className="btn btn-primary mt-3"
        >
          Volver a la lista
        </button>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div className="card mb-3 mx-auto" style={{ maxWidth: '700px' }}> {/* mx-auto para centrar */}
        <div className="row g-0">
          <div className="col-md-5">
            <img
              src={character.image}
              className="img-fluid rounded-start"
              alt={character.name}
            />
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h1 className="card-title text-center mb-3">{character.name}</h1>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">Estado: {character.status}</li>
                <li className="list-group-item">Especie: {character.species}</li>
                <li className="list-group-item">Tipo: {character.type || 'N/A'}</li>
                <li className="list-group-item">Género: {character.gender}</li>
                <li className="list-group-item">Origen: {character.origin.name}</li>
                <li className="list-group-item">Última Ubicación Conocida: {character.location.name}</li>
                <li className="list-group-item">
                  Episodios: {character.episode.length}
                </li>
              </ul>
              <div className="text-center mt-4">
                <button
                  onClick={() => navigate(-1)} // Vuelve a la página anterior
                  className="btn btn-primary"
                >
                  Volver a la lista
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CharacterDetail;