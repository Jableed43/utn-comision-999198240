// ============================================
// CLASES POO - PERSONA, AUTOR Y LIBRO
// ============================================

console.log("=== CLASES POO - PERSONA, AUTOR Y LIBRO ===\n");

// ============================================
// CLASE PERSONA (CLASE BASE)
// ============================================

class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    
    // Método para mostrar información básica
    mostrarInfo() {
        console.log(`👤 Persona: ${this.nombre}`);
    }
}

// ============================================
// CLASE AUTOR (HEREDA DE PERSONA)
// ============================================

class Autor extends Persona {
    constructor(nombre, nacionalidad) {
        super(nombre); // Llama al constructor de la clase padre
        this.nacionalidad = nacionalidad;
    }
    
    // Método específico del autor
    mostrarInfo() {
        console.log(`✍️ Autor: ${this.nombre} (${this.nacionalidad})`);
    }
    
    // Método para obtener información completa
    getInfo() {
        return {
            nombre: this.nombre,
            nacionalidad: this.nacionalidad,
            tipo: 'Autor'
        };
    }
}

// ============================================
// CLASE LIBRO (CON COMPOSICIÓN)
// ============================================

class Libro {
    constructor(titulo, ISBN, genero, autor, paginas, anio) {
        this.titulo = titulo;
        this.ISBN = ISBN;
        this.genero = genero;
        this.autor = autor;           // COMPOSICIÓN: El libro TIENE un autor
        this.paginas = paginas;
        this.paginaActual = 0;        // Corregido: inicializado en 0
        this.anio = anio;
        this.leido = false;
    }
    
    // Método para leer páginas
    leer(paginasLeidas = 1) {
        this.paginaActual += paginasLeidas;
        console.log(`📖 Leyendo ${paginasLeidas} páginas de "${this.titulo}"`);
        console.log(`   Progreso: ${this.paginaActual}/${this.paginas} páginas`);
        
        if (this.paginaActual >= this.paginas) {
            this.marcarComoLeido();
        }
    }
    
    // Método para marcar como leído
    marcarComoLeido() {
        this.leido = true;
        console.log(`✅ Libro "${this.titulo}" marcado como leído`);
    }
    
    // Método para obtener información completa
    getInfo() {
        const info = {
            titulo: this.titulo,
            ISBN: this.ISBN,
            genero: this.genero,
            autor: this.autor.getInfo(), // Usa el método del autor
            paginas: this.paginas,
            paginaActual: this.paginaActual,
            anio: this.anio,
            leido: this.leido,
            progreso: Math.round((this.paginaActual / this.paginas) * 100)
        };
        
        console.log("📋 Información completa del libro:");
        console.log(JSON.stringify(info, null, 2));
        return info;
    }
    
    // Método para mostrar información básica
    mostrarInfo() {
        console.log(`📚 Libro: "${this.titulo}"`);
        console.log(`   Autor: ${this.autor.nombre}`);
        console.log(`   Género: ${this.genero}`);
        console.log(`   Año: ${this.anio}`);
        console.log(`   Estado: ${this.leido ? '✅ Leído' : '📖 Por leer'}`);
        console.log(`   Progreso: ${this.paginaActual}/${this.paginas} páginas (${Math.round((this.paginaActual / this.paginas) * 100)}%)`);
    }
    
    // Método para obtener progreso como porcentaje
    getProgreso() {
        return Math.round((this.paginaActual / this.paginas) * 100);
    }
    
    // Método para verificar si está leído
    estaLeido() {
        return this.leido;
    }
}

// ============================================
// DEMOSTRACIÓN DE USO
// ============================================

console.log("=== CREANDO OBJETOS ===\n");

// Crear un autor (hereda de Persona)
const garciaMarquez = new Autor("Gabriel García Márquez", "Colombia");
console.log("Autor creado:");
garciaMarquez.mostrarInfo();

// Crear un libro (composición con Autor)
const aniosDeSoledad = new Libro(
    "Cien años de soledad",
    "978-84-376-0494-7",
    "Realismo mágico",
    garciaMarquez,
    496,
    1967
);

console.log("\nLibro creado:");
aniosDeSoledad.mostrarInfo();

// ============================================
// SIMULACIÓN DE LECTURA
// ============================================

console.log("\n=== SIMULANDO LECTURA ===\n");

