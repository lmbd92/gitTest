// Función para comparar dos números y determinar cuál es el menor
function encontrarMenor(a, b) {
  return a < b ? a : b;
}

// Función para encontrar el número más pequeño en la lista de números
function encontrarNumeroMasPequeno(listaNumeros, inicio) {
  let indiceNumeroMasPequeno = inicio;

  for (let i = inicio + 1; i < listaNumeros.length; i++) {
    if (listaNumeros[i] < listaNumeros[indiceNumeroMasPequeno]) {
      indiceNumeroMasPequeno = i;
    }
  }

  return indiceNumeroMasPequeno;
}


// Función para intercambiar dos elementos en la lista
function intercambiar(listaNumeros, indice1, indice2) {
  const temp = listaNumeros[indice1];
  listaNumeros[indice1] = listaNumeros[indice2];
  listaNumeros[indice2] = temp;
}

// Función principal para ordenar la lista de números utilizando el algoritmo de selección
function ordenarLista(listaNumeros) {
  for (let i = 0; i < listaNumeros.length - 1; i++) {
    const indiceNumeroMasPequeno = encontrarNumeroMasPequeno(listaNumeros, i);
    intercambiar(listaNumeros, i, indiceNumeroMasPequeno);
  }

  return listaNumeros;
}

// Llamamos a la función para obtener la lista de números ingresada por el usuario
const listaNumeros = obtenerListaNumeros(); // Suponemos que la función obtenerListaNumeros() ya está definida

// Llamamos a la función para ordenar la lista de números
const listaOrdenada = ordenarLista(listaNumeros);

// Mostramos la lista de números ingresada por el usuario
console.log("Lista de números ingresada por el usuario:", listaNumeros);

// Mostramos la lista de números ordenada de forma ascendente
console.log("Lista de números ordenada:", listaOrdenada);


console.log("hola mundo! dijo David ")