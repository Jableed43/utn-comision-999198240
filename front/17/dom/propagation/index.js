//Traer elementos al dom
const externo = document.getElementById("div-externo")
const externoX = document.getElementById("div-externo-externo")
const interno = document.getElementById("div-interno")
const consola = document.getElementById("consola")

function log(texto) {
    consola.textContent += '\n' + texto
}

//Burbujeo - Bubbling (Comportamiento x defecto)
externoX.addEventListener("click", () => {
    log("Burbujeo: Click en div EXTERNO-X")
})

externo.addEventListener("click", () => {
    log("Burbujeo: Click en div EXTERNO")
})

interno.addEventListener("click", () => {
    log("Burbujeo: Click en div INTERNO")
})


// Capturing - Se activa con true
/*  Utilizado cuando necesitas interceptar un evento en una fase temprana, antes de que llegue a un elemento hijo */

// externo.addEventListener("click", () => {
//     log("Captura: Click en div EXTERNO")
// })

// evento con stopPropagation
// interno.addEventListener("click", (evento) => {
//     evento.stopPropagation()
//     log("Evento detenido en div INTERNO - stopPropagation")
// })

function limpiarLog(e) {
    console.log(e)
    consola.textContent = "Log: "
}