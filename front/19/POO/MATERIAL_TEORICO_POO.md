# 📚 PROGRAMACIÓN ORIENTADA A OBJETOS (POO) - MATERIAL TEÓRICO

## 🎯 ¿Qué es la Programación Orientada a Objetos?

La **Programación Orientada a Objetos (POO)** es un paradigma de programación que organiza el código en torno a **objetos** que contienen tanto datos (atributos) como código (métodos). Es como crear "plantillas" que definen cómo deben comportarse ciertos elementos de tu programa.

### 🤔 ¿Por qué usar POO?

- **Organización**: El código es más fácil de entender y mantener
- **Reutilización**: Puedes crear múltiples objetos de la misma clase
- **Escalabilidad**: Fácil agregar nuevas funcionalidades
- **Abstracción**: Te enfocas en qué hace el objeto, no en cómo lo hace internamente

---

## 🏗️ CONCEPTOS FUNDAMENTALES

### 1. **CLASE** 📋
Una clase es como un **molde** o **plantilla** que define:
- Qué características tendrán los objetos (atributos)
- Qué acciones podrán realizar (métodos)

```javascript
class Auto {
    // Atributos
    marca = "";
    modelo = "";
    
    // Métodos
    encender() { /* código */ }
    acelerar() { /* código */ }
}
```

### 2. **OBJETO** 🚗
Un objeto es una **instancia específica** de una clase. Es como crear un auto real usando el molde.

```javascript
const miAuto = new Auto("Toyota", "Corolla");
```

### 3. **ATRIBUTOS/PROPIEDADES** 🏷️
Son las **características** que describen al objeto.

```javascript
class Auto {
    marca = "Toyota";      // Atributo
    modelo = "Corolla";    // Atributo
    color = "azul";        // Atributo
}
```

### 4. **MÉTODOS** ⚙️
Son las **acciones** que puede realizar el objeto.

```javascript
class Auto {
    encender() {
        console.log("El auto se encendió");
    }
    
    acelerar(velocidad) {
        console.log(`Acelerando a ${velocidad} km/h`);
    }
}
```

### 5. **CONSTRUCTOR** 🔧
Es un método especial que se ejecuta **automáticamente** cuando creas un objeto.

```javascript
class Auto {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
        console.log(`Auto ${marca} ${modelo} creado`);
    }
}
```

---

## 🎨 PILARES DE LA POO

### 1. **ENCAPSULACIÓN** 📦
Consiste en **ocultar** los detalles internos del objeto y solo exponer lo necesario.

```javascript
class Auto {
    constructor(precio) {
        this._precio = precio; // Propiedad "privada"
    }
    
    // Método público para obtener precio
    getPrecio() {
        return this._precio;
    }
    
    // Método público para cambiar precio
    setPrecio(nuevoPrecio) {
        if (nuevoPrecio > 0) {
            this._precio = nuevoPrecio;
        }
    }
}
```

### 2. **HERENCIA** 👨‍👩‍👧‍👦
Permite crear nuevas clases basadas en clases existentes, **heredando** sus características.

```javascript
// Clase padre
class Vehiculo {
    constructor(marca, modelo) {
        this.marca = marca;
        this.modelo = modelo;
    }
    
    arrancar() {
        console.log("El vehículo arrancó");
    }
}

// Clase hija
class Auto extends Vehiculo {
    constructor(marca, modelo, puertas) {
        super(marca, modelo); // Llama al constructor padre
        this.puertas = puertas;
    }
    
    abrirPuertas() {
        console.log(`Abriendo ${this.puertas} puertas`);
    }
}
```

### 3. **POLIMORFISMO** 🎭
Permite que diferentes objetos respondan de manera diferente al mismo mensaje.

```javascript
class Animal {
    hacerSonido() {
        console.log("El animal hace un sonido");
    }
}

class Perro extends Animal {
    hacerSonido() {
        console.log("Guau guau!"); // Sobrescribe el método padre
    }
}

class Gato extends Animal {
    hacerSonido() {
        console.log("Miau miau!"); // Sobrescribe el método padre
    }
}
```

### 4. **ABSTRACCIÓN** 🎯
Se enfoca en las características **esenciales** del objeto, ocultando los detalles innecesarios.

```javascript
class Calculadora {
    // Solo expone los métodos necesarios
    sumar(a, b) {
        return a + b;
    }
    
    restar(a, b) {
        return a - b;
    }
    
    // Los detalles internos están ocultos
}
```

---

## 🛠️ BUENAS PRÁCTICAS

### ✅ **NOMENCLATURA**
- **Clases**: PascalCase (`MiClase`)
- **Métodos**: camelCase (`miMetodo`)
- **Atributos**: camelCase (`miAtributo`)
- **Constantes**: UPPER_CASE (`MI_CONSTANTE`)

