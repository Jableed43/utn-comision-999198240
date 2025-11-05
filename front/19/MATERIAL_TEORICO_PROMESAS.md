# 📚 PROMESAS Y PROGRAMACIÓN ASÍNCRONA - MATERIAL TEÓRICO

## 🎯 ¿Qué es la Programación Asíncrona?

La **programación asíncrona** permite que tu código continúe ejecutándose mientras espera que se completen operaciones que toman tiempo, como:
- 📡 Peticiones a servidores (APIs)
- 📁 Lectura de archivos
- 🖼️ Carga de imágenes
- ⏱️ Operaciones que requieren tiempo

### 🤔 ¿Por qué necesitamos programación asíncrona?

**Sin programación asíncrona:**
```javascript
// ❌ MALO: Bloquea toda la aplicación
const datos = obtenerDatosDelServidor(); // La app se congela aquí
console.log("Esto nunca se ejecuta hasta que termine la petición");
```

**Con programación asíncrona:**
```javascript
// ✅ BUENO: No bloquea la aplicación
obtenerDatosDelServidor().then(datos => {
    console.log("Datos recibidos:", datos);
});
console.log("Esto se ejecuta inmediatamente");
```

---

## 🔄 ¿Qué es una Promesa?

Una **Promesa** es un objeto que representa el resultado de una operación asíncrona. Es como un "vale" que te promete que en el futuro tendrás un resultado.

### 📊 Estados de una Promesa

Una promesa puede estar en uno de estos estados:

1. **🔄 PENDING (Pendiente)**: La operación está en progreso
2. **✅ FULFILLED (Cumplida)**: La operación fue exitosa
3. **❌ REJECTED (Rechazada)**: La operación falló

```javascript
// Crear una promesa
const miPromesa = new Promise((resolve, reject) => {
    // resolve() cambia el estado a FULFILLED
    // reject() cambia el estado a REJECTED
});
```

---

## 🛠️ Cómo Crear una Promesa

### Estructura Básica

```javascript
function miOperacionAsincronica() {
    return new Promise((resolve, reject) => {
        // Tu código aquí
        
        if (todoSalioBien) {
            resolve("Resultado exitoso");
        } else {
            reject("Algo salió mal");
        }
    });
}
```

### Ejemplo Práctico

```javascript
function cargarImagen(url) {
    return new Promise((resolve, reject) => {
        const img = new Image();
        
        img.onload = () => resolve(img); // ✅ Éxito
        img.onerror = () => reject("Error cargando imagen"); // ❌ Error
        
        img.src = url;
    });
}
```

---

## 🎯 Cómo Usar Promesas

### Método 1: `.then()` y `.catch()`

```javascript
miOperacionAsincronica()
    .then(resultado => {
        console.log("Éxito:", resultado);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```

**Ventajas:**
- ✅ Fácil de entender
- ✅ Manejo de errores claro
- ✅ Funciona en navegadores antiguos

**Desventajas:**
- ❌ Puede crear "callback hell" con muchas promesas
- ❌ Menos legible con operaciones complejas

### Método 2: `async/await`

```javascript
async function miFuncion() {
    try {
        const resultado = await miOperacionAsincronica();
        console.log("Éxito:", resultado);
    } catch (error) {
        console.log("Error:", error);
    }
}
```

**Ventajas:**
- ✅ Código más legible y limpio
- ✅ Fácil manejo de errores con try/catch
- ✅ Se parece más al código síncrono

**Desventajas:**
- ❌ Requiere funciones marcadas como `async`
- ❌ No funciona en navegadores muy antiguos

---

## 🔄 Comparación: Síncrono vs Asíncrono

### Código Síncrono (Bloqueante)

```javascript
console.log("1. Inicio");
const datos = obtenerDatos(); // ⏸️ La app se pausa aquí
console.log("2. Datos:", datos);
console.log("3. Fin");

// Salida:
// 1. Inicio
// (espera...)
// 2. Datos: [datos]
// 3. Fin
```

