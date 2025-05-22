function registrarProductos() {
  const productosCliente = [];

  let agregarMas = true;

  while (agregarMas) {
    let producto = prompt("Ingrese el nombre del producto (o escriba 'fin' para terminar):");

    if (producto === 'fin') {
      agregarMas = false;
    } else if (producto) {
      productosCliente.push(producto);
    } else {
      alert("Por favor, ingrese un nombre de producto válido.");
    }
  }

  return productosCliente;
}

// const compraCliente = registrarProductos();
// console.log("Productos comprados:", compraCliente);

//-----

function calcularTotal(productosComprados) {

  const listaPrecios = {
    "pan": 300,
    "cafe": 380,
    "aceite": 47,
    "leche": 80,
    "fideos": 62,
    "vinagre": 50,
    "harina": 51,
    "galletitas": 350,
    "shampoo": 200
  };

  let totalAPagar = 0;
  const productosNoEncontrados = [];

  console.log("\n--- Detalle de la Compra ---");
  productosComprados.forEach(producto => {
    const precio = listaPrecios[producto];

    if (precio !== undefined) {
      totalAPagar += precio;
      console.log(`${producto}: $${precio}`);
    } else {
      console.log(`¡Atención! "${producto}" no encontrado en la lista de precios.`);
      productosNoEncontrados.push(producto);
    }
  });

  console.log("----------------------------");
  console.log(`Total a pagar: $${totalAPagar}`);

  if (productosNoEncontrados.length > 0) {
    console.warn(`Productos no encontrados y no sumados al total: ${productosNoEncontrados.join(', ')}`);
  }
}

const compraActual = registrarProductos();
calcularTotal(compraActual);