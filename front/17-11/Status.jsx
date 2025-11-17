import React, { useMemo, useState } from 'react';

const Status = () => {
  const [contador, setContador] = useState(0);
  const [nombre, setNombre] = useState('');
  const [activo, setActivo] = useState(false);
  const [claveSeleccionada, setClaveSeleccionada] = useState('nombre');

  const [usuario, setUsuario] = useState({
    nombre: 'Juan',
    edad: 25,
    email: 'juan@gmail.com',
  });

  const incrementarContador = () => setContador((prev) => prev + 1);

  const actualizarUsuario = () => {
    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      edad: prevUsuario.edad + 1,
    }));
  };

  const handleInputCambio = (e) => {
    const nuevoValor =
      claveSeleccionada === 'edad' ? Number(e.target.value) : e.target.value;

    setUsuario((prevUsuario) => ({
      ...prevUsuario,
      [claveSeleccionada]: nuevoValor,
    }));
  };

  const estadoActivo = useMemo(
    () => (activo ? 'Activo' : 'Inactivo'),
    [activo],
  );

  return (
    <>
      <h2>Ejemplos con useState</h2>

      <section>
        <h3>1. Estado numérico</h3>
        <p>Contador: {contador}</p>
        <button onClick={incrementarContador}>Incrementar</button>
      </section>

      <section>
        <h3>2. Estado booleano</h3>
        <p>Estado actual: {estadoActivo}</p>
        <button onClick={() => setActivo((prev) => !prev)}>
          {activo ? 'Desactivar' : 'Activar'}
        </button>
      </section>

      <section>
        <h3>3. Estado string</h3>
        <label htmlFor="nombre">Nombre:</label>
        <input
          id="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          placeholder="Escribe tu nombre"
        />
      </section>

      <section>
        <h3>4. Estado como objeto</h3>
        <p>
          Usuario: {usuario.nombre}, Edad: {usuario.edad}, Email:{' '}
          {usuario.email}
        </p>
        <button onClick={actualizarUsuario}>Aumentar edad</button>
      </section>

      <section>
        <h3>5. Actualizar propiedades dinámicamente</h3>
        <label htmlFor="clave">Campo a editar:</label>
        <select
          id="clave"
          value={claveSeleccionada}
          onChange={(e) => setClaveSeleccionada(e.target.value)}
        >
          <option value="nombre">Nombre</option>
          <option value="edad">Edad</option>
          <option value="email">Email</option>
        </select>

        <label htmlFor="dato">Nuevo valor:</label>
        <input
          id="dato"
          type={claveSeleccionada === 'edad' ? 'number' : 'text'}
          value={usuario[claveSeleccionada]}
          onChange={handleInputCambio}
        />
      </section>
    </>
  );
};

export default Status;

