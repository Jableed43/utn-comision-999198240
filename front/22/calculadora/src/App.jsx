import { useState } from 'react'
import './App.css'
import InputNumber from './components/InputNumber'
import { calculator } from "./utils/mathOperations"
import OperationButton from './components/OperationButton'
// 1. Armamos estructura básica: definir componente, armar estructura dentro del retorno
// 2. Agregamos la estructura HTML dentro del return
// 3. Agregamos los estados: uno para el primer número, otro para el segundo y un último para
// el resultado, estos tres inicializados en 0
// 4. Agregamos las funciones que realizarán las operaciones
// 5. Estado en num1 y num2 para guardar sus valores usando setNum1 y setNum2, usamos
// onChange para guardar los valores
// 6. Realizamos la operación según el botón que tocamos, utilizando onClick con la respectiva
// operación
// 7. Mostramos resultado en una variable dentro del retorno

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [resultado, setResultado] = useState(0)

  // const operaciones = [ "dividir", "sumar", "restar", "multiplicar" ]

  //Funcion para que?
  const handleOperacion = (operacion) => {
    switch (operacion) {
      case "sumar":
        setResultado(calculator.sum(num1, num2))
        break;
      
      case "restar":
        setResultado(calculator.subtract(num1, num2))
        break;
      
      case "multiplicar":
        setResultado(calculator.multiply(num1, num2))
        break;

      case "dividir":
        setResultado(calculator.divide(num1, num2))
        break;
    
      default:
        setResultado(0)
        break;
    }
    //seteamos los valores a 0 al terminar de operar
    setNum1(0)
    setNum2(0)
  }

  return (
    <div className='calculator-wrapper' >

      <div className='calculator-input-container' >
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

      </div>

      <div className='button-container' >
        <OperationButton operation="sumar" onClick={handleOperacion} />

        <OperationButton operation="restar" onClick={handleOperacion} />

        <OperationButton operation="multiplicar" onClick={handleOperacion} />

        <OperationButton operation="dividir" onClick={handleOperacion} />
      </div>

      <div>
        <h2>Resultado</h2>
        <span>{resultado}</span>
      </div>

    </div>
  )
}

export default App
