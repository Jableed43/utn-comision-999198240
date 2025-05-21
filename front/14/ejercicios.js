//Parametro se define en la declaracion de la funcion
//El argumento es el valor que se le pasa a la funcion invocada

// 1. Hacer una función que reciba un parámetro y nos devuelva el tipo de valor que es.
// Ejemplo:
// Let valor = “hola” tipoDeDato(valor) —-> devuelve string
// Let valor = 4546. tipoDeDato(valor) —-> devuelve number

//Definicion de funcion
function tipoDeDato(valor) {
   return typeof valor
}

module.exports = {
   tipoDeDato
}

let valor = 4546
let valor2 = "hola"

//llamado - invocacion
console.log("number", tipoDeDato(valor))
console.log("string", tipoDeDato(valor2))

// 2. Dado una edad , usar un condicional para indicar por consola si esa persona es mayor de 18 años o no.

function verificarEdad(edad) {
     if(edad > 18){
        console.log(edad, "Es mayor a 18 años")
     } else {
        console.log(edad, "No es mayor a 18 años")
     }
}

verificarEdad(20)
verificarEdad(15)


// 3. Confeccionar un programa que pida tres notas de un alumno, calcule el promedio e imprima alguno de estos mensajes:
// • Si el promedio es >=7 mostrar "Promocionado".
// • Si el promedio es >=4 y <7 mostrar "Regular".
// • Si el promedio es <4 mostrar “Reprobado”.

function calcularPromedio(nota1, nota2, nota3) {
   let total = nota1 + nota2 + nota3
   let promedio = total / 3

   if(promedio >= 7){
    console.log("Promocionado", promedio)
   } else if (promedio>=4 && promedio<7) {
    console.log("Regular", promedio)
   } else {
    console.log("Reprobado", promedio)
   }
}

calcularPromedio(8, 4, 7)

// 4. Dado un año ingresado por medio de un prompt() devolver por consola la edad que tiene o tendrá este año. Para este ejercicio no vamos a tener en cuenta el mes en que nació 
