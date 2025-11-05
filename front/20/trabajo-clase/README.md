# Trabajo en clase contador de "Me Gusta"

## Objetivo General
Crear una página web con un botón de "Me Gusta" y un contador numérico. Cada clic en el botón aumentará el contador, y este número se guardará y cargará automáticamente usando el almacenamiento local del navegador (localStorage).

## Instrucciones Paso a Paso

### Estructura de archivos
Crea tres archivos en la misma carpeta: `index.html`, `style.css`, y `script.js`. El estilo y el html se puede tomar desde el repositorio. Nos enfocaremos en el javascript.

## La Lógica (JavaScript - script.js)

### 1. Preparación del archivo
- Crea un archivo llamado `script.js`.

### 2. Esperar a que el DOM esté cargado
- Asegúrate de que tu código se ejecute sólo cuando el DOM esté completamente cargado (usa `document.addEventListener('DOMContentLoaded', () => { /* ... tu código aquí ... */ });`).

### 3. Dentro de esa función:

#### Variable para el contador
- Declara una variable (`let likeCounter = 0;`) que guardará el número actual de "me gusta".

#### Obtener referencias DOM
- Usa `document.getElementById()` para obtener referencias al botón de "Me Gusta" (`likeButton`) y al lugar donde se muestra el número (`likeCountDisplay`).

#### Función para cargar "me gusta"
- Crea una función llamada `loadLikes()`.
- Dentro de ella, usa `localStorage.getItem('myLikeCount')` para intentar recuperar el valor guardado.
- Verifica si el valor existe (`!== null`) y si es un número válido (`!isNaN`).
- Si es válido, convierte el valor a un número entero (`parseInt()`) y asigna este número a tu variable `likeCounter`.
- Actualiza el `textContent` de `likeCountDisplay` con el valor cargado.

#### Función para guardar "me gusta"
- Crea una función llamada `saveLikes()`.
- Dentro de ella, usa `localStorage.setItem('myLikeCount', likeCounter)` para guardar el valor actual de tu variable `likeCounter`. Recuerda que `localStorage` solo guarda texto.

#### Manejar el clic del botón
- Añade un "escuchador" de eventos (`addEventListener`) al `likeButton` para el evento `'click'`.
- Dentro de la función que se ejecuta al hacer clic:
  - Incrementa tu variable `likeCounter` en 1.
  - Actualiza el `textContent` de `likeCountDisplay` con el nuevo valor de `likeCounter`.
  - Llama a tu función `saveLikes()` para guardar el nuevo valor en `localStorage`.
  - **Efecto "pop"** (opcional pero divertido): Añade la clase `pop` a `likeCountDisplay`, usa `setTimeout()` para esperar un momento (ej. 200 milisegundos) y luego quita la clase `pop`. Esto hará que el número se agrande y vuelva a su tamaño normal.
  - **Opcional**: Muestra el contador en la consola (`console.log()`) para depurar.

#### Iniciar el juego
- Al final del script, llama a tu función `loadLikes()` una vez para que el contador se cargue al abrir la página.



