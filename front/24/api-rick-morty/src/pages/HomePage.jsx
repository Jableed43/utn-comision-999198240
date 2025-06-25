import React from 'react'
import {Link} from 'react-router-dom'
import rickPic from '../assets/rick.jpg'

function HomePage() {
  return (
    <div>
        <h1>Bienvenido a la app de rick y morty</h1>
        <p> Explora todos los personajes del universo de rick y morty </p>
        <Link to="/characters" >
        Ver personajes
        </Link>
        <br />
        <img width='800px' src={rickPic} alt="rick" />
    </div>
  )
}

export default HomePage