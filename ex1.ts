// 1. Declaración de una variable de tipo string
let nombre: string = "Eduard"; // Inicializando con un valor
console.log("Valor de nombre: " + nombre); // Imprime el valor
console.log("Tipo de nombre: " + typeof nombre); // Imprime el tipo de dato

// 2. Declaración de una variable de tipo number
let edad: number = 25; // Inicializando con un valor
console.log("Valor de edad: " + edad); // Imprime el valor
console.log("Tipo de edad: " + typeof edad); // Imprime el tipo de dato

// 3. Declaración de una variable de tipo boolean
let esEstudiante: boolean = true; // Inicializando con un valor
console.log("Valor de esEstudiante: " + esEstudiante); // Imprime el valor
console.log("Tipo de esEstudiante: " + typeof esEstudiante); // Imprime el tipo de dato

// 4. Declaración de una variable de tipo array (arreglo de números)
let numeros: number[] = [1, 2, 3, 4, 5]; // Inicializando con un arreglo de números
console.log("Valor de numeros: " + numeros); // Imprime el valor del arreglo
console.log("Tipo de numeros: " + typeof numeros); // Imprime el tipo de dato (será 'object' por el tipo arreglo)

// 5. Declaración de una variable de tipo object
let persona: { nombre: string, edad: number } = { nombre: "Juan", edad: 30 }; // Inicializando con un objeto
console.log("Valor de persona: " + JSON.stringify(persona)); // Imprime el objeto (convertido a cadena)
console.log("Tipo de persona: " + typeof persona); // Imprime el tipo de dato (será 'object')

// 6. Declaración de una variable de tipo null
let valorNulo: null = null; // Inicializando con un valor null
console.log("Valor de valorNulo: " + valorNulo); // Imprime el valor null
console.log("Tipo de valorNulo: " + typeof valorNulo); // Imprime el tipo de dato (será 'object' debido a la especificación de JavaScript)

// 7. Declaración de una variable de tipo undefined
let valorIndefinido: undefined = undefined; // Inicializando con un valor undefined
console.log("Valor de valorIndefinido: " + valorIndefinido); // Imprime el valor undefined
console.log("Tipo de valorIndefinido: " + typeof valorIndefinido); // Imprime el tipo de dato (será 'undefined')

// 8. Variables con scope local y global

// Variable global
let globalVar: string = "Esta es una variable global"; 

// Función que tiene una variable local
function miFuncion() {
    let localVar: string = "Esta es una variable local"; // Local dentro de la función
    console.log("Valor de localVar dentro de la función: " + localVar);
    console.log("Tipo de localVar dentro de la función: " + typeof localVar);
}

miFuncion(); // Llamada a la función que imprime la variable local

// Imprimiendo la variable global fuera de la función
console.log("Valor de globalVar fuera de la función: " + globalVar);
console.log("Tipo de globalVar fuera de la función: " + typeof globalVar);
