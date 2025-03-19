"use strict";
// Obtener los elementos del DOM
const botonControl = document.getElementById('botonControl');
const bombilla = document.getElementById('bombilla');
const botonImagen = botonControl.querySelector('img');
// Variable para almacenar el estado de la bombilla (encendida o apagada)
let bombillaEncendida = false;
// Función para manejar el encendido y apagado de la bombilla
function toggleBombilla() {
    // Si la bombilla está apagada
    if (!bombillaEncendida) {
        // Cambiar la imagen de la bombilla a encendida
        bombilla.src = 'on.jpg';
        // Cambiar la imagen del botón a "ON"
        botonImagen.src = 'bon.jpg';
    }
    else {
        // Cambiar la imagen de la bombilla a apagada
        bombilla.src = 'off.jpg';
        // Cambiar la imagen del botón a "OFF"
        botonImagen.src = 'boff.jpg';
    }
    // Cambiar el estado de la bombilla
    bombillaEncendida = !bombillaEncendida;
}
// Agregar evento de clic al botón para encender y apagar la bombilla
botonControl.addEventListener('click', toggleBombilla);
