/* actividad areaTriangulo pag.52 */

/*solicita datos de base*altura para luego validar los datos*/
import * as readlineSync from 'readline-sync';

let base: number = parseFloat(readlineSync.question("Ingrese la base del triángulo (en cm): "));
let altura: number = parseFloat(readlineSync.question("Ingrese la altura del triángulo (en cm): "));
let area: number = 0;

if (base > 0) {
    if (altura > 0) {
        area = (base * altura) / 2;
        console.log("El área del triángulo es:", area, "cuadrados.");
    } else {
        console.log("Por favor, ingrese una altura válida y positiva.");
    }
} else {
    console.log("Por favor, ingrese una base válida y positiva.");
}