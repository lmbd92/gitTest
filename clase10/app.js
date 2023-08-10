class Factura {
  constructor(numFactura, divisa, subtotal, IVA) {
    this.numFactura = numFactura;
    this.divisa = divisa;
    this.subtotal = subtotal;
    this.IVA = IVA;
  }

  get total() {
    return this.subtotal + this.IVA;
  }
  set nuevaDivisa(valor) {
    this.divisa = "$" + valor;
  }
  aplicarDescuento(porcentaje) {
    this.subtotal -= (this.subtotal / 100) * porcentaje;
  }
}

const factura1 = new Factura(101, "USD", 100, 19);
factura1.nuevaDivisa = "COP";
factura1.aplicarDescuento(10);
const factura2 = new Factura(102, "USD", 200, 38);

console.log(
  `La factura ${factura1.numFactura} está en divisa ${factura1.divisa} y tiene un total de ${factura1.total}`
);

console.log(
  `La factura ${factura2.numFactura} está en divisa ${factura2.divisa} y tiene un total de ${factura2.total}`
);
