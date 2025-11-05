# 📚 REACT: COMPONENTES, PROPS Y VIRTUAL DOM - MATERIAL TEÓRICO

## 🎯 Introducción

Esta calculadora en React demuestra los conceptos fundamentales de React: **Componentes**, **Props (Propiedades)**, **Estados** y **Virtual DOM**. Cada concepto está implementado en el código y puede ser observado en tiempo real.

---

## 1️⃣ COMPONENTES DE REACT

### ¿Qué es un Componente?

Un **componente** en React es una pieza de código reutilizable que encapsula lógica y presentación. Los componentes son como "bloques de construcción" que puedes combinar para crear interfaces complejas.

### ¿Qué nos ahorramos con React al usar componentes?

Al usar componentes en React, nos ahorramos:

- ✅ **Tiempo de trabajo**: No necesitas escribir el mismo código varias veces
- ✅ **Esfuerzo**: Reutilizas código ya probado y funcional
- ✅ **Líneas de código**: Un componente puede reemplazar muchas líneas repetidas
- ✅ **Tener que volver a escribir lo mismo**: El código se escribe una vez y se usa múltiples veces
- ✅ **Errores**: Si en un lugar funciona, funciona en el resto - al tener un componente probado, todos los lugares donde se usa funcionan correctamente
- ✅ **Conflictos con estilos**: Al tener componentes consistentes, los estilos se mantienen uniformes

### Ejemplo Práctico en la Calculadora

En lugar de escribir esto 4 veces:
```jsx
// ❌ SIN COMPONENTES: Repetir código 4 veces
<button onClick={() => handleOperacion("sumar")}>sumar</button>
<button onClick={() => handleOperacion("restar")}>restar</button>
<button onClick={() => handleOperacion("multiplicar")}>multiplicar</button>
<button onClick={() => handleOperacion("dividir")}>dividir</button>
```

Escribimos un componente una vez y lo reutilizamos:
```jsx
// ✅ CON COMPONENTES: Un componente, múltiples usos
<OperationButton operation="sumar" onClick={handleOperacion} />
<OperationButton operation="restar" onClick={handleOperacion} />
<OperationButton operation="multiplicar" onClick={handleOperacion} />
<OperationButton operation="dividir" onClick={handleOperacion} />
```

---

## 📍 DÓNDE SE DEMUESTRA EN EL CÓDIGO

### Componente `InputNumber`
**Ubicación**: `src/components/InputNumber.jsx` líneas 6-18

**Qué demuestra**:
- ✅ Componente funcional que retorna JSX
- ✅ Reutilizable: se usa 2 veces en `App.jsx` (líneas 85-97)
- ✅ Encapsula la lógica de un input numérico con label
- ✅ Ahorra código: En lugar de escribir el input completo 2 veces, se escribe una vez

### Componente `OperationButton`
**Ubicación**: `src/components/OperationButton.jsx` líneas 6-12

**Qué demuestra**:
- ✅ Componente funcional simple
- ✅ Reutilizable: se usa 4 veces en `App.jsx` (líneas 105-108)
- ✅ Ahorra código: 4 botones con la misma estructura, un solo componente
- ✅ Consistencia: Todos los botones tienen el mismo estilo y comportamiento

### Componente `ResultadoDisplay`
**Ubicación**: `src/components/ResultadoDisplay.jsx` líneas 6-21

**Qué demuestra**:
- ✅ Componente de presentación (solo muestra datos)
- ✅ Separación de responsabilidades
- ✅ Reutilizable: Puede usarse en otras partes si es necesario

---

## 2️⃣ ESTADOS EN REACT

### Concepto de Estados: Dual (Binario) vs Relativos

Antes de entender `useState`, es importante entender qué son los estados:

#### Estados Duales (Binarios):
Estados que tienen dos valores opuestos:
- ✅ **Estable - Alterado**
- ✅ **Prendido - Apagado**
- ✅ **Trabajo - Reposo**
- ✅ **Frío - Caliente**
- ✅ **Luz - Oscuridad**
- ✅ **Despierto - Dormido**
- ✅ **Activo - Inactivo**
- ✅ **Líquido - Sólido**
- ✅ **Victoria - Derrota**
- ✅ **Felicidad - Sufrimiento**

