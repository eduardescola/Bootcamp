// Función para mostrar el mes del año basado en un número (1 al 12)
function obtenerMes(numero: number): string {
    let mes: string;
  
    switch (numero) {
      case 1:
        mes = "Enero";
        break;
      case 2:
        mes = "Febrero";
        break;
      case 3:
        mes = "Marzo";
        break;
      case 4:
        mes = "Abril";
        break;
      case 5:
        mes = "Mayo";
        break;
      case 6:
        mes = "Junio";
        break;
      case 7:
        mes = "Julio";
        break;
      case 8:
        mes = "Agosto";
        break;
      case 9:
        mes = "Septiembre";
        break;
      case 10:
        mes = "Octubre";
        break;
      case 11:
        mes = "Noviembre";
        break;
      case 12:
        mes = "Diciembre";
        break;
      default:
        mes = "Número no válido. Ingresa un número entre 1 y 12.";
        break;
    }
  
    return mes;
  }
  
  // Ejemplo de uso
  const mes = obtenerMes(5); // Cambia el número para probar otros meses
  console.log("El mes es:", mes);

  // Función que convierte un número en texto a un número en valor numérico
function convertirANumero(texto: string): number {
    let numero: number;
  
    switch (texto) {
      case "uno":
        numero = 1;
        break;
      case "dos":
        numero = 2;
        break;
      case "tres":
        numero = 3;
        break;
      case "cuatro":
        numero = 4;
        break;
      case "cinco":
        numero = 5;
        break;
      default:
        numero = -1; // Indica que el número no es válido
        break;
    }
  
    return numero;
  }
  
  // Ejemplo de uso
  const numero = convertirANumero("tres"); // Cambia el texto para probar otros números
  console.log("El número es:", numero);
  