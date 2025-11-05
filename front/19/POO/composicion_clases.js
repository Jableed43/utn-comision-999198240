// ============================================
// COMPOSICIÓN DE CLASES - AUTOR, EDITORIAL Y LIBRO
// ============================================

console.log("=== COMPOSICIÓN DE CLASES ===\n");

// ============================================
// CLASE AUTOR
// ============================================

class Autor {
    constructor(nombre, nacionalidad, añoNacimiento) {
        this.nombre = nombre;
        this.nacionalidad = nacionalidad;
        this.añoNacimiento = añoNacimiento;
        this.librosEscritos = [];
    }

    // Método para agregar un libro a la lista del autor
    agregarLibro(libro) {
        this.librosEscritos.push(libro);
        console.log(`📚 "${libro.titulo}" agregado a la bibliografía de ${this.nombre}`);
    }

    // Mostrar información del autor
    mostrarInfo() {
        console.log(`\n👤 AUTOR: ${this.nombre.toUpperCase()}`);
        console.log(`   Nacionalidad: ${this.nacionalidad}`);
        console.log(`   Año de nacimiento: ${this.añoNacimiento}`);
        console.log(`   Libros escritos: ${this.librosEscritos.length}`);
    }

    // Mostrar bibliografía completa
    mostrarBibliografia() {
        console.log(`\n📖 BIBLIOGRAFÍA DE ${this.nombre.toUpperCase()}:`);
        if (this.librosEscritos.length === 0) {
            console.log("   No hay libros registrados");
        } else {
            this.librosEscritos.forEach((libro, index) => {
                console.log(`   ${index + 1}. "${libro.titulo}" (${libro.año})`);
            });
        }
    }
}

// ============================================
// CLASE EDITORIAL
// ============================================

class Editorial {
    constructor(nombre, pais, añoFundacion) {
        this.nombre = nombre;
        this.pais = pais;
        this.añoFundacion = añoFundacion;
        this.librosPublicados = [];
        this.autoresContratados = [];
    }

    // Método para publicar un libro
    publicarLibro(libro) {
        this.librosPublicados.push(libro);
        console.log(`📖 "${libro.titulo}" publicado por ${this.nombre}`);
    }

    // Método para contratar un autor
    contratarAutor(autor) {
        this.autoresContratados.push(autor);
        console.log(`✍️ ${autor.nombre} contratado por ${this.nombre}`);
    }

    // Mostrar información de la editorial
    mostrarInfo() {
        console.log(`\n🏢 EDITORIAL: ${this.nombre.toUpperCase()}`);
        console.log(`   País: ${this.pais}`);
        console.log(`   Año de fundación: ${this.añoFundacion}`);
        console.log(`   Libros publicados: ${this.librosPublicados.length}`);
        console.log(`   Autores contratados: ${this.autoresContratados.length}`);
    }

    // Mostrar catálogo de libros
    mostrarCatalogo() {
        console.log(`\n📚 CATÁLOGO DE ${this.nombre.toUpperCase()}:`);
        if (this.librosPublicados.length === 0) {
            console.log("   No hay libros en el catálogo");
        } else {
            this.librosPublicados.forEach((libro, index) => {
                console.log(`   ${index + 1}. "${libro.titulo}" - ${libro.autor.nombre} (${libro.año})`);
            });
        }
    }

    // Mostrar autores contratados
    mostrarAutores() {
        console.log(`\n👥 AUTORES DE ${this.nombre.toUpperCase()}:`);
        if (this.autoresContratados.length === 0) {
            console.log("   No hay autores contratados");
        } else {
            this.autoresContratados.forEach((autor, index) => {
                console.log(`   ${index + 1}. ${autor.nombre} (${autor.nacionalidad})`);
            });
        }
    }
}

// ============================================
// CLASE LIBRO (CON COMPOSICIÓN)
// ============================================

class Libro {
    constructor(titulo, autor, editorial, año, paginas) {
        this.titulo = titulo;
        this.autor = autor;           // COMPOSICIÓN: El libro TIENE un autor
        this.editorial = editorial;   // COMPOSICIÓN: El libro TIENE una editorial
        this.año = año;
        this.paginas = paginas;
        this.leido = false;
        this.paginaActual = 0;
        
        // Notificar a autor y editorial sobre el libro
        if (autor) {
            autor.agregarLibro(this);
        }
        if (editorial) {
            editorial.publicarLibro(this);
        }
    }

    // Método simplificado para leer
    leer(paginasLeidas = 1) {
        this.paginaActual += paginasLeidas;
        console.log(`📖 Leyendo ${paginasLeidas} páginas de "${this.titulo}"`);
        
        if (this.paginaActual >= this.paginas) {
            this.marcarComoLeido();
        }
    }

