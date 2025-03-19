// Obtenemos los botones del DOM
const wButton = document.getElementById('wButton') as HTMLButtonElement;
const aButton = document.getElementById('aButton') as HTMLButtonElement;
const sButton = document.getElementById('sButton') as HTMLButtonElement;
const dButton = document.getElementById('dButton') as HTMLButtonElement;
const eButton = document.getElementById('eButton') as HTMLButtonElement;
const yButton = document.getElementById('yButton') as HTMLButtonElement;

// Sonidos de los instrumentos asociados a las teclas
const soundW = new Audio('sounds/Darbuka_06_76_SP.mp3');  // Asegúrate de usar tu propio archivo de sonido
const soundA = new Audio('sounds/Darbuka_18_76_SP.mp3');
const soundS = new Audio('sounds/Darbuka_42_76_SP.mp3');
const soundD = new Audio('sounds/Darbuka_48_76_SP.mp3');
const soundE = new Audio('sounds/Darbuka_66_76_SP.mp3');
const soundY = new Audio('sounds/Darbuka_105_76_SP.mp3');

// Función para tocar un sonido cuando se presiona un botón o una tecla
function playSound(button: HTMLButtonElement, sound: HTMLAudioElement) {
  // Cambiar el estilo del botón cuando se presiona
  button.classList.add('active');
  
  // Reproducir el sonido
  sound.play();
  
  // Eliminar la clase activa después de un pequeño tiempo (cuando el sonido termine)
  setTimeout(() => {
    button.classList.remove('active');
  }, 300);  // Duración del sonido o de la animación
}

// Eventos para los botones
wButton.addEventListener('click', () => playSound(wButton, soundW));
aButton.addEventListener('click', () => playSound(aButton, soundA));
sButton.addEventListener('click', () => playSound(sButton, soundS));
dButton.addEventListener('click', () => playSound(dButton, soundD));
eButton.addEventListener('click', () => playSound(eButton, soundE));

// Función para manejar las teclas presionadas
function handleKeyPress(event: KeyboardEvent) {
  switch (event.key) {
    case 'w':
      playSound(wButton, soundW);
      break;
    case 'a':
      playSound(aButton, soundA);
      break;
    case 's':
      playSound(sButton, soundS);
      break;
    case 'd':
      playSound(dButton, soundD);
      break;
    case 'e':
      playSound(eButton, soundE);
      break;
    default:
      break;
  }
}

// Escuchar los eventos de teclado
document.addEventListener('keydown', handleKeyPress);
