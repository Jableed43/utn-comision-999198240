// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', () => {
    // Variable para el contador
    let likeCounter = 0;

    // Obtener referencias DOM
    const likeButton = document.getElementById('likeButton');
    const likeCountDisplay = document.getElementById('likeCount');

    // Función para cargar "me gusta" desde localStorage
    function loadLikes() {
        // Intentar recuperar el valor guardado
        const savedCount = localStorage.getItem('myLikeCount');
        
        // Verificar si el valor existe y es un número válido
        if (savedCount !== null && !isNaN(savedCount)) {
            // Convertir a número entero y asignar
            likeCounter = parseInt(savedCount);
            // Actualizar el display
            likeCountDisplay.textContent = likeCounter;
        }
    }

    // Función para guardar "me gusta" en localStorage
    function saveLikes() {
        // Guardar el valor actual (localStorage convierte automáticamente a string)
        localStorage.setItem('myLikeCount', likeCounter);
    }

    // Manejar el clic del botón
    likeButton.addEventListener('click', () => {
        // Incrementar el contador
        likeCounter++;
        
        // Actualizar el display
        likeCountDisplay.textContent = likeCounter;
        
        // Guardar en localStorage
        saveLikes();
        
        // Efecto "pop" - añadir clase pop
        likeCountDisplay.classList.add('pop');
        
        // Quitar la clase pop después de 200 milisegundos
        setTimeout(() => {
            likeCountDisplay.classList.remove('pop');
        }, 200);
        
        // Mostrar en consola para depurar (opcional)
        console.log('Me gusta:', likeCounter);
    });

    // Iniciar el juego - cargar los "me gusta" guardados al abrir la página
    loadLikes();
});

