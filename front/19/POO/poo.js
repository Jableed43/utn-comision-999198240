// ============================================
// PROGRAMACIÓN ORIENTADA A OBJETOS (POO) - CLASE INICIAL
// ============================================

console.log("=== INTRODUCCIÓN A LA PROGRAMACIÓN ORIENTADA A OBJETOS ===\n");

// ============================================
// 1. CONCEPTOS BÁSICOS DE POO
// ============================================

/*
CONCEPTOS FUNDAMENTALES:
- CLASE: Plantilla o molde para crear objetos
- OBJETO: Instancia específica de una clase
- ATRIBUTOS/PROPIEDADES: Características del objeto
- MÉTODOS: Acciones que puede realizar el objeto
- CONSTRUCTOR: Método especial que se ejecuta al crear un objeto
*/

// ============================================
// 2. CLASE AUTO - EJEMPLO MEJORADO
// ============================================

class Auto {
    // Atributos con valores por defecto (opcional)
    encendido = false;
    velocidad = 0;
    kilometraje = 0;
    
    // Constructor - método especial que se ejecuta al crear un objeto
    constructor(marca, modelo, año, categoria, km, color, cilindrada_motor, combustible, gnc, precio, cantPuertas) {
        // Validación de parámetros
        if (!marca || !modelo || !año) {
            throw new Error("Marca, modelo y año son obligatorios");
        }
        
        // Inicialización de propiedades
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
        this.categoria = categoria || "sedan";
        this.kilometraje = km || 0;
        this.color = color || "blanco";
        this.cilindrada_motor = cilindrada_motor || 1.0;
        this.combustible = combustible || "nafta";
        this.gnc = gnc || false;
        this.precio = precio || 0;
        this.cantPuertas = cantPuertas || 4;
        
        console.log(`✅ Auto ${this.marca} ${this.modelo} ${this.año} creado exitosamente`);
    }

    // ============================================
    // MÉTODOS DE LA CLASE AUTO
    // ============================================

    // Método para encender/apagar el auto
    encenderApagar() {
        if (this.encendido === false) {
            this.encendido = true;
            console.log(`🚗 El ${this.marca} ${this.modelo} se ha encendido`);
            return true;
        } else {
            this.encendido = false;
            this.velocidad = 0; // Al apagar, la velocidad vuelve a 0
            console.log(`🔴 El ${this.marca} ${this.modelo} se ha apagado`);
            return false;
        }
    }

    // Método para cambiar el color del auto
    cambiarColor(nuevoColor) {
        if (!nuevoColor) {
            console.log("❌ Debes especificar un color válido");
            return false;
        }
        
        const colorAnterior = this.color;
        this.color = nuevoColor;
        console.log(`🎨 El ${this.marca} ${this.modelo} cambió de ${colorAnterior} a ${nuevoColor}`);
        return this.color;
    }

    // Método para acelerar
    acelerar(incrementoVelocidad) {
        if (!this.encendido) {
            console.log("❌ Debes encender el auto para poder acelerar");
            return false;
        }
        
        if (incrementoVelocidad <= 0) {
            console.log("❌ El incremento de velocidad debe ser mayor a 0");
            return false;
        }
        
        this.velocidad += Number(incrementoVelocidad);
        this.kilometraje += incrementoVelocidad * 0.1; // Simula recorrido
        
        console.log(`🚀 El ${this.marca} ${this.modelo} aceleró ${incrementoVelocidad} km/h. Velocidad actual: ${this.velocidad} km/h`);
        return this.velocidad;
    }

    // Método para frenar
    frenar(decrementoVelocidad) {
        if (!this.encendido) {
            console.log("❌ Debes encender el auto para poder frenar");
            return false;
        }
        
        if (decrementoVelocidad <= 0) {
            console.log("❌ El decremento de velocidad debe ser mayor a 0");
            return false;
        }
        
        this.velocidad = Math.max(0, this.velocidad - Number(decrementoVelocidad));
        console.log(`🛑 El ${this.marca} ${this.modelo} frenó ${decrementoVelocidad} km/h. Velocidad actual: ${this.velocidad} km/h`);
        return this.velocidad;
    }

