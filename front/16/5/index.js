function eliminarColorAzul() {
  let colores = ["rojo", "verde", "azul", "amarillo", "negro", "blanco", "azul", "violeta"];

  console.log("--- Array original de colores ---");
  console.log(colores); // Muestra el array antes de la eliminación

  let indiceAzul;

  // Un bucle `while` que sigue buscando y eliminando hasta que no haya más "azul"
  while ((indiceAzul = colores.indexOf("azul")) !== -1) {
    console.log(`Se encontró 'azul' en la posición ${indiceAzul}. Eliminando...`);
    colores.splice(indiceAzul, 1); // Elimina 1 elemento desde la posición `indiceAzul`
  }

  // Alternativa (más eficiente si hay muchos elementos y solo necesitas eliminar una vez)
  // for (let i = 0; i < colores.length; i++) {
  //   if (colores[i] === "azul") {
  //     colores.splice(i, 1);
  //     i--; // Importante: ajusta el índice para no saltarte el siguiente elemento
  //             // si se eliminó el actual (ya que los elementos se desplazan)
  //   }
  // }

  console.log("\n--- Array de colores después de eliminar 'azul' ---");
  console.log(colores); // Muestra el array modificado

  return colores; // Retorna el array modificado
}

// Para ejecutar el programa:
// const coloresSinAzul = eliminarColorAzul();
// console.log("Array final retornado:", coloresSinAzul);