// ============================================
// CLASE LIBRO - DOM SIMPLE
// ============================================

class Libro {
    // Atributos
    titulo;
    ISBN;
    genero;
    autor;
    paginas;
    anio;
    
    // Constructor
    constructor(titulo, ISBN, genero, autor, paginas, anio) {
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.genero = genero;
        this.autor = autor;
        this.paginas = paginas;
        this.anio = anio;
        this.paginaActual = 0;  // Agregado para el método getInfo
        this.leido = false;     // Agregado para el método getInfo
    }
    
    // Métodos
    getInfo() {
        return {
            titulo: this.titulo,
            ISBN: this.ISBN,
            genero: this.genero,
            autor: this.autor,
            paginas: this.paginas,
            paginaActual: this.paginaActual,
            anio: this.anio,
            leido: this.leido,
        };
    }
}

// ============================================
// ELEMENTOS DOM
// ============================================

let titulo = document.getElementById("titulo");
let isbn = document.getElementById("isbn");
let genero = document.getElementById("genero");
let autor = document.getElementById("autor");
let paginas = document.getElementById("paginas");
let anio = document.getElementById("anio");

let button = document.getElementById("crear-libro");
let lista = document.getElementById("lista-libros");

// ============================================
// VARIABLES GLOBALES
// ============================================

let libros = []; // Array para almacenar todos los libros

// ============================================
// FUNCIONES PRINCIPALES
// ============================================

function crearLibro() {
    // Validar campos
    if (!titulo.value.trim() || !isbn.value.trim() || !autor.value.trim()) {
        alert("❌ ERROR: Completa todos los campos obligatorios");
        return;
    }

    if (!paginas.value || paginas.value <= 0) {
        alert("❌ ERROR: El número de páginas debe ser mayor a 0");
        return;
    }

    if (!anio.value || anio.value < 1000 || anio.value > 2024) {
        alert("❌ ERROR: El año debe estar entre 1000 y 2024");
        return;
    }

    // Crear nuevo libro
    const nuevoLibro = new Libro(
        titulo.value.trim(),
        isbn.value.trim(),
        genero.value.trim(),
        autor.value.trim(),
        parseInt(paginas.value),
        parseInt(anio.value)
    );

    // Agregar a la lista
    libros.push(nuevoLibro);

    // Actualizar interfaz
    actualizarListaLibros();
    
    // Mostrar mensaje de éxito
    alert(`✅ Libro "${nuevoLibro.titulo}" creado exitosamente`);

    // Limpiar formulario
    limpiarFormulario();
}

function actualizarListaLibros() {
    if (libros.length === 0) {
        lista.innerHTML = '<li>No hay libros creados aún.</li>';
        return;
    }

    lista.innerHTML = libros.map((libro, index) => `
        <li>
            <strong>📚 ${libro.titulo}</strong><br>
            👤 Autor: ${libro.autor}<br>
            📖 Género: ${libro.genero}<br>
            📅 Año: ${libro.anio}<br>
            📄 Páginas: ${libro.paginas}<br>
            📋 ISBN: ${libro.ISBN}<br>
            📊 Estado: ${libro.leido ? '✅ Leído' : '📖 Por leer'}<br>
            <button onclick="mostrarInfoLibro(${index})">📋 Ver Info Completa</button>
            <button onclick="marcarComoLeido(${index})">✅ Marcar Leído</button>
            <button onclick="eliminarLibro(${index})">🗑️ Eliminar</button>
        </li>
    `).join('');
}

function mostrarInfoLibro(index) {
    const libro = libros[index];
    const info = libro.getInfo();
    
    console.log(`📋 INFORMACIÓN COMPLETA DEL LIBRO "${libro.titulo}":`);
    console.log(info);
    
    alert(`📋 INFORMACIÓN COMPLETA DEL LIBRO "${libro.titulo}":\n\n${JSON.stringify(info, null, 2)}`);
}

function marcarComoLeido(index) {
    const libro = libros[index];
    libro.leido = true;
    libro.paginaActual = libro.paginas;
    
    actualizarListaLibros();
    alert(`✅ Libro "${libro.titulo}" marcado como leído`);
}

function eliminarLibro(index) {
    const libro = libros[index];
    if (confirm(`¿Estás seguro de que quieres eliminar "${libro.titulo}"?`)) {
        libros.splice(index, 1);
        actualizarListaLibros();
        alert(`🗑️ Libro "${libro.titulo}" eliminado`);
    }
}

function limpiarFormulario() {
    titulo.value = '';
    isbn.value = '';
    genero.value = '';
    autor.value = '';
    paginas.value = '';
    anio.value = '';
}

// ============================================
// EVENT LISTENERS
// ============================================

// Event listener para el botón crear libro
button.addEventListener('click', function(e) {
    e.preventDefault(); // Prevenir envío del formulario
    crearLibro();
});

// Event listener para el formulario (Enter)
document.getElementById('form').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevenir envío del formulario
    crearLibro();
});

// ============================================
// INICIALIZACIÓN
// ============================================

// Inicializar la lista vacía
actualizarListaLibros();

console.log('🎯 Aplicación iniciada - Clase Libro con DOM');
console.log('💡 Completa el formulario y haz clic en "Crear libro"');
