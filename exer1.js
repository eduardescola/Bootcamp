let numero = 42; // Número
let texto = "Hola Mundo"; // Cadena de texto
let esVerdadero = true; // Booleano
let nulo = null; // Null
let indefinido; // Undefined
let objeto = { nombre: "Juan", edad: 30 }; // Objeto
let arreglo = [1, 2, 3, 4]; // Array

// Mostrando el valor y tipo de cada variable en consola
console.log("Valor de la variable numero: " + numero + ", Tipo: " + typeof numero);
console.log("Valor de la variable texto: " + texto + ", Tipo: " + typeof texto);
console.log("Valor de la variable esVerdadero: " + esVerdadero + ", Tipo: " + typeof esVerdadero);
console.log("Valor de la variable nulo: " + nulo + ", Tipo: " + typeof nulo);
console.log("Valor de la variable indefinido: " + indefinido + ", Tipo: " + typeof indefinido);
console.log("Valor de la variable objeto: " + JSON.stringify(objeto) + ", Tipo: " + typeof objeto);
console.log("Valor de la variable arreglo: " + arreglo + ", Tipo: " + typeof arreglo);

// Ejemplo de variables con diferentes scopes
var variableGlobal = "Soy global"; // Variable global
function miFuncion() {
    let variableLocal = "Soy local"; // Variable local
    console.log(variableLocal); // Imprime la variable local
}

// Imprimir la variable global
console.log(variableGlobal);

// Llamar a la función para imprimir la variable local
miFuncion();

// Intentamos imprimir la variable local fuera de su scope (esto generará un error)
console.log(variableLocal); 