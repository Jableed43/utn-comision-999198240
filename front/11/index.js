// ○ string: Cadenas de texto, secuencias de caracteres (ej: 'Hola', "Mundo").
// ○ number: Números, incluyendo enteros y números de punto flotante (ej:
// 25, 3.14).
// ○ boolean: Valores lógicos que representan verdadero o falso (true, false).
// ○ null: Un valor especial que representa la ausencia intencional de un
// valor.
// ○ undefined: Un valor que indica que una variable no ha sido asignada
// con un valor.

// console.log("Hola mundo")
// String
// "Soy un string"
// 'Soy un string'
// `Soy un string`

// Number
0, 1, 2, 3, 4, 5, 5.5, 7.9, 10.5

//Boolean
false,
true

// Otros
null
undefined

// ○ object: Colecciones de pares clave-valor (ej: { nombre: 'Juan', edad: 25 }).
// ○ array: Listas ordenadas de valores (ej: [1, 2, 3, 4, 5]). Los arrays en
// JavaScript pueden contener elementos de diferentes tipos.
// ○ function: Objetos especiales que representan bloques de código
// reutilizable.

//objetos
let ejemplo = { clave: "valor", clave2: "valor2" }
let persona = 
 { 
    nombre: "Javier",
    edad: 32,
    colorPelo: "negro",
    mascota: { nombre: "michi", tipo: "gato" },
    hobbies: [ "musica", "cocina", "programar", "andar en bici" ]
 }

//array - lista - arreglo
let array = [1, 2, 3, 4, 5, 6, false, "javier", { clave: "valor", clave2: "valor2" }, [0, 2], null ]

//Variables

// Declaracion
var variable1;

// Asignacion
variable1 = "Pedro"

//Declarando y asignando al mismo tiempo
var variable2 = "Juan"

let variable3 = "Mateo"
let variable4 = 1984
const variable5 = 1992

//Var
var variable7 = "Camila"
var variable7 = "Marcela"

var variable8 = "Marcos"

function name2() {
    console.log(variable8, "dentro de name2")
    variable8 = "Pedrito"
    console.log(variable8, "Pedrito")
}

// name2()

// console.log(variable8, "Marcos")

//let

let variable9 = "Marquitos"

function name3() {
    let variable9 = "Marquitos2"
    console.log(variable9, "dentro de name3")
    variable9 = "Pedrito"
    console.log(variable9, "Pedrito")
}

name3()

console.log(variable9, "Marquitos")

//const

const variable10 = "Marquitos"

function name4() {
    const variable10 = "Marquitos2"
    console.log(variable10, "dentro de name4")
}

name4()

console.log(variable10, "Marquitos")

// const extra
let variable11 = 0
const variable12 = variable11
variable11 = 1
console.log({"variable11": variable11})
console.log({"variable12": variable12})