#### Estados Relativos:
Estados que tienen valores graduales o medibles:
- ✅ **No está vacío ni lleno** (porcentaje)
- ✅ **0km → 100km** (longitud)
- ✅ **1 litro** (volumen)
- ✅ **36°C** (temperatura)

### Estados en React: La Analogía de la Canilla

La API de React es como una **canilla** que puedes usar para llenar un **contenedor** (array, objetos, variables).

#### ¿Qué hago para llenar de agua el contenedor?

1. **El contenedor tiene un estado inicial por defecto (vacío)**
   - Cuando creas un estado, comienza con un valor inicial (vacío, 0, null, etc.)

2. **Colocar el contenido en el contenedor (almacenarlo para usarlo)**
   - Usas la función `set` para "llenar" el contenedor con datos

### useState → Hook

`useState` es un **hook** que nos permite:

- ✅ **Crear el recipiente**: Define una variable donde guardaremos los datos
- ✅ **Almacenar contenido en el recipiente**: Proporciona una función para "llenar" el recipiente

#### Estructura de useState:

```jsx
const [recipiente, setRecipiente] = useState(valorInicial);
```

- **Primer parámetro** (`recipiente`): El recipiente, una variable donde guardaremos los datos
- **Segundo parámetro** (`setRecipiente`): Es una función que permite llenar tu recipiente
- **useState(valorInicial)**: El estado inicial puede ser `null`, `[]`, `false`, `""`, `0` - ya que un recipiente nuevo siempre está vacío

#### Ejemplo:

```jsx
const [characters, setCharacters] = useState([]);
// characters = recipiente vacío inicialmente (array vacío)
// setCharacters = función para llenar el recipiente
```

---

## 📍 DÓNDE SE DEMUESTRA EN EL CÓDIGO

### Estados en la Calculadora
**Ubicación**: `src/App.jsx` líneas 18-20

```jsx
const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)
const [resultado, setResultado] = useState(0)
```

**Qué demuestra**:
- ✅ **Estados relativos**: `num1`, `num2` y `resultado` son números que pueden variar
- ✅ **Estado inicial**: Todos comienzan en `0` (recipiente vacío)
- ✅ **Función set**: `setNum1`, `setNum2`, `setResultado` son las "canillas" para llenar los recipientes

**Cómo se usa**:
```jsx
// Llenar el recipiente num1 con el valor 5
setNum1(5)

// Llenar el recipiente resultado con el resultado de una operación
setResultado(calculator.sum(num1, num2))
```

### Estados y Virtual DOM
**Ubicación**: `src/App.jsx` líneas 18-20

**Conceptos demostrados**:
- ✅ **Cuando cambia `num1`**: Solo se re-renderiza `InputNumber` con `value={num1}`
- ✅ **Cuando cambia `num2`**: Solo se re-renderiza `InputNumber` con `value={num2}`
- ✅ **Cuando cambia `resultado`**: Solo se re-renderiza `ResultadoDisplay`
- ✅ **React decide qué actualizar**: El Virtual DOM compara y optimiza

---

## 3️⃣ PROPS (PROPIEDADES) EN REACT

### ¿Qué es una prop?

Una **prop** es:
- ✅ **Valores**: Datos que deben viajar de un componente a otro
- ✅ **Contenido**: Información que se pasa entre componentes
- ✅ **Datos**: Cualquier tipo de dato que necesite ser compartido

### ¿Qué estructuras de datos pueden viajar por prop?

Las props pueden ser de cualquier tipo de dato:
- ✅ **Objeto**: `{nombre: "Juan", edad: 25}`
- ✅ **Array**: `[1, 2, 3, 4]`
- ✅ **Variables**: Strings, números, booleanos
- ✅ **Funciones**: Callbacks que permiten comunicación hijo → padre

### ¿Qué rol cumple en un componente?

La prop en un componente:
- ✅ **Funciona como un parámetro**: Recibe datos desde el componente padre
- ✅ **Opera sobre esa información**: El componente usa los datos para generar su resultado
- ✅ **Usa la información para dar un resultado**: Procesa los datos y los muestra o utiliza

