// Obtener los elementos del DOM
const eatButton = document.getElementById('eatButton') as HTMLButtonElement;
const playButton = document.getElementById('playButton') as HTMLButtonElement;
const fightButton = document.getElementById('fightButton') as HTMLButtonElement;
const sleepButton = document.getElementById('sleepButton') as HTMLButtonElement;

const healthBar = document.getElementById('healthBar') as HTMLSpanElement;
const happinessBar = document.getElementById('happinessBar') as HTMLSpanElement;
const tirednessBar = document.getElementById('tirednessBar') as HTMLSpanElement;
const fightBar = document.getElementById('fightBar') as HTMLSpanElement;

// Inicialización de los valores de las barras
let health = 30;
let happiness = 20;
let tiredness = 0;
let fightEnergy = 50;  // Esta es la barra de lucha

// Función para actualizar las barras de progreso
function updateBars() {
  healthBar.style.width = `${health}%`;
  happinessBar.style.width = `${happiness}%`;
  tirednessBar.style.width = `${tiredness}%`;
  fightBar.style.width = `${fightEnergy}%`;

  // Actualizar colores en función de los valores de las barras
  if (health < 30) {
    healthBar.style.backgroundColor = 'red';
  } else {
    healthBar.style.backgroundColor = 'green';
  }

  if (happiness < 30) {
    happinessBar.style.backgroundColor = 'red';
  } else {
    happinessBar.style.backgroundColor = 'yellow';
  }

  if (tiredness > 70) {
    tirednessBar.style.backgroundColor = 'darkred';
  } else {
    tirednessBar.style.backgroundColor = 'red';
  }

  if (fightEnergy < 30) {
    fightBar.style.backgroundColor = 'darkblue';
  } else {
    fightBar.style.backgroundColor = 'blue';
  }
}

// Función para manejar la acción de comer
function eat() {
  health = Math.min(100, health + 10);
  happiness = Math.min(100, happiness + 5);
  tiredness = Math.min(100, tiredness + 5);  // Comer también aumenta un poco el cansancio
  fightEnergy = Math.min(100, fightEnergy + 10);  // Comer también recarga energía de lucha
  updateBars();
}

// Función para manejar la acción de jugar
function play() {
  health = Math.max(0, health - 5);
  happiness = Math.min(100, happiness + 15);
  tiredness = Math.min(100, tiredness + 10);
  fightEnergy = Math.max(0, fightEnergy - 5);  // Jugar gasta algo de energía de lucha
  updateBars();
}

// Función para manejar la acción de luchar
function fight() {
  if (fightEnergy <= 0) {
    alert("¡No tienes suficiente energía de lucha!");
    return;  // No puedes luchar si no tienes energía de lucha
  }

  // Simulación de la lucha con un resultado aleatorio
  const fightResult = Math.random(); // Genera un número aleatorio entre 0 y 1

  if (fightResult < 0.5) {
    // Si el número es menor que 0.5, la lucha fue difícil para el Tamagotchi
    health = Math.max(0, health - 20);
    happiness = Math.max(0, happiness - 10);
    tiredness = Math.min(100, tiredness + 25);
    fightEnergy = Math.max(0, fightEnergy - 15); // Reduce energía de lucha
    alert("¡Lucha difícil! El Tamagotchi está herido y cansado.");
  } else {
    // Si el número es mayor que 0.5, la lucha fue más favorable
    health = Math.max(0, health - 10);
    happiness = Math.max(0, happiness - 5);
    tiredness = Math.min(100, tiredness + 15);
    fightEnergy = Math.max(0, fightEnergy - 10); // Reduce energía de lucha
    alert("¡Lucha exitosa! El Tamagotchi ha ganado, pero está cansado.");
  }

  updateBars();
}

// Función para manejar la acción de dormir
function sleep() {
  health = Math.min(100, health + 15);
  happiness = Math.min(100, happiness + 10);
  tiredness = Math.max(0, tiredness - 30);  // Dormir reduce el cansancio
  fightEnergy = Math.min(100, fightEnergy + 20); // Dormir recarga energía de lucha
  updateBars();
}

// Asignar eventos a los botones
eatButton.addEventListener('click', eat);
playButton.addEventListener('click', play);
fightButton.addEventListener('click', fight);
sleepButton.addEventListener('click', sleep);

// Inicializar las barras al cargar la página
updateBars();
