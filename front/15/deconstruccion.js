// Acceso a valores de claves en objetos
const address = {
 street: 'Pallimon',
 city: 'Kollam',
 state: 'Kerala',
};

// console.log(address.street, address.state, address.city)

const city = address.city

// Deconstruccion de objetos - Lo que importa es el nombre
const { ciudad = city, state, street } = address

// console.log(ciudad)
// const city = address.city
// const state = address.state
// const street = address.street

// city = "mandarina"
address.city = "mandarina"

console.log(city, "city")
console.log( address.city, "address.city")


//Deconstruccion Arrays - Importa el index-orden

const datosPersona = ["Juan", "Pérez", 30, "Ingeniero"]

// Si no tomamos el valor de un indice lo debemos saltear con coma ","
// const [nombre, , ,profesion] = datosPersona

console.log(nombre, profesion)

//Spread operator - Esparcer
const [ , , años, ...rest ] = datosPersona
console.log({años})
console.log(...rest)

// Don't Repeat Yourself
// Exportamos-Importamos - para no repetir codigo (reutilizar)
// Mantenimiento facil
// Vas a arreglar el problema en el origen
function consoleName(name) {
    console.log(name)
}

//commonJs
module.exports = {
    consoleName: consoleName,
    datosPersona: datosPersona,
}