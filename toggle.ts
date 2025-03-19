// Obtener el elemento del párrafo y los botones
const parrafo = document.getElementById('texto') as HTMLParagraphElement;
const botonRojo = document.getElementById('botonRojo') as HTMLButtonElement;
const botonAzul = document.getElementById('botonAzul') as HTMLButtonElement;

// Variables de estado para los toggles
let rojoActivo = false;
let azulActivo = false;

// Función para alternar el color rojo
botonRojo.addEventListener('click', () => {
  rojoActivo = !rojoActivo;
  if (rojoActivo) {
    parrafo.style.color = 'red';
  } else {
    parrafo.style.color = '';
  }
});

// Función para alternar el color azul
botonAzul.addEventListener('click', () => {
  azulActivo = !azulActivo;
  if (azulActivo) {
    parrafo.style.color = 'blue';
  } else {
    parrafo.style.color = '';
  }
});