    // Método para obtener información del auto
    obtenerInformacion() {
        return {
            marca: this.marca,
            modelo: this.modelo,
            año: this.año,
            categoria: this.categoria,
            color: this.color,
            velocidad: this.velocidad,
            kilometraje: this.kilometraje,
            encendido: this.encendido,
            precio: this.precio
        };
    }

    // Método para mostrar estado actual
    mostrarEstado() {
        const estado = this.encendido ? "🟢 ENCENDIDO" : "🔴 APAGADO";
        console.log(`\n📊 ESTADO DEL ${this.marca.toUpperCase()} ${this.modelo.toUpperCase()}:`);
        console.log(`   Estado: ${estado}`);
        console.log(`   Velocidad: ${this.velocidad} km/h`);
        console.log(`   Kilometraje: ${this.kilometraje.toFixed(1)} km`);
        console.log(`   Color: ${this.color}`);
        console.log(`   Precio: $${this.precio.toLocaleString()}\n`);
    }
}

// ============================================
// 3. CREACIÓN DE OBJETOS (INSTANCIAS)
// ============================================

console.log("=== CREANDO OBJETOS ===\n");

// Crear instancias de la clase Auto
const fiatSiena = new Auto("Fiat", "Siena", 2005, "sedan", 200000, "gris", 1.6, "nafta", true, 4000000, 4);
const volkswagenGol = new Auto("Volkswagen", "Gol", 2013, "hatchback", 70000, "blanco", 1.6, "nafta", false, 7000000, 3);
const toyotaCorolla = new Auto("Toyota", "Corolla", 2020, "sedan", 15000, "azul", 2.0, "nafta", false, 15000000, 4);

// ============================================
// 4. USO DE LOS MÉTODOS
// ============================================

console.log("=== USANDO LOS MÉTODOS ===\n");

// Ejemplo con el Fiat Siena
console.log("--- Probando con Fiat Siena ---");
fiatSiena.mostrarEstado();
fiatSiena.encenderApagar();
fiatSiena.acelerar(50);
fiatSiena.acelerar(30);
fiatSiena.frenar(20);
fiatSiena.cambiarColor("rojo");
fiatSiena.mostrarEstado();

console.log("--- Probando con Volkswagen Gol ---");
volkswagenGol.mostrarEstado();
volkswagenGol.encenderApagar();
volkswagenGol.acelerar(80);
volkswagenGol.frenar(25);
volkswagenGol.mostrarEstado();

// ============================================
// 5. EJEMPLO DE HERENCIA - CLASE AUTO DEPORTIVO
// ============================================

console.log("=== HERENCIA - AUTO DEPORTIVO ===\n");

class AutoDeportivo extends Auto {
    constructor(marca, modelo, año, categoria, km, color, cilindrada_motor, combustible, gnc, precio, cantPuertas, turbo, potencia) {
        // Llamar al constructor de la clase padre
        super(marca, modelo, año, categoria, km, color, cilindrada_motor, combustible, gnc, precio, cantPuertas);
        
        // Propiedades específicas del auto deportivo
        this.turbo = turbo || false;
        this.potencia = potencia || 200;
        this.modoDeportivo = false;
    }

    // Método específico para activar modo deportivo
    activarModoDeportivo() {
        if (!this.encendido) {
            console.log("❌ Debes encender el auto para activar el modo deportivo");
            return false;
        }
        
        this.modoDeportivo = true;
        console.log(`🏎️ Modo deportivo activado en ${this.marca} ${this.modelo}! Potencia aumentada a ${this.potencia + 50} HP`);
        return true;
    }

    // Sobrescribir el método acelerar para modo deportivo
    acelerar(incrementoVelocidad) {
        if (this.modoDeportivo) {
            incrementoVelocidad *= 1.5; // 50% más rápido en modo deportivo
            console.log("🏎️ Modo deportivo: aceleración mejorada!");
        }
        return super.acelerar(incrementoVelocidad);
    }