### Código Asíncrono (No Bloqueante)

```javascript
console.log("1. Inicio");
obtenerDatos().then(datos => {
    console.log("2. Datos:", datos);
});
console.log("3. Fin");

// Salida:
// 1. Inicio
// 3. Fin
// (después de un tiempo...)
// 2. Datos: [datos]
```

---

## 🎯 Casos de Uso Comunes

### 1. 📡 Peticiones HTTP (APIs)

```javascript
async function obtenerUsuarios() {
    try {
        const respuesta = await fetch('https://api.ejemplo.com/usuarios');
        const usuarios = await respuesta.json();
        return usuarios;
    } catch (error) {
        console.log("Error obteniendo usuarios:", error);
    }
}
```

### 2. 📁 Carga de Archivos

```javascript
function leerArchivo(archivo) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        
        reader.onload = () => resolve(reader.result);
        reader.onerror = () => reject("Error leyendo archivo");
        
        reader.readAsText(archivo);
    });
}
```

### 3. ⏱️ Operaciones con Tiempo

```javascript
function esperar(segundos) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(`Esperé ${segundos} segundos`);
        }, segundos * 1000);
    });
}

// Uso
esperar(3).then(mensaje => console.log(mensaje));
```

---

## 🚨 Manejo de Errores

### Con `.catch()`

```javascript
miPromesa()
    .then(resultado => {
        console.log("Éxito:", resultado);
    })
    .catch(error => {
        console.log("Error:", error);
        // Manejar el error aquí
    });
```

### Con `try/catch` y `async/await`

```javascript
async function manejarErrores() {
    try {
        const resultado = await miPromesa();
        console.log("Éxito:", resultado);
    } catch (error) {
        console.log("Error:", error);
        // Manejar el error aquí
    }
}
```

### Errores Comunes

```javascript
// ❌ MALO: No manejar errores
miPromesa().then(resultado => console.log(resultado));

// ✅ BUENO: Siempre manejar errores
miPromesa()
    .then(resultado => console.log(resultado))
    .catch(error => console.log("Error:", error));
```

---

## 🔗 Encadenar Promesas

### Múltiples Operaciones Secuenciales

```javascript
// Con .then()
obtenerUsuario(1)
    .then(usuario => obtenerPosts(usuario.id))
    .then(posts => obtenerComentarios(posts[0].id))
    .then(comentarios => console.log(comentarios))
    .catch(error => console.log("Error:", error));

// Con async/await
async function obtenerDatosCompletos() {
    try {
        const usuario = await obtenerUsuario(1);
        const posts = await obtenerPosts(usuario.id);
        const comentarios = await obtenerComentarios(posts[0].id);
        console.log(comentarios);
    } catch (error) {
        console.log("Error:", error);
    }
}
```

---

## 🎯 Buenas Prácticas

### ✅ **Siempre Manejar Errores**

```javascript
// ❌ MALO
fetch('/api/datos').then(response => console.log(response));

// ✅ BUENO
fetch('/api/datos')
    .then(response => console.log(response))
    .catch(error => console.log("Error:", error));
```

### ✅ **Usar async/await para Código Más Limpio**

```javascript
// ❌ MALO: Callback hell
obtenerDatos()
    .then(datos => {
        procesarDatos(datos)
            .then(resultado => {
                guardarResultado(resultado)
                    .then(() => console.log("Listo"));
            });
    });

// ✅ BUENO: async/await
async function procesoCompleto() {
    const datos = await obtenerDatos();
    const resultado = await procesarDatos(datos);
    await guardarResultado(resultado);
    console.log("Listo");
}
```

### ✅ **Validar Datos Antes de Usarlos**

