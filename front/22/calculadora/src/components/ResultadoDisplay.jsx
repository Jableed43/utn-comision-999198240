import PropTypes from 'prop-types';

// ===== COMPONENTE DE PRESENTACIÓN =====
// Este componente demuestra la composición de componentes en React
// Separa la lógica de presentación del resultado en su propio componente
// Esto hace el código más modular y reutilizable
function ResultadoDisplay({ resultado, mostrarMensaje }) {
  return (
    <div>
      <h2>Resultado</h2>
      {/* ===== RENDERIZADO CONDICIONAL ===== */}
      {/* El operador ternario permite mostrar diferentes contenidos según el estado */}
      {/* Esto demuestra cómo React solo renderiza lo necesario gracias al Virtual DOM */}
      {resultado !== 0 ? (
        <span className="resultado-activo">{resultado}</span>
      ) : (
        mostrarMensaje && (
          <span className="resultado-vacio">
            Ingresa números y elige una operación
          </span>
        )
      )}
    </div>
  )
}

// ===== PROPTYPES: VALIDACIÓN DE PROPS =====
ResultadoDisplay.propTypes = {
  resultado: PropTypes.number.isRequired,  // El resultado siempre debe ser un número
  mostrarMensaje: PropTypes.bool            // Prop opcional para mostrar mensaje cuando no hay resultado
};

// ===== DEFAULT PROPS =====
// Si no se pasa mostrarMensaje, por defecto será true
ResultadoDisplay.defaultProps = {
  mostrarMensaje: true
};

export default ResultadoDisplay

