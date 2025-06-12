// src/utils/mathOperations.js

export const sum = (a, b) => a + b;
export const subtract = (a, b) => a - b;
export const multiply = (a, b) => a * b;

export const divide = (a, b) => {
  if (b === 0) {
    console.error("Error: No se puede dividir por cero.");
    return 0; // O lanzar un error, o devolver Infinity, según tu caso de uso.
  }
  // La lógica de "no puede dividir un número mayor por uno menor" es más una regla de negocio
  // que una regla matemática pura, por lo que podrías mantenerla en el componente
  // o pasarla como un argumento a la función divide si la haces más genérica.
  // Por ahora, la dejo aquí como ejemplo de un lugar donde podrías centralizarla si aplica a todas las divisiones.
  if (a < b) {
    console.warn("Advertencia: Se está intentando dividir un número menor por uno mayor.");
    // Decide qué quieres que devuelva en este caso: 0, el resultado real, o un error.
    return a / b;
  }
  return a / b;
};

// También podrías agrupar todas las operaciones en un solo objeto si lo prefieres
/*
export const calculator = {
  sum: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b,
  divide: (a, b) => {
    if (b === 0) {
      console.error("Error: No se puede dividir por cero.");
      return 0;
    }
    if (a < b) {
        console.warn("Advertencia: Se está intentando dividir un número menor por uno mayor.");
        return a / b;
    }
    return a / b;
  }
};
*/