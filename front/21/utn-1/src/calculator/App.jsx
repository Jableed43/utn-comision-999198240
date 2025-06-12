// App.jsx
import { useState } from "react";
import { sum, subtract, multiply, divide } from "../utils/mathOperations.js"; // Ajusta la ruta según tu estructura
import InputNumber from "./InputNumber.jsx"; // Asumiendo que ya creaste estos
import OperationButton from "./OperationButton.jsx";
import CalculatorDisplay from "./CalculatorDisplay.jsx";
import '../App.css'

function App() {
  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [resultado, setResultado] = useState(0);

  const handleOperation = (operationType) => {
    let newResult = 0;
    switch (operationType) {
      case "suma":
        newResult = sum(num1, num2);
        break;
      case "resta":
        newResult = subtract(num1, num2);
        break;
      case "multiplicar":
        newResult = multiply(num1, num2);
        break;
      case "dividir":
        // Aquí puedes añadir validaciones específicas de la UI antes de llamar a la función helper
        if (num2 === 0) {
          console.log("No se puede dividir por cero.");
          newResult = 0; // O puedes manejarlo de forma diferente
        } else if (num1 < num2) {
          console.log("No puede dividir un número menor por uno mayor.");
          newResult = 0; // O puedes permitir la división y que el helper la maneje
        } else {
          newResult = divide(num1, num2);
        }
        break;
      default:
        newResult = 0;
        break;
    }
    setResultado(newResult);
  };

  return (
    <div className="calculator-wrapper">
      <InputNumber
        label="Numero 1"
        value={num1}
        onChange={(evento) => setNum1(Number(evento.target.value))}
      />
      <InputNumber
        label="Numero 2"
        value={num2}
        onChange={(evento) => setNum2(Number(evento.target.value))}
      />

      <div className="button-wrapper" >
      <OperationButton operation="suma" onClick={handleOperation} />
      <OperationButton operation="resta" onClick={handleOperation} />
      <OperationButton operation="multiplicar" onClick={handleOperation} />
      <OperationButton operation="dividir" onClick={handleOperation} />
      </div>

      <CalculatorDisplay result={resultado} />
    </div>
  );
}

export default App;