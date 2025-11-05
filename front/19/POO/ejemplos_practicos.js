// ============================================
// EJEMPLOS PRÁCTICOS ADICIONALES - POO
// ============================================

console.log("=== EJEMPLOS PRÁCTICOS ADICIONALES ===\n");

// ============================================
// EJEMPLO 1: CLASE LIBRO CON HERENCIA
// ============================================

class Libro {
    constructor(titulo, autor, paginas, año) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.año = año;
        this.leido = false;
        this.paginaActual = 0;
    }

    leer(paginasLeidas = 1) {
        this.paginaActual += paginasLeidas;
        console.log(`📖 Leyendo ${paginasLeidas} páginas de "${this.titulo}"`);
        
        if (this.paginaActual >= this.paginas) {
            this.marcarComoLeido();
        }
    }

    marcarComoLeido() {
        this.leido = true;
        console.log(`✅ Libro "${this.titulo}" marcado como leído`);
    }

    mostrarInfo() {
        console.log(`\n📚 INFORMACIÓN DEL LIBRO:`);
        console.log(`   Título: ${this.titulo}`);
        console.log(`   Autor: ${this.autor}`);
        console.log(`   Páginas: ${this.paginas}`);
        console.log(`   Año: ${this.año}`);
        console.log(`   Estado: ${this.leido ? '✅ Leído' : '📖 En progreso'}`);
        console.log(`   Progreso: ${this.paginaActual}/${this.paginas} páginas\n`);
    }
}

// Clase hija para libros técnicos
class LibroTecnico extends Libro {
    constructor(titulo, autor, paginas, año, tecnologia, nivel) {
        super(titulo, autor, paginas, año);
        this.tecnologia = tecnologia;
        this.nivel = nivel; // principiante, intermedio, avanzado
        this.ejerciciosCompletados = 0;
    }

    completarEjercicio() {
        this.ejerciciosCompletados++;
        console.log(`💻 Ejercicio completado en "${this.titulo}". Total: ${this.ejerciciosCompletados}`);
    }

    mostrarInfo() {
        super.mostrarInfo();
        console.log(`   Tecnología: ${this.tecnologia}`);
        console.log(`   Nivel: ${this.nivel}`);
        console.log(`   Ejercicios completados: ${this.ejerciciosCompletados}\n`);
    }
}

// ============================================
// EJEMPLO 2: CLASE CUENTA BANCARIA CON ENCAPSULACIÓN
// ============================================

class CuentaBancaria {
    constructor(titular, numeroCuenta, saldoInicial = 0) {
        this.titular = titular;
        this.numeroCuenta = numeroCuenta;
        this._saldo = saldoInicial; // Propiedad privada
        this._movimientos = []; // Historial de movimientos
        this.activa = true;
    }

    // Getter para saldo
    get saldo() {
        return this._saldo;
    }

    // Método para depositar
    depositar(cantidad, concepto = "Depósito") {
        if (!this.activa) {
            console.log("❌ La cuenta está inactiva");
            return false;
        }

        if (cantidad <= 0) {
            console.log("❌ La cantidad debe ser mayor a 0");
            return false;
        }

        this._saldo += cantidad;
        this._registrarMovimiento("DEPÓSITO", cantidad, concepto);
        console.log(`💰 Depósito de $${cantidad.toLocaleString()} realizado`);
        console.log(`   Nuevo saldo: $${this._saldo.toLocaleString()}`);
        return true;
    }

    // Método para retirar
    retirar(cantidad, concepto = "Retiro") {
        if (!this.activa) {
            console.log("❌ La cuenta está inactiva");
            return false;
        }

        if (cantidad <= 0) {
            console.log("❌ La cantidad debe ser mayor a 0");
            return false;
        }

        if (cantidad > this._saldo) {
            console.log("❌ Saldo insuficiente");
            return false;
        }

        this._saldo -= cantidad;
        this._registrarMovimiento("RETIRO", -cantidad, concepto);
        console.log(`💸 Retiro de $${cantidad.toLocaleString()} realizado`);
        console.log(`   Nuevo saldo: $${this._saldo.toLocaleString()}`);
        return true;
    }

