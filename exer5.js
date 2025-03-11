// Función para mostrar el mes según el número introducido
function mostrarMes(mes) {
    switch(mes) {
        case 1:
            console.log("Enero");
            break;
        case 2:
            console.log("Febrero");
            break;
        case 3:
            console.log("Marzo");
            break;
        case 4:
            console.log("Abril");
            break;
        case 5:
            console.log("Mayo");
            break;
        case 6:
            console.log("Junio");
            break;
        case 7:
            console.log("Julio");
            break;
        case 8:
            console.log("Agosto");
            break;
        case 9:
            console.log("Septiembre");
            break;
        case 10:
            console.log("Octubre");
            break;
        case 11:
            console.log("Noviembre");
            break;
        case 12:
            console.log("Diciembre");
            break;
        default:
            console.log("Número de mes inválido. Introduce un número entre 1 y 12.");
    }
}

// Llamada a la función con un número (1-12)
mostrarMes(3); // Muestra: Marzo

// Función para transformar el número en formato string a número
function convertirStringANumero(numStr) {
    switch(numStr) {
        case "1":
            console.log(1);
            break;
        case "2":
            console.log(2);
            break;
        case "3":
            console.log(3);
            break;
        case "4":
            console.log(4);
            break;
        case "5":
            console.log(5);
            break;
        default:
            console.log("Por favor, introduce un número del 1 al 5 en formato string.");
    }
}

// Llamada a la función con un string que representa un número
convertirStringANumero("3"); // Muestra: 3
