// Arrow function que retorna nombre y apellidos
const obtenerNombreYApellidos = () => {
    return "Juan Pérez"; // Cambia el nombre y apellidos según corresponda
};

// Llamamos a la función y mostramos el valor por pantalla (en consola)
console.log(obtenerNombreYApellidos());

// Función que recibe un booleano y lo imprime dentro de la función
function imprimirBooleano(valor) {
    console.log("El valor booleano recibido es: " + valor);
}

// Llamada a la función con un valor booleano
imprimirBooleano(true);  // Imprime: "El valor booleano recibido es: true"
imprimirBooleano(false); // Imprime: "El valor booleano recibido es: false"

// Función que recibe un número indefinido de parámetros y los imprime
function imprimirParametros(...parametros) {
    parametros.forEach(param => {
        console.log(param); // Muestra cada parámetro por separado
    });
}

// Llamada a la función con los valores 1, 2, 3, 4, 5
imprimirParametros(1, 2, 3, 4, 5);
