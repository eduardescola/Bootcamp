"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Obtener los elementos del DOM
const jokeButton = document.getElementById('jokeButton');
const jokeText = document.getElementById('jokeText');
// Función para obtener un chiste de la API de Chuck Norris
function fetchJoke() {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            // Realizar una solicitud a la API de Chuck Norris
            const response = yield fetch('https://api.chucknorris.io/jokes/random');
            // Verificar si la respuesta es correcta
            if (!response.ok) {
                throw new Error('Error al obtener el chiste');
            }
            const data = yield response.json();
            // Mostrar el chiste en el HTML
            jokeText.textContent = data.value;
        }
        catch (error) {
            console.error('Error:', error);
            jokeText.textContent = 'Ocurrió un error al obtener el chiste.';
        }
    });
}
// Asignar la acción de obtener un nuevo chiste al hacer clic en el botón
jokeButton.addEventListener('click', fetchJoke);
// Obtener un chiste inicial al cargar la página
fetchJoke();
