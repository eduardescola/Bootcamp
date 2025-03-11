// Función que cambia todas las "A" por "O" en el string
function cambiarAporO(str) {
    return str.replace(/A/g, 'O').replace(/a/g, 'o'); // Reemplaza "A" por "O" (y "a" por "o")
}

// Llamada a la función
console.log(cambiarAporO("Academia"));  

// Función que comprueba si un string empieza con "aca"
function empiezaConAca(str) {
    if (str.startsWith("aca") || str.startsWith("ACA")) {
        console.log("El string empieza con 'aca'");
    } else {
        console.log("El string no empieza con 'aca'");
    }
}

// Llamamos a la función con dos cadenas
empiezaConAca("academia"); // Muestra: El string empieza con 'aca'
empiezaConAca("escuela");  // Muestra: El string no empieza con 'aca'

// Función que saluda tres veces utilizando métodos de strings
function saludarTresVeces(str) {
    let saludo = str.repeat(3);  // Repite el saludo 3 veces
    console.log(saludo);  // Muestra: HolaHolaHola
}

// Llamamos a la función
saludarTresVeces("Hola");  // Muestra: HolaHolaHola
