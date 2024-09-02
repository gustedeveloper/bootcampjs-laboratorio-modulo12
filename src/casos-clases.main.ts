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
console.log(
  "Primer subtotal: " + PEDRO_HERNANDEZ.calcularPorTipoDeHabitacion()
);
console.log(
  "Total de cargos adicionales: " + PEDRO_HERNANDEZ.cargosAdicionales()
);
console.log("Subtotal definitivo: " + PEDRO_HERNANDEZ.sumaSubtotal());
console.log("Total con IVA incluído: " + PEDRO_HERNANDEZ.calculaTotalConIva());

const TUI = new TotalesTourOperador(
  reservasTourOperador,
  preciosHabitacionesTourOperador,
  15
);

console.log("Clase de Tour Operador");
console.log("Primer subtotal: " + TUI.calcularPorTipoDeHabitacion());
console.log("Total de cargos adicionales: " + TUI.cargosAdicionales());
console.log("Subtotal con descuento aplicado: " + TUI.sumaSubtotal());
console.log("Total con IVA incluído: " + TUI.calculaTotalConIva());
