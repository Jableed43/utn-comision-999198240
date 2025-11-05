import PropTypes from 'prop-types';

// ===== COMPONENTE REUTILIZABLE =====
// Este componente demuestra la reutilización de componentes
// Se usa 4 veces en App.jsx con diferentes valores de la prop "operation"
function OperationButton({operation, onClick}) {
  return (
    <button onClick={() => onClick(operation)}>
      {operation}
    </button>
  )
}

// ===== PROPTYPES: VALIDACIÓN DE PROPS =====
// Validamos que operation sea string y onClick sea función
// Ambas son requeridas (isRequired)
OperationButton.propTypes = {
  operation: PropTypes.string.isRequired,  // Nombre de la operación matemática
  onClick: PropTypes.func.isRequired        // Función callback que se ejecuta al hacer click
};

export default OperationButton