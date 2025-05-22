function encontrarMasCercanoACeroConPrompt() {
  const listaDeNumeros = [];
  let entradaUsuario = '';

  alert("Vamos a ingresar números. Escribe 'fin' cuando quieras terminar.");

  while (entradaUsuario.toLowerCase() !== 'fin') {
    entradaUsuario = prompt("Ingresa un número (o escribe 'fin' para terminar):");

    if (entradaUsuario.toLowerCase() === 'fin') {
      break; // Salimos del bucle
    }

    const numero = parseFloat(entradaUsuario); // Convertimos la entrada a un número (puede ser decimal)

    // Verificamos si la entrada es un número válido
    if (!isNaN(numero)) {
      listaDeNumeros.push(numero);
    } else {
      alert("Eso no parece un número válido. Intenta de nuevo.");
    }
  }

  // --- Lógica para encontrar el más cercano a cero ---

  // Manejo de lista vacía después de la entrada del usuario
  if (listaDeNumeros.length === 0) {
    alert("No se ingresaron números. No se puede encontrar el más cercano a cero.");
    console.warn("La lista de números está vacía.");
    return null;
  }

  let masCercano = listaDeNumeros[0]; // Inicializamos con el primer número

  // --- Caso especial: Si 0 está en la lista ---
  if (listaDeNumeros.includes(0)) {
    alert("Tenemos en la lista el número 0, por lo que este sería el más cercano a sí mismo.");
    console.log("Tenemos en la lista el número 0, por lo que este sería el más cercano a sí mismo.");
    return; // Terminamos la función aquí
  }

  // --- Iterar para encontrar el más cercano ---
  for (let i = 1; i < listaDeNumeros.length; i++) {
    const numeroActual = listaDeNumeros[i];

    // Comparamos el valor absoluto del número actual con el valor absoluto del 'más cercano'
    if (Math.abs(numeroActual) < Math.abs(masCercano)) {
      masCercano = numeroActual;
    }
    // Si los valores absolutos son iguales (ej: 1 y -1), preferimos el positivo
    else if (Math.abs(numeroActual) === Math.abs(masCercano)) {
      if (numeroActual > 0) { // Si el número actual es positivo, lo preferimos
        masCercano = numeroActual;
      }
    }
  }

  // --- Mostrar el resultado según el valor de 'masCercano' ---
  if (masCercano < 0) {
    console.log(`El valor más cercano al 0 es negativo y es: ${masCercano}`);
    alert(`El valor más cercano al 0 es negativo y es: ${masCercano}`);
  } else {
    console.log(`El valor más cercano al 0 es positivo y es: ${masCercano}`);
    alert(`El valor más cercano al 0 es positivo y es: ${masCercano}`);
  }
}

// Ejecutar la función para empezar a pedir números
encontrarMasCercanoACeroConPrompt();