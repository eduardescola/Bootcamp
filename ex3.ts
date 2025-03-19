// Función que retorna "cara" si el valor es 1 y "cruz" si el valor es 0
function lanzarMoneda(): string {
    const resultado = Math.round(Math.random()); // Genera 0 o 1 aleatoriamente
    if (resultado === 1) {
      return "Cara";
    } else {
      return "Cruz";
    }
  }
  
  // Invocamos la función y mostramos el resultado por consola
  console.log(lanzarMoneda());
  