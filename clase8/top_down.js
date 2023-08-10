// Función para obtener la lista de números ingresada por el usuario
function obtenerListaNumeros() {
  let numeros = [];
  let numElementos = parseInt(
    prompt("Ingresa la cantidad de números que deseas calcular el promedio:")
  );

  for (let i = 0; i < numElementos; i++) {
    let numero = parseFloat(prompt(`Ingresa el número ${i + 1}:`));
    numeros.push(numero);
  }

  return numeros;
}

// Función para calcular la suma de los números en la lista
function calcularSuma(listaNumeros) {
  let suma = 0;

  for (let i = 0; i < listaNumeros.length; i++) {
    suma += listaNumeros[i];
  }

  return suma;
}

// Función para contar la cantidad total de números en la lista
function contarElementos(listaNumeros) {
  return listaNumeros.length;
}

// Función para calcular el promedio de una lista de números
function calcularPromedio(listaNumeros) {
  const cantidadElementos = contarElementos(listaNumeros);

  if (cantidadElementos === 0) {
    return 0;
  }

  const sumaTotal = calcularSuma(listaNumeros);
  const promedio = sumaTotal / cantidadElementos;

  return promedio;
}

// Llamamos a la función para obtener la lista de números ingresada por el usuario
const listaNumeros = obtenerListaNumeros();

// Calculamos el promedio de la lista de números
const promedioCalculado = calcularPromedio(listaNumeros);

// Mostramos la lista de números ingresada por el usuario
console.log("Lista de números ingresada por el usuario:", listaNumeros);

// Mostramos el promedio de la lista de números
console.log("El promedio de la lista de números es:", promedioCalculado);
