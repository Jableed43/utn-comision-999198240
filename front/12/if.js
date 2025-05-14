//Estructuras de control Condicionales
let lluvia = true
let frio = true
let temperatura = 24

// if(!(frio === true)){
//         console.log("No me abrigo")
// } else {
//         console.log("Me abrigo")
// }

if(frio){
    console.log("Me abrigo")
} else if(temperatura < 24){
    console.log("Me pongo un buzo")
} else {
    console.log("No me abrigo")
}

//If ternario
frio === true ? console.log("Me abrigo") 
: console.log("No me abrigo")

frio === true ? console.log("Me abrigo") 
: temperatura < 24 ? console.log("Me pongo un buzo") 
: console.log("No me abrigo")

console.log(typeof 10)

//typeof permite verificar el tipo de dato de un valor

if(typeof temperatura === "number"){
    console.log("Soy un numero")
}