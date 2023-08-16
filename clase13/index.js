let edad = Number(prompt("Ingrese edad"));

if (edad >= 18) {
  alert("Puedes conducir");
} else {
  alert("Te falta para conducir: " + (18 - edad) + " años");
}
