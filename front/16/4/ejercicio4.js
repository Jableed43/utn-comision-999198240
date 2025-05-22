function armarListaDeComprasMarcelo() {
  const listaDeCompras = []; // Array para almacenar los productos
  let producto = ''; // Variable para guardar la entrada del usuario

  console.log("--- ¡Hola, Marcelo! Comienza a armar tu lista de compras ---");
  console.log("Escribe 'fin' cuando hayas terminado de agregar productos.");

  // Un bucle `while` es ideal para cuando no sabemos cuántas veces se repetirá
  while (producto.toLowerCase() !== 'fin') {
    producto = prompt("Ingresa un producto para la lista (o escribe 'fin'):");

    // Limpiamos la entrada y la convertimos a minúsculas para comparar
    const productoLimpio = producto.toLowerCase().trim();

    if (productoLimpio === 'fin') {
      break; // Salimos del bucle si el usuario escribe 'fin'
    } else if (productoLimpio) { // Aseguramos que no se agreguen entradas vacías
      listaDeCompras.push(productoLimpio.charAt(0).toUpperCase() + productoLimpio.slice(1)); // Capitalizamos la primera letra
      console.log(`"${productoLimpio}" agregado a la lista.`);
    } else {
      alert("Por favor, ingresa un producto válido.");
    }
  }

  // Mostrar la lista completa al final
  if (listaDeCompras.length > 0) {
    console.log("\n--- ¡Tu lista de compras está lista! ---");
    listaDeCompras.forEach((item, index) => {
      console.log(`${index + 1}. ${item}`);
    });
  } else {
    console.log("\nTu lista de compras está vacía.");
  }

  return listaDeCompras; // La función retorna la lista final
}

// Para ejecutar el programa:
const laListaDeMarcelo = armarListaDeComprasMarcelo();
console.log("Lista final retornada:", laListaDeMarcelo);