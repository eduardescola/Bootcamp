let numero = 1;
let i = 0;
do {
    if (i === 0) {
        i++;
        numero--;
        console.log(numero);
    } else {
        numero++;
        console.log(numero);
    }
} while (numero < 5);

/*
Número de iteraciones: 6

Cuando entra en el if:

Solo entra en el if en la primera iteración, cuando i === 0.
Cuando entra en el else:

En todas las subsecuentes iteraciones (de la 2ª a la 6ª)

En la primera iteración, imprime 0 debido al if.
En las siguientes iteraciones (del 2º al 6º), imprime los valores de numero desde 1 hasta 5, como resultado del bloque else.

El programa hace esto
0
1
2
3
4
5

*/