    // Método privado para registrar movimientos
    _registrarMovimiento(tipo, cantidad, concepto) {
        const movimiento = {
            fecha: new Date().toLocaleString(),
            tipo: tipo,
            cantidad: cantidad,
            concepto: concepto,
            saldoAnterior: this._saldo - cantidad,
            saldoNuevo: this._saldo
        };
        this._movimientos.push(movimiento);
    }

    // Consultar saldo
    consultarSaldo() {
        console.log(`\n💳 CUENTA DE ${this.titular.toUpperCase()}`);
        console.log(`   Número: ${this.numeroCuenta}`);
        console.log(`   Saldo actual: $${this._saldo.toLocaleString()}`);
        console.log(`   Estado: ${this.activa ? '✅ Activa' : '❌ Inactiva'}\n`);
    }

    // Ver historial de movimientos
    verHistorial() {
        console.log(`\n📋 HISTORIAL DE MOVIMIENTOS - ${this.titular}`);
        console.log("=" .repeat(60));
        
        if (this._movimientos.length === 0) {
            console.log("No hay movimientos registrados");
        } else {
            this._movimientos.forEach((mov, index) => {
                const signo = mov.cantidad > 0 ? "+" : "";
                console.log(`${index + 1}. ${mov.fecha}`);
                console.log(`   ${mov.tipo}: ${signo}$${mov.cantidad.toLocaleString()}`);
                console.log(`   Concepto: ${mov.concepto}`);
                console.log(`   Saldo: $${mov.saldoNuevo.toLocaleString()}\n`);
            });
        }
    }

    // Activar/desactivar cuenta
    cambiarEstado() {
        this.activa = !this.activa;
        console.log(`Cuenta ${this.activa ? 'activada' : 'desactivada'}`);
    }
}

// ============================================
// EJEMPLO 3: CLASE PRODUCTO CON MÉTODOS ESTÁTICOS
// ============================================

class Producto {
    constructor(nombre, precio, categoria, stock = 0) {
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.stock = stock;
        this.id = Producto.generarId(); // Usa método estático
    }

    // Método estático para generar IDs únicos
    static generarId() {
        return Math.random().toString(36).substr(2, 9);
    }

    // Método estático para calcular descuento
    static calcularDescuento(precio, porcentaje) {
        return precio * (1 - porcentaje / 100);
    }

    // Verificar stock
    hayStock(cantidad = 1) {
        return this.stock >= cantidad;
    }

    // Vender producto
    vender(cantidad = 1) {
        if (this.hayStock(cantidad)) {
            this.stock -= cantidad;
            const total = this.precio * cantidad;
            console.log(`🛒 Vendidos ${cantidad} ${this.nombre} por $${total.toLocaleString()}`);
            console.log(`   Stock restante: ${this.stock}`);
            return total;
        } else {
            console.log(`❌ No hay suficiente stock de ${this.nombre}`);
            return 0;
        }
    }

    // Reponer stock
    reponer(cantidad) {
        this.stock += cantidad;
        console.log(`📦 Repuestos ${cantidad} ${this.nombre}. Stock total: ${this.stock}`);
    }

    // Aplicar descuento
    aplicarDescuento(porcentaje) {
        const precioOriginal = this.precio;
        this.precio = Producto.calcularDescuento(this.precio, porcentaje);
        console.log(`🏷️ Descuento del ${porcentaje}% aplicado a ${this.nombre}`);
        console.log(`   Precio original: $${precioOriginal.toLocaleString()}`);
        console.log(`   Precio con descuento: $${this.precio.toLocaleString()}`);
    }

    mostrarInfo() {
        console.log(`\n📦 PRODUCTO: ${this.nombre.toUpperCase()}`);
        console.log(`   ID: ${this.id}`);
        console.log(`   Precio: $${this.precio.toLocaleString()}`);
        console.log(`   Categoría: ${this.categoria}`);
        console.log(`   Stock: ${this.stock} unidades\n`);
    }
}

// ============================================
// EJEMPLO 4: CLASE TIENDA CON ARRAY DE PRODUCTOS
// ============================================

class Tienda {
    constructor(nombre, direccion) {
        this.nombre = nombre;
        this.direccion = direccion;
        this.productos = [];
        this.ventas = [];
    }

    // Agregar producto
    agregarProducto(producto) {
        this.productos.push(producto);
        console.log(`✅ Producto "${producto.nombre}" agregado a la tienda`);
    }