### Ejemplo Práctico:

```jsx
// Componente padre pasa datos (props)
<InputNumber 
  label="Numero 1"        // Prop tipo string
  value={num1}            // Prop tipo number (variable)
  onChange={handleChange} // Prop tipo función
/>

// Componente hijo recibe y usa los datos
function InputNumber({ label, value, onChange }) {
  // label, value, onChange son parámetros (props)
  // El componente opera sobre esa información
  return (
    <div>
      <label>{label}</label>  {/* Usa label */}
      <input value={value} onChange={onChange} />  {/* Usa value y onChange */}
    </div>
  )
}
```

---

## 📍 DÓNDE SE DEMUESTRA EN EL CÓDIGO

### Props Pasadas a `InputNumber`
**Ubicación**: `src/App.jsx` líneas 85-97

```jsx
<InputNumber
  label="Numero 1"           // Prop string (variable)
  value={num1}               // Prop number (variable)
  onChange={handleNum1Change} // Prop función (callback)
  labelId="input-numero-1"   // Prop string
/>
```

**Conceptos demostrados**:
- ✅ **Props de diferentes tipos**: string, number, function
- ✅ **Props como variables**: `value={num1}` pasa el valor de la variable
- ✅ **Props como funciones**: `onChange={handleNum1Change}` pasa una función completa

### Props Pasadas a `OperationButton`
**Ubicación**: `src/App.jsx` líneas 105-108

```jsx
<OperationButton 
  operation="sumar"        // Prop string diferente en cada instancia
  onClick={handleOperacion} // Prop función compartida (misma función)
/>
```

**Conceptos demostrados**:
- ✅ **Props como strings**: `operation="sumar"` es un string literal
- ✅ **Props como funciones**: `onClick={handleOperacion}` es una función pasada como prop
- ✅ **Misma función, diferentes datos**: Todos usan `handleOperacion` pero con diferentes `operation`

### Validación de Props con PropTypes
**Ubicación**: 
- `src/components/InputNumber.jsx` líneas 23-28
- `src/components/OperationButton.jsx` líneas 17-20
- `src/components/ResultadoDisplay.jsx` líneas 24-27

```jsx
InputNumber.propTypes = {
  label: PropTypes.string.isRequired,      // Requerida: string
  value: PropTypes.number.isRequired,      // Requerida: number
  onChange: PropTypes.func.isRequired,      // Requerida: función
  labelId: PropTypes.string                // Opcional: string
};
```

**Qué demuestra**:
- ✅ **Validación de tipos**: React verifica que las props sean del tipo correcto
- ✅ **Props requeridas vs opcionales**: `isRequired` marca obligatorias
- ✅ **Detección de errores**: En desarrollo, React avisa si pasas props incorrectas

### Flujo de Datos: Props y Callbacks
**Ubicación**: `src/App.jsx` líneas 29-35, 85-97

```jsx
// 1. El padre (App) define una función
const handleNum1Change = useCallback((evento) => {
  setNum1(Number(evento.target.value))
}, [])

// 2. El padre pasa la función como prop al hijo
<InputNumber onChange={handleNum1Change} />

// 3. El hijo (InputNumber) recibe la función como parámetro (prop)
function InputNumber({ onChange }) {
  // onChange es la prop recibida
  return <input onChange={onChange} />
}
```

**Qué demuestra**:
- ✅ **Props como parámetros**: El componente recibe `onChange` como parámetro
- ✅ **Opera sobre la información**: El componente usa la función para manejar cambios
- ✅ **Comunicación hijo → padre**: El hijo ejecuta la función del padre

---

## 4️⃣ HTML/JS vs REACT

### HTML - Estructura Tradicional

En HTML tradicional:
- ✅ **Estructura**: Etiquetas HTML (`<div>`, `<input>`, etc.)
- ✅ **Información**: Texto, números directamente en el HTML

```html
<!-- HTML tradicional -->
<div>
  <label>Numero 1</label>
  <input type="number" value="0" />
</div>
```

### React - Estructura Moderna

