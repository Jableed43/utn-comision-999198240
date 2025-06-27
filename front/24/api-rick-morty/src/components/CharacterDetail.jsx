import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useCharacterDetail from '../hooks/useCharacterDetail'

function CharacterDetail() {
    // path param
    const { id } = useParams()
    const navigate = useNavigate()

    const { character, loading, error } = useCharacterDetail(id)

    if (loading) {
        return (
            <div className='text-center mt-5'>
                <p> Cargando detalles del personaje... </p>
            </div>
        )
    }

    if (error) {
        return (
            <div className='text-center mt-5 text-red-600' >
                <p> Error: {error.message} </p>
                <button onClick={() => navigate(-1)} className='btn btn-primary mt-3' >Volver a la lista</button>
            </div>
        )
    }

    if (!character) {
        return (
            <div className='text-center mt-5' >
                <p> Personaje no encontrado </p>
                <button onClick={() => navigate(-1)} className='btn btn-primary mt-3' >Volver a la lista</button>
            </div>
        )
    }

    return (
        <div className='container mt-5'>
            <div className='card mb-3 mx-auto' style={{ maxWidth: '700px' }} >
                <img src={character.image} alt={character.name} className='img-fluid rounded-start' />
                <ul className='list-group list-group-flush' >
                    <li className='list-group-item' > Nombre: {character.name} </li>
                    <li className='list-group-item' > Estado: {character.status} </li>
                    <li className='list-group-item' > Especie: {character.species} </li>
                    <li className='list-group-item' > Tipo: {character.type || "N/A"} </li>
                    <li className='list-group-item' > Genero: {character.gender} </li>
                    <li className='list-group-item' > Origen: {character.origin.name} </li>
                    <li className='list-group-item' > Ultima ubicacion conocida: {character.location.name} </li>
                </ul>
                <button onClick={() => navigate("/characters")} className='btn btn-primary mt-3' >Volver a la lista</button>
            </div>
        </div>
    )
}

export default CharacterDetail