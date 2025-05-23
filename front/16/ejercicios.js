/* Escribir productos y agregar a un
array. Tengamos en cuenta que la cantidad de prod es igual a la cantidad que ingresa el cliente
- Input, un array vacio, algo que corte
*/

function registrarProductos() {
    const productosCliente = []

    let agregarMasProductos = true;

    while(agregarMasProductos){
        let producto = prompt("Ingrese el nombre del producto, o escriba '.' para terminar")

        if(producto === "."){
            agregarMasProductos = false
        } else if (producto !== "") {
            productosCliente.push(producto)
        } else {
            alert("Por favor ingresar un producto valido")
        }
    }
    return productosCliente
}


/* Segun la lista de producto-precios, hacer una funcion que busque el precio
de cada producto y lo sume, mostrando en la consola la suma total a pagar. */

// bracket notation
const listaPrecios = {
    "pan": 300,
    "cafe": 380,
    "aceite": 47,
    "leche": 80,
    "fideos": 62,
    "vinagre": 50,
    "harina": 51,
    "galletitas": 350,
    "shampoo": 200
}

function calcularTotal(productosComprados) {
    let totalAPagar = 0;
    let productosNoEncontrados = []

    productosComprados.forEach(producto => {
        const precio = listaPrecios[producto]

        // nos aseguramos que el valor exista
        if(precio !== undefined){
            totalAPagar += precio
            console.log(`${producto}:${precio}`)
        } else {
            console.log(`Atencion "${producto}" no fue encontrado en la lista de precios`)
            productosNoEncontrados.push(producto)
        }
    })

    console.log(`Total a pagar es: $${totalAPagar}`)

    //Mostrar al cliente los productos no encontrados
    if(productosNoEncontrados.length > 0){
        console.warn(`Productos no encontrados y no sumados al total: ${productosNoEncontrados.join(", ")}`)
    }
}

let compra = registrarProductos()
calcularTotal(compra)