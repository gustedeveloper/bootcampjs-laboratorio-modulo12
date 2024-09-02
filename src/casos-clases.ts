import "./style.css";

import { Reserva } from "./casos-clases.model";

class Totales {
  reservas: Reserva[];
  preciosHabitaciones: { [tipo: string]: number };

  constructor(
    reservas: Reserva[],
    preciosHabitaciones: { [tipo: string]: number }
  ) {
    this.reservas = reservas;
    this.preciosHabitaciones = preciosHabitaciones;
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
        totalCargoAdicional += 40 * (reserva.pax - 1) * reserva.noches;
      }
      if (reserva.desayuno === true) {
        totalCargoAdicional += 15 * reserva.pax * reserva.noches;
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
    const iva = 0.21;
    const subtotal = this.sumaSubtotal();
    const total = subtotal * (1 + iva);
    return Number(total.toFixed(2));
  }
}

export class TotalesClienteParticular extends Totales {
  constructor(
    reservas: Reserva[],
    preciosHabitaciones: { [tipo: string]: number }
  ) {
    super(reservas, preciosHabitaciones);
  }
}

export class TotalesTourOperador extends Totales {
  descuento: number;
  constructor(
    reservas: Reserva[],
    preciosHabitaciones: { [tipo: string]: number },
    descuento: number
  ) {
    super(reservas, preciosHabitaciones);
    this.descuento = descuento;
  }

  sumaSubtotal(): number {
    const subtotal = super.sumaSubtotal();
    return subtotal * (1 - this.descuento / 100);
  }
}
