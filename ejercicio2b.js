"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* actividad calculoDescuento pag.50 */
var readlineSync = require("readline-sync");
/*precion inicial, descuento y precion final */
var precioInicial = readlineSync.questionFloat("Ingrese el precio inicial del producto: ");
var descuento = precioInicial * 0.1;
var precioFinal = precioInicial - descuento;
/* resultados */
console.log("El precio inicial del producto es: $", precioInicial);
console.log("El descuento aplicado es: $", descuento);
console.log("El precio final del producto es: $", precioFinal);
