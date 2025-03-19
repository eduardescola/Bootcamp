"use strict";
let miArray = [];
const listaArray = document.getElementById('listaArray');
function actualizarLista() {
    if (listaArray) {
        listaArray.innerHTML = '';
        miArray.forEach(elemento => {
            const nuevoItem = document.createElement('li');
            nuevoItem.textContent = elemento.toString();
            listaArray.appendChild(nuevoItem);
        });
    }
}
function pushElement() {
    const elemento = parseInt(prompt('Introduce el elemento a añadir: ') || '');
    if (!isNaN(elemento)) {
        miArray.push(elemento);
        actualizarLista();
    }
    else {
        alert('Por favor, introduce un número válido.');
    }
}
function unshiftElement() {
    const elemento = parseInt(prompt('Introduce el elemento a añadir: ') || '');
    if (!isNaN(elemento)) {
        miArray.unshift(elemento);
        actualizarLista();
    }
    else {
        alert('Por favor, introduce un número válido.');
    }
}
function insertarEnIndice() {
    const indiceInput = document.getElementById('indiceInsertar');
    const elementoInput = document.getElementById('elementoInsertar');
    const indice = parseInt(indiceInput.value);
    const elemento = parseInt(elementoInput.value);
    if (!isNaN(indice) && !isNaN(elemento)) {
        if (indice >= 0 && indice <= miArray.length) { // Asegurarse de que el índice sea válido
            miArray.splice(indice, 0, elemento);
            actualizarLista();
        }
        else {
            alert('El índice no es válido. Debe ser un valor entre 0 y ' + miArray.length);
        }
    }
    else {
        alert('Por favor, introduce un número válido para el índice y el elemento.');
    }
}
function popElement() {
    const eliminado = miArray.pop();
    if (eliminado !== undefined) {
        actualizarLista();
    }
    else {
        alert('El array está vacío, no se puede eliminar un elemento.');
    }
}
function shiftElement() {
    const eliminado = miArray.shift();
    if (eliminado !== undefined) {
        actualizarLista();
    }
    else {
        alert('El array está vacío, no se puede eliminar un elemento.');
    }
}
function eliminarEnIndice() {
    const indiceInput = document.getElementById('indiceEliminar');
    const indice = parseInt(indiceInput.value);
    if (!isNaN(indice)) {
        if (indice >= 0 && indice < miArray.length) {
            miArray.splice(indice, 1);
            actualizarLista();
        }
        else {
            alert('El índice no es válido.');
        }
    }
    else {
        alert('Por favor, introduce un número válido para el índice.');
    }
}
