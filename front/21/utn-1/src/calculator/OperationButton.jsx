// OperationButton.jsx
import React from 'react';

function OperationButton({ operation, onClick }) {
  return (
    <button onClick={() => onClick(operation)}>
      {operation.charAt(0).toUpperCase() + operation.slice(1)}
    </button>
  );
}

export default OperationButton;