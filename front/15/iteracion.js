
// for (inicialización; condición; incremento/decremento) {
//   // Bloque de código a ejecutar
// }

let array = ["uva", "manzana", "pera", "mandarina", "naranja"]
let arraySinM = [];

for (let index = 0; index < array.length; index++) {
    const element = array[index][0];
    if(element !== "m"){
        arraySinM.push(array[index])
    }
}

// console.log(arraySinM)

//Decreciente
for (let index = array.length - 1; index >= 0; index--) {
    const element = array[index];
    console.log(element, index)
}

//While
let contador = 0;
let frutas = ["uva", "manzana", "pera", "mandarina", "naranja"]
while (contador < frutas.length) {
  console.log(`Fruta ${contador + 1}: ${frutas[contador]}`);
  contador++;
}
