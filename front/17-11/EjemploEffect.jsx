// Teoría y práctica de useEffect
import React, { useEffect, useState } from 'react';

function EjemploEffect() {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  const [activo, setActivo] = useState(false);
  const [modoOscuro, setModoOscuro] = useState(false);

  // 1. useEffect sin dependencias: se ejecuta solo una vez (montaje)
  useEffect(() => {
    console.log('Componente montado, se ejecuta una sola vez');

    const datosGuardados = localStorage.getItem('MiDato');
    if (datosGuardados) {
      console.log('Datos guardados:', datosGuardados);
      setNombre(datosGuardados);
    }
  }, []);

  // 2. useEffect con dependencias: se ejecuta al montar y cuando “contador” cambia
  useEffect(() => {
    console.log('El contador cambió:', contador);
    localStorage.setItem('contador', contador.toString());
  }, [contador]);

  // 3. useEffect con limpieza (cleanup): se ejecuta al montar + cada cambio de “activo”
  useEffect(() => {
    if (!activo) {
      console.log('Timer detenido');
      return;
    }

    console.log('Iniciando timer...');
    const timer = setInterval(() => {
      setContador((prev) => prev + 1);
    }, 1000);

    // Cleanup: se ejecuta antes de desmontar o antes de volver a ejecutar el efecto
    return () => {
      console.log('Limpiando timer...');
      clearInterval(timer);
    };
  }, [activo]);

  // 4. useEffect con múltiples dependencias
  useEffect(() => {
    console.log('Alguna dependencia cambió:', { nombre, modoOscuro });
    localStorage.setItem(
      'configuracion',
      JSON.stringify({ nombre, modoOscuro }),
    );
  }, [nombre, modoOscuro]);

  return (
    <div style={{ padding: 16 }}>
      <h2>Efectos de useEffect</h2>

      <div>
        <label>
          Nombre guardado:
          <input
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            placeholder="Escribí tu nombre"
          />
        </label>
      </div>

      <div>
        <p>Contador: {contador}</p>
        <button onClick={() => setContador(contador + 1)}>Incrementar</button>
      </div>

      <div>
        <button onClick={() => setActivo(!activo)}>
          {activo ? 'Pausar timer' : 'Iniciar timer'}
        </button>
      </div>

      <div>
        <button onClick={() => setModoOscuro(!modoOscuro)}>
          {modoOscuro ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
        </button>
      </div>
    </div>
  );
}

export default EjemploEffect;

