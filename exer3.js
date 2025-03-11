// Función que retorna "Cara" o "Cruz" según el valor aleatorio generado
function caraOCruz() {
    const resultado = Math.round(Math.random()); // Genera un número aleatorio entre 0 y 1
    if (resultado === 1) {
        return "Cara";
    } else {
        return "Cruz";
    }
}

// Invocamos la función y mostramos el resultado por consola
console.log(caraOCruz());
