// Array inicial
let arrayIconos = ['🍕', '🍔', '🍟', '🍍', '🍓'];

// Reemplazar todos los elementos por "🍺"
for (let i = 0; i < arrayIconos.length; i++) {
  arrayIconos[i] = '🍺';
}

console.log(arrayIconos); // ["🍺", "🍺", "🍺", "🍺", "🍺"]

// Verificar si existe la piña (🍍)
let arrayIconosP = ['🍕', '🍔', '🍟', '🍍', '🍓'];
let existePina = false;
for (let i = 0; i < arrayIconosP.length; i++) {
  if (arrayIconosP[i] === '🍍') {
    existePina = true;
    break; // Salir del bucle si encontramos la piña
  }
}

console.log(existePina); // true

// Array inicial
let arrayIconos2 = ['🍕', '🍔', '🍟', '🍍', '🍓'];

// Eliminar la piña (🍍)
for (let i = 0; i < arrayIconos2.length; i++) {
  if (arrayIconos2[i] === '🍍') {
    arrayIconos2.splice(i, 1); // Elimina el elemento en la posición i
    break; // Salir del bucle después de eliminar la piña
  }
}

console.log(arrayIconos2); // ["🍕", "🍔", "🍟", "🍓"]

// Array inicial
let arrayIconos3 = ['🍕', '🍔', '🍟', '🍍', '🍓'];

// Convertir todas las fresas (🍓) en moras (🍇)
for (let i = 0; i < arrayIconos3.length; i++) {
  if (arrayIconos3[i] === '🍓') {
    arrayIconos3[i] = '🍇'; // Cambiar fresa por mora
  }
}

console.log(arrayIconos3); // ["🍕", "🍔", "🍟", "🍍", "🍇"]

// Array de ejemplo con cajas (🗃️)
let objetos = ['🍕', '🗃️', '🍔', '🗃️', '🍟'];

// Añadir el icono 📦 después de cada "🗃️"
for (let i = 0; i < objetos.length; i++) {
  if (objetos[i] === '🗃️') {
    objetos.splice(i + 1, 0, '📦'); // Insertar 📦 después de 🗃️
    i++; // Asegurarse de no volver a procesar el elemento recién insertado
  }
}

console.log(objetos); // ["🍕", "🗃️", "📦", "🍔", "🗃️", "📦", "🍟"]

// Array de cartas
let cartas = ['2', '3', '4', '5'];

// Añadir una carta comodín entre dos cartas
const cartasConComodin = [];
for (let i = 0; i < cartas.length; i++) {
  cartasConComodin.push(cartas[i]);
  if (i !== cartas.length - 1) { // No añadir comodín después de la última carta
    cartasConComodin.push('comodín');
  }
}

console.log(cartasConComodin); // ["2", "comodín", "3", "comodín", "4", "comodín", "5"]
