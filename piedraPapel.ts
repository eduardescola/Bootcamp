// Obtener los elementos HTML
const piedra = document.getElementById('piedra') as HTMLElement;
const papel = document.getElementById('papel') as HTMLElement;
const tijera = document.getElementById('tijera') as HTMLElement;

const resultadoJugador = document.getElementById('resultadoJugador') as HTMLElement;
const resultadoComputadora = document.getElementById('resultadoComputadora') as HTMLElement;
const mensajeResultado = document.getElementById('mensajeResultado') as HTMLElement;

// Opciones del juego
const opciones = ['piedra', 'papel', 'tijera'];

// Función para la computadora elija una opción aleatoria
function obtenerOpcionComputadora(): string {
  const indiceAleatorio = Math.floor(Math.random() * 3); // Elegir entre 0, 1, o 2
  return opciones[indiceAleatorio];
}

// Función para determinar el resultado del juego
function determinarGanador(jugador: string, computadora: string): string {
  if (jugador === computadora) {
    return '¡Es un empate!';
  }

  if (
    (jugador === 'piedra' && computadora === 'tijera') ||
    (jugador === 'papel' && computadora === 'piedra') ||
    (jugador === 'tijera' && computadora === 'papel')
  ) {
    return '¡Ganaste!';
  } else {
    return '¡Perdiste!';
  }
}

// Función para manejar la selección del jugador
function manejarSeleccion(jugador: string): void {
  // Mostrar la opción seleccionada por el jugador
  resultadoJugador.textContent = `Tú seleccionaste: ${jugador}`;

  // La computadora hace su elección
  const computadora = obtenerOpcionComputadora();
  resultadoComputadora.textContent = `La computadora seleccionó: ${computadora}`;

  // Determinar el resultado
  const resultado = determinarGanador(jugador, computadora);
  mensajeResultado.textContent = resultado;
}

// Agregar los eventos de clic a los íconos
piedra.addEventListener('click', () => manejarSeleccion('piedra'));
papel.addEventListener('click', () => manejarSeleccion('papel'));
tijera.addEventListener('click', () => manejarSeleccion('tijera'));
