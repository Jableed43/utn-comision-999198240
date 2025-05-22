function gestionarPaises() {
let paisesRegistrados = ["argentina", "peru", "bolivia", "italia", "australia"];

  let continuarGestion = true;

  console.log("--- Gestor de Países ---");
  console.log("Países iniciales:", paisesRegistrados.join(', '));
  console.log("-----------------------");

  while (continuarGestion) {
    let nombrePais = prompt("Ingrese un nombre de país (o escriba 'fin' para terminar y ver el listado final):");

    // Convertimos a minúsculas y eliminamos espacios extra para una mejor comparación
    nombrePais = nombrePais ? nombrePais.toLowerCase().trim() : '';

    if (nombrePais === 'fin') {
      continuarGestion = false; // Terminar el proceso
    } else if (nombrePais) { // Asegurarse de que el usuario ingresó algo

      // Buscamos si el país ya existe en la lista (ignorando mayúsculas/minúsculas para la búsqueda)
      const indicePais = paisesRegistrados.findIndex(
        pais => pais === nombrePais
      );

      if (indicePais !== -1) {
        // País encontrado: eliminarlo
        paisesRegistrados.splice(indicePais, 1);
        alert(`País "${nombrePais}" ya registrado. Se elimina del registro.`);
        console.log(`"${nombrePais}" eliminado. Listado actual: ${paisesRegistrados.join(', ')}`);
      } else {
        // País no encontrado: agregarlo
        paisesRegistrados.push(nombrePais);
        alert(`País "${nombrePais}" registrado.`);
        console.log(`"${nombrePais}" agregado. Listado actual: ${paisesRegistrados.join(', ')}`);
      }
    } else {
      alert("Por favor, ingrese un nombre de país válido.");
    }
  }

  console.log("\n--- Listado Final de Países Registrados ---");
  console.log(paisesRegistrados.join(', ')); // Muestra el array final en la consola

  return paisesRegistrados; // Retorna el array final de países
}

// Ejecutar la función
const listadoFinalPaises = gestionarPaises();
// Si quieres ver el array retornado en la consola después de terminar,
// solo el nombre de la variable en la consola del navegador.
// listadoFinalPaises;