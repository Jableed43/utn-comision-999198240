document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializamos el contador de "me gusta"
    let likeCounter = 0;

    // 2. Obtenemos las referencias a los elementos HTML
    const likeButton = document.getElementById('likeButton');
    const likeCountDisplay = document.getElementById('likeCount');

    // --- NUEVO: Cargar el contador desde localStorage al iniciar ---
    function loadLikes() {
        // localStorage.getItem('key') recupera un valor del almacenamiento local.
        // Si no existe, devuelve null.
        const storedLikes = localStorage.getItem('myLikeCount');

        // Verificamos si hay un valor guardado y si es un número válido
        if (storedLikes !== null && !isNaN(storedLikes)) {
            likeCounter = parseInt(storedLikes, 10); // Convertimos el string a número entero
            likeCountDisplay.textContent = likeCounter; // Actualizamos la pantalla con el valor guardado
            console.log('Likes cargados desde localStorage:', likeCounter);
        } else {
            console.log('No se encontraron likes guardados o el valor es inválido. Iniciando en 0.');
        }
    }

    // --- NUEVO: Guardar el contador en localStorage cada vez que cambia ---
    function saveLikes() {
        // localStorage.setItem('key', value) guarda un par clave-valor.
        // El valor debe ser un string, por eso likeCounter se convierte implícitamente.
        localStorage.setItem('myLikeCount', likeCounter);
        console.log('Likes guardados en localStorage:', likeCounter);
    }

    // 3. Agregamos un "escuchador" de eventos al botón de "me gusta"
    likeButton.addEventListener('click', () => {
        // Incrementamos el contador
        likeCounter++;

        // Actualizamos el texto visible en la página
        likeCountDisplay.textContent = likeCounter;

        // Opcional: Añadimos un efecto visual temporal al número
        likeCountDisplay.classList.add('pop');
        setTimeout(() => {
            likeCountDisplay.classList.remove('pop');
        }, 200);

        // --- NUEVO: Llamar a la función para guardar el contador ---
        saveLikes();
        
        // Mostrar en consola (opcional, para depuración)
        // console.log('¡Me gusta! Contador:', likeCounter); // Ya lo hace saveLikes()
    });

    // 4. Al cargar la página, intentamos cargar los likes guardados
    loadLikes();
});