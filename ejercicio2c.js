"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/* actividad tiempoVuelta pag.51 */
var readlineSync = require("readline-sync");
/* Variables para almacenar los tiempos de las vueltas */
var tiempoVuelta1 = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 1 (en segundos): ");
var tiempoVuelta2 = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 2 (en segundos): ");
var tiempoVuelta3 = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 3 (en segundos): ");
var tiempoVuelta4 = readlineSync.questionFloat("Ingrese el tiempo de la vuelta 4 (en segundos): ");
/* Calcular el tiempo total */
var tiempoTotal = tiempoVuelta1 + tiempoVuelta2 + tiempoVuelta3 + tiempoVuelta4;
/* Calcular el promedio por vuelta */
var promedioVuelta = tiempoTotal / 4;
/* Mostrar resultados */
console.log("El tiempo total de las 4 vueltas es:", tiempoTotal.toFixed(2), "segundos");
console.log("El promedio por vuelta es:", promedioVuelta.toFixed(2), "segundos");