### ✅ **VALIDACIÓN**
Siempre valida los datos de entrada:

```javascript
constructor(edad) {
    if (edad < 0) {
        throw new Error("La edad no puede ser negativa");
    }
    this.edad = edad;
}
```

### ✅ **DOCUMENTACIÓN**
Comenta tu código para explicar qué hace cada método:

```javascript
/**
 * Calcula el área de un rectángulo
 * @param {number} ancho - El ancho del rectángulo
 * @param {number} alto - La altura del rectángulo
 * @returns {number} El área calculada
 */
calcularArea(ancho, alto) {
    return ancho * alto;
}
```

### ✅ **MÉTODOS ESTÁTICOS**
Para funcionalidades que no necesitan una instancia:

```javascript
class Matematica {
    static sumar(a, b) {
        return a + b;
    }
}

// Se usa sin crear objeto
const resultado = Matematica.sumar(5, 3);
```

---

## 🎯 EJEMPLOS PRÁCTICOS

### 📱 **Ejemplo: Clase Usuario**

```javascript
class Usuario {
    constructor(nombre, email, edad) {
        this.nombre = nombre;
        this.email = email;
        this.edad = edad;
        this.activo = true;
    }
    
    // Método para mostrar información
    mostrarPerfil() {
        console.log(`Nombre: ${this.nombre}`);
        console.log(`Email: ${this.email}`);
        console.log(`Edad: ${this.edad} años`);
        console.log(`Estado: ${this.activo ? 'Activo' : 'Inactivo'}`);
    }
    
    // Método para cambiar estado
    cambiarEstado() {
        this.activo = !this.activo;
        console.log(`Usuario ${this.activo ? 'activado' : 'desactivado'}`);
    }
}

// Crear usuarios
const usuario1 = new Usuario("Juan", "juan@email.com", 25);
const usuario2 = new Usuario("María", "maria@email.com", 30);

usuario1.mostrarPerfil();
usuario2.cambiarEstado();
```

### 🏪 **Ejemplo: Clase Producto**

```javascript
class Producto {
    constructor(nombre, precio, stock) {
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }
    
    // Verificar si hay stock
    hayStock() {
        return this.stock > 0;
    }
    
    // Vender producto
    vender(cantidad = 1) {
        if (this.stock >= cantidad) {
            this.stock -= cantidad;
            console.log(`Se vendieron ${cantidad} unidades de ${this.nombre}`);
            return true;
        } else {
            console.log(`No hay suficiente stock de ${this.nombre}`);
            return false;
        }
    }
    
    // Reponer stock
    reponer(cantidad) {
        this.stock += cantidad;
        console.log(`Se repusieron ${cantidad} unidades de ${this.nombre}`);
    }
}
```

---

## 🚀 VENTAJAS DE LA POO

### ✅ **Mantenibilidad**
- Código organizado y fácil de modificar
- Cambios en una clase no afectan otras

### ✅ **Reutilización**
- Una clase puede usarse múltiples veces
- Herencia permite extender funcionalidades

### ✅ **Escalabilidad**
- Fácil agregar nuevas características
- Código modular y bien estructurado

### ✅ **Abstracción**
- Te enfocas en qué hace, no en cómo
- Interfaces claras y simples

---

## 🎓 EJERCICIOS PRÁCTICOS

### 📝 **Ejercicio 1: Clase Libro**
Crea una clase `Libro` con:
- Atributos: título, autor, páginas, leído
- Métodos: leer(), marcarComoLeido(), mostrarInfo()

### 📝 **Ejercicio 2: Clase Cuenta Bancaria**
Crea una clase `CuentaBancaria` con:
- Atributos: titular, saldo, número de cuenta
- Métodos: depositar(), retirar(), consultarSaldo()

### 📝 **Ejercicio 3: Herencia - Vehículos**
Crea una clase padre `Vehiculo` y clases hijas `Auto` y `Moto` que hereden de ella.

---

## 📚 RECURSOS ADICIONALES

### 🔗 **Enlaces Útiles**
- [MDN - Clases en JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Classes)
- [JavaScript.info - Programación Orientada a Objetos](https://es.javascript.info/classes)

### 📖 **Conceptos Relacionados**
- **Prototipos en JavaScript**
- **Módulos y Namespaces**
- **Patrones de Diseño**
- **Principios SOLID**

---

## 🎯 RESUMEN

La **Programación Orientada a Objetos** es una herramienta poderosa que te permite:

1. **Organizar** tu código de manera lógica
2. **Reutilizar** código existente
3. **Mantener** aplicaciones complejas
4. **Escalar** proyectos grandes

Recuerda: **La práctica hace al maestro**. ¡Empieza con ejemplos simples y ve aumentando la complejidad gradualmente!

---

*📅 Material creado para clase inicial de POO - UTN*