En React:
- ✅ **Lo que trae por defecto (scaffolding)**: `index`, `src`, `public`, `package.json`
- ✅ **Dentro del componente**:
  - **Declaración de componente funcional**: `function Componente() {}`
  - **Props (parámetros)**: `function Componente({ prop1, prop2 }) {}`
  - **Código puro de JS/TS**: Lógica de JavaScript antes del return
  - **Lo que retorna el código HTML+JS = JSX (renderizado)**: `return <div>...</div>`

### Estructura de un Componente React:

```jsx
// 1. Declaración de componente funcional
function InputNumber({ label, value, onChange }) {
  // 2. Props (parámetros) - recibidos arriba
  
  // 3. Código puro de JS/TS (lógica)
  const handleChange = (e) => {
    // lógica aquí
  }
  
  // 4. Lo que retorna = JSX (HTML + JS)
  return (
    <div>
      <label>{label}</label>
      <input value={value} onChange={onChange} />
    </div>
  )
}
```

---

## 📍 DÓNDE SE DEMUESTRA EN EL CÓDIGO

### Estructura de Componente en `InputNumber.jsx`
**Ubicación**: `src/components/InputNumber.jsx` líneas 6-18

```jsx
// 1. Declaración de componente funcional
function InputNumber({ label, value, onChange, labelId }) {
  // 2. Props recibidas como parámetros
  
  // 3. Código puro de JS/TS (aquí no hay, pero podría haber)
  
  // 4. Retorna JSX (HTML + JS)
  return (
    <div>
      <label htmlFor={labelId}>{label}</label>
      <input value={value} id={labelId} type="number" onChange={onChange} />
    </div>
  )
}
```

### Estructura de Componente en `App.jsx`
**Ubicación**: `src/App.jsx` líneas 11-120

```jsx
// 1. Declaración de componente funcional
function App() {
  // 2. Props: este componente no recibe props (es el componente raíz)
  
  // 3. Código puro de JS/TS
  const [num1, setNum1] = useState(0)  // Estados
  const handleNum1Change = useCallback(...)  // Funciones
  
  // 4. Retorna JSX (HTML + JS)
  return (
    <div className='calculator-wrapper'>
      {/* Componentes y estructura */}
    </div>
  )
}
```

---

## 5️⃣ EJEMPLO: CALCULADORA

### ¿Qué necesito para hacer cálculos matemáticos?

Para crear una calculadora necesitas:

- ✅ **Entrada de datos (números)**: Inputs para que el usuario ingrese números
- ✅ **Botón (disparador)**: Botones para ejecutar las operaciones
- ✅ **Operadores**: Funciones matemáticas (suma, resta, multiplicación, división)
- ✅ **Funciones**: Lógica que realiza las operaciones
- ✅ **Salida de datos**: Mostrar el resultado por pantalla

### Pasos para armar calculadora en React:

#### 1. Armamos estructura básica
- Definir componente
- Armar estructura dentro del retorno

**Ubicación**: `src/App.jsx` líneas 11, 70-116

#### 2. Agregamos la estructura HTML dentro del return
- JSX con los elementos necesarios

**Ubicación**: `src/App.jsx` líneas 70-116

#### 3. Agregamos los estados
- Uno para el primer número
- Otro para el segundo número
- Un último para el resultado
- Estos tres inicializados en 0

**Ubicación**: `src/App.jsx` líneas 18-20
```jsx
const [num1, setNum1] = useState(0)
const [num2, setNum2] = useState(0)
const [resultado, setResultado] = useState(0)
```

#### 4. Agregamos las funciones que realizarán las operaciones
- Función que recibe la operación y ejecuta la lógica matemática

**Ubicación**: `src/App.jsx` líneas 43-68
```jsx
const handleOperacion = useCallback((operacion) => {
  switch (operacion) {
    case "sumar":
      setResultado(calculator.sum(num1, num2))
      break;
    // ... más casos
  }
}, [num1, num2])
```

#### 5. Estado en num1 y num2 para guardar sus valores
- Usamos `setNum1` y `setNum2`
- Usamos `onChange` para guardar los valores

**Ubicación**: `src/App.jsx` líneas 29-35, 85-97
```jsx
const handleNum1Change = useCallback((evento) => {
  setNum1(Number(evento.target.value))
}, [])

<InputNumber
  value={num1}
  onChange={handleNum1Change}
/>
```

