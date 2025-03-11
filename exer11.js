let emotes = ["🍕", "🍔", "🍟", "🥤", "🍺", "🍓", "🍍"];

// Encontramos la posición de la pizza (🍕)
const pizzaIndex = emotes.indexOf("🍕");

// A partir de la pizza, sustituimos todos los elementos por cervezas (🍺)
if (pizzaIndex !== -1) {
    for (let i = pizzaIndex; i < emotes.length; i++) {
        emotes[i] = "🍺";
    }
}

console.log(emotes); // Muestra: ["🍕", "🍺", "🍺", "🍺", "🍺", "🍺", "🍺"]

// Verificamos si existe la piña (🍍) en el array
const existePina = emotes.includes("🍍");

console.log(existePina); // Muestra: true si existe "🍍", false si no existe.

// Array original
let emotes2 = ["🍕", "🍔", "🍟", "🥤", "🍺", "🍓", "🍍"];

// Quitar la piña (🍍)
const indexPina = emotes2.indexOf("🍍");
if (indexPina !== -1) {
    emotes2.splice(indexPina, 1); // Elimina la piña del array
}

console.log(emotes2); // Muestra: ["🍕", "🍔", "🍟", "🥤", "🍺", "🍓"]

// Array original con fresas
let emotes3 = ["🍕", "🍔", "🍟", "🥤", "🍺", "🍓", "🍍"];

// Reemplazar todas las fresas por, por ejemplo, manzanas 🍏
emotes3 = emotes3.map(item => item === "🍓" ? "🍏" : item);

console.log(emotes3); // Muestra: ["🍕", "🍔", "🍟", "🥤", "🍺", "🍏", "🍍"]

// Array con hamburguesas
let emotes4 = ["🍕", "🍔", "🍟", "🥤", "🍺", "🍓", "🍍"];

// Añadir un nuevo emote después de cada "🍔"
for (let i = 0; i < emotes4.length; i++) {
    if (emotes4[i] === "🍔") {
        emotes4.splice(i + 1, 0, "🍟"); // Añadir 🍟 inmediatamente después de 🍔
        i++; // Saltar el índice siguiente para no añadir el mismo emote repetidamente
    }
}

console.log(emotes4); // Muestra: ["🍕", "🍔", "🍟", "🍟", "🥤", "🍺", "🍓", "🍍"]

// Array de cartas
let cartas = ["♠️", "♥️", "♦️", "♣️"];

// Añadir una carta comodín (joker) entre cada dos cartas
for (let i = 1; i < cartas.length; i++) {
    cartas.splice(i, 0, "🃏"); // Añadir el comodín (joker) en la posición i
    i++; // Asegurarnos de no añadir comodín entre cartas ya modificadas
}

console.log(cartas); // Muestra: ["♠️", "🃏", "♥️", "🃏", "♦️", "🃏", "♣️"]
