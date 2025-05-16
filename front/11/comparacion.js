// Operadores de comparacion

// Compara valores - Igualdad
console.log(10 == "10")

// Compara valores y tipo de dato - Estricta
console.log(10 === "10")

// Compara valores - Desigualdad
console.log(10 != "10")

// Compara valores y tipo de dato - Desigualdad Estricta
console.log(10 !== "10")

console.log(10 < 20)

console.log(10 > 20)

console.log(10 >= 20)

console.log("menor o igual - true 1", 10 <= 20)
console.log("menor o igual - true 2", 10 <= 10)
console.log("menor o igual - 3", 10 <= 5)

console.log( "manzana".length < "pepino".length )

// Operadores lógicos
let clima = "soleado"
let viento = "mucho"
let plata = "mucha"

if(clima === "llueve" && viento === "mucho" && plata !== "mucha"){
    console.log("No salgo de fiesta y me quedo en casa")
} else {
    console.log("Salgo de fiesta")
}

if(clima == "soleado" || viento !== "mucho"){
    console.log("Salgo de picnic")
} else {
    console.log("Me quedo en casa mirando netflix")
}

let ganas = true
let dinero = true
let compania = false

if((ganas === true || compania === true) && dinero === true){
    console.log("Salgo")
} else {
    console.log("No salgo")
}

if((ganas || compania) && dinero){
    console.log("Salgo")
} else {
    console.log("No salgo")
}
