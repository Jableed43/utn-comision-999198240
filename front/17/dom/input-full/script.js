document.addEventListener("DOMContentLoaded", function() {
    console.log("Cargado, pipi cucu")

    let textoInput = document.querySelector("#textoInput")
    let colorInput = document.querySelector("#colorInput")
    let fontSizeInput = document.querySelector("#fontSizeInput")
    let resultado = document.querySelector("#resultado")
    let bgColorInput = document.querySelector("#bgColorInput")
    let body = document.querySelector("body")
    //Funciones

    function actualizarTexto() {
       let texto = textoInput.value
       resultado.textContent = texto;
    }

    function actualizarColor() {
      let color = colorInput.value
      resultado.style.color = color
    }

    
    function actualizarFontSize() {
        let fontSize = `${fontSizeInput.value}px`
        resultado.style.fontSize = fontSize
    }
    
    function actualizarBGColor() {
      let color = bgColorInput.value
      body.style.background = color
    }

    //eventos
    textoInput.addEventListener("input", actualizarTexto)
    colorInput.addEventListener("input", actualizarColor)
    fontSizeInput.addEventListener("input", actualizarFontSize)
    bgColorInput.addEventListener("input", actualizarBGColor)
})