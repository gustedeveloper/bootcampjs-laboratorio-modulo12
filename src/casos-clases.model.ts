export interface Reserva {
  tipoHabitacion: "standard" | "suite";
  desayuno: boolean;
  pax: number;
  noches: number;
}

export const reservasClienteIndividual: Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 1,
  },
];

export const reservasTourOperador: Reserva[] = [
  {
    tipoHabitacion: "standard",
    desayuno: true,
    pax: 2,
    noches: 3,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 2,
    noches: 3,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 2,
  },
  {
    tipoHabitacion: "standard",
    desayuno: true,
    pax: 1,
    noches: 5,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 2,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
    pax: 2,
    noches: 7,
  },
  {
    tipoHabitacion: "standard",
    desayuno: false,
    pax: 2,
    noches: 5,
  },
  {
    tipoHabitacion: "standard",
    desayuno: true,
    pax: 1,
    noches: 4,
  },
  {
    tipoHabitacion: "suite",
    desayuno: true,
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
