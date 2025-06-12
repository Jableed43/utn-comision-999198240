// CalculatorDisplay.jsx
import React from 'react';

function CalculatorDisplay({ result }) {
  return (
    <div className='result-container' >
      <label>Resultado</label>
      <br />
      <span>{result}</span>
    </div>
  );
}

export default CalculatorDisplay;