//traemos la lista desordenada
let listaDesordenada = document.querySelector(".lista-desordenada")

// Nos trae un elemento por el id que le digamos
let parrafo = document.getElementById("parrafo-bonito")

// el resultado es un html list
let listItem = document.getElementsByClassName("list-item")
console.log(listItem)

//se utiliza para tomar elementos por su nombre de etiqueta
let links = document.getElementsByTagName("a")

//toma 1° elemento por etiqueta, clase o id segun como lo escribas
let queryId = document.querySelector("#parrafo-bonito")
console.log(queryId)

//toma todos los elementos por etiqueta, clase o id segun como lo escribas
let listItems = document.querySelectorAll(".list-item")
console.log(listItems)

function crearElementoF() {
    let nuevoParrafo = document.createElement("p")
    nuevoParrafo.textContent = "Elemento creado al final"
    let hijo = listaDesordenada.appendChild(nuevoParrafo)
    console.log(hijo)
}

function crearElementoI() {
    let nuevoParrafo = document.createElement("p")
    nuevoParrafo.textContent = "Elemento creado antes de..."
    listaDesordenada.insertBefore(nuevoParrafo, listItems[0])
}

function eliminarElemento() {
     listaDesordenada.removeChild(listItems[listItems.length - 1])
}

function modificarTexto1() {
    const texto = document.querySelector(".texto")
    texto.textContent = " <b> TextContent </b>"
}

function modificarTexto2() {
     const texto = document.querySelector(".texto")
    texto.innerHTML = `
    <ul class="lista-desordenada">
        <li class="list-item">Soy un list item 1</li>
        <li class="list-item">Soy un list item 2</li>
        <li class="list-item">Soy un list item 3</li>
        <li class="list-item">Soy un list item 4</li>
        <li class="list-item">Soy un list item 5</li>
        <li class="list-item">Soy un list item 6</li>
    </ul>`
}

function verAtributo() {
    const element = document.querySelector("#item-especial")
    let atributoId = element.getAttribute("id")
    let atributoClass = element.getAttribute("class")
    console.log({atributoId})
    console.log({atributoClass})
}

function agregarAtributo() {
     const element = document.querySelector("#item-especial")
     element.setAttribute("class", "rojo")
}

function quitarAtributo() {
    const element = document.querySelector("#item-especial")
     element.removeAttribute("class", "rojo")
}