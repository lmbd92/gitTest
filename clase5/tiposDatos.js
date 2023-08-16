let name = "Juan";
let number = 10;
let boolean = true;
let array = [1, 2, 3, 4, 5];
let object = {
  name: "Juan",
  age: 20,
  isStudent: true,
  hobbies: ["Leer", "Cantar", "Bailar"],
  address: {
    street: "Av. Siempre Viva",
    number: 123,
    city: "Springfield",
  },
};

console.log(typeof array);

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

const resultado = matrizMultiplicacion(matrizA, matrizB);
console.log(resultado);

console.log("Hola mundo");
console.log("Hola mundo2");







