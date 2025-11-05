// ============================================
// EJEMPLOS PRÁCTICOS ADICIONALES - PROMESAS
// ============================================

console.log("=== EJEMPLOS PRÁCTICOS ADICIONALES ===\n");

// ============================================
// EJEMPLO 1: SIMULADOR DE CARGAR IMÁGENES
// ============================================

function cargarImagen(url, tiempoSimulado = 2000) {
    return new Promise((resolve, reject) => {
        console.log(`🖼️ Cargando imagen: ${url}`);
        
        setTimeout(() => {
            // Simulamos éxito/fallo aleatorio
            const exito = Math.random() > 0.3; // 70% de éxito
            
            if (exito) {
                resolve({
                    url: url,
                    cargada: true,
                    tamaño: Math.floor(Math.random() * 1000) + 100 // KB
                });
            } else {
                reject(`❌ Error cargando imagen: ${url}`);
            }
        }, tiempoSimulado);
    });
}

// Usar el simulador de imágenes
async function cargarGaleria() {
    const imagenes = [
        "foto1.jpg",
        "foto2.jpg", 
        "foto3.jpg"
    ];
    
    console.log("--- Cargando galería de imágenes ---");
    
    for (const imagen of imagenes) {
        try {
            const resultado = await cargarImagen(imagen, 1000);
            console.log(`✅ ${resultado.url} cargada (${resultado.tamaño} KB)`);
        } catch (error) {
            console.log(error);
        }
    }
    
    console.log("🎉 Carga de galería completada\n");
}

cargarGaleria();

// ============================================
// EJEMPLO 2: SIMULADOR DE API CON REINTENTOS
// ============================================

function llamarAPI(endpoint, reintentos = 3) {
    return new Promise((resolve, reject) => {
        console.log(`🌐 Llamando API: ${endpoint}`);
        
        setTimeout(() => {
            // Simulamos diferentes tipos de respuesta
            const numeroAleatorio = Math.random();
            
            if (numeroAleatorio > 0.7) {
                // Éxito
                resolve({
                    endpoint: endpoint,
                    status: 200,
                    data: { mensaje: "Datos obtenidos correctamente", timestamp: new Date() }
                });
            } else if (numeroAleatorio > 0.4) {
                // Error temporal (se puede reintentar)
                reject({
                    endpoint: endpoint,
                    status: 500,
                    error: "Error temporal del servidor",
                    reintentar: true
                });
            } else {
                // Error permanente
                reject({
                    endpoint: endpoint,
                    status: 404,
                    error: "Recurso no encontrado",
                    reintentar: false
                });
            }
        }, 1500);
    });
}

