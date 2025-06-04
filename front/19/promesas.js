//Operacion Asincronica
function operacionAsincronica() {
   return new Promise((resolve, reject) => {
    const exito = true;
    if(exito){
        resolve("La operacion fue exitosa")
    } else {
        reject("La operacion ha fallado")
    }
   })
}

//.then -> Obtenemos el resultado de una operacion y lo procesamos
operacionAsincronica().then(response => {
    console.log({response})
}).catch(error => {
    console.log("error then-catch: ",error)
})

async function ejemploAsincronico() {
    try {
        const resultado = await operacionAsincronica();
        console.log({resultado})
    } catch (error) {
        console.log("error async-await: ", error)
    }
}

ejemploAsincronico()

console.log("Fuera de la operacion asincronica")