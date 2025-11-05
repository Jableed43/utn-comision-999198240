# Contador de "Me Gusta" - Versión React

Esta es la versión en React del contador de "Me Gusta" desarrollado con Vite.

## Características

- ✅ Contador de "Me Gusta" con persistencia en localStorage
- ✅ Efecto visual "pop" al hacer clic
- ✅ Interfaz idéntica a la versión vanilla JavaScript
- ✅ Desarrollado con React y hooks modernos
- ✅ Estilos CSS idénticos al original

## Tecnologías utilizadas

- **React 18** - Biblioteca de JavaScript para interfaces de usuario
- **Vite** - Herramienta de construcción rápida
- **Font Awesome** - Iconos (corazón)
- **CSS3** - Estilos y animaciones

## Funcionalidades implementadas

### Hooks de React utilizados:
- `useState` - Para manejar el estado del contador
- `useEffect` - Para cargar los datos del localStorage al montar el componente

### Funciones principales:
- `loadLikes()` - Carga el contador desde localStorage
- `saveLikes()` - Guarda el contador en localStorage
- `handleLikeClick()` - Maneja el clic del botón y actualiza el estado

## Cómo ejecutar

1. Instalar dependencias:
```bash
npm install
```

2. Ejecutar en modo desarrollo:
```bash
npm run dev
```

3. Abrir en el navegador la URL que aparece en la consola (generalmente http://localhost:5173)

## Comparación con la versión vanilla JavaScript

| Aspecto | Vanilla JS | React |
|---------|------------|-------|
| Estado | Variable `let` | `useState` hook |
| DOM | `getElementById` | Referencias automáticas |
| Eventos | `addEventListener` | `onClick` prop |
| Inicialización | `DOMContentLoaded` | `useEffect` |
| Persistencia | `localStorage` | `localStorage` (igual) |

## Ventajas de la versión React

1. **Estado reactivo**: Los cambios se reflejan automáticamente en la UI
2. **Hooks modernos**: Código más limpio y reutilizable
3. **Componentización**: Fácil de reutilizar en otras partes de la aplicación
4. **Mejor organización**: Separación clara entre lógica y presentación
5. **Herramientas de desarrollo**: React DevTools para debugging