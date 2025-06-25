import PropTypes from 'prop-types'
import React from 'react'

function Pagination({ prev, next, onPrevious, onNext }) {

    //handlers de las funciones
    const handlePrevious = () => {
        onPrevious()
    }

    const handleNext = () => {
        onNext()
    }

  return (
    <>
    <ul className='pagination justify-content-center' >
    {/* Boton de previous, si no existe no muestro nada */}
    {
        prev ? (
            <li className='page-item'>
                <button className='page-link' onClick={handlePrevious} > Pagina previa </button>
            </li>
        ) : null
    }
    {/* Boton de next, si no existe no muestro nada */}
    {
        next ? (
            <li className='page-item'>
                <button className='page-link' onClick={handleNext} > Pagina siguiente </button>
            </li>
        ) : null
    }
    </ul>
    </>
  )
}

Pagination.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Pagination