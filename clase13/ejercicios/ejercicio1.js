/* 
A= 5-4
B= 3.9-  3
C= 2.9 - 2
D= 1.9 - 1
F= 0.9 - 0
*/
let inputValido = false;
let calificacion;
while (!inputValido) {
  let userInput = prompt("Ingrese su calificacion");
  if (userInput === null || userInput.trim() === "") {
    alert("Debe ingresar un valor válido.");
  } else {
    calificacion = parseFloat(userInput);
  }
  if (!isNaN(calificacion)) {
    inputValido = true;
    let resultado = convertirNota(calificacion);
    alert("Su nota equivalente es " + resultado);
  }
}
function convertirNota(nota) {
  if (nota >= 4 && nota <= 5) {
    return "A";
  } else if (nota >= 3 && nota < 4) {
    return "B";
  } else if (nota >= 2 && nota < 3) {
    return "C";
  } else if (nota >= 1 && nota < 2) {
    return "D";
  } else if (nota >= 0 && nota < 1) {
    return "F";
  } else {
    return "NO VALIDA";
  }
}
