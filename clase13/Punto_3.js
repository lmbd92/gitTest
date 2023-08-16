function determinarEstacion(mes) {
  switch (mes) {
    case "septiembre":
    case "octubre":
    case "noviembre":
      return "Otoño";
    case "diciembre":
    case "enero":
    case "febrero":
      return "Invierno";
    case "marzo":
    case "abril":
    case "mayo":
      return "Primavera";
    case "junio":
    case "julio":
    case "agosto":
      return "Verano";
    default:
      return "Entrada no vàlida";
  }
}

let mesUsuario = prompt("Ingrese el nombre del mes: ").toLowerCase();
let estacion = determinarEstacion(mesUsuario);

console.log("La estación para " + mesUsuario + " es " + estacion);