#### 6. Realizamos la operación según el botón que tocamos
- Utilizando `onClick` con la respectiva operación

**Ubicación**: `src/App.jsx` líneas 105-108
```jsx
<OperationButton operation="sumar" onClick={handleOperacion} />
<OperationButton operation="restar" onClick={handleOperacion} />
```

#### 7. Mostramos resultado en una variable dentro del retorno
- Mostrar el estado `resultado` en pantalla

**Ubicación**: `src/App.jsx` línea 115
```jsx
<ResultadoDisplay resultado={resultado} />
```

---

## 6️⃣ COMPONENTIZACIÓN

### ¿Por qué componentizar?

Componentizar tiene múltiples beneficios:

- ✅ **Reutilización de componentes**:
  - Permite volver a usar componentes en diferentes partes de la aplicación
  - Reduce la duplicación de código

- ✅ **Reducción de código repetitivo**:
  - Evita la necesidad de escribir el mismo código en múltiples lugares
  - Ahorra tiempo y minimiza errores

- ✅ **Facilita la detección y corrección de errores**:
  - Al tener componentes bien definidos, es más sencillo identificar y corregir errores específicos

- ✅ **Mejora la mantenibilidad**:
  - Hace que la aplicación sea más fácil de mantener
  - Cada componente tiene una responsabilidad clara
  - Facilita tanto la ampliación de funcionalidades como la reparación de fallos

- ✅ **Capas con diferentes responsabilidades**:
  - Permite crear componentes con finalidades específicas y bien definidas
  - Ayuda a mantener el código organizado y comprensible

- ✅ **Escalabilidad**:
  - Facilita la expansión del proyecto
  - Permite agregar nuevas funcionalidades sin complicaciones

- ✅ **Modularidad**:
  - Cada componente actúa como una unidad funcional independiente
  - Mejora la organización del código y la colaboración en equipos grandes

- ✅ **Facilita las pruebas unitarias**:
  - Componentes aislados son más fáciles de testear
  - Asegura la robustez de cada parte de la aplicación

- ✅ **Consistencia en el diseño**:
  - Reutilizar componentes garantiza una interfaz de usuario coherente y estandarizada
  - A lo largo de toda la aplicación

- ✅ **Optimización del rendimiento**:
  - Componentizar ayuda a React a optimizar la renderización
  - Actualiza solo los componentes que realmente han cambiado
  - Mejora la eficiencia del Virtual DOM

---

## 📍 DÓNDE SE DEMUESTRA EN EL CÓDIGO

### Reutilización de Componentes
**Ubicación**: `src/App.jsx` líneas 85-97, 105-108

- `InputNumber` se usa 2 veces (líneas 85-90, 92-97)
- `OperationButton` se usa 4 veces (líneas 105-108)
- **Ahorro**: En lugar de escribir 6 componentes diferentes, escribimos 2 y los reutilizamos

### Responsabilidades Separadas
- `InputNumber.jsx`: Solo maneja inputs numéricos
- `OperationButton.jsx`: Solo maneja botones de operación
- `ResultadoDisplay.jsx`: Solo muestra resultados
- `App.jsx`: Orquesta todos los componentes

### Optimización del Virtual DOM
**Ubicación**: Todo el código

- Cuando cambia `num1`, solo se re-renderiza el `InputNumber` que usa `num1`
- Cuando cambia `resultado`, solo se re-renderiza `ResultadoDisplay`
- **Beneficio**: React optimiza automáticamente gracias a la componentización

---

### ¿Cuándo componentizar?

Debes componentizar cuando:

- ✅ **Exceso de lógica en un solo componente**:
  - Si un componente maneja demasiada lógica, es una señal de que debe ser dividido en componentes más pequeños

- ✅ **Varias responsabilidades en un componente**:
  - Cuando un componente tiene múltiples funciones o responsabilidades, es momento de separar esas responsabilidades en componentes distintos

**Ejemplo en la Calculadora**:
- `App.jsx` podría tener toda la lógica junta, pero separamos:
  - Inputs → `InputNumber`
  - Botones → `OperationButton`
  - Resultado → `ResultadoDisplay`

