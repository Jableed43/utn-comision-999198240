// src/components/Pagination.jsx
import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes

const Pagination = ({ prev, next, onPrevious, onNext }) => {

  const handlePrevious = () => {
    onPrevious();
  };

  const handleNext = () => {
    onNext();
  };

  return (
    <nav>
      <ul className='pagination justify-content-center'>
        {/* Botón "Previous" */}
        {prev ? (
          <li className='page-item'>
            <button className='page-link' onClick={handlePrevious}>Previous</button>
          </li>
        ) : null}

        {/* Botón "Next" */}
        {next ? (
          <li className='page-item'>
            <button className='page-link' onClick={handleNext}>Next</button>
          </li>
        ) : null}
      </ul>
    </nav>
  );
};

// Definición de PropTypes para validar las props que recibe el componente
Pagination.propTypes = {
  prev: PropTypes.string,
  next: PropTypes.string,
  onPrevious: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired,
};

export default Pagination;
