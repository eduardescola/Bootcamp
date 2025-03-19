function promptNombre() {
    // Usamos prompt para pedir al usuario su nombre
    let nombre: string | null = prompt("¿Cuál es tu nombre?");
  
    // Si el nombre no es null (es decir, si el usuario no canceló), mostramos el alert
    if (nombre !== null) {
      alert("Nombre ingresado: " + nombre);
    } else {
      alert("No se ingresó un nombre.");
    }
  }
  
  promptNombre(); // Llamada a la función para solicitar el nombre y mostrar el alert
  