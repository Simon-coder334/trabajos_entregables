"use strict";
/* actividad areaTriangulo pag.52 */
Object.defineProperty(exports, "__esModule", { value: true });

/*solicita datos de base*altura para luego validar los datos*/
var readlineSync = require("readline-sync");
var base = parseFloat(readlineSync.question("Ingrese la base del triángulo (en cm): "));
var altura = parseFloat(readlineSync.question("Ingrese la altura del triángulo (en cm): "));
var area = 0;
if (base > 0) {
    if (altura > 0) {
        area = (base * altura) / 2;
        console.log("El área del triángulo es:", area, "cuadrados.");
    }
    else {
        console.log("Por favor, ingrese una altura válida y positiva.");
    }
}
else {
    console.log("Por favor, ingrese una base válida y positiva.");
}
