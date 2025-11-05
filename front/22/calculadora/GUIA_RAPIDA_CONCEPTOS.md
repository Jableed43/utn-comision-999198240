# 🗺️ GUÍA RÁPIDA: DÓNDE SE DEMUESTRA CADA CONCEPTO

## 📍 MAPA DE CONCEPTOS EN EL CÓDIGO

### 🧩 COMPONENTES

#### Componente Funcional Básico
- **Archivo**: `src/components/InputNumber.jsx`
- **Líneas**: 6-18
- **Qué ver**: Función que retorna JSX, estructura básica de un componente

#### Componente Reutilizable
- **Archivo**: `src/App.jsx`
- **Líneas**: 85-97 (InputNumber usado 2 veces)
- **Líneas**: 105-108 (OperationButton usado 4 veces)
- **Qué ver**: El mismo componente usado múltiples veces con diferentes props

#### Composición de Componentes
- **Archivo**: `src/App.jsx`
- **Líneas**: 70-116
- **Qué ver**: Componente `App` que contiene y compone otros componentes

#### Componente de Presentación
- **Archivo**: `src/components/ResultadoDisplay.jsx`
- **Líneas**: 6-21
- **Qué ver**: Componente que solo muestra datos, sin lógica compleja

---

### 🔗 PROPS (PROPIEDADES)

#### Props Básicas (string, number)
- **Archivo**: `src/App.jsx`
- **Líneas**: 86-89, 93-96
- **Qué ver**: `label="Numero 1"`, `value={num1}`, `labelId="input-numero-1"`

#### Props de Función (Callback)
- **Archivo**: `src/App.jsx`
- **Líneas**: 88, 95 (onChange)
- **Líneas**: 105-108 (onClick)
- **Qué ver**: Funciones pasadas como props para comunicación hijo → padre

#### Props Controladas (Controlled Components)
- **Archivo**: `src/App.jsx`
- **Líneas**: 87, 94
- **Qué ver**: `value={num1}` - el valor viene del estado del padre

#### PropTypes - Validación
- **Archivo**: `src/components/InputNumber.jsx`
- **Líneas**: 23-28
- **Archivo**: `src/components/OperationButton.jsx`
- **Líneas**: 17-20
- **Archivo**: `src/components/ResultadoDisplay.jsx`
- **Líneas**: 24-27
- **Qué ver**: Validación de tipos de props, props requeridas vs opcionales

#### defaultProps - Valores por Defecto
- **Archivo**: `src/components/InputNumber.jsx`
- **Líneas**: 30-35
- **Archivo**: `src/components/ResultadoDisplay.jsx`
- **Líneas**: 29-32
- **Qué ver**: Valores por defecto para props opcionales

#### Flujo de Datos con Props
- **Archivo**: `src/App.jsx`
- **Líneas**: 29-35 (definición de funciones)
- **Líneas**: 88, 95 (paso de funciones como props)
- **Archivo**: `src/components/InputNumber.jsx`
- **Líneas**: 14 (uso de prop onChange)
- **Qué ver**: Cómo los datos fluyen de padre a hijo y los eventos de hijo a padre

---

### ⚡ VIRTUAL DOM

#### Estado y Re-renderizado
- **Archivo**: `src/App.jsx`
- **Líneas**: 18-20
- **Qué ver**: `useState` - cuando cambia, React actualiza solo componentes afectados

#### useCallback - Optimización
- **Archivo**: `src/App.jsx`
- **Líneas**: 22-35 (handleNum1Change, handleNum2Change)
- **Líneas**: 43-68 (handleOperacion)
- **Qué ver**: Funciones memorizadas para evitar re-renderizados innecesarios
- **Concepto**: React compara si las props cambiaron, useCallback mantiene la misma referencia

#### Dependencias de useCallback
- **Archivo**: `src/App.jsx`
- **Líneas**: 31, 35 (dependencias vacías `[]`)
- **Líneas**: 68 (dependencias `[num1, num2]`)
- **Qué ver**: Cómo las dependencias afectan cuándo se recrea la función

#### Renderizado Condicional
- **Archivo**: `src/components/ResultadoDisplay.jsx`
- **Líneas**: 11-19
- **Qué ver**: Operador ternario y lógico para mostrar/ocultar elementos
- **Concepto**: Virtual DOM solo renderiza lo necesario según condiciones

#### Comparación y Diffing del Virtual DOM
- **Archivo**: `src/components/ResultadoDisplay.jsx`
- **Líneas**: 11-19
- **Qué ver**: Cuando `resultado` cambia, React compara el Virtual DOM anterior con el nuevo y actualiza solo lo que cambió

---

## 🎯 RUTA DE APRENDIZAJE SUGERIDA

### Paso 1: Entender Componentes (15 min)
1. Abrir `src/components/InputNumber.jsx`
2. Ver cómo es una función que retorna JSX
3. Abrir `src/App.jsx` líneas 85-97
4. Ver cómo se reutiliza el componente

### Paso 2: Entender Props (20 min)
1. Ver `src/App.jsx` líneas 85-97 (props pasadas)
2. Ver `src/components/InputNumber.jsx` líneas 6-18 (props recibidas)
3. Ver `src/components/InputNumber.jsx` líneas 23-28 (PropTypes)
4. Ver `src/components/InputNumber.jsx` líneas 30-35 (defaultProps)
5. Probar pasar una prop incorrecta y ver el error en consola

### Paso 3: Entender Virtual DOM (20 min)
1. Ver `src/App.jsx` líneas 18-20 (estado)
2. Ver `src/App.jsx` líneas 29-35 (useCallback)
3. Ver `src/components/ResultadoDisplay.jsx` líneas 11-19 (renderizado condicional)
4. Abrir React DevTools y ver cómo cambian los componentes
5. Comparar con y sin useCallback (quitar useCallback y ver re-renderizados)

---

## 🔍 BÚSQUEDA RÁPIDA POR CONCEPTO

### "¿Dónde veo PropTypes?"
→ `src/components/InputNumber.jsx` líneas 23-28
→ `src/components/OperationButton.jsx` líneas 17-20
→ `src/components/ResultadoDisplay.jsx` líneas 24-27

### "¿Dónde veo defaultProps?"
→ `src/components/InputNumber.jsx` líneas 30-35
→ `src/components/ResultadoDisplay.jsx` líneas 29-32

### "¿Dónde veo useCallback?"
→ `src/App.jsx` líneas 29-35 (funciones de input)
→ `src/App.jsx` líneas 43-68 (función de operación)

### "¿Dónde veo renderizado condicional?"
→ `src/components/ResultadoDisplay.jsx` líneas 11-19

### "¿Dónde veo componentes reutilizables?"
→ `src/App.jsx` líneas 85-97 (InputNumber x2)
→ `src/App.jsx` líneas 105-108 (OperationButton x4)

### "¿Dónde veo flujo de datos con props?"
→ `src/App.jsx` líneas 29-35 → 88, 95 → `src/components/InputNumber.jsx` línea 14

---

## 📝 NOTAS IMPORTANTES

- **Todos los componentes tienen comentarios educativos** explicando qué demuestran
- **PropTypes solo funcionan en desarrollo**, no en producción
- **useCallback es una optimización**, el código funciona sin él pero es menos eficiente
- **El Virtual DOM es automático**, no necesitas hacer nada especial, React lo maneja

---

*📅 Guía rápida para referencia durante la clase - UTN*

