export interface Reserva {
  tipoHabitacion: "standard" | "suite";
  pax: number;
  noches: number;
}

export const reservasClienteIndividual: Reserva[] = [
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

export const reservasTourOperador: Reserva[] = [
  {
    tipoHabitacion: "standard",
    pax: 2,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    pax: 2,
    noches: 3,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 2,
  },
  {
    tipoHabitacion: "standard",
    pax: 1,
    noches: 5,
  },
  {
    tipoHabitacion: "standard",
    pax: 2,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    pax: 2,
    noches: 7,
  },
  {
    tipoHabitacion: "standard",
    pax: 2,
    noches: 5,
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

export const preciosHabitacionesClienteIndividual = {
  standard: 100,
  suite: 150,
};

export const preciosHabitacionesTourOperador = {
  standard: 100,
  suite: 100,
};
