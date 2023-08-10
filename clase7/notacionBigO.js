/* big o O(1) */
function obtenerPrimerElemento(arreglo) {
  return arreglo[0];
}

const miArreglo1 = [1, 2, 3, 4, 5];
const primerElemento = obtenerPrimerElemento(miArreglo1);
console.log(primerElemento); // Salida: 1

/* big O(log n) */
function busquedaBinaria(arreglo, objetivo) {
  let inicio = 0;
  let fin = arreglo.length - 1;

  while (inicio <= fin) {
    let medio = Math.floor((inicio + fin) / 2);

    if (arreglo[medio] === objetivo) {
      return medio; // Encontrado, devuelve el índice del elemento
    } else if (arreglo[medio] < objetivo) {
      inicio = medio + 1; // Busca en la mitad derecha
    } else {
      fin = medio - 1; // Busca en la mitad izquierda
    }
  }

  return -1; // No encontrado
}

const miArreglo = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20];
const objetivo = 12;
const indice = busquedaBinaria(miArreglo, objetivo);
console.log(`El objetivo ${objetivo} se encuentra en el índice ${indice}`);

/* big O(n) */

function sumaElementos(arreglo) {
  let suma = 0;
  for (let i = 0; i < arreglo.length; i++) {
    suma += arreglo[i];
  }
  return suma;
}

const miArreglo2 = [1, 2, 3, 4, 5];
const resultado = sumaElementos(miArreglo2);
console.log(resultado); // Salida: 15

/* big O(n²) */

function matrizMultiplicacion(matrizA, matrizB) {
  const filasA = matrizA.length;
  const columnasA = matrizA[0].length;
  const columnasB = matrizB[0].length;

  if (columnasA !== matrizB.length) {
    throw new Error("Las matrices no pueden multiplicarse");
  }

  const resultado = new Array(filasA);
  for (let i = 0; i < filasA; i++) {
    resultado[i] = new Array(columnasB).fill(0);
    for (let j = 0; j < columnasB; j++) {
      for (let k = 0; k < columnasA; k++) {
        resultado[i][j] += matrizA[i][k] * matrizB[k][j];
      }
    }
  }

  return resultado;
}

const matrizA = [
  [1, 2],
  [3, 4],
];

const matrizB = [
  [5, 6],
  [7, 8],
];

const resultados = matrizMultiplicacion(matrizA, matrizB);
console.log(resultados);