---

### Consecuencias de no componentizar:

Si no componentizas, puedes enfrentar:

- ❌ **Lógica desordenada**:
  - El código puede volverse confuso y desorganizado
  - Dificulta su comprensión y mantenimiento

- ❌ **Dificultad para encontrar errores**:
  - Sin una estructura clara, es más difícil identificar y corregir errores en el código

- ❌ **Complicaciones al buscar lógica específica**:
  - Encontrar y modificar partes específicas del código se vuelve más difícil y consume más tiempo

- ❌ **Mantenimiento más costoso**:
  - Sin componentización, el mantenimiento de la aplicación requiere más tiempo y recursos
  - Puede incrementar los costos

- ❌ **Duplicación de código**:
  - La falta de componentes reutilizables lleva a escribir el mismo código en varios lugares
  - Aumenta el riesgo de errores

**Ejemplo de código sin componentizar**:
```jsx
// ❌ MALO: Todo en un componente
function App() {
  return (
    <div>
      <div>
        <label>Numero 1</label>
        <input type="number" value={num1} onChange={...} />
      </div>
      <div>
        <label>Numero 2</label>
        <input type="number" value={num2} onChange={...} />
      </div>
      <button onClick={...}>sumar</button>
      <button onClick={...}>restar</button>
      {/* ... más código repetido */}
    </div>
  )
}
```

**Ejemplo de código con componentización**:
```jsx
// ✅ BUENO: Componentes separados y reutilizables
function App() {
  return (
    <div>
      <InputNumber label="Numero 1" value={num1} onChange={...} />
      <InputNumber label="Numero 2" value={num2} onChange={...} />
      <OperationButton operation="sumar" onClick={...} />
      <OperationButton operation="restar" onClick={...} />
    </div>
  )
}
```

---

### ¿Cuándo NO componentizar?

No debes componentizar cuando:

- ⚠️ **Componentes muy pequeños**:
  - No es necesario componentizar si un componente tiene pocas líneas de código o una lógica muy simple
  - La exagerada fragmentación puede complicar la estructura innecesariamente

- ⚠️ **Código demasiado acoplado**:
  - Si los componentes dependen fuertemente entre sí, es preferible no separarlos
  - A veces, es más práctico mantener una lógica relacionada dentro del mismo componente

**Ejemplo de cuándo NO componentizar**:
```jsx
// ❌ NO tiene sentido componentizar esto:
function Titulo({ texto }) {
  return <h1>{texto}</h1>
}

// ✅ Es mejor dejarlo inline si solo se usa una vez:
<h1>{texto}</h1>
```

---

## 7️⃣ USO DE KEYS EN UNA ITERACIÓN DE COMPONENTES

### ¿Qué son las Keys?

Las **keys** son atributos especiales que React necesita cuando renderizas listas de componentes. Ayudan a React a identificar qué elementos han cambiado, sido agregados o eliminados.

### ¿Por qué son importantes?

- ✅ **Identificación única**: Permiten a React identificar cada elemento de la lista
- ✅ **Optimización del Virtual DOM**: React puede actualizar solo los elementos que cambiaron
- ✅ **Evita errores**: Sin keys, React puede confundir elementos y renderizar incorrectamente

### Sintaxis:

```jsx
{items.map((item) => (
  <Componente key={item.id} prop1={item.prop1} />
))}
```

**Reglas importantes**:
- ✅ La key debe ser **única** para cada elemento
- ✅ La key debe ser **estable** (no cambiar entre renders)
- ✅ **Nunca uses el índice como key** si los elementos pueden reordenarse

### Ejemplo Correcto:

```jsx
// ✅ CORRECTO: Usar un ID único
{characters.map((character) => (
  <div key={character.id}>
    <h3>{character.name}</h3>
  </div>
))}
```

### Ejemplo Incorrecto:

```jsx
// ❌ INCORRECTO: Usar el índice como key
{characters.map((character, index) => (
  <div key={index}>  {/* ❌ MALO si los elementos pueden reordenarse */}
    <h3>{character.name}</h3>
  </div>
))}
```

