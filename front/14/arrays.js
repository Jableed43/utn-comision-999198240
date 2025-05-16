let nums = [4, 5, 6, 7, 8, 9, 10, [3.14, 41], { nombre: "aristobulo", apellido: "del valle"} ]
//Podemos reasingnar el valor de una variable x indice
nums[0] = 15

//Podemos acceder al indice de un indice
console.log(nums[7][0])
console.log(nums[8].apellido);

let alumno = { nombre: "aristobulo", apellido: "del valle", numeros: [3.14, 41] }
let apellido = alumno.apellido
console.log(alumno.numeros[0])

//Split - Se usa en strings - convirtiendo un string en un array separado por un caracter
let nums2 = "4, 5, 6, 7, 8, 9, 10"
console.log(nums2.split(","))

let nums3 = "4 - 5 - 6 - 7 - 8 - 9 - 10"
console.log(nums3.split("-"))
console.log(nums3[0])

//Join -> convertir un array a string y los separa con el caracter que le digamos
let names = ["pedro", "martina", "lucia"]
let namesJoined = names.join("-")
console.log(namesJoined)

//Metodos de array
// Vimos foreach y map

//Filter - retorna un array con los valores que cumplen la condicion
// No modifica el array original
let num5 = [22, 18, 20, 45, 70, 17, 12]
let numsFiltered = num5.filter(function(edad) {
   return !(edad >= 18)
})
console.log(numsFiltered)

let numsFiltered2 = numsFiltered.filter(function(edad) {
    return edad >= 13
})

console.log(numsFiltered2)

//Find -> Encontrar el primer elemento coincidente, retorna el registro
const productos = 
[
    {nombre: "parlante", precio: 120000},
    {nombre: "laptop", precio: 800000},
    {nombre: "mouse gamer", precio: 80000},
    {nombre: "teclado", precio: 50000 }
]

let productoBarato = productos.find(function(producto) {
    return producto.precio < 100000
})
let teclado = productos.find(function(producto) {
    return producto.nombre === "teclad"
})
console.log(productoBarato)
console.log("teclado", teclado)

//Find index -> retornar el indice del elemento coincidente
let indiceEncontrado = productos.findIndex(function(producto) {
    return producto.nombre === "mouse gamer"
})
console.log(indiceEncontrado)

//Every -> comprueba si todos los elementos cumplen una condicion

let socios = [
    {nombre: "javier", activo: true},
    {nombre: "gabriel", activo: true},
    {nombre: "marina", activo: true},
    {nombre: "aristobulo", activo: true}
]

let noDeudores = socios.every(function(socio) {
    return socio.activo === true
})
console.log(noDeudores)

//Reduce -> reduce cada elemento del array a un unico resultado
let precios = [20000, 50000, 30000]
let total = precios.reduce(function(suma, precio) {
    return suma + precio
})
console.log(total)

//Sort -> Ordenar alfabeticamente, y modifica el array original
let frutas = ["mandarina", "sandia", "uva", "banana"]
frutas.sort()
console.log(frutas)

//Si ordenas numeros hace falta aclarar la direccion
let nums6 = [0.5, -10, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
//Ascendente
nums6.sort(function(a, b) {
    return a - b
})
console.log(nums6)

//Descendente
nums6.sort(function(a, b) {
    return b - a
})
console.log(nums6)