/* actividad calculoDescuento pag.50 */
import * as readlineSync from 'readline-sync';

/*precion inicial, descuento y precion final */
let precioInicial: number = readlineSync.questionFloat("Ingrese el precio inicial del producto: ");
let descuento: number = precioInicial * 0.1;
let precioFinal: number = precioInicial - descuento;

/* resultados */
console.log("El precio inicial del producto es: $", precioInicial);
console.log("El descuento aplicado es: $", descuento);
console.log("El precio final del producto es: $", precioFinal);