// Función con reintentos automáticos
async function llamarAPIConReintentos(endpoint, maxReintentos = 3) {
    for (let intento = 1; intento <= maxReintentos; intento++) {
        try {
            console.log(`🔄 Intento ${intento}/${maxReintentos} para ${endpoint}`);
            const resultado = await llamarAPI(endpoint);
            console.log(`✅ Éxito en intento ${intento}:`, resultado);
            return resultado;
        } catch (error) {
            console.log(`❌ Intento ${intento} falló:`, error.error);
            
            if (!error.reintentar || intento === maxReintentos) {
                console.log(`🚫 No se puede reintentar ${endpoint}`);
                throw error;
            }
            
            // Esperar antes del siguiente intento
            console.log(`⏳ Esperando antes del siguiente intento...`);
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
}

// Probar la API con reintentos
async function probarAPI() {
    console.log("--- Probando API con reintentos ---");
    
    try {
        const resultado = await llamarAPIConReintentos("/api/usuarios", 3);
        console.log("🎉 API llamada exitosamente:", resultado);
    } catch (error) {
        console.log("💥 Todos los intentos fallaron:", error);
    }
    
    console.log();
}

probarAPI();

// ============================================
// EJEMPLO 3: PROCESADOR DE ARCHIVOS SIMULADO
// ============================================

function procesarArchivo(nombreArchivo, tipoProcesamiento = "normal") {
    return new Promise((resolve, reject) => {
        console.log(`📁 Procesando archivo: ${nombreArchivo}`);
        
        // Simular diferentes tiempos según el tipo
        let tiempoProcesamiento;
        switch (tipoProcesamiento) {
            case "rapido":
                tiempoProcesamiento = 500;
                break;
            case "normal":
                tiempoProcesamiento = 1500;
                break;
            case "lento":
                tiempoProcesamiento = 3000;
                break;
            default:
                tiempoProcesamiento = 1500;
        }
        
        setTimeout(() => {
            // Simular éxito/fallo
            const exito = Math.random() > 0.2; // 80% de éxito
            
            if (exito) {
                resolve({
                    archivo: nombreArchivo,
                    procesado: true,
                    tamañoOriginal: Math.floor(Math.random() * 5000) + 1000,
                    tamañoProcesado: Math.floor(Math.random() * 3000) + 500,
                    tipo: tipoProcesamiento
                });
            } else {
                reject(`❌ Error procesando archivo: ${nombreArchivo}`);
            }
        }, tiempoProcesamiento);
    });
}

// Procesar múltiples archivos
async function procesarLoteArchivos() {
    const archivos = [
        { nombre: "documento1.pdf", tipo: "normal" },
        { nombre: "imagen1.jpg", tipo: "rapido" },
        { nombre: "video1.mp4", tipo: "lento" },
        { nombre: "audio1.mp3", tipo: "normal" }
    ];
    
    console.log("--- Procesando lote de archivos ---");
    
    const resultados = [];
    const errores = [];
    
    for (const archivo of archivos) {
        try {
            const resultado = await procesarArchivo(archivo.nombre, archivo.tipo);
            resultados.push(resultado);
            console.log(`✅ ${resultado.archivo} procesado (${resultado.tipo})`);
        } catch (error) {
            errores.push(error);
            console.log(error);
        }
    }
    
    console.log(`\n📊 Resumen del procesamiento:`);
    console.log(`   ✅ Archivos procesados: ${resultados.length}`);
    console.log(`   ❌ Archivos con error: ${errores.length}`);
    console.log(`   📁 Total archivos: ${archivos.length}\n`);
    
    return { resultados, errores };
}

procesarLoteArchivos();

// ============================================
// EJEMPLO 4: SIMULADOR DE NOTIFICACIONES
// ============================================

function enviarNotificacion(mensaje, tipo = "info") {
    return new Promise((resolve, reject) => {
        console.log(`📱 Enviando notificación ${tipo}: ${mensaje}`);
        
        setTimeout(() => {
            // Simular diferentes tipos de respuesta
            const exito = Math.random() > 0.1; // 90% de éxito
            
            if (exito) {
                resolve({
                    mensaje: mensaje,
                    tipo: tipo,
                    enviada: true,
                    timestamp: new Date(),
                    id: Math.random().toString(36).substr(2, 9)
                });
            } else {
                reject(`❌ Error enviando notificación: ${mensaje}`);
            }
        }, 800);
    });
}

// Enviar múltiples notificaciones
async function enviarNotificaciones() {
    const notificaciones = [
        { mensaje: "Nuevo mensaje recibido", tipo: "mensaje" },
        { mensaje: "Recordatorio: Reunión en 15 min", tipo: "recordatorio" },
        { mensaje: "Actualización disponible", tipo: "sistema" },
        { mensaje: "¡Feliz cumpleaños!", tipo: "celebración" }
    ];
    
    console.log("--- Enviando notificaciones ---");
    
    const notificacionesEnviadas = [];
    
    for (const notif of notificaciones) {
        try {
            const resultado = await enviarNotificacion(notif.mensaje, notif.tipo);
            notificacionesEnviadas.push(resultado);
            console.log(`✅ Notificación enviada: ${resultado.id}`);
        } catch (error) {
            console.log(error);
        }
    }
    
    console.log(`\n📱 Total notificaciones enviadas: ${notificacionesEnviadas.length}\n`);
}

enviarNotificaciones();

// ============================================
// EJEMPLO 5: SIMULADOR DE DESCARGA DE ARCHIVOS
// ============================================

function descargarArchivo(url, tamañoMB = 10) {
    return new Promise((resolve, reject) => {
        console.log(`⬇️ Iniciando descarga: ${url}`);
        console.log(`📏 Tamaño: ${tamañoMB} MB`);
        
        // Simular progreso de descarga
        let progreso = 0;
        const intervalo = setInterval(() => {
            progreso += Math.random() * 20; // Progreso aleatorio
            
            if (progreso >= 100) {
                progreso = 100;
                clearInterval(intervalo);
                
                // Simular éxito/fallo al final
                const exito = Math.random() > 0.15; // 85% de éxito
                
                if (exito) {
                    resolve({
                        url: url,
                        descargado: true,
                        tamaño: tamañoMB,
                        ubicacion: `/downloads/${url.split('/').pop()}`,
                        progreso: 100
                    });
                } else {
                    reject(`❌ Error en la descarga: ${url}`);
                }
            } else {
                console.log(`📊 Progreso: ${progreso.toFixed(1)}%`);
            }
        }, 200);
    });
}

// Descargar múltiples archivos
async function descargarArchivos() {
    const archivos = [
        { url: "https://ejemplo.com/documento.pdf", tamaño: 5 },
        { url: "https://ejemplo.com/imagen.jpg", tamaño: 2 },
        { url: "https://ejemplo.com/video.mp4", tamaño: 50 }
    ];
    
    console.log("--- Descargando archivos ---");
    
    for (const archivo of archivos) {
        try {
            const resultado = await descargarArchivo(archivo.url, archivo.tamaño);
            console.log(`✅ Descarga completada: ${resultado.ubicacion}`);
        } catch (error) {
            console.log(error);
        }
    }
    
    console.log("🎉 Proceso de descarga completado\n");
}

descargarArchivos();

// ============================================
// EJEMPLO 6: COMPARACIÓN DE MÉTODOS
// ============================================

console.log("--- Comparación: .then() vs async/await ---");

// Método 1: Con .then()
function ejemploConThen() {
    console.log("🔄 Usando .then():");
    
    cargarImagen("ejemplo1.jpg", 1000)
        .then(resultado => {
            console.log("✅ Imagen cargada:", resultado.url);
            return cargarImagen("ejemplo2.jpg", 1000);
        })
        .then(resultado => {
            console.log("✅ Segunda imagen cargada:", resultado.url);
            return cargarImagen("ejemplo3.jpg", 1000);
        })
        .then(resultado => {
            console.log("✅ Tercera imagen cargada:", resultado.url);
            console.log("🎉 Todas las imágenes cargadas con .then()");
        })
        .catch(error => {
            console.log("❌ Error:", error);
        });
}

// Método 2: Con async/await
async function ejemploConAsyncAwait() {
    console.log("\n🔄 Usando async/await:");
    
    try {
        const imagen1 = await cargarImagen("ejemplo4.jpg", 1000);
        console.log("✅ Imagen cargada:", imagen1.url);
        
        const imagen2 = await cargarImagen("ejemplo5.jpg", 1000);
        console.log("✅ Segunda imagen cargada:", imagen2.url);
        
        const imagen3 = await cargarImagen("ejemplo6.jpg", 1000);
        console.log("✅ Tercera imagen cargada:", imagen3.url);
        
        console.log("🎉 Todas las imágenes cargadas con async/await");
    } catch (error) {
        console.log("❌ Error:", error);
    }
}

// Ejecutar ambos ejemplos
ejemploConThen();
setTimeout(() => ejemploConAsyncAwait(), 5000);

console.log("\n=== FIN DE EJEMPLOS PRÁCTICOS ===");
console.log("💡 Observa cómo ambos métodos logran el mismo resultado pero con sintaxis diferente");
