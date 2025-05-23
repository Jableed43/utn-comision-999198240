//For

// 1. Contar hacia atras de 5 en 5 - sin mostrar el 0

for (let index = 20; index >= 5; index -= 5) {
    console.log(index)
}

// 2. Lista de numeros separados por coma - For
// ¿ Que operacion repetitiva me da un listado de numeros ?

// let nums = [10, 25, 50, 17, 18, 2, 0]
// let resultado = ""

// for (let index = 0; index < nums.length; index++) {
//     resultado = resultado + nums[index]
    
//     if(index < nums.length - 1){
//         resultado += ", "
//     }
// }

// console.log(resultado)

function commaNums(startNumer, endNumber) {
    const nums = []
    for (let index = startNumer; index < endNumber; index++) {
        nums.push(index)
    }
    console.log(nums)
}

commaNums(5, 10)

// console.log(nums)

// 3. Tabla de multiplicar

// Function Expression
let tablaMultiplicar = function(num) {
    let resultado = []
    let valor;
    for (let index = 1; index <= 10 ; index++) {
        valor = num*index
        resultado.push(valor) 
    }
    return resultado
}

console.log(tablaMultiplicar(5))

//Funciones
//Escribir una funcion para sumar dos numeros

function suma(a, b){
    return a + b
}

console.log(suma(2, 5))

//Escribir funcion para calcular el area de un triangulo
// (base x altura) / 2
function calcularAreaTriangulo(b, h){
   return (b * h) / 2
}

let result = calcularAreaTriangulo(10, 5)
console.log(result)


//Funcion para validar si dos numeros son multiplos
function multiplos(a, b) {
    return a % b === 0
}

function aver(cb, a, b){
    if (cb(a, b)){ 
        return "son multiplos"}
     else { return "no son"}
    }

console.log(aver(multiplos, 20, 5))
