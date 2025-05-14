//Array tiene indices y un largo
//tiene 5 elementos de largo
//su indice maximo es 4
// El indice maximo es igual a length - 1

let lista = ["gaston", "maria", "javier", "ezequiel", "gabriel"]

//Acceso a elementos de un array
console.log(lista[lista.length - 1])
console.log(lista.length)

//push añade un elemento al final del array
//retorna la nueva longitud
console.log(lista)
console.log("push", lista.push("Lautaro"))
console.log(lista)

//Elimina el ultimo elemento y retorna su valor
console.log("pop", lista.pop())
console.log(lista)

//Elimina el primer elemento, se mueven los indices para completar el espacio vacio
//retorna el elemento eliminad
console.log("shift", lista.shift())
console.log(lista)

//Inserta un elemento en la primera posicion y retorna el nuevo largo (length)
console.log("unshift", lista.unshift("Rodrigo"))
console.log(lista)

//IndexOF 
let animales = ['perro', 'gato', 'conejo', 'gato'];
let indiceGato = animales.indexOf('gato');
console.log("gato ->", animales[indiceGato])

//Splice para eliminar
let lenguajes = ['java', 'python', 'c++'];
// Eliminar 1 elemento desde el índice 1
console.log(lenguajes.splice(1, 1))
console.log(lenguajes); // Salida: ['java', 'c++']

//Splice para reemplazar
let herramientas = ['martillo', 'destornillador', 'llave'];
// Reemplazar 1 elemento desde el índice 0 con 'alicates'
herramientas.splice(1, 1, 'alicates');
console.log(herramientas); // Salida: ['alicates', 'destornillador', 'llave']


//Slice
let frutas = ['manzana', 'banana', 'pera', 'naranja'];
let frutasDelMedio = frutas.slice(1, 3);
console.log(frutasDelMedio); // Salida: ['banana', 'pera']

//For each
frutas.forEach(function(fruta, index) {
    console.log( `La fruta actual es: ${fruta} y el index es: ${index}` )
})

var mapeoFrutas = frutas.map(function(fruta, index) {
    return `La fruta actual es: ${fruta} y el index es: ${index}`
})
console.log(mapeoFrutas)

var mapeoFrutas = frutas.map((fruta, index) => 
    `La fruta actual es: ${fruta} y el index es: ${index}`
)
console.log(mapeoFrutas)

