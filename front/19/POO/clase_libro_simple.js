// ============================================
// CLASE LIBRO - POO SIMPLIFICADA
// ============================================

console.log("=== CLASE LIBRO ===\n");

// ============================================
// CLASE LIBRO
// ============================================

class Libro {
    // Atributos
    titulo;
    ISBN;
    genero;
    autor;
    paginas;
    paginaActual;
    anio;
    leido;
    
    // Constructor
    constructor(titulo, ISBN, genero, autor, paginas, anio) {
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.genero = genero;
        this.autor = autor;
        this.paginas = paginas;
        this.paginaActual = 0;        // Corregido: inicializado en 0
        this.anio = anio;
        this.leido = false;
    }
    
    // Métodos
    leer(paginasLeidas = 1) {
        this.paginaActual += paginasLeidas;
        console.log(`📖 Leyendo ${paginasLeidas} páginas de "${this.titulo}"`);
        console.log(`   Progreso: ${this.paginaActual}/${this.paginas} páginas`);
        
        if (this.paginaActual >= this.paginas) {
            this.marcarComoLeido();
        }
    }
    
    marcarComoLeido() {
        this.leido = true;
        console.log(`✅ Libro "${this.titulo}" marcado como leído`);
    }
    
    getInfo() {
        const info = {
            titulo: this.titulo,
            ISBN: this.ISBN,
            genero: this.genero,
            autor: this.autor,
            paginas: this.paginas,
            paginaActual: this.paginaActual,
            anio: this.anio,
            leido: this.leido,
            progreso: Math.round((this.paginaActual / this.paginas) * 100)
        };
        
        console.log("📋 Información del libro:");
        console.log(JSON.stringify(info, null, 2));
        return info;
    }
    
    // Método adicional para mostrar información básica
    mostrarInfo() {
        console.log(`📚 Libro: "${this.titulo}"`);
        console.log(`   Autor: ${this.autor}`);
        console.log(`   Género: ${this.genero}`);
        console.log(`   Año: ${this.anio}`);
        console.log(`   Estado: ${this.leido ? '✅ Leído' : '📖 Por leer'}`);
        console.log(`   Progreso: ${this.paginaActual}/${this.paginas} páginas (${Math.round((this.paginaActual / this.paginas) * 100)}%)`);
    }
}

// ============================================
// DEMOSTRACIÓN DE USO
// ============================================

console.log("=== CREANDO LIBRO ===\n");

// Crear un libro
const libro = new Libro(
    "Cien años de soledad",
    "978-84-376-0494-7",
    "Realismo mágico",
    "Gabriel García Márquez",
    496,
    1967
);

console.log("Libro creado:");
libro.mostrarInfo();

// ============================================
// SIMULACIÓN DE LECTURA
// ============================================

console.log("\n=== SIMULANDO LECTURA ===\n");

// Leer varias páginas
libro.leer(50);
libro.leer(100);
libro.leer(150);
libro.leer(100);
libro.leer(96); // Termina el libro

console.log("\n=== INFORMACIÓN FINAL ===");
libro.getInfo();

// ============================================
// CREAR MÁS LIBROS
// ============================================

console.log("\n=== CREANDO MÁS LIBROS ===\n");

const libro2 = new Libro(
    "Rayuela",
    "978-84-376-0123-4",
    "Novela experimental",
    "Julio Cortázar",
    736,
    1963
);

const libro3 = new Libro(
    "La ciudad y los perros",
    "978-84-376-0456-7",
    "Novela",
    "Mario Vargas Llosa",
    320,
    1963
);

console.log("Libros adicionales:");
libro2.mostrarInfo();
console.log();
libro3.mostrarInfo();

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Función para crear un libro rápidamente
function crearLibro(titulo, ISBN, genero, autor, paginas, anio) {
    return new Libro(titulo, ISBN, genero, autor, paginas, anio);
}

// Función para simular lectura completa de un libro
function leerLibroCompleto(libro) {
    console.log(`\n📖 Iniciando lectura completa de "${libro.titulo}"`);
    
    while (!libro.leido) {
        const paginasRestantes = libro.paginas - libro.paginaActual;
        const paginasALeer = Math.min(50, paginasRestantes);
        libro.leer(paginasALeer);
    }
    
    console.log(`🎉 ¡Lectura completa terminada!`);
}

// ============================================
// EJEMPLO DE USO DE FUNCIONES AUXILIARES
// ============================================

console.log("\n=== USANDO FUNCIONES AUXILIARES ===\n");

// Crear un nuevo libro usando la función auxiliar
const ficciones = crearLibro(
    "Ficciones",
    "978-84-376-0789-0",
    "Cuentos",
    "Jorge Luis Borges",
    200,
    1944
);

console.log("Nuevo libro creado:");
ficciones.mostrarInfo();

// Simular lectura completa
leerLibroCompleto(ficciones);

// ============================================
// RESUMEN FINAL
// ============================================

console.log("\n=== RESUMEN FINAL ===\n");

console.log("📚 Libros creados:");
console.log(`   1. "${libro.titulo}" - ${libro.autor}`);
console.log(`   2. "${libro2.titulo}" - ${libro2.autor}`);
console.log(`   3. "${libro3.titulo}" - ${libro3.autor}`);
console.log(`   4. "${ficciones.titulo}" - ${ficciones.autor}`);

console.log("\n📖 Estado de lectura:");
console.log(`   ✅ Libros leídos: ${[libro, libro2, libro3, ficciones].filter(l => l.leido).length}`);
console.log(`   📖 Libros por leer: ${[libro, libro2, libro3, ficciones].filter(l => !l.leido).length}`);

console.log("\n=== FIN DEL EJEMPLO ===");
