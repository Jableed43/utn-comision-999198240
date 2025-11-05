// ============================================
// PROMESAS Y PROGRAMACIÓN ASÍNCRONA - CLASE INICIAL
// ============================================

console.log("=== INTRODUCCIÓN A LAS PROMESAS ===\n");

// ============================================
// 1. CONCEPTO BÁSICO DE PROMESAS
// ============================================

/*
¿QUÉ ES UNA PROMESA?
Una promesa es un objeto que representa el resultado de una operación asíncrona.
Puede estar en uno de estos estados:
- PENDING (pendiente): operación en progreso
- FULFILLED (cumplida): operación exitosa
- REJECTED (rechazada): operación falló
*/

// ============================================
// 2. CREAR UNA PROMESA BÁSICA
// ============================================

function operacionAsincronica(simularExito = true) {
    return new Promise((resolve, reject) => {
        // Simulamos una operación que toma tiempo (como una petición HTTP)
        setTimeout(() => {
            if (simularExito) {
                resolve("✅ La operación fue exitosa");
            } else {
                reject("❌ La operación ha fallado");
            }
        }, 1000); // Esperamos 1 segundo
    });
}

// ============================================
// 3. USAR PROMESAS CON .then() Y .catch()
// ============================================

console.log("--- Ejemplo con .then() y .catch() ---");

operacionAsincronica(true).then(response => {
    console.log("Respuesta:", response);
}).catch(error => {
    console.log("Error:", error);
});

// ============================================
// 4. USAR PROMESAS CON async/await
// ============================================

async function ejemploAsincronico() {
    try {
        console.log("🔄 Iniciando operación asíncrona...");
        const resultado = await operacionAsincronica(true);
        console.log("📋 Resultado:", resultado);
    } catch (error) {
        console.log("🚨 Error:", error);
    }
}

console.log("--- Ejemplo con async/await ---");
ejemploAsincronico();

// ============================================
// 5. EJEMPLO PRÁCTICO: SIMULAR PETICIÓN HTTP
// ============================================

function simularPeticionHTTP(url, exito = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve({
                    url: url,
                    status: 200,
                    data: { mensaje: "Datos obtenidos correctamente", timestamp: new Date() }
                });
            } else {
                reject({
                    url: url,
                    status: 404,
                    error: "No se encontró el recurso"
                });
            }
        }, 1500);
    });
}

// Usar la petición simulada
async function obtenerDatos() {
    try {
        console.log("\n--- Simulando petición HTTP ---");
        console.log("🌐 Enviando petición...");
        
        const respuesta = await simularPeticionHTTP("https://api.ejemplo.com/datos");
        console.log("📊 Datos recibidos:", respuesta);
        
    } catch (error) {
        console.log("❌ Error en la petición:", error);
    }
}

obtenerDatos();

// ============================================
// 6. EJEMPLO: PROMESA CON MÚLTIPLES OPERACIONES
// ============================================

function procesarDatos(datos) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const datosProcesados = datos.map(item => item.toUpperCase());
            resolve(datosProcesados);
        }, 800);
    });
}

async function ejemploCompleto() {
    try {
        console.log("\n--- Ejemplo completo con múltiples operaciones ---");
        
        // Paso 1: Obtener datos
        console.log("📥 Obteniendo datos...");
        const datosOriginales = ["javascript", "promesas", "async"];
        
        // Paso 2: Procesar datos
        console.log("⚙️ Procesando datos...");
        const datosProcesados = await procesarDatos(datosOriginales);
        
        // Paso 3: Mostrar resultado
        console.log("📤 Datos procesados:", datosProcesados);
        
    } catch (error) {
        console.log("❌ Error:", error);
    }
}

ejemploCompleto();

// ============================================
// 7. MANEJO DE ERRORES CON PROMESAS
// ============================================

async function ejemploConErrores() {
    try {
        console.log("\n--- Ejemplo con manejo de errores ---");
        
        // Intentar operación que falla
        await operacionAsincronica(false);
        
    } catch (error) {
        console.log("🚨 Error capturado:", error);
        console.log("💡 Continuando con el programa...");
    }
    
    // Continuar con otra operación
    console.log("✅ Programa continúa normalmente");
}

ejemploConErrores();

// ============================================
// 8. COMPARACIÓN: SINCRÓNICO VS ASÍNCRONO
// ============================================

console.log("\n--- Comparación Síncrono vs Asíncrono ---");

// Código síncrono (se ejecuta inmediatamente)
console.log("1️⃣ Este mensaje aparece primero (síncrono)");

// Código asíncrono (se ejecuta después)
setTimeout(() => {
    console.log("3️⃣ Este mensaje aparece tercero (asíncrono)");
}, 0);

console.log("2️⃣ Este mensaje aparece segundo (síncrono)");

// ============================================
// 9. EJEMPLO PRÁCTICO: CARGAR RECURSOS
// ============================================

function cargarRecurso(nombreRecurso, tiempoCarga = 1000) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(`📁 Recurso '${nombreRecurso}' cargado exitosamente`);
        }, tiempoCarga);
    });
}

async function cargarRecursos() {
    console.log("\n--- Cargando recursos ---");
    
    try {
        const recurso1 = await cargarRecurso("imagenes", 500);
        console.log(recurso1);
        
        const recurso2 = await cargarRecurso("estilos", 300);
        console.log(recurso2);
        
        const recurso3 = await cargarRecurso("scripts", 200);
        console.log(recurso3);
        
        console.log("🎉 Todos los recursos cargados!");
        
    } catch (error) {
        console.log("❌ Error cargando recursos:", error);
    }
}

cargarRecursos();

console.log("\n=== FIN DEL EJEMPLO DE PROMESAS ===");
console.log("💡 Observa cómo los mensajes aparecen en orden diferente debido a la naturaleza asíncrona");