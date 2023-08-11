function factorial(numero) {
  /* Esta es una verificación condicional. Si el valor del parámetro numero es igual a 1, la función devuelve directamente 1. Esto es una condición de parada para el cálculo del factorial, ya que el factorial de 1 es simplemente 1. */
  if (numero === 1) {
    return 1;
  }
  return numero * factorial(numero - 1);
}
num = parseInt(prompt("ingrese el numero a calcular"));
let resultado = factorial(num);
console.log(resultado);


console.log("Hola mundo")