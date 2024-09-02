import "./style.css";

interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
}

const reservas: Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 1,
  },
];

const preciosHabitacionesClienteIndividual = {
  standard: 100,
  suite: 150,
};

class TotalesCliente {
  reservas: Reserva[];
  preciosHabitaciones: { [tipo: string]: number };
  cargoAdicional: number;
  iva: number;

  constructor(
    reservas: Reserva[],
    preciosHabitaciones: { [tipo: string]: number },
    cargoAdicional: number,
    iva: number
  ) {
    this.reservas = reservas;
    this.preciosHabitaciones = preciosHabitaciones;
    this.cargoAdicional = cargoAdicional;
    this.iva = iva;
  }

  calcularPorTipoDeHabitacion(): number {
    let total = 0;
    this.reservas.forEach((reserva) => {
      const precioBase = this.preciosHabitaciones[reserva.tipoHabitacion];
      total += precioBase * reserva.noches;
    });
    return total;
  }

  cargosAdicionales(): number {
    let totalCargoAdicional = 0;
    this.reservas.forEach((reserva) => {
      if (reserva.pax > 1) {
        totalCargoAdicional +=
          this.cargoAdicional * (reserva.pax - 1) * reserva.noches;
      }
    });
    return totalCargoAdicional;
  }

  sumaSubtotal(): number {
    const totalPorHabitaciones = this.calcularPorTipoDeHabitacion();
    const totalGastosAdicionales = this.cargosAdicionales();
    return totalPorHabitaciones + totalGastosAdicionales;
  }

  calculaTotalConIva(): number {
    const iva = this.iva;
    const subtotal = this.sumaSubtotal();
    const total = subtotal * (1 + iva);
    return Number(total.toFixed(2));
  }
}

const pedro = new TotalesCliente(
  reservas,
  preciosHabitacionesClienteIndividual,
  40,
  0.21
);

console.log(pedro.calcularPorTipoDeHabitacion());
console.log(pedro.cargosAdicionales());
console.log(pedro.sumaSubtotal());
console.log(pedro.calculaTotalConIva());
