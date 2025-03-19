// Obtener los elementos del DOM
const jokeButton = document.getElementById('jokeButton') as HTMLButtonElement;
const jokeText = document.getElementById('jokeText') as HTMLParagraphElement;

// Función para obtener un chiste de la API de Chuck Norris
async function fetchJoke() {
  try {
    // Realizar una solicitud a la API de Chuck Norris
    const response = await fetch('https://api.chucknorris.io/jokes/random');
    
    // Verificar si la respuesta es correcta
    if (!response.ok) {
      throw new Error('Error al obtener el chiste');
    }

    const data = await response.json();
    
    // Mostrar el chiste en el HTML
    jokeText.textContent = data.value;
  } catch (error) {
    console.error('Error:', error);
    jokeText.textContent = 'Ocurrió un error al obtener el chiste.';
  }
}

// Asignar la acción de obtener un nuevo chiste al hacer clic en el botón
jokeButton.addEventListener('click', fetchJoke);

// Obtener un chiste inicial al cargar la página
fetchJoke();
