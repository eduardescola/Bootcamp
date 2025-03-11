// Función que suma tres números y devuelve el resultado
function sumarTresNumeros(num1, num2, num3) {
    const suma = num1 + num2 + num3; // Suma los tres números
    return suma; // Retorna el resultado
}

// Llamamos a la función y mostramos el resultado por consola
const resultado = sumarTresNumeros(5, 10, 15);
console.log("El resultado de la suma es:", resultado); // Muestra: El resultado de la suma es: 30

// Función que concatena el nombre completo y lo muestra por pantalla
function mostrarNombreCompleto(nombre, apellido1, apellido2) {
    const nombreCompleto = nombre + " " + apellido1 + " " + apellido2;
    console.log("Mi nombre completo es:", nombreCompleto);
}

// Llamamos a la función con los parámetros correspondientes
mostrarNombreCompleto("Juan", "Pérez", "González"); // Muestra: Mi nombre completo es: Juan Pérez González

// Función que devuelve el mayor de dos números
function obtenerMayor(num1, num2) {
    if (num1 > num2) {
        return num1; // Si num1 es mayor, lo retorna
    } else {
        return num2; // Si num2 es mayor o igual, lo retorna
    }
}

// Llamamos a la función y mostramos el resultado por consola
const mayor = obtenerMayor(12, 8);
console.log("El mayor de los dos números es:", mayor); // Muestra: El mayor de los dos números es: 12
