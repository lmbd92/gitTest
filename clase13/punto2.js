function validarEdad(persona, participante) {
  if (persona > participante) {
    alert(
      "usted es mayor que el participantante y la diferencia de edad es: " +
        (persona - participante) +
        " años"
    );
  } else if (persona === participante) {
    alert("usted y el participante tiene la misma edad");
  } else {
    alert(
      "uste es menor que el participante" + (participante - persona) + " años"
    );
  }
}

let edadPersona = parseInt(prompt("digite su edad"));
let edadParticipante = parseInt(prompt("digite la edad del participante"));

validarEdad(edadPersona, edadParticipante);
