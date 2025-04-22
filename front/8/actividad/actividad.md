## Actividad: “¡Presentate con tu Tarjeta Responsiva!”

### Objetivo:
Diseñar una **tarjeta personal responsiva** con HTML, CSS y media queries, incluyendo efectos visuales y una pequeña interacción con JavaScript.

---

### 📋 Consigna:

1. Crear una tarjeta con:
   - Tu **foto personal**
   - Tu **nombre en un `h2`**
   - Una **descripción corta**
   - Un **botón** que al hacer clic diga: `Hola! Soy <tu nombre>` utilizando:

   ```
    onclick="saludar()"

        <script>
    function saludar() {
      alert("Hola! Soy ...");
    }
        </script>
   ```

2. Estilos:
   - Borde visible en la tarjeta
   - Efecto de **hover** con `transform: scale(1.2)` sobre el contenedor
3. Responsividad:
   - En pantallas chicas (modo *portrait*), el diseño debe parecer **un rectángulo acostado**: imagen a la izquierda, texto a la derecha.
   - En pantallas grandes, se verá vertical.

---

### 🖼️ Estructura de Archivos:
```
/actividad-tarjeta
├── index.html
└── style.css
```

---

### Posibles mejoras o retos extra:
- Agregar más breakpoints (`max-width: 480px`, `min-width: 1024px`) para practicar aún más.
- Personalizar la tarjeta con `box-shadow`, fuentes de Google 
