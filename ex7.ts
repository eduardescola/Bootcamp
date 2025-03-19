// Función para sustituir "A" por "O" en un string
function sustituirAporO(texto: string): string {
    return texto.replace(/a/gi, 'o'); // 'g' es para reemplazar todas las ocurrencias, 'i' para ignorar mayúsculas y minúsculas
  }
  
  // Ejemplo de uso
  const textoModificado = sustituirAporO("Academia");
  console.log(textoModificado); // Imprime "Ocodemia"

  // Función que comprueba si un string empieza con "aca"
function empiezaConAca(texto: string): boolean {
    return texto.toLowerCase().startsWith("aca"); // Convertimos a minúsculas para hacer una comparación insensible a mayúsculas
  }
  
  // Llamadas a la función
  console.log(empiezaConAca("academia")); // true
  console.log(empiezaConAca("escuela"));  // false

  // Función que saluda tres veces utilizando métodos de Strings
function saludarTresVeces(saludo: string): void {
    // Repetir el saludo tres veces utilizando el método repeat
    console.log(saludo.repeat(3));
  }
  
  // Llamada a la función pasando "Hola"
  saludarTresVeces("Hola ");
  