    // Método específico para mostrar información del deportivo
    mostrarEstado() {
        super.mostrarEstado();
        console.log(`   Turbo: ${this.turbo ? "✅" : "❌"}`);
        console.log(`   Potencia: ${this.potencia} HP`);
        console.log(`   Modo Deportivo: ${this.modoDeportivo ? "🏎️ ACTIVO" : "❌ INACTIVO"}`);
    }
}

// Crear un auto deportivo
const ferrariF40 = new AutoDeportivo("Ferrari", "F40", 1987, "superdeportivo", 50000, "rojo", 2.9, "nafta", false, 50000000, 2, true, 478);

console.log("--- Probando Auto Deportivo ---");
ferrariF40.mostrarEstado();
ferrariF40.encenderApagar();
ferrariF40.activarModoDeportivo();
ferrariF40.acelerar(100);
ferrariF40.mostrarEstado();

// ============================================
// 6. EJEMPLO DE ENCAPSULACIÓN CON GETTERS Y SETTERS
// ============================================

console.log("=== ENCAPSULACIÓN CON GETTERS Y SETTERS ===\n");

class AutoSeguro extends Auto {
    constructor(marca, modelo, año, categoria, km, color, cilindrada_motor, combustible, gnc, precio, cantPuertas) {
        super(marca, modelo, año, categoria, km, color, cilindrada_motor, combustible, gnc, precio, cantPuertas);
        this._precio = precio; // Propiedad privada (convención)
    }

    // Getter para precio
    get precio() {
        return this._precio;
    }

    // Setter para precio con validación
    set precio(nuevoPrecio) {
        if (nuevoPrecio < 0) {
            console.log("❌ El precio no puede ser negativo");
            return;
        }
        this._precio = nuevoPrecio;
        console.log(`💰 Precio actualizado a $${nuevoPrecio.toLocaleString()}`);
    }
}

const autoSeguro = new AutoSeguro("BMW", "X5", 2021, "SUV", 10000, "negro", 3.0, "nafta", false, 25000000, 5);
console.log(`Precio actual: $${autoSeguro.precio.toLocaleString()}`);
autoSeguro.precio = 30000000; // Usando el setter
autoSeguro.precio = -1000; // Intentando precio negativo

// ============================================
// 7. ARRAY DE OBJETOS Y MÉTODOS ESTÁTICOS
// ============================================

console.log("=== ARRAY DE OBJETOS Y MÉTODOS ESTÁTICOS ===\n");

class Concesionaria {
    static autos = [];

    // Método estático para agregar auto
    static agregarAuto(auto) {
        this.autos.push(auto);
        console.log(`✅ ${auto.marca} ${auto.modelo} agregado a la concesionaria`);
    }

    // Método estático para mostrar todos los autos
    static mostrarInventario() {
        console.log("\n📋 INVENTARIO DE LA CONCESIONARIA:");
        console.log("=" .repeat(50));
        
        this.autos.forEach((auto, index) => {
            console.log(`${index + 1}. ${auto.marca} ${auto.modelo} ${auto.año} - $${auto.precio.toLocaleString()}`);
        });
        
        console.log(`\nTotal de autos: ${this.autos.length}`);
    }

    // Método estático para buscar por marca
    static buscarPorMarca(marca) {
        return this.autos.filter(auto => 
            auto.marca.toLowerCase().includes(marca.toLowerCase())
        );
    }
}

// Agregar autos a la concesionaria
Concesionaria.agregarAuto(fiatSiena);
Concesionaria.agregarAuto(volkswagenGol);
Concesionaria.agregarAuto(toyotaCorolla);
Concesionaria.agregarAuto(ferrariF40);
Concesionaria.agregarAuto(autoSeguro);

Concesionaria.mostrarInventario();

// Buscar autos por marca
console.log("\n🔍 Buscando autos de marca 'Volkswagen':");
const autosVolkswagen = Concesionaria.buscarPorMarca("Volkswagen");
autosVolkswagen.forEach(auto => {
    console.log(`- ${auto.marca} ${auto.modelo} ${auto.año}`);
});

console.log("\n=== FIN DEL EJEMPLO DE POO ===");