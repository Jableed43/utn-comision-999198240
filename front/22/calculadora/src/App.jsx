import { useState, useCallback } from 'react'
import './App.css'
import InputNumber from './components/InputNumber'
import { calculator } from "./utils/mathOperations"
import OperationButton from './components/OperationButton'
import ResultadoDisplay from './components/ResultadoDisplay'

// ===== COMPONENTE PRINCIPAL =====
// Este es el componente raíz de nuestra aplicación
// Demuestra cómo se organizan y componen múltiples componentes en React
function App() {
  // ===== ESTADO Y VIRTUAL DOM =====
  // useState permite manejar el estado del componente
  // Cuando estos estados cambian, React actualiza SOLO los componentes
  // que dependen de estos valores gracias al Virtual DOM
  // El Virtual DOM compara el estado anterior con el nuevo y decide
  // qué partes del DOM real deben actualizarse
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [resultado, setResultado] = useState(0)

  // ===== USECALLBACK Y OPTIMIZACIÓN DEL VIRTUAL DOM =====
  // useCallback memoriza funciones para evitar que se recreen en cada render
  // Esto es importante porque si pasamos funciones nuevas como props,
  // React pensará que las props cambiaron y re-renderizará componentes innecesariamente
  // 
  // Dependencias: [] significa que la función nunca cambia
  // El Virtual DOM solo re-renderiza InputNumber si las props realmente cambiaron
  const handleNum1Change = useCallback((evento) => {
    setNum1(Number(evento.target.value))
  }, [])

  const handleNum2Change = useCallback((evento) => {
    setNum2(Number(evento.target.value))
  }, [])

  // ===== PROPS Y FLUJO DE DATOS =====
  // Esta función recibe la operación como PROP desde OperationButton
  // El flujo es: Hijo (OperationButton) -> Padre (App) mediante callback
  // 
  // Dependencias: [num1, num2] significa que la función se recrea cuando
  // num1 o num2 cambian, pero se mantiene estable entre renders si no cambian
  const handleOperacion = useCallback((operacion) => {
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
    // Reseteamos los valores después de realizar la operación
    setNum1(0)
    setNum2(0)
  }, [num1, num2])

  return (
    <div className='calculator-wrapper'>

      {/* ===== COMPONENTES Y PROPS ===== */}
      {/* InputNumber es un COMPONENTE REUTILIZABLE */}
      {/* Le pasamos PROPS: label, value, onChange, labelId */}
      {/* Las props permiten personalizar el comportamiento del componente */}
      {/* 
        PROPS DEMOSTRADAS:
        - label: string que personaliza el texto del label
        - value: número que controla el valor del input (controlled component)
        - onChange: función callback que se ejecuta cuando cambia el valor
        - labelId: string único para accesibilidad (relaciona label con input)
      */}
      <div className='calculator-input-container'>
        <InputNumber
          label="Numero 1"
          value={num1}
          onChange={handleNum1Change}
          labelId="input-numero-1"
        />

        <InputNumber
          label="Numero 2"
          value={num2}
          onChange={handleNum2Change}
          labelId="input-numero-2"
        />
      </div>

      {/* ===== COMPOSICIÓN DE COMPONENTES ===== */}
      {/* Reutilizamos OperationButton 4 veces con diferentes PROPS */}
      {/* Esto demuestra el poder de los componentes reutilizables */}
      {/* Cada instancia tiene su propia prop "operation" pero comparte "onClick" */}
      <div className='button-container'>
        <OperationButton operation="sumar" onClick={handleOperacion} />
        <OperationButton operation="restar" onClick={handleOperacion} />
        <OperationButton operation="multiplicar" onClick={handleOperacion} />
        <OperationButton operation="dividir" onClick={handleOperacion} />
      </div>

      {/* ===== RENDERIZADO CONDICIONAL Y VIRTUAL DOM ===== */}
      {/* ResultadoDisplay demuestra renderizado condicional */}
      {/* React solo actualiza esta sección si "resultado" cambia */}
      {/* El Virtual DOM compara y decide eficientemente qué actualizar */}
      <ResultadoDisplay resultado={resultado} />
    </div>
  )
}

export default App