    // Buscar producto por nombre
    buscarProducto(nombre) {
        return this.productos.find(producto => 
            producto.nombre.toLowerCase().includes(nombre.toLowerCase())
        );
    }

    // Vender producto
    venderProducto(nombreProducto, cantidad = 1) {
        const producto = this.buscarProducto(nombreProducto);
        
        if (!producto) {
            console.log(`❌ Producto "${nombreProducto}" no encontrado`);
            return false;
        }

        const total = producto.vender(cantidad);
        if (total > 0) {
            this.ventas.push({
                producto: producto.nombre,
                cantidad: cantidad,
                total: total,
                fecha: new Date().toLocaleString()
            });
        }
        return total > 0;
    }

    // Mostrar inventario
    mostrarInventario() {
        console.log(`\n🏪 INVENTARIO DE ${this.nombre.toUpperCase()}`);
        console.log(`📍 Dirección: ${this.direccion}`);
        console.log("=" .repeat(50));
        
        if (this.productos.length === 0) {
            console.log("No hay productos en el inventario");
        } else {
            this.productos.forEach((producto, index) => {
                console.log(`${index + 1}. ${producto.nombre} - $${producto.precio.toLocaleString()} (Stock: ${producto.stock})`);
            });
        }
        console.log(`\nTotal de productos: ${this.productos.length}\n`);
    }

    // Mostrar ventas
    mostrarVentas() {
        console.log(`\n💰 VENTAS DE ${this.nombre.toUpperCase()}`);
        console.log("=" .repeat(50));
        
        if (this.ventas.length === 0) {
            console.log("No hay ventas registradas");
        } else {
            let totalVentas = 0;
            this.ventas.forEach((venta, index) => {
                console.log(`${index + 1}. ${venta.fecha}`);
                console.log(`   ${venta.producto} x${venta.cantidad} = $${venta.total.toLocaleString()}`);
                totalVentas += venta.total;
            });
            console.log(`\n💰 Total de ventas: $${totalVentas.toLocaleString()}`);
        }
        console.log();
    }
}

// ============================================
// DEMOSTRACIÓN DE LOS EJEMPLOS
// ============================================

console.log("=== DEMOSTRACIÓN DE EJEMPLOS ===\n");

// Ejemplo 1: Libros
console.log("--- EJEMPLO 1: LIBROS ---");
const libro1 = new Libro("El Quijote", "Miguel de Cervantes", 863, 1605);
const libroTecnico = new LibroTecnico("JavaScript Avanzado", "Juan Pérez", 400, 2023, "JavaScript", "avanzado");

libro1.mostrarInfo();
libro1.leer(50);
libro1.leer(50);
libro1.mostrarInfo();

libroTecnico.mostrarInfo();
libroTecnico.completarEjercicio();
libroTecnico.completarEjercicio();

// Ejemplo 2: Cuenta Bancaria
console.log("--- EJEMPLO 2: CUENTA BANCARIA ---");
const cuenta = new CuentaBancaria("Juan Pérez", "123456789", 100000);

cuenta.consultarSaldo();
cuenta.depositar(50000, "Sueldo");
cuenta.retirar(25000, "Compra");
cuenta.depositar(15000, "Reembolso");
cuenta.verHistorial();

// Ejemplo 3: Productos
console.log("--- EJEMPLO 3: PRODUCTOS ---");
const producto1 = new Producto("Laptop", 1500000, "Electrónicos", 10);
const producto2 = new Producto("Mouse", 25000, "Electrónicos", 50);

producto1.mostrarInfo();
producto1.vender(2);
producto1.aplicarDescuento(15);
producto1.mostrarInfo();

producto2.reponer(20);
producto2.vender(5);

// Ejemplo 4: Tienda
console.log("--- EJEMPLO 4: TIENDA ---");
const miTienda = new Tienda("TechStore", "Av. Principal 123");

miTienda.agregarProducto(producto1);
miTienda.agregarProducto(producto2);
miTienda.mostrarInventario();

miTienda.venderProducto("Laptop", 1);
miTienda.venderProducto("Mouse", 3);
miTienda.mostrarVentas();

console.log("=== FIN DE EJEMPLOS PRÁCTICOS ===");
