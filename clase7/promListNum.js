function obtenerListaNumeros() {
  let ListaNumeros = [];
  let numElementos = parseInt(
    prompt("Por favor, indique la cantidad de numeros que desea almacenar: ")
  );

  for (let i = 0; i < numElementos; i++) {
    let inputValido = false;

    while (!inputValido) {
      let userInput = prompt(
        `Ingrese el numero ${i + 1} para almacenar en la posición ${i}:`
      );

      if (userInput === null || userInput.trim() === "") {
        alert("Debe ingresar un valor válido.");
      } else {
        let element = parseFloat(userInput);

        if (!isNaN(element)) {
          ListaNumeros.push(element);
          inputValido = true;
        } else {
          alert("Debe ingresar un número válido.");
        }
      }
    }
  }

  return ListaNumeros;
}

function calcularSuma(ListaNumeros) {
  let suma = 0;
  for (let i = 0; i < ListaNumeros.length; i++) {
    suma += ListaNumeros[i];
  }
  return suma;
}

function calcularPromedio(ListaNumeros) {
  if (ListaNumeros.length === 0) {
    return 0; // Evitar división por cero si la lista está vacía
  }
  const sumaTotal = calcularSuma(ListaNumeros);
  const prom = sumaTotal / ListaNumeros.length;
  return prom;
}

function main() {
  const listaLlena = obtenerListaNumeros();
  const promedioCalculado = calcularPromedio(listaLlena);
  // Se agrega además una validación de seguridad para que el algoritmo no calcule el promedio de una lista vacía
  if (listaLlena.length > 0) {
    alert(`El promedio de la lista de números es: ${promedioCalculado}`);
  } else {
    alert("La lista de números está vacía.");
  }
}

main();
