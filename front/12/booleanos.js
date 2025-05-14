// Valores Falsy
// Es un valor que en un contexto booleano vale como falso

let falsy = [false, 0, -0, "", null, undefined, NaN, 0n]

let variable = NaN
if(!(variable)){
    console.log("Soy falsy")
}

//Valores Truthy

let truthy = [true, 10, "N", [], {}, Symbol, function(){}, 1n]

let variable2 = {}
if(variable2){
    console.log("Soy truthy")
}