// Leer varias páginas
aniosDeSoledad.leer(50);
aniosDeSoledad.leer(100);
aniosDeSoledad.leer(150);
aniosDeSoledad.leer(100);
aniosDeSoledad.leer(96); // Termina el libro

console.log("\n=== INFORMACIÓN FINAL ===");
aniosDeSoledad.getInfo();

// ============================================
// DEMOSTRACIÓN DE HERENCIA
// ============================================

console.log("\n=== DEMOSTRANDO HERENCIA ===\n");

// Crear más autores para demostrar herencia
const cortazar = new Autor("Julio Cortázar", "Argentina");
const vargasLlosa = new Autor("Mario Vargas Llosa", "Perú");

console.log("Autores creados:");
cortazar.mostrarInfo();
vargasLlosa.mostrarInfo();

// Crear más libros
const rayuela = new Libro(
    "Rayuela",
    "978-84-376-0123-4",
    "Novela experimental",
    cortazar,
    736,
    1963
);

const ciudadPerros = new Libro(
    "La ciudad y los perros",
    "978-84-376-0456-7",
    "Novela",
    vargasLlosa,
    320,
    1963
);

console.log("\nLibros adicionales:");
rayuela.mostrarInfo();
ciudadPerros.mostrarInfo();

// ============================================
// DEMOSTRACIÓN DE COMPOSICIÓN
// ============================================

console.log("\n=== DEMOSTRANDO COMPOSICIÓN ===\n");

// Mostrar cómo cada libro tiene su propio autor
console.log("Relaciones de composición:");
console.log(`"${aniosDeSoledad.titulo}" fue escrito por ${aniosDeSoledad.autor.nombre}`);
console.log(`"${rayuela.titulo}" fue escrito por ${rayuela.autor.nombre}`);
console.log(`"${ciudadPerros.titulo}" fue escrito por ${ciudadPerros.autor.nombre}`);

// ============================================
// FUNCIONES AUXILIARES
// ============================================

// Función para crear un autor rápidamente
function crearAutor(nombre, nacionalidad) {
    return new Autor(nombre, nacionalidad);
}

// Función para crear un libro rápidamente
function crearLibro(titulo, ISBN, genero, autor, paginas, anio) {
    return new Libro(titulo, ISBN, genero, autor, paginas, anio);
}

// Función para simular lectura completa de un libro
function leerLibroCompleto(libro) {
    console.log(`\n📖 Iniciando lectura completa de "${libro.titulo}"`);
    
    while (!libro.estaLeido()) {
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

// Crear un nuevo autor y libro usando las funciones auxiliares
const borges = crearAutor("Jorge Luis Borges", "Argentina");
const ficciones = crearLibro(
    "Ficciones",
    "978-84-376-0789-0",
    "Cuentos",
    borges,
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

console.log("\n=== RESUMEN DE CONCEPTOS POO DEMOSTRADOS ===\n");

console.log("✅ HERENCIA:");
console.log("   - Autor extiende de Persona");
console.log("   - Autor hereda la propiedad 'nombre'");
console.log("   - Autor puede sobrescribir métodos del padre");

console.log("\n✅ COMPOSICIÓN:");
console.log("   - Libro TIENE un Autor (relación HAS-A)");
console.log("   - Cada libro contiene una referencia a su autor");
console.log("   - Los objetos se relacionan entre sí");

console.log("\n✅ ENCAPSULACIÓN:");
console.log("   - Cada clase maneja su propia información");
console.log("   - Métodos públicos para interactuar con los objetos");
console.log("   - Datos internos protegidos");

console.log("\n✅ POLIMORFISMO:");
console.log("   - Diferentes autores pueden tener diferentes comportamientos");
console.log("   - El método mostrarInfo() se comporta diferente en cada clase");

console.log("\n🎯 TOTAL DE OBJETOS CREADOS:");
console.log(`   👤 Autores: 4 (García Márquez, Cortázar, Vargas Llosa, Borges)`);
console.log(`   📚 Libros: 4 (Cien años de soledad, Rayuela, La ciudad y los perros, Ficciones)`);
console.log(`   📖 Libros leídos: ${[aniosDeSoledad, rayuela, ciudadPerros, ficciones].filter(l => l.estaLeido()).length}`);

console.log("\n=== FIN DEL EJEMPLO ===");
