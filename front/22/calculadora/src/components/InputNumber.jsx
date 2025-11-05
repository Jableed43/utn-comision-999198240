import PropTypes from 'prop-types';

// ===== COMPONENTE REUTILIZABLE =====
// Este componente demuestra cómo crear componentes funcionales en React
// que pueden ser reutilizados múltiples veces con diferentes props
function InputNumber({ label, value, onChange, labelId }) {
  return (
    <div>
      <label htmlFor={labelId}>{label}</label>
      <input 
        value={value} 
        id={labelId} 
        type="number"
        onChange={onChange} 
      />
    </div>
  )
}

// ===== PROPTYPES: VALIDACIÓN DE PROPS =====
// PropTypes permite validar que las props recibidas sean del tipo correcto
// Esto ayuda a detectar errores durante el desarrollo
InputNumber.propTypes = {
  label: PropTypes.string.isRequired,      // Prop requerida de tipo string
  value: PropTypes.number.isRequired,      // Prop requerida de tipo number
  onChange: PropTypes.func.isRequired,     // Prop requerida de tipo función (callback)
  labelId: PropTypes.string                // Prop opcional de tipo string
};

// ===== DEFAULT PROPS =====
// defaultProps permite definir valores por defecto para props opcionales
// Si no se pasa labelId, se usará este valor por defecto
InputNumber.defaultProps = {
  labelId: 'input-number-generic'
};

export default InputNumber