    // Marcar como leído
    marcarComoLeido() {
        this.leido = true;
        console.log(`✅ Libro "${this.titulo}" marcado como leído`);
    }

    // Mostrar información completa del libro
    mostrarInfo() {
        console.log(`\n📚 LIBRO: "${this.titulo.toUpperCase()}"`);
        console.log(`   Autor: ${this.autor ? this.autor.nombre : 'Desconocido'}`);
        console.log(`   Editorial: ${this.editorial ? this.editorial.nombre : 'Desconocida'}`);
        console.log(`   Año: ${this.año}`);
        console.log(`   Páginas: ${this.paginas}`);
        console.log(`   Estado: ${this.leido ? '✅ Leído' : '📖 Por leer'}`);
        console.log(`   Progreso: ${this.paginaActual}/${this.paginas} páginas`);
    }

    // Método para cambiar editorial
    cambiarEditorial(nuevaEditorial) {
        const editorialAnterior = this.editorial;
        this.editorial = nuevaEditorial;
        
        if (nuevaEditorial) {
            nuevaEditorial.publicarLibro(this);
        }
        
        console.log(`📖 "${this.titulo}" cambió de ${editorialAnterior ? editorialAnterior.nombre : 'sin editorial'} a ${nuevaEditorial ? nuevaEditorial.nombre : 'sin editorial'}`);
    }
}

// ============================================
// DEMOSTRACIÓN DE COMPOSICIÓN
// ============================================

console.log("=== CREANDO AUTORES ===");

// Crear autores
const autor1 = new Autor("Gabriel García Márquez", "Colombia", 1927);
const autor2 = new Autor("Julio Cortázar", "Argentina", 1914);
const autor3 = new Autor("Mario Vargas Llosa", "Perú", 1936);

autor1.mostrarInfo();
autor2.mostrarInfo();

console.log("\n=== CREANDO EDITORIALES ===");

// Crear editoriales
const editorial1 = new Editorial("Alfaguara", "España", 1964);
const editorial2 = new Editorial("Sudamericana", "Argentina", 1939);
const editorial3 = new Editorial("Planeta", "España", 1949);

editorial1.mostrarInfo();
editorial2.mostrarInfo();

console.log("\n=== CREANDO LIBROS CON COMPOSICIÓN ===");

// Crear libros (la composición se establece automáticamente)
const libro1 = new Libro(
    "Cien años de soledad",
    autor1,        // COMPOSICIÓN: El libro contiene un autor
    editorial1,    // COMPOSICIÓN: El libro contiene una editorial
    1967,
    471
);

const libro2 = new Libro(
    "Rayuela",
    autor2,
    editorial2,
    1963,
    736
);

const libro3 = new Libro(
    "La ciudad y los perros",
    autor3,
    editorial1,
    1963,
    320
);

console.log("\n=== MOSTRANDO INFORMACIÓN DE LIBROS ===");

libro1.mostrarInfo();
libro2.mostrarInfo();
libro3.mostrarInfo();

console.log("\n=== DEMOSTRANDO COMPOSICIÓN ===");

// Mostrar cómo la composición afecta a autor y editorial
autor1.mostrarBibliografia();
editorial1.mostrarCatalogo();
editorial1.mostrarAutores();

console.log("\n=== SIMULANDO LECTURA ===");

// Simular lectura de libros
libro1.leer(100);
libro1.leer(200);
libro1.leer(171); // Termina el libro

libro2.leer(50);

console.log("\n=== CAMBIANDO EDITORIAL ===");

// Demostrar cambio de editorial
libro3.cambiarEditorial(editorial3);
editorial3.mostrarCatalogo();

console.log("\n=== RESUMEN DE COMPOSICIÓN ===");

console.log("\n🎯 CONCEPTOS DEMOSTRADOS:");
console.log("✅ COMPOSICIÓN: Un libro TIENE un autor y una editorial");
console.log("✅ RELACIONES: Los objetos se relacionan entre sí");
console.log("✅ ENCAPSULACIÓN: Cada clase maneja su propia información");
console.log("✅ REUTILIZACIÓN: Las clases se pueden usar independientemente");

console.log("\n📊 ESTADÍSTICAS FINALES:");
console.log(`   📚 Total libros: 3`);
console.log(`   👤 Total autores: 3`);
console.log(`   🏢 Total editoriales: 3`);
console.log(`   📖 Libros leídos: ${[libro1, libro2, libro3].filter(l => l.leido).length}`);

console.log("\n=== FIN DEL EJEMPLO DE COMPOSICIÓN ===");
