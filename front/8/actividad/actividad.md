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
     <button onclick="saludar()">¡Saludame!</button>

        <script>
    function saludar() {
      alert("Hola! Soy ...");
    }
        </script>
   ```

2. Estilos:
   - Borde visible en la tarjeta
   - Efecto de **hover** el que quieran, x ej `transform: scale(1.2)` sobre el contenedor
3. Responsividad:
   - En en modo portrait, el diseño debe parecer **un rectángulo de pie** - mas alto que ancho. Vertical.
   - En modo landscape el diseño debe parecer **un rectángulo acostado** - mas ancho que alto. Horizontal.

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
- Personalizar la tarjeta con `box-shadow`, fuentes de Google.