```javascript
async function obtenerUsuario(id) {
    try {
        const respuesta = await fetch(`/api/usuarios/${id}`);
        
        if (!respuesta.ok) {
            throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`);
        }
        
        const usuario = await respuesta.json();
        return usuario;
    } catch (error) {
        console.log("Error obteniendo usuario:", error);
        return null;
    }
}
```

---

## 🎓 Ejercicios Prácticos

### 📝 **Ejercicio 1: Simulador de Carga**

Crea una función que simule cargar datos con diferentes tiempos:

```javascript
function cargarDatos(tiempo, exito = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (exito) {
                resolve(`Datos cargados en ${tiempo}ms`);
            } else {
                reject(`Error cargando datos`);
            }
        }, tiempo);
    });
}

// Usar la función
cargarDatos(1000)
    .then(resultado => console.log(resultado))
    .catch(error => console.log(error));
```

### 📝 **Ejercicio 2: Múltiples Peticiones**

Crea una función que haga múltiples peticiones y espere a que todas terminen:

```javascript
async function cargarTodosLosDatos() {
    try {
        const datos1 = await cargarDatos(500);
        const datos2 = await cargarDatos(300);
        const datos3 = await cargarDatos(800);
        
        console.log("Todos los datos cargados:", [datos1, datos2, datos3]);
    } catch (error) {
        console.log("Error:", error);
    }
}
```

### 📝 **Ejercicio 3: Manejo de Errores**

Crea una función que intente cargar datos y maneje diferentes tipos de errores:

```javascript
async function cargarConReintentos(maxReintentos = 3) {
    for (let i = 0; i < maxReintentos; i++) {
        try {
            const datos = await cargarDatos(1000, Math.random() > 0.5);
            console.log("Datos cargados exitosamente:", datos);
            return datos;
        } catch (error) {
            console.log(`Intento ${i + 1} falló:`, error);
            if (i === maxReintentos - 1) {
                throw new Error("Todos los intentos fallaron");
            }
        }
    }
}
```

---

## 🚀 Ventajas de las Promesas

### ✅ **No Bloquean la Aplicación**
- La interfaz sigue respondiendo
- Mejor experiencia de usuario
- Aplicaciones más fluidas

### ✅ **Manejo de Errores Mejorado**
- Errores claros y específicos
- Fácil depuración
- Código más robusto

### ✅ **Código Más Legible**
- Especialmente con async/await
- Flujo de ejecución claro
- Menos "callback hell"

### ✅ **Reutilización**
- Funciones que devuelven promesas son reutilizables
- Fácil composición de operaciones
- Código modular

---

## 📚 Recursos Adicionales

### 🔗 **Enlaces Útiles**
- [MDN - Promises](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN - async/await](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [JavaScript.info - Promises](https://es.javascript.info/promise-basics)

### 📖 **Conceptos Relacionados**
- **Fetch API** para peticiones HTTP
- **Async/Await** para código más limpio
- **Promise.all()** para múltiples promesas
- **Generators** para operaciones complejas

---

## 🎯 Resumen

Las **Promesas** son fundamentales para la programación asíncrona en JavaScript:

1. **Representan** operaciones que toman tiempo
2. **No bloquean** la ejecución del código
3. **Manejan errores** de manera elegante
4. **Mejoran** la experiencia del usuario
5. **Hacen el código** más mantenible

### 🎓 **Conceptos Clave a Recordar**

- **Promesa**: Objeto que representa una operación asíncrona
- **resolve()**: Marca la promesa como exitosa
- **reject()**: Marca la promesa como fallida
- **.then()**: Maneja el éxito
- **.catch()**: Maneja los errores
- **async/await**: Sintaxis moderna para promesas

### 💡 **Tip Final**

> **"Una promesa es como un vale que te garantiza que en el futuro tendrás un resultado, ya sea exitoso o fallido."**

Recuerda: **La práctica hace al maestro**. ¡Empieza con ejemplos simples y ve aumentando la complejidad gradualmente!

---

*📅 Material creado para clase inicial de Promesas - UTN*
