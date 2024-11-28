/* actividad tiempoVuelta pag.51 */
import * as readlineSync from 'readline-sync';

/* Variables para almacenar los tiempos de las vueltas */
let tiempoVuelta1: number = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 1 (en segundos): ");
let tiempoVuelta2: number = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 2 (en segundos): ");
let tiempoVuelta3: number = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 3 (en segundos): ");
let tiempoVuelta4: number = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 4 (en segundos): ");
let tiempoTotal: number = tiempoVuelta1 + tiempoVuelta2 + tiempoVuelta3 + tiempoVuelta4;
let promedioVuelta: number = tiempoTotal / 4;

console.log("El tiempo total de las 4 vueltas es:", tiempoTotal.toFixed(2), "segundos");
console.log("El promedio por vuelta es:", promedioVuelta.toFixed(2), "segundos");
