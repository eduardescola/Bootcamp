"use strict";
// Función que recibe tres números, los suma y devuelve el resultado
function sumarTresNumeros(num1, num2, num3) {
    return num1 + num2 + num3;
}
// Llamada a la función y muestra del resultado
const resultadoSuma = sumarTresNumeros(5, 10, 15);
console.log("El resultado de la suma es:", resultadoSuma);
// Función que recibe tres parámetros (nombre, apellido1, apellido2) y los concatena
function obtenerNombreCompleto2(nombre, apellido1, apellido2) {
    return `${nombre} ${apellido1} ${apellido2}`;
}
// Llamada a la función y muestra del resultado
const nombreCompleto = obtenerNombreCompleto2("Eduard", "Escola", "Soudovski");
console.log("Mi nombre completo es:", nombreCompleto);
// Función que recibe dos números y devuelve el mayor
function obtenerMayor(num1, num2) {
    return num1 > num2 ? num1 : num2;
}
// Llamada a la función y muestra del resultado
const mayorNumero = obtenerMayor(10, 20);
console.log("El número mayor es:", mayorNumero);
