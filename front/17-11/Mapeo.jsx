import React, { useState } from 'react';

function Mapeo() {
  const [estudiantes] = useState([
    { id: 1, nombre: 'Ana', curso: 'React', nota: 9 },
    { id: 2, nombre: 'Luis', curso: 'Angular', nota: 8 },
    { id: 3, nombre: 'Maria', curso: 'HTML', nota: 7 },
    { id: 4, nombre: 'Carlos', curso: 'React', nota: 10 },
  ]);

  const frutas = ['Manzana', 'Banana', 'Pera', 'Uva'];
  const numeros = [1, 2, 3, 4, 5];

  return (
    <div style={{ padding: '20px' }}>
      <h2>Ejemplos de Mapeo (map) en React</h2>

      {/* Ejemplo 1: Array simple de strings */}
      <section style={{ marginBottom: '30px' }}>
        <h3>1. Mapeo de Array Simple (Strings)</h3>
        <p>Array: {JSON.stringify(frutas)}</p>
        <ul>
          {frutas.map((fruta, index) => (
            <li key={index}>{fruta}</li>
          ))}
        </ul>
        <p style={{ fontSize: '12px', color: '#666' }}>
          ⚠️ Nota: Usar index como key solo es válido cuando la lista no cambia
        </p>
      </section>

      {/* Ejemplo 2: Transformación de datos */}
      <section style={{ marginBottom: '30px' }}>
        <h3>2. Transformación de Datos (Números)</h3>
        <p>Array original: {JSON.stringify(numeros)}</p>
        <ul>
          {numeros.map((num) => (
            <li key={num}>
              {num} × 2 = {num * 2}
            </li>
          ))}
        </ul>
      </section>

      {/* Ejemplo 3: Array de objetos con ID único */}
      <section style={{ marginBottom: '30px' }}>
        <h3>3. Mapeo de Array de Objetos (Estudiantes)</h3>
        <ul>
          {estudiantes.map((estudiante) => (
            <li key={estudiante.id}>
              <strong>{estudiante.nombre}</strong> - Curso: {estudiante.curso} - Nota:{' '}
              {estudiante.nota}
            </li>
          ))}
        </ul>
        <p style={{ fontSize: '12px', color: '#666' }}>
          ✅ Usamos el ID único como key (mejor práctica)
        </p>
      </section>

      {/* Ejemplo 4: Renderizado condicional dentro del map */}
      <section style={{ marginBottom: '30px' }}>
        <h3>4. Renderizado Condicional en el Mapeo</h3>
        <ul>
          {estudiantes.map((estudiante) => (
            <li key={estudiante.id}>
              <strong>{estudiante.nombre}</strong> - {estudiante.curso}
              {estudiante.nota >= 9 && (
                <span style={{ color: 'green' }}> ⭐ Excelente</span>
              )}
              {estudiante.nota < 7 && <span style={{ color: 'red' }}> ⚠️ A mejorar</span>}
            </li>
          ))}
        </ul>
      </section>

      {/* Ejemplo 5: Mapeo con componentes */}
      <section style={{ marginBottom: '30px' }}>
        <h3>5. Mapeo que Retorna Componentes</h3>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          {estudiantes.map((estudiante) => (
            <div
              key={estudiante.id}
              style={{
                border: '1px solid #ccc',
                padding: '10px',
                borderRadius: '5px',
                minWidth: '150px',
              }}
            >
              <h4>{estudiante.nombre}</h4>
              <p>Curso: {estudiante.curso}</p>
              <p>Nota: {estudiante.nota}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ejemplo 6: Mapeo con filtrado combinado */}
      <section style={{ marginBottom: '30px' }}>
        <h3>6. Mapeo con Filtrado (Solo React)</h3>
        <ul>
          {estudiantes
            .filter((estudiante) => estudiante.curso === 'React')
            .map((estudiante) => (
              <li key={estudiante.id}>
                <strong>{estudiante.nombre}</strong> - Nota: {estudiante.nota}
              </li>
            ))}
        </ul>
      </section>
    </div>
  );
}

export default Mapeo;