### Ejemplo en Otros Proyectos:

**Ubicación de referencia**: `24/api-rick-morty/src/components/Characters.jsx` línea 20

```jsx
{characters.map((character) => (
  <div key={character.id} className='col mb-5'>
    {/* ... contenido del componente */}
  </div>
))}
```

**Qué demuestra**:
- ✅ Usa `character.id` como key (único y estable)
- ✅ Permite a React identificar cada elemento correctamente
- ✅ Optimiza el renderizado cuando la lista cambia

---

## 📊 RESUMEN: DÓNDE SE DEMUESTRA CADA CONCEPTO

| Concepto | Ubicación en el Código | Líneas | Qué Demuestra |
|----------|----------------------|--------|----------------|
| **Componentes Funcionales** | `InputNumber.jsx` | 6-18 | Función que retorna JSX |
| **Ahorro con Componentes** | `App.jsx` | 85-97, 105-108 | Reutilización (2 inputs, 4 botones) |
| **Estados con useState** | `App.jsx` | 18-20 | Recipientes para datos (num1, num2, resultado) |
| **Props como Parámetros** | `InputNumber.jsx` | 6 | `{ label, value, onChange }` |
| **Props de Diferentes Tipos** | `App.jsx` | 85-97 | string, number, function |
| **Props como Funciones** | `App.jsx` | 88, 95, 105-108 | Callbacks (onChange, onClick) |
| **PropTypes** | `InputNumber.jsx` | 23-28 | Validación de tipos |
| **defaultProps** | `InputNumber.jsx` | 30-35 | Valores por defecto |
| **Estructura React** | `App.jsx` | 11-120 | Componente funcional + JS/TS + JSX |
| **Pasos Calculadora** | `App.jsx` | Todo | Implementación completa de los 7 pasos |
| **Componentización** | Todo el proyecto | - | Separación de responsabilidades |
| **Virtual DOM** | Todo el código | - | Optimización automática |

---

## 🎓 CONCEPTOS CLAVE PARA RECORDAR

### 1. Componentes
- Son funciones que retornan JSX
- Ahorran tiempo, esfuerzo y código
- Pueden reutilizarse múltiples veces
- Encapsulan lógica y presentación

### 2. Estados
- Estados duales (binarios) vs relativos
- useState es como una canilla que llena un recipiente
- Primer parámetro: recipiente (variable)
- Segundo parámetro: función para llenar (set)
- Estado inicial: puede ser `null`, `[]`, `false`, `""`, `0`

### 3. Props
- Son valores que viajan entre componentes
- Funcionan como parámetros
- Pueden ser objetos, arrays, variables, funciones
- Se usan para operar sobre información y dar resultados

### 4. Componentización
- Mejora reutilización, mantenibilidad, escalabilidad
- Separa responsabilidades
- Optimiza el Virtual DOM
- No componentizar cuando es muy pequeño o muy acoplado

### 5. Keys en Iteraciones
- Deben ser únicas y estables
- Nunca usar índice si los elementos pueden reordenarse
- Ayudan a React a optimizar el renderizado

---

## 🔍 EJERCICIOS PRÁCTICOS

### Ejercicio 1: Agregar un nuevo estado
- Agrega un estado `historial` que guarde las últimas 5 operaciones
- Muestra el historial en pantalla

### Ejercicio 2: Crear componente con lista
- Crea un componente `HistorialOperaciones` que reciba un array de operaciones
- Usa `.map()` para renderizar cada operación
- **Importante**: Usa `key` única para cada elemento

### Ejercicio 3: Componentizar más
- Separa la lógica de los botones en un componente `ButtonContainer`
- Demuestra cómo componentizar reduce código

---

## 📚 RECURSOS ADICIONALES

- [React Docs - Components](https://react.dev/learn/your-first-component)
- [React Docs - Props](https://react.dev/learn/passing-props-to-a-component)
- [React Docs - State](https://react.dev/learn/state-a-components-memory)
- [React Docs - Lists and Keys](https://react.dev/learn/rendering-lists)

---

*📅 Material creado para clase de React - Componentes, Props, Estados y Virtual DOM - UTN*
