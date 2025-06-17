export const sumar = (a, b) => a + b;
export const restar = (a, b) => a - b;
export const multiplicar = (a, b) => a * b;
export const dividir = (a, b) => {
    if (b === 0) {
        console.error("Error: no se puede dividir por cero")
        return 0;
    }
        if(a < b) {
            console.warn("Advertencia: No se puede dividir un numero menor por uno mayor.")
            return 0;
        }
        return a / b;
    }

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
        return 0;
    }
    return a / b;
  }
};