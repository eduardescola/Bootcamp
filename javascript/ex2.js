"use strict";
// Arrow function que retorna el nombre y apellidos
const obtenerNombreCompleto = () => {
    const nombre = "Eduard";
    const apellidos = "Escola Soudovski";
    return `${nombre} ${apellidos}`;
};
// Imprimir el valor fuera de la función
console.log(obtenerNombreCompleto());
// Función que recibe un boolean y lo imprime sin return
function imprimirBooleano(valor) {
    console.log("El valor booleano recibido es: " + valor);
}
imprimirBooleano(true);
imprimirBooleano(false);
// Función que recibe parámetros infinitos y los muestra con forEach
function mostrarParametros(...numeros) {
    numeros.forEach((numero) => {
        console.log("Número recibido: " + numero);
    });
}
// Llamada a la función con valores 1, 2, 3, 4, 5
mostrarParametros(1, 2, 3, 4, 5);
