import { TotalesClienteParticular, TotalesTourOperador } from "./casos-clases";
import {
  reservasClienteIndividual,
  preciosHabitacionesClienteIndividual,
  preciosHabitacionesTourOperador,
  reservasTourOperador,
} from "./casos-clases.model";

const PEDRO_HERNANDEZ = new TotalesClienteParticular(
  reservasClienteIndividual,
  preciosHabitacionesClienteIndividual
);

console.log("Clase de cliente individual");
console.log("Subtotal: " + PEDRO_HERNANDEZ.sumaSubtotal());
console.log("Total con IVA incluído: " + PEDRO_HERNANDEZ.calculaTotalConIva());

const TUI = new TotalesTourOperador(
  reservasTourOperador,
  preciosHabitacionesTourOperador,
  15
);

console.log("Clase de Tour Operador");
console.log("Subtotal: " + TUI.sumaSubtotal());
console.log("Total con IVA incluído: " + TUI.calculaTotalConIva());
